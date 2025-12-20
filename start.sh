#!/bin/bash

# FinanceGPT Mobile PWA - Start Script

echo "🚀 Starting FinanceGPT..."

# Check if node_modules exists
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install
fi

# Start the development server
echo "🌐 Starting development server..."
npm run dev
