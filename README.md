Animation Canvas:
This project provides a simple HTML5 canvas animation using JavaScript. It allows users to select different animations from a dropdown menu, which are then displayed on the canvas.

Files:
  - index.html: The main HTML file that sets up the canvas and dropdown menu.
  - game.js: The JavaScript file responsible for animation logic and rendering.

Overview:
index.html
This file sets up the basic HTML structure and includes:
  - A dropdown menu to select different animations.
  - A canvas element where the animation is rendered.

game.js:
This file contains the JavaScript code that handles the animation logic. It performs the following tasks:
  1. Canvas Setup: Initializes the canvas and its context.
  2. Image Loading: Loads the player image that contains frames for various animations.
  3. Animation States: Defines different animation states, each with a specific number of frames.
  4. Frame Calculation: Computes the positions of each frame within the image.
  5. Animation Rendering: Clears the canvas and draws the appropriate frame based on the selected animation and elapsed time.  
  6. Event Listener: Updates the animation state when the user selects a different option from the dropdown menu.

Usage:
  1. Open index.html: Open this file in a web browser to view the animation interface.
  2. Select Animation: Choose an animation from the dropdown menu to see it displayed on the canvas.

Customization:
  - Animation States: Modify the animationStates array in game.js to add or adjust animation states and frame counts.
  - Image Source: Update the playerImage.src path in game.js to use a different image with the same frame layout.
  - Canvas Size: Adjust CANVAS_WIDTH and CANVAS_HEIGHT to change the size of the canvas.

Requirements:
  - A modern web browser that supports HTML5 and JavaScript.
  - The playerImage should be a sprite sheet with properly aligned frames for the animations.
