// Q2. Print following pattern
let pattern = "";
for (let i = 1; i <= 5; i++) {
    for (let j = 5; j >= i; j--) {
        pattern += i + " ";
    }
    pattern += "\n";
}
console.log(pattern);
/* 
output : 
1 1 1 1 1 
2 2 2 2 
3 3 3 
4 4 
5 
*/