import React from 'react'
import {Form as BTForm, FormGroup, Input, Label, Button} from "reactstrap"


function Form ({ProductId, HandleProductId, ProductName, HandleProductName, ProductPrice, HandleProductPrice,HandleSubmitForm,ProductTable, HandleProducTable}){



  return (
    <div>
        <BTForm onSubmit={HandleSubmitForm}>
        <FormGroup className='row'>
                <Label for="ProductId">Product Id</Label>
                <Input type='text' className='text-center' id='ProductId' name='ProductId' value= {ProductId} onChange={HandleProductId} placeholder='Enter Product Name'  />
            </FormGroup>
            <FormGroup className='row'>
                <Label for="ProductName">Product Name</Label>
                <Input type='text' id='ProductName' className='text-center' name='ProductName' value= {ProductName} onChange={HandleProductName} placeholder='Enter Product Name'  />
            </FormGroup>
            <FormGroup className='row'>
                <Label for="ProductPrice">Product Price</Label>
                <Input type='number' id='ProductPrice' className='text-center' name='ProductPrice' value= {ProductPrice} onChange={HandleProductPrice} placeholder='0.00'  />
            </FormGroup>

            <Button type="submit" color = 'primary'>Submit</Button>
            <Button type='submit' onclick = "update()">Udate</Button>
        </BTForm>

        
    </div>
  )
}



export default Form