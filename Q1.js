// Q1. Print following pattern
for (let i = 1; i <= 7; i += 2) {
    let row = "";
    for (let j = 1; j <= i; j += 2) {
        row += j + " # ";
    }
    console.log(row);
};
/* 
output : 
1 # 
1 # 3 # 
1 # 3 # 5 # 
1 # 3 # 5 # 7 # 
*/