class Grid {

  Tile [][] tiles;
  Mask [] masks = new Mask[2];

  Grid() {
    tiles = new Tile[GRID_WIDTH][GRID_DEPTH];

    masks[0] = new Mask_WorldMap();
    masks[1] = new Mask_SeaLevel();
    //masks[2] = new Mask_Perlin();
  }
  /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
  void generateTerrain() {

    //Create all the tiles
    for (Mask m : masks) {
      m.update();
      for (int x = 0; x < GRID_WIDTH; x++) {
        for (int y = 0; y < GRID_DEPTH; y++) {
          //default height is TILE_SIZE
          float[] z = {SIZE*random(10,20), SIZE*random(10,20), SIZE*random(10,20), SIZE*random(10,20)};
          tiles[x][y] = new Tile(x, y, z);
        }
      }
    }
    //Generate all the masks
    for (Mask m : masks) {
      m.generate(tiles);
    }
  }
  /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
  void show() {
    
    for (int x = 0; x < GRID_WIDTH; x++) {
      for (int z = 0; z < GRID_DEPTH; z++) {
        //push();
        //translate(x*DOUBLE_TILE_SIZE, 0, z*DOUBLE_TILE_SIZE);
        tiles[x][z].show();
        //pop();
      }
    }
    
  }
  /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
  void update() {
    for (Mask m : masks) {
      m.update();
    }
  }
  /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
  void debug() {
    for (Mask m : masks) {
      m.debug();
    }
  }
  /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
}
