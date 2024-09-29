const slideImages = document.querySelectorAll('.half-size-image img');
let currentSlide = 0;

function changeSlide() {
  slideImages.forEach((slide) => {
    slide.classList.remove('active');
  });

  slideImages[currentSlide].classList.add('active');

  currentSlide = (currentSlide + 1) % slideImages.length;
}

setInterval(changeSlide, 4000);



// Event 1
var targetDate = new Date('June 23, 2023 00:00:00').getTime();

var countdown = setInterval(function() {

  var now = new Date().getTime();

  var difference = targetDate - now;

  var days = Math.floor(difference / (1000 * 60 * 60 * 24));
  var hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((difference % (1000 * 60)) / 1000);

  document.getElementById('countdown').innerHTML = days + ' Days, ' + hours + ' Hrs, ' + minutes + ' Min, ' + seconds + ' Sec';

  if (difference < 0) {
    clearInterval(countdown);
    document.getElementById('countdown').innerHTML = 'The Event has Started!';
  }
}, 1000);


// Event 2
var targetDate2 = new Date('June 30, 2023 00:00:00').getTime();

var countdown2 = setInterval(function() {

  var now2 = new Date().getTime();

  var difference2 = targetDate2 - now2;

  var days2 = Math.floor(difference2 / (1000 * 60 * 60 * 24));
  var hours2 = Math.floor((difference2 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes2 = Math.floor((difference2 % (1000 * 60 * 60)) / (1000 * 60));
  var seconds2 = Math.floor((difference2 % (1000 * 60)) / 1000);

  document.getElementById('countdown2').innerHTML = days2 + ' Days, ' + hours2 + ' Hrs, ' + minutes2 + ' Min, ' + seconds2 + ' Sec';

  if (difference2 < 0) {
    clearInterval(countdown2);
    document.getElementById('countdown2').innerHTML = 'The Event has Started!';
  }
}, 1000);


// Event 3
var targetDate3 = new Date('August 9, 2023 00:00:00').getTime();

var countdown3 = setInterval(function() {

  var now3 = new Date().getTime();

  var difference3 = targetDate3 - now3;

  var days3 = Math.floor(difference3 / (1000 * 60 * 60 * 24));
  var hours3 = Math.floor((difference3 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes3 = Math.floor((difference3 % (1000 * 60 * 60)) / (1000 * 60));
  var seconds3 = Math.floor((difference3 % (1000 * 60)) / 1000);

  document.getElementById('countdown3').innerHTML = days3 + ' Days, ' + hours3 + ' Hrs, ' + minutes3 + ' Min, ' + seconds3 + ' Sec';

  if (difference3 < 0) {
    clearInterval(countdown3);
    document.getElementById('countdown3').innerHTML = 'The Event has Started!';
  }
}, 1000);



// Event 4
var targetDate4 = new Date('September 11, 2023 00:00:00').getTime();

var countdown4 = setInterval(function() {

  var now4 = new Date().getTime();

  var difference4 = targetDate4 - now4;

  var days4 = Math.floor(difference4 / (1000 * 60 * 60 * 24));
  var hours4 = Math.floor((difference4 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes4 = Math.floor((difference4 % (1000 * 60 * 60)) / (1000 * 60));
  var seconds4 = Math.floor((difference4 % (1000 * 60)) / 1000);

  document.getElementById('countdown4').innerHTML = days4 + ' Days, ' + hours4 + ' Hrs, ' + minutes4 + ' Min, ' + seconds4 + ' Sec';

  if (difference4 < 0) {
    clearInterval(countdown4);
    document.getElementById('countdown4').innerHTML = 'The Event has Started!';
  }
}, 1000);


// Event 5
var targetDate5 = new Date('October 18, 2023 00:00:00').getTime();

var countdown5 = setInterval(function() {

  var now5 = new Date().getTime();

  var difference5 = targetDate5 - now5;

  var days5 = Math.floor(difference5 / (1000 * 60 * 60 * 24));
  var hours5 = Math.floor((difference5 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes5 = Math.floor((difference5 % (1000 * 60 * 60)) / (1000 * 60));
  var seconds5 = Math.floor((difference5 % (1000 * 60)) / 1000);

  document.getElementById('countdown5').innerHTML = days5 + ' Days, ' + hours5 + ' Hrs, ' + minutes5 + ' Min, ' + seconds5 + ' Sec';

  if (difference5 < 0) {
    clearInterval(countdown5);
    document.getElementById('countdown5').innerHTML = 'The Event has Started!';
  }
}, 1000);


// Event 6
var targetDate6 = new Date('October 31, 2023 00:00:00').getTime();

var countdown6 = setInterval(function() {

  var now6 = new Date().getTime();

  var difference6 = targetDate6 - now6;

  var days6 = Math.floor(difference6 / (1000 * 60 * 60 * 24));
  var hours6 = Math.floor((difference6 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes6 = Math.floor((difference6 % (1000 * 60 * 60)) / (1000 * 60));
  var seconds6 = Math.floor((difference6 % (1000 * 60)) / 1000);

  document.getElementById('countdown6').innerHTML = days6 + ' Days, ' + hours6 + ' Hrs, ' + minutes6 + ' Min, ' + seconds6 + ' Sec';

  if (difference6 < 0) {
    clearInterval(countdown6);
    document.getElementById('countdown6').innerHTML = 'The Event has Started!';
  }
}, 1000);


// Event 7
var targetDate7 = new Date('November 20, 2023 00:00:00').getTime();

var countdown7 = setInterval(function() {

  var now7 = new Date().getTime();

  var difference7 = targetDate7 - now7;

  var days7 = Math.floor(difference7 / (1000 * 60 * 60 * 24));
  var hours7 = Math.floor((difference7 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes7 = Math.floor((difference7 % (1000 * 60 * 60)) / (1000 * 60));
  var seconds7 = Math.floor((difference7 % (1000 * 60)) / 1000);

  document.getElementById('countdown7').innerHTML = days7 + ' Days, ' + hours7 + ' Hrs, ' + minutes7 + ' Min, ' + seconds7 + ' Sec';

  if (difference7 < 0) {
    clearInterval(countdown7);
    document.getElementById('countdown7').innerHTML = 'The Event has Started!';
  }
}, 1000);


//Validasi Page Contact Us
function submitForm(event) {
  event.preventDefault(); // Prevent form submission

  // Get form values
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var phone = document.getElementById("phone").value;
  var message = document.getElementById("message").value;
  var contactPreference = document.getElementById("contact-preference").value;

  // Perform validations
  var isValid = true;

  if (name.trim() === "") {
    isValid = false;
    alert("Please enter your name.");
  }

  if (email.trim() === "") {
    isValid = false;
    alert("Please enter your email.");
  }

  if (phone.trim() === "") {
    isValid = false;
    alert("Please enter your phone number.");
  }

  if (message.trim() === "") {
    isValid = false;
    alert("Please enter your message.");
  }

  if (contactPreference === "") {
    isValid = false;
    alert("Please select your preferred contact method.");
  }

  if (isValid) {
    // Perform further actions, such as submitting the form or displaying a success message
    alert("Form submitted successfully!");
    document.getElementById("contact-form").reset(); // Reset the form
  }
}
