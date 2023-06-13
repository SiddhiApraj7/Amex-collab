import React, { createContext, useState } from 'react';

// Create the context
export const AppContext = createContext();

// Create a provider component
export const AppProvider = ({ children }) => {
  // Define the state variables
  const [phoneNumber, setPhoneNumber] = useState('');
  const [serviceProviderChoice, setserviceProviderChoice] = useState(null);


  // Create the context value
  const contextValue = {
    phoneNumber,
    setPhoneNumber,
    serviceProviderChoice,
    setserviceProviderChoice,
  };

  // Provide the context value to the children components
  return (
    <AppContext.Provider value={contextValue}>
      {children}
    </AppContext.Provider>
  );
};
