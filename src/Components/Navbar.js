import React from 'react'
import random from '../Assets/user.png'
import man from '../Assets/man.png'
import {Link} from 'react-router-dom'
const Navbar = ({user,setUser}) => {

  const handleLogout = ()=>{
    setUser(null)
    sessionStorage.removeItem('user')
  }
  
  return (
    <div className='navbar'>
      <Link to="/" style={{textDecoration:"none",color:"black"}}><h1>Quiz-Khelo</h1></Link>
      <div className='navbar-user-profile'>
        {
          user ?
          <Link to={`/user/${user.name}`}><img src={man} alt="User-Profile" className='user-profile'/></Link>
          :
          <img src={random} alt="User-Profile" className='user-profile'/>
        }{
          !user?
          <p><Link to="/signup" style={{textDecoration:"none",color:"black"}}>Create Account</Link>/<><Link to="/login">Login</Link></></p>
          :
          <div className='logout-btn'>
            <p>{user.name}/</p>
            <p onClick={handleLogout}><Link to="/" style={{textDecoration:"none",color:"black"}}>Logout</Link></p>
          </div>
        }
      </div>
    </div>
  )
}

export default Navbar
