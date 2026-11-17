import Navbar from "../components/shared/Navbar";
import Banner from "../components/shared/Banner";

import AboutApp from "../components/SiteComponents/AboutApp";
import Footer from "../components/shared/Footer";
import DownloadAppSection from "../components/SiteComponents/DownloadAppSection";

import ContactUs from "@/components/SiteComponents/ContactUs";
import AboutUs from "@/components/SiteComponents/AboutUs";
import FAQ from "@/components/SiteComponents/FAQ";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <AboutUs />
      <AboutApp />
      <DownloadAppSection />
      <FAQ />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default HomePage;
