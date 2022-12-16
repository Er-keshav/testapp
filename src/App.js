import './App.css';
import Header from "./Mycomponents/Header";
import {Breadcrum} from "./Mycomponents/Breadcrum";
import {Search} from "./Mycomponents/Search";
import {Searchresult} from "./Mycomponents/Searchresult";
import {Sidebar} from "./Mycomponents/Sidebar";
import {Results} from "./Mycomponents/Results";

function App() {
  return (
    <>
      <Header/>
      <Breadcrum/>
      <Search/>
      <Searchresult/>
      <Sidebar/>
      <Results/>
    </>
  );
}

export default App;
