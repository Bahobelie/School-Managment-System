// material-ui
import { Typography } from '@mui/material';

// project imports
import NavGroup from './NavGroup';
import menuItem from 'menu-items';
import { useSelector } from 'react-redux';

// ==============================|| SIDEBAR MENU LIST ||============================== //

const MenuList = () => {
  const userRole = useSelector((state) => state.customization.auth.role);

  const filterItemsByRole = (items) => {
    return items.filter((item) => {
      if (!item.roles || item.roles.includes(userRole) || item.roles.length === 0) {
        if (item.children) {
          item.children = filterItemsByRole(item.children);
        }
        return true;
      }
      return false;
    });
  };
  const filteredItems = filterItemsByRole(menuItem.items);
  const navItems = filteredItems.map((item) => {
    if (!item.roles || item.roles.includes(userRole) || item.roles.length === 0) {
      switch (item.type) {
        case 'group':
          return <NavGroup key={item.id} item={item} />;
        default:
          return (
            <Typography key={item.id} variant="h6" color="error" align="center">
              Menu Items Error
            </Typography>
          );
      }
    } else {
      return null; // Exclude the menu item if the user's role is not allowed
    }
  });

  return <>{navItems}</>;
};

export default MenuList;
