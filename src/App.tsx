import "./App.css";
import Banner from "./components/Banner";
import Content from "./components/content/Content";
import CopyRight from "./components/CopyRight";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="container">
      <NavBar />
      <Banner />
      <Content />
      <Footer />
      <CopyRight />
    </div>
  );
}

export default App;
