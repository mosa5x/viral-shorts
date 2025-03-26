import ClipPage from "./ClipPage";
import DashboardHeader from "./DashboardHeader ";
import ProjectPage from "./ProjectPage";


export default function DashbordPage() {
  return (
    <div className="dashboard">
      <DashboardHeader />
      <ClipPage />
      <ProjectPage />
    </div>
  );
}