import React, { useState, useEffect} from "react";

function GreetingsComponent() {
    const [time, setTime] = useState(new Date().getHours());

    useEffect(() => {
        setInterval(() =>
            setTime(new Date().getHours()), 30000);
    }, []);

    let greeting;
    if (time > 5 && time < 18) {
        greeting = 'Good Morning';
    } else if (time > 18 && time < 23) {
        greeting = 'Good Afternoon';
    } else {
        greeting = 'Good Evening';
    }
        

    return (
        <div>
        <h1>Hour:{time} = {greeting}</h1>
        
        </div>
    )
}
export default GreetingsComponent
