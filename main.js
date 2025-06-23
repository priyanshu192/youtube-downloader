import { Actor } from 'apify';
import axios from 'axios';

await Actor.init();

try {
    const { videoUrl, type } = await Actor.getInput();

    if (!videoUrl) {
        throw new Error('videoUrl is required in input.');
    }

    console.log("📥 Input URL:", videoUrl);
    console.log("📦 Type:", type || 'audio');

    const response = await axios.get("https://priyanshuapi.xyz/youtube", {
        params: {
            url: videoUrl,
            type: type || 'audio',
            apikey: process.env.MY_SECRET_KEY
        }
    });

    console.log("✅ API call successful");
    await Actor.setValue("OUTPUT", response.data);

} catch (err) {
    console.error("❌ Error:", err.message);
    await Actor.fail(`Actor failed: ${err.message}`);
}

await Actor.exit();
