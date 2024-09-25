// CSS
import "./App.css";

// TODO REACT ROUTER (using The NEW React Router method)
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

// TODO: REACT ROUTER PAGES COMPONENTS
import Home from "./Pages/Home/Home";
import About from "./Pages/About";
import Contact from "./Pages/Help/Contact";

// TODO: My layouts : TO store Links and NavLinks
import NavBarLayout from "./Layout/RootLayout/RootLayout";
import HelpLayout from "./Layout/HelpLayout/Help";

// !! Error Message Routes Component
import NotFound from "./Pages/NotFound/NotFound";

// CREATING THE BROWSER ROUTER (NEW METHOD: REACT V16.4 upward)
export const Routers = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<NavBarLayout />}>
      <Route index element={<Home />} />
      <Route path='About' element={<About />} />
      {/* Nested Route */}
      <Route path='Help' element={<HelpLayout />}>
        <Route path='Contact' element={<Contact />} />
      </Route>

      {/* Error page Route if None of the above page is Not found */}
      <Route path='*' element={<NotFound />} />
    </Route>
  )
);

function App() {
  return (
    <>
      {/* WRAPPING THE ROUTER USING THE NEW METHOD */}
      <RouterProvider router={Routers} />
    </>
  );
}

export default App;
