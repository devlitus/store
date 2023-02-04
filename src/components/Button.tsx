import { useState } from "react";
import "@styles/button.module.css";

export const ButtonLogin = ({ children }: any) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const onClick = () => {
    console.log("clicked");
  };
  return <button onClick={onClick}>{children}</button>;
};
