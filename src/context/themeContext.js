"use client";

import { createContext } from "react";

export const StaticDataContext = createContext({});

export default function StaticDataProvider({ children }) {
  const message = "hello world";
  return (
    <StaticDataContext.Provider value={message}>
      {children}
    </StaticDataContext.Provider>
  );
}
