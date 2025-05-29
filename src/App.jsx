import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MainSearch from "./components/MainSearch";
import CompanySearchResults from "./components/CompanySearchResults";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import FavouriteList from "./components/FavouriteList";
import { Navbar } from "react-bootstrap";

function App() {
  return (
    <BrowserRouter>
      <Navbar>
        <Link className="btn" to={"/"}>
          Home
        </Link>
        <Link className="btn" to={"/favourites"}>
          Your favourites
        </Link>
      </Navbar>

      <Routes>
        <Route path="/" element={<MainSearch />} />
        <Route path="/:company" element={<CompanySearchResults />} />
        <Route path="/favourites" element={<FavouriteList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
