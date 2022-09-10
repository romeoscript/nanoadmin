import "./App.css";
import GridTwo from "./components/gridtwo/GridTwo";
import MainDash from "./components/MainDash/MainDash";

import Sidebar from "./components/sidebar/Sidebar";

function App() {
  return (
    <div className="App">
      <div className="AppGlass">
        <Sidebar />
        <div className="grid_item">
          <MainDash />
          <GridTwo />
        </div>
      </div>
    </div>
  );
}

export default App;
