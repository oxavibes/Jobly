//Layout
import DefaultLayout from "../layout/DefaultLayout";

//Views
import EmployerHome from "@/views/Employer/EmployerHome";
import EmployerProfile from "@/views/Employer/EmployerProfile";
import EmployerPostJob from "@/views/Employer/EmployerPostJob";
import EmployerDashboard from "@/views/Employer/EmployerDashboard";
import EmployerManageJobs from "@/views/Employer/EmployerManageJobs";
import EmployerManageCandidates from "@/views/Employer/EmployerManageCandidates";

export const routes = [
  {
    path: "/employer",
    component: EmployerHome,
    children: [
      {
        path: "",
        name: "employer-dashboard",
        component: EmployerDashboard,
        meta: {
          layout: DefaultLayout
        }
      },
      {
        path: "profile",
        name: "employer-profile",
        component: EmployerProfile,
        meta: {
          layout: DefaultLayout
        }
      },
      {
        path: "manage-candidates",
        name: "employer-manage-candidates",
        component: EmployerManageCandidates,
        meta: {
          layout: DefaultLayout
        }
      },
      {
        path: "manage-jobs",
        name: "employer-manage-jobs",
        component: EmployerManageJobs,
        meta: {
          layout: DefaultLayout
        }
      },
      {
        path: "post-job",
        name: "employer-post-job",
        component: EmployerPostJob,
        meta: {
          layout: DefaultLayout
        }
      }
    ]
  }
];
