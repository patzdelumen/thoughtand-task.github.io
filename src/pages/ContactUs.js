import React,{useState, useEffect, useRef} from 'react'


let retrieveData = localStorage.getItem("ContactData")? JSON.parse(localStorage.getItem("ContactData")) :[];
function ContactUsForm () {
    let fnameRef = useRef(null)
    let lnameRef = useRef(null)
    let emailRef = useRef(null)
    let messageRef = useRef(null)

    let [Id, setId] = useState(Date.now())
    let [allContacts, setAllContacts] = useState()

    function handleSubmit(event)
    {
        event.preventDefault();
        let data = {
            ID: Id,
            FirstName: fnameRef.current.value,
            LastName: lnameRef.current.value,
            Email: emailRef.current.value,
            Message: messageRef.current.value
        }
        setAllContacts([...allContacts,data])
        alert(JSON.stringify(data))
    }
    useEffect(() => {
    localStorage.setItem("ContactData", JSON.stringify(allContacts))
    },[allContacts])
    return (
        <div>
            <form>
                <label for=""></label>
                <input type="text" id="fname" ref={fnameRef} />
                <label for=""></label>
                <input type="text" id="lname" ref={lnameRef} />
                <label for=""></label>
                <input type="email" id="email" ref={emailRef} />
                <label for=""></label>
                <textarea id="message" ref={messageRef} />
                <button type="submit" onClick={handleSubmit}>Submit</button>
            </form>
        </div>
    )
}

export default ContactUsForm