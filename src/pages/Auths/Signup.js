import React, { useEffect, useState } from 'react'
import {useNavigate} from 'react-router-dom'
import {Link} from 'react-router-dom'

// import man from '../Assets/man.png'
const Signup = () => {
    const [name,setName] = useState("")
    const [userId,setUserId] = useState("")
    const [password,setPassword] = useState("")
    const [confirmPassword,setConfirmPassword] = useState("")
    const [user,setUser] = useState(null)
    const [caution,setCaution] = useState(null)
    const navigate = useNavigate()


    useEffect(()=>{
        if(user){
          let get_users = localStorage.getItem('users')
          let temp = []
          let exist = false
          get_users = JSON.parse(get_users)
          get_users && get_users.forEach(element => {
            if(element.userId===user.userId){
              setCaution("User Id Already exits")
              exist = true 
            }
          });
          if(!exist){
            !get_users ? temp.push(user) : get_users.push(user)
            !get_users ? localStorage.setItem('users',JSON.stringify(temp)) : localStorage.setItem('users',JSON.stringify(get_users))
            setName("")
            setUserId("")
            setPassword("")
            setConfirmPassword("")
            navigate("/login")
          }
        }  
    },[user,navigate])

    // this method will validate the signup form and successfully create the user and a state for the user
    const handleSubmit = (e)=>{
        e.preventDefault()
        if(name.length<3){
          setCaution("Full name min length 3")
          return
        }
        if(userId<3){
          setCaution("userId min length 3")
          return
        }        
        if(password<3){
          setCaution("password min length 3")
          return
        }
        const temp ={name,userId,password,dailyQuiz:[]}
        setUser(temp)
    }

  return (
    <div className='form-outer-div'>
    <div className='create-account-form'>
      <h1>Create Account</h1>
      {
        caution && <p className='caution'>{caution}</p>
      }
      <form className='create-form' onSubmit={handleSubmit}>
      <label>Name</label>
        <input 
          type="text" 
          placeholder='Full Name' 
          value={name} 
          onChange={(e)=>setName(e.target.value)} 
          maxLength={20}
          minLength={3}
        />
      <label>User ID</label>
        <input 
          type="text" 
          placeholder='User ID' 
          value={userId} 
          onChange={(e)=>setUserId(e.target.value)}
          maxLength={30}
          minLength={3}
        />
      <label>Password</label>
        <input 
          type="password" 
          placeholder='Password' 
          value={password} 
          onChange={(e)=>setPassword(e.target.value)}
          maxLength={50}
          minLength={3}
        />
      <label>Confirm Password</label>
        <input type="password" placeholder='Confirm Password' value={confirmPassword} onChange={(e)=>setConfirmPassword(e.target.value)}/>
      <button className='create-btn' type='submit' >Create</button>
      <p className='already-have-account'><Link to="/login">Already Have Account</Link></p>
      </form>
    </div>
    </div>
  )
}

export default Signup
