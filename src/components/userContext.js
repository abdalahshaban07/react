import React from 'react';

//create the context

const UserContext = React.createContext('shaaban');

const UserProvider = UserContext.Provider;
const UserConsumer = UserContext.Consumer;

export default UserContext;

export { UserProvider, UserConsumer };
