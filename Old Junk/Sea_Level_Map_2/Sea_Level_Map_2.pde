//https://wiki.openstreetmap.org/wiki/Slippy_map_tilenames
//https://wiki.openstreetmap.org/wiki/Slippy_map_tilenames
//https://wiki.openstreetmap.org/wiki/Slippy_map_tilenames
//https://github.com/CodingTrain/website/blob/master/CodingChallenges/CC_057_Earthquake_Viz/Processing/CC_057_Earthquake_Viz/CC_057_Earthquake_Viz.pde
//https://github.com/CodingTrain/website/blob/master/CodingChallenges/CC_057_Earthquake_Viz/Processing/CC_057_Earthquake_Viz/CC_057_Earthquake_Viz.pde
//https://github.com/CodingTrain/website/blob/master/CodingChallenges/CC_057_Earthquake_Viz/Processing/CC_057_Earthquake_Viz/CC_057_Earthquake_Viz.pde
import peasy.PeasyCam;
PeasyCam cam;

PImage dirt;
PImage grass;
PImage lava;
PImage rock;
PImage sand;
PImage snow;
PImage water;

final static int HARD_WIDTH = 640;
final static int HARD_DEPTH = 512;

//T H E   G R I D
final static int SIZE = 5; //max value is 2^7-1
final static int DOUBLE_TILE_SIZE = 12; //max value is 2^7-1
final static int HALF_TILE_SIZE = 3; //max value is 2^7-1

static int GRID_WIDTH = 0;
static int GRID_DEPTH = 0;

final static int heightModifier = SIZE*6;

Grid grid;

void settings() {

  //fullScreen(P3D);
  size(1920, 1080, P3D);
}
//Mask mask = new M_SeaLevel();
void setup() {
  GRID_WIDTH = HARD_WIDTH/SIZE;
  GRID_DEPTH = HARD_DEPTH/SIZE;
  cam = new PeasyCam(this, HARD_WIDTH>>1, HARD_DEPTH>>1, HARD_DEPTH>>1, HARD_DEPTH<<1);
  //fullScreen(P3D);

  textureMode(NORMAL);
  textureWrap(REPEAT);
  dirt =  loadImage("assets/dirt.jpg");
  //grass = loadImage("assets/grass.jpg");
  //lava =  loadImage("assets/lava.jpg");
  //rock =  loadImage("assets/rock.jpg");
  sand =  loadImage("assets/sand.jpg");
  snow =  loadImage("assets/snow.jpg");
  water =  loadImage("assets/water.jpg");

  grid = new Grid();
  grid.generateTerrain();
  grid.update();
  //imageMode(CENTER);
}

void draw() {

  //ortho();
  //lights();
  //orientCamera();
  background(0);
  noStroke();
  toggleGuideLines(keyPressed);
  //toggleGuideLines(true);
  grid.update();
  grid.show();
  grid.debug();
}


//void orientCamera() {
  //float magic = atan(cos(QUARTER_PI));
  //translate(-(GRID_WIDTH*TILE_SIZE), 0, -(GRID_DEPTH*TILE_SIZE));
  //rotateX(-magic);
  //==rotateX(-HALF_PI);
  //rotateY(QUARTER_PI);
  // ortho();
//}

void toggleGuideLines(boolean state) {

  //Break out immediately if the condition is not met
  if (!state)
    return;

  strokeWeight(3);

  //x-axis, positive
  stroke(255, 100, 100);
  line(0, 0, 0, 9000, 0, 0);

  //x-axis, negative
  stroke(100, 0, 0);
  line(0, 0, 0, -9000, 0, 0);

  //y-axis, positive
  stroke(100, 255, 100);
  line(0, 0, 0, 0, 9000, 0);

  //y-axis, negative
  stroke(0, 100, 0);
  line(0, 0, 0, 0, -9000, 0);

  //z-axis, positive
  stroke(100, 100, 255);
  line(0, 0, 0, 0, 0, 9000);

  //z-axis, negative
  stroke(0, 0, 100);
  line(0, 0, 0, 0, 0, -9000);

  stroke(0);
  strokeWeight(1);
}
