import React from 'react'
import plc from "../images/plc1.jpeg";
export default function UserProfile() {
    return (
        <div className="userProfile">
            <div className="personalInfo">
              <img src={plc} width="80%" height="400" />
            </div>
            <div className="personalInfo info">
                <h1>Placide Uwizeye </h1>
                 <h3>Skills</h3>
                  <h5>HTML5</h5>
                  <h5>CSS3</h5>
                  <h5>JavaScript</h5>
                  <h5>ReactJs</h5>
            </div>
        </div>
    )
}
