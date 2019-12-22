import React, { useState, useEffect } from 'react';
import Paper from "@material-ui/core/Paper";
import { ViewState } from "@devexpress/dx-react-scheduler";
import {
  Scheduler,
  WeekView,
  Appointments
} from "@devexpress/dx-react-scheduler-material-ui";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { blue } from "@material-ui/core/colors";



export default function Calendar () {
    const theme = createMuiTheme({ palette: { type: "light", primary: blue } });
    const [trainings, setTrainings] = useState([]);
   
    useEffect(() => fetchData(), []);

    const fetchData = () => {
        fetch('https://customerrest.herokuapp.com/gettrainings')
        .then(response => response.json())
        .then(data => {
            setTrainings(data)
            
        })

        .catch(err => console.error(err));
    }
    return(
        <MuiThemeProvider theme={theme}>
        <Paper>
          <Scheduler data={trainings}>
            <ViewState currentDate="2019-12-22" />
            <WeekView startDayHour={7} endDayHour={19} />
            <Appointments/>
          </Scheduler>
        </Paper>
      </MuiThemeProvider>

    )
}

 
    
  

