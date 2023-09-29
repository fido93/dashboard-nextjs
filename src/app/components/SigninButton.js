"use client";
import React, { useEffect } from "react";
import { signOut, useSession } from "next-auth/react";
import { logOut, setAuth } from "@/redux/features/authSlice";
import { useAppDispatch } from "@/redux/store";
import { useRouter } from "next/navigation";

const SigninButton = () => {
  const router = useRouter();
  const { data: session } = useSession();
  const dispatch = useAppDispatch();

  const onClickLogIn = async () => {
    router.push("/login");
  };

  useEffect(() => {
    if (session) {
      const username = session.user.name;
      const email = session.user.email;
      dispatch(setAuth({ username, email }));
    }
  }, [session, dispatch]);

  if (session && session.user) {
    return (
      <div>
        <h1>Is Authenticated</h1>
        <p>Username : {session.user.name}</p>
        <button
          onClick={() => {
            dispatch(logOut());
            signOut();
          }}
        >
          Sign Out
        </button>
      </div>
    );
  }

  return (
    <div>
      <button onClick={onClickLogIn}>Sign in</button>
    </div>
  );
};

export default SigninButton;
