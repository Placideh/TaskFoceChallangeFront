import React from 'react'

export default function Cumulative() {
    return (
        <div className="cumulative">
            <p style={heading}>2,188,881</p>
            <h3 style={typography}>Cumulatively</h3>
        </div>
    )
}
const heading={
  color:"#2FC8B8",
  fontSize:"3em",
  position:"absolute",
  top:"-0.5em",
  left:"5em"
}
const typography={
  color:"#fff",
  position:"absolute",
  top:"6em",
  left:"24em",
  fontSize:"13px"

}
