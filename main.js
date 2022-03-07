"use strict";

window.addEventListener("load", (event) => {
  plotColumn();
});

const generateData = () => {};

const plotColumn = () => {
  Highcharts.chart("columnPlot", {
    chart: {
      type: "column",
    },
    title: {
      text: "Random generated data",
    },
    xAxis: {
      categories: [
        "One",
        "Two",
        "Three",
        "Four",
        "Five",
        "Six",
        "Seven",
        "Eight",
        "Nine",
        "Ten",
      ],
      crosshair: true,
    },
    credits: {
      enabled: false,
    },
    yAxis: {
      min: 0,
      title: {
        text: "",
      },
    },
    plotOptions: {
      column: {
        pointPadding: 0.2,
        borderWidth: 0,
      },
    },
    legend: {
      enabled: false,
    },
    series: [
      {
        name: "Sample Data",
        data: [
          49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1,
        ],
      },
    ],
  });
};
