// Display the Metacritic Score of the game
export const MetacriticScore = ({ score }: { score: number }) => {
  let bgColor = "bg-slate-200";
  let textColor = "";

  // Score is null
  if (score == null) {
    return (
      <div
        className={`${bgColor} bg-opacity-50
                  ${textColor} text-sm text-center
                  w-auto pl-2 pr-2 rounded-lg `}
      >
        N/A
      </div>
    );
  }

  // Change the background color based on the metacritic value
  if (score >= 88) {
    bgColor = "bg-green-700";
    textColor = "text-green-400";
  } else if (score >= 80) {
    bgColor = "bg-yellow-700";
    textColor = "text-yellow-400";
  } else if (score >= 70) {
    bgColor = "bg-orange-700";
    textColor = "text-orange-400";
  } else {
    bgColor = "bg-red-700";
    textColor = "text-red-400";
  }

  return (
    <div
      className={`${bgColor} dark:bg-opacity-50  
                  ${textColor} text-lg font-bold text-center
                  w-auto pl-2 pr-2 rounded-lg `}
    >
      {score}
    </div>
  );
};

// Function to calculate user rating.
// Similar to the metacritic score
// Deprecated - Using a star rating system now
// export const UserRating = ({ rating }: { rating: number }) => {
//   let bgColor = "bg-slate-200";
//   let textColor = "";

//   // Rating is 0
//   if (rating == 0) {
//     return (
//       <div
//         className={`flex ${bgColor} bg-opacity-50
//                   ${textColor} text-sm text-center items-center
//                   w-auto pl-2 pr-2 rounded-lg `}
//       >
//         N/A
//       </div>
//     );
//   }

//   // Change the background color based on the metacritic value
//   if (rating >= 4) {
//     bgColor = "bg-green-700";
//     textColor = "text-green-500";
//   } else if (rating >= 3) {
//     bgColor = "bg-yellow-700";
//     textColor = "text-yellow-500";
//   } else if (rating >= 2.5) {
//     bgColor = "bg-orange-700";
//     textColor = "text-orange-500";
//   } else {
//     bgColor = "bg-red-700";
//     textColor = "text-red-500";
//   }

//   return (
//     <div
//       className={`flex ${bgColor} bg-opacity-50
//                   ${textColor} text-sm font-bold text-center items-center
//                   w-auto pl-2 pr-2 rounded-lg `}
//     >
//       {rating}
//     </div>
//   );
// };
