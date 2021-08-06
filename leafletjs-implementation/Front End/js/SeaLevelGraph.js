class SeaLevelGraph {
  constructor(data) {
    this.data = data;
    this.points = [];

    this.angle = 0;
    this.radius = (width + height) >> 3;

    this.actualLevel = 0;
    this.actualLevelMin = 99999;
    this.actualLevelMax = 0;

    this.counter = 0;

    this.label_date = createGraphics(128, 24);
    this.label_date.textAlign(RIGHT, TOP);
    this.label_date.textFont(silentHill);
    this.label_date.textSize(24);

    this.label_level = createGraphics(64, 24);
    this.label_level.textAlign(RIGHT, TOP);
    this.label_level.textFont(silentHill);
    this.label_level.textSize(24);

    this.label_mean = createGraphics(256, 24);
    this.label_mean.textAlign(LEFT, TOP);
    this.label_mean.textFont(silentHill);
    this.label_mean.textSize(24);

    this.label_median = createGraphics(256, 24);
    this.label_median.textAlign(LEFT, TOP);
    this.label_median.textFont(silentHill);
    this.label_median.textSize(24);
  }

  init() {
    //Get the min and max sea level with this for-loop
    for (let i = 0; i < this.data.getRowCount(); i++) {
      const actualLevel = parseInt(this.data.rows[i].arr[3]);

      if (this.actualLevelMin > actualLevel && actualLevel > 0) {
        this.actualLevelMin = actualLevel;
      }
      if (this.actualLevelMax < actualLevel) {
        this.actualLevelMax = actualLevel;
      }
    }

    for (let i = 0; i <= 365; i++) {
      this.points[i] = new Point(0, 0, 0, 0);
    }

    mappedMean = map(
      MEAN,
      this.actualLevelMin,
      this.actualLevelMax,
      this.radius,
      -this.radius
    );

    mappedMedian = map(
      MEDIAN,
      this.actualLevelMin,
      this.actualLevelMax,
      this.radius,
      -this.radius
    );
  }

  /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
    1. Get the water level for a certain date.
    2. Map that value to one that will fit inside the browser window.
  * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
  calculate() {
    this.counter++;

    const year = this.data.getRow(this.counter).arr[0];
    const month = nf(this.data.getRow(this.counter).arr[1], 2);
    const day = nf(this.data.getRow(this.counter).arr[2], 2);

    //Date Label
    this.label_date.background(0);
    this.label_date.fill(255);
    this.label_date.noStroke();
    const date = day + "-" + month + "-" + year;
    this.label_date.text(date, this.label_date.width - 4, 1);

    //Level Label
    this.label_level.background(0);
    this.label_level.fill(255);
    this.label_level.noStroke();
    this.label_level.text(this.points[365].y, this.label_level.width-1, 1);

    //Mean Label
    this.label_mean.background(0);
    this.label_mean.fill(255, 127, 127);
    this.label_mean.noStroke();
    this.label_mean.text("MEAN: " + nf(MEAN, 4, 2), 0, 0);

    //Median Label
    this.label_median.background(0);
    this.label_median.fill(127, 255, 127);
    this.label_median.noStroke();
    this.label_median.text("MEDIAN: " + MEDIAN, 0, 0);
  }

  showData() {
    noStroke();
    beginShape(TRIANGLE_STRIP);
    texture(img);
    for (let i = 0; i <= 365; i++) {
      let level = this.data.getRow(this.counter + i).arr[3];

      let mappedLevel = map(
        level,
        this.actualLevelMax,
        this.actualLevelMin,
        -QUARTER_HEIGHT,
        QUARTER_HEIGHT
      );

      if (level < 0) {
        level = 0;
        mappedLevel = QUARTER_HEIGHT;
      }

      const mappedBrightness = map(
        level,
        this.actualLevelMin,
        this.actualLevelMax,
        0,
        255
      );
      const angle = map(i, 365, 0, HALF_PI, -PI - HALF_PI);

      this.points[i].x = this.radius * Math.cos(angle);
      this.points[i].y = level;
      this.points[i].z = this.radius * Math.sin(angle);
      this.points[i].my = mappedLevel;

      fill(mappedBrightness, mappedBrightness - 127, 63);
      vertex(this.points[i].x, this.points[i].my, this.points[i].z, 0, 0);
      beginContour();
      vertex(this.points[i].x, QUARTER_HEIGHT, this.points[i].z, 1, 1);
    }
    endShape();
  }

  showFrame() {
    stroke(50);
    noFill();
    beginShape();
    vertex(-QUARTER_WIDTH, -QUARTER_HEIGHT, this.radius);
    vertex(-QUARTER_WIDTH, -QUARTER_HEIGHT, -this.radius);
    vertex(-QUARTER_WIDTH, QUARTER_HEIGHT, -this.radius);
    vertex(QUARTER_WIDTH, QUARTER_HEIGHT, -this.radius);
    vertex(QUARTER_WIDTH, QUARTER_HEIGHT, this.radius);
    vertex(-QUARTER_WIDTH, QUARTER_HEIGHT, this.radius);
    vertex(-QUARTER_WIDTH, -QUARTER_HEIGHT, this.radius);
    vertex(QUARTER_WIDTH, -QUARTER_HEIGHT, this.radius);
    vertex(QUARTER_WIDTH, -QUARTER_HEIGHT, -this.radius);
    vertex(-QUARTER_WIDTH, -QUARTER_HEIGHT, -this.radius);
    vertex(-QUARTER_WIDTH, QUARTER_HEIGHT, -this.radius);
    vertex(-QUARTER_WIDTH, QUARTER_HEIGHT, this.radius);
    vertex(QUARTER_WIDTH, QUARTER_HEIGHT, this.radius);
    vertex(QUARTER_WIDTH, -QUARTER_HEIGHT, this.radius);
    vertex(QUARTER_WIDTH, -QUARTER_HEIGHT, -this.radius);
    vertex(QUARTER_WIDTH, QUARTER_HEIGHT, -this.radius);
    endShape();

    // level bar
    stroke(127, 127, 255);
    text("test", 0, 0, 0);
    noFill();
    beginShape();
    vertex(-QUARTER_WIDTH, this.points[365].my, this.radius + 1);
    vertex(0, this.points[365].my, this.radius + 1);
    vertex(0, QUARTER_HEIGHT, this.radius + 1);
    endShape();

    //Mean Bar
    stroke(255, 127, 127);
    beginShape();
    vertex(-QUARTER_WIDTH, mappedMean, this.radius + 1);
    vertex(QUARTER_WIDTH, mappedMean, this.radius + 1);
    endShape();

    // Median Bar
    stroke(127, 255, 127);
    beginShape();
    vertex(-QUARTER_WIDTH, mappedMedian, this.radius + 1);
    vertex(QUARTER_WIDTH, mappedMedian, this.radius + 1);
    endShape();
  }

  showLabels() {
    // Date label
    push();
    translate(0, QUARTER_HEIGHT + 10, this.radius);
    fill(255);
    texture(this.label_date);
    plane(this.label_date.width, 20);
    translate(0, -QUARTER_HEIGHT - 10, -this.radius);
    pop();

    //Level label
    push();
    const xShift = QUARTER_WIDTH + (this.label_level.width >> 1);
    translate(-xShift, this.points[365].my, this.radius);
    fill(255);
    texture(this.label_level);
    plane(this.label_level.width, 20);
    pop();

    //Median label
    push();
    const xShift2 = QUARTER_WIDTH + (this.label_median.width >> 1);
    translate(xShift2, mappedMedian, this.radius);
    fill(255);
    texture(this.label_median);
    plane(this.label_median.width, 20);
    pop();

    //Mean label
    push();
    const xShift3 = QUARTER_WIDTH + (this.label_mean.width >> 1);
    translate(xShift3, mappedMean, this.radius);
    fill(255);
    texture(this.label_mean);
    plane(this.label_mean.width, 20);
    pop();
  }

  controls() {
    if (mouseIsPressed) {
      if (mouseX > 0 && mouseX < width) {
        this.counter = Math.floor(
          map(mouseX, 0, width, 0, this.data.rows.length - 366)
        );
      }
    }
  }
}

/*********
 * 0, 0, 0
 * 0, 0, 1
 * 0, 1, 1
 * 1, 1, 1
 * 1, 1, 0
 * 0, 1, 0
 * 0, 0, 0
 * 1, 0, 0
 * 1, 0, 1
 * 0, 0, 1
 * 0, 1, 1
 * 0, 1, 0
 * 1, 1, 0
 * 1, 0, 0
 * 1, 0, 1
 * 1, 1, 1
 *********/
