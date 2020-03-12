import React from 'react'
// import { Link } from 'react-router-dom'


const TeamShow = (props) => {

  return(
    <div>
    { props.team ?
      <div>
    <img src={props.team.crestUrl} style={{width: 200, height: 200}} alt={props.team.shortName} />
    <h1>{props.team.full_name}</h1>
    <h3>{props.team.short_name}</h3>
    <h3>{props.team.tla}</h3>
    <p>{props.team.address}</p>
    <p>{props.team.phone}</p>
    <p>{props.team.website}</p>
    <p>{props.team.founded}</p>
    <p>{props.team.email}</p>
    <p>{props.team.club_colors}</p>
    <p>{props.team.venue}</p>

    </div> :
    null
  }

  <div>
    <h3>Squad:</h3>
    {props.players.map(p => (
      <div>
        <h5>Player:{p.name}</h5>
        <p>Position:{p.position}</p>
        <p>Nationality:{p.nationality}</p>
        <p>Role:{p.role}</p>
      </div>


    ))}
  </div>

    </div>
  )
}

export default TeamShow
