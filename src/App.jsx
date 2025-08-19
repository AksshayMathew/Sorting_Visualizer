// import SortingChart from "./components/SortingChart";
// import SortingProvider from "./contexts/SortingContext";

// function App() {
//     return (
//         <SortingProvider>
//             <div className="container mx-auto">
//                 <SortingChart />
//             </div>
//         </SortingProvider>
//     );
// }

// export default App;


import { useState } from "react";
import SortingChart from "./components/SortingChart";
import AboutPage from "./components/AboutPage";
import SortingProvider from "./contexts/SortingContext";

function App() {
  const [showAboutPage, setShowAboutPage] = useState(false);

  const handleAboutClick = () => {
    console.log('about clicked')
    setShowAboutPage(!showAboutPage);
  };

  return (
    <SortingProvider>
      <div className="container mx-auto">
        <nav className="bg-purple-950 p-4 shadow-lg">
          <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-2xl font-bold text-purple-200">
              Sorting Visualizer
            </h1>
            <button
              onClick={handleAboutClick}
              className="text-purple-300 hover:text-purple-100 transition-colors"
            >
              {showAboutPage ? "Back to Visualizer" : "About"}
            </button>
          </div>
        </nav>

        {showAboutPage ? <AboutPage /> : <SortingChart />}
      </div>
    </SortingProvider>
  );
}

export default App;
