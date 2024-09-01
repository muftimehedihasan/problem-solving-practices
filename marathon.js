function marathon(testCases){
    for(let i = 0; i < testCase.length; i++){
        const[a, b, c, d] = testCases[i];
        let count = 0;

        if (b > a) count++;
        if (c > a) count++;
        if (d > a) count++;

        console.log(count)
    }

}