import React from 'react'

function About() {
  return (
    <div className='about'>
      <h2>What Is That BMI?</h2>
      <p>Body mass index (BMI) is a person’s weight in kilograms divided by the square of height in meters(BMI = kg/m2). 
        BMI is an inexpensive and easy screening method for weight category: underweight, normal weight, risk to weight, overweight and obesity.</p>
    <p>If your BMI is:</p>
    <ul>
      <li>below 18.5 – you're in the underweight range</li>
      <li>between 18.5 and 22.9 – you're in the normal weight range</li>
      <li>between 23 and 24.9 – you're in the risk to weight range</li>
      <li>between 25 and 29.9 – you're in the overweight range</li>
      <li>between 30 and 39.9 – you're in the obese range</li>
    </ul>
    </div>
  )
}

export default About