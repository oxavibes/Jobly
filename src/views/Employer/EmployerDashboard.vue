<template>
  <div>
    <div class="dashboard-section user-statistic-block">
      <div class="user-statistic">
        <i data-feather="command"></i>
        <h3>06</h3>
        <span>Total Job Posted</span>
      </div>
      <div class="user-statistic">
        <i data-feather="file-text"></i>
        <h3>123</h3>
        <span>Application Submit</span>
      </div>
      <div class="user-statistic">
        <i data-feather="users"></i>
        <h3>32</h3>
        <span>Call for interview</span>
      </div>
    </div>
    <div class="dashboard-section dashboard-view-chart">
      <canvas ref="viewChart" width="400" height="200"></canvas>
    </div>
  </div>
</template>

<script>
export default {
  name: "EmployerDashboard",
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
