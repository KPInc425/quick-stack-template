import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <>
      <header className="text-center">I am the Header</header>
      <Outlet />
      <footer className="absolute w-full bottom-0 text-center">I am the footer</footer>
    </>
  )
};

export default MainLayout;
