export function titik(width, imgData, x, y, r, g, b) {
    let indeks = 4 * (Math.ceil(x) + (Math.ceil(y) * width));
    imgData.data[indeks] = r;
    imgData.data[indeks + 1] = g;
    imgData.data[indeks + 2] = b;
    imgData.data[indeks + 3] = 255;
}

export function dda_line(imgData, x1, y1, x2, y2, r, g, b) {
    var dx = x2 - x1;
    var dy = y2 - y1;

    if (Math.abs(dx) > Math.abs(dy)) {
        // sumbu x
        if (x2 > x1) {
            // ke kanan
            var y = y1;
            for (var x = x1; x < x2; x++) {
                y = y + dy / Math.abs(dx);
                titik(imgData, x, y, r, g, b);
            }
        }
        else {
            // ke kiri
            var y = y1;
            for (var x = x1; x > x2; x--) {
                y = y + dy / Math.abs(dx);
                titik(imgData, x, y, r, g, b);
            }

        }
    }
    else {
        // sumbu y
        if (y2 > y1) {
            // ke kanan
            var x = x1;
            for (var y = y1; y < y2; y++) {
                x = x + dx / Math.abs(dy);
                titik(imgData, x, y, r, g, b);
            }
        }
        else {
            // ke kiri
            var x = x1;
            for (var y = y1; y > y2; y--) {
                x = x + dx / Math.abs(dy);
                titik(imgData, x, y, r, g, b);
            }
        }
    }
}

export function lingkaran(width, imgData, xc, yc, radius, r, g, b) {
    for (let x = xc - radius; x < xc + radius; x++) {

        let y = yc + Math.sqrt(Math.pow(radius, 2) - Math.pow((x - xc), 2))
        titik(width, imgData, x, y, r, g, b)

        y = yc - Math.sqrt(Math.pow(radius, 2) - Math.pow((x - xc), 2))
        titik(width, imgData, x, y, r, g, b)
    }

    for (let x = xc - radius; x < xc + radius; x++) {

        let y = yc + Math.sqrt(Math.pow(radius, 2) - Math.pow((x - xc), 2))
        titik(width, imgData, y, x, r, g, b)

        y = yc - Math.sqrt(Math.pow(radius, 2) - Math.pow((x - xc), 2))
        titik(width, imgData, y, x, r, g, b)
    }
}

export function lingkaran1(width, imgData, xc, yc, radius, r, g, b) {
    for (let theta = 0; theta < Math.PI * 2; theta += 0.01) {
        let x = xc + radius * Math.cos(theta)
        let y = yc + radius * Math.sin(theta)

        titik(width, imgData, x, y, r, g, b)

    }
}

export function lingkaran2(width, imgData, xc, yc, radius, i) {
    let g = 0
    let menit = new Date().getMinutes();

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

        if(g == menit){
            lingkaran1(width, imgData, x, y, 15, 0, 255, 0)
        }
        else{
            lingkaran1(width, imgData, x, y, 15, 0, 0, 0)
        }

        g += 5
    }
}

export function lingkaranJam(width, imgData, xc, yc, radius, i) {
    let g = 0
    let n = new Date().getHours();
    if (n >= 12){
        n -= 12
    }
    for (let theta = -1.59; theta < Math.PI * 2 - 1.59; theta += i) {
        let x = xc + radius * Math.cos(theta)
        let y = yc + radius * Math.sin(theta)

        if(g == n){
            lingkaran1(width, imgData, x, y, 15, 255, 0, 0)
        }
        else{
            lingkaran1(width, imgData, x, y, 15, 0, 0, 0)
        }

        g += 1
        
    }
}