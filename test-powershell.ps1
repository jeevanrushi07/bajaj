# PowerShell Test Script for BFHL API

Write-Host "🧪 Testing BFHL API with PowerShell..." -ForegroundColor Green

# Test URLs
$localUrl = "http://localhost:3000/bfhl"
$deployedUrl = "https://bajaj-bl499ojsb-jeevan-rushi-sudulas-projects.vercel.app/bfhl"

# Test data
$testCases = @(
    @{
        name = "Example A"
        data = @("a", "1", "334", "4", "R", "$")
    },
    @{
        name = "Example B"
        data = @("2", "a", "y", "4", "&", "-", "*", "5", "92", "b")
    },
    @{
        name = "Example C"
        data = @("A", "ABcD", "DOE")
    }
)

# Test GET endpoint
Write-Host "`n📡 Testing GET /bfhl..." -ForegroundColor Yellow
try {
    $response = Invoke-WebRequest -Uri $deployedUrl -Method GET
    Write-Host "✅ GET Response: $($response.Content)" -ForegroundColor Green
} catch {
    Write-Host "❌ GET Error: $($_.Exception.Message)" -ForegroundColor Red
}

# Test POST endpoints
foreach ($testCase in $testCases) {
    Write-Host "`n🧪 Testing POST /bfhl - $($testCase.name)..." -ForegroundColor Yellow
    Write-Host "📤 Input: $($testCase.data | ConvertTo-Json)" -ForegroundColor Cyan
    
    try {
        $body = @{
            data = $testCase.data
        } | ConvertTo-Json
        
        $response = Invoke-WebRequest -Uri $deployedUrl -Method POST -Body $body -ContentType "application/json"
        
        Write-Host "📥 Status: $($response.StatusCode)" -ForegroundColor Green
        Write-Host "📥 Response: $($response.Content)" -ForegroundColor Green
        
        # Parse response
        $jsonResponse = $response.Content | ConvertFrom-Json
        
        # Validate response
        $isValid = $response.StatusCode -eq 200 -and 
                  $jsonResponse.is_success -eq $true -and 
                  $jsonResponse.user_id -eq "jeevan_rushi_01062004"
        
        if ($isValid) {
            Write-Host "✅ $($testCase.name): PASS" -ForegroundColor Green
        } else {
            Write-Host "❌ $($testCase.name): FAIL" -ForegroundColor Red
        }
        
    } catch {
        Write-Host "❌ $($testCase.name) Error: $($_.Exception.Message)" -ForegroundColor Red
    }
}

Write-Host "`n🎉 Testing completed!" -ForegroundColor Green
