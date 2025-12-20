# FinanceGPT - Mobile PWA

A mobile-first Financial Chatbot Progressive Web App (PWA) that users can install on their phones.

## Tech Stack

- **Next.js** (App Router)
- **Tailwind CSS** (for styling)
- **Lucide React** (for icons)
- **TypeScript**

## Features

- ✅ Progressive Web App (PWA) - Installable on mobile devices
- ✅ AI-Powered Chat - Google Gemini 1.5 Flash integration
- ✅ ChatGPT-style Interface - Familiar, intuitive chat UI
- ✅ Financial Tutor AI - Specialized in budgeting, investing, and debt
- ✅ Context-Aware Responses - AI remembers conversation history
- ✅ Pure black background with white text for optimal mobile viewing
- ✅ Standalone display mode (hides browser URL bar when installed)
- ✅ Mobile-first responsive design
- ✅ Prevents zoom on mobile inputs for better UX

## Getting Started

### Installation

```bash
npm install
```

### API Key Setup

1. Get your Gemini API key from [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Add it to your keyring (you'll be prompted) or create `.env.local`:
   ```bash
   GEMINI_API_KEY=your_api_key_here
   ```
3. Run the setup script:
   ```bash
   ./setup-env.sh
   ```

### Development

```bash
# Using the start script
./start.sh

# Or manually
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

**See `AI_INTEGRATION_COMPLETE.md` for detailed setup instructions.**

### Testing as PWA

1. Open the app in Chrome/Edge on desktop or mobile
2. Click the install icon in the address bar
3. Or on mobile: Menu → "Add to Home Screen"
4. The app will launch in standalone mode without browser UI

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with PWA configuration
│   ├── page.tsx            # Home page
│   └── globals.css         # Global styles
├── public/
│   ├── manifest.json       # PWA manifest
│   ├── icon-192.png        # PWA icon (192x192)
│   └── icon-512.png        # PWA icon (512x512)
└── start.sh                # Startup script
```

## PWA Configuration

The app is configured as a PWA with:

- **Manifest**: `/public/manifest.json`
- **Display Mode**: `standalone` (hides browser UI)
- **Theme Color**: Pure black (`#000000`)
- **Icons**: 192x192 and 512x512 PNG files

## Design Specifications

- **Background**: Pure black (`#000000`)
- **Text Color**: White (`#FFFFFF`)
- **Viewport**: Fixed scale, no zoom on inputs
- **Font**: Geist Sans (Google Fonts)

## Next Steps

1. Add chat interface components
2. Integrate AI/LLM for financial assistance
3. Add authentication
4. Implement conversation history
5. Add financial data visualization

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Next.js App Router](https://nextjs.org/docs/app)
- [PWA Documentation](https://web.dev/progressive-web-apps/)

## License

MIT
