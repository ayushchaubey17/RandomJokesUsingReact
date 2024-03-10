import React, { useState } from 'react'

export default function Dog() {
    let url2 = "https://dog.ceo/api/breeds/image/random";

let [img,setImg] =useState('https://images.dog.ceo/breeds/terrier-toy/20210623_151307-min.jpg'); 
let [loader,setLoader] = useState("hidden");

    let generatePic = async ()=>{
  
setLoader("")

     let req =  await fetch(url2);
     let res = await req.json();

     setImg(res.message);
     setLoader("hidden");
    }
    

  return (
    <div>
        <div className={` ${loader} rounded-full border-t-blue-500 animate-spin w-5 h-5 my-2 mx-auto border-2`}></div>
      <img src={`${img}`} alt=""  className='w-11/12 h-52 sm:w-1/2 sm:h-96  mx-auto rounded-full my-5 border-2'/>
     
     <div className="flex justify-center">
     <button className=' text-center w-fit p-2 rounded-md bg-gray-700 text-white font-bold' onClick={generatePic}>generate random dog pics</button>
    

     </div>
   </div>
  )
}
