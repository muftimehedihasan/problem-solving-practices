function minimize() {
    // Reading input using `require('fs')` module in Node.js
    const input = require('fs').readFileSync('/dev/stdin', 'utf8');
    const lines = input.trim().split('\n');
    
    // The first line contains the number of test cases
    const t = parseInt(lines[0]);

    // Loop through each test case
    for (let i = 1; i <= t; i++) {
        const [a, b] = lines[i].split(' ').map(Number);
        
        // Calculate the minimum value for (c−a) + (b−c) which is simply b−a
        const result = b - a;

        // Output the result for each test case
        console.log(result);
    }
}

// Call the function to execute
minimize();
