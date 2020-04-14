import { Player } from '../src/pig-dice.js';

describe( "Player", () => {
  var myPlayer = new Player ("Jim", 2, 6);
  
  test("should take input and creat player obj with name, role & score properties", () => {
      expect(myPlayer.name).toEqual("Jim");
      expect(myPlayer.tempScore).toEqual(2);
      expect(myPlayer.totalScore).toEqual(6)   
      });
    
  test ("checks that value of dice roll is within range 1-6", () => {
    // var rando = myPlayer.dice()
    expect(myPlayer.dice()).toBeGreaterThan(0) && expect(myPlayer.dice()).toBeLessThan(7);
  });
});

//expect(notTriangle.checkType()).toEqual("not a triangle");


// describe( " toss ",()=> {
//   test("generate a randome number between 1 and 6", ()=> {
//     var dice 
//    });
// });

// describe( " scoreCheck ",()=> {
//   test("takes the value from 'toss' checks if the roll property is 1", ()=> {
//    });
// });

// describe( " hold ",()=> {
//   test(" returns the property tempScore as 0", ()=> {
//    });
// });