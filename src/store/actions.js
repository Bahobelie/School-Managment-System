// action - customization reducer
export const SET_MENU = '@customization/SET_MENU';
export const MENU_TOGGLE = '@customization/MENU_TOGGLE';
export const MENU_OPEN = '@customization/MENU_OPEN';
export const SET_FONT_FAMILY = '@customization/SET_FONT_FAMILY';
export const SET_BORDER_RADIUS = '@customization/SET_BORDER_RADIUS';

// Define LOGIN action type
export const LOGIN = '@customization/LOGIN';

// Define the action creator function for LOGIN
export const login = (userData) => ({
  type: LOGIN,
  payload: userData,
});