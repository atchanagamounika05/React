import React from "react";

const UserContext = React.createContext("Mouni");

const UserProvider = UserContext.Provider;
const UserConsumer = UserContext.Consumer;

export { UserProvider, UserConsumer };
