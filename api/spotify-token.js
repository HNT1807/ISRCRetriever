// Serverless function to securely get Spotify access token
// This keeps your client secret hidden from the browser

export default async function handler(req, res) {
    // Only allow POST requests
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    // Get credentials from environment variables (set in Vercel dashboard)
    const clientId = process.env.SPOTIFY_CLIENT_ID;
    const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;

    if (!clientId || !clientSecret) {
        console.error('Missing Spotify credentials in environment variables');
        return res.status(500).json({ error: 'Server configuration error' });
    }

    try {
        // Authenticate with Spotify using Client Credentials flow
        const credentials = Buffer.from(`${clientId}:${clientSecret}`).toString('base64');
        
        const response = await fetch('https://accounts.spotify.com/api/token', {
            method: 'POST',
            headers: {
                'Authorization': `Basic ${credentials}`,
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: 'grant_type=client_credentials'
        });

        if (!response.ok) {
            const errorText = await response.text();
            console.error('Spotify API error:', response.status, errorText);
            return res.status(response.status).json({ 
                error: `Spotify authentication failed: ${response.status}` 
            });
        }

        const data = await response.json();
        
        // Return the access token to the client
        res.status(200).json({
            access_token: data.access_token,
            expires_in: data.expires_in,
            token_type: data.token_type
        });

    } catch (error) {
        console.error('Error authenticating with Spotify:', error);
        res.status(500).json({ 
            error: 'Failed to authenticate with Spotify',
            details: error.message 
        });
    }
}


