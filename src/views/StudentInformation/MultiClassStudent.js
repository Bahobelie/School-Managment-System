import React from 'react';
import StudentLIst from './studentLIst';

 const MultiClassStudent = () => {
  return (
  <StudentLIst additionalFilters={{MultiClass:'true'}}/>
  );
};
export default MultiClassStudent;