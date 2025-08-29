// Test script for local BFHL API
const http = require('http');

const LOCAL_URL = 'http://localhost:3000/bfhl';

// Test data
const testCases = [
  {
    name: "Example A",
    data: ["a", "1", "334", "4", "R", "$"]
  },
  {
    name: "Example B", 
    data: ["2", "a", "y", "4", "&", "-", "*", "5", "92", "b"]
  },
  {
    name: "Example C",
    data: ["A", "ABcD", "DOE"]
  }
];

// Function to make HTTP request
function makeRequest(url, method, data) {
  return new Promise((resolve, reject) => {
    const postData = data ? JSON.stringify(data) : '';
    
    const urlObj = new URL(url);
    const options = {
      hostname: urlObj.hostname,
      port: urlObj.port || 3000,
      path: urlObj.pathname,
      method: method,
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(postData)
      }
    };

    const req = http.request(options, (res) => {
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

// Test functions
async function testGET() {
  console.log('🧪 Testing GET /bfhl...');
  try {
    const response = await makeRequest(LOCAL_URL, 'GET');
    console.log('✅ GET Response:', response.data);
    return response.statusCode === 200;
  } catch (error) {
    console.log('❌ GET Error:', error.message);
    return false;
  }
}

async function testPOST(testCase) {
  console.log(`\n🧪 Testing POST /bfhl - ${testCase.name}...`);
  console.log(`📤 Input: ${JSON.stringify(testCase.data)}`);
  
  try {
    const response = await makeRequest(LOCAL_URL, 'POST', {
      data: testCase.data
    });
    
    console.log(`📥 Status: ${response.statusCode}`);
    console.log(`📥 Response: ${JSON.stringify(response.data, null, 2)}`);
    
    // Validate response
    const isValid = response.statusCode === 200 && 
                   response.data.is_success === true &&
                   response.data.user_id === "jeevan_rushi_01062004";
    
    console.log(`✅ ${testCase.name}: ${isValid ? 'PASS' : 'FAIL'}`);
    return isValid;
    
  } catch (error) {
    console.log(`❌ ${testCase.name} Error:`, error.message);
    return false;
  }
}

// Run all tests
async function runTests() {
  console.log('🚀 Testing Local BFHL API...\n');
  
  // Test GET endpoint
  const getSuccess = await testGET();
  
  // Test POST endpoints
  let postSuccessCount = 0;
  for (const testCase of testCases) {
    const success = await testPOST(testCase);
    if (success) postSuccessCount++;
  }
  
  // Summary
  console.log('\n📊 Test Summary:');
  console.log(`GET /bfhl: ${getSuccess ? '✅ PASS' : '❌ FAIL'}`);
  console.log(`POST /bfhl: ${postSuccessCount}/${testCases.length} tests passed`);
  console.log(`Overall: ${getSuccess && postSuccessCount === testCases.length ? '✅ ALL TESTS PASSED' : '❌ SOME TESTS FAILED'}`);
  
  if (getSuccess && postSuccessCount === testCases.length) {
    console.log('\n🎉 Your local API is working perfectly!');
    console.log('📝 You can now test the deployed API as well.');
  } else {
    console.log('\n⚠️  Some issues detected. Please check the logs above.');
  }
}

// Run tests
runTests().catch(console.error);
