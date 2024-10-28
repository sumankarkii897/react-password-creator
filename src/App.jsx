import { useState } from 'react'
import './App.css'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import { lowercaseLetters, numbers, symbols, uppercaseLetters } from './data/PassChar';
function App() {
  let [showPassword,setShowPassword]=useState("")
  let [passwordLength,setPasswordLength]=useState(8)
let[upperCase,setUpperCase]=useState(false)
let[lowerCase,setLowerCase]=useState(false)
let[number,setNumber]=useState(false)
let[symbol,setSymbol]=useState(false)
let generatePassword=()=>{
  let charSet=""
  let finalPass=''
 if(upperCase|| lowerCase|| number || symbol){
if(upperCase){ charSet+=uppercaseLetters}
if(lowerCase){ charSet+=lowercaseLetters}
if(number){ charSet+=numbers}
if(symbol){ charSet+=symbols}
for (let i = 0; i < passwordLength; i++) {
 let randNum=Math.floor(Math.random()*charSet.length)
 let randPass=charSet.charAt(randNum)
 finalPass+=randPass
 
}
/* console.log(finalPass); */
setShowPassword(finalPass)
toast.success("password generated")


 }
 else{
toast.error("please select atleast one checkbox")
 }
}
let copyPass=()=>{
  navigator.clipboard.writeText(showPassword)
  toast.success("Password copied ")
}
  return (
    <>
      <div className="p-[20px] w-[500px] bg-blue-900 h-[300px]">
        <h3 className='text-center font-bold'>Password Generator</h3>
        <div className='flex mt-1'>
          <input type="text" name="" id="" className='basis-[80%]' value={showPassword}/>
          <button className='basis-[20%] p-[10px 0px] bg-gray-500' onClick={copyPass}>copy</button>
        </div>
        <div className='flex justify-between items-center mt-2 p-[10px 0px]'>
          <label htmlFor="" className='basis-[80%]'>Password Length</label>
          <input type="number" name="" id="" max={20} min={8} className='basis-[20%] w-3' value={passwordLength} onChange={(event)=>{setPasswordLength(event.target.value)}}/>
        </div>
        <div className='flex justify-between items-center mt-2 p-[10px 0px]'>
          <label htmlFor="" className='basis-[80%]'> Including UpperCase</label>
          <input type="checkbox" name="" id="" className='basis-[20%] ' checked={upperCase} onChange={()=>{setUpperCase(!upperCase)}}/>
        </div>
        <div className='flex justify-between items-center mt-2 p-[10px 0px]'>
          <label htmlFor="" className='basis-[80%]'> Including LowerCase</label>
          <input type="checkbox" name="" id=""  className='basis-[20%] ' checked={lowerCase} onChange={()=>{setLowerCase(!lowerCase)}}/>
        </div>
        <div className='flex justify-between items-center mt-2 p-[10px 0px]'>
          <label htmlFor="" className='basis-[80%]'> Including Number</label>
          <input type="checkbox" name="" id=""  className='basis-[20%] ' checked={number} onChange={()=>{setNumber(!number)}} />
        </div>
        <div className='flex justify-between items-center mt-2 p-[10px 0px]'>
          <label htmlFor="" className='basis-[80%]'> Including Symbol</label>
          <input type="checkbox" name="" id=""  className='basis-[20%] ' checked={symbol} onChange={()=>{setSymbol(!symbol)}} />
        </div>
        <div className='flex justify-center items-center m-1'>
          <button className='bg-gray-600 p-[10px]' onClick={generatePassword}> Generate Password</button>
        </div>
      </div>
      <ToastContainer/>
    </>
  )
}

export default App
