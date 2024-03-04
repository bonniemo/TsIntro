import { ReactNode } from "react";

type HeaderProps = {
  
  children: ReactNode;
}

const Header = ({children}: HeaderProps) => {
  return (
    <>
    <h1>
    {children}
    </h1> 
    </>
  )
}

export default Header