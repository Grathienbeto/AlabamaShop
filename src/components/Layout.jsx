import Navbar from "./navbar/Navbar";

export const Layout = ({children}) => {
  return (
    <main>
      <Navbar />
      {children}
    </main>
  );
};
