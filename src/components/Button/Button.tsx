import { FC, MouseEventHandler, ReactNode } from "react";
import { StyledButton } from "./styled";

interface IButton {
  onClick: MouseEventHandler<HTMLButtonElement>;
  children?: ReactNode;
}

const Button: FC<IButton> = ({ children, onClick }) => {
  return <StyledButton onClick={onClick}>{children}</StyledButton>;
};

export default Button;
