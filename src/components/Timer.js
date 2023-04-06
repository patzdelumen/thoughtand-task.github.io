import React, {useState, useEffect} from 'react'
import useRandomColor from './randomColor';

function Timer(){
        const {color,generateColor} = useRandomColor()
        const [seconds, setSeconds] = useState(0);
        const [isActive, setIsActive] = useState(false);

        function toggle(){
            setIsActive(!isActive);

        }
        function reset(){
            setSeconds(0);
            setIsActive(false);
        }


        useEffect(() => {
            let interval = null;

            
            if(isActive){
                interval = setInterval(() => {
                    setSeconds(seconds => seconds + 1);
                    generateColor()
                    }, 1000);
            }
            else if(!isActive && seconds !== 0){
                clearInterval(interval);
            }
            
            return ()=> clearInterval(interval)
        },[isActive,seconds])


  return (
    <div >
        <div style={{color:"#" +color}}>
            {seconds}
            </div> 
            <button onClick={toggle}>{isActive ? 'Pause' : 'Start'} </button>
        <button onClick={reset}>Reset</button>
        <button onClick={generateColor}>GenerateRandomColor</button>


    </div>
  )
}

export default Timer