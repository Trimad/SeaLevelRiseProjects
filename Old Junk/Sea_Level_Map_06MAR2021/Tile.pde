public class Tile {

  int x, y;
  float z;

  Tile(int x, int y, float z) {
    this.x = x*TILE_SIZE*2;
    this.y = y*TILE_SIZE*2;
    this.z = z;
  }


  void draw() {
    float mz = map(z, 0, 1, 0, 128);
    translate(x, y, z);
    push();
  beginShape(QUADS);
    if (z > 0 && z <= 0.333) {
      texture(water);
    } else if (z > 0.333 && z <= 0.666) {
      texture(sand);
    } else if (z > 0.666 && z <= 1) {
      texture(dirt);
    }
    
  
    // -Y "top"
    vertex(-TILE_SIZE, -TILE_SIZE, -mz, 1, 1);
    vertex( TILE_SIZE, -TILE_SIZE, -mz, 1, 0);
    vertex( TILE_SIZE, -TILE_SIZE, mz, 0, 1);
    vertex(-TILE_SIZE, -TILE_SIZE, mz, 0, 0);
    //+Y "bottom"
    //vertex(-TILE_SIZE, TILE_SIZE, mz, 0, 0);
    //vertex( TILE_SIZE, TILE_SIZE, mz, 1, 0);
    //vertex( TILE_SIZE, TILE_SIZE, -mz, 1, 1);
    //vertex(-TILE_SIZE, TILE_SIZE, -mz, 0, 1);
    ////+Z "front"
    //vertex(-TILE_SIZE, -TILE_SIZE, mz, 0, 0);
    //vertex( TILE_SIZE, -TILE_SIZE, mz, 1, 0);
    //vertex( TILE_SIZE, TILE_SIZE, mz, 1, 1);
    //vertex(-TILE_SIZE, TILE_SIZE, mz, 0, 1);
    //// -Z "back"
    //vertex( TILE_SIZE, -TILE_SIZE, -mz, 0, 0);
    //vertex(-TILE_SIZE, -TILE_SIZE, -mz, 1, 0);
    //vertex(-TILE_SIZE, TILE_SIZE, -mz, 1, 1);
    //vertex( TILE_SIZE, TILE_SIZE, -mz, 0, 1);
    //// +X "right"
    //vertex( TILE_SIZE, -TILE_SIZE, mz, 0, 0);
    //vertex( TILE_SIZE, -TILE_SIZE, -mz, 1, 0);
    //vertex( TILE_SIZE, TILE_SIZE, -mz, 1, 1);
    //vertex( TILE_SIZE, TILE_SIZE, mz, 0, 1);
    //// -X "left"
    //vertex(-TILE_SIZE, -TILE_SIZE, -mz, 0, 0);
    //vertex(-TILE_SIZE, -TILE_SIZE, mz, 1, 0);
    //vertex(-TILE_SIZE, TILE_SIZE, mz, 1, 1);
    //vertex(-TILE_SIZE, TILE_SIZE, -mz, 0, 1);
    endShape();



    pop();
    translate(-x, -y, -z);
  }
}
