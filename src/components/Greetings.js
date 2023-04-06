import React from 'react'


    const Greetings = () => {
        const date = new Date();
        let hourofday = date.getHours();
        let Greetings;
        
        if (hourofday>4 && hourofday<12)
        {
            Greetings = "Good Morning!";
            
        }
        
        else if (hourofday>=12 && hourofday<18)
        {
            Greetings = "Good Afternoon!";
        }
        else 
        {
            Greetings = "Good Evening!";
        }
    
  return (
    <div>
        <h3>{Greetings}</h3>
        </div>
  )
}

export default Greetings