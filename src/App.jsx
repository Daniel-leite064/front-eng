import { BrowserRouter, Routes, Route } from "react-router";

import { Home } from "./pages/Home";
import { Post } from "./pages/Post";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post/:id" element={<Post />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
