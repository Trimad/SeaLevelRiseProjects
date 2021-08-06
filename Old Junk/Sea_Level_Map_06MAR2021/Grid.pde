public class Grid {

  //Tile [][] tiles = new Tile[ROWS][COLS];
  ArrayList<Tile> tiles = new ArrayList<Tile>();
  ArrayList<Mask> masks = new ArrayList<Mask>();

  Grid() {
  }

  public void addMask(Mask mask) {
    masks.add(mask);
  }

  public void transform() {

    for (Mask m : masks) {
      for (Tile t : m.tiles) {
        tiles.add(t);
      }
    }
  }

  public void draw() {

    for (Tile t : tiles) {
      t.draw();
    }
  }
}
