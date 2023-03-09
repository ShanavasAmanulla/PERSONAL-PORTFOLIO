import "./App.css";
import { useContext } from "react";
import { themeContext } from "./Context";
import Home from "./Home";
import Login from "./Login";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter,Routes,Route } from 'react-router-dom';

function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Login />} />
          <Route path="home" element={<Home />} />       
          <Route path="login" element={<Login />} /> 
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
