import React, { FC } from "react";
import { Main } from "./MainWrapper.styles";
const MainWrapper: FC = ({ children }) => {
  return <Main>{children}</Main>;
};

export default MainWrapper;
