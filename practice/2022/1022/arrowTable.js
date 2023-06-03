// input    output
// 2 2      "left"
// 3 1      "right"
// 3 2      "up"

function arrow(a, b) {
    let str = "";
    if (a == 1 && b == 1) {
        str = "right";
    } else if (a == 1 && b != 1) {
        str = b % 2 == 1 ? "right" : "down";
    } else if (b == 1 && a != 1) {
        str = a % 2 == 1 ? "right" : "down";
    } else if (a == b) {
        str = a % 2 == 1 ? "up" : "left";
    } else if (a > b) {
        str = a % 2 == 1 ? "up" : "down";
    } else if (a < b) {
        str = b % 2 == 1 ? "right" : "left";
    }
    console.log(str);
    return str;
}

arrow(2, 2);
arrow(3, 1);
arrow(3, 2);
arrow(100, 100);