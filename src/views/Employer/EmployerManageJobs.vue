<template>
  <div class="manage-job-container">
    <table class="table">
      <thead>
        <tr>
          <th>Job Title</th>
          <th>Applications</th>
          <th>Deadline</th>
          <th>Status</th>
          <th class="action">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr
          class="job-items"
          v-for="{
            title,
            type,
            location,
            status,
            expiration,
            applicationQty
          } in jobList"
          :key="title + expiration"
        >
          <td class="title">
            <h5>
              <a href="#">{{ title }}</a>
            </h5>
            <div class="info">
              <span class="office-location"
                ><a href="#">
                  <map-pin-icon></map-pin-icon>
                  {{ location }}
                </a>
              </span>
              <span class="job-type full-time"
                ><a href="#">
                  <clock-icon></clock-icon>
                  {{ type }}
                </a>
              </span>
            </div>
          </td>
          <td class="application">
            <a href="#">{{ applicationQty }} </a>
          </td>
          <td class="deadline">{{ expiration }}</td>
          <td class="status" :class="status.toLowerCase()">{{ status }}</td>
          <td class="action">
            <a href="#" class="preview" title="Preview">
              <eye-icon></eye-icon>
            </a>
            <a href="#" class="edit" title="Edit">
              <edit-icon></edit-icon>
            </a>
            <a href="#" class="remove" title="Delete">
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
  EyeIcon,
  EditIcon,
  ClockIcon,
  Trash2Icon,
  MapPinIcon
} from "vue-feather-icons";

export default {
  name: "EmployerManageJobs",
  components: {
    EyeIcon,
    EditIcon,
    ClockIcon,
    Trash2Icon,
    MapPinIcon
  },
  data() {
    return {
      jobList: [
        {
          title: "Land Development Marketer",
          location: "New Orleans",
          type: "Full Time",
          applicationQty: 6,
          status: "Active",
          expiration: "Oct 31, 2020"
        },
        {
          title: "Designer Required",
          location: "New Orleans",
          type: "Freelance",
          applicationQty: 6,
          status: "Pending",
          expiration: "Oct 31, 2020"
        },
        {
          title: "Restaurant Team Member - Crew",
          location: "New Orleans",
          type: "Temporary",
          applicationQty: 6,
          status: "Expired",
          expiration: "Oct 31, 2020"
        },
        {
          title: "Land Development Marketer",
          location: "New Orleans",
          type: "Full Time",
          applicationQty: 6,
          status: "Active",
          expiration: "Oct 31, 2020"
        },
        {
          title: "Designer Required",
          location: "New Orleans",
          type: "Freelance",
          applicationQty: 6,
          status: "Pending",
          expiration: "Oct 31, 2020"
        },
        {
          title: "Restaurant Team Member - Crew",
          location: "New Orleans",
          type: "Temporary",
          applicationQty: 6,
          status: "Expired",
          expiration: "Oct 31, 2020"
        }
      ]
    };
  }
};
</script>

<style>
</style>