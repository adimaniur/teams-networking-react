/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./Table.css";
import { createTeamRequest, deleteTeamRequest, getTeamsRequest } from "./Middleware";

type Team = {
  id: string;
  url: string;
  promotion: string;
  members: string;
  name: string;
};

type Props = {
  teams: Team[];
  loading: boolean;
  team: Team;
};

type Actions = {
  deleteTeam(id: string): void;
  save(): void;
  inputChange(name: string, value: string): void;
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
          {props.teams.map(({ id, url, promotion, members, name }) => {
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
                  <a className="btn-link btn-edit">✏️</a>
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
export class TeamsTableWrapper extends React.Component<WrapperProps, State> {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      teams: [],
      team: { id: "", name: "", promotion: "", url: "", members: "" }
    };
  }

  async componentDidMount(): Promise<void> {
    this.loadTeams();
  }

  async loadTeams() {
    const teams = await getTeamsRequest();
    setTimeout(() => {
      this.setState({
        loading: false,
        teams: teams
      });
    });
  }

  render() {
    return (
      <TeamsTable
        teams={this.state.teams}
        loading={this.state.loading}
        team={this.state.team}
        deleteTeam={async id => {
          const status = await deleteTeamRequest(id);
          console.warn(status);
          this.loadTeams();
        }}
        save={async () => {
          const team = this.state.team;
          const status = await createTeamRequest(team);
          console.warn(status);
          this.loadTeams();
        }}
        inputChange={(name: string, value: string) => {
          this.setState(state => ({
            team: {
              ...state.team,
              [name]: value
            }
          }));
        }}
      />
    );
  }
}
