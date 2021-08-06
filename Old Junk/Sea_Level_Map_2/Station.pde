class Station {

  String country;
  String end;
  String file;
  float latitude;
  String location;
  float longitude;
  String start;
  int [] measurements;
  int x, y, z;
  
  Station(String country, String end, String file, float latitude, String location, float longitude, String start, int x, int y, int z) {
    this.country = country;
    this.end = end;
    this.file = file;
    this.latitude = latitude;
    this.location = location;
    this.longitude = longitude;
    this.start = start;
    this.x = x;
    this.y = y;
    this.z = z;
  }

  void loadMeasurements(int[] measurements) {
    this.measurements = measurements;
  }
  
}
