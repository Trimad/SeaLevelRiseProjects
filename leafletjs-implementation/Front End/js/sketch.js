var raw;
var seaLevelData;
var graph;
var HALF_HEIGHT = 0;
var QUARTER_HEIGHT = 0;
var HALF_WIDTH = 0;
var QUARTER_WIDTH = 0;
var THREE_PI;
var MEAN;
var MEDIAN;
var img;
var magicAngle;
var silentHill;
var mappedMean, mappedMedian;
/*
In this program, the csv file containing the data for a given
weather station is stored locally and referenced by a URL parameter.
*/
function preload() {
  //load the csv data
  raw = getURLParams().params;
  seaLevelData = loadTable("data/d" + raw + ".csv", "csv");
  //load the water texture
  img = loadImage("water.jpg");
  //load the spooky font
  silentHill = loadFont("FedraSerifDisProRegular.ttf");
}

function setup() {
  frameRate(60);
  textureMode(NORMAL);

  magicAngle = atan(cos(QUARTER_PI));
  createCanvas(windowWidth, windowHeight, WEBGL);

  var allValues = [];

  for (var i = 0; i < seaLevelData.rows.length; i++) {
    let value = parseInt(seaLevelData.rows[i].arr[3]);

    allValues.push(value);
  }

  MEAN = mean(allValues);
  MEDIAN = median(allValues);
  console.log("MEAN: " + MEAN, "MEDIAN: " + MEDIAN);

  //Initialize the constants for optimization purposes
  HALF_HEIGHT = height >> 1;
  QUARTER_HEIGHT = height >> 2;
  HALF_WIDTH = width >> 1;
  QUARTER_WIDTH = width >> 2;
  THREE_PI = PI * 3;

  graph = new SeaLevelGraph(seaLevelData);
  graph.init();
}

function draw() {
  ortho(-HALF_WIDTH, HALF_WIDTH, -HALF_HEIGHT, HALF_HEIGHT, 0, width + height);

  //ortho();
  rotateX(-magicAngle);
  rotateY(-QUARTER_PI);
  // rotateX(frameCount * 0.001);
  // rotateY(-frameCount * 0.001);
  background(23, 38, 60);
  background(0);
  graph.calculate();
  graph.showData();
  graph.showFrame();
  graph.showLabels();
  graph.controls();
}

function mean(numbers) {
  var total = 0,
    i;
  for (i = 0; i < numbers.length; i += 1) {
    if (numbers[i] > 0) total += numbers[i];
  }
  return total / numbers.length;
}

function median(numbers) {
  // median of [3, 5, 4, 4, 1, 1, 2, 3] = 3
  var median = 0,
    numsLen = numbers.length;
  numbers.sort();

  if (numsLen % 2 === 0) {
    // average of two middle numbers
    median = (numbers[numsLen / 2 - 1] + numbers[numsLen / 2]) / 2;
  } else {
    // is odd
    // middle number only
    median = numbers[(numsLen - 1) / 2];
  }

  return median;
}
