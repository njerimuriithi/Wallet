import React,{useEffect,useState} from 'react'
import 'devextreme/dist/css/dx.light.css';
import {Form,SimpleItem } from 'devextreme-react/form';
import { Button } from 'devextreme-react/button';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'


function AddTransaction() {

    //useEffect(()=>{
        //axios.get('https://localhost:7196/api/DailyTransactions')
        //.then(response =>{
        //  setTransaction(response.data)
        //  console.log(response.data);
        //})
        //.catch(err=>{
         // console.log(err)
       // })
    
     //},[])

    const newTransaction ={
        TransactionName :'Cake Shopping',
        VendorName:'Valentine cake House',
        AmountSpent:'1000',
        TransactionCost:'0',
        Priority:'0',
        Category:'',
        Other:'Expenses'
    }
  return (
    <div >
        <h2 className={'content-block'}>Add new Transaction</h2>
        <div className={'content-block dx-card responsive-paddings'}>
            
        <Form FormData ={newTransaction} >
            id={'form'}
                <SimpleItem dataField="Transaction Name"/>
                <SimpleItem dataField="Vendor Name"/>
                <SimpleItem dataField="Amount Spent"/>
                <SimpleItem dataField="Transaction Cost"/>
                <SimpleItem dataField="Category"/>
                <SimpleItem dataField="Priority"/>
                <SimpleItem dataField="Other Expenses"/>
           
            </Form>

            <Button 
        text="Submit"
            />
        </div>
           

    </div>
  )
}

export default AddTransaction