import React from 'react'
// import Index from './pages'
import ButtonAppBar from './components/header';
import Task from './components/Task';
import Thought from './components/Thought';
import './css/main2.css'


const Main2 = () => {
  return (
    <div>
        <ButtonAppBar />
        <div className='main-content'>
        <div>
          
        <Thought/>
        </div>
        <div>
          <Task/>
        </div>
        </div>
    </div>
  )
}

export default Main2