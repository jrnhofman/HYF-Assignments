/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Assignments/tree/main/2-Browsers/Week1#exercise-2-about-me

1. Using JavaScript, replace each of the spans (`nickname`, fav-food`, 
   `hometown`) with your own information.
2. In JavaScript, iterate through each `<li>` and change the class to 
   `list-item`.
3. Look in the css file!
------------------------------------------------------------------------------*/

function main() {
  // inserting my own text
  document.getElementById('nickname').textContent = 'John';
  document.getElementById('fav-food').textContent = 'Noodles';
  document.getElementById('hometown').textContent = 'Amsterdam';

  // targeting all list items
  const listItem = document.querySelectorAll('li');
  // for each list item adding a class attribute
  listItem.forEach((item) => {
    item.classList.add('list-item');
  });
}

window.addEventListener('load', main);
