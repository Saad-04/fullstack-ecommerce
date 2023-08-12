import React, { Fragment } from 'react'
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import FileCopyIcon from '@mui/icons-material/FileCopyOutlined';
import SaveIcon from '@mui/icons-material/Save';
import PrintIcon from '@mui/icons-material/Print';
import ShareIcon from '@mui/icons-material/Share';
// import './'
function UserOptions({ user }) {
  //
  const actions = [
    { icon: <FileCopyIcon />, name: 'Copy' },
    { icon: <SaveIcon />, name: 'Save' },
    { icon: <PrintIcon />, name: 'Print' },
    { icon: <ShareIcon />, name: 'Share' },
  ];
//   <Box sx={{ height: 320, transform: 'translateZ(0px)', flexGrow: 1 }}>
//   <SpeedDial
//     ariaLabel="SpeedDial basic example"
//     sx={{ position: 'absolute', bottom: 16, right: 16 }}
//     // icon={<img src={user.avatar.url} alt='user image' />}
//   >
//     {actions.map((action) => (
//       <SpeedDialAction
//         key={action.name}
//         icon={action.icon}
//         tooltipTitle={action.name}
//       />
//     ))}
//   </SpeedDial>
// </Box>
  return (
    <Fragment>
    <p style={{color:"black",fontSize:'100px'}}>{user.name}</p>
      
    </Fragment>

  )
}

export default UserOptions