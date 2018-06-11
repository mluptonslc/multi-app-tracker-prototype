import React from 'react';

export const CustomerContext = React.createContext({
    activeCustomer: 0,
    showHeaders: false,
    toggleHeaders: () => {},
    changeCustomer: () => {}
});