import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const TeamData = () => {
    const { id } = useParams();
    const [teamDetails, setTeamDetails] = useState([]);

    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setTeamDetails(data.teams));
    }, [id]);

    const { strTeamBanner, strTeam, intFormedYear, strCountry, strSport, strGender } = teamDetails[0] || {};
    
    return (
        <div>
            <div>
                <img src={strTeamBanner} alt=""/>
            </div>
            <div>
                <h3>{strTeam}</h3>
                <h3>Founded: {intFormedYear}</h3>
                <h3>Country: {strCountry}</h3>
                <h3>Sport Type: {strSport}</h3>
                <h3>Gender: {strGender}</h3>
            </div>
        </div>
    );
};

export default TeamData;