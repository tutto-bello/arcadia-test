import { DefaultSession } from "next-auth";
import Footer from "./footer";
import Navbar from "./navbar";
import ProvidersWrapper from "./proveders-wrapper";

interface LayoutProps {
  children: React.ReactNode;
  user: undefined | DefaultSession["user"];
}

const Layout = (props: LayoutProps) => {
  const { children, user } = props;

  return (
    <ProvidersWrapper>
      <Navbar user={user} />
      <div className="container mx-auto py-20 px-4">{children}</div>
      <Footer />
    </ProvidersWrapper>
  );
};

export default Layout;
