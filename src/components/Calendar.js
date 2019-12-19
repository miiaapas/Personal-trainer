import React from 'react';
import { Scheduler, DayView, Appointments } from '@devexpress/dx-react-scheduler-material-ui';
import { render } from "react-dom";
import Paper from "@material-ui/core/Paper";
import { ViewState } from "@devexpress/dx-react-scheduler";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { blue } from "@material-ui/core/colors";



export default function Calendar () {

    const[data, setData] = useState([]); 

    const theme = createMuiTheme({ palette: { type: "light", primary: blue } });

    return (
        <MuiThemeProvider theme={theme}>
          <Paper>
            <Scheduler data={data}>
              <ViewState currentDate="2019-12-19" />
              <WeekView startDayHour={7} endDayHour={19} />
              <Appointments />
            </Scheduler>
          </Paper>
        </MuiThemeProvider>
      );
}