import {Grid, LinearProgress, Paper, Table, TableBody, TableCell, TableContainer, TableRow, Typography } from '@mui/material';
import { useLocation } from 'react-router-dom';

// project imports
import SubCard from 'ui-component/cards/SubCard';
import MainCard from 'ui-component/cards/MainCard';
import { gridSpacing } from 'store/constant';
import Barcode from 'react-barcode';
import QRCode from 'qrcode.react';
import { useTheme } from '@mui/material/styles';
import TabBar from './TabBar';
import React from 'react';
import { Header } from './header';
// ==============================|| Student Details ||============================== //

const StudentDetail = () => {
  const location = useLocation();
  const theme = useTheme();
  const student = location.state?.student;
  const codeValue = `${student.name}, ${student.id},${student.gender},${student.parentName}`;

  const getProgressColor = (progress) => {
    console.log(progress);
    if (progress >= 80) {
      return 'success';
    } else if (progress >= 60) {
      return 'primary';
    } else if (progress >= 40) {
      return 'secondary';
    } else if (progress >= 20) {
      return 'warning';
    } else {
      return 'error';
    }
  };
  return (
    <MainCard
      title="Student Detail" secondary={<Header/> }>
      <Grid container spacing={gridSpacing}>
        <Grid item xs={12} sm={4}>
          <SubCard>
            <Grid container direction="Row" spacing={1}>
              <img
                alt={student.name}
                src={student.avatar}
                style={{ width: 100, height: 100, borderRadius: '12px', border: '1px solid green' }}
              />
              <Grid item sx={{ marginLeft: 3 }}>
                <Typography variant="h3">{student?.name}</Typography>
                <Typography variant="subtitle1" sx={{ marginLeft: 1.75 }}>
                  Admission No : <span style={{ color: theme.palette.primary[800] }}>{student.admissionNo}</span>
                </Typography>
                <Typography variant="subtitle1" sx={{ marginLeft: 1.75 }}>
                  Roll Number : <span style={{ color: theme.palette.primary[800] }}>{student.rollNumber}</span>
                </Typography>
              </Grid>
            </Grid>
          </SubCard>
          <SubCard sx={{ marginTop: '17px' }}>
            <TableContainer>
              <Table>
                <TableBody>
                  <TableRow>
                    <TableCell>Class</TableCell>
                    <TableCell align="right">{student?.class}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Section</TableCell>
                    <TableCell align="right">{student?.section}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Branch</TableCell>
                    <TableCell align="right">{student?.branch}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>ParentName</TableCell>
                    <TableCell align="right">{student?.parentName}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>QrCode</TableCell>
                    <TableCell align="right">
                      <QRCode value={codeValue} size={50} />
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>BarCode</TableCell>
                    <TableCell align="right">
                      <Barcode value={student.name} width={1} height={40} />
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </SubCard>
          <SubCard sx={{ marginTop: '0.8rem' }}>
            <Paper elevation={3} sx={{ padding: '2rem' }}>
              <Typography variant="h5">Student Progress</Typography>
              {student.courses.map((course) => (
                <div key={course.courseId}>
                  <Typography variant="subtitle1" style={{ marginBottom: '0.5rem', marginTop: '0.5rem' }}>
                    {course.courseName}
                  </Typography>
                  <LinearProgress value={course.progress} color={getProgressColor(course.progress)} variant="determinate" />
                  <span>{course.progress}</span>
                  <br />
                </div>
              ))}
            </Paper>
          </SubCard>
        </Grid>
        <Grid item xs={12} sm={7.5}>
          <SubCard title="Details">
            <Grid container direction="column" spacing={1}>
              <Grid item>
                <TabBar student={student} />
              </Grid>
            </Grid>
          </SubCard>
        </Grid>
      </Grid>
    </MainCard>
  );
};

export default StudentDetail;
