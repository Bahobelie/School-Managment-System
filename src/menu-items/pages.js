// assets
import { IconKey } from '@tabler/icons-react';
import { IconUsers }  from '@tabler/icons-react';
// constant
const icons = {
  IconKey,
  IconUsers
};

// ==============================|| EXTRA PAGES MENU ITEMS ||============================== //

const pages = {
  id: 'Services',
  title: 'Services',
  caption: 'student management system',
  type: 'group',
  roles: ['parent','admin'],
  children: [
    {
      id: 'Student Information',
      title: 'Student Information',
      type: 'collapse',
      icon: icons.IconUsers,
      roles: ['admin','parent'],
      children: [
        {
          id: 'Student Detail',
          title: 'StudentDetail',
          type: 'item',
          breadcrumbs: false,
          url: '/StudentInformation/student-Detail',
          roles: ['parent','admin'],
        },
        {
          id: 'Student Admission',
          title: 'Student Admission',
          type: 'item',
          roles: ['admin','parent'],
        },
        {
          id: 'Online Admission',
          title: 'online Admission',
          type: 'item',
          roles: [],
        },
        {
          id: 'Disable Students',
          title: 'Disable Students',
          type: 'item',
          target: true,
          roles:['admin']
        },
        {
          id: 'Multi Class Student',
          title: 'Multi Class Student',
          type: 'item',
          target: true
        },
        {
          id: 'Student Category',
          title: 'Student Category',
          type: 'item',
          target: true
        },

      ]
    },
  ]
};

export default pages;
