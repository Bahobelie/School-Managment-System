import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableRow } from '@mui/material';
import SubCard from '../../ui-component/cards/SubCard';

export const ProfileView = ({student}) => {
  return (
    <>
      <TableContainer>
        <Table>
          <TableBody>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="right">{ student?.name }</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Class</TableCell>
              <TableCell align="right">{ student?.class }</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Section</TableCell>
              <TableCell align="right">{ student?.section }</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Branch</TableCell>
              <TableCell align="right">{ student?.branch }</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>PhonNumber</TableCell>
              <TableCell align="right">{ student?.phone }</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Email</TableCell>
              <TableCell align="right">{ student?.email }</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <div style={ { marginTop: '5rem' } }>
        <SubCard title="Parent Details">
          <TableContainer>
            <Table>
              <TableBody>
                <TableRow>
                  <TableCell>FatherName</TableCell>
                  <TableCell align="right">{ student?.FatherName }</TableCell>
                  {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */ }
                  <TableCell align="right" rowSpan={ 3 }>
                    {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */ }
                    { <img src={ student?.FatherAvatar } alt={ 'photo' } width={ '100' } height={ '100' } /> }
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Father Phone</TableCell>
                  {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */ }
                  <TableCell align="right">{ student?.FatherPhone }</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Father Occupation</TableCell>
                  <TableCell align="right">{ student?.FatherOccupation }</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Father Email</TableCell>
                  <TableCell align="right">{ student?.FatherEmail }</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>MotherName</TableCell>
                  <TableCell align="right">{ student?.MotherName }</TableCell>
                  {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */ }
                  <TableCell align="right" rowSpan={ 3 }>
                    {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */ }
                    { <img src={ student?.MotherAvatar } alt={ 'photo' } width={ '80' } height={ '80' } /> }
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Mother Phone</TableCell>
                  <TableCell align="right">{ student?.MotherPhone }</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Mother Occupation</TableCell>
                  <TableCell align="right">{ student?.motherOccupation }</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Guardian Name</TableCell>
                  <TableCell align="right">{ student?.GuardianName }</TableCell>
                  {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */ }
                  <TableCell align="right" rowSpan={ 3 }>
                    {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */ }
                    { <img src={ student?.GuardianAvatar } alt={ 'photo' } width={ '80' } height={ '80' } /> }
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Guardian Phone</TableCell>
                  {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */ }
                  <TableCell align="right">{ student?.GuardianPhone }</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </SubCard>
      </div>
    </>

  );
};
