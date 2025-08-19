// import { useContext, useEffect } from "react";

// import { SortingContext } from "../contexts/SortingContext";
// import algorithmInfos from "../data/algorithmInfos";

// function SortingChart() {
//     const { sortingState, generateSortingArray, startVisualizing, changeSortingSpeed, changeAlgorithm } = useContext(SortingContext);

//     useEffect(() => {
//         generateSortingArray();
//     }, []);

//     return (
//         <div className="mt-4 mb-4 flex flex-col items-center">
//             <img src="/logo.png" className="max-w-lg mb-6 w-full" />

//             <div className="flex flex-wrap justify-center gap-3 mb-6">
//                 <button
//                     onClick={() => changeAlgorithm("bubble_sort")}
//                     className={`bg-carbon text-white px-5 py-3 rounded-3xl ${
//                         sortingState.algorithm === "bubble_sort" ? "bg-turquoise-dark" : "hover:bg-carbon-light"
//                     } transition-all`}
//                 >
//                     Bubble Sort
//                 </button>
//                 <button
//                     onClick={() => changeAlgorithm("insertion_sort")}
//                     className={`bg-carbon text-white px-5 py-3 rounded-3xl ${
//                         sortingState.algorithm === "insertion_sort" ? "bg-turquoise-dark" : "hover:bg-carbon-light"
//                     } transition-all`}
//                 >
//                     Insertion Sort
//                 </button>
//                 <button
//                     onClick={() => changeAlgorithm("selection_sort")}
//                     className={`bg-carbon text-white px-5 py-3 rounded-3xl ${
//                         sortingState.algorithm === "selection_sort" ? "bg-turquoise-dark" : "hover:bg-carbon-light"
//                     } transition-all`}
//                 >
//                     Selection Sort
//                 </button>
//                 <button
//                     onClick={() => changeAlgorithm("merge_sort")}
//                     className={`bg-carbon text-white px-5 py-3 rounded-3xl ${
//                         sortingState.algorithm === "merge_sort" ? "bg-turquoise-dark" : "hover:bg-carbon-light"
//                     } transition-all`}
//                 >
//                     Merge Sort
//                 </button>
//                 <button
//                     onClick={() => changeAlgorithm("quick_sort")}
//                     className={`bg-carbon text-white px-5 py-3 rounded-3xl ${
//                         sortingState.algorithm === "quick_sort" ? "bg-turquoise-dark" : "hover:bg-carbon-light"
//                     } transition-all`}
//                 >
//                     Quick Sort
//                 </button>
//                 <button
//                     onClick={() => changeAlgorithm("radix_sort")}
//                     className={`bg-carbon text-white px-5 py-3 rounded-3xl ${
//                         sortingState.algorithm === "radix_sort" ? "bg-turquoise-dark" : "hover:bg-carbon-light"
//                     } transition-all`}
//                 >
//                     Radix Sort
//                 </button>
//             </div>

//             <div className="max-w-3xl w-full">
//                 <div className="mb-4 chart-container">
//                     <div className="base"></div>

//                     {sortingState.array.map((bar, i) => (
//                         <div key={i} className="bar-container">
//                             <div className={`select-none bar bar-${bar.state}`} style={{ height: `${Math.floor((bar.value / 1000) * 100)}%` }}>
//                                 <p className={`pl-1.5 ${bar.state === "idle" ? "text-[#B1D2CF]" : "text-[#D8B7BE]"}`}>{bar.value}</p>
//                             </div>
//                         </div>
//                     ))}
//                 </div>

//                 <div className="flex items-center gap-4 max-w-3xl mb-8">
//                     <button disabled={sortingState.sorting} onClick={startVisualizing} className="px-4 py-2 push-btn text-white-light disabled:brightness-75">
//                         Start
//                     </button>
//                     <button disabled={sortingState.sorting} onClick={() => generateSortingArray()} className="text-white-light disabled:brightness-75">
//                         New Array
//                     </button>
//                     <select
//                         disabled={sortingState.sorting}
//                         onChange={changeSortingSpeed}
//                         defaultValue="slow"
//                         className="ml-auto bg-carbon px-2 py-2 rounded-md cursor-pointer outline-none focus:ring ring-turquoise-dark disabled:brightness-75 disabled:cursor-default"
//                     >
//                         <option value="slow">Slow</option>
//                         <option value="normal">Normal</option>
//                         <option value="fast">Fast</option>
//                     </select>
//                 </div>

//                 <div className="w-full h-0.5 bg-carbon-light mb-4" />
//                 <div>
//                     <h1 className="font-bold text-2xl md:text-4xl">{algorithmInfos[sortingState.algorithm].name}</h1>
//                     <p className="whitespace-pre-line mb-6">{algorithmInfos[sortingState.algorithm].description}</p>
//                     <div className="w-full h-0.5 bg-carbon-light mb-6" />

//                     <div className="overflow-auto">
//                         <table className="w-full text-left">
//                             <thead>
//                                 <tr>
//                                     <th className="px-4 border-r border-carbon-light" rowSpan={2}>
//                                         Algorithm
//                                     </th>
//                                     <th className="px-4 border-r border-carbon-light" colSpan={3}>
//                                         Time Complexity
//                                     </th>
//                                     <th className="px-4">Space Complexity</th>
//                                 </tr>
//                                 <tr className="border-b border-carbon-light">
//                                     <th className="px-4 pb-2">Best</th>
//                                     <th className="px-4 pb-2">Average</th>
//                                     <th className="px-4 pb-2 border-r border-carbon-light">Worst</th>
//                                     <th className="px-4 pb-2">Worst</th>
//                                 </tr>
//                             </thead>
//                             <tbody>
//                                 {Object.keys(algorithmInfos).map((key, i) => (
//                                     <tr key={i} className="hover:bg-carbon-light whitespace-nowrap">
//                                         <td className={`px-4 py-1 ${i === 0 ? "pt-2" : ""} border-r border-carbon-light`}>{algorithmInfos[key].name}</td>
//                                         <td className={`px-4 py-1 ${i === 0 ? "pt-2" : ""}`}><span className={`px-1.5 py-0.5 rounded-md bg-${algorithmInfos[key].time_complexity.best[1]}`}>{algorithmInfos[key].time_complexity.best[0]}</span></td>
//                                         <td className={`px-4 py-1 ${i === 0 ? "pt-2" : ""}`}><span className={`px-1.5 py-0.5 rounded-md bg-${algorithmInfos[key].time_complexity.average[1]}`}>{algorithmInfos[key].time_complexity.average[0]}</span></td>
//                                         <td className={`px-4 py-1 ${i === 0 ? "pt-2" : ""} border-r border-carbon-light`}><span className={`px-1.5 py-0.5 rounded-md bg-${algorithmInfos[key].time_complexity.worst[1]}`}>{algorithmInfos[key].time_complexity.worst[0]}</span></td>
//                                         <td className={`px-4 py-1 ${i === 0 ? "pt-2" : ""}`}><span className={`px-1.5 py-0.5 rounded-md bg-${algorithmInfos[key].space_complexity[1]}`}>{algorithmInfos[key].space_complexity[0]}</span></td>
//                                     </tr>
//                                 ))}
//                             </tbody>
//                         </table>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default SortingChart;

// import { useContext, useEffect } from "react";
// import { SortingContext } from "../contexts/SortingContext";
// import algorithmInfos from "../data/algorithmInfos";

// function SortingChart() {
//     const { sortingState, generateSortingArray, startVisualizing, changeSortingSpeed, changeAlgorithm } = useContext(SortingContext);

//     useEffect(() => {
//         generateSortingArray();
//     }, []);

//     return (
//         <div className="flex flex-col min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-purple-900 text-purple-100 sort-visualizer">
//             <nav className="bg-purple-950 p-4 shadow-lg sort-visualizer__nav">
//                 <div className="container mx-auto flex justify-between items-center">
//                     <h1 className="text-2xl font-bold text-purple-200 sort-visualizer__title">Sorting Visualizer</h1>
//                     <a href="#" className="text-purple-300 hover:text-purple-100 transition-colors sort-visualizer__about">About</a>
//                 </div>
//             </nav>

//             <div className="container mx-auto mt-8 flex flex-col items-center px-4 sort-visualizer__content">
//                 <div className="flex flex-wrap justify-center gap-3 mb-6 sort-visualizer__algorithm-buttons">
//                     {Object.keys(algorithmInfos).map((key) => (
//                         <button
//                             key={key}
//                             onClick={() => changeAlgorithm(key)}
//                             className={`bg-purple-700 text-purple-100 px-5 py-3 rounded-full ${
//                                 sortingState.algorithm === key ? "bg-purple-500 shadow-inner" : "hover:bg-purple-600"
//                             } transition-all shadow-md sort-visualizer__algorithm-button`}
//                         >
//                             {algorithmInfos[key].name}
//                         </button>
//                     ))}
//                 </div>

//                 <div className="max-w-3xl w-full bg-purple-950 rounded-lg shadow-xl p-6 sort-visualizer__chart-container">
//                     <div className="mb-4 chart-container rounded-md overflow-hidden sort-visualizer__chart">
//                         <div className="base sort-visualizer__chart-base"></div>

//                         {sortingState.array.map((bar, i) => (
//                             <div key={i} className="bar-container sort-visualizer__bar-container">
//                                 <div
//                                     className={`select-none bar bar-${bar.state} sort-visualizer__bar sort-visualizer__bar--${bar.state}`}
//                                     style={{ height: `${Math.floor((bar.value / 1000) * 100)}%` }}
//                                 >
//                                     <p className={`pl-1.5 ${bar.state === "idle" ? "text-purple-200" : "text-purple-100"} sort-visualizer__bar-value`}>
//                                         {bar.value}
//                                     </p>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>

//                     <div className="flex items-center gap-4 max-w-3xl mb-8 sort-visualizer__controls">
//                         <button
//                             disabled={sortingState.sorting}
//                             onClick={startVisualizing}
//                             className="px-6 py-3 push-btn text-purple-100 disabled:opacity-50 rounded-full sort-visualizer__start-button"
//                         >
//                             Start
//                         </button>
//                         <button
//                             disabled={sortingState.sorting}
//                             onClick={() => generateSortingArray()}
//                             className="px-6 py-3 bg-purple-700 hover:bg-purple-600 text-purple-100 disabled:opacity-50 transition-colors rounded-full shadow-md sort-visualizer__new-array-button"
//                         >
//                             New Array
//                         </button>
//                         <select
//                             disabled={sortingState.sorting}
//                             onChange={changeSortingSpeed}
//                             defaultValue="slow"
//                             className="ml-auto bg-purple-700 px-4 py-2 rounded-full cursor-pointer outline-none focus:ring ring-purple-400 disabled:opacity-50 disabled:cursor-default text-purple-100 sort-visualizer__speed-select"
//                         >
//                             <option value="slow">Slow</option>
//                             <option value="normal">Normal</option>
//                             <option value="fast">Fast</option>
//                         </select>
//                     </div>

//                     <div className="w-full h-0.5 bg-purple-700 mb-6 sort-visualizer__divider" />

//                     <div className="overflow-auto bg-purple-900 rounded-lg shadow-inner sort-visualizer__table-container">
//                         <table className="w-full text-left sort-visualizer__table">
//                             <thead>
//                                 <tr className="bg-purple-800 sort-visualizer__table-header">
//                                     <th className="px-4 py-2 border-r border-purple-700 sort-visualizer__table-header-cell" rowSpan={2}>
//                                         Algorithm
//                                     </th>
//                                     <th className="px-4 py-2 border-r border-purple-700 sort-visualizer__table-header-cell" colSpan={3}>
//                                         Time Complexity
//                                     </th>
//                                     <th className="px-4 py-2 sort-visualizer__table-header-cell">Space Complexity</th>
//                                 </tr>
//                                 <tr className="bg-purple-800 border-b border-purple-700 sort-visualizer__table-subheader">
//                                     <th className="px-4 py-2 sort-visualizer__table-subheader-cell">Best</th>
//                                     <th className="px-4 py-2 sort-visualizer__table-subheader-cell">Average</th>
//                                     <th className="px-4 py-2 border-r border-purple-700 sort-visualizer__table-subheader-cell">Worst</th>
//                                     <th className="px-4 py-2 sort-visualizer__table-subheader-cell">Worst</th>
//                                 </tr>
//                             </thead>
//                             <tbody>
//                                 {Object.keys(algorithmInfos).map((key, i) => (
//                                     <tr key={i} className="hover:bg-purple-800 transition-colors sort-visualizer__table-row">
//                                         <td className={`px-4 py-2 ${i === 0 ? "pt-2" : ""} border-r border-purple-700 sort-visualizer__table-cell`}>{algorithmInfos[key].name}</td>
//                                         <td className={`px-4 py-2 ${i === 0 ? "pt-2" : ""} sort-visualizer__table-cell`}>
//                                             <span className={`px-2 py-1 rounded-full text-xs font-medium bg-${algorithmInfos[key].time_complexity.best[1]} sort-visualizer__complexity-tag`}>
//                                                 {algorithmInfos[key].time_complexity.best[0]}
//                                             </span>
//                                         </td>
//                                         <td className={`px-4 py-2 ${i === 0 ? "pt-2" : ""} sort-visualizer__table-cell`}>
//                                             <span className={`px-2 py-1 rounded-full text-xs font-medium bg-${algorithmInfos[key].time_complexity.average[1]} sort-visualizer__complexity-tag`}>
//                                                 {algorithmInfos[key].time_complexity.average[0]}
//                                             </span>
//                                         </td>
//                                         <td className={`px-4 py-2 ${i === 0 ? "pt-2" : ""} border-r border-purple-700 sort-visualizer__table-cell`}>
//                                             <span className={`px-2 py-1 rounded-full text-xs font-medium bg-${algorithmInfos[key].time_complexity.worst[1]} sort-visualizer__complexity-tag`}>
//                                                 {algorithmInfos[key].time_complexity.worst[0]}
//                                             </span>
//                                         </td>
//                                         <td className={`px-4 py-2 ${i === 0 ? "pt-2" : ""} sort-visualizer__table-cell`}>
//                                             <span className={`px-2 py-1 rounded-full text-xs font-medium bg-${algorithmInfos[key].space_complexity[1]} sort-visualizer__complexity-tag`}>
//                                                 {algorithmInfos[key].space_complexity[0]}
//                                             </span>
//                                         </td>
//                                     </tr>
//                                 ))}
//                             </tbody>
//                         </table>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default SortingChart;



// import { useContext, useEffect } from "react";
// import { SortingContext } from "../contexts/SortingContext";
// import algorithmInfos from "../data/algorithmInfos";

// function SortingChart() {
//   const {
//     sortingState,
//     generateSortingArray,
//     startVisualizing,
//     changeSortingSpeed,
//     changeAlgorithm,
//   } = useContext(SortingContext);

//   useEffect(() => {
//     generateSortingArray();
//   }, []);

//   return (
//     <div className="flex flex-col min-h-screen  text-purple-100 sort-visualizer">
//       <nav className="bg-purple-950 p-4 shadow-lg sort-visualizer__nav">
//         <div className="container mx-auto flex justify-between items-center">
//           <h1 className="text-2xl font-bold text-purple-200 sort-visualizer__title">
//             Sorting Visualizer
//           </h1>
//           <a
//             href="#"
//             className="text-purple-300 hover:text-purple-100 transition-colors sort-visualizer__about"
//           >
//             About
//           </a>
//         </div>
//       </nav>

//       <div className="container mx-auto mt-8 flex flex-col items-center px-4 sort-visualizer__content">
//         <div className="flex flex-wrap justify-center gap-3 mb-6 sort-visualizer__algorithm-buttons">
//           {Object.keys(algorithmInfos).map((key) => (
//             <button
//               key={key}
//               onClick={() => changeAlgorithm(key)}
//               className={`bg-purple-700 text-purple-100 px-5 py-3 rounded-full ${
//                 sortingState.algorithm === key
//                   ? "bg-purple-500 shadow-inner"
//                   : "hover:bg-purple-600"
//               } transition-all shadow-md sort-visualizer__algorithm-button`}
//             >
//               {algorithmInfos[key].name}
//             </button>
//           ))}
//         </div>

//         <div className="max-w-3xl w-full bg-purple-950 rounded-lg shadow-xl p-6 sort-visualizer__chart-container">
//         <div className="mb-4 chart-container rounded-md overflow-hidden sort-visualizer__chart">
//             <div className="base sort-visualizer__chart-base"></div>
//             {sortingState.array.map((bar, i) => (
//               <div key={i} className="bar-container sort-visualizer__bar-container">
//                 {/* Display the value above the bar */}
//                 <p className={`text-center mb-2 ${bar.state === 'idle' ? 'text-purple-200' : 'text-purple-100'} sort-visualizer__bar-value`}>
//                   {bar.value}
//                 </p>
//                 <div
//                   className={`bar bar-${bar.state} sort-visualizer__bar sort-visualizer__bar--${bar.state}`}
//                   style={{ height: `${Math.floor((bar.value / 1000) * 100)}%` }}
//                 />
//               </div>
//             ))}
//           </div>

//           <div className="flex items-center gap-4 max-w-3xl mb-8 sort-visualizer__controls">
//             <button
//               disabled={sortingState.sorting}
//               onClick={startVisualizing}
//               className="px-6 py-3 push-btn text-purple-100 disabled:opacity-50 rounded-full sort-visualizer__start-button"
//             >
//               Start
//             </button>
//             <button
//               disabled={sortingState.sorting}
//               onClick={() => generateSortingArray()}
//               className="px-6 py-3 bg-purple-700 hover:bg-purple-600 text-purple-100 disabled:opacity-50 transition-colors rounded-full shadow-md sort-visualizer__new-array-button"
//             >
//               New Array
//             </button>
//             <select
//               disabled={sortingState.sorting}
//               onChange={changeSortingSpeed}
//               defaultValue="slow"
//               className="ml-auto bg-purple-700 px-4 py-2 rounded-full cursor-pointer outline-none focus:ring ring-purple-400 disabled:opacity-50 disabled:cursor-default text-purple-100 sort-visualizer__speed-select"
//             >
//               <option value="slow">Slow</option>
//               <option value="normal">Normal</option>
//               <option value="fast">Fast</option>
//             </select>
//           </div>

//           <div className="w-full h-0.5 bg-purple-700 mb-6 sort-visualizer__divider" />

//           <div className="overflow-auto bg-purple-900 rounded-lg shadow-inner sort-visualizer__table-container">
//             <table className="w-full text-left sort-visualizer__table">
//               <thead>
//                 <tr className="bg-purple-800 sort-visualizer__table-header">
//                   <th
//                     className="px-4 py-2 border-r border-purple-700 sort-visualizer__table-header-cell"
//                     rowSpan={2}
//                   >
//                     Algorithm
//                   </th>
//                   <th
//                     className="px-4 py-2 border-r border-purple-700 sort-visualizer__table-header-cell"
//                     colSpan={3}
//                   >
//                     Time Complexity
//                   </th>
//                   <th className="px-4 py-2 sort-visualizer__table-header-cell">
//                     Space Complexity
//                   </th>
//                 </tr>
//                 <tr className="bg-purple-800 border-b border-purple-700 sort-visualizer__table-subheader">
//                   <th className="px-4 py-2 sort-visualizer__table-subheader-cell">
//                     Best
//                   </th>
//                   <th className="px-4 py-2 sort-visualizer__table-subheader-cell">
//                     Average
//                   </th>
//                   <th className="px-4 py-2 border-r border-purple-700 sort-visualizer__table-subheader-cell">
//                     Worst
//                   </th>
//                   <th className="px-4 py-2 sort-visualizer__table-subheader-cell">
//                     Worst
//                   </th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {Object.keys(algorithmInfos).map((key, i) => (
//                   <tr
//                     key={i}
//                     className="hover:bg-purple-800 transition-colors sort-visualizer__table-row"
//                   >
//                     <td
//                       className={`px-4 py-2 ${
//                         i === 0 ? "pt-2" : ""
//                       } border-r border-purple-700 sort-visualizer__table-cell`}
//                     >
//                       {algorithmInfos[key].name}
//                     </td>
//                     <td
//                       className={`px-4 py-2 ${
//                         i === 0 ? "pt-2" : ""
//                       } sort-visualizer__table-cell`}
//                     >
//                       <span
//                         className={`px-2 py-1 rounded-full text-xs font-medium bg-${algorithmInfos[key].time_complexity.best[1]} sort-visualizer__complexity-tag`}
//                       >
//                         {algorithmInfos[key].time_complexity.best[0]}
//                       </span>
//                     </td>
//                     <td
//                       className={`px-4 py-2 ${
//                         i === 0 ? "pt-2" : ""
//                       } sort-visualizer__table-cell`}
//                     >
//                       <span
//                         className={`px-2 py-1 rounded-full text-xs font-medium bg-${algorithmInfos[key].time_complexity.average[1]} sort-visualizer__complexity-tag`}
//                       >
//                         {algorithmInfos[key].time_complexity.average[0]}
//                       </span>
//                     </td>
//                     <td
//                       className={`px-4 py-2 ${
//                         i === 0 ? "pt-2" : ""
//                       } border-r border-purple-700 sort-visualizer__table-cell`}
//                     >
//                       <span
//                         className={`px-2 py-1 rounded-full text-xs font-medium bg-${algorithmInfos[key].time_complexity.worst[1]} sort-visualizer__complexity-tag`}
//                       >
//                         {algorithmInfos[key].time_complexity.worst[0]}
//                       </span>
//                     </td>
//                     <td
//                       className={`px-4 py-2 ${
//                         i === 0 ? "pt-2" : ""
//                       } sort-visualizer__table-cell`}
//                     >
//                       <span
//                         className={`px-2 py-1 rounded-full text-xs font-medium bg-${algorithmInfos[key].space_complexity[1]} sort-visualizer__complexity-tag`}
//                       >
//                         {algorithmInfos[key].space_complexity[0]}
//                       </span>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default SortingChart;

// import { useContext, useEffect, useState } from "react";
// import { SortingContext } from "../contexts/SortingContext";
// import algorithmInfos from "../data/algorithmInfos";

// function SortingChart() {
//   const {
//     sortingState,
//     generateSortingArray,
//     startVisualizing,
//     changeSortingSpeed,
//     changeAlgorithm,
//     setArray, // Assuming you have a method to set the sorting array
//   } = useContext(SortingContext);

//   const [inputValue, setInputValue] = useState("");

//   useEffect(() => {
//     generateSortingArray();
//   }, []);

//   const handleInputChange = (e) => {
//     setInputValue(e.target.value);
//   };

//   const handleArraySubmit = () => {
//     // Split the input by spaces and convert to numbers
//     const values = inputValue.split(" ").map((val) => parseFloat(val));
    
//     // Check if all values are valid numbers
//     if (values.every((val) => !isNaN(val))) {
//       // Create a new array format for visualization
//       const newArray = values.map((value) => ({ value, state: "idle" }));
//       setArray(newArray); // Assuming setArray updates sortingState.array
//       setInputValue(""); // Clear the input after submission
//     } else {
//       alert("Please enter a valid array of numbers separated by spaces.");
//     }
//   };

//   return (
//     <div className="flex flex-col min-h-screen text-purple-100 sort-visualizer">
//       <nav className="bg-purple-950 p-4 shadow-lg sort-visualizer__nav">
//         <div className="container mx-auto flex justify-between items-center">
//           <h1 className="text-2xl font-bold text-purple-200 sort-visualizer__title">
//             Sorting Visualizer
//           </h1>
//           <a
//             href="#"
//             className="text-purple-300 hover:text-purple-100 transition-colors sort-visualizer__about"
//           >
//             About
//           </a>
//         </div>
//       </nav>

//       <div className="container mx-auto mt-8 flex flex-col items-center px-4 sort-visualizer__content">
//         <div className="flex flex-wrap justify-center gap-3 mb-6 sort-visualizer__algorithm-buttons">
//           {Object.keys(algorithmInfos).map((key) => (
//             <button
//               key={key}
//               onClick={() => changeAlgorithm(key)}
//               className={`bg-purple-700 text-purple-100 px-5 py-3 rounded-full ${
//                 sortingState.algorithm === key
//                   ? "bg-purple-500 shadow-inner"
//                   : "hover:bg-purple-600"
//               } transition-all shadow-md sort-visualizer__algorithm-button`}
//             >
//               {algorithmInfos[key].name}
//             </button>
//           ))}
//         </div>

//         <div className="flex flex-col items-center mb-4">
//           <input
//             type="text"
//             value={inputValue}
//             onChange={handleInputChange}
//             placeholder="Enter space-separated numbers"
//             className="border border-purple-700 bg-purple-900 text-purple-100 px-4 py-2 rounded-md mb-4"
//           />
//           <button
//             onClick={handleArraySubmit}
//             className="px-6 py-3 bg-purple-700 hover:bg-purple-600 text-purple-100 transition-colors rounded-full shadow-md"
//           >
//             Set Array
//           </button>
//         </div>

//         <div className="max-w-3xl w-full bg-purple-950 rounded-lg shadow-xl p-6 sort-visualizer__chart-container">
//           <div className="mb-4 sort-visualizer__chart">
//             <div className="sort-visualizer__chart-base"></div>
//             {sortingState.array.map((bar, i) => (
//               <div key={i} className="sort-visualizer__bar-container">
//                 <p
//                   className={`text-center mb-2 ${
//                     bar.state === "idle" ? "text-purple-200" : "text-purple-100"
//                   } sort-visualizer__bar-value`}
//                 >
//                   {bar.value}
//                 </p>
//                 <div
//                   className={`sort-visualizer__bar sort-visualizer__bar--${bar.state}`}
//                   style={{ height: `${Math.floor((bar.value / 1000) * 100)}%` }} // Adjust max value to fit the visual
//                 />
//               </div>
//             ))}
//           </div>

//           <div className="flex items-center gap-4 max-w-3xl mb-8 sort-visualizer__controls">
//             <button
//               disabled={sortingState.sorting}
//               onClick={startVisualizing}
//               className="px-6 py-3 text-purple-100 disabled:opacity-50 rounded-full sort-visualizer__start-button"
//             >
//               Start
//             </button>
//             <button
//               disabled={sortingState.sorting}
//               onClick={() => generateSortingArray()}
//               className="px-6 py-3 bg-purple-700 hover:bg-purple-600 text-purple-100 disabled:opacity-50 transition-colors rounded-full shadow-md sort-visualizer__new-array-button"
//             >
//               New Array
//             </button>
//             <select
//               disabled={sortingState.sorting}
//               onChange={changeSortingSpeed}
//               defaultValue="slow"
//               className="ml-auto bg-purple-700 px-4 py-2 rounded-full cursor-pointer outline-none focus:ring ring-purple-400 disabled:opacity-50 disabled:cursor-default text-purple-100 sort-visualizer__speed-select"
//             >
//               <option value="slow">Slow</option>
//               <option value="normal">Normal</option>
//               <option value="fast">Fast</option>
//             </select>
//           </div>

//           <div className="w-full h-0.5 bg-purple-700 mb-6 sort-visualizer__divider" />

//           {/* <div className="overflow-auto bg-purple-900 rounded-lg shadow-inner sort-visualizer__table-container">
//             <table className="w-full text-left sort-visualizer__table">
//               <thead>
//                 <tr className="bg-purple-800 sort-visualizer__table-header">
//                   <th
//                     className="px-4 py-2 border-r border-purple-700 sort-visualizer__table-header-cell"
//                     rowSpan={2}
//                   >
//                     Algorithm
//                   </th>
//                   <th
//                     className="px-4 py-2 border-r border-purple-700 sort-visualizer__table-header-cell"
//                     colSpan={3}
//                   >
//                     Time Complexity
//                   </th>
//                   <th className="px-4 py-2 sort-visualizer__table-header-cell">
//                     Space Complexity
//                   </th>
//                 </tr>
//                 <tr className="bg-purple-800 border-b border-purple-700 sort-visualizer__table-subheader">
//                   <th className="px-4 py-2 sort-visualizer__table-subheader-cell">
//                     Best
//                   </th>
//                   <th className="px-4 py-2 sort-visualizer__table-subheader-cell">
//                     Average
//                   </th>
//                   <th className="px-4 py-2 border-r border-purple-700 sort-visualizer__table-subheader-cell">
//                     Worst
//                   </th>
//                   <th className="px-4 py-2 sort-visualizer__table-subheader-cell">
//                     Worst
//                   </th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {Object.keys(algorithmInfos).map((key, i) => (
//                   <tr
//                     key={i}
//                     className="hover:bg-purple-800 transition-colors sort-visualizer__table-row"
//                   >
//                     <td
//                       className={`px-4 py-2 ${i === 0 ? "pt-2" : ""} border-r border-purple-700 sort-visualizer__table-cell`}
//                     >
//                       {algorithmInfos[key].name}
//                     </td>
//                     <td
//                       className={`px-4 py-2 ${i === 0 ? "pt-2" : ""} sort-visualizer__table-cell`}
//                     >
//                       <span
//                         className={`px-2 py-1 rounded-full text-xs font-medium bg-${algorithmInfos[key].time_complexity.best[1]} sort-visualizer__complexity-tag`}
//                       >
//                         {algorithmInfos[key].time_complexity.best[0]}
//                       </span>
//                     </td>
//                     <td
//                       className={`px-4 py-2 ${i === 0 ? "pt-2" : ""} sort-visualizer__table-cell`}
//                     >
//                       <span
//                         className={`px-2 py-1 rounded-full text-xs font-medium bg-${algorithmInfos[key].time_complexity.average[1]} sort-visualizer__complexity-tag`}
//                       >
//                         {algorithmInfos[key].time_complexity.average[0]}
//                       </span>
//                     </td>
//                     <td
//                       className={`px-4 py-2 ${i === 0 ? "pt-2" : ""} border-r border-purple-700 sort-visualizer__table-cell`}
//                     >
//                       <span
//                         className={`px-2 py-1 rounded-full text-xs font-medium bg-${algorithmInfos[key].time_complexity.worst[1]} sort-visualizer__complexity-tag`}
//                       >
//                         {algorithmInfos[key].time_complexity.worst[0]}
//                       </span>
//                     </td>
//                     <td
//                       className={`px-4 py-2 ${i === 0 ? "pt-2" : ""} sort-visualizer__table-cell`}
//                     >
//                       <span
//                         className={`px-2 py-1 rounded-full text-xs font-medium bg-${algorithmInfos[key].space_complexity[1]} sort-visualizer__complexity-tag`}
//                       >
//                         {algorithmInfos[key].space_complexity[0]}
//                       </span>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div> */}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default SortingChart;


// import { useContext, useEffect, useState } from "react";
// import { SortingContext } from "../contexts/SortingContext";
// import algorithmInfos from "../data/algorithmInfos";

// function SortingChart() {
//   const {
//     sortingState,
//     generateSortingArray,
//     startVisualizing,
//     changeSortingSpeed,
//     changeAlgorithm,
//     setArray,
//   } = useContext(SortingContext);

//   const [inputValue, setInputValue] = useState("");
//   const [currentAlgorithmIndex, setCurrentAlgorithmIndex] = useState(0);
//   const algorithms = Object.keys(algorithmInfos); // Array of algorithm keys

//   useEffect(() => {
//     generateSortingArray();
//   }, []);

//   const handleInputChange = (e) => {
//     setInputValue(e.target.value);
//   };

//   const handleArraySubmit = () => {
//     const values = inputValue.split(" ").map((val) => parseFloat(val));
//     if (values.every((val) => !isNaN(val))) {
//       const newArray = values.map((value) => ({ value, state: "idle" }));
//       setArray(newArray);
//       setInputValue("");
//     } else {
//       alert("Please enter a valid array of numbers separated by spaces.");
//     }
//   };

//   // Function to go to the next algorithm
//   const goToNextAlgorithm = () => {
//     const newIndex = (currentAlgorithmIndex + 1) % algorithms.length;
//     setCurrentAlgorithmIndex(newIndex);
//     changeAlgorithm(algorithms[newIndex]);
//   };

//   // Function to go to the previous algorithm
//   const goToPreviousAlgorithm = () => {
//     const newIndex =
//       (currentAlgorithmIndex - 1 + algorithms.length) % algorithms.length;
//     setCurrentAlgorithmIndex(newIndex);
//     changeAlgorithm(algorithms[newIndex]);
//   };

//   return (
//     <div className="flex flex-col min-h-screen text-purple-100 sort-visualizer">
//       {/* <nav className="bg-purple-950 p-4 shadow-lg sort-visualizer__nav">
//         <div className="container mx-auto flex justify-between items-center">
//           <h1 className="text-2xl font-bold text-purple-200 sort-visualizer__title">
//             Sorting Visualizer
//           </h1>
//           <a
//             href="#"
//             className="text-purple-300 hover:text-purple-100 transition-colors sort-visualizer__about"
//           >
//             About
//           </a>
//         </div>
//       </nav> */}

//       <div className="container mx-auto mt-8 flex flex-col items-center px-4 sort-visualizer__content">
//         <div className="flex items-center justify-center gap-3 mb-6 sort-visualizer__algorithm-slider">
//           {/* Previous Button */}
//           <button
//             onClick={goToPreviousAlgorithm}
//             className="px-4 py-2 bg-purple-700 text-purple-100 rounded-full hover:bg-purple-600 transition-all"
//           >
//             Prev
//           </button>

//           {/* Display the current algorithm */}
//           <div className="px-5 py-3 bg-purple-500 text-purple-100 rounded-full shadow-inner transition-all">
//             {algorithmInfos[algorithms[currentAlgorithmIndex]].name}
//           </div>

//           {/* Next Button */}
//           <button
//             onClick={goToNextAlgorithm}
//             className="px-4 py-2 bg-purple-700 text-purple-100 rounded-full hover:bg-purple-600 transition-all"
//           >
//             Next
//           </button>
//         </div>

//         <div className="flex flex-col items-center mb-4">
//           <input
//             type="text"
//             value={inputValue}
//             onChange={handleInputChange}
//             placeholder="Enter space-separated numbers"
//             className="border border-purple-700 bg-purple-900 text-purple-100 px-4 py-2 rounded-md mb-4"
//           />
//           <button
//             onClick={handleArraySubmit}
//             className="px-6 py-3 bg-purple-700 hover:bg-purple-600 text-purple-100 transition-colors rounded-full shadow-md"
//           >
//             Set Array
//           </button>
//         </div>

//         <div className="max-w-3xl w-full bg-purple-950 rounded-lg shadow-xl p-6 sort-visualizer__chart-container">
//           <div className="mb-4 sort-visualizer__chart">
//             <div className="sort-visualizer__chart-base"></div>
//             {sortingState.array.map((bar, i) => (
//               <div key={i} className="sort-visualizer__bar-container">
//                 <p
//                   className={`text-center mb-2 ${
//                     bar.state === "idle" ? "text-purple-200" : "text-purple-100"
//                   } sort-visualizer__bar-value`}
//                 >
//                   {bar.value}
//                 </p>
//                 <div
//                   className={`sort-visualizer__bar sort-visualizer__bar--${bar.state}`}
//                   style={{
//                     height: `${Math.floor((bar.value / 1000) * 100)}%`,
//                   }}
//                 />
//               </div>
//             ))}
//           </div>

//           <div className="flex items-center gap-4 max-w-3xl mb-8 sort-visualizer__controls">
//             <button
//               disabled={sortingState.sorting}
//               onClick={startVisualizing}
//               className="px-6 py-3 text-purple-100 disabled:opacity-50 rounded-full sort-visualizer__start-button"
//             >
//               Start
//             </button>
//             <button
//               disabled={sortingState.sorting}
//               onClick={() => generateSortingArray()}
//               className="px-6 py-3 bg-purple-700 hover:bg-purple-600 text-purple-100 disabled:opacity-50 transition-colors rounded-full shadow-md sort-visualizer__new-array-button"
//             >
//               New Array
//             </button>
//             <select
//               disabled={sortingState.sorting}
//               onChange={changeSortingSpeed}
//               defaultValue="slow"
//               className="ml-auto bg-purple-700 px-4 py-2 rounded-full cursor-pointer outline-none focus:ring ring-purple-400 disabled:opacity-50 disabled:cursor-default text-purple-100 sort-visualizer__speed-select"
//             >
//               <option value="slow">Slow</option>
//               <option value="normal">Normal</option>
//               <option value="fast">Fast</option>
//             </select>
//           </div>

//           <div className="w-full h-0.5 bg-purple-700 mb-6 sort-visualizer__divider" />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default SortingChart;


import { useContext, useEffect, useState } from "react";
import { SortingContext } from "../contexts/SortingContext";
import algorithmInfos from "../data/algorithmInfos";

function SortingChart() {
  const {
    sortingState,
    generateSortingArray,
    startVisualizing,
    changeSortingSpeed,
    changeAlgorithm,
    setArray,
  } = useContext(SortingContext);

  const [inputValue, setInputValue] = useState("");
  const [currentAlgorithmIndex, setCurrentAlgorithmIndex] = useState(0);
  const algorithms = Object.keys(algorithmInfos); // Array of algorithm keys

  useEffect(() => {
    generateSortingArray();
  }, []);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleArraySubmit = () => {
    const values = inputValue.split(" ").map((val) => parseFloat(val));
    if (values.every((val) => !isNaN(val))) {
      const newArray = values.map((value) => ({ value, state: "idle" }));
      setArray(newArray);
      setInputValue("");
    } else {
      alert("Please enter a valid array of numbers separated by spaces.");
    }
  };

  // Function to go to the next algorithm
  const goToNextAlgorithm = () => {
    const newIndex = (currentAlgorithmIndex + 1) % algorithms.length;
    setCurrentAlgorithmIndex(newIndex);
    changeAlgorithm(algorithms[newIndex]);
  };

  // Function to go to the previous algorithm
  const goToPreviousAlgorithm = () => {
    const newIndex =
      (currentAlgorithmIndex - 1 + algorithms.length) % algorithms.length;
    setCurrentAlgorithmIndex(newIndex);
    changeAlgorithm(algorithms[newIndex]);
  };

  // Find the maximum value in the array to scale bar heights
  const maxValue = Math.max(...sortingState.array.map((b) => b.value));

  return (
    <div className="flex flex-col min-h-screen text-purple-100 sort-visualizer">
      {/* <nav className="bg-purple-950 p-4 shadow-lg sort-visualizer__nav">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold text-purple-200 sort-visualizer__title">
            Sorting Visualizer
          </h1>
          <a
            href="#"
            className="text-purple-300 hover:text-purple-100 transition-colors sort-visualizer__about"
          >
            About
          </a>
        </div>
      </nav> */}

      <div className="container mx-auto mt-8 flex flex-col items-center px-4 sort-visualizer__content">
        <div className="flex items-center justify-center gap-3 mb-6 sort-visualizer__algorithm-slider">
          {/* Previous Button */}
          <button
            onClick={goToPreviousAlgorithm}
            className="px-4 py-2 bg-purple-700 text-purple-100 rounded-full hover:bg-purple-600 transition-all"
          >
            Prev
          </button>

          {/* Display the current algorithm */}
          <div className="px-5 py-3 bg-purple-500 text-purple-100 rounded-full shadow-inner transition-all">
            {algorithmInfos[algorithms[currentAlgorithmIndex]].name}
          </div>

          {/* Next Button */}
          <button
            onClick={goToNextAlgorithm}
            className="px-4 py-2 bg-purple-700 text-purple-100 rounded-full hover:bg-purple-600 transition-all"
          >
            Next
          </button>
        </div>

        <div className="flex flex-col items-center mb-4">
          <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            placeholder="Enter space-separated numbers"
            className="border border-purple-700 bg-purple-900 text-purple-100 px-4 py-2 rounded-md mb-4"
          />
          <button
            onClick={handleArraySubmit}
            className="px-6 py-3 bg-purple-700 hover:bg-purple-600 text-purple-100 transition-colors rounded-full shadow-md"
          >
            Set Array
          </button>
        </div>

        <div className="max-w-3xl w-full bg-purple-950 rounded-lg shadow-xl p-6 sort-visualizer__chart-container">
          <div className="mb-4 sort-visualizer__chart">
            <div className="sort-visualizer__chart-base"></div>
            {sortingState.array.map((bar, i) => (
              <div key={i} className="sort-visualizer__bar-container">
                <p
                  className={`text-center mb-2 ${
                    bar.state === "idle" ? "text-purple-200" : "text-purple-100"
                  } sort-visualizer__bar-value`}
                >
                  {bar.value}
                </p>
                <div
                  className={`sort-visualizer__bar sort-visualizer__bar--${bar.state}`}
                  style={{
                    height: `${(bar.value / maxValue) * 100}%`,
                  }}
                />
              </div>
            ))}
          </div>

          <div className="flex items-center gap-4 max-w-3xl mb-8 sort-visualizer__controls">
            <button
              disabled={sortingState.sorting}
              onClick={startVisualizing}
              className="px-6 py-3 text-purple-100 disabled:opacity-50 rounded-full sort-visualizer__start-button"
            >
              Start
            </button>
            <button
              disabled={sortingState.sorting}
              onClick={() => generateSortingArray()}
              className="px-6 py-3 bg-purple-700 hover:bg-purple-600 text-purple-100 disabled:opacity-50 transition-colors rounded-full shadow-md sort-visualizer__new-array-button"
            >
              New Array
            </button>
            <select
              disabled={sortingState.sorting}
              onChange={changeSortingSpeed}
              defaultValue="slow"
              className="ml-auto bg-purple-700 px-4 py-2 rounded-full cursor-pointer outline-none focus:ring ring-purple-400 disabled:opacity-50 disabled:cursor-default text-purple-100 sort-visualizer__speed-select"
            >
              <option value="slow">Slow</option>
              <option value="normal">Normal</option>
              <option value="fast">Fast</option>
            </select>
          </div>

          <div className="w-full h-0.5 bg-purple-700 mb-6 sort-visualizer__divider" />
        </div>
      </div>
    </div>
  );
}

export default SortingChart;
