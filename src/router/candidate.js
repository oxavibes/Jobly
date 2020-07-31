//Layout
import DefaultLayout from "../layout/DefaultLayout";

//Views
import CandidateProfile from "../views/Candidate/CandidateProfile";
import CandidateDashboard from "../views/Candidate/CandidateDashboard";
import CandidateAppliedJobs from "../views/Candidate/CandidateAppliedJobs";
import CandidateBookmarkedJobs from "../views/Candidate/CandidateBookmarkedJobs";

export const routes = [
  {
    path: "/candidate-dashboard",
    name: "candidate-dashboard",
    component: CandidateDashboard,
    meta: {
      layout: DefaultLayout,
      breadcrumb: [
        {
          name: "Inicio",
          link: "/"
        },
        {
          name: "Resumen",
          link: "/candidate/dashboard",
          active: true
        }
      ]
    }
  },
  {
    path: "/candidate-profile",
    name: "candidate-profile",
    component: CandidateProfile,
    meta: {
      layout: DefaultLayout
    }
  },
  {
    path: "/candidate-applied-jobs",
    name: "candidate-applied-jobs",
    component: CandidateAppliedJobs,
    meta: {
      layout: DefaultLayout
    }
  },
  {
    path: "/candidate-bookmarked-jobs",
    name: "candidate-bookmarked-jobs",
    component: CandidateBookmarkedJobs,
    meta: {
      layout: DefaultLayout
    }
  }
];
