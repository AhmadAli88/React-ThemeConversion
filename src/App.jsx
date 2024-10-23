import { useState } from "react";
import Index from "../src/components/index";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <Index.SubHeader />
        <Index.Header />
        <Index.Banner />
        <Index.Featured />
        <Index.VideoSection />
        <Index.VideoContent />
        <Index.FunFacts />
        <Index.BestDeals />
        <Index.PropertiesSection />
        <Index.ContactSection />
        <Index.Footer />
      </div>
    </>
  );
}

export default App;
