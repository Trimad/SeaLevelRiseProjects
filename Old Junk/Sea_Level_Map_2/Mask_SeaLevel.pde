class Mask_SeaLevel implements Mask {

  JSONObject locationDataJSON;
  Station[] stations;

  Mask_SeaLevel() {
  }

  /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
  void loadData() {
    println("M_SeaLevel.generate()");
    locationDataJSON = loadJSONObject("data.json");
    JSONArray values = locationDataJSON.getJSONArray("locations");
    stations = new Station[values.size()];

    float cx = mercX(0);
    float cz = mercZ(0);

    for (int i = 0; i < values.size(); i++) {
      JSONObject temp = values.getJSONObject(i);

      float lat = temp.getFloat("Latitude");
      float lon = temp.getFloat("Longitude"); 
      float x = mercX(lon) - cx;
      //float ratio = (HARD_WIDTH/HARD_DEPTH);
      float z = mercZ(lat) - cz;

      if (x < - HARD_WIDTH*SIZE/2) {
        x += HARD_WIDTH*SIZE;
      } else if (x > HARD_WIDTH*SIZE / 2) {
        x -= HARD_WIDTH*SIZE;
      }

      String country = temp.getString("Country");
      String end = temp.getString("End");
      String file = temp.getString("File");
      float latitude = temp.getFloat("Latitude");
      String location = temp.getString("Location");
      float longitude = temp.getFloat("Longitude");
      String start = temp.getString("Start");

      //This calculation is necessary to fit the stations into their respective boxes, or cells on the grid.
      //int newX = DOUBLE_TILE_SIZE*(round(x/DOUBLE_TILE_SIZE));
      //int newZ = DOUBLE_TILE_SIZE*(round(z/DOUBLE_TILE_SIZE));
      int newX = (int)x;
      int newZ = (int)z;
      stations[i] = new Station(country, end, file, latitude, location, longitude, start, newX, 0, newZ);
    }
    //println(stations.length);
  }
  /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
  void generate(Tile [][] tiles) {
    loadData();
  }
  /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
  void debug() {
    for (Station s : stations) {
      push();
      translate(s.x, s.z, 0);
      sphere(SIZE);
      pop();
    }
  }
  /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
  void update() {
    //for (int x = 0; x < GRID_WIDTH; x++) {
    //  for (int z = 0; z < GRID_DEPTH; z++) {
    //    for (int i = 0; i < stations.length; i++) {
    //      if (dist(stations[i].x, stations[i].z, x, z)<=1) {
    //        float [] yLevel ={stations[i].y, stations[i].y, stations[i].y, stations[i].y};
    //        tiles[x][z].yLevel = yLevel;
    //      }
    //    }
    //  }
    //}
  }
  /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
  float mercX(float lon) {
    lon = radians(lon);
    float a = (256 / PI) * pow(SIZE, 1); //THE pow IS WHAT YOU TUNE TO ALIGN STATIONS WITH THE MAP
    float b = lon + PI;
    return a * b;
  }

  float mercZ(float lat) {
    lat = radians(lat);
    float a = (256 / PI) * pow(SIZE, 1); //THE pow IS WHAT YOU TUNE TO ALIGN STATIONS WITH THE MAP
    float b = tan(PI / 4 + lat / 2);
    float c = PI - log(b);
    return a * c;
  }
  /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
}
