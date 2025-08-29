# BFHL REST API

A simple REST API that accepts an array of values and returns a structured JSON response with categorized data and derived fields.

## Endpoints

- `POST /bfhl` – Processes input array and returns results
- `GET /bfhl` – Returns `{ "operation_code": 1 }` for a quick health/contract check

## Input

POST body (JSON):
```json
{
  "data": ["a", "1", "334", "4", "R", "$"]
}
```

## Response
On success (`200 OK`):
```json
{
  "is_success": true,
  "user_id": "jeevan_rushi_07062004",
  "email": "jeevanrushicreations584@gmail.com",
  "roll_number": "22BCE7337",
  "odd_numbers": ["1"],
  "even_numbers": ["334", "4"],
  "alphabets": ["A", "R"],
  "special_characters": ["$"],
  "sum": "339",
  "concat_string": "Ra"
}
```
On error, a proper status code is returned with `{ is_success: false, error: "..." }`.

## Logic
- **Numbers**: Extracted as strings, summed, and split into `even_numbers` and `odd_numbers`.
- **Alphabets**: All alphabetical strings converted to uppercase and returned in `alphabets`.
- **Special Characters**: Single non-alphanumeric symbols captured under `special_characters`.
- **Sum**: Sum of all numeric entries, returned as a string.
- **concat_string**: All alphabetical characters from input joined, reversed, and converted to alternating caps (Upper, lower, Upper, ...).

## Examples

### Example A
Request:
```json
{ "data": ["a", "1", "334", "4", "R", "$"] }
```
Response (200):
```json
{
  "is_success": true,
  "user_id": "jeevan_rushi_07062004",
  "email": "jeevanrushicreations584@gmail.com",
  "roll_number": "22BCE7337",
  "odd_numbers": ["1"],
  "even_numbers": ["334", "4"],
  "alphabets": ["A", "R"],
  "special_characters": ["$"],
  "sum": "339",
  "concat_string": "Ra"
}
```

### Example B
Request:
```json
{ "data": ["2", "a", "y", "4", "&", "-", "*", "5", "92", "b"] }
```
Response (200):
```json
{
  "is_success": true,
  "user_id": "jeevan_rushi_07062004",
  "email": "jeevanrushicreations584@gmail.com",
  "roll_number": "22BCE7337",
  "odd_numbers": ["5"],
  "even_numbers": ["2", "4", "92"],
  "alphabets": ["A", "Y", "B"],
  "special_characters": ["&", "-", "*"],
  "sum": "103",
  "concat_string": "ByA"
}
```

### Example C
Request:
```json
{ "data": ["A", "ABcD", "DOE"] }
```
Response (200):
```json
{
  "is_success": true,
  "user_id": "jeevan_rushi_07062004",
  "email": "jeevanrushicreations584@gmail.com",
  "roll_number": "22BCE7337",
  "odd_numbers": [],
  "even_numbers": [],
  "alphabets": ["A", "ABCD", "DOE"],
  "special_characters": [],
  "sum": "0",
  "concat_string": "EoDdCbAa"
}
```

## Run Locally
```bash
npm install
npm start
# Server: http://localhost:3000/
# API:    http://localhost:3000/bfhl
```

## Deploy
This project is deployable on Vercel/Railway/Render.

- Vercel (recommended):
  - Connect GitHub repo to Vercel or use CLI.
  - Using CLI:
    ```bash
    npm i -g vercel
    vercel --prod
    ```

## Testing
You can use Postman/Hoppscotch or the provided scripts:
- `node test.js`
- `node test-postman-data.js`
- `node test-deployed-api.js`

## Error Handling & Status Codes
- 200: Success
- 400: Bad Request (invalid input)
- 405: Method Not Allowed
- 500: Internal Server Error
