import React, { useEffect, useState } from 'react';
import image from '../../images/soccer.jpg';
import Teams from '../Teams/Teams';
import './Home.css';

const Home = () => {
    const [teams, setTeams] = useState([]);

    useEffect(() => {
        const url = 'https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League';
        fetch(url)
            .then(res => res.json())
            .then(data => setTeams(data.teams));
    }, []);
    
    return (
        <div className='container'>
            <div className='home-banner'>
                <img src={image} alt="" />
            </div>
            <div className='card-wrapper d-flex flex-wrap justify-content-around'>
                {
                    teams.map(team => <Teams key={team.idTeam} team={team}></Teams>)
                }
            </div>
        </div>
    );
};

export default Home;