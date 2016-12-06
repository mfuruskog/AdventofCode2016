var fs  = require("fs");
var array = fs.readFileSync("day3/input.txt").toString().split('\n');

triangleCount = 0;

for (i in array) {
    let sides = array[i].trim();
    sides = sides.split('  ');
    if (isTriangle(sides)) triangleCount++;
}

console.log("Number of triangles: " + triangleCount);

function isTriangle(sides) {
    let side0 = parseInt(sides[0]);
    let side1 = parseInt(sides[1]);
    let side2 = parseInt(sides[2]);
    if (side0+side1>side2 && side0+side2>side1 && side1+side2>side0) return true;
    return false;
}
