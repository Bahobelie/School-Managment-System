import { useEffect, useState } from 'react';

// material-ui
import { Button, Grid } from '@mui/material';

// project imports
import TotalBranchCard from './TotalBranchCard';
import PopularCard from './PopularCard';
import TotalIncomeChartCard from './TotalOrderLineChartCard';
import TotalStafDarkCard from './TotalStafDarkCard';
import TotaStudentLightCard from './TotaStudentLightCard';
import TotalGrowthBarChart from './TotalGrowthBarChart';
import { gridSpacing } from 'store/constant';
import { useSelector } from 'react-redux';
import SubCard from '../../../ui-component/cards/SubCard';

// ==============================|| DEFAULT DASHBOARD ||============================== //

const Dashboard = () => {
  const [isLoading, setLoading] = useState(true);
  const currentBranch = useSelector((stat) => stat.customization.selectedBranch);
  useEffect(() => {
    setLoading(false);
  }, []);
  return (
    <Grid container spacing={gridSpacing}>
      <Grid item xs={12}>
        <Grid container spacing={gridSpacing}>
          {/* First Container */}
          <Grid item xs={7}>
            <Grid container spacing={gridSpacing}>
              <Grid item lg={6} md={6} sm={6} xs={12}>
                <TotalBranchCard isLoading={isLoading} />
              </Grid>
              <Grid item lg={6} md={6} sm={6} xs={12}>
                <TotalIncomeChartCard isLoading={isLoading} />
              </Grid>
            </Grid>
          </Grid>
          {/* Second Container */}
          <Grid item xs={5}>
            <Grid container spacing={3}>
              <Grid item sm={6} xs={12} md={3} lg={10}>
                <TotalStafDarkCard isLoading={isLoading} />
              </Grid>
              <Grid item lg={10} md={3} sm={12} xs={12}>
                <TotaStudentLightCard isLoading={isLoading} ReportName={`On ${currentBranch}`} Totale={1000} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      {/* Third Row */}
      <Grid item xs={12}>
        <Grid container spacing={gridSpacing}>
          <Grid item xs={12} md={8}>
            <TotalGrowthBarChart isLoading={isLoading} />
          </Grid>
          <Grid item xs={12} md={4}>
            <SubCard title={'Category'} sx={{overflowY:'auto'}} secondary={<Button variant={'outlined'}>Next</Button> } ></SubCard>
          </Grid>
          <Grid item xs={12} md={12}>
            <PopularCard isLoading={isLoading} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Dashboard;
