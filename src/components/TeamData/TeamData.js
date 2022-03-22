import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './TeamData.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFlag, faFutbol, faLandmark, faVenusMars } from '@fortawesome/free-solid-svg-icons';
import { faFacebookSquare, faTwitterSquare, faYoutubeSquare } from '@fortawesome/free-brands-svg-icons';
import maleImg from '../../images/male.png';
import femaleImg from '../../images/female.png';

const TeamData = () => {
    const { id } = useParams();
    const [teamDetails, setTeamDetails] = useState([]);

    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/2/lookupteam.php?id=${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setTeamDetails(data.teams));
    }, [id]);

    const { strTeamBanner, strTeam, intFormedYear, strCountry, strSport, strGender, strDescriptionEN, strDescriptionDE, strFacebook, strTwitter, strYoutube } = teamDetails[0] || {};

    const genderImage = strGender === 'Male' ? maleImg : femaleImg; //Conditional formatting used.

    return (
        <div className='container'>

            {/* Dynamic Banner Image */}
            <div className='banner-image'>
                <img src={strTeamBanner} alt="" />
            </div>

            {/* Card Area Starts */}
            <div className="card mb-3 mt-3 teamInfo-area" style={{ maxWidth: "1170px" }}>
                <div className="row g-0">
                    <div className="col-md-7">
                        <div className="card-body ps-4">
                            <h2 className="card-title mb-5">{strTeam}</h2>
                            <p className="card-text"><FontAwesomeIcon icon={faLandmark} /> Founded: {intFormedYear}</p>
                            <p className="card-text"><FontAwesomeIcon icon={faFlag} /> Country: {strCountry}</p>
                            <p className="card-text"><FontAwesomeIcon icon={faFutbol} /> Sport Type: {strSport}</p>
                            <p className="card-text"><FontAwesomeIcon icon={faVenusMars} /> Gender: {strGender}</p>
                        </div>
                    </div>
                    {/* Dynamic Gender Image based on Gender */}
                    <div className="col-md-5 club-gender">
                        <img src={genderImage} alt="..." />
                    </div>
                </div>
            </div>
            {/* Card Area Ends */}

            {/* 2 Descriptions provided */}
            <div>
                <p style={{ padding: '10px 0px 20px 0px', color: 'white' }}>{strDescriptionEN}</p>
                <p style={{ color: 'white' }}>{strDescriptionDE}</p>
            </div>

            {/* Social Media Dynamic Icons using Font Awesome Icons*/}
            <div className='socialMedia-icon d-flex justify-content-center'>
                <div style={{ padding: '10px 20px 10px 20px' }}>
                    <a href={`https://${strTwitter}`} target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faTwitterSquare} size='3x' />
                    </a>
                </div>
                <div style={{ padding: '10px 20px 10px 20px' }}>
                    <a href={`https://${strFacebook}`} target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faFacebookSquare} size='3x' />
                    </a>
                </div>
                <div style={{ padding: '10px 20px 10px 20px' }}>
                    <a href={`https://${strYoutube}`} target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faYoutubeSquare} size='3x' />
                    </a>
                </div>
            </div>

        </div >
    );
};

export default TeamData;