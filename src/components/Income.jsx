import React from 'react'
import { useState } from 'react';
import axios from 'axios'
import { data } from 'react-router-dom';

const Income = () => {
    const [finance, setFinance] = useState({
        totalincome: 0,
        description: "",
        date: "0000-00-00",
    })
   function handleChange(e){
    let {name, value} = e.target;
    setFinance({...finance , [name]:value })
    console.log(finance)
   }

   async function handleSubmit() {
    try {
        let res = await axios.post('https://finance-data-3a39b-default-rtdb.asia-southeast1.firebasedatabase.app/income.json', finance)
        //console.log(res.data)
    } catch (error) {
        console.log("error to post the Data")
    }
   }
  return (
    <>
    <div>
        <h1>Form to Add Income</h1>
        <p>Amount of Income :<input type="number" name='totalincome' placeholder='Enter the Income' value={finance.totalincome} onChange={handleChange}/></p>
        <p>Description <input type='text' name='description' placeholder='Enter the Desc' value={finance.description} onChange={handleChange}/></p>
       <p> Date: <input type="date" name="date" id="" value={finance.date} onChange={handleChange}/></p>
        <button onClick={handleSubmit}>submit</button>
    </div>
    <div>
    </div>
    </>
  )
}

export default Income