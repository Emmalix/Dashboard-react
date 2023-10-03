// import { Space } from "antd";
import './App.css';
import AppHeader from './Components/App-header';
import NavBar from "./Components/NavBar";
// import SideMenu from './Components/Side-menu';
import PageContent from './Components/Page-content';
import AppFooter from './Components/App-footer';


function App() {
  return (
    <div className="App">

      <AppHeader/>
      <NavBar/> 
      {/* <SideMenu></SideMenu> */}
      <PageContent></PageContent>
      <AppFooter/>

    </div>
  );
}

export default App;
