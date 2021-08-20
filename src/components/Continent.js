import React from 'react'

export default function Continent() {
    return (
        <div>
            <h1 style={{textAlign:"center",marginBottom:"1em"}}>PER CONTINENTS</h1>
              <div className="continentContainer">
                <div className="continentBox">
                  <div className="innerContinentBox">
                    <h2>AFRICA</h2>
                    <h1>11,270</h1>
                    <h4>New Cases</h4>
                    <p>All Cases:22,188,881</p>
                  </div>
                  <div className="innerContinentBoxGreen">
                        <div style={styles}>
                        <h3>619</h3>
                        <h6>New Details</h6>
                        <p>Total deaths: 4,254</p>
                        </div>
                        <div>
                          <h3>619</h3>
                          <h6>New Details</h6>innerContinentBoxGreen
                          <p>Total deaths: 4,254</p>
                        </div>
                        <div>
                        <h3>619</h3>
                        <h6>New Details</h6>
                        <p>Total deaths: 4,254</p>
                      </div>
                  </div>
                </div>
                <div className="continentBox">
                  <div className="innerContinentBox">
                    <h2>AFRICA</h2>
                    <h1>11,270</h1>
                    <h4>New Cases</h4>
                    <p>All Cases:22,188,881</p>
                  </div>
                  <div className="innerContinentBoxGreen">
                        <div style={styles}>
                        <h3>619</h3>
                        <h6>New Details</h6>
                        <p>Total deaths: 4,254</p>
                        </div>
                        <div>
                          <h3>619</h3>
                          <h6>New Details</h6>
                          <p>Total deaths: 4,254</p>
                        </div>
                        <div>
                        <h3>619</h3>
                        <h6>New Details</h6>
                        <p>Total deaths: 4,254</p>
                      </div>
                  </div>
                </div>

                  </div>
        </div>
    )
}
const styles ={
  // border:"2px solid #ddd"
}
