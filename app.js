var cl = console.log;
// function return type
//if function not defined thats time void is automatically assign 
//but incase future the data change thats time problem is occured thats why "void" use
//return not used in void
//void return undefined
function add(n1, n2) {
    return n1 + n2;
}
cl(add(10, 20));
function sum(n1, n2, resultType) {
    var result;
    if (typeof n1 === "number" && typeof n2 === "number") {
        result = n1 + n2;
    }
    else {
        result = n1.toString() + n2;
    }
    ;
    if (resultType === "as-string") {
        return result.toString();
    }
    ;
    if (resultType === "as-number") {
        return +result;
    }
    ;
}
cl(sum(500, 600, "as-string"));
cl(sum(500, "600", "as-number"));
