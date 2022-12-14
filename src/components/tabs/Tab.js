import * as React from 'react';
import { Typography, Tab, Tabs, Box } from '@mui/material';

function a11yProps(index) {
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
console.log(value)
    return (
        <Box
            sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', mt: 4, p: 4 }}
        >
            <Tabs
                orientation="vertical"
                variant="scrollable"
                value={value}
                onChange={handleChange}
                aria-label="Vertical tabs example"
                sx={{ borderRight: 1, borderColor: 'divider' }}
            >
                {components.map((component, i) => (
                    <Tab label={component.lable} {...a11yProps(i)} />
                ))}
            </Tabs>
            <Box sx={{ml: 4}}>
                {components[value].component()}
            </Box>

        </Box>
    )
}

export default SideTab