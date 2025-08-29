function handler(req, res) {
  if (req.method === "POST") {
    try {
      const { data } = req.body;

      if (!data || !Array.isArray(data)) {
        return res.status(400).json({
          is_success: false,
          error: "Invalid input: data must be an array"
        });
      }

      // Separate different types of data
      const evenNumbers = [];
      const oddNumbers = [];
      const alphabets = [];
      const specialCharacters = [];
      let sum = 0;

      data.forEach(item => {
        const str = String(item);
        
        // Check if it's a number
        if (!isNaN(str) && str.trim() !== '') {
          const num = parseInt(str);
          sum += num;
          
          if (num % 2 === 0) {
            evenNumbers.push(str);
          } else {
            oddNumbers.push(str);
          }
        }
        // Check if it's an alphabet (single character or word with only letters)
        else if (/^[a-zA-Z]+$/.test(str)) {
          alphabets.push(str.toUpperCase());
        }
        // Check if it's a special character
        else if (str.length === 1 && /[^a-zA-Z0-9\s]/.test(str)) {
          specialCharacters.push(str);
        }
      });

      // Create concatenation string (reverse order, alternating caps)
      const allAlphabets = data
        .filter(item => /^[a-zA-Z]+$/.test(String(item)))
        .join('')
        .split('')
        .reverse()
        .map((char, index) => {
          return index % 2 === 0 ? char.toUpperCase() : char.toLowerCase();
        })
        .join('');

      res.status(200).json({
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
      });

    } catch (error) {
      res.status(500).json({
        is_success: false,
        error: "Internal server error"
      });
    }
  } else if (req.method === "GET") {
    res.status(200).json({ operation_code: 1 });
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}

module.exports = handler;
  