import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignIn from "./pages/auth";
import AdminLayout from "./layouts/admin";
import Dashboard from "./pages/admin/dashboard";
import Users from "./pages/admin/users";
import Assets from "./pages/admin/assets";
import { ToastContainer } from "react-toastify";
import AuditTrail from "./pages/admin/auditTrail";

function App() {
  return (
    <>
      <ToastContainer />
      <Router>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="users" element={<Users />} />
            <Route path="assets" element={<Assets />} />
            <Route path="audit-trail" element={<AuditTrail />} />
            {/* <Route path="/auth/reset-password" element={<ResetPassword />} /> */}
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
