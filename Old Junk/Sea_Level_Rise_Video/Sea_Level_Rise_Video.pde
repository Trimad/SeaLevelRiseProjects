PImage mapimg;

int clat = 0;
int clon = 0;
int zoom = 1;
int myWidth = 1280;
int myHeight = 720;
int HALF_WIDTH = myWidth>>1;
int HALF_HEIGHT = myHeight>>1;
float magicAngle;
int WIDTH_SCALE = 20;
int HEIGHT_SCALE = 20;
Table table;
Tile[] tiles_flattened;
Station[] stations;
JSONObject locationDataJSON;

void settings() {
  size(myWidth, myHeight, P3D);
  //fullScreen(P3D);
}
void setup() {
  magicAngle = atan(cos(QUARTER_PI));
  textAlign(CENTER, CENTER);
  textSize(32);
  loadMap();
  makeTiles();
  println("Tiles created.");
  makeStations();
  println("Stations created.");
  loadTableDataIntoStations(stations);
  println("Data loaded into stations.");
}

/* * * * * * * * * * * * * * * * * * * * * * * * * */

void loadMap() {
  mapimg = loadImage("data/1280x720.png", "png");
}

void makeTiles() {
  //tiles = new Tile[width][height];
  tiles_flattened = new Tile[myWidth*myHeight];

  for (int x = 0; x < myWidth; x+=WIDTH_SCALE) {
    for (int y = 0; y < myHeight; y+=HEIGHT_SCALE) {

      //if (x < myWidth && y < myHeight && mapimg.get(x, y) == -15132134) {
      PVector v = new PVector(x, y, 0);
      tiles_flattened[y*myWidth+x] = new Tile(v);
      //}
    }
  }
}
/* * * * * * * * * * * * * * * * * * * * * * * * * */
void makeStations() {

  locationDataJSON = loadJSONObject("C:\\Users\\matte\\Desktop\\Sea_Level_Rise_Video\\data\\data.json");
  JSONArray values = locationDataJSON.getJSONArray("locations");

  int mySize = values.size();
  stations = new Station[mySize];

  //HARD-CODED MAGIC NUMBER
  for (int i = 0; i < mySize; i++) {

    JSONObject temp = values.getJSONObject(i);
    float lat = temp.getFloat("Latitude");
    float lon = temp.getFloat("Longitude");

    float cx = mercX(clon);
    float cy = mercY(clat);
    float x = mercX(lon) - cx;
    float y = mercY(lat) - cy;
    if (x < - width/2) {
      x += width;
    } else if (x > width / 2) {
      x -= width;
    }

    String country = temp.getString("Country");
    String end = temp.getString("End");
    String file = temp.getString("File");
    float latitude = temp.getFloat("Latitude");
    String location = temp.getString("Location");
    float longitude = temp.getFloat("Longitude");
    String start = temp.getString("Start");
    PVector v = new PVector(x+HALF_WIDTH, y+HALF_HEIGHT, 255);
    stations[i] = new Station(country, end, file, latitude, location, longitude, start, v);
  }
}
/* * * * * * * * * * * * * * * * * * * * * * * * * */
void loadTableDataIntoStations(Station[] s) {

  table = loadTable("data/master.csv", "header");
  int MAGIC_NUMBER = 63154;

  for (int i = 0; i < s.length; i++) {

    int[] measurements = new int[MAGIC_NUMBER];

    for (int j = 0; j < MAGIC_NUMBER; j++) {

      measurements[j] = table.getInt(j, stations[i].file);
    }
    s[i].setMeasurements(measurements);
  }
}
/* * * * * * * * * * * * * * * * * * * * * * * * * */



void draw() {
  background(255);
  lights();
  pointLight(50, 250, 50, 10, 30, 50);
  //translate(0, 0, -400);
  //ortho();

  //rotateX(magicAngle);
  //rotateY(-QUARTER_PI);
  //image(mapimg, 0, 0);


  noStroke();
  //beginShape(QUAD);
  for (int x = 0; x < width; x+=WIDTH_SCALE) {
    for (int y = 0; y < height; y+=HEIGHT_SCALE) {

      try {
        //tiles_flattened[y*width+x].show();
        //Check this tiles distance to a station
        for (int i = 0; i < stations.length; i++) {
          //if (dist(stations[i].v.x, stations[i].v.y, tiles_flattened[y*width+x].v.x, tiles_flattened[y*width+x].v.y) <= 20) {
          //  tiles_flattened[y*width+x].v.z = stations[i].measurements[frameCount+60000];
          //}
          //tiles_flattened[y*width+x].v.z = random(200);
          //Update the station
          stations[i].show();
        }
      }    
      catch(NullPointerException e) {
      }
    }
  }
  //endShape();

  stroke(255);
  fill(255);
  text(table.getString(frameCount+60000, 0), HALF_WIDTH, height-32, 20);
}

/* * * * * * * * * * * * * * * * * * * * * * * * * */
float mercX(float lon) {
  lon = radians(lon);
  float a = (256 / PI) * pow(2, zoom);
  float b = lon + PI;
  return a * b;
}

float mercY(float lat) {
  lat = radians(lat);
  float a = (256 / PI) * pow(2, zoom);
  float b = tan(PI / 4 + lat / 2);
  float c = PI - log(b);
  return a * c;
}
/* * * * * * * * * * * * * * * * * * * * * * * * * */



void mouseReleased() {
  color c = get(mouseX, mouseY);
  System.out.println(c);
}

void sortArray() {

  //Collections.sort(locations, new Comparator<Location>() {
  //  @Override
  //    public int compare(Location z1, Location z2) {
  //    if (z1.latitude > z2.latitude)
  //    return 1;
  //    if (z1.latitude < z2.latitude)
  //    return -1;
  //    return 0;
  //  }
  //}
  //);
}
