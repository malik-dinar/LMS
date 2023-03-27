// import Footer from "../../Components/Common/Footer";
import Home from "../../Components/User/homePage";
import Navbar from "../../Components/User/navbar";
import { lazy, Suspense } from "react";
const Footer = lazy(() => import("../../Components/Common/Footer"));

function HomePage() {
  return (
    <>
      <Navbar />
      <Home />
      <Suspense fallback={<div>Loading....................</div>}>
        <Footer />
      </Suspense>
    </>
  );
}

export default HomePage;
