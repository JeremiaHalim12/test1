

// fungsi gambar titik
export function gbr_titik(width, imageDataTemp, x, y, r, g, b) {
    var index;
    index = 4 * (Math.ceil(x) + (Math.ceil(y) * width));
    imageDataTemp.data[index] = r;
    imageDataTemp.data[index + 1] = g;
    imageDataTemp.data[index + 2] = b;
    imageDataTemp.data[index + 3] = 255;
}

// fungsi dda line
export function dda_line(width, imageData, x1, y1, x2, y2, r, g, b) {

    var dx = x2 - x1; // bisa positif dan negatif

    var dy = y2 - y1; // bisa positif dan negarif

    if (Math.abs(dx) > Math.abs(dy)) {
        // akan jalan di x
        if (x2 > x1) {
            //jalan ke kanan
            y = y1
            for (var x = x1; x < x2; x++) {
                y = y + dy / Math.abs(dx) // 1/m
                gbr_titik(width, imageData, x, y, r, g, b);
            }
        }
        else {
            //jalan ke kiri
            y = y1
            for (var x = x1; x > x2; x--) {
                y = y + dy / Math.abs(dx) // 1/m
                gbr_titik(width, imageData, x, y, r, g, b);
            }
        }

    }
    else {
        // akan jalan di y
        if (y2 > y1) {
            //jalan ke kanan
            x = x1
            for (var y = y1; y < y2; y++) {
                x = x + dx / Math.abs(dy) // m
                gbr_titik(width, imageData, x, y, r, g, b);
            }
        }
        else {
            //jalan ke kiri
            x = x1
            for (var y = y1; y > y2; y--) {
                x = x + dx / Math.abs(dy) // m
                gbr_titik(width, imageData, x, y, r, g, b);
            }
        }
    }

}

export function gbr_lingkaran(width, imageDataTemp, xc, yc, radius, r, g, b) {

    for (let x = xc - radius; x < xc + radius; x++) {

        let y = yc + Math.sqrt(Math.pow(radius, 2) - Math.pow((x - xc), 2)) // akar dari r2 - (x-xc)2
        gbr_titik(width, imageDataTemp, x, y, r, g, b)

        y = yc - Math.sqrt(Math.pow(radius, 2) - Math.pow((x - xc), 2)) // akar dari r2 - (x-xc)2
        gbr_titik(width, imageDataTemp, x, y, r, g, b)
    }

    for (let x = xc - radius; x < xc + radius; x++) {

        let y = yc + Math.sqrt(Math.pow(radius, 2) - Math.pow((x - xc), 2)) // akar dari r2 - (x-xc)2
        gbr_titik(width, imageDataTemp, y, x, r, g, b)

        y = yc - Math.sqrt(Math.pow(radius, 2) - Math.pow((x - xc), 2)) // akar dari r2 - (x-xc)2
        gbr_titik(width, imageDataTemp, y, x, r, g, b)
    }
}

export function lingkaran_polar(width, imageDataTemp, xc, yc, radius, r, g, b) {
    for (let theta = 0; theta < Math.PI * 2; theta += 0.01) {
        let x = xc + radius * Math.cos(theta)
        let y = yc + radius * Math.sin(theta)

        gbr_titik(width, imageDataTemp, x, y, r, g, b)

    }
}

export function lingkaran_polar_modifikasi_jam(width, imageDataTemp, xc, yc, radius, i) {
    let itung = 0
    let jam = new Date().getHours();
    if (jam >= 12){
        jam -= 12
    }
    for (let theta = -1.59; theta < Math.PI * 2 - 1.59; theta += i) {
        let x = xc + radius * Math.cos(theta)
        let y = yc + radius * Math.sin(theta)

        if(itung == jam){
            lingkaran_polar(width, imageDataTemp, x, y, 15, 255, 0, 0)
        }
        else{
            lingkaran_polar(width, imageDataTemp, x, y, 15, 0, 0, 0)
        }

        itung += 1
        
    }
}

export function lingkaran_polar_modifikasi_menit(width, imageDataTemp, xc, yc, radius, i) {
    let itung = 0
    let menit = new Date().getMinutes();

    console.log(menit)

    if(menit > 0 && menit < 5){
        menit = 0
    }
    else if(menit > 5 && menit < 10){
        menit = 5
    }
    else if(menit > 10 && menit < 15){
        menit = 10
    }
    else if(menit > 15 && menit < 20){
        menit = 15
    }
    else if(menit > 20 && menit < 25){
        menit = 20
    }
    else if(menit > 25 && menit < 30){
        menit = 25
    }
    else if(menit > 30 && menit < 35){
        menit = 30
    }
    else if(menit > 35 && menit < 40){
        menit = 35
    }
    else if(menit > 40 && menit < 45){
        menit = 40
    }
    else if(menit > 45 && menit < 50){
        menit = 45
    }
    else if(menit > 50 && menit < 55){
        menit = 50
    }
    else if(menit > 55 && menit < 60){
        menit = 55
    }


    for (let theta = -1.59; theta < Math.PI * 2 - 1.59; theta += i) {
        let x = xc + radius * Math.cos(theta)
        let y = yc + radius * Math.sin(theta)

        if(itung == menit){
            lingkaran_polar(width, imageDataTemp, x, y, 15, 0, 255, 0)
        }
        else{
            lingkaran_polar(width, imageDataTemp, x, y, 15, 0, 0, 0)
        }

        itung+= 5
    }
}

export function lingkaran_polar_segi_banyak(width, imageDataTemp, xc, yc, radius, r, g, b, i) {
    for (let theta = 0; theta < Math.PI * 2; theta += i) {
        let x1 = xc + radius * Math.cos(theta)
        let y1 = yc + radius * Math.sin(theta)
        
        let x2 = xc + radius * Math.cos(theta+i)
        let y2 = yc + radius * Math.sin(theta+i)

        dda_line(width, imageDataTemp, x1, y1, x2, y2, r, g, b)
    }
}

export function ellipse_polar(width, imageDataTemp, xc, yc, radiusX, radiusY, r, g, b) {
    for (let theta = 0; theta < Math.PI * 2; theta += 0.01) {
        let x = xc + radiusX * Math.cos(theta)
        let y = yc + radiusY * Math.sin(theta)

        gbr_titik(width, imageDataTemp, x, y, r, g, b)

    }
}