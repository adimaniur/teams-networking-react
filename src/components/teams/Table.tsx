/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./Table.css";
import { type } from "os";
import { getTeamsRequest } from "./Middleware";

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
};

export function TeamsTable(props: Props) {
  return (
    <form id="editForm" method="post" action="">
      <div className="aside">
        <div className="aside-content">
          <div className="aside-search">
            <span>🔍</span>
            <input type="search" name="search" id="search" />
          </div>
          <div className="aside-row">
            <input type="text" name="promotion" id="promotion" placeholder="Add skill" required />
          </div>
          <div className="aside-row">
            <input type="text" name="members" id="members" placeholder="Add member" required />
          </div>
          <div className="aside-row">
            <input type="text" name="project" id="project" placeholder="Add project name" required />
          </div>
          <div className="aside-row">
            <input type="text" name="url" id="url" placeholder="Add URL" required />
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
                  <a data-id={id} className="btn-link btn-edit">
                    ✏️
                  </a>
                  <a data-id={id} className="btn-link btn-delete">
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
};
export class TeamsTableWrapper extends React.Component<WrapperProps, State> {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      teams: []
    };
  }

  async componentDidMount(): Promise<void> {
    const teams = await getTeamsRequest();
    setTimeout(() => {
      this.setState({
        loading: false,
        teams: teams
      });
    });
  }

  render() {
    return <TeamsTable teams={this.state.teams} loading={this.state.loading} />;
  }
}
