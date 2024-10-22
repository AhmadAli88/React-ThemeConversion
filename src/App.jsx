import { useState } from "react";
import Index from "../src/components/index";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <Index.Header />
        <Index.Banner />
        <Index.Featured />
        <Index.Footer />
      </div>
    </>
  );
}

export default App;
