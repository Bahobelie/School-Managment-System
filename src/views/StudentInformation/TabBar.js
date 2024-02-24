import * as React from 'react';
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@mui/material/styles';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { tabLabels } from './MokJson/constantJosn';
import { Divider } from '@mui/material';
import { lazy } from 'react';

// Lazy loading
const ProfileTab = lazy(() => import('./ProfileView').then(module => ({ default: module.ProfileView })));

 interface TabPanelProps {
  children?: React.ReactNode;
  dir?: string;
  index: number;
  value: number;
}
// const TabView=[
//   'Profile',
//   'Exam',
//   'Attendance',
//  'Document',
//   'Student Behaviour',
//  'Time Line'
// ]
function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3,marginTop:2}}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

export default function FullWidthTabs({student}) {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index: number) => {
    setValue(index);
    console.log(student);
  };

  return (
    <Box sx={{ width: '55rem' }}>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="inherit"
          variant="fullWidth"
          aria-label="full width tabs example"
          sx={{
            '& .MuiTabs-indicator': {height:'3px'}
          }}
        >
          {tabLabels.map((tab,index)=>(
            <Tab key={index} label={tab.label} {...a11yProps(index)}/>
          ))}
        </Tabs>
      <Divider/>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
          {tabLabels.map((tab, index) => (
            <TabPanel  key={index} value={value} index={index} dir={theme.direction}>
              {index===0?<ProfileTab student={student}/>:'Test For All'}
            </TabPanel>
          ))}
      </SwipeableViews>
    </Box>
  );
}
