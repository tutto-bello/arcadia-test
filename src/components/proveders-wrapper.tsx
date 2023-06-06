"use client";
import { SessionProvider } from "next-auth/react";

interface ProvidersWrapperProps {
  children: React.ReactNode;
}

const ProvidersWrapper = (props: ProvidersWrapperProps) => {
  return <SessionProvider>{props.children}</SessionProvider>;
};

export default ProvidersWrapper;
