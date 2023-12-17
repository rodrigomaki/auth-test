import { createContext, useEffect, useState } from "react";

interface IUser {
  data: { email: string };
  role: string[];
  token: string;
}

interface IAuthContext {
  user: IUser | null;
  authenticate: (role: string[]) => void;
  logout: () => void;
}

const AuthContext = createContext({} as IAuthContext);

export const AuthProvider = ({ children }: { children: JSX.Element }) => {
  const [user, setUser] = useState<IUser | null>(null);

  useEffect(() => {
    const userStoraged = localStorage.getItem("user");
    if (userStoraged) {
      const userParsed = JSON.parse(userStoraged);
      setUser(userParsed);
    }
  }, []);

  const authenticate = (role: string[]) => {
    const email = "email@email.com";
    const token = "fake-token";
    const payload = { data: { email }, role, token };
    setUser(payload);
    localStorage.setItem("user", JSON.stringify(payload));
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, authenticate, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
