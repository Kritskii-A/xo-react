import { FC, PropsWithChildren } from "react";
import Header from "./Header/Header";
import { StyledMain } from "./styled";

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Header />
      <StyledMain>{children}</StyledMain>
    </>
  );
};

export default Layout;
