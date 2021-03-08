var canvas = new fabric.Canvas('myCanvas');
var blockHeight = "";
var blockWidth = "";
var playerX = "";
var playerY = "";
var playerObject = "";
var blockImage = "";
function playerUpdate() {
    
    fabric.Image.fromURL("https://i.postimg.cc/zDwfFdYY/player.png", function(Img){
        playerObject=Img;
        playerObject.scaleToWidth(150);
        playerObject.scaleToHeight(140);
        playerObject.set({
            top:playerY,
            left:playerX
        
        });
        canvas.add(playerObject);
    });
}
function newImage(get_image) {
    fabric.Image.fromURL(get_image, function(Img){
        blockImage=Img;
        blockImage.scaleToWidth(blockWidth);
        blockImage.scaleToHeight(blockHeight);
        blockImage.set({
            top:playerY,
            left:playerX
        
        });
        canvas.add(blockImage);
    });
}
window.addEventListener("keydown", my_keydown);
function my_keydown(e)
{
    keyPressed = e.keyCode
    console.log (keyPressed);
    if(e.shiftKey == true && keyPressed == '80')
    {
        console.log("shift and p pressed together");
        blockWidth = blockWidth + 10;
        blockHeight = blockHeight + 10;
        document.getElementById("current_width").innerHTML = blockWidth;
        document.getElementById("current_height").innerHTML = blockHeight;
    }
    if (e.shiftKey && keyPressed == '77')
    {
        console.log("m and shift pressed together");
        blockWidth = blockWidth - 10;
        blockHeight = blockHeight - 10;
        document.getElementById("current_width").innerHTML = blockWidth;
        document.getElementById("current_height").innerHTML = blockHeight;
    }
    if(keyPressed == '70')
    {
        new_image('https://i.postimg.cc/hGnyTPLB/ironman-face.png');
        console.log("f");
    }
    if(keyPressed == '66')
    {
        new_image('https://i.postimg.cc/FscwL6M0/spiderman-body.png');
        console.log("b");
    }
    if(keyPressed == '76')
    {
        new_image('https://i.postimg.cc/KzF6GDqt/hulk-legs.png');
        console.log("l");
    }
    if(keyPressed == '82')
    {
        new_image('https://i.postimg.cc/8s8BGtwS/thor-right-hand.png');
        console.log("r");
    }
    if(keyPressed == '72')
    {
        new_image('https://i.postimg.cc/rw7ckW29/captain-america-left-hand.png');
        console.log("h");
    }
    if(keyPressed == '38')
    {
        up();
        console.log("up");
    }
    if(keyPressed == '40')
    {
        down();
        console.log("down");
    }
    if(keyPressed == '37')
    {
        left();
        console.log("left");
    }
    if(keyPressed == '39')
    {
        right();
        console.log("right");
    }
}
function up()
{
  if(playerY >=0)
  {
    playerY = playerY - blockHeight;
    console.log("block height = " + blockHeight);
    console.log("When Up arrow key is pressed, X =  " + playerX + " , Y = "+playerY);
    canvas.remove(player_object);
    playerUpdate();
  }
}

function down()
{
  if(playerY <=500)
  {
    playerY = playerY + blockHeight;
    console.log("block height = " + blockHeight);
    console.log("When Down arrow key is pressed, X =  " + playerX + " , Y = "+playerY);
    canvas.remove(playerObject);
    playerUpdate();
  }
}

function left()
{
  if(playerX >0)
  {
    playerX = playerX - blockWidth;
    console.log("block width = " + blockWidth);
    console.log("When Left arrow key is pressed, X =  " + playerX + " , Y = "+playerY);
    canvas.remove(playerObject);
    playerUpdate();
  }
}

function right()
{
  if(playerX <=850)
  {
    playerX = playerX + blockWidth;
    console.log("block width = " + blockWidth);
    console.log("When Right arrow key is pressed, X =  " + playerX + " , Y = "+playerY);
    canvas.remove(playerObject);
    playerUpdate();
  }
}
