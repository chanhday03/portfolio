function add( a , b , callback ){
    var result = a + b;
    callback(result);
}
function printResult(result){
    console.log( " Ket qua la : " + result);
}
add(5,10,printResult);