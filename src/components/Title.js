import React from 'react'

export default function Title() {
    return (
        <div style={styles}>
            <h3 style={title}>COVICALC</h3>
            <h1 style={heading1}>UPDATES </h1>

            <button style={btn}>CONTACT</button>
        </div>
    )
}
const styles={
  position:"relative",
  top:"3em",
  display:"flex",
  justifyContent:"space-between",



}
const heading1={
  color:"#fff",
  position:"relative",
  top:"2em",
  left:"-2em"
}
const title={
    fontFamily:"Bebas Neue, Bold",
    letterSpacing:"0.2em",
    boxSizing:"border-box",
    position:"relative",
    left:"4.5em",
    color:"#fff"
}
const btn={
  boxSizing:"border-box",
  position:"relative",
  right:"7em",
  color:"red",
  height:"2em",
  width:"10em",
  color:"#fff",
  backgroundColor:"#1E776E",
  border:"none",
  borderRadius:"5px",
  top:"1em"
}
