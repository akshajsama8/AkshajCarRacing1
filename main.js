canvas = document.getElementById('myCanvas'); 
ctx = canvas.getContext("2d"); 
car_width = 100; 
car_height = 90; 
background_image = "mars.jpg"; 
car_image = "rover.png" 
car_x = 10; 
car_y = 10;

car2_width = 100; 
car2_height = 90; 
car2_image = "rover2.png" 
car2_x = 10; 
car2_y = 30;
background_image = "https://i.postimg.cc/bv5d35nK/racing.jpg";

function add() { 
    background_imgTag = new Image(); 
    //defining a variable with a new image
     background_imgTag.onload = uploadBackground; 
     // setting a function, onloading this variable 
     background_imgTag.src = background_image; 
     // load image 
     car_imgTag = new Image(); 
     //defining a variable with a new image 
     car_imgTag.onload = uploadcar; 
     // setting a function, onloading this variable 
     car_imgTag.src = car_image; 
     //load image
     car2_imgTag = new Image(); 
     //defining a variable with a new image 
     car2_imgTag.onload = uploadcar; 
     // setting a function, onloading this variable 
     car2_imgTag.src = car2_image; 
     //load image
} 
function uploadBackground() { 
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height); 
} 
function uploadcar() { 
    ctx.drawImage(car_imgTag, car_x, car_y, car_width, car_height); 
}
function uploadcar2() { 
    ctx.drawImage(car2_imgTag, car2_x, car2_y, car2_width, car2_height); 
}
window.addEventListener("keydown", my_keydown); 
function my_keydown(e) { 
    keyPressed = e.keyCode; 
    console.log(keyPressed); 
    if(keyPressed == '38') { 
        carUp(); 
        console.log("Car Up"); 
    } 
    if(keyPressed == '40') { 
        carDown(); 
        console.log("Car Down"); 
    } 
    if(keyPressed == '37') { 
        carLeft(); 
        console.log("Car Left"); 
    } 
    if(keyPressed == '39') { 
        carRight(); 
        console.log("Car Right"); 
    } 

    if(keyPressed == '87') { 
        car2Up(); 
        console.log("Car 2 Up"); 
    } 
    if(keyPressed == '83') { 
        car2Down(); 
        console.log("Car 2 Down"); 
    } 
    if(keyPressed == '65') { 
        car2Left(); 
        console.log("Car 2 Left"); 
    } 
    if(keyPressed == '68') { 
        car2Right(); 
        console.log("Car 2 Right"); 
    } 
//Winning Code 

if(car_x > 700){
    console.log("White Car Won!");
    document.getElementById('game-status').innerHTML="White Car Won!";
}
else if(car2_x > 700){
    console.log("Red Car Won!");
    document.getElementById('game-status').innerHTML="Red Car Won!"
}


}
function carUp() { 
    if(car_y >=0) { 
        car_y = car_y - 10; 
        console.log("When up arrow is pressed, x = " + car_x + " | y = " +car_y); 
        uploadBackground(); 
        uploadcar(); 
        uploadcar2(); 
    } 
} 
function carDown() { 
    if(car_y <=500) { 
        car_y =car_y+ 10; 
        console.log("When down arrow is pressed, x = " + car_x + " | y = " +car_y); 
        uploadBackground(); 
        uploadcar(); 
        uploadcar2(); 
    } 
}
function carLeft() { 
    if(car_x >= 0) { 
        car_x =car_x - 10; 
        console.log("When left arrow is pressed, x = " + car_x + " | y = " +car_y); 
        uploadBackground(); 
        uploadcar(); 
        uploadcar2(); 
    } 
} 
function carRight() { 
    if(car_x <= 700) { 
        car_x =car_x + 10; 
        console.log("When right arrow is pressed, x = " + car_x + " | y = " +car_y); 
        uploadBackground(); 
        uploadcar(); 
        uploadcar2(); 
    } 
}

function car2Up() { 
    if(car2_y >=0) { 
        car2_y = car2_y - 10; 
        console.log("When right arrow is pressed, x = " + car2_x + " | y = " +car2_y); 
        uploadBackground(); 
        uploadcar(); 
        uploadcar2(); 
    } 
}
function car2Down() { 
    if(car2_y <=500) { 
        car2_y =car2_y+ 10; 
        console.log("When right arrow is pressed, x = " + car2_x + " | y = " +car2_y); 
        uploadBackground(); 
        uploadcar(); 
        uploadcar2(); 
    } 
}
function car2Left() { 
    if(car2_x >= 0) { 
        car2_x =car2_x - 10; 
        console.log("When right arrow is pressed, x = " + car2_x + " | y = " +car2_y); 
        uploadBackground(); 
        uploadcar(); 
        uploadcar2(); 
    } 
}
function car2Right() { 
    if(car2_x <= 700) { 
        car2_x =car2_x + 10; 
        console.log("When right arrow is pressed, x = " + car2_x + " | y = " +car2_y); 
        uploadBackground(); 
        uploadcar(); 
        uploadcar2(); 
    } 
}

