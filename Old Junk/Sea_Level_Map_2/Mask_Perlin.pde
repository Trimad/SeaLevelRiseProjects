class Mask_Perlin implements Mask {

  Mask_Perlin() {
  }
  /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
  void generate(Tile [][] tiles) {
    println("M_Perlin.generate()");
    float increment = 0.03;

    float xOffset = 0;
    noiseDetail(8, 0.6);
    for (int x = 0; x < GRID_WIDTH+1; x++) {
      xOffset+=increment;
      float zOffset = 0;
      for (int z = 0; z < GRID_DEPTH+1; z++) {
        zOffset+=increment;
        float h = map(noise(xOffset, zOffset), 0, 1, -heightModifier, heightModifier);
        if (h < 0) {
          h=0;
        }
        //tiles[x][z].y = h;
      }
      zOffset += increment;
    }
  }
  /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
  void update() {
  }
  /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
  void debug() {
  }
  /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
  void loadData() {
  }
}
