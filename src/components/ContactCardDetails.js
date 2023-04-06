import React from 'react'
import ContactCardMain from './ContactCardMain'
const ContactCardDetails = (props) => {
  return (
    <div className='contact-card'>
        <img src={props.contact.imgUrl} alt={props.contact.imgUrl}></img>
        <h3>Name: {props.contact.name}</h3>
        <p>Mobile: {props.contact.phoneNum}</p>
        <p>Email: {props.contact.email}</p>
    </div>
  )
}

export default ContactCardDetails