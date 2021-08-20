import React from 'react'

export default function SearchCountry() {
    return (
        <div >
            <p style={typography}>Search a Country</p>
            <form className="searchCountry">
              <select style={selectOption}>
                <option>Rwanda</option>
              </select>
              <input type="date" style={dateInput}/>
              <button style={btn}>SUBMIT</button>
            </form>
        </div>
    )
}
const btn={
  border:"none",
  borderRadius:"2px",
  height:"2.7em",
  width:"7.3em",
  backgroundColor:"#1E776E",
  color:"#fff"
}
const dateInput={
  border:"none",
  width:"12em"
}
const selectOption={
   border:"none",
   background:"#fff",
   width:"14em"

}
const typography={
  position:"relative",
  top:"9em",
  color:"#fff",
  left:"57em",
  fontSize:"10px"
}
