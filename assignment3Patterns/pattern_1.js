
var i = 1;
var r = 5;
var k = 1;
var j = 0;
var num = 1;
for (i = 0; i < r; i++) {
    for (k = r; k > i; k--) {
        process.stdout.write(" ");

    }
    num = 1;
    for (j = 0; j <= i; j++) {
        process.stdout.write(num + " ");
        num = num * (i - j) / (j + 1);

    }
    console.log();
}


