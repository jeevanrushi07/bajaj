# BFHL REST API

यह एक REST API है जो array input लेता है और विभिन्न प्रकार के data को process करता है।

## Features

- **POST /bfhl** - Main endpoint जो array process करता है
- **GET /bfhl** - Operation code return करता है

## API Response Format

```json
{
  "is_success": true,
  "user_id": "jeevan_rushi_01062004",
  "email": "jeevanrushicreations584@gmail.com",
  "roll_number": "ABCD123",
  "odd_numbers": ["1", "5"],
  "even_numbers": ["2", "4", "92"],
  "alphabets": ["A", "Y", "B"],
  "special_characters": ["&", "-", "*"],
  "sum": "103",
  "concat_string": "ByA"
}
```

## Example Usage

### Example 1
**Request:**
```json
{
  "data": ["a", "1", "334", "4", "R", "$"]
}
```

**Response:**
```json
{
  "is_success": true,
  "user_id": "jeevan_rushi_01062004",
  "email": "jeevanrushicreations584@gmail.com",
  "roll_number": "ABCD123",
  "odd_numbers": ["1"],
  "even_numbers": ["334", "4"],
  "alphabets": ["A", "R"],
  "special_characters": ["$"],
  "sum": "339",
  "concat_string": "Ra"
}
```

### Example 2
**Request:**
```json
{
  "data": ["2", "a", "y", "4", "&", "-", "*", "5", "92", "b"]
}
```

**Response:**
```json
{
  "is_success": true,
  "user_id": "jeevan_rushi_01062004",
  "email": "jeevanrushicreations584@gmail.com",
  "roll_number": "ABCD123",
  "odd_numbers": ["5"],
  "even_numbers": ["2", "4", "92"],
  "alphabets": ["A", "Y", "B"],
  "special_characters": ["&", "-", "*"],
  "sum": "103",
  "concat_string": "ByA"
}
```

## Logic Details

1. **Numbers**: Even और odd numbers को अलग करता है
2. **Alphabets**: सभी alphabets को uppercase में convert करता है
3. **Special Characters**: Single character special symbols को identify करता है
4. **Sum**: सभी numbers का sum calculate करता है
5. **Concatenation**: सभी alphabets को reverse order में alternating caps के साथ concatenate करता है

## Deployment

### Vercel पर Deploy करने के लिए:

1. Vercel CLI install करें:
```bash
npm i -g vercel
```

2. Project को deploy करें:
```bash
vercel
```

3. या GitHub से direct deploy करें:
   - GitHub repository को Vercel से connect करें
   - Automatic deployment enable करें

## Local Development

```bash
npm install
vercel dev
```

## Error Handling

API gracefully handle करता है:
- Invalid input data
- Missing data array
- Internal server errors
- Method not allowed errors

## Status Codes

- **200**: Success
- **400**: Bad Request (invalid input)
- **405**: Method Not Allowed
- **500**: Internal Server Error
