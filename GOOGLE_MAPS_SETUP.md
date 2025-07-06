# Google Maps API Setup

## Required Environment Variable

To enable Google Places autocomplete for address fields, you need to set up a Google Maps API key.

### Steps:

1. **Get a Google Maps API Key:**
   - Go to [Google Cloud Console](https://console.cloud.google.com/)
   - Create a new project or select an existing one
   - Enable the following APIs:
     - Maps JavaScript API
     - Places API
   - Create credentials (API Key)
   - Restrict the API key to your domain for security

2. **Add to Environment Variables:**
   Create a `.env.local` file in your project root and add:
   ```
   NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_actual_api_key_here
   ```

3. **Security Best Practices:**
   - Restrict your API key to specific domains
   - Enable only the APIs you need
   - Monitor usage in Google Cloud Console

## Features Enabled

- **Address Autocomplete**: Users can start typing their address and get suggestions
- **US-Only Results**: Restricted to US addresses for ramp installation service
- **Formatted Addresses**: Returns properly formatted addresses for consistency

## Development

For development, the component will gracefully degrade if no API key is provided - it will function as a regular text input field. 