import React, { useEffect, useState } from 'react';
import image from '../../images/soccer.jpg';
import Teams from '../Teams/Teams';
import './Home.css';

const Home = () => {
    const [teams, setTeams] = useState([]);

    useEffect(() => {
        const url = 'https://www.thesportsdb.com/api/v1/json/2/search_all_teams.php?l=English%20Premier%20League';
        fetch(url)
            .then(res => res.json())
            .then(data => setTeams(data.teams));
    }, []);

    const headerImage = {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${image})`,
        backgroundPosition: 'center'
    };

    const headerTitle = {
        padding: '100px',
        textAlign: 'center',
        color: 'white'
    };

    return (
        <div className='container'>
            <div style={headerImage} className='home-banner'>
                <h1 style={headerTitle}>English Premiere League Elites</h1>
            </div>
            <div className="mt-5 pb-5">
                <div className='row row-cols-md-3 g-5'>
                    {
                        teams.map(team => <Teams key={team.idTeam} team={team}></Teams>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;