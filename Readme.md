# 🌐 CYBER_QUEST WhatsApp Bot

> A powerful, feature-rich WhatsApp bot built on KnightBot-Mini — rebranded as **CYBER_QUEST**.

---

## ⚡ Features

- 🤖 AI Commands (ChatGPT, Image generation)
- 🛡️ Admin Tools (antilink, antitag, warn, kick, promote, etc.)
- 🎭 Fun Commands (games, jokes, memes, truth/dare)
- 🎞️ Media Downloader (TikTok, Instagram, YouTube, Pinterest)
- 🔧 Utility (translate, weather, calculator, QR code)
- 👾 Anime Commands
- 🖋️ Textmaker (neon, glitch, matrix, hacker, etc.)
- 👑 Owner Controls (broadcast, mode, restart, etc.)

---

## 🚀 Setup

### 1. Install dependencies
```bash
npm install
```

### 2. Configure the bot
Edit `config.js`:
- Set your `ownerNumber` (your WhatsApp number, e.g. `919876543210`)
- Set your `ownerName`
- Set `prefix` (default: `.`)
- Add API keys if needed (OpenAI, DeepAI, etc.)

### 3. Run the bot
```bash
npm start
```

Scan the QR code with WhatsApp to connect.

---

## 🔧 Configuration (`config.js`)

| Key | Description |
|-----|-------------|
| `ownerNumber` | Your WhatsApp number(s) |
| `ownerName` | Your display name(s) |
| `botName` | Bot display name (`CYBER_QUEST`) |
| `prefix` | Command prefix (default `.`) |
| `selfMode` | `true` = only owner can use bot |
| `autoRead` | Auto read messages |
| `autoTyping` | Show typing indicator |

---

## 📦 Commands

Type `.menu` in WhatsApp after connecting to see all commands.

---

## 📁 Project Structure

```
CYBER_QUEST/
├── commands/
│   ├── admin/       # Group admin commands
│   ├── ai/          # AI-powered commands
│   ├── anime/       # Anime image commands
│   ├── fun/         # Fun & games
│   ├── general/     # General commands + menu
│   ├── media/       # Media downloaders
│   ├── owner/       # Owner-only commands
│   ├── textmaker/   # Stylized text effects
│   └── utility/     # Utilities
├── utils/           # Helper modules
├── config.js        # ⚙️ Main configuration
├── handler.js       # Message handler
├── index.js         # Entry point
└── database.js      # Data persistence
```

---

> ⚡ *Powered by CYBER_QUEST*
