// CI587 Web-based Game Development, Lynx Star Button
// Main.js - For calling configuring Phaser
// Started: 20th Oct 2022

// Global variables ------------------------------------------------------------------------------------------------------------------------------------------
const GAMEHEIGHT = 500;
const GAMEWIDTH = 800;

// Phaser 3 set-up -------------------------------------------------------------------------------------------------------------------------------------------
let config = {
    type: Phaser.AUTO,
    width: GAMEWIDTH,
    height: GAMEHEIGHT,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: {
                y: 200
            },
            debug: false
        }
    },
    scene: [Scene1, Scene2]
}

let game = new Phaser.Game(config);

var player_doll;
var slinky_dog;
var slinky_butt;

var L1Butt;
var L2Butt;
var L3Butt;
var L1Rank;
var L2Rank;
var L3Rank;
var title_grp;

var jumpForce = -150;
let walking = 0;
let level = 0;
let bone = false;
let boneGiven = false;
let back = false;
let bigJump = false;

let endLvlX = 0;
let endLvlY = 0;
let startX;
let startY;
let wpNum = 0;

let startTime = 0;
let L1Score;
let L2Score;
let L3Score;

var scene;
var music;
var soundEff;