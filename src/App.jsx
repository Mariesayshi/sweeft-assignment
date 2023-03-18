import { useState } from "react";
import UserList from "./components/UserList";
import "./App.css";
import DetailedUser from "./components/DetailedUser";
import { Route, Routes, useLocation } from "react-router-dom";

const App = () => {
  const [breadCrumbs, setBreadCrumbs] = useState([]);
  const location = useLocation();

  return (
    <Routes>
      <Route path="/" element={<UserList userId={null} />} />
      <Route
        path="/user/:id"
        element={
          <DetailedUser
            key={location.key}
            breadCrumbs={breadCrumbs}
            setBreadCrumbs={setBreadCrumbs}
          />
        }
      />
    </Routes>
  );
};

export default App;
