import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/layout/layout";
import HomePage from "./page/homepage"; // Import your HomePage component
import Listing from "./page/listing"; // Import your Listing component

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Define the layout route */}
        <Route path="/" element={<Layout />}>
          {/* Nested routes within the layout */}
          <Route index element={<HomePage />} /> {/* Default route */}
          <Route path="listing" element={<Listing />} />{" "}
          {/* Listing page route */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
