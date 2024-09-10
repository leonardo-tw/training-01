import { drawSource } from "./source";
import { drawResult } from "./result";
import { drawTarget } from "./target";

export let images = [];

export let source;
export let target;
export let result;

export let comp;

export let artboard;

export let buffer;
export let currImage;

export const POSTER_W = 580;
export const POSTER_H = 810;

export let TILES_X = POSTER_W / 5;
export let TILES_Y = POSTER_H / 5;

export let sx, sy, sw, sh, dx, dy, dw, dh;

export let scalar = 1;

export let offsetX = 0;
export let offsetY = 0;

export let coutoutW = 30;

export let threshold = 150;

export function preload() {
  images[0] = loadImage('1.jpg');
  images[1] = loadImage('2.jpg');
  images[2] = loadImage('3.jpg');
  images[3] = loadImage('4.jpg');
  images[4] = loadImage('5.jpg');
}

export function setup() {
  createCanvas(1740, 810);
  
  source = createGraphics(POSTER_W, POSTER_H);
  target = createGraphics(POSTER_W, POSTER_H);
  result = createGraphics(POSTER_W, POSTER_H); 
  artboard = createGraphics(900, 900);
  
  comp = createGraphics(POSTER_W, POSTER_H);

  currImage = images[int(random(images.length))];
}

export function draw() {
  background('#f1f1f1');
  drawSource();
  drawTarget();
  drawResult();

  image(source, 0, 0);
  image(target, POSTER_W, 0);
  image(result, POSTER_W + POSTER_W, 0);
  noFill();
  stroke('#00ff00');
  strokeWeight(3);
  
  drawArtboard();

  rect(mouseX, mouseY, sw, sh);
  rect(mouseX + POSTER_W, mouseY, sw, sh);
  
  //render();
}