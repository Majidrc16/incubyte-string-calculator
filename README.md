# String Calculator

A simple string calculator that takes a string of numbers and returns their sum. This project supports various delimiters, including custom ones, and handles edge cases such as negative numbers.

## Features

- Returns `0` for an empty string.
- Returns the number itself for a single number.
- Supports summing two or more comma-separated numbers.
- Handles new lines between numbers as delimiters.
- Supports custom delimiters defined at the start of the string.
- Throws an error when negative numbers are provided.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Majidrc16/incubyte-string-calculator.git

## Running Tests
1. To run the tests for this project, execute the following command:

```bash
npm test

## Usage
1. To use the string calculator, you can call it from a Node.js script or directly in the terminal. Here are some examples:

```bash
const stringCalculator = require('./stringCalculator');
console.log(stringCalculator('1,2,3'));          // Output: 6
console.log(stringCalculator(''));                // Output: 0
console.log(stringCalculator('1\n2,3'));          // Output: 6
console.log(stringCalculator('//;\n1;2'));        // Output: 3
