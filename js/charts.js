document.addEventListener("DOMContentLoaded", () => {
  const cyan = "#06b6d4";
  const teal = "#14b8a6";

  new Chart(document.getElementById("lineChart"), {
    type: "line",
    data: {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
      datasets: [
        {
          label: "Revenue",
          data: [120, 190, 150, 280, 240, 350, 420],
          borderColor: cyan,
          backgroundColor: "rgba(6,182,212,0.15)",
          tension: 0.4,
          pointBackgroundColor: "#fff",
          pointBorderColor: cyan,
          pointBorderWidth: 3,
        },
      ],
    },
    options: { responsive: true, maintainAspectRatio: false },
  });

  new Chart(document.getElementById("barChart"), {
    type: "bar",
    data: {
      labels: ["Q1", "Q2", "Q3", "Q4"],
      datasets: [
        {
          label: "Performance",
          data: [65, 78, 92, 85],
          backgroundColor: teal,
          borderRadius: 8,
        },
      ],
    },
    options: { responsive: true, maintainAspectRatio: false },
  });

  new Chart(document.getElementById("doughnutChart"), {
    type: "doughnut",
    data: {
      labels: ["Marketing", "Sales", "Product", "Support"],
      datasets: [
        {
          data: [30, 25, 35, 10],
          backgroundColor: [cyan, teal, "#22d3ee", "#0891b2"],
          borderWidth: 0,
        },
      ],
    },
    options: { responsive: true, maintainAspectRatio: false },
  });
});
