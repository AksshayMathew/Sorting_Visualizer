// AboutPage.js
import { useContext } from "react";
import { SortingContext } from "../contexts/SortingContext";
import algorithmInfos from "../data/algorithmInfos";

function AboutPage() {
  const { currentAlgorithm } = useContext(SortingContext);
  const algorithm = algorithmInfos[currentAlgorithm];

  return (
    <div className="about-page container mx-auto mt-8 px-4">
      <h2 className="text-3xl font-bold text-purple-100 mb-4">
        About 
      </h2>
      {/* <div className="bg-purple-900 p-6 rounded-lg shadow-lg">
        <p className="text-purple-300 mb-4">{algorithm.description}</p>

        <div className="flex justify-between mb-4">
          <div>
            <h3 className="text-xl font-semibold text-purple-200">Time Complexity</h3>
            <ul>
              <li className={`text-${algorithm.time_complexity.best[1]}`}>
                Best: {algorithm.time_complexity.best[0]}
              </li>
              <li className={`text-${algorithm.time_complexity.average[1]}`}>
                Average: {algorithm.time_complexity.average[0]}
              </li>
              <li className={`text-${algorithm.time_complexity.worst[1]}`}>
                Worst: {algorithm.time_complexity.worst[0]}
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-purple-200">Space Complexity</h3>
            <p className={`text-${algorithm.space_complexity[1]}`}>
              {algorithm.space_complexity[0]}
            </p>
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default AboutPage;
