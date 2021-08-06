class Mask_Perlin implements Mask {
  Mask_Perlin() {
    float zoff=0;
    float inc = 0.05;
    float xoff = 0;   // Increment xoff
    for (int x = 0; x < COLS; x++) {
      float yoff = 0.0;   // For every xoff, start yoff at 0
      for (int y = 0; y < ROWS; y++) {
        yoff += inc; // Increment yoff
        float z = noise(xoff, yoff, zoff);
        tiles.add(new Tile(x, y, z));
        yoff+=inc;
      }
      xoff+=inc;
    }
    zoff+=inc;
  }
}
