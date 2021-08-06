class Station {

  String country;
  String end;
  String file;
  float latitude;
  String location;
  float longitude;
  String start;
  int [] measurements;
  PVector v;
  Station(String country, String end, String file, float latitude, String location, float longitude, String start, PVector v) {

    this.country = country;
    this.end = end;
    this.file = file;
    this.latitude = latitude;
    this.location = location;
    this.longitude = longitude;
    this.start = start;
    this.v = v;
  }

  void setMeasurements(int[] measurements) {
    this.measurements = measurements;
  }

  void show() {
    noStroke();
    fill(255, 127, 127);
    circle(this.v.x, this.v.y, 4);
  }
  
}
