import React from 'react'
import { useState } from 'react';
import axios from 'axios';
const Expenses = () => {
    const [expense, setExpense] = useState({
        amount:0,
        description:"",
        category:"",
        date:"0000-00-00"
    })

    function handleChange(e) {
       let {name, value} = e.target;
       setExpense({...expense, [name]: value})
       console.log(expense)
    }
  async function handleSubmit(){
    try {
        let res = await axios.post("https://finance-data-3a39b-default-rtdb.asia-southeast1.firebasedatabase.app/expenses.json", expense)
        console.log(res.data)
    } catch (error) {
        console.log("Cannot post the Data")
    }
  }

  return (
    <div>
        <h1>Add Expenses</h1>
            <p>Enter The Amount <input type='number' name='amount' placeholder='Enter Amount You spend' value={expense.amount} onChange={handleChange}/></p>
            <p>Enter the Description: <input type='text' name='description' placeholder='What are you bought' value={expense.description} onChange={handleChange}/></p>
            <p>Category: <select name='category' value={expense.category} onChange={handleChange}>
                <option>Category</option>
                <option>Rent</option>
                <option>Clothes</option>
                <option>Foods</option>
                </select> 
            </p>
            <p>Date: <input type="date" name="date" id="" value={expense.date} onChange={handleChange}/></p>
        <button onClick={handleSubmit}>submit</button>    
    </div>
  )
}

export default Expenses