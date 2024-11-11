"use client";

import {
  createContext,
  useContext,
  useMemo,
  useState,
  ReactNode,
  useEffect,
} from "react";

const CONTEXT_ERROR =
  "useUserAgentContext must be used within a UserAgentProvider";

type UserAgent = string;

type UserAgentContextType = {
  userAgent: UserAgent | undefined;
  setUserAgent: (userAgent: UserAgent | undefined) => void;
};

type UserAgentProviderProps = {
  children: ReactNode;
  userAgent?: UserAgent;
};

const UserAgentContext = createContext<UserAgentContextType | undefined>(
  undefined
);

export const useUserAgentContext = (): UserAgentContextType => {
  const context = useContext(UserAgentContext);
  if (context === undefined) {
    throw new Error(CONTEXT_ERROR);
  }
  return context;
};

export const UserAgentProvider: React.FC<UserAgentProviderProps> = ({
  children,
  userAgent: userAgentProp,
}) => {
  const [userAgent, setUserAgent] = useState<UserAgent | undefined>(
    userAgentProp
  );

  useEffect(() => {
    if (typeof window === "undefined") return;
    setUserAgent(window.navigator.userAgent);
  }, []);

  const value = useMemo<UserAgentContextType>(
    () => ({
      userAgent,
      setUserAgent,
    }),
    [userAgent]
  );

  return (
    <UserAgentContext.Provider value={value}>
      {children}
    </UserAgentContext.Provider>
  );
};
