
import './App.css';
import Layouts from './components/Layouts';
import { BrowserRouter } from "react-router-dom";
function App() {
  return (
    <>
    <BrowserRouter>
        <Layouts/>
    </BrowserRouter>
    </>
  );
}

export default App;
