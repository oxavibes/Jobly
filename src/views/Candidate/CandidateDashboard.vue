<template>
  <div>
    <div class="dashboard-section user-statistic-block">
      <div class="user-statistic">
        <pie-chart-icon></pie-chart-icon>
        <h3>132</h3>
        <span>Compañias vistas</span>
      </div>
      <div class="user-statistic">
        <briefcase-icon></briefcase-icon>
        <h3>12</h3>
        <span>Postulaciónes</span>
      </div>
      <div class="user-statistic">
        <heart-icon></heart-icon>
        <h3>32</h3>
        <span>Empleos guardados</span>
      </div>
    </div>
    <div class="dashboard-section dashboard-view-chart">
      <canvas id="view-chart" ref="viewChart" width="400" height="200"></canvas>
    </div>
  </div>
</template>

<script>
import { PieChartIcon, HeartIcon, BriefcaseIcon } from "vue-feather-icons";

export default {
  name: "CandidateDashboard",
  components: {
    PieChartIcon,
    HeartIcon,
    BriefcaseIcon
  },
  mounted() {
    this.createChart();
  },
  methods: {
    createChart() {
      const ctx = this.$refs.viewChart.getContext("2d");

      // eslint-disable-next-line no-undef
      new Chart(ctx, {
        type: "line",
        data: {
          labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
          datasets: [
            {
              label: "# of Votes",
              data: [12, 19, 3, 5, 2, 3],
              backgroundColor: ["rgba(36, 109, 248, .2)"],
              borderColor: ["rgba(36, 109, 248, 1 )"],
              borderWidth: 1
            }
          ]
        },
        options: {
          title: {
            display: false
          },
          gridLines: {
            display: false
          },
          legend: {
            display: false
          },
          tooltips: {
            mode: "index",
            intersect: true
          },
          responsive: true,
          scales: {
            xAxes: [
              {
                stacked: true
              }
            ],
            yAxes: [
              {
                stacked: true
              }
            ]
          }
        }
      });
    }
  }
};
</script>

<style></style>
