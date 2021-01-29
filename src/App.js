import { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import Appointments from "./Components/Appointments/Appointments/Appointments";
import AllPatient from "./Components/Dashboard/AllPatient/AllPatient";
import Dashboard from "./Components/Dashboard/Dashboard/Dashboard";
import DoctorAppointments from "./Components/Dashboard/DoctorAppointments/DoctorAppointments";
import Prescription from "./Components/Dashboard/Prescription/Prescription";
import Home from "./Components/Home/Home/Home";
import Login from "./Components/Login/Login/Login";
import Test from "./Components/Login/Login/Test";
import PrivateRoute from "./Components/Login/PrivateRoute/PrivateRoute";
export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/appointment">
            <Appointments></Appointments>
          </Route>
          <Route path="/doctor/dashboard">
            <Dashboard></Dashboard>
          </Route>
          <Route path="/doctor/appointment">
            <DoctorAppointments></DoctorAppointments>
          </Route>
          <Route path="/doctor/prescriptions">
            <Prescription></Prescription>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/doctor/allPatient">
            <AllPatient></AllPatient>
          </Route>
          <PrivateRoute path="/test">
            <Test></Test>
          </PrivateRoute>
          <Route path="*">
            <h1 className="text-center mt-5 py-5">404 not found</h1>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
