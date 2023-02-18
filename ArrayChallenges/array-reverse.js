function reverse(arr) {
    var newArr = [];
    for(var i=0; i<arr.length; i++){
        newArr.unshift(arr[i]);
    }
    return newArr;
}
   
var result = reverse(["a", "b", "c", "d", "e"]);
console.log(result); // we expect back ["e", "d", "c", "b", "a"]
