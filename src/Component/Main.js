import React from 'react'
import { useState } from 'react'

function Main() {
  const[weight, setWeight] = useState(0)
  const[height, setHeight] = useState(0)
  const[bmi, setBmi] = useState("")
  const[message, setMessage] = useState("")
  const[isTrue, setIsTrue] = useState(false)

  const calculateBmi = (e) =>{
    e.preventDefault();

    if(weight === 0 || height === 0){
      alert("Please enter a valid weight and height")
    }else{
      let bmi = (weight / ((height * height) / 10000))
      setBmi(bmi.toFixed(1));
      setIsTrue(true)

      if(bmi>0 && bmi < 18.4){
        setMessage("You are underweight")
      }else if(bmi>=18.5 && bmi < 22.9){
        setMessage("You are normal weight")
      }else if(bmi>=23 && bmi < 24.9){
        setMessage("You are risk to weight")
      }else if(bmi>=25 && bmi < 29.9){
        setMessage("You are overweight")
      }else{
        setMessage("You are obese")
      }      
    }
  } 
  
  let imgSrc = " "

  if(bmi < 1){
    imgSrc = null
  }else{
    if(bmi>0 && bmi < 18.4){
      imgSrc = require("../assets/underweight1.png")
    }else if(bmi>=18.5 && bmi < 22.9){
      imgSrc = require("../assets/normal1.png")
    }else if(bmi>=23 && bmi < 24.9){
      imgSrc = require("../assets/risktoweight1.png")
    }else if(bmi>=25 && bmi < 29.9){
      imgSrc = require("../assets/overweight1.png")
    }else{
      imgSrc = require("../assets/obese1.png")
    }
  }

  const resetBtn = () =>{
    window.location.reload();
  }

  return (
    <main>     
      <div className='container'>
        <h2>BMI Calculator</h2>
        <form onSubmit={calculateBmi}>
          <div>
            <label>Weight (kg)</label>
            <input placeholder='Please enter a weight' onChange={(e)=>setWeight(e.target.value)}/>
          </div> 
          <div>
            <label>Height (cm)</label>
            <input placeholder='Please enter a height' onChange={(e)=>setHeight(e.target.value)}/>
          </div> 
          <div className='buttongroup'>
            <button className='btn' type='submit'>Submit</button>
            <button className='btn' type='submit' onClick={resetBtn}>Reset</button>
          </div>        
        </form>
        {
        isTrue ? 
        (
          <>
          <div className='center'>
            <h3>Your BMI is: {bmi}</h3> 
            <p>{message}</p>         
          </div>
          <div className='img-container'>
          <img src={imgSrc} alt=""></img>
        </div>
          
        </>
          
          )
        : 
          " "
        }        
        
      </div>
    </main>
  )
}

export default Main