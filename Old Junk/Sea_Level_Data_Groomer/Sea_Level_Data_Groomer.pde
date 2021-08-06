import java.io.File;
/* * * * * * *
 
 
 * * * * * * */

//d822.csv is the oldest data, and therefore my reference
Table referenceTable;
Table workingTable;

void settings() {
}

void setup() {
  referenceTable = loadTable("data/d822.csv");
  workingTable = new Table();
  populateDatesFromReferenceTable();
  makeHeader();
  //Saving so that I can use the header I just created for the next step
  saveTable(workingTable, "master.csv");
  workingTable = loadTable("master.csv", "header");
  populateTable();
  backfillWithZeroes();
  saveTable(workingTable, "master.csv");
  println("job complete");
  exit();
}

void populateDatesFromReferenceTable() {

  for (int i = 0; i < referenceTable.getRowCount(); i++) {
    String year = referenceTable.getString(i, 0);
    String month = nf(referenceTable.getInt(i, 1), 2);
    String day = nf(referenceTable.getInt(i, 2), 2);
    String date =  year+"-"+month+"-"+day;
    workingTable.setString(i+1, 0, date);
  }
}

int findStartIndex(Table table) {
  int index = 0;
  String year = table.getString(0, 0);
  String month = nf(table.getInt(0, 1), 2);
  String day = nf(table.getInt(0, 2), 2);
  String date =  year+"-"+month+"-"+day;

  for (int i = 0; i < workingTable.getRowCount(); i++) {
    if (date.matches(workingTable.getString(i, 0))) {
      index = i;
      break;
    }
  }
  return index;
}

void populateTable() {

  File folder = new File("C:\\Users\\matte\\Desktop\\Sea_Level_Data_Groomer\\data");
  String[] files = folder.list();

  for (String file : files)
  {
    Table table = loadTable("data/"+file);
    int startIndex = findStartIndex(table);
    //println("start index: " + startIndex);
    for (int i = 0; i < table.getRowCount(); i++) {
      String level = table.getString(i, 3);
      //println("level: "+level);
      workingTable.setString(startIndex+i, file, level);
    }
    println(file);
  }
}

void makeHeader() {
  workingTable.setString(0, 0, "Date");
  File folder = new File("C:\\Users\\matte\\Desktop\\Sea_Level_Data_Groomer\\data");
  String[] files = folder.list();
  int counter = 1;
  for (String file : files)
  {
    workingTable.setString(0, counter++, file);
  }
}

void backfillWithZeroes() {
  println("Backfilling with zeroes...");
  for (int i = 0; i < workingTable.getRowCount(); i++) {
    for (int j = 1; j < workingTable.getColumnCount(); j++) {

      if (workingTable.getString(i, j) == "-32767" || workingTable.getInt(i, j) < 1) {
        workingTable.setInt(i, j, 0);
      }
    }
  }
}
