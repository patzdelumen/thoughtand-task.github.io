import React from 'react'


function Student(){
const firstname = 'Patz';
const lastname = 'De Lumen';
const studentName = [
  {
    studentId:'001',
    firstname:'Patz',
    grade: 87,
  },{
    studentId:'002',
    firstname:'john',
    grade:'80',
  },{
    studentId:'003',
    firstname:'lowel',
    grade:'90',
  }
]
{studentName.map((name,index)=>{
  
  return (<ul key={index}> <li>studentId: {name.studentId}</li><li>Firstname: {name.firstname}</li><li>Grade: {name.grade}</li></ul>)
  
})} 
}



export default Student