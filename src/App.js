import {Navigate,Routes,Route} from "react-router-dom";

import './App.css';
import {MainLayout} from "./layout";
import {NotFoundPage,PageMovie,DetailsPage} from "./pages";


function App() {

  return (
      <div className="App">
          <Routes>
            <Route  path={'/'} element={<MainLayout/>}>
              <Route index element={<Navigate to={'/movies'}/>}/>
              <Route path={'/movies'} element={<PageMovie/>}/>
              <Route path={'/movies/details'} element={<DetailsPage/>}/>
            </Route>
              <Route path={"*"} element={<NotFoundPage/>}/>
          </Routes>
      </div>
  );
}

export default App;