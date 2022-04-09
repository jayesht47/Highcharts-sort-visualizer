"use strict";

let plotObj = {};
let plotData = [];

window.addEventListener("load", (event) => {
  plotData = generateData();
  plotColumn(plotData);
});

const generateData = () => {
  let randomData = [];

  randomData = Array.from({ length: 10 }, () =>
    Math.floor(Math.random() * 100)
  );

  return randomData;
};

const randomizeData = () => {
  plotData = generateData();
  plotObj.series[0].update(
    {
      data: plotData,
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

const updatePlot = (dataArr) => {
  plotObj.series[0].update(
    {
      data: dataArr,
    },
    false
  );
  plotObj.redraw();
};

//----------------------------------- Click handlers -------------------------------------

const sortBtnClickHandler = () => {
  if (document.querySelector('input[name="sortAlgorithm"]:checked') != null) {
    const selectedAlgo = document.querySelector(
      'input[name="sortAlgorithm"]:checked'
    ).value;

    switch (selectedAlgo) {
      case "selection":
        selectionSort(plotData);
        break;

      default:
        break;
    }
  } else {
    throw Error("No Algorithm selected!");
  }
};

//-----------------------------------Utils-------------------------------------

const timer = (ms) => new Promise((res) => setTimeout(res, ms));

//--------------------------------Sorting Algorithms-----------------------------

const selectionSort = async (inputArr) => {
  for (let i = 0; i < inputArr.length; i++) {
    const tempArr = inputArr.slice(i);
    const smallest = getSmallestInArr(tempArr);
    let smallestIndex = 0;

    for (let j = i; j < inputArr.length; j++) {
      if (smallest === inputArr[j]) {
        smallestIndex = j;
        break;
      }
    }

    await timer(500);
    updatePlot(inputArr);

    inputArr[smallestIndex] = inputArr[i];
    inputArr[i] = smallest;
  }
  return inputArr;
};

const getSmallestInArr = (inputArr) => {
  if (inputArr.length === 0) return inputArr[0];

  let smallest = Number.MAX_SAFE_INTEGER;

  for (const number of inputArr) {
    if (number < smallest) {
      smallest = number;
    }
  }
  return smallest;
};
