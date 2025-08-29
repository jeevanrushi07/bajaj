// Test file for BFHL API
// Run with: node test.js

const testCases = [
  {
    name: "Example A",
    input: {
      data: ["a", "1", "334", "4", "R", "$"]
    },
    expected: {
      is_success: true,
      user_id: "jeevan_rushi_01062004",
      email: "jeevanrushicreations584@gmail.com",
      roll_number: "ABCD123",
      odd_numbers: ["1"],
      even_numbers: ["334", "4"],
      alphabets: ["A", "R"],
      special_characters: ["$"],
      sum: "339",
      concat_string: "Ra"
    }
  },
  {
    name: "Example B",
    input: {
      data: ["2", "a", "y", "4", "&", "-", "*", "5", "92", "b"]
    },
    expected: {
      is_success: true,
      user_id: "jeevan_rushi_01062004",
      email: "jeevanrushicreations584@gmail.com",
      roll_number: "ABCD123",
      odd_numbers: ["5"],
      even_numbers: ["2", "4", "92"],
      alphabets: ["A", "Y", "B"],
      special_characters: ["&", "-", "*"],
      sum: "103",
      concat_string: "ByA"
    }
  },
  {
    name: "Example C",
    input: {
      data: ["A", "ABcD", "DOE"]
    },
    expected: {
      is_success: true,
      user_id: "jeevan_rushi_01062004",
      email: "jeevanrushicreations584@gmail.com",
      roll_number: "ABCD123",
      odd_numbers: [],
      even_numbers: [],
      alphabets: ["A", "ABCD", "DOE"],
      special_characters: [],
      sum: "0",
      concat_string: "EoDdCbAa"
    }
  }
];

// Function to test the API logic locally
function testAPILogic(input) {
  const { data } = input;
  
  const evenNumbers = [];
  const oddNumbers = [];
  const alphabets = [];
  const specialCharacters = [];
  let sum = 0;

  data.forEach(item => {
    const str = String(item);
    
    if (!isNaN(str) && str.trim() !== '') {
      const num = parseInt(str);
      sum += num;
      
      if (num % 2 === 0) {
        evenNumbers.push(str);
      } else {
        oddNumbers.push(str);
      }
    }
    else if (/^[a-zA-Z]+$/.test(str)) {
      alphabets.push(str.toUpperCase());
    }
    else if (str.length === 1 && /[^a-zA-Z0-9\s]/.test(str)) {
      specialCharacters.push(str);
    }
  });

  const allAlphabets = data
    .filter(item => /^[a-zA-Z]+$/.test(String(item)))
    .join('')
    .split('')
    .reverse()
    .map((char, index) => {
      return index % 2 === 0 ? char.toUpperCase() : char.toLowerCase();
    })
    .join('');

  return {
    is_success: true,
    user_id: "jeevan_rushi_01062004",
    email: "jeevanrushicreations584@gmail.com",
    roll_number: "ABCD123",
    odd_numbers: oddNumbers,
    even_numbers: evenNumbers,
    alphabets: alphabets,
    special_characters: specialCharacters,
    sum: String(sum),
    concat_string: allAlphabets
  };
}

// Run tests
console.log("🧪 Testing BFHL API Logic...\n");

testCases.forEach((testCase, index) => {
  console.log(`Test ${index + 1}: ${testCase.name}`);
  console.log(`Input: ${JSON.stringify(testCase.input)}`);
  
  const result = testAPILogic(testCase.input);
  
  console.log(`Output: ${JSON.stringify(result, null, 2)}`);
  
  // Check if results match expected
  const isSuccess = result.is_success === testCase.expected.is_success;
  const isUserIdMatch = result.user_id === testCase.expected.user_id;
  const isSumMatch = result.sum === testCase.expected.sum;
  const isConcatMatch = result.concat_string === testCase.expected.concat_string;
  
  console.log(`✅ Success: ${isSuccess && isUserIdMatch && isSumMatch && isConcatMatch ? 'PASS' : 'FAIL'}`);
  console.log("─".repeat(50) + "\n");
});

console.log("🎉 All tests completed!");
