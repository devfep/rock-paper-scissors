// Show prompt asking user to make selection...import dart:io
// Read user input
// while(true) ....infinite loop so that game can be played continuously
//Check if it is one of the possibilities...use enums maybe?
// Choose random selection for computer move
// compare player move with comp move and show result
// else if input is q,
// quit the app
// else if input is anything else
// print invalid input

import 'dart:io';
import 'dart:math';

enum Move {
  rock,
  paper,
  scissors,
}

void main() {
  final randomNumGenObj = Random(); //random obj instance created

  // infinite game loop
  while (true) {
    stdout.write('make you selection; r/p/s? \t');

    // obtain user input
    final input = stdin.readLineSync();
    Move? playerMove;

    if (input == 'r' || input == 'p' || input == 's') {
      // Match input with Enum
      if (input == 'r') {
        playerMove = Move.rock;
      } else if (input == 'p') {
        playerMove = Move.paper;
      } else if (input == 's') {
        playerMove = Move.scissors;
      }
      print('You selected ${playerMove!.name}');

      // Generate index for Enum selection
      final randomNum = randomNumGenObj.nextInt(3);
      final compMove = Move.values[randomNum];

      // Game logic
      if (playerMove == compMove) {
        print('It\'s a draw');
      } else if ((playerMove == Move.paper && compMove == Move.rock) ||
          (playerMove == Move.scissors && compMove == Move.paper) ||
          (playerMove == Move.rock && compMove == Move.scissors)) {
        print('Comp selected ${compMove.name}. \nYou won!');
      } else {
        print('Comp selected ${compMove.name}. \nYou suck. Loser!');
      }
    }

    // Quit Game
    else if (input == 'q') {
      print('Goodbye');
      break;
    }

    // Handle wrong user input

    else {
      print(
          'Invalid input; please enter r for rock, p for paper, or s fo scissors');
    }
  }
}
