import { FETCH_POSTS, NEW_POST } from './types';

//here we have to export  a function
//we will be using thunk in order to make the operation asyn
//dispatch it is like a resolver or a promise whenever we want the data we call dispatch
export const  fecthPosts=()=>dispatch=>{
    fetch('https://corona.lmao.ninja/v2/countries?yesterday&sort')
    .then(res=>res.json())
    .then(data=>dispatch({
      type:FETCH_POSTS,
      payload:data
    }));

};

export const  createPosts=(postData)=>dispatch=>{
    fetch('https://corona.lmao.ninja/v2/countries/Italy?yesterday&strict&query%20',{
        method:"POST",
        headers:{
          'content-type':'application/json'
        },
        body:JSON.stringify(postData)

    }
  )
    .then(res=>res.json())
    .then(data=>dispatch({
      type:NEW_POST,
      payload:data
    }));

}
