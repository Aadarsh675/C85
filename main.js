canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
car1_width = 120;
car1_height = 70;
car1_image = "car1.png";
car1_x = 10;
car1_y = 10;

car2_width = 120;
car2_height = 70;
car2_image = "car2.png";
car2_x = 10;
car2_y = 100;

background_image = "racing.jpg";
function add(){
    background_imgTag = new Image();
    background_imgTag.onload = uploadbackground;
    background_imgTag.src = background_image;

    car1_imgTag = new Image();
    car1_imgTag.onload = uploadcar1;
    car1_imgTag.src = car1_image;

    car2_imgTag = new Image();
    car2_imgTag.onload = uploadcar2;
    car2_imgTag.src = car2_image;
}
function uploadbackground(){
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}
function uploadcar1(){
    ctx.drawImage(car1_imgTag, car1_x, car1_y, car1_width, car1_height);
}
function uploadcar2(){
    ctx.drawImage(car2_imgTag, car2_x, car2_y, car2_width, car2_height);
}
window.addEventListener("keydown", my_keydown);
function my_keydown(e){
    keypress = e.keyCode;
    if (keypress == '38'){
        up1();
    }
    if (keypress == '40'){
        down1();
    }
    if (keypress == '37'){
        left1();
    }
    if (keypress == '39'){
        right1();
    }
    if (keypress == '87'){
        up2();
    }
    if (keypress == '83'){
        down2();
    }
    if (keypress == '65'){
        left2();
    }
    if (keypress == '68'){
        right2();
    }
    if(car1_x > 700){
        console.log("car1 Won");
        document.getElementById("game_status").innerHTML = "Car 1 Won!!";
    }
    if(car2_x > 700){
        console.log("car2 Won");
        document.getElementById("game_status").innerHTML = "Car 2 Won!!";
    }
}
function up1(){
    if (car1_y >= 0){
        console.log("When up arrow is pressed, x = " + car1_x + " | y = " + car1_y);
        car1_y = car1_y - 10;
        uploadbackground();
        uploadcar1();
        uploadcar2();
    }
}
function down1(){
    if (car1_y <= 500){
        console.log("When down arrow is pressed, x = " + car1_x + " | y = " + car1_y);
        car1_y = car1_y + 10;
        uploadbackground();
        uploadcar1();
        uploadcar2();
    }
}
function left1(){
    if (car1_x >= 0){
        console.log("When left arrow is pressed, x = " + car1_x + " | y = " + car1_y);
        car1_x = car1_x - 10;
        uploadbackground();
        uploadcar1();
        uploadcar2();
    }
}
function right1(){
    if (car1_x <= 700){
        console.log("When right arrow is pressed, x = " + car1_x + " | y = " + car1_y);
        car1_x = car1_x + 10;
        uploadbackground();
        uploadcar1();
        uploadcar2();
    }
}
function up2(){
    if (car2_y >= 0){
        console.log("When up arrow is pressed, x = " + car2_x + " | y = " + car2_y);
        car2_y = car2_y - 10;
        uploadbackground();
        uploadcar1();
        uploadcar2();
    }
}
function down2(){
    if (car2_y <= 500){
        console.log("When down arrow is pressed, x = " + car2_x + " | y = " + car2_y);
        car2_y = car2_y + 10;
        uploadbackground();
        uploadcar1();
        uploadcar2();
    }
}
function left2(){
    if (car2_x >= 0){
        console.log("When left arrow is pressed, x = " + car2_x + " | y = " + car2_y);
        car2_x = car2_x - 10;
        uploadbackground();
        uploadcar1();
        uploadcar2();
    }
}
function right2(){
    if (car2_x <= 700){
        console.log("When right arrow is pressed, x = " + car2_x + " | y = " + car2_y);
        car2_x = car2_x + 10;
        uploadbackground();
        uploadcar1();
        uploadcar2();
    }
}