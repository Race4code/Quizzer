import React, { useEffect, useState } from 'react'
import Navbar from './Components/Navbar'
import Home from './pages/Home/Home'
import Login from './pages/Auths/Login'
import Signup from './pages/Auths/Signup'
import ForgetPassword from './pages/Auths/ForgetPassword'
import { BrowserRouter,Route,Routes} from 'react-router-dom'
import Quiz from './pages/Quiz Page/Quiz'
import QuizPalletPage from './pages/Quiz Page/QuizPallet/QuizPalletPage'
import UserDashboard from './pages/Dashboard/UserDashboard'


const App = () => {
  const [user,setUser] = useState(null)
  const [loadQuiz,setLoadQuiz] = useState(null)
  const [topic,setTopic] = useState(null)
  
  useEffect(()=>{
    const get_user = JSON.parse(sessionStorage.getItem('user'))
    setUser(get_user)
  },[])

  return (
    <div>
      <BrowserRouter>
      <Navbar user={user} setUser={setUser}/>
        <Routes>
          <Route path="/" element={<Home user={user} setLoadQuiz={setLoadQuiz} setTopic={setTopic}/>}/>
          <Route path="login" element={user ? <Home user={user} setTopic={setTopic}/>:<Login setUser={setUser}/>}/>
          <Route path="signup" element={user?<Home user={user} setTopic={setTopic}/>:<Signup/>}/>
          <Route path="forget" element={user ? <Home user={user} setTopic={setTopic}/> :<ForgetPassword/>}/>
          <Route path="dailyQuiz" element={<Quiz user={user} quiz={loadQuiz}/>}/>
          {/* <Route path="quiz" element={<Quiz user={user} quiz={loadQuiz}/>}/> */}
          <Route path="quizpallet" element={<QuizPalletPage user={user} topic={topic}/>}/>
          <Route path="user/:id" element={<UserDashboard user={user} />}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
