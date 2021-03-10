import React from 'react';
import { useHistory } from 'react-router-dom';
import './Teams.css';

const Teams = (props) => {
    const { strTeamBadge, strTeam, strSport, idTeam } = props.team;
    
    let history = useHistory();
    const handleClick = (teamId) => {
        const url = `/team/${teamId}`;
        history.push(url);
    }

    return (
        <div>
            <div>
                <img src={strTeamBadge} alt=""/>
            </div>
            <h2>{strTeam}</h2>
            <p>Sports type: {strSport}</p>
            <button onClick={() => handleClick(idTeam)}>Explore</button>
        </div>
    );
};

export default Teams;