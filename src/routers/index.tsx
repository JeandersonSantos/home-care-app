import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "../modules/layout";
import ScheduleMedicalCare from "../modules/scheduleMedicalCare";
import ListSheduleMedicalCare from "../modules/listSheduleMedicalCare";

const Routers = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<ScheduleMedicalCare />} />
          <Route
            path="/records"
            element={<ListSheduleMedicalCare />}
          />
        </Route>
      </Routes>
    </Router>
  );
};
export default Routers;
