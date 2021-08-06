import processing.core.*; 
import processing.data.*; 
import processing.event.*; 
import processing.opengl.*; 

import java.util.*; 

import java.util.HashMap; 
import java.util.ArrayList; 
import java.io.File; 
import java.io.BufferedReader; 
import java.io.PrintWriter; 
import java.io.InputStream; 
import java.io.OutputStream; 
import java.io.IOException; 

public class Sea_Level_Rise_Video extends PApplet {



PImage mapimg;

int clat = 0;
int clon = 0;
int zoom = 1;
int myWidth = 1280;
int myHeight = 800;
float magicAngle = atan(cos(QUARTER_PI));

ArrayList <Location> locations = new ArrayList();

public void settings() {
  size(myWidth, myHeight, P3D);
}

JSONObject locationDataJSON;
/* * * * * * * * * * * * * * * * * * * * * * * * * */
public void setup() {
  mapBoxAPI();
  locationDataJSON = loadJSONObject("C:\\Users\\matte\\Desktop\\Sea_Level_Rise_Video\\data\\data.json");
  JSONArray values = locationDataJSON.getJSONArray("locations");

  //Create all of the tiles
  for (int x = 0; x < width; x+=WIDTH_SCALE) {
    for (int y = 0; y < height; y+=HEIGHT_SCALE) {

      if (x < width && y < height && mapimg.get(x, y) == -15132134) {
        PVector v = new PVector(x, y, 0);
        locations.add(new Location(v));
      }
      
    }
  }

  //for (int i = 0; i < values.size(); i++) {
  //  if (i >= 5) {
  //    break;
  //  }
  //  JSONObject temp = values.getJSONObject(i);
  //  println(temp);
  //  String country = temp.getString("Country");
  //  String end = temp.getString("End");
  //  String file = "data/"+temp.getString("File");
  //  float latitude = temp.getFloat("Latitude");
  //  String location = temp.getString("Location");
  //  float longitude = temp.getFloat("Longitude");
  //  String start = temp.getString("Start");
  //  locations.add(new Location(country, end, file, latitude, location, longitude, start, v));
  //}

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

  // float cx = mercX(clon);
  // float cy = mercY(clat);
  // //Create all of the locations
  // for (int i = 0; i < locations.size(); i++) {

  //   float lon = locations.get(i).longitude;
  //   float lat = locations.get(i).latitude;

  //   //float mag = float(data[4]);
  //   float x = mercX(lon) - cx;
  //   float y = mercY(lat) - cy;
  //   // This addition fixes the case where the longitude is non-zero and
  //   // points can go off the screen.
  //   if (x < - width/2) {
  //     x += width;
  //   } else if (x > width / 2) {
  //     x -= width;
  //   }
  //   locations.get(i).v.x = x;
  //   locations.get(i).v.y = y;
  // }
}
/* * * * * * * * * * * * * * * * * * * * * * * * * */


public void draw() {
  background(0);

  ////rotateY(frameCount*0.01);
  image(mapimg, 0, 0);
  //rotateX(map(mouseY, 0, height, -HALF_PI, HALF_PI));
  //translate(width>>1, height>>1);
  for (Location l : locations) {
    
    l.show();
    //l.update();
  }
}

/* * * * * * * * * * * * * * * * * * * * * * * * * */
public float mercX(float lon) {
  lon = radians(lon);
  float a = (256 / PI) * pow(2, zoom);
  float b = lon + PI;
  return a * b;
}

public float mercY(float lat) {
  lat = radians(lat);
  float a = (256 / PI) * pow(2, zoom);
  float b = tan(PI / 4 + lat / 2);
  float c = PI - log(b);
  return a * c;
}

public void mapBoxAPI() {
  String token = "pk.eyJ1IjoidHJpbWFkIiwiYSI6ImNqcm4xZm1uNzBtejU0NG9vM3IxM2w3dHYifQ.dZ6OYy13t_sBUvZFxqnWDw";
  // The clon and clat in this url are edited to be in the correct order.
  String url = "https://api.mapbox.com/styles/v1/mapbox/dark-v9/static/" +
    clon + "," + clat + "," + zoom + "/" +
    myWidth + "x" + myHeight +
    "?access_token="+token;

  mapimg = loadImage(url, "jpg");
  println(url);
}

public void mouseReleased() {
  int c = get(mouseX, mouseY);
  System.out.println(c);
}
int WIDTH_SCALE = width>>4;
int HEIGHT_SCALE = height>>4;

class Location {

  String country;
  String end;
  String file;
  float latitude;
  String location;
  float longitude;
  String start;

  //This vector starts at the upper-left corner of the box. 
  PVector v;
  //This is an array if all the sea level readings.
  Table table;

  Location(PVector v) {
    this.v = v;
  }

  Location(String country, String end, String file, float latitude, String location, float longitude, String start, PVector v) {
    this.country = country;
    this.end = end;
    this.latitude = latitude;
    this.location = location;
    this.longitude = longitude;
    this.start = start;
    this.file = file;
    File f = new File(this.file);
    println(this.file);
    //if (f.exists() && !f.isDirectory()) { 
    this.table = loadTable(file);
    //}

    this.v = v;
  }

  public void update() {
    int seaLevel = table.getRow(frameCount).getInt(3);
    //println();
    this.v.z = seaLevel;
  }

  public void show() {

    noStroke();
    beginShape();
    int r = (int)map(v.z,0,1000,0,255);
    fill(r, 255,255);
    vertex(this.v.x, this.v.y, this.v.z);
    vertex(this.v.x+WIDTH_SCALE, this.v.y, this.v.z);
    vertex(this.v.x+WIDTH_SCALE, this.v.y+HEIGHT_SCALE, this.v.z);
    vertex(this.v.x, this.v.y+HEIGHT_SCALE, this.v.z);
    endShape(CLOSE);

    // fill(255, 0, 0);
    // circle(this.v.x, this.v.y, 16);
  }
}
  static public void main(String[] passedArgs) {
    String[] appletArgs = new String[] { "Sea_Level_Rise_Video" };
    if (passedArgs != null) {
      PApplet.main(concat(appletArgs, passedArgs));
    } else {
      PApplet.main(appletArgs);
    }
  }
}
