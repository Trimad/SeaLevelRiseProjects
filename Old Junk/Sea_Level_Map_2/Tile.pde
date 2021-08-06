public class Tile {

  int x, y;
  float[] z = new float[4];
  float runningAverage;

  Tile(int x, int y, float[] z) {
    this.x = x;
    this.y = y;
    this.z = z;
  }

  //void show() {

  //  float m = map(this.yArr[0], 0, TILE_SIZE*3, 0, 3);

  //  push();
  //  translate(this.x, 0, this.z);
  //  beginShape(QUADS);
  //  if (m > 0 && m <= 1) {
  //    texture(water);
  //  } else if (m > 1 && m <= 2) {
  //    texture(sand);
  //  } else if (m > 2 && m <= 3) {
  //    texture(dirt);
  //  } else {
  //    texture(snow);
  //  }

  //  // -Y "top"
  //  vertex(-TILE_SIZE, -TILE_SIZE-yArr[0], -TILE_SIZE, 0, 0);
  //  vertex( TILE_SIZE, -TILE_SIZE-yArr[1], -TILE_SIZE, 1, 0);
  //  vertex( TILE_SIZE, -TILE_SIZE-yArr[2], TILE_SIZE, 1, 1);
  //  vertex(-TILE_SIZE, -TILE_SIZE-yArr[3], TILE_SIZE, 0, 1);
  //  //+Y "bottom"
  //  //vertex(-tileSize, tileSize, tileSize, 0, 0);
  //  //vertex( tileSize, tileSize, tileSize, 1, 0);
  //  //vertex( tileSize, tileSize, -tileSize, 1, 1);
  //  //vertex(-tileSize, tileSize, -tileSize, 0, 1);
  //  //+Z "front"
  //  vertex(-TILE_SIZE, -TILE_SIZE-yArr[3], TILE_SIZE, 0, 0);
  //  vertex( TILE_SIZE, -TILE_SIZE-yArr[2], TILE_SIZE, 1, 0);
  //  vertex( TILE_SIZE, TILE_SIZE, TILE_SIZE, 1, 1);
  //  vertex(-TILE_SIZE, TILE_SIZE, TILE_SIZE, 0, 1);
  //  // -Z "back"
  //  vertex( TILE_SIZE, -TILE_SIZE-yArr[1], -TILE_SIZE, 0, 0);
  //  vertex(-TILE_SIZE, -TILE_SIZE-yArr[0], -TILE_SIZE, 1, 0);
  //  vertex(-TILE_SIZE, TILE_SIZE, -TILE_SIZE, 1, 1);
  //  vertex( TILE_SIZE, TILE_SIZE, -TILE_SIZE, 0, 1);
  //  // +X "right"
  //  vertex( TILE_SIZE, -TILE_SIZE-yArr[2], TILE_SIZE, 0, 0);
  //  vertex( TILE_SIZE, -TILE_SIZE-yArr[1], -TILE_SIZE, 1, 0);
  //  vertex( TILE_SIZE, TILE_SIZE, -TILE_SIZE, 1, 1);
  //  vertex( TILE_SIZE, TILE_SIZE, TILE_SIZE, 0, 1);
  //  // -X "left"
  //  vertex(-TILE_SIZE, -TILE_SIZE-yArr[0], -TILE_SIZE, 0, 0);
  //  vertex(-TILE_SIZE, -TILE_SIZE-yArr[3], TILE_SIZE, 1, 0);
  //  vertex(-TILE_SIZE, TILE_SIZE, TILE_SIZE, 1, 1);
  //  vertex(-TILE_SIZE, TILE_SIZE, -TILE_SIZE, 0, 1);
  //  endShape();
  //  pop();
  //}

  void show() {

    float m = map(this.z[0], 0, SIZE*3, 0, 3);

    push();
    translate(this.x*DOUBLE_TILE_SIZE, 0, this.y*DOUBLE_TILE_SIZE);
    beginShape(QUADS);
    if (m > 0 && m <= 1) {
      texture(water);
    } else if (m > 1 && m <= 2) {
      texture(sand);
    } else if (m > 2 && m <= 3) {
      texture(dirt);
    } else {
      texture(snow);
    }

    // -Y "top"
    vertex(-SIZE, -SIZE, -SIZE-z[0], 0, 0);
    vertex( SIZE, -SIZE, -SIZE-z[0], 1, 0);
    vertex( SIZE, -SIZE, SIZE-z[0], 1, 1);
    vertex(-SIZE, -SIZE, SIZE-z[0], 0, 1);
    //+Y "bottom"
    vertex(-SIZE, SIZE, SIZE, 0, 0);
    vertex( SIZE, SIZE, SIZE, 1, 0);
    vertex( SIZE, SIZE, -SIZE, 1, 1);
    vertex(-SIZE, SIZE, -SIZE, 0, 1);
    //+Z "front"
    vertex(-SIZE, -SIZE, SIZE-z[3], 0, 0);
    vertex( SIZE, -SIZE, SIZE-z[3], 1, 0);
    vertex( SIZE, SIZE, SIZE, 1, 1);
    vertex(-SIZE, SIZE, SIZE, 0, 1);
    // -Z "back"
    vertex( SIZE, -SIZE, -SIZE-z[1], 0, 0);
    vertex(-SIZE, -SIZE, -SIZE-z[1], 1, 0);
    vertex(-SIZE, SIZE, -SIZE, 1, 1);
    vertex( SIZE, SIZE, -SIZE, 0, 1);
    // +X "right"
    vertex( SIZE, -SIZE, SIZE-z[2], 0, 0);
    vertex( SIZE, -SIZE, -SIZE-z[1], 1, 0);
    vertex( SIZE, SIZE, -SIZE, 1, 1);
    vertex( SIZE, SIZE, SIZE, 0, 1);
    // -X "left"
    vertex(-SIZE, -SIZE, -SIZE-z[0], 0, 0);
    vertex(-SIZE, -SIZE, SIZE-z[3], 1, 0);
    vertex(-SIZE, SIZE, SIZE, 1, 1);
    vertex(-SIZE, SIZE, -SIZE, 0, 1);
    endShape();
    pop();
  }
}
