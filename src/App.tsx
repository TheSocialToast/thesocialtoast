import "./App.css";
import AboutSection from "./Components/aboutus";
import ContactSection from "./Components/ContactUs";
import Footer from "./Components/footer";
import HeroSection from "./Components/heroSection";
import Navigation from "./Components/Nav";
import ServicesSection from "./Components/servicessection";
import StrategySection from "./Components/Strategy";
import StripSection from "./Components/Strip";

function App() {
  return (
    <>
      <Navigation></Navigation>
      <div></div>
      <HeroSection></HeroSection>
      <div style={{height: 0}}></div>
      <StripSection></StripSection>
      <AboutSection></AboutSection>
      <div style={{height: 50}}></div>
      {/* <StrategySection></StrategySection>
      <div style={{height: 50}}></div> */}
      <ServicesSection></ServicesSection>
      <div style={{height: 100}}></div>
      <ContactSection></ContactSection>
      <div></div>
      <Footer></Footer>
    </>
  );
}

export default App;
