import React, { useState, useEffect } from 'react';
import  ReactTable from 'react-table';
import 'react-table/react-table.css';
import Button from '@material-ui/core/Button';
import EditCustomer from './EditCustomer';
import AddTraining from './AddTraining';

export default function Customerlist () {

    const [customers, setCustomers] = useState([]);

    useEffect(() => fetchData(), []);

    const fetchData = () => {
        fetch('https://customerrest.herokuapp.com/api/customers')
        .then(response => response.json())
        .then(data => setCustomers(data.content))
        .catch(err => console.error(err));
    }

    const deleteCustomer = (link) => {
        if(window.confirm('Are you sure you want do delete this?')){
        fetch(link, {method: 'DELETE'}).
        then(res => fetchData())
        .catch(err => console.error(err))
        }    
    }
    const saveTraining= (training) => {
        fetch('https://customerrest.herokuapp.com/api/trainings', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(training)
            
        })
        .then(res => fetchData())
        .catch(err => console.error(err));
    }
    

    const updateCustomer = (customer, link) => {
        fetch(link, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(customer)
        
        })
        .then(res => fetchData()) 
        .catch(err => console.error(err))
    }

    const columns = [
        {
            sortable: false,
            filterable: false,
            widht: 100,
            Cell: row => <AddTraining saveTraining={saveTraining} training={row.original}/>  
        },
        {
            sortable: false,
            filterable: false,
            widht: 100,
            Cell: row => <EditCustomer updateCustomer={updateCustomer} customer={row.original}/>  
        },
        {
            sortable: false,
            filterable: false,
            widht: 100,
            accessor: 'links[0].href',
            Cell:  row => <Button size="small" color="secondary" onClick={() => deleteCustomer(row.value)}>Delete</Button>
        },
        {
            Header: 'First name:',
            accessor: 'firstname'
        },
        {
            Header: 'Last name:',
            accessor: 'lastname'
        },
        {
            Header: 'Phone:',
            accessor: 'phone'
        },
        {
            Header: 'E-mail:',
            accessor: 'email'
        },
        {
            Header: 'Address:',
            accessor: 'streetaddress'
        },
        {
            Header: 'Postcode:',
            accessor: 'postcode'
        },
        {
            Header: 'City:',
            accessor: 'city'
        }
    ]

    return (
        <div>
            <ReactTable filterable={true} data={customers} columns={columns} />
        </div>
    )

}