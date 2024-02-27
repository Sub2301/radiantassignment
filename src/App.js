import Body from "./components/Body";
import BuilderCard from "./components/BuilderCard";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Rating from "./components/Rating";
import SignUp from "./components/SignUp";
import WebBuilderCard from "./components/WebBuilderCard";

function App() {
  return (
    <div className="font-inter">
      <Navbar />
      <Body />
      {/* <BuilderCard />
      <WebBuilderCard />

      <SignUp /> */}
      <Footer />
    </div>
  );
}

export default App;
