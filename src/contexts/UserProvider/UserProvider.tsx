import React from "react";

import { createContext } from "$/helpers/createContext";

interface IUserNft {
  id: number;
  address: string;
}

interface IUserContext {
  address?: string;
  setAddress: React.Dispatch<React.SetStateAction<string | undefined>>;
}

const [UserContext, useUserContext] = createContext<IUserContext>();

export const UserProvider: ReactFCWithChildrenProp = (props) => {
  const [address, setAddress] = React.useState<string>();

  const value = React.useMemo(
    () => ({
      address,
      setAddress,
    }),
    [address]
  );

  return <UserContext.Provider value={value} {...props} />;
};

export { useUserContext };
