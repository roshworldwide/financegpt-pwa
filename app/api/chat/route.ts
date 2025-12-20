import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    // Parse the request body
    const { messages } = await request.json();

    if (!messages || messages.length === 0) {
      return NextResponse.json(
        { error: "Messages array is required" },
        { status: 400 }
      );
    }

    // Check if API key is configured
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: "GEMINI_API_KEY is not configured" },
        { status: 500 }
      );
    }

    // Initialize the Gemini API
    const genAI = new GoogleGenerativeAI(apiKey);

    // Get the last user message
    const lastMessage = messages[messages.length - 1];
    
    if (!lastMessage || lastMessage.role !== "user") {
      return NextResponse.json(
        { error: "Last message must be from user" },
        { status: 400 }
      );
    }

    // Initialize the model
    // Using gemini-2.5-flash (latest available fast model as of 2025)
    const model = genAI.getGenerativeModel({ 
      model: "gemini-2.5-flash"
    });

    // Build the conversation context for Gemini
    // We'll use a system prompt to define the assistant's role
    const systemPrompt = `You are an expert financial advisor. Your goal is clarity. Formatting Rules:

Never write long blocks of text. Use short paragraphs (max 2-3 sentences).

Use Bullet Points: Whenever listing steps or options, ALWAYS use bullet points.

Use Bold Text: Bold key terms and numbers (e.g., ₹50,000, Mutual Funds).

Headings: Use Markdown headings (###) to separate different topics.

Tone: Professional, encouraging, and Indian-market focused.

Greeting: Do not repeat the welcome greeting. Jump straight to the answer.`;

    // Build the conversation history for context
    let conversationContext = systemPrompt + "\n\n";
    
    // Include previous messages for context (limit to last 10 to avoid token limits)
    const recentMessages = messages.slice(-10);
    recentMessages.forEach((msg: { role: string; content: string }) => {
      if (msg.role === "user") {
        conversationContext += `User: ${msg.content}\n`;
      } else if (msg.role === "assistant") {
        conversationContext += `Assistant: ${msg.content}\n`;
      }
    });

    // Generate response
    const result = await model.generateContent(conversationContext);
    const response = result.response;
    const text = response.text();

    // Return the response
    return NextResponse.json({ response: text });

  } catch (error) {
    console.error("Error in chat API:", error);
    return NextResponse.json(
      { error: "Failed to generate response" },
      { status: 500 }
    );
  }
}
