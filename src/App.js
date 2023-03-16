import React, { useState, createContext } from "react";
import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import HomePage from "./Components/HomePage/HomePage";
import DestinationPage from "./Components/DestinationPage/DestinationPage";
import CrewPage from "./Components/CrewPage/CrewPage"
import TechnologyPage from "./Components/TechnologyPage/TechnologyPage";
import AppData from "./Data/data.json";
export const Data = createContext(AppData);
export const IndexSelection = createContext();

function App() {
  const [indexSelection, setIndexSelection] = useState("Home")
  const IndexHandler = (newIndex)=>{
    setIndexSelection(newIndex)
  }
  const SelectedPage = ()=>{
    if (indexSelection === "Home") {
      return <HomePage></HomePage>
    } else if(indexSelection === "Crew") {
      return <CrewPage></CrewPage>
    }
    else if(indexSelection === "Technology") {
      return <TechnologyPage></TechnologyPage>
    }
    else if(indexSelection === "Destination") {
      return <DestinationPage></DestinationPage>
    }
  }
  console.log(indexSelection)
  return (
    <Data.Provider value={{AppData}}>
      <IndexSelection.Provider value={{indexSelection,IndexHandler}}>
        <div className="App">
          <NavBar></NavBar>
            {SelectedPage()}
        </div>
      </IndexSelection.Provider>
    </Data.Provider>
  );
}

export default App;
