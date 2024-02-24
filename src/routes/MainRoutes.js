import { lazy } from 'react';

// project imports
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';

// import DataGridPremiumDemo from '../views/StudentInformation/TestGrid';


// dashboard routing
const DashboardDefault = Loadable(lazy(() => import('views/dashboard/Default')));

// utilities routing
const UtilsTypography = Loadable(lazy(() => import('views/utilities/Typography')));
const UtilsColor = Loadable(lazy(() => import('views/utilities/Color')));
const UtilsShadow = Loadable(lazy(() => import('views/utilities/Shadow')));
const UtilsMaterialIcons = Loadable(lazy(() => import('views/utilities/MaterialIcons')));
const UtilsTablerIcons = Loadable(lazy(() => import('views/utilities/TablerIcons')));
const StudentList = Loadable(lazy(() => import('views/StudentInformation/studentLIst')));
const StudentDetail = Loadable(lazy(() => import('views/StudentInformation/StudentDetail')));
const StudentAddmission = Loadable(lazy(() => import('views/StudentInformation/StudentAdmission')));
const DisAbleStudent = Loadable(lazy(() => import('views/StudentInformation/DisableStudent')));
const MultiClassStudent = Loadable(lazy(() => import('views/StudentInformation/MultiClassStudent')));
const StudentCategory = Loadable(lazy(() => import('views/StudentInformation/StudentCategory')));
const Page404  = Loadable(lazy(() => import('views/utilities/page-not-found')));
const StudentInfo_Report = Loadable(lazy(() => import('views/StudentInformation/ReportView/StudentInfromationReport')));
// sample page routing
const SamplePage = Loadable(lazy(() => import('views/sample-page')));
// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: '/',
  element: <MainLayout />,
  children: [
    {
      path: 'dashboard',
      children: [
        {
          path: 'default',
          element: <DashboardDefault />
        },
      ]
    },
    {
      path: 'StudentInformation',
      children: [
        {
          path: 'student-List',
          element: <StudentList />
        },
        {
          path: 'student-Detail/:studentID',
          element: <StudentDetail />
        },
        {
          path: 'admission',
          element: <StudentAddmission />
        },
        {
          path: 'dis_able-Student',
          element: <DisAbleStudent />
        },
        {
          path: 'mulit-class-Student',
          element: <MultiClassStudent />
        },
        {
          path: 'student-category',
          element: <StudentCategory />
        },
      ],
    },

    // ==============================|| Util Path ||============================== //
    {
      path: 'utils',
      children: [
        {
          path: 'util-typography',
          element: <UtilsTypography />
        }
      ]
    },
    {
      path: 'utils',
      children: [
        {
          path: 'util-color',
          element: <UtilsColor />
        }
      ]
    },
    {
      path: 'utils',
      children: [
        {
          path: 'util-shadow',
          element: <UtilsShadow />
        }
      ]
    },
    {
      path: 'icons',
      children: [
        {
          path: 'tabler-icons',
          element: <UtilsTablerIcons />
        }
      ]
    },
    {
      path: 'icons',
      children: [
        {
          path: 'material-icons',
          element: <UtilsMaterialIcons />
        }
      ]
    },
    {
      path: 'sample-page',
      element: <SamplePage />
    },

    // ==============================|| Report Path ||============================== //

    {
      path: 'Report',
      children: [
        {
          path: 'student-Info',
          element: <StudentInfo_Report />
        },
      ]
    },
    {
      path: '404',
      element: <Page404 />,
    },
  ],
};

export default MainRoutes;
