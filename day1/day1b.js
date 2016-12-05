var input = "L4, L3, R1, L4, R2, R2, L1, L2, R1, R1, L3, R5, L2, R5, L4, L3, R2, R2, L5, L1, R4, L1, R3, L3, R5, R2, L5, R2, R1, R1, L5, R1, L3, L2, L5, R4, R4, L2, L1, L1, R1, R1, L185, R4, L1, L1, R5, R1, L1, L3, L2, L1, R2, R2, R2, L1, L1, R4, R5, R53, L1, R1, R78, R3, R4, L1, R5, L1, L4, R3, R3, L3, L3, R191, R4, R1, L4, L1, R3, L1, L2, R3, R2, R4, R5, R5, L3, L5, R2, R3, L1, L1, L3, R1, R4, R1, R3, R4, R4, R4, R5, R2, L5, R1, R2, R5, L3, L4, R1, L5, R1, L4, L3, R5, R5, L3, L4, L4, R2, R2, L5, R3, R1, R2, R5, L5, L3, R4, L5, R5, L3, R1, L1, R4, R4, L3, R2, R5, R1, R2, L1, R4, R1, L3, L3, L5, R2, R5, L1, L4, R3, R3, L3, R2, L5, R1, R3, L3, R2, L1, R4, R3, L4, R5, L2, L2, R5, R1, R2, L4, L4, L5, R3, L4";
var data = input.split(", ");
var x = 0, y = 0, dir = 'N', prevLocs = [], revisited = false;

for(i in data) {
    let turnDir = data[i].substring(0,1);
    let numberOfSteps = data[i].substring(1);
    newDirection(turnDir);
    walkSteps(numberOfSteps)
    if (revisited) break;
}
console.log('End coords: ' + '('+x,y+')');
console.log('Blocks travelled: ' + (Math.abs(x) + Math.abs(y)));

function newDirection(turnDir) {
    switch (dir) {
        case 'N': 
            dir = turnDir === 'R' ? 'E' : 'W';
            break;          
        case 'E': 
            dir = turnDir === 'R' ? 'S' : 'N';
            break;
        case 'S': 
            dir = turnDir === 'R' ? 'W' : 'E';
            break;  
         case 'W': 
            dir = turnDir === 'R' ? 'N' : 'S';
            break;  
        default: 
            break;
    }
}

function walkSteps(numberOfSteps) {
    for (i=0; i<numberOfSteps; i++) {
        if (dir == 'N') y++;
        if (dir == 'E') x--;
        if (dir == 'S') y--;
        if (dir == 'W') x++;
        let coordsStr = (x+','+y).toString();
        if (prevLocs.indexOf(coordsStr) != -1) {
            revisited = true;
            break;
        }   
        prevLocs.push(coordsStr);
    }
}