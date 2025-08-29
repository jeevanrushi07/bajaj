// Test script for Postman data
const https = require('https');

const API_URL = 'https://bajaj-rtnd-50ia0w1ad-jeevan-rushi-sudulas-projects.vercel.app/bfhl';

// Test the specific data from Postman
const testData = {
  data: ["A", "ABcD", "DOE"]
};

function makeRequest(url, method, data) {
  return new Promise((resolve, reject) => {
    const postData = data ? JSON.stringify(data) : '';
    
    const options = {
      hostname: 'bajaj-rtnd-50ia0w1ad-jeevan-rushi-sudulas-projects.vercel.app',
      port: 443,
      path: '/bfhl',
      method: method,
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(postData)
      }
    };

    const req = https.request(options, (res) => {
      let responseData = '';
      
      res.on('data', (chunk) => {
        responseData += chunk;
      });
      
      res.on('end', () => {
        try {
          const parsedData = JSON.parse(responseData);
          resolve({
            statusCode: res.statusCode,
            data: parsedData
          });
        } catch (error) {
          resolve({
            statusCode: res.statusCode,
            data: responseData
          });
        }
      });
    });

    req.on('error', (error) => {
      reject(error);
    });

    if (postData) {
      req.write(postData);
    }
    
    req.end();
  });
}

async function testPostmanData() {
  console.log('🧪 Testing Postman Data...\n');
  console.log(`📤 Input: ${JSON.stringify(testData, null, 2)}`);
  
  try {
    const response = await makeRequest(API_URL, 'POST', testData);
    
    console.log(`📥 Status: ${response.statusCode}`);
    console.log(`📥 Response: ${JSON.stringify(response.data, null, 2)}`);
    
    if (response.statusCode === 200 && response.data.is_success) {
      console.log('\n✅ API is working correctly!');
      console.log('📝 Postman configuration issue detected.');
    } else {
      console.log('\n❌ API issue detected.');
    }
    
  } catch (error) {
    console.log(`❌ Error: ${error.message}`);
  }
}

testPostmanData();
