import React, { useEffect, useState } from 'react'

export default function Joker() {

let url = "https://official-joke-api.appspot.com/random_joke";

let [joke,SetJoke] = useState({});

    let getNewJoke = async ()=>{
        
      let res =  await fetch(url);
        let response =await res.json();
        console.log(response);
        SetJoke({que:response.setup, ans: response.punchline})

    }



//for firsttime
useEffect(()=>{
    // let getNewJoke = async ()=>{
        
    //     let res =  await fetch(url);
    //       let response =await res.json();
    //       console.log(response);
    //       SetJoke({que:response.setup, ans: response.punchline})
  
    //   }
  
      getNewJoke();
  


},[]);



  return (
    <div >
        <h1 className='text-center bg-slate-200 font-bold text-3xl p-3'>your jokes are here......</h1>
      <div className="border-2 border-blue-200 p-2 shadow-lg shadow-black w-11/12 sm:w-1/2 mx-auto  text-white font-bold rounded-md my-4">

      <h4 className='text-center my-4'><span className="text-black">Que.. </span>{joke.que}</h4>
      <h4 className='text-center'><span className="text-black">Ans.. </span>{joke.ans}</h4>
      </div>
      <div className="flex justify-center">

      <button onClick={getNewJoke} className='text-center w-fit p-2 rounded-md bg-gray-700 text-white font-bold'>new Joke</button>

      </div>
     
    </div>
  )
}
