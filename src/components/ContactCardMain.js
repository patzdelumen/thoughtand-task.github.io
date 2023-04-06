import React from "react";
import '../css/style.css'
import ContactCardDetails from "./ContactCardDetails";

function ContactCardMain(){
    return (
        <div className="contacts">
            <ContactCardDetails 
            contact = {{
                name: "Patz",
                imgUrl: './logo512.png',
                phoneNum: '0912345678',
                email: 'Patz@gmail.com'
            }}
            />,
            <ContactCardDetails 
            contact = {{
                name: "John",
                imgUrl: 'http://placekitten.com/400/400',
                phoneNum: '0912345678',
                email: 'john@gmail.com'
            }}
            />,
            <ContactCardDetails 
            contact = {{
                name: "Lowel",
                imgUrl: 'http://placekitten.com/400/300',
                phoneNum: '0912345678',
                email: 'lowel@gmail.com'
            }}
            />,
            <ContactCardDetails 
            contact = {{
                name: "Eric",
                imgUrl: 'http://placekitten.com/200/100',
                phoneNum: '0912345678',
                email: 'Eric@gmail.com'
            }}
            />,



        </div>
    )
}

export default ContactCardMain