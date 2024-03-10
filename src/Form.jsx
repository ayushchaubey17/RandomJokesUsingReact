import React, { useState } from 'react'

export default function Form() {
let [formData,setFormData] = useState({
   name:"",
   feedback :"",
   age:10 
})

let handle = (event)=>{

    let x = event.target.name;
    let y = event.target.value;
    console.log(x,y)
setFormData((obj)=>{
    obj[x] = y;
    return {...obj}
}
);

}


  return (


    <div>
      <form action="" >
        <input type="text" name='name'  onChange={handle} value={formData.name} placeholder='write name' /><br />
        <textarea type="text" name='feedback' onChange={handle}   value={formData.feedback} placeholder='write comment'/><br />
        <input type="number" name="rating" onChange={handle}  max={10} min={1} value={formData.age}   placeholder='7'/><br />
        <button>submit</button>
      </form>
    </div>
  )
}
