// "use client"
// import { Triangle } from "react-loader-spinner";

// export default function Loading() {
//   return (
//     <div className="flex justify-center items-center h-screen">
//       <Triangle
//         height="80"
//         width="80"
//         color="#4fa94d"
//         ariaLabel="triangle-loading"
//         wrapperStyle={{}}
//         wrapperClassName=""
//         visible={true}
//       />
//     </div>
//   );
// }
import DashboardSkeleton from "@/app/ui/skeletons";

export default function Loading() {
  return <DashboardSkeleton />;
}
