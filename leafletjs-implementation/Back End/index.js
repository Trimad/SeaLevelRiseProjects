const fs = require('fs'), files = fs.readdirSync(__dirname + '/data/');
const express = require('express');

const PORT = 3000;
const app = express();
app.use(express.static('public')); //enable all CORS requests

app.listen(PORT, () => {
    process.argv.forEach(arg => {
        if (arg == "live") {
            console.log('\x1b[31m%s\x1b[0m', 'LIVE MODE');  //cyan
        } else if (arg == "test" || arg == "debug" || arg == "paper") {
            console.log('\x1b[33m%s\x1b[0m', 'DEBUG MODE');  //cyan 
        }
    }
    );
});





const daily_map = new Map();
const metadata = new Map();

//EXAMPLE USAGE:
//localhost:3000/loadcsv
app.get('/loadcsv', (request, response) => {
    console.log(request.url, new Date().toLocaleString());

    try {

        files.forEach(function (file) {

            const file_path = __dirname + '/data/' + file;
            const daily_regex = new RegExp("(d.+\.csv)");
            const metadata_regex = new RegExp("(d.+\.dat)");

            if (daily_regex.test(file)) {//if the file exists
                let data = fs.readFileSync(file_path, 'utf8');
                daily_map.set(file, data);
            }

            if (metadata_regex.test(file)) {//if the file exists
                let info = {
                    station: "",
                    name: "",
                    latitude: "",
                    longitude: "",
                };
                metadata.set(file, info);
            }

        });
        response.sendStatus(200);
    } catch (err) {
        console.error(err);
        res.status(500).end();
    }

})

/**
 * http://uhslc.soest.hawaii.edu/woce/README
 * Each file is given a name  "d###.dat"  where a "d"  denotes daily sea level
    data and "###" denotes the station number.  Each file begins with a header
    record.  The header includes the station number (columns 1-3), the station
    name (columns 4-11), latitude (columns 22-29), and longitude(columns 37-45).
    This header record is followed by the data records each of which contains 
    a maximum of 11 daily values.  These records contain the station-id 
    (columns 1-11), year (columns 12-15), month (columns 16-17) and 
    record count, either 1 for days 1 - 11, or 2 for days 12 - 22, or 
    3 for days 23 to the last day of a month (column 18), and 11 filtered 
    daily values (1st value columns 20-24, 2nd value columns 25-29, ....., 
    and 11th value columns 70-74).  
    Daily values are centered on the 12th hour GMT of the day.  
 */

//EXAMPLE USAGE:
//localhost:3000/daily/d013a.csv
app.get('/daily/:file', async (req, res) => {
    console.log(req.url, new Date().toLocaleString());
    const file = req.params.file;
    try {
        res.send(daily_map.get(file));
    } catch (err) {
        //console.error(err);
        res.status(500).end();
    }
});

app.get('/metadata', (req, res) => {
    console.log(req.url, new Date().toLocaleString());
    try {
        //const result = JSON.stringify([...metadata]);
        const result = Object.fromEntries(metadata);
        res.send(result);
    } catch (err) {
        console.error(err);
        res.status(500).end();
    }

})