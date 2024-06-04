const MainLayout = ({children}) => {
  return (
    <>
      <header className="text-center">I am the Header</header>
      {children}
      <footer className="absolute w-full bottom-0 text-center">I am the footer</footer>
    </>
  )
};

export default MainLayout;
