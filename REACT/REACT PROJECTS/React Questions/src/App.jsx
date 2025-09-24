import React, { Suspense, lazy } from "react";
import CounterAppWithState, { CounterWithReduce } from "./questions/Question1";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ListPage, { DetailPage } from "./questions/Question2";

// Lazy load Review itself
const Review = lazy(() => import("./questions/Review"));

const App = () => {
  return (
    <div>
      <h1>My React Practice</h1>

      <Suspense fallback={<h2>Loading Review Component...</h2>}>
        <Review />
      </Suspense>
    </div>
  );
};

export default App;


// const App = () => {
//   return (
//     <div>
//       <Router>
//         <Routes>
//           <Route path="/" element={<ListPage/>}></Route>
//           <Route path="/Detail/:id" element={<DetailPage/>}></Route>

//         </Routes>
//       </Router>
// <CounterAppWithState></CounterAppWithState>
// <CounterWithReduce></CounterWithReduce>
// <Review></Review>

//     </div>
//   )
// }

// export default App