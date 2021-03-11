import React from 'react';
import { useHistory } from 'react-router-dom';
import './Teams.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Teams = (props) => {
    const { strTeamBadge, strTeam, strSport, idTeam } = props.team;

    let history = useHistory();
    const handleClick = (teamId) => {
        const url = `/team/${teamId}`;
        history.push(url);
    }

    return (
        <div className="card card-gap" style={{ width: "18rem", borderRadius: '10px' }}>
            <img src={strTeamBadge} className="card-img-top" alt="..." />
            <div className="card-body">
                <h4 className="card-title">{strTeam}</h4>
                <p className="card-text">Sports Type: {strSport}</p>
                <button onClick={() => handleClick(idTeam)} className="btn btn-danger">Explore <FontAwesomeIcon icon={faArrowRight} /></button>
            </div>
        </div>
    );
};

export default Teams;