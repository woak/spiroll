 // Authors: Avi Block and Teddy Laurita
 // Date: 11/28/16
 // Usernames: ablock03
 // 			tlauri02
 // Emails: theodore.laurita@tuft.edu
 // 		 avram.block@tufts.edu
var body = document.body;
var html = html = document.documentElement;
prevAngle = 0;
curAngle = 0;
var mousePosition = {x:0, y:0};
active = false;
var canvas = document.createElement('canvas');
canvas.setAttribute("id", 'canvas');
var context = canvas.getContext('2d');


canvas.width  = Math.max(body.scrollWidth, body.offsetWidth,
                       html.clientWidth, html.scrollWidth, html.offsetWidth);
// calculate the height of window including scroll, different depending on the
// browser
canvas.height = Math.max(body.scrollHeight, body.offsetHeight,
                       html.clientHeight, html.scrollHeight, html.offsetHeight);

document.body.appendChild(canvas);


document.addEventListener('mousemove', function(mouseMoveEvent){
   mousePosition.x = mouseMoveEvent.clientX;
   mousePosition.y = mouseMoveEvent.clientY;
   if (active) AngleChange();
 }, false);

 document.addEventListener('keydown', function(){
 	setUp();
 });

 document.addEventListener('keyup', function(){
         if (event.keyCode == 17)
                quit();
 });

 function setUp() {
 	if (event.keyCode == 17) {
 		origX = mousePosition.x;
 		origY = mousePosition.y;
 		spotY = origY;
                spotX = origX
 		active = true;
 		draw();
 	}
 }


 function AngleChange() {
 	prevAngle = curAngle;
 	curAngle = Math.atan((mousePosition.y - origY) / (mousePosition.x - origX));
 	if (curAngle > prevAngle) {
 		if (spotY <= (document.body.offsetHeight - 10)){
 			window.scrollBy(0,10);
 			spotY = window.scrollY + origY;
                        spotX = window.scrollX + origX;
 		}
 	}
 	if (prevAngle > curAngle) {
 		if (spotY >= 10){
 			window.scrollBy(0,-10);
 			spotY = window.scrollY + origY;
                        spotX = window.scrollX + origX;
 		}
 	}
 	draw();
 }

 function draw() {
        canvas.height = Math.max(body.scrollHeight, body.offsetHeight,
                        html.clientHeight, html.scrollHeight, html.offsetHeight);
 	context.clearRect(0, 0, canvas.width, canvas.height);
 	context.fillStyle = "#FF69B4";
 	context.fillRect(spotX, spotY - 15, 2, 10);
 	context.fillRect(spotX, spotY + 5, 2, 10);
 	context.fillRect(spotX - 15, spotY, 10, 2);
 	context.fillRect(spotX + 5, spotY, 10, 2);
 	context.fillRect(spotX, spotY, 1, 1);
 }

 function quit() {
 	context.clearRect(0, 0, canvas.width, canvas.height);
 	origX = 0;
 	orgiY = 0;
 	spotY = 0;
        spotX = 0;
 	active = false;
 }
