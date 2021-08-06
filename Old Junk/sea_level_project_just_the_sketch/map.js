var map;

var locations = [
  {
    Number: "001",
    Location: "Pohnpei",
    Country: "Micronesia (Federated States of)",
    Latitude: 6.978,
    Longitude: 158.197,
    Start: "12/17/2001",
    End: "12/31/2018"
  },
  {
    Number: "002",
    Location: "Tarawa, Betio",
    Country: "Kiribati",
    Latitude: 1.363,
    Longitude: 172.93,
    Start: "12/4/1992",
    End: "12/31/2018"
  },
  {
    Number: "003",
    Location: "Baltra",
    Country: "Ecuador",
    Latitude: -0.437,
    Longitude: -90.285,
    Start: "3/26/1985",
    End: "12/31/2018"
  },
  {
    Number: "004",
    Location: "Nauru",
    Country: "Nauru",
    Latitude: -0.532,
    Longitude: 166.91,
    Start: "7/8/1993",
    End: "12/31/2018"
  },
  {
    Number: "005",
    Location: "Majuro",
    Country: "Marshall Islands (the)",
    Latitude: 7.108,
    Longitude: 171.372,
    Start: "5/14/1993",
    End: "12/31/2018"
  },
  {
    Number: "007",
    Location: "Malakal",
    Country: "Palau",
    Latitude: 7.33,
    Longitude: 134.463,
    Start: "5/19/1969",
    End: "12/31/2018"
  },
  {
    Number: "008",
    Location: "Yap",
    Country: "Micronesia (Federated States of)",
    Latitude: 9.508,
    Longitude: 138.128,
    Start: "5/11/1969",
    End: "12/31/2018"
  },
  {
    Number: "009",
    Location: "Honiara",
    Country: "Solomon Islands",
    Latitude: -9.422,
    Longitude: 159.955,
    Start: "7/28/1994",
    End: "12/31/2018"
  },
  {
    Number: "011",
    Location: "Christmas",
    Country: "Kiribati",
    Latitude: 1.982,
    Longitude: -157.472,
    Start: "2/7/1974",
    End: "12/31/2018"
  },
  {
    Number: "013",
    Location: "Kanton",
    Country: "Kiribati",
    Latitude: -2.81,
    Longitude: -171.718,
    Start: "5/2/1972",
    End: "12/31/2018"
  },
  {
    Number: "014",
    Location: "French Frigate",
    Country: "United States of America (the)",
    Latitude: 23.868,
    Longitude: -166.288,
    Start: "5/27/2007",
    End: "10/3/2018"
  },
  {
    Number: "015",
    Location: "Papeete",
    Country: "France",
    Latitude: -17.525,
    Longitude: -149.567,
    Start: "6/9/1975",
    End: "10/29/2018"
  },
  {
    Number: "016",
    Location: "Rikitea",
    Country: "France",
    Latitude: -23.125,
    Longitude: -134.953,
    Start: "10/6/1969",
    End: "11/30/2018"
  },
  {
    Number: "017",
    Location: "Hiva Oa",
    Country: "France",
    Latitude: -9.805,
    Longitude: -139.035,
    Start: "9/5/2010",
    End: "11/30/2018"
  },
  {
    Number: "018",
    Location: "Suva",
    Country: "Fiji",
    Latitude: -18.132,
    Longitude: 178.427,
    Start: "1/27/1998",
    End: "12/31/2018"
  },
  {
    Number: "019",
    Location: "Noumea",
    Country: "France",
    Latitude: -22.242,
    Longitude: 166.417,
    Start: "2/25/1967",
    End: "11/30/2018"
  },
  {
    Number: "021",
    Location: "Juan Fernandez",
    Country: "Chile",
    Latitude: -33.622,
    Longitude: -78.833,
    Start: "9/5/1985",
    End: "12/31/2018"
  },
  {
    Number: "022",
    Location: "Easter",
    Country: "Chile",
    Latitude: -27.15,
    Longitude: -109.448,
    Start: "4/3/1970",
    End: "12/31/2018"
  },
  {
    Number: "023",
    Location: "Rarotonga",
    Country: "Cook Islands (the)",
    Latitude: -21.2,
    Longitude: -159.787,
    Start: "2/20/1993",
    End: "12/31/2018"
  },
  {
    Number: "024",
    Location: "Penrhyn",
    Country: "Cook Islands (the)",
    Latitude: -8.977,
    Longitude: -158.053,
    Start: "4/17/1977",
    End: "12/31/2018"
  },
  {
    Number: "025",
    Location: "Funafuti",
    Country: "Tuvalu",
    Latitude: -8.503,
    Longitude: 179.21,
    Start: "3/24/1993",
    End: "12/31/2018"
  },
  {
    Number: "028",
    Location: "Saipan",
    Country: "United States of America (the)",
    Latitude: 15.227,
    Longitude: 145.742,
    Start: "9/19/1978",
    End: "11/30/2018"
  },
  {
    Number: "029",
    Location: "Kapingamarangi",
    Country: "Micronesia (Federated States of)",
    Latitude: 1.098,
    Longitude: 154.777,
    Start: "9/9/1978",
    End: "12/5/2018"
  },
  {
    Number: "030",
    Location: "Santa Cruz",
    Country: "Ecuador",
    Latitude: -0.755,
    Longitude: -90.313,
    Start: "10/20/1978",
    End: "12/31/2018"
  },
  {
    Number: "031",
    Location: "Nuku Hiva",
    Country: "France",
    Latitude: -8.93,
    Longitude: -140.082,
    Start: "4/1/1982",
    End: "11/30/2018"
  },
  {
    Number: "033",
    Location: "Bitung",
    Country: "Indonesia",
    Latitude: 1.44,
    Longitude: 125.193,
    Start: "9/3/2008",
    End: "11/30/2018"
  },
  {
    Number: "034",
    Location: "Cabo San Lucas",
    Country: "Mexico",
    Latitude: 22.88,
    Longitude: -109.908,
    Start: "6/13/1973",
    End: "9/13/2014"
  },
  {
    Number: "035",
    Location: "San Felix",
    Country: "Chile",
    Latitude: -26.292,
    Longitude: -80.108,
    Start: "11/7/1987",
    End: "12/31/2018"
  },
  {
    Number: "038",
    Location: "Nuku'alofa",
    Country: "Tonga",
    Latitude: -21.133,
    Longitude: -175.167,
    Start: "6/21/1990",
    End: "12/31/2018"
  },
  {
    Number: "039",
    Location: "Kodiak Isl., Alaska",
    Country: "United States of America (the)",
    Latitude: 57.732,
    Longitude: -152.512,
    Start: "1/2/1975",
    End: "11/30/2018"
  },
  {
    Number: "040",
    Location: "Adak, Alaska",
    Country: "United States of America (the)",
    Latitude: 51.858,
    Longitude: -176.635,
    Start: "3/17/1950",
    End: "11/30/2018"
  },
  {
    Number: "041",
    Location: "Dutch Harbor, AK",
    Country: "United States of America (the)",
    Latitude: 53.88,
    Longitude: -166.537,
    Start: "1/2/1982",
    End: "11/30/2018"
  },
  {
    Number: "043",
    Location: "Palmyra Island",
    Country: "United States of America (the)",
    Latitude: 5.888,
    Longitude: -162.083,
    Start: "11/30/2012",
    End: "11/30/2018"
  },
  {
    Number: "046",
    Location: "Port Vila",
    Country: "Vanuatu",
    Latitude: -17.767,
    Longitude: 168.3,
    Start: "1/15/1993",
    End: "12/31/2018"
  },
  {
    Number: "047",
    Location: "Chichijima",
    Country: "Japan",
    Latitude: 27.1,
    Longitude: 142.183,
    Start: "4/1/1975",
    End: "11/29/2018"
  },
  {
    Number: "049",
    Location: "Minamitorishima",
    Country: "Japan",
    Latitude: 24.3,
    Longitude: 153.983,
    Start: "8/1/1997",
    End: "11/30/2018"
  },
  {
    Number: "050",
    Location: "Midway",
    Country: "United States of America (the)",
    Latitude: 28.217,
    Longitude: -177.367,
    Start: "2/9/1947",
    End: "11/30/2018"
  },
  {
    Number: "051",
    Location: "Wake",
    Country: "United States of America (the)",
    Latitude: 19.283,
    Longitude: 166.617,
    Start: "5/31/1950",
    End: "11/30/2018"
  },
  {
    Number: "052",
    Location: "Johnston",
    Country: "United States of America (the)",
    Latitude: 16.738,
    Longitude: -169.53,
    Start: "5/2/1947",
    End: "11/30/2018"
  },
  {
    Number: "053",
    Location: "Guam",
    Country: "United States of America (the)",
    Latitude: 13.433,
    Longitude: 144.65,
    Start: "3/11/1948",
    End: "12/31/2018"
  },
  {
    Number: "055",
    Location: "Kwajalein",
    Country: "Marshall Islands (the)",
    Latitude: 8.733,
    Longitude: 167.733,
    Start: "6/8/1946",
    End: "12/31/2018"
  },
  {
    Number: "056",
    Location: "Pago Pago",
    Country: "American Samoa",
    Latitude: -14.283,
    Longitude: -170.683,
    Start: "9/9/1948",
    End: "12/31/2018"
  },
  {
    Number: "057",
    Location: "Honolulu, Hawaii",
    Country: "United States of America (the)",
    Latitude: 21.307,
    Longitude: -157.867,
    Start: "1/2/1905",
    End: "12/31/2018"
  },
  {
    Number: "058",
    Location: "Nawiliwili",
    Country: "United States of America (the)",
    Latitude: 21.967,
    Longitude: -159.35,
    Start: "12/2/1954",
    End: "12/31/2018"
  },
  {
    Number: "059",
    Location: "Kahului",
    Country: "United States of America (the)",
    Latitude: 20.9,
    Longitude: -156.467,
    Start: "10/20/1950",
    End: "12/31/2018"
  },
  {
    Number: "060",
    Location: "Hilo, Hawaii",
    Country: "United States of America (the)",
    Latitude: 19.733,
    Longitude: -155.067,
    Start: "1/23/1927",
    End: "12/31/2018"
  },
  {
    Number: "061",
    Location: "Mokuoloe",
    Country: "United States of America (the)",
    Latitude: 21.433,
    Longitude: -157.8,
    Start: "5/2/1957",
    End: "12/31/2018"
  },
  {
    Number: "071",
    Location: "Wellington",
    Country: "New Zealand",
    Latitude: -41.283,
    Longitude: 174.783,
    Start: "11/18/1944",
    End: "12/30/2018"
  },
  {
    Number: "072",
    Location: "Bluff",
    Country: "New Zealand",
    Latitude: -46.6,
    Longitude: 168.35,
    Start: "10/1/1984",
    End: "12/30/2018"
  },
  {
    Number: "079",
    Location: "Chatham",
    Country: "New Zealand",
    Latitude: -43.947,
    Longitude: -176.562,
    Start: "1/1/2001",
    End: "2/14/2016"
  },
  {
    Number: "080",
    Location: "Antofagasta",
    Country: "Chile",
    Latitude: -23.65,
    Longitude: -70.4,
    Start: "12/7/1945",
    End: "12/31/2018"
  },
  {
    Number: "081",
    Location: "Valparaiso",
    Country: "Chile",
    Latitude: -33.033,
    Longitude: -71.633,
    Start: "1/3/1944",
    End: "11/30/2018"
  },
  {
    Number: "082",
    Location: "Acajutla",
    Country: "El Salvador",
    Latitude: 13.573,
    Longitude: -89.838,
    Start: "8/20/2010",
    End: "11/30/2018"
  },
  {
    Number: "083",
    Location: "Arica",
    Country: "Chile",
    Latitude: -18.467,
    Longitude: -70.333,
    Start: "4/1/2006",
    End: "12/31/2018"
  },
  {
    Number: "084",
    Location: "Lobos de Afuera",
    Country: "Peru",
    Latitude: -6.933,
    Longitude: -80.717,
    Start: "7/20/2005",
    End: "4/10/2007"
  },
  {
    Number: "087",
    Location: "Quepos",
    Country: "Costa Rica",
    Latitude: 9.425,
    Longitude: -84.172,
    Start: "10/9/2009",
    End: "11/30/2018"
  },
  {
    Number: "088",
    Location: "Caldera",
    Country: "Chile",
    Latitude: -27.067,
    Longitude: -70.833,
    Start: "1/2/1980",
    End: "11/30/2018"
  },
  {
    Number: "090",
    Location: "Socorro",
    Country: "Mexico",
    Latitude: 18.733,
    Longitude: -111.017,
    Start: "5/6/1992",
    End: "9/21/1997"
  },
  {
    Number: "091",
    Location: "La Libertad",
    Country: "Ecuador",
    Latitude: -2.2,
    Longitude: -80.917,
    Start: "9/2/1949",
    End: "11/30/2018"
  },
  {
    Number: "092",
    Location: "Talara",
    Country: "Peru",
    Latitude: -4.582,
    Longitude: -81.282,
    Start: "5/31/2015",
    End: "11/30/2018"
  },
  {
    Number: "093",
    Location: "Callao",
    Country: "Peru",
    Latitude: -12.05,
    Longitude: -77.15,
    Start: "1/2/1970",
    End: "11/30/2018"
  },
  {
    Number: "094",
    Location: "Matarani",
    Country: "Peru",
    Latitude: -17.002,
    Longitude: -72.108,
    Start: "1/2/1989",
    End: "12/31/2018"
  },
  {
    Number: 101,
    Location: "Mombasa",
    Country: "Kenya",
    Latitude: -4.07,
    Longitude: 39.657,
    Start: "6/18/1986",
    End: "11/30/2018"
  },
  {
    Number: 103,
    Location: "Port Louis",
    Country: "Mauritius",
    Latitude: -20.155,
    Longitude: 57.495,
    Start: "8/1/1986",
    End: "11/30/2018"
  },
  {
    Number: 104,
    Location: "Diego Garcia",
    Country: "United Kingdom of Great Britain and Northern Ireland (the)",
    Latitude: -7.29,
    Longitude: 72.393,
    Start: "8/27/2003",
    End: "11/30/2018"
  },
  {
    Number: 105,
    Location: "Rodrigues",
    Country: "Mauritius",
    Latitude: -19.668,
    Longitude: 63.418,
    Start: "11/9/1986",
    End: "11/30/2018"
  },
  {
    Number: 107,
    Location: "Padang",
    Country: "Indonesia",
    Latitude: -0.997,
    Longitude: 100.375,
    Start: "12/8/2005",
    End: "11/30/2018"
  },
  {
    Number: 108,
    Location: "Male, Hulule",
    Country: "Maldives",
    Latitude: 4.19,
    Longitude: 73.527,
    Start: "8/27/1989",
    End: "11/30/2018"
  },
  {
    Number: 109,
    Location: "Gan",
    Country: "Maldives",
    Latitude: -0.687,
    Longitude: 73.152,
    Start: "3/5/1987",
    End: "11/30/2018"
  },
  {
    Number: 110,
    Location: "Muscat",
    Country: "Oman",
    Latitude: 23.628,
    Longitude: 58.565,
    Start: "12/11/2009",
    End: "11/14/2018"
  },
  {
    Number: 113,
    Location: "Masirah",
    Country: "Oman",
    Latitude: 20.687,
    Longitude: 58.872,
    Start: "12/8/1996",
    End: "11/28/2018"
  },
  {
    Number: 114,
    Location: "Salalah",
    Country: "Oman",
    Latitude: 16.935,
    Longitude: 54.007,
    Start: "10/2/1989",
    End: "3/24/2018"
  },
  {
    Number: 115,
    Location: "Colombo",
    Country: "Sri Lanka",
    Latitude: 6.942,
    Longitude: 79.85,
    Start: "5/9/2006",
    End: "11/30/2018"
  },
  {
    Number: 117,
    Location: "Hanimaadhoo",
    Country: "Maldives",
    Latitude: 6.767,
    Longitude: 73.173,
    Start: "10/1/2002",
    End: "11/30/2018"
  },
  {
    Number: 118,
    Location: "Ko Miang",
    Country: "Thailand",
    Latitude: 8.567,
    Longitude: 97.633,
    Start: "11/20/2001",
    End: "10/31/2002"
  },
  {
    Number: 119,
    Location: "Djibouti",
    Country: "Djibouti",
    Latitude: 11.608,
    Longitude: 43.14,
    Start: "2/21/2007",
    End: "5/10/2016"
  },
  {
    Number: 121,
    Location: "Pt. La Rue",
    Country: "Seychelles",
    Latitude: -4.672,
    Longitude: 55.528,
    Start: "1/11/1993",
    End: "11/30/2018"
  },
  {
    Number: 122,
    Location: "Sibolga",
    Country: "Indonesia",
    Latitude: 1.75,
    Longitude: 98.767,
    Start: "4/26/2005",
    End: "11/30/2018"
  },
  {
    Number: 123,
    Location: "Sabang",
    Country: "Indonesia",
    Latitude: 5.888,
    Longitude: 95.317,
    Start: "12/19/2005",
    End: "11/30/2018"
  },
  {
    Number: 124,
    Location: "Chittagong",
    Country: "Bangladesh",
    Latitude: 22.247,
    Longitude: 91.825,
    Start: "7/1/2007",
    End: "11/30/2018"
  },
  {
    Number: 125,
    Location: "Prigi",
    Country: "Indonesia",
    Latitude: -8.28,
    Longitude: 111.73,
    Start: "2/26/2007",
    End: "11/30/2018"
  },
  {
    Number: 126,
    Location: "Jask",
    Country: "Iran (Islamic Republic of)",
    Latitude: 25.63,
    Longitude: 57.77,
    Start: "10/28/2009",
    End: "4/4/2016"
  },
  {
    Number: 127,
    Location: "Syowa, Antarctica",
    Country: "Antarctica",
    Latitude: -69,
    Longitude: 39.6,
    Start: "2/1/1987",
    End: "12/30/2013"
  },
  {
    Number: 128,
    Location: "Thevenard",
    Country: "Australia",
    Latitude: -32.15,
    Longitude: 133.64,
    Start: "3/20/1992",
    End: "12/31/2018"
  },
  {
    Number: 129,
    Location: "Portland, S.Aus.",
    Country: "Australia",
    Latitude: -38.333,
    Longitude: 141.6,
    Start: "1/1/1991",
    End: "12/31/2018"
  },
  {
    Number: 130,
    Location: "Casey",
    Country: "Australia",
    Latitude: -66.283,
    Longitude: 110.533,
    Start: "1/9/1996",
    End: "11/15/2008"
  },
  {
    Number: 133,
    Location: "Ambon",
    Country: "Indonesia",
    Latitude: -3.683,
    Longitude: 128.183,
    Start: "10/2/2008",
    End: "11/30/2018"
  },
  {
    Number: 142,
    Location: "Langkawi",
    Country: "Malaysia",
    Latitude: 6.432,
    Longitude: 99.765,
    Start: "11/30/1985",
    End: "11/30/2018"
  },
  {
    Number: 147,
    Location: "Karachi",
    Country: "Pakistan",
    Latitude: 24.812,
    Longitude: 66.975,
    Start: "2/1/2007",
    End: "11/30/2018"
  },
  {
    Number: 148,
    Location: "Ko Taphao Noi",
    Country: "Thailand",
    Latitude: 7.832,
    Longitude: 98.425,
    Start: "1/1/1985",
    End: "10/30/2018"
  },
  {
    Number: 149,
    Location: "Lamu",
    Country: "Kenya",
    Latitude: -2.272,
    Longitude: 40.903,
    Start: "6/30/1995",
    End: "11/30/2018"
  },
  {
    Number: 151,
    Location: "Zanzibar",
    Country: "Tanzania, United Republic of",
    Latitude: -6.155,
    Longitude: 39.19,
    Start: "3/2/1984",
    End: "11/30/2018"
  },
  {
    Number: 153,
    Location: "Minicoy",
    Country: "India",
    Latitude: 8.117,
    Longitude: 73.05,
    Start: "10/1/2011",
    End: "8/18/2015"
  },
  {
    Number: 155,
    Location: "Dzaoudzi",
    Country: "France",
    Latitude: -12.782,
    Longitude: 45.258,
    Start: "11/15/2008",
    End: "11/30/2018"
  },
  {
    Number: 157,
    Location: "Vishakhapatnam",
    Country: "India",
    Latitude: 17.683,
    Longitude: 83.283,
    Start: "10/1/2011",
    End: "11/30/2018"
  },
  {
    Number: 162,
    Location: "Cilicap",
    Country: "Indonesia",
    Latitude: -7.752,
    Longitude: 109.017,
    Start: "2/21/2007",
    End: "11/30/2018"
  },
  {
    Number: 163,
    Location: "Benoa",
    Country: "Indonesia",
    Latitude: -8.747,
    Longitude: 115.212,
    Start: "1/25/2006",
    End: "11/30/2018"
  },
  {
    Number: 164,
    Location: "Reunion",
    Country: "France",
    Latitude: -20.935,
    Longitude: 55.285,
    Start: "1/1/1982",
    End: "11/30/2018"
  },
  {
    Number: 166,
    Location: "Broome",
    Country: "Australia",
    Latitude: -18,
    Longitude: 122.217,
    Start: "7/13/1986",
    End: "12/31/2018"
  },
  {
    Number: 167,
    Location: "Carnarvon",
    Country: "Australia",
    Latitude: -24.898,
    Longitude: 113.652,
    Start: "4/8/1984",
    End: "12/31/2012"
  },
  {
    Number: 168,
    Location: "Darwin",
    Country: "Australia",
    Latitude: -12.467,
    Longitude: 130.85,
    Start: "1/1/1984",
    End: "12/31/2018"
  },
  {
    Number: 169,
    Location: "Port Hedland",
    Country: "Australia",
    Latitude: -20.318,
    Longitude: 118.575,
    Start: "1/1/1984",
    End: "6/2/2012"
  },
  {
    Number: 170,
    Location: "Christmas",
    Country: "Australia",
    Latitude: -10.417,
    Longitude: 105.667,
    Start: "1/1/2008",
    End: "12/31/2018"
  },
  {
    Number: 171,
    Location: "Cocos",
    Country: "Australia",
    Latitude: -12.117,
    Longitude: 96.883,
    Start: "12/12/1985",
    End: "12/31/2018"
  },
  {
    Number: 172,
    Location: "Aden",
    Country: "Yemen",
    Latitude: 12.788,
    Longitude: 44.975,
    Start: "10/10/2007",
    End: "10/15/2018"
  },
  {
    Number: 173,
    Location: "Davis",
    Country: "Australia",
    Latitude: -68.45,
    Longitude: 77.967,
    Start: "4/23/1993",
    End: "1/27/2010"
  },
  {
    Number: 174,
    Location: "Cochin",
    Country: "India",
    Latitude: 9.967,
    Longitude: 76.267,
    Start: "10/1/2011",
    End: "10/12/2018"
  },
  {
    Number: 175,
    Location: "Fremantle",
    Country: "Australia",
    Latitude: -32.05,
    Longitude: 115.717,
    Start: "1/1/1984",
    End: "12/30/2018"
  },
  {
    Number: 176,
    Location: "Esperance",
    Country: "Australia",
    Latitude: -33.867,
    Longitude: 121.9,
    Start: "1/1/1985",
    End: "11/30/2018"
  },
  {
    Number: 177,
    Location: "Mawson",
    Country: "Australia",
    Latitude: -67.6,
    Longitude: 62.867,
    Start: "1/6/1992",
    End: "12/20/2009"
  },
  {
    Number: 178,
    Location: "Crozet",
    Country: "France",
    Latitude: -46.425,
    Longitude: 51.87,
    Start: "11/19/1995",
    End: "7/28/2001"
  },
  {
    Number: 179,
    Location: "Saint Paul",
    Country: "France",
    Latitude: -38.712,
    Longitude: 77.538,
    Start: "10/26/1994",
    End: "12/23/2006"
  },
  {
    Number: 180,
    Location: "Kerguelen",
    Country: "France",
    Latitude: -49.345,
    Longitude: 70.22,
    Start: "4/6/1993",
    End: "5/31/2013"
  },
  {
    Number: 181,
    Location: "Durban",
    Country: "South Africa",
    Latitude: -29.867,
    Longitude: 31.05,
    Start: "10/1/1970",
    End: "10/31/2018"
  },
  {
    Number: 184,
    Location: "Port Elizabeth",
    Country: "South Africa",
    Latitude: -33.96,
    Longitude: 25.63,
    Start: "3/2/1973",
    End: "10/31/2018"
  },
  {
    Number: 185,
    Location: "Mossel Bay",
    Country: "South Africa",
    Latitude: -34.183,
    Longitude: 22.133,
    Start: "1/1/1964",
    End: "10/31/2018"
  },
  {
    Number: 186,
    Location: "Knysna",
    Country: "South Africa",
    Latitude: -32.033,
    Longitude: 23.033,
    Start: "1/1/1966",
    End: "10/31/2018"
  },
  {
    Number: 187,
    Location: "East London",
    Country: "South Africa",
    Latitude: -33.017,
    Longitude: 27.917,
    Start: "5/22/1965",
    End: "10/31/2018"
  },
  {
    Number: 188,
    Location: "Richard's Bay",
    Country: "South Africa",
    Latitude: -28.8,
    Longitude: 32.083,
    Start: "6/9/1977",
    End: "10/31/2018"
  },
  {
    Number: 189,
    Location: "Dumont d'Urville",
    Country: "Antarctica",
    Latitude: -66.662,
    Longitude: 140.01,
    Start: "1/17/2008",
    End: "8/18/2010"
  },
  {
    Number: 192,
    Location: "Pemba",
    Country: "Mozambique",
    Latitude: -12.968,
    Longitude: 40.487,
    Start: "4/20/2007",
    End: "3/1/2013"
  },
  {
    Number: 207,
    Location: "Ceuta",
    Country: "Spain",
    Latitude: 35.9,
    Longitude: -5.317,
    Start: "3/1/1944",
    End: "11/30/2018"
  },
  {
    Number: 209,
    Location: "Cascais",
    Country: "Portugal",
    Latitude: 38.692,
    Longitude: -9.417,
    Start: "11/6/2008",
    End: "4/29/2018"
  },
  {
    Number: 210,
    Location: "Flores, Santa Cruz",
    Country: "Portugal",
    Latitude: 39.453,
    Longitude: -31.12,
    Start: "7/9/1976",
    End: "11/23/2009"
  },
  {
    Number: 211,
    Location: "Ponta Delgada",
    Country: "Portugal",
    Latitude: 37.735,
    Longitude: -25.672,
    Start: "5/19/1978",
    End: "11/30/2018"
  },
  {
    Number: 217,
    Location: "Las Palmas",
    Country: "Spain",
    Latitude: 28.133,
    Longitude: -15.417,
    Start: "5/7/1991",
    End: "11/28/2018"
  },
  {
    Number: 218,
    Location: "Funchal",
    Country: "Portugal",
    Latitude: 32.64,
    Longitude: -16.907,
    Start: "10/6/1976",
    End: "12/31/2012"
  },
  {
    Number: 220,
    Location: "Walvis Bay",
    Country: "Namibia",
    Latitude: -22.95,
    Longitude: 14.5,
    Start: "1/1/1959",
    End: "2/29/2016"
  },
  {
    Number: 221,
    Location: "Simon's Town",
    Country: "South Africa",
    Latitude: -34.183,
    Longitude: 18.433,
    Start: "4/24/1959",
    End: "10/31/2018"
  },
  {
    Number: 223,
    Location: "Dakar",
    Country: "Senegal",
    Latitude: 14.677,
    Longitude: -17.42,
    Start: "1/1/1996",
    End: "11/30/2018"
  },
  {
    Number: 225,
    Location: "Sao Tome",
    Country: "Sao Tome and Principe",
    Latitude: 0.017,
    Longitude: 6.513,
    Start: "8/28/2004",
    End: "7/12/2010"
  },
  {
    Number: 227,
    Location: "Cayenne",
    Country: "France",
    Latitude: 4.85,
    Longitude: -52.283,
    Start: "11/4/2006",
    End: "10/31/2011"
  },
  {
    Number: 231,
    Location: "Takoradi",
    Country: "Ghana",
    Latitude: 4.885,
    Longitude: -1.745,
    Start: "1/5/2007",
    End: "9/7/2012"
  },
  {
    Number: 233,
    Location: "Lagos",
    Country: "Nigeria",
    Latitude: 6.423,
    Longitude: 3.412,
    Start: "11/5/2008",
    End: "2/20/2009"
  },
  {
    Number: 234,
    Location: "Pointe Noire",
    Country: "Congo (the)",
    Latitude: -4.783,
    Longitude: 11.833,
    Start: "9/11/2008",
    End: "6/29/2014"
  },
  {
    Number: 235,
    Location: "Palmeira",
    Country: "Cabo Verde",
    Latitude: 16.755,
    Longitude: -22.983,
    Start: "3/13/2000",
    End: "11/30/2018"
  },
  {
    Number: 242,
    Location: "Key West, FL",
    Country: "United States of America (the)",
    Latitude: 24.553,
    Longitude: -81.808,
    Start: "1/20/1913",
    End: "11/30/2018"
  },
  {
    Number: 245,
    Location: "San Juan, PR",
    Country: "United States of America (the)",
    Latitude: 18.46,
    Longitude: -66.117,
    Start: "11/30/1977",
    End: "11/30/2018"
  },
  {
    Number: 253,
    Location: "Newport, RI",
    Country: "United States of America (the)",
    Latitude: 41.505,
    Longitude: -71.327,
    Start: "9/11/1930",
    End: "11/30/2018"
  },
  {
    Number: 257,
    Location: "Settlement Point",
    Country: "Bahamas (the)",
    Latitude: 26.69,
    Longitude: -78.983,
    Start: "6/5/2002",
    End: "11/30/2018"
  },
  {
    Number: 259,
    Location: "Bermuda",
    Country: "United Kingdom of Great Britain and Northern Ireland (the)",
    Latitude: 32.373,
    Longitude: -64.703,
    Start: "1/2/1985",
    End: "11/30/2018"
  },
  {
    Number: 260,
    Location: "Duck Pier, NC",
    Country: "United States of America (the)",
    Latitude: 36.183,
    Longitude: -75.74,
    Start: "6/2/1978",
    End: "11/30/2018"
  },
  {
    Number: 261,
    Location: "Charleston, SC",
    Country: "United States of America (the)",
    Latitude: 32.782,
    Longitude: -79.925,
    Start: "10/2/1921",
    End: "11/30/2018"
  },
  {
    Number: 264,
    Location: "Atlantic City",
    Country: "United States of America (the)",
    Latitude: 39.355,
    Longitude: -74.418,
    Start: "8/20/1911",
    End: "11/30/2018"
  },
  {
    Number: 266,
    Location: "Cristobal",
    Country: "Panama",
    Latitude: 9.355,
    Longitude: -79.915,
    Start: "4/4/1907",
    End: "12/31/2014"
  },
  {
    Number: 268,
    Location: "Limon",
    Country: "Costa Rica",
    Latitude: 9.988,
    Longitude: -83.02,
    Start: "10/16/2009",
    End: "11/30/2018"
  },
  {
    Number: 271,
    Location: "Fort de France",
    Country: "France",
    Latitude: 14.583,
    Longitude: -61.05,
    Start: "10/31/1976",
    End: "11/30/2018"
  },
  {
    Number: 273,
    Location: "Port-aux-basques",
    Country: "Canada",
    Latitude: 47.567,
    Longitude: -59.133,
    Start: "3/2/1997",
    End: "10/25/2018"
  },
  {
    Number: 274,
    Location: "Churchill",
    Country: "Canada",
    Latitude: 58.783,
    Longitude: -94.2,
    Start: "11/2/1961",
    End: "10/31/2018"
  },
  {
    Number: 275,
    Location: "Halifax",
    Country: "Canada",
    Latitude: 44.667,
    Longitude: -63.583,
    Start: "1895-10-16",
    End: "10/27/2018"
  },
  {
    Number: 276,
    Location: "St. John's",
    Country: "Canada",
    Latitude: 47.567,
    Longitude: -52.7,
    Start: "9/3/1989",
    End: "10/25/2018"
  },
  {
    Number: 280,
    Location: "Ilha Fiscal, RJ",
    Country: "Brazil",
    Latitude: -22.897,
    Longitude: -43.165,
    Start: "2/3/1963",
    End: "4/30/2013"
  },
  {
    Number: 281,
    Location: "Cananeia",
    Country: "Brazil",
    Latitude: -25.017,
    Longitude: -47.925,
    Start: "2/27/1954",
    End: "4/9/2007"
  },
  {
    Number: 283,
    Location: "Fortaleza",
    Country: "Brazil",
    Latitude: -3.715,
    Longitude: -38.477,
    Start: "4/15/2008",
    End: "11/30/2018"
  },
  {
    Number: 286,
    Location: "Puerto Deseado",
    Country: "Argentina",
    Latitude: -47.753,
    Longitude: -65.915,
    Start: "3/18/2010",
    End: "11/30/2018"
  },
  {
    Number: 288,
    Location: "Reykjavik",
    Country: "Iceland",
    Latitude: 64.15,
    Longitude: -21.933,
    Start: "2/6/2007",
    End: "11/30/2018"
  },
  {
    Number: 289,
    Location: "Gibraltar",
    Country: "United Kingdom of Great Britain and Northern Ireland (the)",
    Latitude: 36.133,
    Longitude: -5.35,
    Start: "7/1/1961",
    End: "11/30/2018"
  },
  {
    Number: 290,
    Location: "Port Stanley",
    Country: "United Kingdom of Great Britain and Northern Ireland (the)",
    Latitude: -51.75,
    Longitude: -57.933,
    Start: "10/29/1992",
    End: "12/14/2016"
  },
  {
    Number: 291,
    Location: "Ascension",
    Country: "United Kingdom of Great Britain and Northern Ireland (the)",
    Latitude: -7.917,
    Longitude: -14.417,
    Start: "5/24/1993",
    End: "5/19/2017"
  },
  {
    Number: 292,
    Location: "St. Helena",
    Country: "Saint Helena, Ascension and Tristan da Cunha",
    Latitude: -15.917,
    Longitude: -5.717,
    Start: "1/25/2011",
    End: "2/25/2013"
  },
  {
    Number: 293,
    Location: "Lerwick",
    Country: "United Kingdom of Great Britain and Northern Ireland (the)",
    Latitude: 60.155,
    Longitude: -1.14,
    Start: "1/1/1959",
    End: "11/30/2013"
  },
  {
    Number: 294,
    Location: "Newlyn, Cornwall",
    Country: "United Kingdom of Great Britain and Northern Ireland (the)",
    Latitude: 50.102,
    Longitude: -5.542,
    Start: "4/23/1915",
    End: "11/30/2013"
  },
  {
    Number: 295,
    Location: "Stornoway",
    Country: "United Kingdom of Great Britain and Northern Ireland (the)",
    Latitude: 58.208,
    Longitude: -6.388,
    Start: "1/1/1976",
    End: "11/30/2013"
  },
  {
    Number: 299,
    Location: "Qaqortoq",
    Country: "Denmark",
    Latitude: 60.717,
    Longitude: -46.033,
    Start: "6/1/2008",
    End: "12/28/2018"
  },
  {
    Number: 302,
    Location: "Balboa",
    Country: "Panama",
    Latitude: 8.965,
    Longitude: -79.573,
    Start: "6/20/1907",
    End: "12/31/2014"
  },
  {
    Number: 316,
    Location: "Acapulco, Gro.",
    Country: "Mexico",
    Latitude: 16.842,
    Longitude: -99.852,
    Start: "5/24/2007",
    End: "4/24/2011"
  },
  {
    Number: 317,
    Location: "Ensenada",
    Country: "Mexico",
    Latitude: 31.85,
    Longitude: -116.633,
    Start: "10/26/2005",
    End: "9/30/2009"
  },
  {
    Number: 328,
    Location: "Ko Lak",
    Country: "Thailand",
    Latitude: 11.795,
    Longitude: 99.817,
    Start: "1/1/1985",
    End: "10/30/2018"
  },
  {
    Number: 329,
    Location: "Hong Kong",
    Country: "Hong Kong",
    Latitude: 22.3,
    Longitude: 114.217,
    Start: "1/1/1986",
    End: "7/30/2018"
  },
  {
    Number: 331,
    Location: "Brisbane",
    Country: "Australia",
    Latitude: -27.367,
    Longitude: 153.167,
    Start: "1/1/1984",
    End: "12/31/2018"
  },
  {
    Number: 332,
    Location: "Bundaberg",
    Country: "Australia",
    Latitude: -24.767,
    Longitude: 152.38,
    Start: "1/1/1984",
    End: "12/30/2018"
  },
  {
    Number: 333,
    Location: "Fort Denison",
    Country: "Australia",
    Latitude: -33.85,
    Longitude: 151.233,
    Start: "1/1/1965",
    End: "12/31/2018"
  },
  {
    Number: 334,
    Location: "Townsville",
    Country: "Australia",
    Latitude: -19.25,
    Longitude: 146.833,
    Start: "1/1/1984",
    End: "12/31/2018"
  },
  {
    Number: 335,
    Location: "Spring Bay",
    Country: "Australia",
    Latitude: -42.55,
    Longitude: 147.933,
    Start: "4/13/1985",
    End: "12/31/2018"
  },
  {
    Number: 336,
    Location: "Booby Island",
    Country: "Australia",
    Latitude: -10.6,
    Longitude: 141.917,
    Start: "1/1/1988",
    End: "12/31/2018"
  },
  {
    Number: 340,
    Location: "Kaohsiung",
    Country: "China",
    Latitude: 22.615,
    Longitude: 120.288,
    Start: "1/2/1980",
    End: "4/29/2016"
  },
  {
    Number: 341,
    Location: "Keelung",
    Country: "China",
    Latitude: 25.157,
    Longitude: 121.745,
    Start: "1/1/1980",
    End: "4/29/2016"
  },
  {
    Number: 345,
    Location: "Nakano Shima",
    Country: "Japan",
    Latitude: 29.842,
    Longitude: 129.842,
    Start: "1/30/1984",
    End: "11/30/2018"
  },
  {
    Number: 347,
    Location: "Abashiri",
    Country: "Japan",
    Latitude: 44.017,
    Longitude: 144.283,
    Start: "1/1/1968",
    End: "11/29/2018"
  },
  {
    Number: 348,
    Location: "Hamada",
    Country: "Japan",
    Latitude: 34.9,
    Longitude: 132.067,
    Start: "3/1/1984",
    End: "11/29/2018"
  },
  {
    Number: 349,
    Location: "Toyama",
    Country: "Japan",
    Latitude: 36.767,
    Longitude: 137.217,
    Start: "5/1/1967",
    End: "11/29/2018"
  },
  {
    Number: 350,
    Location: "Kushiro",
    Country: "Japan",
    Latitude: 42.967,
    Longitude: 144.383,
    Start: "1/1/1963",
    End: "11/29/2018"
  },
  {
    Number: 351,
    Location: "Ofunato",
    Country: "Japan",
    Latitude: 39.017,
    Longitude: 141.75,
    Start: "1/1/1965",
    End: "11/30/2018"
  },
  {
    Number: 352,
    Location: "Mera",
    Country: "Japan",
    Latitude: 34.917,
    Longitude: 139.833,
    Start: "1/1/1965",
    End: "11/29/2018"
  },
  {
    Number: 353,
    Location: "Kushimoto",
    Country: "Japan",
    Latitude: 33.467,
    Longitude: 135.783,
    Start: "1/1/1961",
    End: "11/29/2018"
  },
  {
    Number: 354,
    Location: "Aburatsu",
    Country: "Japan",
    Latitude: 31.567,
    Longitude: 131.417,
    Start: "1/1/1961",
    End: "11/29/2018"
  },
  {
    Number: 355,
    Location: "Naha",
    Country: "Japan",
    Latitude: 26.217,
    Longitude: 127.667,
    Start: "8/1/1966",
    End: "11/30/2018"
  },
  {
    Number: 356,
    Location: "Maisaka",
    Country: "Japan",
    Latitude: 34.683,
    Longitude: 137.617,
    Start: "1/1/1968",
    End: "11/29/2018"
  },
  {
    Number: 359,
    Location: "Naze",
    Country: "Japan",
    Latitude: 28.382,
    Longitude: 129.495,
    Start: "4/9/1957",
    End: "11/30/2018"
  },
  {
    Number: 360,
    Location: "Wakkanai",
    Country: "Japan",
    Latitude: 45.417,
    Longitude: 141.683,
    Start: "1/1/1967",
    End: "11/29/2018"
  },
  {
    Number: 362,
    Location: "Nagasaki",
    Country: "Japan",
    Latitude: 32.733,
    Longitude: 129.867,
    Start: "1/1/1985",
    End: "11/29/2018"
  },
  {
    Number: 363,
    Location: "Nishinoomote",
    Country: "Japan",
    Latitude: 30.735,
    Longitude: 130.992,
    Start: "4/22/1965",
    End: "11/30/2018"
  },
  {
    Number: 364,
    Location: "Hakodate",
    Country: "Japan",
    Latitude: 41.783,
    Longitude: 140.733,
    Start: "7/1/1964",
    End: "11/29/2018"
  },
  {
    Number: 365,
    Location: "Ishigaki",
    Country: "Japan",
    Latitude: 24.333,
    Longitude: 124.15,
    Start: "1/1/1969",
    End: "11/30/2018"
  },
  {
    Number: 370,
    Location: "Manila",
    Country: "Philippines (the)",
    Latitude: 14.585,
    Longitude: 120.968,
    Start: "1/1/1984",
    End: "11/30/2018"
  },
  {
    Number: 371,
    Location: "Legaspi",
    Country: "Philippines (the)",
    Latitude: 13.15,
    Longitude: 123.75,
    Start: "1/1/1984",
    End: "11/30/2018"
  },
  {
    Number: 372,
    Location: "Davao",
    Country: "Philippines (the)",
    Latitude: 7.122,
    Longitude: 125.663,
    Start: "1/1/1990",
    End: "11/30/2018"
  },
  {
    Number: 381,
    Location: "Qui Nhon",
    Country: "Viet Nam",
    Latitude: 13.775,
    Longitude: 109.255,
    Start: "10/20/2007",
    End: "11/30/2018"
  },
  {
    Number: 382,
    Location: "Subic Bay",
    Country: "Philippines (the)",
    Latitude: 14.765,
    Longitude: 120.252,
    Start: "2/28/2007",
    End: "11/28/2018"
  },
  {
    Number: 383,
    Location: "Vung Tau",
    Country: "Viet Nam",
    Latitude: 10.34,
    Longitude: 107.072,
    Start: "10/16/2007",
    End: "12/31/2018"
  },
  {
    Number: 395,
    Location: "Manzanillo",
    Country: "Mexico",
    Latitude: 19.05,
    Longitude: -104.333,
    Start: "12/1/1992",
    End: "8/28/2013"
  },
  {
    Number: 399,
    Location: "Lord Howe",
    Country: "Australia",
    Latitude: -31.517,
    Longitude: 159.067,
    Start: "4/24/1991",
    End: "6/29/2012"
  },
  {
    Number: 400,
    Location: "Lombrum",
    Country: "Papua New Guinea",
    Latitude: -2.033,
    Longitude: 147.367,
    Start: "9/29/1994",
    End: "12/31/2018"
  },
  {
    Number: 402,
    Location: "Lautoka",
    Country: "Fiji",
    Latitude: -17.6,
    Longitude: 177.433,
    Start: "10/24/1992",
    End: "12/31/2018"
  },
  {
    Number: 403,
    Location: "Jackson",
    Country: "New Zealand",
    Latitude: -43.983,
    Longitude: 168.617,
    Start: "1/1/1999",
    End: "12/31/2013"
  },
  {
    Number: 416,
    Location: "Tanjung Lesung",
    Country: "Indonesia",
    Latitude: -6.483,
    Longitude: 105.667,
    Start: "1/31/2008",
    End: "9/20/2012"
  },
  {
    Number: 417,
    Location: "Sadeng",
    Country: "Indonesia",
    Latitude: -8.5,
    Longitude: 110.783,
    Start: "7/19/2008",
    End: "4/2/2016"
  },
  {
    Number: 418,
    Location: "Waikelo",
    Country: "Indonesia",
    Latitude: -9.4,
    Longitude: 119.233,
    Start: "4/11/2008",
    End: "11/30/2018"
  },
  {
    Number: 419,
    Location: "Lembar",
    Country: "Indonesia",
    Latitude: -8.732,
    Longitude: 116.072,
    Start: "9/23/2008",
    End: "11/30/2018"
  },
  {
    Number: 420,
    Location: "Saumlaki",
    Country: "Indonesia",
    Latitude: -7.982,
    Longitude: 131.29,
    Start: "10/2/2008",
    End: "11/30/2018"
  },
  {
    Number: 540,
    Location: "Prince Rupert",
    Country: "Canada",
    Latitude: 54.317,
    Longitude: -130.323,
    Start: "1/2/1909",
    End: "11/30/2018"
  },
  {
    Number: 541,
    Location: "Bamfield",
    Country: "Canada",
    Latitude: 54.317,
    Longitude: -130.333,
    Start: "12/1/2001",
    End: "11/30/2018"
  },
  {
    Number: 542,
    Location: "Tofino",
    Country: "Canada",
    Latitude: 49.153,
    Longitude: -125.913,
    Start: "10/2/1909",
    End: "11/30/2018"
  },
  {
    Number: 547,
    Location: "Barbers Point, HI",
    Country: "United States of America (the)",
    Latitude: 21.32,
    Longitude: -158.12,
    Start: "6/6/2009",
    End: "10/23/2018"
  },
  {
    Number: 548,
    Location: "Kaumalapau, HI",
    Country: "United States of America (the)",
    Latitude: 20.78,
    Longitude: -156.9,
    Start: "7/15/2007",
    End: "3/22/2015"
  },
  {
    Number: 551,
    Location: "San Francisco, CA",
    Country: "United States of America (the)",
    Latitude: 37.807,
    Longitude: -122.465,
    Start: "1897-08-02",
    End: "12/31/2018"
  },
  {
    Number: 552,
    Location: "Kawaihae",
    Country: "United States of America (the)",
    Latitude: 20.033,
    Longitude: -155.833,
    Start: "3/1/1989",
    End: "12/31/2018"
  },
  {
    Number: 554,
    Location: "La Jolla, CA",
    Country: "United States of America (the)",
    Latitude: 32.867,
    Longitude: -117.257,
    Start: "1/1/1925",
    End: "11/30/2018"
  },
  {
    Number: 556,
    Location: "Crescent City, CA",
    Country: "United States of America (the)",
    Latitude: 41.745,
    Longitude: -124.183,
    Start: "4/12/1933",
    End: "11/30/2018"
  },
  {
    Number: 558,
    Location: "Neah Bay, WA",
    Country: "United States of America (the)",
    Latitude: 48.368,
    Longitude: -124.617,
    Start: "8/2/1934",
    End: "12/31/2018"
  },
  {
    Number: 559,
    Location: "Sitka, AK",
    Country: "United States of America (the)",
    Latitude: 57.052,
    Longitude: -135.342,
    Start: "5/20/1938",
    End: "11/30/2018"
  },
  {
    Number: 560,
    Location: "Seward, AK",
    Country: "United States of America (the)",
    Latitude: 60.12,
    Longitude: -149.427,
    Start: "1/2/1967",
    End: "11/30/2018"
  },
  {
    Number: 569,
    Location: "San Diego",
    Country: "United States of America (the)",
    Latitude: 32.713,
    Longitude: -117.173,
    Start: "1/22/1906",
    End: "12/31/2018"
  },
  {
    Number: 570,
    Location: "Yakutat, AK",
    Country: "United States of America (the)",
    Latitude: 59.548,
    Longitude: -139.735,
    Start: "1/2/1961",
    End: "11/30/2018"
  },
  {
    Number: 571,
    Location: "Ketchikan, AK",
    Country: "United States of America (the)",
    Latitude: 55.333,
    Longitude: -131.625,
    Start: "10/12/1918",
    End: "11/30/2018"
  },
  {
    Number: 574,
    Location: "Sand Point, AK",
    Country: "United States of America (the)",
    Latitude: 55.337,
    Longitude: -160.502,
    Start: "1/1/1973",
    End: "11/30/2018"
  },
  {
    Number: 579,
    Location: "Prudhoe Bay, AK",
    Country: "United States of America (the)",
    Latitude: 70.4,
    Longitude: -148.527,
    Start: "6/28/1993",
    End: "11/30/2018"
  },
  {
    Number: 592,
    Location: "South Beach, OR",
    Country: "United States of America (the)",
    Latitude: 44.625,
    Longitude: -124.043,
    Start: "2/2/1967",
    End: "11/30/2018"
  },
  {
    Number: 595,
    Location: "Nome, AK",
    Country: "United States of America (the)",
    Latitude: 64.5,
    Longitude: -165.43,
    Start: "10/1/1992",
    End: "11/30/2018"
  },
  {
    Number: 600,
    Location: "Ushuaia",
    Country: "Argentina",
    Latitude: -54.805,
    Longitude: -68.295,
    Start: "1/1/1996",
    End: "11/30/2018"
  },
  {
    Number: 601,
    Location: "Esperanza",
    Country: "Argentina",
    Latitude: -63.395,
    Longitude: -56.995,
    Start: "2/24/1993",
    End: "9/10/2005"
  },
  {
    Number: 654,
    Location: "Currimao",
    Country: "Philippines (the)",
    Latitude: 17.988,
    Longitude: 120.488,
    Start: "10/10/2009",
    End: "11/30/2018"
  },
  {
    Number: 655,
    Location: "Lubang",
    Country: "Philippines (the)",
    Latitude: 13.82,
    Longitude: 120.21,
    Start: "6/12/2010",
    End: "11/30/2018"
  },
  {
    Number: 680,
    Location: "Macquarie Is.",
    Country: "Australia",
    Latitude: -54.483,
    Longitude: 158.967,
    Start: "12/29/1993",
    End: "7/9/2008"
  },
  {
    Number: 684,
    Location: "Puerto Montt",
    Country: "Chile",
    Latitude: -41.483,
    Longitude: -72.967,
    Start: "4/3/1980",
    End: "11/30/2018"
  },
  {
    Number: 699,
    Location: "Tanjong Pagar",
    Country: "Singapore",
    Latitude: 1.262,
    Longitude: 103.853,
    Start: "1/1/1984",
    End: "2/28/2016"
  },
  {
    Number: 700,
    Location: "Faraday",
    Country: "Antarctica",
    Latitude: -65.25,
    Longitude: -64.267,
    Start: "10/15/1959",
    End: "11/30/2018"
  },
  {
    Number: 701,
    Location: "Port Nolloth",
    Country: "South Africa",
    Latitude: -29.25,
    Longitude: 16.867,
    Start: "1/4/1958",
    End: "5/31/2016"
  },
  {
    Number: 702,
    Location: "Luderitz",
    Country: "South Africa",
    Latitude: -26.65,
    Longitude: 15.15,
    Start: "8/11/1958",
    End: "10/25/2015"
  },
  {
    Number: 703,
    Location: "Saldahna Bay",
    Country: "South Africa",
    Latitude: -33.017,
    Longitude: 17.95,
    Start: "9/18/1973",
    End: "10/31/2018"
  },
  {
    Number: 704,
    Location: "Cape Town",
    Country: "South Africa",
    Latitude: -33.9,
    Longitude: 18.433,
    Start: "6/16/1967",
    End: "10/31/2018"
  },
  {
    Number: 708,
    Location: "Salvador",
    Country: "Brazil",
    Latitude: -12.973,
    Longitude: -38.517,
    Start: "10/3/2004",
    End: "11/30/2018"
  },
  {
    Number: 729,
    Location: "Mar del Plata",
    Country: "Argentina",
    Latitude: -38.035,
    Longitude: -57.53,
    Start: "3/24/2010",
    End: "11/30/2018"
  },
  {
    Number: 731,
    Location: "Puerto Madryn",
    Country: "Argentina",
    Latitude: -38.763,
    Longitude: -65.032,
    Start: "3/15/2010",
    End: "11/30/2018"
  },
  {
    Number: 737,
    Location: "San Andres",
    Country: "Colombia",
    Latitude: 12.583,
    Longitude: -81.7,
    Start: "9/26/2012",
    End: "11/30/2018"
  },
  {
    Number: 738,
    Location: "Santa Marta",
    Country: "Colombia",
    Latitude: 11.235,
    Longitude: -74.222,
    Start: "10/1/2012",
    End: "11/30/2018"
  },
  {
    Number: 739,
    Location: "El Porvenir",
    Country: "Panama",
    Latitude: 9.558,
    Longitude: -78.948,
    Start: "8/23/2012",
    End: "11/30/2018"
  },
  {
    Number: 752,
    Location: "Fort Pulaski, GA",
    Country: "United States of America (the)",
    Latitude: 32.033,
    Longitude: -80.902,
    Start: "7/2/1935",
    End: "11/30/2018"
  },
  {
    Number: 755,
    Location: "Virginia Key, FL",
    Country: "United States of America (the)",
    Latitude: 25.732,
    Longitude: -80.162,
    Start: "1/1/1996",
    End: "11/30/2018"
  },
  {
    Number: 762,
    Location: "Pensacola, FL",
    Country: "United States of America (the)",
    Latitude: 30.403,
    Longitude: -87.213,
    Start: "5/2/1923",
    End: "11/30/2018"
  },
  {
    Number: 767,
    Location: "Galveston, P.Pier",
    Country: "United States of America (the)",
    Latitude: 29.287,
    Longitude: -94.79,
    Start: "8/22/1957",
    End: "7/19/2011"
  },
  {
    Number: 775,
    Location: "Galveston, Pier 21",
    Country: "United States of America (the)",
    Latitude: 29.31,
    Longitude: -94.793,
    Start: "1/2/1904",
    End: "11/30/2018"
  },
  {
    Number: 776,
    Location: "Punta Cana",
    Country: "Dominican Republic (the)",
    Latitude: 18.505,
    Longitude: -68.375,
    Start: "6/19/2010",
    End: "11/30/2018"
  },
  {
    Number: 777,
    Location: "Puerto Plata",
    Country: "Dominican Republic (the)",
    Latitude: 19.798,
    Longitude: -70.702,
    Start: "6/22/2010",
    End: "11/30/2018"
  },
  {
    Number: 786,
    Location: "Roseau",
    Country: "Dominica",
    Latitude: 15.313,
    Longitude: -61.39,
    Start: "5/17/2011",
    End: "11/30/2018"
  },
  {
    Number: 789,
    Location: "Prickley Bay",
    Country: "Grenada",
    Latitude: 12.005,
    Longitude: -61.765,
    Start: "5/11/2011",
    End: "11/30/2018"
  },
  {
    Number: 799,
    Location: "Portu-Prince",
    Country: "Haiti",
    Latitude: 18.567,
    Longitude: -72.35,
    Start: "12/1/2011",
    End: "11/30/2018"
  },
  {
    Number: 800,
    Location: "Andenes",
    Country: "Norway",
    Latitude: 69.317,
    Longitude: 16.15,
    Start: "10/10/1991",
    End: "10/31/2018"
  },
  {
    Number: 801,
    Location: "Honningsvag",
    Country: "Norway",
    Latitude: 70.983,
    Longitude: 25.983,
    Start: "6/2/1988",
    End: "10/31/2018"
  },
  {
    Number: 802,
    Location: "Maloy",
    Country: "Norway",
    Latitude: 61.933,
    Longitude: 5.117,
    Start: "4/22/1986",
    End: "10/31/2018"
  },
  {
    Number: 803,
    Location: "Rorvik",
    Country: "Norway",
    Latitude: 64.867,
    Longitude: 11.25,
    Start: "8/19/1969",
    End: "10/31/2018"
  },
  {
    Number: 804,
    Location: "Tregde",
    Country: "Norway",
    Latitude: 58,
    Longitude: 7.567,
    Start: "10/5/1927",
    End: "10/31/2018"
  },
  {
    Number: 805,
    Location: "Vardo",
    Country: "Norway",
    Latitude: 70.333,
    Longitude: 31.1,
    Start: "9/11/1947",
    End: "10/31/2018"
  },
  {
    Number: 806,
    Location: "Nouakchott",
    Country: "Mauritania",
    Latitude: 17.99,
    Longitude: -16.037,
    Start: "1/6/2007",
    End: "2/8/2015"
  },
  {
    Number: 807,
    Location: "Alexandria",
    Country: "Egypt",
    Latitude: 31.212,
    Longitude: 29.923,
    Start: "10/1/2010",
    End: "1/9/2016"
  },
  {
    Number: 808,
    Location: "Thule (Pituffik)",
    Country: "Denmark",
    Latitude: 76,
    Longitude: -68,
    Start: "9/19/2006",
    End: "12/31/2018"
  },
  {
    Number: 809,
    Location: "Ittoqqortoormiit",
    Country: "Denmark",
    Latitude: 70.483,
    Longitude: -21.983,
    Start: "10/16/2007",
    End: "12/31/2018"
  },
  {
    Number: 816,
    Location: "Port Sonara",
    Country: "Cameroon",
    Latitude: -4.007,
    Longitude: 9.127,
    Start: "6/24/2008",
    End: "6/24/2011"
  },
  {
    Number: 818,
    Location: "Smogen",
    Country: "Sweden",
    Latitude: 58.35,
    Longitude: 11.215,
    Start: "1/1/2000",
    End: "11/30/2018"
  },
  {
    Number: 819,
    Location: "Goteborgorsh.",
    Country: "Sweden",
    Latitude: 57.683,
    Longitude: 11.8,
    Start: "11/3/1967",
    End: "11/30/2018"
  },
  {
    Number: 820,
    Location: "Nuuk",
    Country: "Denmark",
    Latitude: 64.172,
    Longitude: -51.72,
    Start: "7/5/2014",
    End: "12/31/2018"
  },
  {
    Number: 822,
    Location: "Brest",
    Country: "France",
    Latitude: 48.383,
    Longitude: -4.5,
    Start: "1846-01-04",
    End: "11/30/2018"
  },
  {
    Number: 824,
    Location: "Marseille",
    Country: "France",
    Latitude: 43.278,
    Longitude: 5.353,
    Start: "1849-11-02",
    End: "11/30/2018"
  },
  {
    Number: 825,
    Location: "Cuxhaven",
    Country: "Germany",
    Latitude: 53.867,
    Longitude: 8.717,
    Start: "12/30/1917",
    End: "12/31/2018"
  },
  {
    Number: 826,
    Location: "Stockholm",
    Country: "Sweden",
    Latitude: 59.325,
    Longitude: 18.082,
    Start: "1889-01-01",
    End: "11/30/2018"
  },
  {
    Number: 829,
    Location: "Trieste",
    Country: "Italy",
    Latitude: 45.647,
    Longitude: 13.76,
    Start: "6/1/2009",
    End: "11/7/2018"
  },
  {
    Number: 830,
    Location: "La Coruna",
    Country: "Spain",
    Latitude: 43.367,
    Longitude: -8.4,
    Start: "3/1/1943",
    End: "11/30/2018"
  },
  {
    Number: 833,
    Location: "Nain",
    Country: "Canada",
    Latitude: 56.55,
    Longitude: -61.683,
    Start: "10/18/1963",
    End: "11/30/2018"
  },
  {
    Number: 834,
    Location: "Malin Head",
    Country: "Ireland",
    Latitude: 55.367,
    Longitude: -7.333,
    Start: "4/30/2008",
    End: "11/30/2018"
  },
  {
    Number: 835,
    Location: "Castletownsend",
    Country: "Ireland",
    Latitude: 51.533,
    Longitude: -9.183,
    Start: "12/17/2004",
    End: "10/15/2018"
  },
  {
    Number: 836,
    Location: "Alert",
    Country: "Canada",
    Latitude: 82.492,
    Longitude: -62.317,
    Start: "12/2/2008",
    End: "10/31/2018"
  },
  {
    Number: 878,
    Location: "Bullen Bay",
    Country: "Curacao",
    Latitude: 12.187,
    Longitude: -69.02,
    Start: "10/17/2013",
    End: "11/30/2018"
  },
  {
    Number: 900,
    Location: "Inhambane",
    Country: "Mozambique",
    Latitude: -23.868,
    Longitude: 35.377,
    Start: "5/8/2007",
    End: "7/31/2014"
  },
  {
    Number: 906,
    Location: "Moulmein",
    Country: "Myanmar",
    Latitude: 16.465,
    Longitude: 97.622,
    Start: "12/1/2006",
    End: "11/30/2018"
  },
  {
    Number: 907,
    Location: "Akyab (Sittwe)",
    Country: "Myanmar",
    Latitude: 20.14,
    Longitude: 92.903,
    Start: "9/8/2006",
    End: "11/30/2018"
  },
  {
    Number: 908,
    Location: "Port Blair",
    Country: "India",
    Latitude: 11.683,
    Longitude: 92.767,
    Start: "10/2/2011",
    End: "11/30/2018"
  },
  {
    Number: 913,
    Location: "Telukdalam",
    Country: "Indonesia",
    Latitude: 0.555,
    Longitude: 97.822,
    Start: "8/27/2008",
    End: "6/1/2015"
  },
  {
    Number: 914,
    Location: "Meulaboh",
    Country: "Indonesia",
    Latitude: 5.128,
    Longitude: 96.132,
    Start: "10/27/2008",
    End: "7/31/2016"
  },
  {
    Number: 915,
    Location: "Chabahar",
    Country: "Iran (Islamic Republic of)",
    Latitude: 25.297,
    Longitude: 60.603,
    Start: "11/1/2007",
    End: "11/25/2018"
  },
  {
    Number: 920,
    Location: "Marion Island",
    Country: "South Africa",
    Latitude: -46.867,
    Longitude: 37.867,
    Start: "9/27/2007",
    End: "11/30/2018"
  },
  {
    Number: 922,
    Location: "Mtwara",
    Country: "Tanzania, United Republic of",
    Latitude: -10.283,
    Longitude: 40.183,
    Start: "10/28/2009",
    End: "10/31/2014"
  }
];

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 0, lng: 0 },
    zoom: 3,
    styles: [
      { elementType: "geometry", stylers: [{ color: "#242f3e" }] },
      { elementType: "labels.text.stroke", stylers: [{ color: "#242f3e" }] },
      { elementType: "labels.text.fill", stylers: [{ color: "#746855" }] },
      {
        featureType: "administrative.locality",
        elementType: "labels.text.fill",
        stylers: [{ color: "#d59563" }]
      },
      {
        featureType: "poi",
        elementType: "labels.text.fill",
        stylers: [{ color: "#d59563" }]
      },
      {
        featureType: "poi.park",
        elementType: "geometry",
        stylers: [{ color: "#263c3f" }]
      },
      {
        featureType: "poi.park",
        elementType: "labels.text.fill",
        stylers: [{ color: "#6b9a76" }]
      },
      {
        featureType: "road",
        elementType: "geometry",
        stylers: [{ color: "#38414e" }]
      },
      {
        featureType: "road",
        elementType: "geometry.stroke",
        stylers: [{ color: "#212a37" }]
      },
      {
        featureType: "road",
        elementType: "labels.text.fill",
        stylers: [{ color: "#9ca5b3" }]
      },
      {
        featureType: "road.highway",
        elementType: "geometry",
        stylers: [{ color: "#746855" }]
      },
      {
        featureType: "road.highway",
        elementType: "geometry.stroke",
        stylers: [{ color: "#1f2835" }]
      },
      {
        featureType: "road.highway",
        elementType: "labels.text.fill",
        stylers: [{ color: "#f3d19c" }]
      },
      {
        featureType: "transit",
        elementType: "geometry",
        stylers: [{ color: "#2f3948" }]
      },
      {
        featureType: "transit.station",
        elementType: "labels.text.fill",
        stylers: [{ color: "#d59563" }]
      },
      {
        featureType: "water",
        elementType: "geometry",
        stylers: [{ color: "#17263c" }]
      },
      {
        featureType: "water",
        elementType: "labels.text.fill",
        stylers: [{ color: "#515c6d" }]
      },
      {
        featureType: "water",
        elementType: "labels.text.stroke",
        stylers: [{ color: "#17263c" }]
      }
    ]
  });

  for (let i = 0; i < locations.length; i++) {
    const latLng = {
      lat: locations[i].Latitude,
      lng: locations[i].Longitude
    };

    const lab = locations[i].Number + "";

    const marker = new google.maps.Marker({
      position: latLng,
      label: lab,
      map: map
    });

    marker.addListener("click", function() {
      map.setZoom(5);
      map.setCenter(marker.getPosition());
      // console.log(marker);

      window.open(
        "sketch.html?params=" + marker.label,
        "_blank",
        "location=yes,height=900,width=900,scrollbars=no,status=yes"
      );
    });
  }
}
