import React from 'react'
import { useEffect , useState } from 'react';
import { connect } from 'react-redux';
import { fecthPosts,createPosts } from '../actions/postAction';
function SearchCountry(props) {
  const [countries,setCountries]=useState([]);
    // useEffect(){
    //   //to be able to call that function it will be accessed through props
    //   props.fetchPosts();
    // }

    fetch('https://corona.lmao.ninja/v2/countries?yesterday&sort')
    .then(res=>res.json())
    .then(data=>setCountries(data));

    // https://documenter.getpostman.com/view/11144369/Szf6Z9B3?version=latest
  let countriesCount=  countries.map((c,index)=>(<option key={index}>{c.country}</option>));
    return (
        <div >
            <p style={typography}>Search a Country</p>

            <form className="searchCountry" >
              <select style={selectOption} >
                  {countriesCount}
              </select>
              <input type="date" style={dateInput}/>
              <button style={btn}>SUBMIT</button>
            </form>

        </div>
    )
}
//maps state to props
const  mapStateToProps=state=>({
  posts:state.posts.items
});

//for the first bracket on connect it is where we want to map our state to our properties
export default connect(mapStateToProps, fecthPosts)(SearchCountry);

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
