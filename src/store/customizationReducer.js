// project imports
import config from 'config';
import { Branches } from './constant';
// action - state management
import * as actionTypes from './actions';

const initialAuthState = {
  isLoggedIn: false,
  email: null,
  role: null,
};

export const initialState = {
  isOpen: [], // for active default menu
  defaultId: 'default',
  fontFamily: config.fontFamily,
  borderRadius: config.borderRadius,
  opened: true,
  selectedBranch:Branches.branch1.Name,
  auth:initialAuthState,
  defaultPath:null
};

// ==============================|| CUSTOMIZATION REDUCER ||============================== //

const customizationReducer = (state = initialState, action) => {
  let id;
  switch (action.type) {
    case actionTypes.MENU_OPEN:
      id = action.id;
      return {
        ...state,
        isOpen: [id]
      };
    case actionTypes.SET_MENU:
      return {
        ...state,
        opened: action.opened
      };
    case actionTypes.SET_FONT_FAMILY:
      return {
        ...state,
        fontFamily: action.fontFamily
      };
    case actionTypes.SET_BORDER_RADIUS:
      return {
        ...state,
        borderRadius: action.borderRadius
      };
    // Authentication-related cases
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        auth: {
          isLoggedIn: true,
          email: action.payload.email,
          role: action.payload.role,
        },
      };
    case 'LOGOUT':
      return {
        ...state,
        auth: {
          isLoggedIn: false,
          email: null,
          role: null
        },
      };
    case 'SELECTED_BRANCH':
      return {
        ...state,
        selectedBranch: action.payload,
      };
    default:
      return state;
  }
};

export default customizationReducer;
