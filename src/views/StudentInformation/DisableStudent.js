import React from 'react';
import StudentLIst from './studentLIst';

const DisableStudent = () => {
  return (
    <StudentLIst additionalFilters={{category:'Physical Damaged'}}/>
  );
};
export default DisableStudent;