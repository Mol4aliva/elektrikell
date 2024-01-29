import {useState} from "react";
import './App.scss'
import Container from 'react-bootstrap/Container';
import Body from "./Body";
import Head,{ DEFAULT_ACTIVE_BUTTON }from "./Head";
import Footer from "./Footer";
import LeftSideBar from "./LeftSideBar";


function App() {
    const [activePrice, setActivePrice] = useState(DEFAULT_ACTIVE_BUTTON);
    const [activeHour, setActiveHour] = useState();
    const [showSideBar, setShowSideBar] = useState(false);
    const handleCloseSideBar = () => setShowSideBar(false);
    const handleOpenSideBar = () => setShowSideBar(true);
  return (
    <Container>
      <Head
          activePrice = {activePrice}
          setActivePrice={setActivePrice}
          handleOpenSideBar={handleOpenSideBar}
      />
      <Body activeHour={activeHour}/>
      <Footer
          activePrice = {activePrice}
          activeHour={activeHour}
          setActiveHour={setActiveHour}
      />
      <LeftSideBar show ={showSideBar} handleClose={handleCloseSideBar}/>
    </Container>
  );
}

export default App;
