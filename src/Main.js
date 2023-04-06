import React from 'react'
import './css/main.css'
import Index from './pages';
import ButtonAppBar from './components/header';


// import ProductInformation from './components/ProductInformation'
// import Nav from './components/nav';
// import Counting from './components/count';
// import Timer from './components/Timer';
// import Greetings from './components/Greetings';
// import Time from './components/Time';
// import Form from './components/Form';

//add product id



const Main = () => {
    return (
        <div>
            
            <ButtonAppBar/>
            {/* <Nav /> */}
            <div id='container'>
                <Index />
                {/* <Time/> */}
                <div className='Timer'>
                    
                {/* <Timer/> */}
                </div>
                <div className='counting'>
                        
                {/* <Counting/> */}
                    </div>
                
                <div className='form'>
                    {/* <ProductInformation/> */}
                   
                {/* <Form/> */}
                </div>
            </div>
    
        </div>
  )
}

export default Main