import React from "react";
// import NavButton from './components/NavButton';
import Navbar from "./components/navigation/Navbar";
import Routes from "./Routes";
import { BrowserRouter, Route } from "react-router-dom";
import Admin from "./components/admin";
// import NavPanel from './components/NavPanel';
// import Index from './components/content/Index'

const App = () => {
  return (
    <BrowserRouter>
      <Route
        exact
        path="/"
        component={() => {
          return (
            <div>
              {" "}
              <Navbar />
              <Routes />
            </div>
          );
        }}
      />
      <Route
        exact
        path="/admin"
        component={() => {
          return <Admin />;
        }}
      />
    </BrowserRouter>
  );

  //   let admin;
  //   if (!admin) {
  //     return (
  //       <div>
  //         <Navbar />
  //         <Routes />
  //       </div>
  //     );
  //   }
  //   return (
  //     <div>
  //       <Admin />
  //     </div>
  //   );
};
export default App;
