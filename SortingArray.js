const Num = [2, 4, 7, 3, 9, 5, 1];
console.log("THE ARRAY IS:[", Num.join(","), "]");
Num.sort((a, b) => b - a);
console.log("AFTER SORTING ARRAY IS: [", Num.join(","), "]");
