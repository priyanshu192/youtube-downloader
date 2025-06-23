# 📥 YouTube Downloader Actor (Audio/Video)

This Apify actor allows you to extract **direct download links** for YouTube videos, either in `audio` or `360p video` format. It's ideal for automating content extraction from YouTube for personal use or integration into larger workflows.

---

## 🚀 Features

- 🔗 Extracts download link directly via API
- 🎵 Supports **audio (128kbps M4A)**
- 🎥 Supports **video (360p MP4)**
- 🖼️ Returns metadata: title, thumbnail, views, likes, duration, etc.
- 🔐 Requires no API key when used from within Apify

---

## 🛠️ Input Schema

| Field      | Type   | Required | Description                               |
|------------|--------|----------|-------------------------------------------|
| `videoUrl` | String | ✅ Yes    | Full YouTube video URL                    |
| `type`     | String | ❌ No     | `audio` (default) or `video`              |

### 🧪 Example Input

```json
{
  "videoUrl": "https://www.youtube.com/watch?v=kJQP7kiw5Fk",
  "type": "audio"
}
```

---

## 📤 Sample Output

```json
{
  "title": "Luis Fonsi - Despacito ft. Daddy Yankee",
  "description": "...",
  "likes": "54M",
  "views": "8,750.1M",
  "type": "Audio",
  "mediaThumbnail": "https://i.ytimg.com/vi/kJQP7kiw5Fk/sddefault.jpg",
  "mediaQuality": "128K",
  "mediaDuration": "00:04:41",
  "mediaExtension": "M4A",
  "mediaFileSize": "4.34 MB",
  "downloadUrl": "https://priyanshuapi.xyz/download/..."
}
```

---

## 📦 Tech Stack

- Node.js 20+
- Axios for HTTP requests
- Apify SDK (v3+)
- Hosted scraping API: [https://priyanshuapi.xyz](https://priyanshuapi.xyz)

---

## 🔐 Notes

- Internally protected with API key, but **Apify runs auto-authenticated** — you don’t need to pass any API key manually.
- For external use, contact [Priyanshu](https://github.com/priyanshu192) for API access.

---

## 🧠 Tips

- Add `pushData()` to also save to dataset (optional).
- Actor works well in sequences (e.g., crawler → extractor → downloader).

---

## 🤝 Author

Made with ❤️ by [Priyanshu Rajput](https://github.com/priyanshu192)

Want a custom downloader? Reach out!
