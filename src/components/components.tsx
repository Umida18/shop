import { Button } from "antd";
import React, { ReactNode } from "react";
interface ButtonPrimaryProps {
  children: ReactNode;
}
export const ButtonPrimary: React.FC<ButtonPrimaryProps> = ({ children }) => {
  return (
    <Button
      style={{
        backgroundColor: "#0E1422",
        paddingInline: "24px",
        paddingBlock: "12px",
        color: "white",
        height: "44px",
      }}
    >
      {children}
    </Button>
  );
};
