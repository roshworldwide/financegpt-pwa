#!/bin/bash

# Setup environment variables for FinanceGPT

echo "🔑 Setting up environment variables for FinanceGPT..."

# Check if uv is available for keyring access
if command -v uv &> /dev/null; then
    echo "📦 Retrieving GEMINI_API_KEY from keyring..."
    
    # Get the API key from keyring
    API_KEY=$(uv run keyring get memex GEMINI_API_KEY 2>/dev/null)
    
    if [ -n "$API_KEY" ]; then
        echo "GEMINI_API_KEY=$API_KEY" > .env.local
        echo "✅ API key configured in .env.local"
    else
        echo "⚠️  No API key found in keyring"
        echo "Please add your Gemini API key to the keyring or manually edit .env.local"
    fi
else
    echo "⚠️  uv not found. Please manually configure .env.local"
    echo "Copy .env.local.example to .env.local and add your API key"
fi

echo ""
echo "To get a Gemini API key:"
echo "1. Visit https://makersuite.google.com/app/apikey"
echo "2. Sign in with your Google account"
echo "3. Click 'Create API Key'"
echo "4. Copy the key and add it to your keyring or .env.local"
