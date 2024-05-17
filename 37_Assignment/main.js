// making a function
function make_shirt(size, printmsg) {
    if (size === void 0) { size = "large"; }
    if (printmsg === void 0) { printmsg = "i love typescript"; }
    console.log("creating a ".concat(size, " shirt with the ").concat(printmsg, " prints on shirt"));
}
//calling a function
make_shirt();
