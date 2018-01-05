
var i = 1;
var spcnt = 5;
var j, k, p;
var m = 0;
var n = 1;
var x = 1;
var r = 2;

for (i = 1; i <= 6; i++) {

    for (j = spcnt; j > 0; j--) {
        process.stdout.write(" ");


    }


    for (k = 1; k <= i; ++k) {
        var res = (m + k) % 10;
        process.stdout.write('' + res);



    }
    m++;
    spcnt--;
    for (p = n; p > x; p--) {
        var res1 = p % 10;
        process.stdout.write('' + res1);


    }
    if (n > 1) {
        n = r;
        if (n == r) {
            process.stdout.write('' + r);
            r = r + 1;
        }
    }

    n = 2 * p;
    x = x + 1;
    console.log();
}



