import { createContext, useCallback, useState } from 'react';
import axios from 'axios';
import { AUTH_ENDPOINT } from '../utils/contants';

export interface UserData {
  email: string;
  firstName: string;
  lastName: string;
  birthday: string;
}

export interface UserAuthorization {
  sessionToken: string;
  refreshToken: string;
}

export interface UserContextProps {
  isAuthenticated: boolean;
  authorization: UserAuthorization;
  data: UserData;
  localAuthentication: (email: string, password: string) => boolean;
  logout: () => boolean;
  setIsAuthenticated: (boolean) => void;
}

export const UserContext = createContext<UserContextProps | null>(null);

const provideContext = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<Boolean>(false);
  const [data, setData] = useState<UserData | null>(null);
  const [authorization, setAuthorization] = useState<UserAuthorization| null>(null);

  const localAuthentication = useCallback(async (email, password) => {
    let result;
    try {
      result = await axios.post(AUTH_ENDPOINT + '/auth/login', { mail: email, password });
    } catch (err) {
      setIsAuthenticated(false);
      setData(null);
      setAuthorization(null);
      return false;
    }

    setData(result.data);
    setIsAuthenticated(true);

    // todo
    setAuthorization(null);
    return true;
  }, []);

  const logout = useCallback(async () => {
    if (!isAuthenticated) return true;

    try {
      await axios.post(AUTH_ENDPOINT + '/auth/logout', null, { headers: { Authorization: authorization?.sessionToken as any}});
    } catch (err) {} // ignore

    setIsAuthenticated(false);
    setData(null);
    setAuthorization(null);
  }, [isAuthenticated, authorization])

  return {
    isAuthenticated,
    setIsAuthenticated,
    data,
    localAuthentication,
    logout,
  }
}

export const UserProvider: React.FC = ({ children }) => {
  const context = provideContext();
  return <UserContext.Provider value={context as any}>{children}</UserContext.Provider>;
};
