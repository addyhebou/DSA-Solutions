/**
 * @param {number[]} asteroids
 * @return {number[]}
 
 Game ends when all asteroids are in the same direction (all + or -)
 
 
 minimum: 
 time: O(n) 
 space: O(?), maybe n for a stack
 
 
 let status = 1 (positive), or -1(ngative)
 
 [8, -10, 9, -200]
 
 |  |
 |  |
 | |
 |-200|
 |-10|
 
 cp = true
 
 1) kick off the stack with the first element
 2) traverse the remaining asteroids
    3) add new asteroid to stack
    3) if same direction, do nothing
    4) if opposite direction, compare absolute values; set collisionsPossible = true
        5) if incoming asteroid is positive, do nothing, set collisionsPoosible = false
        6) else
            7) if both equal absolutes, remove top two asteroid; set collisionPossible = false
            8) else, keep the bigger asteroid
        10) repeat while collisions possible = true
        
        
        
    [1,-1,-2,-2]
    
    
    
    
    -2
 */
var asteroidCollision = function (asteroids) {
  let stack = [asteroids[0]];

  for (let i = 1; i < asteroids.length; i++) {
    let incoming = asteroids[i];
    let sameSign = incoming * stack[stack.length - 1] > 0;
    if (sameSign || stack.length === 0) stack.push(incoming);
    else {
      let colliding = true;
      while (colliding) {
        let sameSign = incoming * stack[stack.length - 1] > 0;
        if (incoming > 0 || sameSign) {
          colliding = false;
          stack.push(incoming);
        } else {
          let back = stack.length - 1;
          if (Math.abs(incoming) === Math.abs(stack[back])) {
            stack.pop();
            colliding = false;
          } else if (Math.abs(incoming) > Math.abs(stack[back])) {
            stack.pop();
          } else colliding = false;

          if (stack.length === 0 && colliding === true) {
            stack.push(incoming);
            colliding = false;
          }
        }
      }
    }
  }

  return stack;
};

// let asteroidCollision = (asteroids) => {
//   let stack = [];
//   asteroids.forEach((asteroid) => {
//     let entered = false;
//     while (stack.length > 0 && asteroid < 0 && stack[stack.length - 1] > 0) {
//       entered = true;
//       let back = stack.length - 1;
//       if (stack[back] === -asteroid) {
//         stack.pop();
//         break;
//       } else if (stack[back] < -asteroid) stack.pop();
//       else if (stack[back] > -asteroid) break;
//     }

//     if (entered === false) stack.push(asteroid);
//   });

//   return stack;
// };

let input = [-2, -2, 1, -2];
console.log(asteroidCollision(input));
/*
class Solution(object):
    def asteroidCollision(self, asteroids):
        res = []
        for asteroid in asteroids:
            # We only need to resolve collisions under the following conditions:
            # - stack is non-empty
            # - current asteroid is -ve
            # - top of the stack is +ve
            while len(res) and asteroid < 0 and res[-1] > 0:
                # Both asteroids are equal, destroy both.
                if res[-1] == -asteroid: 
                    res.pop()
                    break
                # Stack top is smaller, remove the +ve asteroid 
                # from the stack and continue the comparison.
                elif res[-1] < -asteroid:
                    res.pop()
                    continue
                # Stack top is larger, -ve asteroid is destroyed.
                elif res[-1] > -asteroid:
                    break
            else:
                # -ve asteroid made it all the way to the 
                # bottom of the stack and destroyed all asteroids.
                res.append(asteroid)
        return res
        */
