
import './App.css';

import Main from "./component/main/Main"
import Detail from "./component/detail/Detail"

import {BrowserRouter as Router , Routes , Route} from "react-router-dom"

function App() {

  return (
    <div className="App">
      <Router>
        <Routes>
       <Route path="/" element={<Main/>}/>
       <Route path={`/details/:id`} element={<Detail/>}/>
      </Routes>
      </Router>
    </div>
  );
}

export default App;
