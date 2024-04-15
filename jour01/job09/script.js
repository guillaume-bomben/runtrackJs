function tri(numbers,order) {
    if (order == "asc") {
        numbers.sort(function(a, b){return a - b});
    }
    else if (order == "desc") {
        numbers.sort(function(a, b){return b - a});
    }
    else {
        console.log("Error: order must be 'asc' or 'desc'");
    }
    console.log(JSON.stringify(numbers));
}

tri([3, 2, 5, 4, 1], "asc"); // [1, 2, 3, 4, 5]
tri([3, 2, 5, 4, 1], "desc"); // [5, 4, 3, 2, 1]