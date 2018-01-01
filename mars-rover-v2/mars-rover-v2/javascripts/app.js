// Rover Object Goes Here
var theRover= {
  direction:'N',
  position: [0,0]
};

/*----------------TURNING LEFT-------------------------------------------------*/
function turnLeft(rover){
  switch (theRover.direction) {
    case 'N':
    theRover.direction = "W";
      break;

    case 'E':
    theRover.direction = "N";
      break;

    case 'S':
      theRover.direction = "E";
        break;

    case 'W':
        theRover.direction = "S";
          break;
  }
  console.log('The Rover position is: '+ theRover.position[0] + ","+ theRover.position[1]);
  console.log('The Rover is turning left to: '+ theRover.direction);
}

/*----------------TURNING RIGHT-------------------------------------------------*/


function turnRight(rover){
  switch (theRover.direction) {
    case 'N':
    theRover.direction = "E";
      break;

    case 'E':
    theRover.direction = "S";
      break;

    case 'S':
      theRover.direction = "W";
        break;

    case 'W':
        theRover.direction = "N";
          break;
  }
  console.log('The Rover position is: '+ theRover.position[0] + ","+ theRover.position[1]);
  console.log('The Rover is turning right to: '+ theRover.direction);
}

/*----------------MOVING FORWARDS-------------------------------------------------*/

function moveForward(rover){
  switch (theRover.direction) {
    case 'N':
      theRover.position[0]++;
      break;

    case 'E':
    theRover.position[1]++;
    break;

    case 'S':
    theRover.position[0]--;
    break;

    case 'W':
    theRover.position[1]--;
      break;

  }

  if (theRover.position[0] < 0) {
    theRover.position[0] += 10;
  }
  if (theRover.position[0] > 9) {
    theRover.position[0] -= 10;
  }
  if (theRover.position[1] < 0) {
    theRover.position[1] += 10;
  }
  if (theRover.position[1] > 9) {
    theRover.position[1] -= 10;
  }
  console.log("Going forward to " + theRover.position[0] +","+theRover.position[1]);
  console.log("moveForward was called");
}

/*----------------MOVING BACKWARDS-------------------------------------------------*/

function moveBackward(rover){
  switch (theRover.direction) {
    case 'N':
    theRover.position[0]--;
    break;

    case 'E':
    theRover.position[1]--;
    break;

    case 'S':
    theRover.position[0]++;
    break;

    case 'W':
    theRover.position[1]++;
      break;

  }

  if (theRover.position[0] < 0) {
    theRover.position[0] += 10;
  }
  if (theRover.position[0] > 9) {
    theRover.position[0] -= 10;
  }
  if (theRover.position[1] < 0) {
    theRover.position[1] += 10;
  }
  if (theRover.position[1] > 9) {
    theRover.position[1] -= 10;
  }
  console.log("Going Backward to " + theRover.position[0] +","+theRover.position[1]);
  console.log("moveBackward was called");
}


/*----------------------------COMMANDS-------------------------*/


function commands() {
  var commands = 'ffllrrrffbl';

  var arrayCommands = commands.split(""); /*find this method in w3schools for separate each character*/

  for (var i = 0; i < arrayCommands.length; i++) {
    if (arrayCommands[i] == 'f') {
      moveForward(theRover);
    }

    else if (arrayCommands[i] == 'b') {
      moveBackward(theRover);
    }

    else if (arrayCommands[i] == 'l') {
      turnLeft(theRover);
    }

    else if (arrayCommands[i] == 'r') {
      turnRight(theRover);
    }

  }
}

commands();
