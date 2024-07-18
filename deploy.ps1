# Build the project
npm run build

# Create CNAME file
"dubasipavankumar.com" | Out-File -FilePath ".\build\CNAME" -Encoding ascii

# Deploy to gh-pages branch
npm run deploy

# Commit and push changes to main branch
git add .
git commit -m "Deploy to GitHub Pages"
git push origin main

Write-Host "Deployment complete!"