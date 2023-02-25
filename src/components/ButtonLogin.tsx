import { useState } from "react";
import { auth } from "@services/firebase";
import { signInWithRedirect, GoogleAuthProvider } from "firebase/auth";
import "@styles/button.module.css";

export const ButtonLogin = ({ children }: any) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const onLogin = async () => {
    const provider = new GoogleAuthProvider();
    await signInWithRedirect(auth, provider);
    const result = await auth.getRedirectResult(auth);
    console.log("result", result);
  };
  return <button onClick={onLogin}>{children}</button>;
};
