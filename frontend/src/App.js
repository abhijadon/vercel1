import "./App.css";
import Aos from "aos";
import React, { useEffect } from "react";
import Header from "./components/Header/Header";
import Popup from "./components/Popup/Pop";
import Navbar from "../src/components/Header/Navbar";
import Footer from "../src/components/Footer/Foooter";
import Pop from "./components/Popup/Pop";
import Form from "./components/Form/Form";
import { useState } from "react";
function App() {
  const [buttonPop, setButtonPop] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setButtonPop(true);
    }, 5000);
  }, []);
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <>
      <Header />
      <Navbar />
      <main>
        <Form />
      </main>
      <Popup trigger={buttonPop} setTrigger={setButtonPop}>
        <Pop />
      </Popup>

      <Footer />
    </>
  );
}

export default App;
