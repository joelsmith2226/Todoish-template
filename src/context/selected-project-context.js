import React, { createContext, useContext, useState } from 'react';
import { useProjects } from '../hooks';

export const SelectedProjectContext = createContext();
export const SelectedProjectProvider = ({ children }) => {
   const { selectedProject, setSelectedProjects } = useState('INBOX');

   return (
      <SelectedProjectContext.Provider value={{selectedProject, setSelectedProjects}}>
      {children}
      </SelectedProjectContext.Provider>
   );
};

export const useSelectedProjectValue = () => useContext(SelectedProjectContext);
