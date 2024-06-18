import React, { useState } from 'react';
import { Button, Grid, Typography } from '@mui/material';
import SubCard from 'ui-component/cards/SubCard';
import MainCard from 'ui-component/cards/MainCard';
import { gridSpacing } from 'store/constant';
import { Header } from '../../header';
import { IconFileDescription } from '@tabler/icons-react';
import { Report } from '../../MokJson/constantJosn';


const StudentInformationReport = () => {
  const [selectedReport, setSelectedReport] = useState(null);

  const handleSelectReport = (reportId) => {
    setSelectedReport(reportId);
  };

  return (
    <MainCard title="Report List" secondary={<Header />}>
      <Grid container spacing={gridSpacing}>
        <Grid item xs={12} sm={2.4}>
          <SubCard darkTitle="Report Categories">
            <Grid container direction="column" spacing={2}>
              {Report.map((category) => (
                <Grid item key={category.id}>
                  <Grid container direction="column" spacing={1}>
                    {category.children.map((report) => (
                      <Grid item key={report.id}>
                        <Button
                          onClick={() => handleSelectReport(report.name)}
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            backgroundColor:
                              selectedReport === report.id
                                ? '#e0e0e0'
                                : 'transparent',
                          }}
                        >
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
        <Grid item xs={12} sm={9.6}>
          {selectedReport && (
            <SubCard title={`Selected Report: ${selectedReport}`} sx={{ overflow: 'auto', height: '100%' }}>
              <Typography variant={'h4'}>{selectedReport}</Typography>
            </SubCard>
          )}
        </Grid>

      </Grid>
    </MainCard>
  );
};

export default StudentInformationReport;
