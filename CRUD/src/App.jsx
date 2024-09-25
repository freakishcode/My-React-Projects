// TODO: LOAD PAGES WHEN CLICK OF NEEDED
import { lazy, Suspense } from "react";
// CSS
import "./App.css";

// TODO: using REACT ROUTER (External library)
import { Routes, Route } from "react-router-dom";

// TODO: using REACT ERROR BOUNDARY (External library)
import { ErrorBoundary } from "react-error-boundary";

// TODO: SKELETON LOADING IMAGE FOR SUSPENSE
// import Skeleton from "./Utilities/Skeleton/Skeleton";
import Preloader from "./UI/Preloader/Preloader";

// TODO: REACT ROUTER PAGES COMPONENTS & lazying load pages when needed
const Home = lazy(() => import("./Pages/Home"));
const Create = lazy(() => import("./Pages/Create"));
const Update = lazy(() => import("./Pages/Update"));
const Read = lazy(() => import("./Pages/Read"));

// !! Error Message Routes Component
import NotFound from "./Pages/NotFound/NotFound";

function App() {
  return (
    <div className='App'>
      <ErrorBoundary
        fallback={
          <h2 className='ErrorBoundary'>
            An Error Occurred in one of your Components
          </h2>
        }
      >
        <Suspense fallback={<Preloader />}>
          <Routes>
            <Route index element={<Home />} />
            <Route path='/Create' element={<Create />} />
            <Route path='/Update/:id' element={<Update />} />
            <Route path='/Read/:id' element={<Read />} />

            {/* ERROR FOR ROUTE PAGE THAT DOES NOT EXITS  */}
            <Route path='*' element={<NotFound />} />
          </Routes>
        </Suspense>
      </ErrorBoundary>
    </div>
  );
}

export default App;
