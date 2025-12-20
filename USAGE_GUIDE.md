# FinanceGPT - Usage Guide

## Quick Start

### Running the App

```bash
# Start the development server
./start.sh

# Or manually
npm run dev
```

The app will be available at: **http://localhost:3000**

## Using the Chat Interface

### Sending Messages

1. **Type your message** in the input field at the bottom
2. **Press Enter** or **click the Send button** (blue arrow)
3. Your message appears in a **blue bubble** on the right
4. The AI shows a **typing indicator** (three animated dots)
5. The AI response appears in a **gray bubble** on the left with a robot icon

### Resetting the Conversation

- Click the **"Reset" button** in the top-right header
- This clears all messages and shows the welcome message again

### Keyboard Shortcuts

- **Enter**: Send message
- **Shift + Enter**: (Currently sends - could be modified for new line)

## Mobile Experience

### Installing as PWA

#### On iPhone (Safari)
1. Open http://localhost:3000 (or your deployed URL)
2. Tap the **Share button** (square with arrow)
3. Scroll down and tap **"Add to Home Screen"**
4. Tap **"Add"**
5. The app icon appears on your home screen

#### On Android (Chrome)
1. Open http://localhost:3000 (or your deployed URL)
2. Tap the **menu** (three dots)
3. Tap **"Add to Home Screen"** or **"Install app"**
4. Tap **"Install"**
5. The app icon appears on your home screen

#### On Desktop (Chrome/Edge)
1. Open http://localhost:3000
2. Look for the **install icon** in the address bar (⊕ or computer icon)
3. Click it and confirm
4. The app opens in its own window without browser UI

### When Installed

- **Standalone Mode**: No browser address bar or tabs
- **Full Screen**: Uses entire screen (respects safe areas on notched devices)
- **App Icon**: Appears on home screen like a native app
- **Fast Access**: Launches like a native app

## Features

### Current Features ✅

- **Chat Interface**: Send and receive messages
- **Typing Indicator**: See when AI is "thinking"
- **Auto-scroll**: Always shows the latest message
- **Welcome Message**: Friendly introduction from the AI tutor
- **Reset Chat**: Start fresh conversation anytime
- **Mobile Optimized**: Works great on phones and tablets
- **Dark Theme**: Pure black background with blue and gray accents
- **PWA Support**: Install on any device

### Demo Behavior

Currently, the AI responses are simulated with a placeholder message:
> "I received your message. This is a placeholder response. In the next step, we'll integrate a real AI API."

This demonstrates the UI flow before connecting to a real AI service.

## UI Elements

### Header
- **Title**: "FinanceGPT" - Your app name
- **Reset Button**: Clears conversation (with rotate icon)

### Messages
- **Your Messages**: Blue bubbles aligned right
- **AI Messages**: Gray bubbles aligned left with robot icon
- **Typing Indicator**: Animated dots when AI is responding

### Input Area
- **Text Input**: Dark gray rounded input field
- **Send Button**: Blue circular button with arrow icon
- **Placeholder**: "Message FinanceGPT..."

### States
- **Empty Input**: Send button is disabled (gray)
- **While Typing**: Send button is disabled during AI response
- **Ready**: Send button is enabled (blue) when input has text

## Testing Checklist

### Desktop Testing
- [x] Type and send messages
- [x] Press Enter to send
- [x] Click Send button
- [x] Click Reset button
- [x] Check responsive layout (resize window)
- [x] Test hover states on buttons

### Mobile Testing
- [ ] Install as PWA
- [ ] Send messages via touch
- [ ] Test keyboard behavior (input stays visible)
- [ ] Check safe areas on notched devices
- [ ] Test in portrait and landscape
- [ ] Verify scrolling is smooth
- [ ] Check that bubbles don't overflow
- [ ] Confirm touch targets are large enough

### PWA Testing
- [ ] Install on home screen works
- [ ] App launches in standalone mode
- [ ] No browser UI visible when installed
- [ ] Icon displays correctly
- [ ] Splash screen appears (if configured)

## Tips

### Development
- Hot reload is enabled - changes appear immediately
- Check browser console for any errors
- Use Chrome DevTools device mode for mobile testing

### Mobile Optimization
- The input stays visible when keyboard opens
- Safe areas are respected on iPhone X+ (notch/island)
- No zoom happens when tapping input fields
- Smooth scrolling for better UX

### Accessibility
- All interactive elements are keyboard accessible
- Color contrast meets WCAG standards
- Touch targets are at least 44x44px
- Focus indicators are visible

## Common Questions

**Q: Why is the AI response always the same?**
A: Currently using a placeholder. Next step is to integrate a real AI API.

**Q: Can I deploy this to production?**
A: Yes! Deploy to Vercel, Netlify, or any hosting that supports Next.js.

**Q: How do I change the welcome message?**
A: Edit the initial message in the `useState` array in `app/page.tsx`

**Q: Can I customize the colors?**
A: Yes! Edit the Tailwind classes in `app/page.tsx` and `app/globals.css`

**Q: Does it work offline?**
A: Not yet. You can add a service worker for offline support.

**Q: How do I add more features?**
A: Check `IMPLEMENTATION_STATUS.md` for suggested next steps.

## Support

For issues or questions:
1. Check the browser console for errors
2. Review the documentation files
3. Check Next.js documentation at https://nextjs.org/docs

## Next Steps

See `IMPLEMENTATION_STATUS.md` for a comprehensive list of features to add next, including:
- AI API integration
- Message persistence
- Voice input
- Image upload
- Financial calculators

---

**Enjoy your FinanceGPT chat interface!** 🚀💬
