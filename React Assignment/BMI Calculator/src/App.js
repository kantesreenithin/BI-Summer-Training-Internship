import React,{useState} from 'react'
import './index.css'

function App() {

  //useState
  const [weight,setWeight]=useState(0)
  const [height,setHeight]=useState(0)
  const [bmi,setBmi]=useState('')
  const [weightmessage,setWeightMessage]=useState('')
  const [message,setMessage]=useState('')


  let calcBmi=(event)=>{
    //prevent submitting
    event.preventDefault()
    if(weight === 0 || height === 0) {
      alert('Please enter a valid weight and height')
    }else{
      let bmi = ( weight / (height*height) * 10000)
      setBmi(bmi.toFixed(1))

      //logic for message
      let lowrange=(weight-5)
      let highrange=(lowrange+10)
      setWeightMessage('Your suggested weight range is between '+lowrange+'-'+highrange)

      if(bmi <18.5 ){
        setMessage('You are in underweight range')
      }else if(bmi>18.5 && bmi<24.9){
        setMessage('You are in healthy weight range')
      }else{
        setMessage('You are in over weight range')
      }
    }
  }

  // let reset=() =>{
  //   window.location.reload()
  // }
  // <button className='btn btn-outline' onClick={reset} type='submit'>Reset</button>

  return (
    <div className="app">
    <div className='container'>
    <h2>BMI Calculator</h2>
    <form onSubmit={calcBmi}>
    <div>
    <label>Enter your height in cm:</label>
    <input value={height} onChange={(event)=>setHeight(event.target.value)}></input>
    </div>
    <div>
    <label>Enter your weight in kg:</label>
    <input value={weight} onChange={(event)=>setWeight(event.target.value)}></input>
    </div>
    <div>
    <button className='btn' type='submit'>Submit</button>
    
    </div>
    </form>
    <div className='center'>
    <h3>Your BMI is {bmi}</h3>
    <p>{weightmessage}</p>
    <p>{message}</p>
    </div>
    </div>
    </div>
  );
}

export default App;
