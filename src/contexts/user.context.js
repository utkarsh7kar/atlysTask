import React, { createContext, useState } from "react";
import { USER_DATA_LIST } from "../constants/dummyData";

export const UserContext = createContext();

function UserProvider({ children }) {
  const [user, setUser] = useState(USER_DATA_LIST[0]);
  const [userDataList, setUserData] = useState(USER_DATA_LIST);

  const loginUser = (userData) => {
    const newUserData = [...userDataList, userData];
    setUserData(newUserData);
    setUser(userData);
  };

  const logoutUser = () => {
    setUser(null);
  };

  return (
    <UserContext.Provider value={{ user, userDataList, loginUser, logoutUser }}>
      {children}
    </UserContext.Provider>
  );
}

export default React.memo(UserProvider);
