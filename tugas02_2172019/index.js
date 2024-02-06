var canvasKita;

import * as LibSaya from "./script.js"

canvasKita = document.querySelector("#canvas1");

var ctx;
ctx = canvasKita.getContext("2d");
var imageDataSaya = ctx.getImageData(0,0,canvasKita.width, canvasKita.height);

LibSaya.lingkaran_polar(canvasKita.width,imageDataSaya, 200,200,180, 0,0,0)
LibSaya.lingkaran_polar(canvasKita.width,imageDataSaya, 200,200,120, 0,0,0)

let segi_duabelas = 0.53
let segi_delapan = 0.79
let segi_enam = 1.05
let segi_lima = 1.26
let segi_empat = 1.57

LibSaya.lingkaran_polar_modifikasi_jam(canvasKita.width,imageDataSaya, 200,200,180, segi_duabelas)
LibSaya.lingkaran_polar_modifikasi_menit(canvasKita.width,imageDataSaya, 200,200,120, segi_duabelas)

ctx.putImageData(imageDataSaya, 0,0);