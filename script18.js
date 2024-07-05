function ArrayChallenge(arr) {
    // Initialize variables
    let maxArea = 0;
    let stack = [];
    let index = 0;
    let n = arr.length;

    // Traverse through all bars of given heights
    while (index < n) {
        // If this bar is higher than the bar at stack top, push it to the stack
        if (stack.length === 0 || arr[stack[stack.length - 1]] <= arr[index]) {
            stack.push(index);
            index++;
        } else {
            // Pop the top
            let topOfStack = stack.pop();
            // Calculate the area with arr[topOfStack] as the smallest (or shortest) bar
            let height = arr[topOfStack];
            let width = stack.length === 0 ? index : index - stack[stack.length - 1] - 1;
            let area = height * width;
            // Update maxArea, if needed
            maxArea = Math.max(maxArea, area);
        }
    }

    // Now, pop the remaining bars from stack and calculate area with each popped bar as the smallest bar
    while (stack.length > 0) {
        let topOfStack = stack.pop();
        let height = arr[topOfStack];
        let width = stack.length === 0 ? index : index - stack[stack.length - 1] - 1;
        let area = height * width;
        maxArea = Math.max(maxArea, area);
    }

    return maxArea;
}

// Test cases
console.log(ArrayChallenge([2, 1, 3, 4, 1])); // Output should be 6
console.log(ArrayChallenge([2, 2, 2, 2, 2])); // Output should be 10
console.log(ArrayChallenge([6, 2, 5, 4, 5, 1, 6])); // Output should be 12
