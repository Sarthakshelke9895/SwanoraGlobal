import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home/Home";
import PrivacyPolicy from "./Pages/PrivacyPolicy/PrivacyPolicy";
import TermsConditions from "./Pages/TermsConditions/TermsCondition";

function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/privacy-policy"
          element={<PrivacyPolicy />}
        />

        <Route
          path="/terms-and-conditions"
          element={<TermsConditions />}
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;