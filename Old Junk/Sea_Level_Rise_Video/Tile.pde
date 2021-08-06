class Tile {

  //This vector starts at the upper-left corner of the box. 
  PVector v;
  Tile(PVector v) {
    this.v = v;
  }

  //void show() {

  //  noStroke();
  //  //beginShape();
  //  int m = (int)map(v.z, 0, 5000, 0, 255);

  //  fill(m);
  //  vertex(this.v.x, this.v.y, m);
  //  vertex(this.v.x+WIDTH_SCALE, this.v.y, m);
  //  vertex(this.v.x+WIDTH_SCALE, this.v.y+HEIGHT_SCALE, m);
  //  vertex(this.v.x, this.v.y+HEIGHT_SCALE, m);
  //  //endShape(CLOSE);
  //}

  void show() {

    //this.v.z = map(v.z, 0, 4000, 0, 255);
    //int m = (int)map(v.z, 0, 4000, 0, 255);
    //fill(m);
    box(this.v.x*WIDTH_SCALE, this.v.y*HEIGHT_SCALE, 20);
    //vertex(this.v.x, this.v.y, m);
    //vertex(this.v.x+WIDTH_SCALE, this.v.y, m);
    //vertex(this.v.x+WIDTH_SCALE, this.v.y+HEIGHT_SCALE, m);
    //vertex(this.v.x, this.v.y+HEIGHT_SCALE, m);
  }
}
