import Footer from "../../components/footer";

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <main className="main-content">
        {children}
        </main>
        
      <Footer />
    </div>
  );
};

export default Layout;