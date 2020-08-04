<template>
  <div class="manage-candidate-container">
    <table class="table">
      <thead>
        <tr>
          <th>Job Title</th>
          <th>Status</th>
          <th class="action">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr
          class="candidates-list"
          v-for="{ name, photo, experience, location } in candidateList"
          :key="experience"
        >
          <td class="title">
            <div class="thumb">
              <img :src="photo" class="img-fluid" alt="Candidate Photo" />
            </div>
            <div class="body">
              <h5>
                <a href="#">{{ name }}</a>
              </h5>
              <div class="info">
                <span class="designation">
                  <a href="#">
                    <check-square-icon></check-square-icon>
                    {{ experience }}
                  </a>
                </span>
                <span class="location">
                  <a href="#">
                    <map-pin-icon></map-pin-icon>
                    {{ location }}
                  </a>
                </span>
              </div>
            </div>
          </td>
          <td class="status">
            <check-circle-icon></check-circle-icon>
            Shortlisted
          </td>
          <td class="action">
            <a href="#" class="download">
              <download-icon></download-icon>
            </a>
            <a href="#" class="inbox">
              <mail-icon></mail-icon>
            </a>
            <a href="#" class="remove">
              <trash-2-icon></trash-2-icon>
            </a>
          </td>
        </tr>
      </tbody>
    </table>
    <div class="pagination-list text-center">
      <nav class="navigation pagination">
        <div class="nav-links">
          <a class="prev page-numbers" href="#"
            ><i class="fas fa-angle-left"></i
          ></a>
          <a class="page-numbers" href="#">1</a>
          <span aria-current="page" class="page-numbers current">2</span>
          <a class="page-numbers" href="#">3</a>
          <a class="page-numbers" href="#">4</a>
          <a class="next page-numbers" href="#"
            ><i class="fas fa-angle-right"></i
          ></a>
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
import {
  MailIcon,
  DownloadIcon,
  Trash2Icon,
  CheckCircleIcon,
  CheckSquareIcon,
  MapPinIcon
} from "vue-feather-icons";

export default {
  name: "EmployerManageCandidates",
  components: {
    MailIcon,
    DownloadIcon,
    Trash2Icon,
    CheckCircleIcon,
    CheckSquareIcon,
    MapPinIcon
  },
  data() {
    return {
      candidateList: [
        {
          name: "Lula Wallace",
          photo: require("../../../public/assets/dashboard/images/user-1.jpg"),
          experience: "Senior UI / UX Designer",
          location: "New Orleans"
        },
        {
          name: "Hertha A. Sullivan",
          photo: require("../../../public/assets/dashboard/images/user-2.jpg"),
          experience: "Senior UI / UX Designer",
          location: "New Orleans"
        },
        {
          name: "David Johnston",
          photo: require("../../../public/assets/dashboard/images/user-3.jpg"),
          experience: "Senior UI / UX Designer",
          location: "New Orleans"
        },
        {
          name: "Robert Hayes",
          photo: require("../../../public/assets/dashboard/images/user-4.jpg"),
          experience: "Senior UI / UX Designer",
          location: "New Orleans"
        }
      ]
    };
  }
};
</script>

<style>
</style>