// utils.js
export const filterData = (data, filters) => {
  return data.filter(item => {
    // Check if all filters are satisfied for the current item
    return filters.every(filter => {
      const { field, operator, value } = filter;
      const itemValue = String(item[field]).toLowerCase();
      const filterValue = String(value).toLowerCase();

      switch (operator) {
        case 'contains':
          return itemValue.includes(filterValue);
        case 'equals':
          return itemValue === filterValue;
        // You can add more cases for other comparison operators like 'startsWith', 'endsWith', etc. as needed
        default:
          return true; // Return true for unknown operators
      }
    });
  });
};
