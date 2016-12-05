var input = "L4, L3, R1, L4, R2, R2, L1, L2, R1, R1, L3, R5, L2, R5, L4, L3, R2, R2, L5, L1, R4, L1, R3, L3, R5, R2, L5, R2, R1, R1, L5, R1, L3, L2, L5, R4, R4, L2, L1, L1, R1, R1, L185, R4, L1, L1, R5, R1, L1, L3, L2, L1, R2, R2, R2, L1, L1, R4, R5, R53, L1, R1, R78, R3, R4, L1, R5, L1, L4, R3, R3, L3, L3, R191, R4, R1, L4, L1, R3, L1, L2, R3, R2, R4, R5, R5, L3, L5, R2, R3, L1, L1, L3, R1, R4, R1, R3, R4, R4, R4, R5, R2, L5, R1, R2, R5, L3, L4, R1, L5, R1, L4, L3, R5, R5, L3, L4, L4, R2, R2, L5, R3, R1, R2, R5, L5, L3, R4, L5, R5, L3, R1, L1, R4, R4, L3, R2, R5, R1, R2, L1, R4, R1, L3, L3, L5, R2, R5, L1, L4, R3, R3, L3, R2, L5, R1, R3, L3, R2, L1, R4, R3, L4, R5, L2, L2, R5, R1, R2, L4, L4, L5, R3, L4";
var data = input.split(", ");
var dir = 'N';
var x = 0;
var y = 0;

for(i in data) {
    let turnDir = data[i].substring(0,1)
    let steps = data[i].substring(1)
    newPosition(turnDir, steps)
}
console.log('End coords: ' + '('+x,y+')')
console.log('Distance travelled: ' + (Math.abs(x) + Math.abs(y)))


function newPosition(turnDir, steps) {
    switch (dir) {
        case 'N': 
            if (turnDir === 'R') {
                dir = 'E';
                x += parseInt(steps);
            }
            else {
                dir = 'W';
                x -= parseInt(steps);
            }
            break;          
        case 'E': 
            if (turnDir === 'R') {
                dir = 'S';
                y -= parseInt(steps);
            }
            else {
                dir = 'N';
                y += parseInt(steps);
            }
            break;
        case 'S': 
            if (turnDir === 'R') {
                dir = 'W';
                x -= parseInt(steps);
            }
            else {
                dir = 'E';
                x += parseInt(steps);
            }
            break;  
         case 'W': 
            if (turnDir === 'R') {
                dir = 'N';
                y += parseInt(steps);
            }
            else {
                dir = 'S';
                y -= parseInt(steps);
            }
            break;  
        default: 
            break;
    }
}