import React, { createContext, useContext, useState } from 'react';
import { userProfileData } from '../data/dummy';

// Renamed context to follow naming conventions
const StateContext = createContext();

const initialState = {
  chat: false,
  chart: false,
  userProfile: false,
  notification: false,
};

export const ContextProvider = ({ children }) => {
  const [activeMenu, setActiveMenu] = useState(true);

  // Initialize other state variables if needed
  const [state, setState] = useState(initialState);

  return (
    <StateContext.Provider
      value={{ activeMenu, setActiveMenu, state, setState }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
