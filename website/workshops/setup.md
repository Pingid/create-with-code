# Setting up

##### Environment
First download [atom](https://atom.io) this is a text editor but unlike textEdit on the mac this adds colors to your code making it easier to read. There is no other effective difference between the two you are welcome to write your code in textEdit but it will be harder to read.

We will be using a library called [p5](http://p5js.org). This is a bunch of tools that will mean we can write a lot less code by calling the functions already declared in p5. You can download p5 [here](https://github.com/processing/p5.js/releases/download/0.5.4/p5.js) and read more about it at [p5js.org](http://p5js.org).


##### Files
Create a folder somewhere you can remember on you computer and give it a name, I recommend your desktop. Open atom, under the "file" menu, in the top left corner of the screen, click on "open", then navigate to the folder you created. Select the folder then click open in the bottom left corner of the window.

Navigate back to the "file" menu and select "new file", a new empty window should open where you should be able to type. When you type it will just look like plain text and in order to change this we need to tell atom what type of file we are typing in. Navigate back to the "file" menu and click "save", make sure you are saving the file inside of your project folder and give it the name ```index.html```. Repeat the previous process for a new file but this time save it as ```script.js```. We also need to copy the p5.js file that we downloaded into our project folder.

![alt tag](../assets/setup-files.png)

##### Adding code
The index.html is the file that your browser (safari, chrome) reads and this is where we link in are javascript code files "script.js" and "p5.js". The html file has a bunch of what we call boilerplate essentially code that has to be in every file. Don't worry about remembering this you can just copy it from bellow.

```html
<!DOCTYPE html>
<html>
  <head>
    <!-- The title appears on the browser tab for the site -->
    <title>Boilerplate</title>
    <!-- Links to the javascript files. Take note of the fact the p5 file is above the script file this is because we need that loaded first since we are using it inside of the script file -->
    <script rel="text/javascript" src="p5.js"></script>
    <script rel="text/javascript" src="script.js"></script>
  </head>
</html>
```

Next we need to add our code to script.js. First I would recommend checking if both your script.js and p5.js files are linked you can do this by going into script.js and writing ```console.log(p5)```. When you open index.html in the browser check the console if there is text a bunch of text then everything is working if there is an error then p5.js isn't loading if there is nothing then script.js isn't loading. The issue in both of these cases is in the html either you have made a mistake writing the html or you haven't given the same name as the file name. If everything is working fine you can add the setup and draw functions.

```javascript
// Setup get called when before everything
// I have created a new canvas which is the width and height of the window
function setup() {
  createCanvas(innerWidth, innerHeight);
}
// gets called repeatedly approximately 60 times a second
// Drawing an ellipse of radius 80px at the current mouse position
function draw() {
  ellipse(mouseX, mouseY, 80);
}
```

You are now ready to go!
