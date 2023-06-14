import Home from "../../Components/User/HomePage";
import Navbar from "../../Components/User/Navbar";
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
