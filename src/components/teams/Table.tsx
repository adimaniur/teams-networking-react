/* eslint-disable jsx-a11y/anchor-is-valid */
import "./Table.css";

export function TeamsTable(props) {
  return (
    <form id="editForm" method="post" action="" className={props.loading ? "loading-mask" : ""}>
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
      <table>
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

export function TeamsTableWrapper() {
  const teams = [
    {
      id: "86mq81630347385708",
      promotion: "js",
      members: "Matei Andreii",
      name: "JS/HTML Quiz",
      url: "https://github.com/nmatei/simple-quiz-app"
    },
    {
      id: "w2aal1630347411902",
      promotion: "react",
      members: "FastTrackIT Student",
      name: "Teams Networking Reacts",
      url: "https://github.com/nmatei/teams-networking-react"
    },
    {
      id: "fqt9ve1683212613979",
      promotion: "CSS",
      members: "Nicolae Matei",
      name: "Web Presentation",
      url: "https://github.com/nmatei/teams-networking-react"
    },
    {
      id: "5ialq1683212617966",
      promotion: "js",
      members: "Andrei Matei",
      name: "JS Quiz",
      url: "https://github.com/nmatei/teams-networking"
    },
    {
      id: "ymsek41683212623537",
      promotion: "HTML",
      members: "FastTrackIT Student",
      name: "Teams Networking Reacts",
      url: "https://github.com/nmatei/simple-quiz-app"
    },
    {
      id: "eqbg61683212638273",
      promotion: "react",
      members: "Andrei Nicolae",
      name: "Web Presentation",
      url: "https://github.com/nmatei/web-intro-presentation"
    },
    {
      id: "j2h02v1683212644982",
      promotion: "JS",
      members: "Matei",
      name: "Teams Networking Reacts",
      url: "https://github.com/nmatei/teams-networking"
    },
    {
      id: "ec2c341683212650563",
      promotion: "js",
      members: "FastTrackIT Student",
      name: "JS Quiz",
      url: "https://github.com/nmatei/simple-quiz-app"
    },
    {
      id: "n7qpnnh1683212664574",
      promotion: "react",
      members: "Matei Andrei",
      name: "Web Presentation",
      url: "https://github.com/nmatei/teams-networking-react"
    },
    {
      id: "v2h1tr1683212669945",
      promotion: "html",
      members: "Andrei Matei",
      name: "JS/HTML Quiz",
      url: "https://github.com/nmatei/teams-networking-react"
    },
    {
      id: "vqx5f41683212674485",
      promotion: "html",
      members: "Nicolae Matei",
      name: "Web Presentation",
      url: "https://github.com/nmatei/web-intro-presentation"
    },
    {
      id: "z1tjhk1683547111230",
      promotion: "js",
      members: "FastTrackIT Student",
      name: "JS/HTML/CSS Quiz",
      url: "https://github.com/nmatei/simple-quiz-app"
    },
    {
      id: "rp89fq1683547127012",
      promotion: "react",
      members: "Andrei Nicolae",
      name: "Teams Networking",
      url: "https://github.com/nmatei/teams-networking-react"
    },
    {
      id: "filp3w1683547150715",
      promotion: "js",
      members: "Matei Andrei",
      name: "JS Quiz",
      url: "https://github.com/nmatei/simple-quiz-app"
    },
    {
      id: "2sof11683547170772",
      promotion: "html",
      members: "Nicolae Matei",
      name: "Web Presentation",
      url: "https://github.com/nmatei/teams-networking-react"
    },
    {
      id: "cwmlzg1683547198533",
      promotion: "js",
      members: "Matei",
      name: "JS/HTML/CSS Quiz",
      url: "https://github.com/nmatei/web-intro-presentation"
    },
    {
      id: "nzaqjb1683547214072",
      promotion: "js",
      members: "FastTrackIT Student",
      name: "Web Presentation",
      url: "https://github.com/nmatei/simple-quiz-app"
    },
    {
      id: "hps6mb1683547625777",
      promotion: "html",
      members: "Nicolae Matei",
      name: "Web Presentation",
      url: "https://github.com/nmatei/simple-quiz-app"
    },
    {
      id: "5c12p61683547647961",
      promotion: "js",
      members: "Andrei Nicolae",
      name: "JS/HTML/CSS Quiz",
      url: "https://github.com/nmatei/simple-quiz-app"
    },
    {
      id: "e1ix71683547662261",
      promotion: "html",
      members: "FastTrackIT Student",
      name: "Teams Networking Reacts",
      url: "https://github.com/nmatei/teams-networking"
    },
    {
      id: "a62cdf1683547679807",
      promotion: "react",
      members: "Andrei Nicolae",
      name: "Web Presentation",
      url: "https://github.com/nmatei/web-intro-presentation"
    },
    {
      id: "64tkqs1683547689901",
      promotion: "JS",
      members: "Matei",
      name: "Teams Networking",
      url: "https://github.com/nmatei/simple-quiz-app"
    }
  ];

  // return TeamsTable({
  //   teams: teams
  // });

  return <TeamsTable teams={teams} loading={true} />;
}
