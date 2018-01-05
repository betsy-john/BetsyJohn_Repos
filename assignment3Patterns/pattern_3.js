var i = 0;
var k = 0;
var m = 0;
var rows = 5;

for (i = 1; i <= rows; i++) {
    for (k = 1; k <= (rows - i); k++) {
        process.stdout.write("  ");

    }
    while (m != (2 * i - 1)) {
        process.stdout.write("1 ");
        m++;
    }
    m = 0;
    console.log();
}