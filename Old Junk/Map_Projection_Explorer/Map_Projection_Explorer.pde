import peasy.PeasyCam;
PeasyCam cam;

float r = 100;
float a=0.0;

PVector [] points = new PVector[40];
PShape s;  // The PShape object

void setup() {

  size(800, 600, P3D);
  //cam = new PeasyCam(this, 400);

  stroke(255);

  s = createShape();


  for (int i = 0; i < points.length; i++) {
    points[i] = new PVector(0, 0, 0);
  }

  strokeWeight(2);
}


void draw() {

  background(0);
  translate(width>>1, height>>1);

  for (int i = 0; i < points.length; i++) {
    a+=0.001;
    for (int x = 0; x < points.length; x++) {
      for (int y = 0; y < points.length; y++) {

        points[i].x = r*cos(a*x);
        points[i].y = r*sin(a*y);
        points[i].z = a;
      }
    }

    point(points[i].x, points[i].y, points[i].z);
  }
}
