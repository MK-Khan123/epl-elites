import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './TeamData.css';
import maleImg from '../../images/male.png';
import femaleImg from '../../images/female.png';
import twitter from '../../images/twitter.png';
import facebook from '../../images/facebook.png';
import youtube from '../../images/youtube.png';

const TeamData = () => {
    const { id } = useParams();
    const [teamDetails, setTeamDetails] = useState([]);

    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setTeamDetails(data.teams));
    }, [id]);

    const { strTeamBanner, strTeam, intFormedYear, strCountry, strSport, strGender, strDescriptionEN, strDescriptionDE, strFacebook, strTwitter, strYoutube } = teamDetails[0] || {};

    const genderImage = strGender === 'Male' ? maleImg : femaleImg; // Due to data loading delay this code displays the image of female footballers first and then male footballers when strGender is equal to 'Male'.

    return (
        <div className='container'>

            {/* Dynamic Banner Image */}
            <div className='banner-image'>
                <img src={strTeamBanner} alt="" />
            </div>
            
            {/* Card Area Starts */}
            <div className="card mb-3" style={{ maxWidth: "1170px" }}>
                <div className="row g-0">
                    <div className="col-md-7">
                        <div className="card-body">
                            <h2 className="card-title">{strTeam}</h2>
                            <p className="card-text">Founded: {intFormedYear}</p>
                            <p className="card-text">Country: {strCountry}</p>
                            <p className="card-text">Sport Type: {strSport}</p>
                            <p className="card-text">Gender: {strGender}</p>
                        </div>
                    </div>
                    {/* Dynamic Gender Image based on Gender */}
                    <div className="col-md-5 teamDetails-card">
                        <img src={genderImage} alt="..." />
                    </div>
                </div>
            </div>
            {/* Card Area Ends */}

            {/* 2 Descriptions provided */}
            <div>
                <p>{strDescriptionEN}</p>
                <p>{strDescriptionDE}</p>
            </div>

            {/* Social Media Buttons */}
            <div className='socialMedia-icon'>
                <a href={`https://${strTwitter}`} target="_blank" rel="noopener noreferrer">
                    <img src={twitter} alt=""/>
                </a>
                <a href={`https://${strFacebook}`} target="_blank" rel="noopener noreferrer">
                    <img src={facebook} alt=""/>
                </a>
                <a href={`https://${strYoutube}`} target="_blank" rel="noopener noreferrer">
                    <img src={youtube} alt=""/>
                </a>
            </div>
        </div>
    );
};

export default TeamData;