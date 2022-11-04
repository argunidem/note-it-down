import React, { createContext, useState } from 'react';

const ToggleContext = createContext();

export const ToggleProvider = ({ children }) => {
  const [showForm, setShowForm] = useState(false);

  return (
    <ToggleContext.Provider value={{ showForm, setShowForm }}>
      {children}
    </ToggleContext.Provider>
  );
};

export default ToggleContext;
