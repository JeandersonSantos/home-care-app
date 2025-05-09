import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "../modules/layout";
import MainPage from "../modules/mainPage";

const Routers = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage />} />
        </Route>
      </Routes>
    </Router>
  );
};
export default Routers;
