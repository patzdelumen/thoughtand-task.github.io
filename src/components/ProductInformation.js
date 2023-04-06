import React, { useState,useEffect } from 'react'
import {Container} from 'reactstrap'
import Form from './Form'
// import DataTable from './table';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
// import CheckBox from '@mui/material/Checkbox';

function ProductInformation (){
    const [ProductId, setProductId] = useState(Date.now());
    const [ProductName, setProductName] = useState("");
    const [ProductPrice, setProductPrice] = useState("");
    const [ProductInfos, setProductInfos] = useState(JSON.parse(localStorage.getItem('Products')) || [])

    // const [updateForm, setUpdateForm] = useState(-1)



    const HandleProductId = (event) =>{
        console.log(event.target.value)
        setProductId(event.target.value);
    }

    const HandleSubmitForm = (event) =>{
        event.preventDefault()

        if (ProductName !== "" && ProductPrice > 0 && ProductId !== ""){
            const ProductInfo = {ProductId,ProductName,ProductPrice}
            setProductInfos([...ProductInfos,ProductInfo])
            setProductId(Date.now());
            setProductName("");
            setProductPrice("");
        }
        else{
            
            console.log("Invalid ProductName or Product Price")
        }
    }
    const HandleProductName = (event)=>{
        console.log(event.target.value)
        setProductName(event.target.value)
    }
    const HandleProductPrice = (event)=>{
        setProductPrice(event.target.value)
        console.log(event.target.value)
    }

    useEffect (() => {
        localStorage.setItem("Products", JSON.stringify(ProductInfos))
    },[ProductInfos]);


  return (
      <Container className="text-center">
            <div>
            <h3 className='display-6'>Product Information</h3>
            <Form ProductId ={ProductId} HandleProductId={HandleProductId} ProductName = {ProductName} HandleProductName= {HandleProductName} 
            ProductPrice= {ProductPrice} HandleProductPrice={HandleProductPrice} HandleSubmitForm={HandleSubmitForm}></Form>

            <div className='table-container'>
            <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell align="right">Product Id</TableCell>
                        <TableCell align="right">Product Name</TableCell>
                        <TableCell align="right">Product Price</TableCell>

                    </TableRow>
                </TableHead>
                <TableBody>
                {ProductInfos.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
            
              {/* <CheckBox className='Edit' onChange={() => HandleEdit(row.ProductId)}></CheckBox> */}
              <TableCell align=''>{row.ProductId}</TableCell>
              <TableCell>{row.ProductName}</TableCell>
              <TableCell>{row.ProductPrice}</TableCell>
              <TableCell>
                <Button>Delete</Button>
              </TableCell>
             

            </TableRow>
          ))}
                </TableBody>
            </Table>
            </TableContainer>

                
            </div>

              
            
            </div>
    </Container>
  )
}

export default ProductInformation