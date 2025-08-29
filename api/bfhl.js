export default function handler(req, res) {
    if (req.method === "POST") {
      const { data } = req.body;
  
      const numbers = data.filter((x) => !isNaN(x));
      const alphabets = data.filter((x) => isNaN(x));
      const highestLowercase = alphabets
        .filter((c) => c === c.toLowerCase())
        .sort()
        .slice(-1);
  
      res.status(200).json({
        is_success: true,
        user_id: "jeevan_rushi_01062004", // replace with your details
        email: "jeevanrushicreations584@gmail.com",
        roll_number: "123456",
        numbers,
        alphabets,
        highest_lowercase_alphabet: highestLowercase,
      });
    } else if (req.method === "GET") {
      res.status(200).json({ operation_code: 1 });
    } else {
      res.status(405).json({ error: "Method not allowed" });
    }
  }
  