import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./dashboard/Dashboard";
import Messages from "./dashboard/pages/Messages";
import MyJobs from "./dashboard/pages/MyJobs";
import Membership from "./dashboard/pages/Membership";
import AccountSetting from "./dashboard/pages/AccountSetting";
import SavedCandidate from "./dashboard/pages/SavedCandidate";
import SubmitJob from "./dashboard/pages/SubmitJob";
import MyProfile from "./dashboard/pages/MyProfile";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="Pages/Messages" element={<Messages />} />
        <Route path="Pages/MyJobs" element={<MyJobs />} />
        <Route path="Pages/Membership" element={<Membership />} />
        <Route path="Pages/AccountSetting" element={<AccountSetting />} />
        <Route path="Pages/SavedCandidate" element={<SavedCandidate />} />
        <Route path="Pages/SubmitJob" element={<SubmitJob />} />
        <Route path="Pages/MyProfile" element={<MyProfile />} />
      </Routes>
    </Router>
  );
}

export default App;
