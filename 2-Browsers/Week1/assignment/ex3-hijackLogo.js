/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Assignments/tree/main/2-Browsers/Week1#exercise-3-the-logo-hijack

1. Find out how to select the element that contains the Google logo, and store 
   it in a variable.
2. Modify the `src` and `srcset` of the logo so that it's replaced by the 
   HackYourFuture logo instead.
------------------------------------------------------------------------------*/
function hijackGoogleLogo() {
  const logo = document.getElementById('hplogo');
  logo.src =
    'https://github.com/HackYourFuture/Assignments/tree/main/assets/hyf-logo-black-bg-small.png';
  logo.srcset =
    'https://github.com/HackYourFuture/Assignments/tree/main/assets/hyf-logo-black-bg-small.png'; // a question to the mentor: google uses one source for two attributes - 'src' and 'srcset', and I'm wondering why.
}

hijackGoogleLogo();
