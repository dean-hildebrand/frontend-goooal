import React from "react";
import TeamShow from "./TeamShow";
import LeagueTable from "./LeagueTable";
import { Link } from "react-router-dom";

// {this.props.news.map(article => (
//   <div>
//     <h5>{article.title}</h5>
//     <img
//       src={article.image}
//       alt={article.url}
//       style={{ width: 50, height: 50 }}
//     />
//     <p>{article.description}</p>
//   </div>
// ))}


class HomePage extends React.Component {
  render() {
    console.log("HomePage props:", this.props);
    return (
      <div>
        {this.props.allTeams.map(team => (
          <Link to={`/teams/${team.id}`}>
            <img
              className="rest-card-img"
              key={team.id}
              style={{ width: 50, height: 50 }}
              alt={team.shortName}
              src={team.crestUrl}
            />
          </Link>
        ))}




        <table>
          <thead>Top Five Teams</thead>
          <tbody>
            <tr>
              <th className="tg-cly1">Position</th>
              <th className="tg-0lax">Team</th>
              <th className="tg-0lax">Played</th>
              <th className="tg-0lax">Won</th>
              <th className="tg-0lax">Points</th>
            </tr>
            {this.props.top5Table.map(team => (
              <tr>
                <td className="tg-0lax">{team.position}</td>
                <td className="tg-0lax">{team.team.name}</td>
                <td className="tg-0lax">{team.playedGames}</td>
                <td className="tg-0lax">{team.won}</td>
                <td className="tg-0lax">{team.Points}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default HomePage;
