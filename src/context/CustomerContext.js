import React from 'react';

export const CustomerContext = React.createContext({
    activeCustomer: 0,
    showHeaders: true,
    toggleHeaders: () => {},
    changeCustomer: () => {}
});