'use strict';
const date1 = new Date(); // aktuelles Datum und aktuelle Zeit
// hier: Sat Aug 15 2021
// 17:34:25 GMT+0200 (CEST)
const date2 = new Date(1438654000000); // Datum basierend auf Millisekunden
// seit dem 01.01.1970
// hier: Tue Aug 04 2015
// 04:06:40 GMT+0200 (CEST)
const date3 = new Date("02 08 2021"); // Datum basierend auf Zeichenkette
// hier: Sun Feb 08 2021
// 00:00:00 GMT+0100 (CET)
const date4 = new Date( // Datum basierend auf ...
  2021, // ... Jahr ...
  8, // ... Monat ...
  15, // ... Tag ...
  17, // ... Stunden ...
  36, // ... Minuten ...
  30, // ... Sekunden ...
  30 // ... und Millisekunden
); // hier: Tue Sep 15 2021
// 17:36:30 GMT+0200 (CEST)