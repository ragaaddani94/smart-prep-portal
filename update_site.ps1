# PrepMaster Quick Update Script
# This script stages all changes, commits them with a daily message, and pushes to GitHub.

Write-Host "🚀 Starting Prepmaster Update..." -ForegroundColor Cyan

# Stage all changes
git add .

# Get current date for the commit message
$date = Get-Date -Format "yyyy-MM-dd"
$message = "Daily Update: $date"

# Commit changes
git commit -m $message

# Push to GitHub
Write-Host "📤 Pushing to GitHub..." -ForegroundColor Yellow
git push origin main

if ($LASTEXITCODE -eq 0) {
    Write-Host "✅ Update successful! Your site will be live soon." -ForegroundColor Green
} else {
    Write-Host "❌ Update failed. Please check your internet connection or git configuration." -ForegroundColor Red
}

Write-Host "Press any key to exit..."
$Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")
