import { FunctionComponent } from "react";

interface HeaderProps {
  title: string;
}

const Header: FunctionComponent<HeaderProps> = ({ title }) => {
  return <h1>{title ? title : "Default title"}</h1>;
};

export default Header;
