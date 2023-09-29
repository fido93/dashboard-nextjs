"use client";

import { useAppDispatch } from "@/redux/store";
import { signIn } from "next-auth/react";
import Image from "next/image";
import { useSearchParams, useRouter } from "next/navigation";
import { ChangeEvent, useState } from "react";

export const LoginForm = () => {
  const router = useRouter();
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const dispatch = useAppDispatch();

  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/";

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      setFormValues({ email: "", password: "" });

      const res = await signIn("credentials", {
        redirect: false,
        email: formValues.email,
        password: formValues.password,
        callbackUrl,
      });

      if (!res.error) {
        router.push(callbackUrl);
      } else {
        setError("invalid email or password");
      }
    } catch (error) {
      setError(error);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  return (
    <form onSubmit={onSubmit}>
      {error && <p>{error}</p>}
      <div
        style={{
          width: "1000px",
          margin: "0 auto",
          display: "flex",
          padding: "30px",
          justifyContent: "center",
        }}
      >
        <a
          style={{
            backgroundColor: "orange",
            display: "flex",
            alignItems: "center",
            gap: "15px",
            padding: "12px",
            borderRadius: "6px",
            cursor: "pointer",
          }}
          onClick={() => signIn("google", { callbackUrl })}
          role="button"
        >
          <Image
            src="https://cdn-icons-png.flaticon.com/512/2991/2991148.png"
            width={50}
            height={50}
            alt="logo"
          />
          Continue with Google
        </a>
      </div>
    </form>
  );
};
