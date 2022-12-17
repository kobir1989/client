import * as React from 'react';
import { Typography, Tab, Tabs, Box } from '@mui/material';
import { v4 as uuidv4 } from 'uuid';

const a11yProps = (index)=> {
   return {
      id: `vertical-tab-${index}`,
      'aria-controls': `vertical-tabpanel-${index}`,
   };
}

const SideTab = ({ components }) => {
   const [value, setValue] = React.useState(0);
   const handleChange = (event, newValue) => {
      setValue(newValue);
   };
   return (
      <Box
         sx={{
            flexGrow: 1,
            bgcolor: 'background.paper',
            display: 'flex',
            mt: 4,
            p: 4
         }}>
         <Tabs
            orientation="vertical"
            variant="scrollable"
            value={value}
            onChange={handleChange}
            aria-label="Vertical tabs example"
            sx={{
               borderRight: 1,
               borderColor: 'divider',
               width: "30%"
            }}>
            {components.map((component, i) => (
               <Tab label={component.lable} {...a11yProps(i)}
                  key={uuidv4()} />
            ))}
         </Tabs>
         <Box sx={{ ml: 4, width: "70%" }}>
            {components[value].component()}
         </Box>

      </Box>
   )
}

export default SideTab