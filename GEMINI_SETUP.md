# Gemini AI Integration Setup

## Overview

The FinanceGPT app now uses Google's Gemini AI (gemini-1.5-flash model) to provide intelligent financial tutoring responses.

## Prerequisites

You need a Gemini API key from Google AI Studio.

## Getting Your API Key

1. Go to [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Sign in with your Google account
3. Click **"Get API Key"** or **"Create API Key"**
4. Copy the generated API key

## Configuration

### Setting Up the API Key

The API key is already configured in your `.env.local` file. If you need to update it:

1. Open `.env.local` in the project root
2. Add or update the key:
   ```
   GEMINI_API_KEY=your_actual_api_key_here
   ```
3. Save the file
4. Restart the development server

### Environment File

```bash
# .env.local
GEMINI_API_KEY=your_api_key_here
```

**Note**: The `.env.local` file is gitignored and will not be committed to version control for security.

## API Route Details

### Endpoint
- **URL**: `/api/chat`
- **Method**: `POST`
- **Content-Type**: `application/json`

### Request Format
```json
{
  "messages": [
    { "id": "1", "role": "assistant", "content": "Hello! I am your financial tutor..." },
    { "id": "2", "role": "user", "content": "How do I start budgeting?" }
  ]
}
```

### Response Format
```json
{
  "response": "To start budgeting, I recommend the 50/30/20 rule..."
}
```

### Error Response
```json
{
  "error": "Error message here"
}
```

## System Prompt

The AI is configured with the following role:

> "You are a helpful financial tutor. Your role is to help users understand:
> - Budgeting and saving strategies
> - Investment basics and strategies
> - Debt management and repayment plans
> - Financial planning and goal setting
> - Basic economics and personal finance concepts
> 
> Provide clear, practical advice that's easy to understand. Be encouraging and supportive. 
> When discussing investments, always remind users to do their own research and consider consulting with a financial advisor for personalized advice."

## Model Configuration

- **Model**: `gemini-2.5-flash` (Latest stable model as of 2025)
- **Context**: Last 10 messages included for conversation continuity
- **Temperature**: Default (configured by Gemini)
- **Safety Settings**: Default (configured by Gemini)

## Features

### Context Awareness
- The API maintains conversation context by sending the last 10 messages
- This allows the AI to reference previous questions and provide coherent follow-ups

### Error Handling
- API key validation
- Network error handling
- Graceful error messages displayed to users

### Financial Focus
- System prompt specifically tailored for financial education
- Encourages users to seek professional advice when appropriate
- Provides practical, easy-to-understand explanations

## Testing the Integration

1. Start the development server:
   ```bash
   ./start.sh
   ```

2. Open http://localhost:3000

3. Try asking financial questions:
   - "How do I create a budget?"
   - "What's the difference between stocks and bonds?"
   - "Should I pay off debt or invest?"
   - "How much should I save for retirement?"

## Troubleshooting

### "GEMINI_API_KEY is not configured" Error

**Problem**: The API key is missing or not loaded

**Solution**:
1. Check that `.env.local` exists in the project root
2. Verify the file contains: `GEMINI_API_KEY=your_key_here`
3. Restart the development server (the server must restart to load new env vars)

### "Failed to generate response" Error

**Problem**: API call failed

**Possible causes**:
- Invalid API key
- Network connectivity issues
- Gemini API rate limits exceeded
- API quota exhausted

**Solution**:
1. Verify your API key is correct
2. Check your internet connection
3. Check [Google AI Studio](https://makersuite.google.com/) for quota limits
4. Review the console logs for specific error messages

### Messages Not Showing

**Problem**: UI shows typing indicator but no response

**Solution**:
1. Open browser DevTools console
2. Look for error messages
3. Check the Network tab for failed API calls
4. Verify the API route is accessible at `/api/chat`

## API Limits

### Free Tier (as of 2024)
- **Rate Limit**: 60 requests per minute
- **Daily Quota**: Check Google AI Studio for current limits
- **Token Limits**: gemini-1.5-flash has generous context windows

### Upgrading
If you hit rate limits, you can:
1. Upgrade to a paid plan in Google AI Studio
2. Implement request throttling in the frontend
3. Add caching for common questions

## Security Best Practices

1. ✅ **Never commit** `.env.local` to version control
2. ✅ **Use environment variables** for API keys
3. ✅ **API route** runs server-side, keeping keys secure
4. ✅ **Validate inputs** before sending to API
5. ✅ **Handle errors gracefully** without exposing sensitive info

## Customization

### Changing the Model

Edit `app/api/chat/route.ts`:

```typescript
// Change from gemini-2.5-flash to another model
const model = genAI.getGenerativeModel({ model: "gemini-2.5-pro" });
```

Available models (as of 2025):
- `gemini-2.5-flash` - Fast, efficient, 1M token context (recommended)
- `gemini-2.5-pro` - More capable, larger context window

### Adjusting System Prompt

Edit the `systemPrompt` in `app/api/chat/route.ts` to change the AI's behavior and expertise.

### Context Window

To include more or fewer previous messages:

```typescript
// Change from 10 to your desired number
const recentMessages = messages.slice(-10);
```

## Cost Considerations

- **Gemini 1.5 Flash**: Free tier available, very cost-effective
- **Pay-as-you-go**: Only charged for actual API usage
- **Monitor usage**: Check Google AI Studio dashboard

## Next Steps

1. Test the chatbot with various financial questions
2. Monitor API usage in Google AI Studio
3. Consider adding:
   - Response streaming for better UX
   - Message regeneration feature
   - Conversation history export
   - Custom financial calculators

## Resources

- [Gemini API Documentation](https://ai.google.dev/docs)
- [Google AI Studio](https://makersuite.google.com/)
- [Gemini Pricing](https://ai.google.dev/pricing)
- [API Reference](https://ai.google.dev/api/rest)

---

**Status**: ✅ Gemini AI Integration Complete

The chat now uses real AI responses powered by Google Gemini!
