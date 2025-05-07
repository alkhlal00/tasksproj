import { Route, Routes } from "react-router-dom";
import Header from "./component/Header";
import Footer from "./component/Footer";
import Home from "./Pages/Home";
import Tasks from "./Pages/Tasks";
import { Contact } from "./Pages/Contact";
import {  Service } from "./Pages/Service";
import { About } from "./Pages/About";

function App() {
  return (
    <div className="bg-gray-50">
      <Header />
      <main className="relative isolate px-6 pt-20 lg:px-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/service" element={<Service />} />
          <Route path="/about" element={<About />} />


        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
