function add(numbers) {
    if (numbers === "") return 0;

    let delimiter = /,|\n/; // Default delimiters (comma or newline)

    // Check for custom delimiter
    if (numbers.startsWith("//")) {
        const delimiterSection = numbers.match(/^\/\/(.+)\n/);
        delimiter = new RegExp(delimiterSection[1]);
        numbers = numbers.slice(delimiterSection[0].length);
    }

    const nums = numbers.split(delimiter).map(Number);

    // Find negatives and throw an error if any are found
    const negatives = nums.filter(num => num < 0);
    if (negatives.length > 0) {
        throw new Error(`Negative numbers not allowed: ${negatives.join(", ")}`);
    }

    return nums.reduce((sum, num) => sum + num, 0);
}

module.exports = { add };
