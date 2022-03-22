import React from 'react';
import { useHistory } from 'react-router-dom';
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
        <div className="col d-flex justify-content-center">
            <div className="card rounded-5" style={{ width: "16rem" }}>
                <img src={strTeamBadge} className="card-img-top" alt="..." />
                <div className="card-body text-center">
                    <h4 className="card-title">{strTeam}</h4>
                    <p className="card-text">Sports Type: {strSport}</p>
                    <button
                        onClick={() => handleClick(idTeam)}
                        className="btn btn-danger">
                        Explore <FontAwesomeIcon icon={faArrowRight} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Teams;