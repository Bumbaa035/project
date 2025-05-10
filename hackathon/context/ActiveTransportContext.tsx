import React, { createContext, useContext, useState } from "react";

const ActiveTransportContext = createContext<{
  activeTransport: any;
  setActiveTransport: (v: any) => void;
}>({
  activeTransport: null,
  setActiveTransport: () => {},
});

export const useActiveTransport = () => useContext(ActiveTransportContext);

export const ActiveTransportProvider = ({ children }: { children: React.ReactNode }) => {
  const [activeTransport, setActiveTransport] = useState<any>(null);
  return (
    <ActiveTransportContext.Provider value={{ activeTransport, setActiveTransport }}>
      {children}
    </ActiveTransportContext.Provider>
  );
};