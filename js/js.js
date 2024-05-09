const dayChart = document.getElementById("dayChart");

new Chart(dayChart, {
  type: "bar",
  data: {
    labels: ["mon", "tue", "wed", "thu", "fri", "sat", "sun"],
    datasets: [
      {
        data: [17.45, 34.91, 52.36, 31.07, 23.39, 43.28, 25.48],
        backgroundColor: [
          "hsl(10, 79%, 65%)",
          "hsl(10, 79%, 65%)",
          "hsl(186, 34%, 60%)",
          "hsl(10, 79%, 65%)",
          "hsl(10, 79%, 65%)",
          "hsl(10, 79%, 65%)",
          "hsl(10, 79%, 65%)",
        ],
        borderWidth: 1,
        borderRadius: 5,
      },
    ],
  },
  options: {
    scales: {
      y: {
        display: false,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            let value = context.dataset.data[context.dataIndex];
            return "$" + value;
          },
          title: function () {
            return "";
          },
          labelColor: function () {
            return {
              borderColor: "transparent",
              backgroundColor: "transparent",
            };
          },
        },
        displayColors: false,
      },
    },
  },
});
