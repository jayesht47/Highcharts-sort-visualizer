"use strict";

let plotObj = {};

window.addEventListener("load", (event) => {
  let dataArr = generateData();
  plotColumn(dataArr);
});

const generateData = () => {
  let randomData = [];

  randomData = Array.from({ length: 10 }, () =>
    Math.floor(Math.random() * 100)
  );

  return randomData;
};

const randomizeData = () => {
  const dataArr = generateData();
  plotObj.series[0].update(
    {
      data: dataArr,
    },
    true
  );
};

const plotColumn = (dataArr) => {
  plotObj = Highcharts.chart("columnPlot", {
    chart: {
      type: "column",
    },
    title: {
      text: "",
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
        data: dataArr,
      },
    ],
  });
};
