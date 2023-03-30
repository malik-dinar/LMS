// import Footer from "../../Components/Common/Footer";
import Home from "../../Components/User/homePage";
import Navbar from "../../Components/User/navbar";
import { lazy, Suspense } from "react";
import ErrorBoundary from "../../Components/Common/ErrorBoundry";
const Footer = lazy(() => import("../../Components/Common/Footer"));

function HomePage() {
  return (
    <>
    <ErrorBoundary>
    <Navbar />
    </ErrorBoundary>
   
      <Home />
      <Suspense fallback={<div>Loading....................</div>}>
        <Footer />
      </Suspense>
    </>
  );
}

export default HomePage;
