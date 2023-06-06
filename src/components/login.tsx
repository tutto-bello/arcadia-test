"use client";
import { useSession, signIn, signOut } from "next-auth/react";
import { Dispatch, SetStateAction, useEffect } from "react";
import { DefaultSession } from "next-auth";

interface LoginProps {
  setUser: Dispatch<SetStateAction<undefined | DefaultSession["user"]>>;
}

const Login = (props: LoginProps) => {
  const { setUser } = props;

  // get session from nextAuth
  const { data: session } = useSession();
  // useSession uses React Context

  useEffect(() => {
    if (session) {
      setUser(session.user);
    }
  }, [session, setUser]);

  if (session) {
    return (
      <div className="text-center">
        <h2 className="text-xl font-bold">Hello there!</h2>
        <p>Good to see you {session?.user?.name}</p>
        <h2>If you want quit, please click on the Sign out</h2>

        <button
          onClick={() => signOut()}
          type="button"
          className="bg-gray-500 p-2 rounded-md hover:opacity-80 mt-4"
        >
          Sign out
        </button>
      </div>
    );
  } else {
    return (
      <div className="text-center">
        <h2 className="text-xl font-bold max-w-md mx-auto">
          If you want to see a map please click on the Sign in button and use
          Google sign in.
        </h2>
        <button
          onClick={() => signIn()}
          type="button"
          className="bg-gray-500 p-2 rounded-md hover:opacity-80 mt-4"
        >
          Sign in
        </button>
      </div>
    );
  }
};

export default Login;
