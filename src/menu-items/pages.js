// assets
import { IconKey } from '@tabler/icons-react';
import { IconUsers }  from '@tabler/icons-react';
import {IconReport} from '@tabler/icons-react';
// constant
const icons = {
  IconKey,
  IconUsers,
  IconReport
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
          url: '/StudentInformation/student-List',
          roles: ['parent','admin'],
        },
        {
          id: 'Student Admission',
          title: 'Student Admission',
          type: 'item',
          url: '/StudentInformation/admission',
          roles: ['admin','parent'],
        },
        {
          id: 'Disable Students',
          title: 'Disable Students',
          type: 'item',
          url: '/StudentInformation/dis_able-Student',
          roles:['admin']
        },
        {
          id: 'Multi Class Student',
          title: 'Multi Class Student',
          type: 'item',
          url: '/StudentInformation/mulit-class-Student',
          roles: [],
        },
        {
          id: 'Student Category',
          title: 'Student Category',
          type: 'item',
          url: '/StudentInformation/student-category',
          roles: ['admin']
        },
      ]
    },
    {
      id: 'Student Report',
      title: 'Report',
      type: 'collapse',
      icon: icons.IconReport,
      roles: ['admin','parent'],
      children: [
        {
          id: 'Student Information',
          title: 'Student Information',
          type: 'item',
          url: '/Report/student-Info',
          roles: ['parent','admin'],
        },
        {
          id: 'Finance',
          title: 'Finance',
          type: 'item',
          url: '/404-List',
          roles: ['parent','admin'],
        },
        {
          id: 'Attendance',
          title: 'Attendance',
          type: 'item',
          url: '/404-List',
          roles: ['parent','admin'],
        },
        {
          id: 'Examination',
          title: 'Examination',
          type: 'item',
          url: '/404-List',
          roles: ['parent','admin'],
        },
        {
          id: 'LessonPlan',
          title: 'LessonPlan',
          type: 'item',
          url: '/404-List',
          roles: ['parent','admin'],
        },
        {
          id: 'Library',
          title: 'Library',
          type: 'item',
          url: '/404-List',
          roles: ['parent','admin'],
        },
        {
          id: 'Transport',
          title: 'Transport',
          type: 'item',
          url: '/404-List',
          roles: ['parent','admin'],
        },
      ]
    }
  ]
};

export default pages;
