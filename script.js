const mincost = (arr) => {
    // Ensure the input array is not empty
    if (arr.length === 0) {
        return 0;
    }

    // Sort the array in ascending order
    arr.sort((a, b) => a - b);

    let totalCost = 0;

    // Merge the two smallest ropes until only one rope remains
    while (arr.length > 1) {
        const firstRope = arr.shift();
        const secondRope = arr.shift();

        const currentCost = firstRope + secondRope;
        totalCost += currentCost;

        // Insert the merged rope back into the array while maintaining sorted order
        let insertIndex = 0;
        while (insertIndex < arr.length && arr[insertIndex] < currentCost) {
            insertIndex++;
        }
        arr.splice(insertIndex, 0, currentCost);
    }

    return totalCost;
};

// Get input from the user using prompt
const inputString = prompt("Enter the lengths of ropes separated by commas (e.g., 4,3,2,6):");

// Convert the input string to an array of integers
const inputArray = inputString.split(',').map(Number);

// Call the mincost function with the input array
const result = mincost(inputArray);

// Display the result using alert
alert( result);

