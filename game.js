const canvas = document.querySelector("#canvas1");
const selectState = document.querySelector("#select-animation");
const cxt = canvas.getContext('2d');

const playerImage = new Image();
playerImage.src = '/images/shadow_dog.png';

const CANVAS_WIDTH = canvas.width = 600;
const CANVAS_HEIGHT = canvas.height = 600;


let maxFramesPerRow = 12;
let maxFramesPerColumn = 10;

let image = { width: 6876, height: 5230 };
let frame = {
    width: image.width / maxFramesPerRow,
    height: image.height / maxFramesPerColumn
};

let staggered = 5;
let stateIndex = 0;
let count = 0;

let animationStates = [
    {
        name: 'idle',
        numberOfFrames: 7,
        framePositions: []
    },
    {
        name: 'jump',
        numberOfFrames: 7,
        framePositions: []
    },
    {
        name: 'fall',
        numberOfFrames: 7,
        framePositions: []
    },
    {
        name: 'run',
        numberOfFrames: 9,
        framePositions: []
    },
    {
        name: 'dizzy',
        numberOfFrames: 11,
        framePositions: []
    },
    {
        name: 'sit',
        numberOfFrames: 5,
        framePositions: []
    },
    {
        name: 'rollOver',
        numberOfFrames: 7,
        framePositions: []
    },
    {
        name: 'bite',
        numberOfFrames: 7,
        framePositions: []
    },
    {
        name: 'ko',
        numberOfFrames: 12,
        framePositions: []
    },
    {
        name: 'getHit',
        numberOfFrames: 5,
        framePositions: []
    }
];

let stateWithIndex = {
    'idle': 0,
    'jump': 1,
    'fall': 2,
    'run': 3,
    'dizzy': 4,
    'sit': 5,
    'rollOver': 6,
    'bite': 7,
    'ko': 8,
    'getHit': 9,
}

selectState.addEventListener('change', (event) => {
    stateIndex = stateWithIndex[event.target.value];
})

animationStates.forEach((animationState, index) => {
    for (let frameNumberX = 0; frameNumberX < animationState.numberOfFrames; frameNumberX++) {
        let framePositionX = frameNumberX * frame.width;
        let framePositionY = index * frame.height;
        animationState.framePositions.push({ x: framePositionX, y: framePositionY });
    }
});


function animation() {
    cxt.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    let animationState = animationStates[stateIndex];
    let framePositionIndex = Math.floor(count / staggered) % (animationState.framePositions.length - 1);
    let xCutPostion = animationState.framePositions[framePositionIndex].x;
    let yCutPostion = animationState.framePositions[framePositionIndex].y;
    cxt.drawImage(playerImage, xCutPostion, yCutPostion, frame.width, frame.height, 0, 0, frame.width, frame.height);
    count++;
    requestAnimationFrame(animation)
}

animation();

