/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./Table.css";
import { createTeamRequest, deleteTeamRequest, getTeamsRequest, updateTeamRequest } from "./Middleware";
import { Team } from "./Models";

type Props = {
  teams: Team[];
  loading: boolean;
  team: Team;
};

type Actions = {
  deleteTeam(id: string): void;
  save(): void;
  inputChange(name: string, value: string): void;
  startEdit(team: Team): void;
  reset(): void;
};

export function TeamsTable(props: Props & Actions) {
  return (
    <form
      id="editForm"
      method="post"
      action=""
      onSubmit={e => {
        e.preventDefault();
        props.save();
      }}
      onReset={() => {
        props.reset();
      }}
    >
      <div className="aside">
        <div className="aside-content">
          <div className="aside-search">
            <span>🔍</span>
            <input type="search" name="search" id="search" />
          </div>
          <div className="aside-row">
            <input
              type="text"
              name="promotion"
              placeholder="Add skill"
              required
              value={props.team.promotion}
              onChange={e => {
                props.inputChange("promotion", e.target.value);
              }}
            />
          </div>
          <div className="aside-row">
            <input
              type="text"
              name="members"
              placeholder="Add member"
              required
              value={props.team.members}
              onChange={e => {
                props.inputChange("members", e.target.value);
              }}
            />
          </div>
          <div className="aside-row">
            <input
              type="text"
              name="project"
              placeholder="Add project name"
              required
              value={props.team.name}
              onChange={e => {
                props.inputChange("name", e.target.value);
              }}
            />
          </div>
          <div className="aside-row">
            <input
              type="text"
              name="url"
              placeholder="Add URL"
              required
              value={props.team.url}
              onChange={e => {
                props.inputChange("url", e.target.value);
              }}
            />
          </div>
          <div className="aside-buttons">
            <button className="btn-save" type="submit">
              Save
            </button>
            <button className="btn-reset" type="reset">
              Reset fields
            </button>
          </div>
          <div className="aside-delete-all">
            <div id="select-all-boxes">Check all rows</div>
            <div id="remove-all-boxes">
              <span>Delete</span>
            </div>
          </div>
        </div>
      </div>
      <table className={props.loading ? "loading-mask" : ""}>
        <thead>
          <tr>
            <th></th>
            <th>Skill</th>
            <th>Members</th>
            <th>Project name</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {props.teams.map(team => {
            const { id, url, promotion, members, name } = team;
            return (
              <tr key={id}>
                <td>
                  <input type="checkbox" name="selected" value={id} className="row-checkbox" />
                </td>
                <td className="team-promotion">{promotion}</td>
                <td className="team-members">{members}</td>
                <td>{name}</td>
                <td>
                  <a href={url} target="_blank" rel="noreferrer" className="btn-link btn-url">
                    🔗
                  </a>
                  <a
                    className="btn-link btn-edit"
                    onClick={() => {
                      props.startEdit(team);
                    }}
                  >
                    ✏️
                  </a>
                  <a
                    className="btn-link btn-delete"
                    onClick={() => {
                      props.deleteTeam(id);
                    }}
                  >
                    ❌
                  </a>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </form>
  );
}

type WrapperProps = {};
type State = {
  loading: boolean;
  teams: Team[];
  team: Team;
};

function getEmptyTeam(): Team {
  return {
    id: "",
    name: "",
    promotion: "",
    url: "",
    members: ""
  };
}

export class TeamsTableWrapper extends React.Component<WrapperProps, State> {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      teams: [],
      team: getEmptyTeam()
    };

    this.save = this.save.bind(this);
    this.deleteTeam = this.deleteTeam.bind(this);
    this.inputChange = this.inputChange.bind(this);
    this.startEdit = this.startEdit.bind(this);
    this.reset = this.reset.bind(this);
  }

  async componentDidMount(): Promise<void> {
    this.loadTeams();
  }

  async loadTeams() {
    const teams = await getTeamsRequest();
    this.setState({
      loading: false,
      teams: teams || []
    });
  }

  private async deleteTeam(id: string) {
    this.setState({ loading: true });
    await deleteTeamRequest(id);
    this.setState(state => ({
      loading: false,
      teams: state.teams.filter(team => team.id !== id)
    }));
  }

  private inputChange(name: string, value: string) {
    this.setState(state => ({
      team: {
        ...state.team,
        [name]: value
      }
    }));
  }

  private async save() {
    this.setState({
      loading: true
    });
    const team = this.state.team;
    let id, status;
    if (team.id) {
      status = await updateTeamRequest(team);
    } else {
      status = await createTeamRequest(team);
      id = status.id;
    }

    this.setState(state => ({
      loading: false,
      teams: team.id ? state.teams.map(t => (t.id === team.id ? { ...team } : t)) : [...state.teams, { ...team, id }],
      team: getEmptyTeam()
    }));
  }

  private startEdit(team: Team) {
    this.setState({
      team
    });
  }

  private reset() {
    this.setState({
      team: getEmptyTeam()
    });
  }

  render() {
    return (
      <TeamsTable
        teams={this.state.teams}
        loading={this.state.loading}
        team={this.state.team}
        deleteTeam={this.deleteTeam}
        save={this.save}
        startEdit={this.startEdit}
        reset={this.reset}
        inputChange={this.inputChange}
      />
    );
  }
}
