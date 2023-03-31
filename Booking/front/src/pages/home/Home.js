import Featured from "../../components/featured/Featured";
import FeaturedProperties from "../../components/featuredPropertie/FeaturedProperties";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import "./home.css";
import Header from "../../components/header/Header";
import PropertyList from "../../components/propertyList/PropertyList";
import MailList from "../../components/mailList/MailList";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <div className="homeContainer">
        <Featured />
        <h1 className="homeTitle">Browse by property type</h1>
        <PropertyList />
        <h1 className="homeTitle">Homes guests love</h1>
        <FeaturedProperties />
        <MailList/>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
