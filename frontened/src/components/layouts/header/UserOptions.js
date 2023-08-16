import React, { Fragment } from 'react'
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import ExitToApp from '@mui/icons-material/ExitToApp';
import ListAlt from '@mui/icons-material/ListAlt';
import Person from '@mui/icons-material/Person';
function UserOptions({ user }) {

const order = () => {

}
const account = () => {

}
const logout = () => {

}
const actions = [
  { icon: <ListAlt />, name: 'Copy', func: order },
  { icon: <Person />, name: 'profile', func: account },
  { icon: <ExitToApp />, name: 'logout', func: logout }
];

// 
return (
  <Fragment>
    
  <Box sx={{ height: 320, transform: 'translateZ(0px)', flexGrow: 1,position:'absolute' }}>
        <SpeedDial
          ariaLabel="SpeedDial basic example"
          sx={{ position: 'absolute' ,right:0,bottom:0}}
          // icon={<SpeedDialIcon/>}
          icon={<img style={{fontSize:"fill",height:'100%',width:'100%'}} src={user?.avatar?.url} alt='img' />}
        >
          {actions.map((action) => (
            <SpeedDialAction
              key={action.name}
              icon={action.icon}
              onClick={action.func}
              tooltipTitle={action.name}
            />
          ))};
  
        </SpeedDial>
      </Box>
  </Fragment>

)
}

export default UserOptions