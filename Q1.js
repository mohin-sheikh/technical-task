// Q1. Print following pattern
for (let i = 1; i < 10; i++) {
    if (i !== 2 && i % 2 === 0)  continue;
    let row = "";
    for (let j = 1; j <= i; j++) {
        let temp = j
        if (j % 2 === 0) {
            temp = " # "
        }
        row = row + temp;
    }
    console.log(row)
}

/* 
output : 
1
1 # 
1 # 3
1 # 3 # 5
1 # 3 # 5 # 7
1 # 3 # 5 # 7 # 9
*/