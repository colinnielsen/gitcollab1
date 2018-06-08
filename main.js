const conorArr = [4, 8, 32, 89]


function multiply(arr1, arr2) {
    return arr1.concat(arr2).reduce(function (a, b) { return a * b; });
}

multiply(conorArr, colinArr)