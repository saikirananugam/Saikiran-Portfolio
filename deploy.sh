#!/bin/bash

# Build the project
npm run build

# Create CNAME file
echo "dubasipavankumar.com" > build/CNAME

# Deploy to gh-pages branch
npm run deploy

# Commit and push changes to main branch
git add .
git commit -m "Deploy to GitHub Pages"
git push origin main

echo "Deployment complete!"