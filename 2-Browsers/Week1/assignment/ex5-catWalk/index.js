/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Assignments/tree/main/2-Browsers/Week1#exercise-5-the-cat-walk

1. Create a variable to store a reference to the `<img>` element.
2. Change the style of the `<img>` to have a `left` of `0px`, so that it starts 
   at the left hand of the screen.
3. Complete the function called catWalk() to move the cat 10 pixels to the right
   of where it started, by changing the `left` style property.
4. Call that function every 50 milliseconds. Your cat should now be moving 
   across the screen from left to right. Hurrah!
5. When the cat reaches the right-hand of the screen, restart them at the left 
   hand side (`0px`). So they should keep walking from left to right across the 
   screen, forever and ever.
6. When the cat reaches the middle of the screen, replace the img with an image 
   of a cat dancing (use this URL given below), keep it dancing for 5 seconds, 
   and then replace the img with the original image and have it 
   continue the walk.

   Dancing cat URL:

   https://media1.tenor.com/images/2de63e950fb254920054f9bd081e8157/tenor.gif
-----------------------------------------------------------------------------*/
const cat = document.querySelector('img');
cat.style.left = '0px';

let IS_DANCING = false;
let HAS_DANCED_ALREADY = false;

function catWalk() {
  let newLeft = parseInt(cat.style.left);
  if (!IS_DANCING) {
    newLeft += 10;
    cat.style.left = newLeft + 'px';
  }

  // Get screen width to check for screen edges and midpoint
  const screenWidth = window.innerWidth;

  // Cat reaches the right side, so restart the walk at the left side
  if (newLeft > screenWidth) {
    cat.style.left = '0px';
    HAS_DANCED_ALREADY = false;
    newLeft = 0;
  }

  // Cat reaches the middle of the screen
  const middle = screenWidth / 2;

  // Check if the cat is at the midpoint and isn't already dancing
  if (newLeft + cat.width / 2 >= middle && !IS_DANCING && !HAS_DANCED_ALREADY) {
    IS_DANCING = true;
    HAS_DANCED_ALREADY = true;
    cat.src =
      'https://media1.tenor.com/images/2de63e950fb254920054f9bd081e8157/tenor.gif';

    // After 5 seconds, switch back to the original image and continue walking
    setTimeout(() => {
      cat.src = 'http://www.anniemation.com/clip_art/images/cat-walk.gif';
      IS_DANCING = false;
    }, 5000); // 5000 milliseconds = 5 seconds
  }
}

window.onload = () => {
  setInterval(catWalk, 50);
};
