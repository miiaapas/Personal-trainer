import React, { useState, useEffect } from 'react';
import  ReactTable from 'react-table';
import 'react-table/react-table.css';
import moment from 'moment'
import Button from '@material-ui/core/Button';

export default function Traininglist () {

    
    const [trainings, setTrainings] = useState([]);
   

    useEffect(() => fetchData(), []);

    const fetchData = () => {
        fetch('https://customerrest.herokuapp.com/api/trainings')
        .then(response => response.json())
        .then(data => {
            setTrainings(data.content)
        
        })

        .catch(err => console.error(err));
    }
    const deleteTraining = (link) => {
        if(window.confirm('Are you sure you want do delete this?')){
        fetch(link, {method: 'DELETE'}).
        then(res => fetchData())
        .catch(err => console.error(err))
        }    
    }
    const columns = [
        {
            sortable: false,
            filterable: false,
            widht: 100,
            accessor: 'links[0].href',
            Cell:  row => <Button size="small" color="secondary" onClick={() => deleteTraining(row.value)}>Delete</Button>
        },
        {
            Header: 'Activity:',
            accessor: 'activity'
        },
        {
            Header: 'Date',
            id: 'date',
            accessor: row => moment(row.start).format('x'),
            Cell: row => moment(row.original.start).format('lll'),
        },
        {
            Header: 'Duration (30 min):',
            accessor: 'duration'
        },
        {
            Header: 'Customer:',
            accessor: 'links[2].href'
        }
    ]
    return (
        <div>
            <ReactTable filterable={true} data={trainings} columns={columns} />
        </div>
    )
}