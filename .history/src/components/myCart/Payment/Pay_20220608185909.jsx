
import React from 'react'
import './Pay.css'
import {useState} from 'react';
const Pay=( handlePaid, handleSumCount, done)=>{
    const [confirmed , setconfirmed] = useState(false);
    const [cvc,setCvc] = useState();
    const [name, setName]=useState('');
     const [pass,setPass] = useState('');
    const [date, setDate]=useState();

    const handler=(val)=>{
         setconfirmed(val);
          done(true);
          handlePaid(true);
          handleSumCount(true);
        }
        const handleSubmit =(event)=>{
             handler(true);
         event.preventDefault();
        
        alert(`The name you entered was: ${name}`);
        }
 //-------------------------------
return (
    <div >
    <form id="iform"
    onSubmit={handleSubmit} >  

    <input type="password" className='inputt' value={pass}
    onChange={(e) => setPass(e.target.value)}
    name="number" placeholder='**** **** **** ****'/>

    <input type="text" name="name" value={name} 
      onChange={(e) => setName(e.target.value)}
    className='inputt' placeholder='Full Name'/>

    <input type="date" className='inputt' value={date}
      onChange={(e) => setDate(e.target.value)}
    name="expiry" placeholder='**/****'/>

    <input type="password" className='inputt' value={cvc}
      onChange={(e) => setCvc(e.target.value)}
    name="cvc" placeholder='***'/>

                   <input
                    type="submit"
                    className='payy' /> Pay 💳
                     
                  </form>
 
    </div>
)

}



export default Pay;

