import peasy.PeasyCam;
PeasyCam cam;

PImage dirt;
PImage grass;
PImage lava;
PImage rock;
PImage sand;
PImage snow;
PImage water;

final static int ROWS = 90;
final static int COLS = 160;
final static int SIZE = 1200;
final static int TILE_SIZE = 8;

Grid grid;

void settings() {
  size(1920, 1080, P3D);
}

void setup() {
  cam = new PeasyCam(this, (ROWS*TILE_SIZE)<<1, (COLS*TILE_SIZE)>>1, 0, 1000);
  grid = new Grid();
  dirt =  loadImage("assets/dirt.jpg");
  sand =  loadImage("assets/sand.jpg");
  water = loadImage("assets/water.jpg");
  textureMode(NORMAL);
  textureWrap(REPEAT);
  grid.addMask(new Mask_Perlin());
  grid.transform();
}

void draw() {
  background(0);
  guideLines();
  noStroke();
  grid.draw();
}

boolean state = true;
void keyPressed() {
  state = !state;
}

void guideLines() {
  if (state) {
    strokeWeight(1);
    //x-axis, green positive
    stroke(#FF0000);
    line(0, 0, 0, SIZE, 0, 0);
    //x-axis, green negative
    stroke(#7F0000);
    line(0, 0, 0, -SIZE, 0, 0);

    //y-axis, blue positive
    stroke(#00FF00);
    line(0, 0, 0, 0, SIZE, 0);
    //y-axis, blue negative
    stroke(#007F00);
    line(0, 0, 0, 0, -SIZE, 0);

    //z-axis, red positive
    stroke(#0000FF);
    line(0, 0, 0, 0, 0, SIZE);
    //z-axis, red negative
    stroke(#00007F);
    line(0, 0, 0, 0, 0, -SIZE);

    //The box
    stroke(#FFFF00);
    line(0, SIZE, 0, SIZE, SIZE, 0);

    stroke(#FFFF00);
    line(SIZE, SIZE, 0, SIZE, 0, 0);

    stroke(#FF00FF);
    line(SIZE, 0, SIZE, SIZE, 0, 0);

    stroke(#FF00FF);
    line(0, 0, SIZE, SIZE, 0, SIZE);

    stroke(#00FFFF);
    line(0, 0, SIZE, 0, SIZE, SIZE);

    stroke(#00FFFF);
    line(0, SIZE, 0, 0, SIZE, SIZE);

    stroke(#FFFFFF);
    line(0, SIZE, SIZE, SIZE, SIZE, SIZE);

    stroke(#FFFFFF);
    line(SIZE, 0, SIZE, SIZE, SIZE, SIZE);

    stroke(#FFFFFF);
    line(SIZE, SIZE, 0, SIZE, SIZE, SIZE);
  }
}
