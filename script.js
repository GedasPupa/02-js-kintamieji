"use strict"

var skaicius1 = 1;
var skaicius2 = 2;
var skaicius3 = 3;
var skaicius4 = 4;
var skaicius5 = 5;
var skaicius6 = 6;
var skaiciai = [skaicius1, skaicius2, skaicius3, skaicius4];
var temp;
var maxSkaicius = Number.MAX_VALUE;

for (var i=0; i<skaiciai.length; i++) {
    console.log(skaiciai[i]);
};

console.log('Suma: ' + skaiciai.reduce((acc, curr) => acc + curr));
console.log(`Sandauga: ${skaiciai.reduce((acc, curr) => acc * curr)}!!!`);

temp = skaicius1;
skaicius1 = skaicius2;
skaicius2 = temp;
alert('Skaicius1: ' + skaicius1 + '/ Skaicius2: ' + skaicius2);

[skaicius3, skaicius4] = [skaicius4, skaicius5];
alert('Skaicius3: ' + skaicius3 + '/ Skaicius4: ' + skaicius4);

console.log('maxSkaicius: ' + maxSkaicius);

// - - - XOR operator (^):
skaicius5 = skaicius5 ^ skaicius6;
skaicius6 = skaicius5 ^ skaicius6;
skaicius5 = skaicius5 ^ skaicius6;

console.log('Skaicius5: ' + skaicius5 + ' / Skaicius6: ' + skaicius6);

document.getElementById('Rezultatas').innerHTML = (
    '<h1>' + 'Skaicius5: ' + skaicius5 + '<br>' + 'Skaicius6: ' + skaicius6 + '</h1>'
);