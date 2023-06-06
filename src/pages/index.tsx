import Login from "../components/login";
import Layout from "../components/layout";
import Map from "../components/map";
import { useState } from "react";
import { DefaultSession } from "next-auth";

export default function Home() {
  const [user, setUser] = useState<undefined | DefaultSession["user"]>(
    undefined
  );

  return (
    <Layout user={user}>
      {user && <Map />}
      <Login setUser={setUser} />
    </Layout>
  );
}
