class Mask_WorldMap implements Mask {

  PImage img;

  Mask_WorldMap() {
  }
  /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
  void generate(Tile [][] tiles) {
    println("M_WorldMap.generate()");
    loadData();
    float[] land = {DOUBLE_TILE_SIZE, DOUBLE_TILE_SIZE, DOUBLE_TILE_SIZE, DOUBLE_TILE_SIZE};
    float[] sea = {SIZE, SIZE, SIZE, SIZE};
    img.loadPixels();
    for (int x = 0; x < img.width; x+=HALF_TILE_SIZE) {
      for (int y = 0; y < img.height; y+=HALF_TILE_SIZE) {

        //Alpha color value
        float a = (img.pixels[y*img.width+x] >> 24)& 0xFF;
        //Red color value
        float r = (img.pixels[y*img.width+x] >> 16)& 0xFF;
        //Green color value
        float g = (img.pixels[y*img.width+x] >> 8)& 0xFF;
        //Blue color value
        float b = (img.pixels[y*img.width+x] >> 0)& 0xFF;
        //Average of red, green and blue indicating brightness
        float rgb = (r+g+b)/3;

        //left off here, 2/4/2019
        int mx = (int)map(x, 0, img.width, 0, GRID_WIDTH);
        int mz = (int)map(y, 0, img.height, 0, GRID_DEPTH);
        tiles[mx][mz].x = mx;
        tiles[mx][mz].y = mz;

        if (r == 232) {
          tiles[mx][mz].z = land;
        } else {
          tiles[mx][mz].z = sea;
        }
      }
    }
  }

  void debug() {
    image(img, 0, 0);
  }

  void update() {
  }

  void loadData() {
    img = loadImage("640x512-streets-basic.png");
    img.resize(img.width*SIZE, img.height*SIZE);
  }
}
