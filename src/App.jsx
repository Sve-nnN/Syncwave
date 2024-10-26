import "./App.css";
import Navbar from "./assets/components/navbar";
import Hero from "./assets/components/hero";
import Footer from "./assets/components/footer";
import Characteristics from "./assets/components/characteristics";
import Testimonials from "./assets/components/testimonios";
import CallToAction from "./assets/components/cta";
import Dashboard from "./assets/components/dashboard";
import Pricing from "./assets/components/pricing";
import Contact from "./assets/components/contact";
import SignIn from "./assets/components/signin";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Importa Routes

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/dashboard" element={<Dash />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;

function Wrapper({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}

function Login() {
  return (
    <Wrapper>
      <SignIn />
    </Wrapper>
  );
}

function Dash() {
  return (
    <Wrapper>
      <Dashboard />
    </Wrapper>
  );
}

function Index() {
  return (
    <Wrapper>
      <Hero id="hero" />
      <Characteristics id="characteristics" />
      <Testimonials id="testimonials" />
      <Pricing id="pricing" />
      <CallToAction id="cta" />
      <Contact />
    </Wrapper>
  );
}
