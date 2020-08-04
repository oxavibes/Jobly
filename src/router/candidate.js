//Layout
import DefaultLayout from "../layout/DefaultLayout";

//Views
import CandidateHome from "../views/Candidate/CandidateHome";
import CandidateProfile from "../views/Candidate/CandidateProfile";
import CandidateDashboard from "../views/Candidate/CandidateDashboard";
import CandidateAppliedJobs from "../views/Candidate/CandidateAppliedJobs";
import CandidateBookmarkedJobs from "../views/Candidate/CandidateBookmarkedJobs";

export const routes = [
  {
    path: "/candidate",
    component: CandidateHome,
    children: [
      {
        path: "",
        name: "candidate-dashboard",
        component: CandidateDashboard,
        meta: {
          layout: DefaultLayout
        }
      },
      {
        path: "profile",
        name: "candidate-profile",
        component: CandidateProfile,
        meta: {
          layout: DefaultLayout
        }
      },
      {
        path: "applied-jobs",
        name: "candidate-applied-jobs",
        component: CandidateAppliedJobs,
        meta: {
          layout: DefaultLayout
        }
      },
      {
        path: "bookmarked-jobs",
        name: "candidate-bookmarked-jobs",
        component: CandidateBookmarkedJobs,
        meta: {
          layout: DefaultLayout
        }
      }
    ]
  }
];
