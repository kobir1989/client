import PageLayout from '../../components/pageLayout/PageLayout';
import * as React from 'react';
import PropTypes from 'prop-types';
import { Typography, Stack, Avatar, Tab, Tabs, Box } from '@mui/material';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}


const UserProfile = () => {
    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <PageLayout>
           <Stack sx={{maxWidth: "900px", m: "auto"}}>
           <Box  sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', mt: 4, p: 2 }}>
                <Stack direction="row" spacing={2}
                    alignItems="center">
                   <Avatar
                        alt="Remy Sharp"
                        src="image/man-avatar-icon-free-vector.webp"
                        sx={{ width: 150, height: 150, }}
                    />
                    <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                        <Typography variant='h4'>User Name</Typography>
                        <Typography variant='p'>Address: Dhaka, Bangladesh</Typography>
                        <Typography variant='p'>Phone: 0174XXXXXXX</Typography>
                        <Typography variant='p'>Email: test@test.com</Typography>
                    </Box>
                </Stack>
            </Box>
            <Box
                sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', mt: 4, p:4 }}
            >
                <Tabs
                    orientation="vertical"
                    variant="scrollable"
                    value={value}
                    onChange={handleChange}
                    aria-label="Vertical tabs example"
                    sx={{ borderRight: 1, borderColor: 'divider' }}
                >
                    <Tab label="About" {...a11yProps(0)} />
                    <Tab label="Account settings" {...a11yProps(1)} />
                    <Tab label="Order history" {...a11yProps(2)} />
                    <Tab label="Shoping Cart" {...a11yProps(3)} />
                    <Tab label="Wish list" {...a11yProps(4)} />
                </Tabs>
                <TabPanel value={value} index={0}>
                    Item One
                </TabPanel>
                <TabPanel value={value} index={1}>
                    Item Two
                </TabPanel>
                <TabPanel value={value} index={2}>
                    Item Three
                </TabPanel>
                <TabPanel value={value} index={3}>
                    Item Four
                </TabPanel>
                <TabPanel value={value} index={4}>
                    Item Five
                </TabPanel>
            </Box>
           </Stack>
        </PageLayout>
    )
}

export default UserProfile;





