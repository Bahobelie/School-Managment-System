import { Button, Grid } from '@mui/material';

// project imports
import SubCard from 'ui-component/cards/SubCard';
import MainCard from 'ui-component/cards/MainCard';
import { gridSpacing } from 'store/constant';
import { Header } from '../header';
import { IconFileDescription } from '@tabler/icons-react';
import { Report } from '../MokJson/constantJosn';
import { useState } from 'react';
import StudentInfo from './StudentInfo';
// ==============================|| Report ||============================== //

const StudentInformationReport = () => {
  const [selectedReport, setSelectedReport] = useState('');
  const [isSelected, setSelected] = useState(false);
  const handelSelectReport = (report) => {
    setSelectedReport(report);
    setSelected(true);
    console.log(selectedReport);
  };
  return (
    <MainCard title="Report List" secondary={<Header />}>
      <Grid container spacing={gridSpacing}>
        <Grid item xs={12} sm={2.39}>
          <SubCard darkTitle="Heading">
            <Grid container direction="column" spacing={1}>
              {Report.map((category) => (
                <Grid item xs={6} key={category.id}>
                  <Grid container direction="column" spacing={1.3}>
                    {category.children.map((report) => (
                      <Grid item key={report.id}>
                        <Button onClick={() => handelSelectReport(report.id)} style={{ display: 'flex', alignItems: 'center' }}>
                          <IconFileDescription style={{ marginRight: '8px' }} />
                          {report.name}
                        </Button>
                      </Grid>
                    ))}
                  </Grid>
                </Grid>
              ))}
            </Grid>
          </SubCard>
        </Grid>
        <Grid item xs={12} sm={9}>
          {isSelected && (
            <SubCard sx={{overflow:'auto'}} title="Search Critera">
              <Grid container direction="column" spacing={1}>
                <StudentInfo />
              </Grid>
            </SubCard>
          )}
        </Grid>
      </Grid>
    </MainCard>
  );
};
export default StudentInformationReport;
