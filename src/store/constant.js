// theme constant
export const gridSpacing = 3;
export const drawerWidth = 260;
export const appDrawerWidth = 320;
export const LOGIN="LOGIN";
export const loginSuccess = (user) => ({
  type: 'LOGIN_SUCCESS',
  payload: user,
});

export const loginFailure = () => ({
  type: 'LOGIN_FAILURE',
});

export const logout = () => ({
  type: 'LOGOUT',
});

export const Branches ={
  branch1: { id: 'branch1', Name: 'Addis Ababa Aware Branch' },
  branch2: { id: 'branch2', Name: 'Addis Ababa Lebu Branch' },
  branch3: { id: 'branch3', Name: 'Addis Ababa Weyra Branch' },
  branch4: { id: 'branch4', Name: 'Addis Ababa C.M.C Branch' },
  branch5: { id: 'branch5', Name: 'Addis Ababa Kality Branch' },
  branch6: { id: 'branch6', Name: 'Diredewa Branch' },
  branch7: { id: 'branch6', Name: ' Bahirdar Piasa Brach.' },
};

export const SELECTED_BRANCH="SELECTED_BRANCH";
export const selecetBranch=(selectedBranch)=>({
  type:'SELECTED_BRANCH',
   payload: selectedBranch,
})