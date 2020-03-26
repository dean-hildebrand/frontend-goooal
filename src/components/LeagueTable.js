import React from "react";
import { Link } from 'react-router-dom'

class LeagueTable extends React.Component {


  render() {
    console.log(this.props.leagueTable, "League Table:", this.props);
    return (
      <div>
        <table className="table table-hover league-table">
          <thead> Premier League Table</thead>
          <tbody>

            <tr>
              <th className="tg-cly1">Position</th>
              <th className="tg-0lax">Team</th>
              <th className="tg-0lax">Played</th>
              <th className="tg-0lax">Won</th>
              <th className="tg-0lax">Draw</th>
              <th className="tg-0lax">Lost</th>
              <th className="tg-0lax">Points</th>
              <th className="tg-0lax">For</th>
              <th className="tg-0lax">Against</th>
              <th className="tg-0lax">Diff</th>
            </tr>
            { this.props.leagueTable.map(team => (
              <tr>
                <td className="tg-0lax">{team.position}</td>
                <td className="tg-0lax"><span><img src={team.team.crestUrl} style={{width:20, height: 20}}/></span>{team.team.name}</td>
                <td className="tg-0lax">{team.playedGames}</td>
                <td className="tg-0lax">{team.won}</td>
                <td className="tg-0lax">{team.draw}</td>
                <td className="tg-0lax">{team.lost}</td>
                <td className="tg-0lax">{team.points}</td>
                <td className="tg-0lax">{team.goalsFor}</td>
                <td className="tg-0lax">{team.goalsAgainst}</td>
                <td className="tg-0lax">{team.goalDifference}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default LeagueTable;
