
Navigation Menu
QADEER-AI

Code
Pull requests
Actions
Commit 2a8971e
QadeerXTech
QadeerXTech
authored
18 hours ago
Verified
Update config.js
main
1 parent 
7000ac0
 commit 
2a8971e
1 file changed
Search within code
 
‎config.js‎
+6
-6
Lines changed: 6 additions & 6 deletions
Original file line number	Diff line number	Diff line change
@@ -1,41 +1,41 @@
const fs = require('fs');
const path = require('path');
const { getConfig } = require("./lib/configdb");

if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    // ===== BOT CORE SETTINGS =====
    SESSION_ID: process.env.SESSION_ID || "",  // Your bot's session ID (keep it secure)
    PREFIX: getConfig("PREFIX") || ".",  // Command prefix (e.g., "., / ! * - +")
    CHATBOT: getConfig("CHATBOT") || "on", // on/off chat bot 
    BOT_NAME: process.env.BOT_NAME || getConfig("BOT_NAME") || "𝐐𝐀𝐃𝐄𝐄𝐑-𝐀𝐈",  // Bot's display name
    BOT_NAME: process.env.BOT_NAME || getConfig("BOT_NAME") || "QADEER-AI",  // Bot's display name
    MODE: getConfig("MODE") || process.env.MODE || "public",        // Bot mode: public/private/group/inbox
    REPO: process.env.REPO || "https://github.com/qadeermd/QADEER-AI",  // Bot's GitHub repo
    BAILEYS: process.env.BAILEYS || "@whiskeysockets/baileys",  // Bot's BAILEYS

    // ===== OWNER & DEVELOPER SETTINGS =====
    OWNER_NUMBER: process.env.OWNER_NUMBER || "923300005253",  // Owner's WhatsApp number
    OWNER_NAME: process.env.OWNER_NAME || getConfig("OWNER_NAME") || "𝐐𝐀𝐃𝐄𝐄𝐑 𝐀𝐈",           // Owner's name
    OWNER_NAME: process.env.OWNER_NAME || getConfig("OWNER_NAME") || "QADEER-AI",           // Owner's name
    DEV: process.env.DEV || "923300005253",                     // Developer's contact number
    DEVELOPER_NUMBER: '923300005253@s.whatsapp.net',            // Developer's WhatsApp ID

    // ===== AUTO-RESPONSE SETTINGS =====
    AUTO_REPLY: process.env.AUTO_REPLY || "false",              // Enable/disable auto-reply
    AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",// Reply to status updates?
    AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*𝚀𝙰𝙳𝙴𝙴𝚁 𝙰𝙸 𝚅𝙸𝙴𝚆𝙴𝙳 𝚈𝙾𝚄𝚁 𝚂𝚃𝙰𝚃𝚄𝚂 🤖*",  // Status reply message
    AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*QADEER AI VIEWED YOUR STATUS 🤖*",  // Status reply message
    READ_MESSAGE: process.env.READ_MESSAGE || "false",          // Mark messages as read automatically?
    REJECT_MSG: process.env.REJECT_MSG || "*📞 ᴄαℓℓ ɴσт αℓℓσωє∂ ιɴ тнιѕ ɴᴜмвєʀ уσυ ∂σɴт нανє ᴘєʀмιѕѕισɴ 📵*",
    REJECT_MSG: process.env.REJECT_MSG || "*📞 CALL NOT ALLOWED IN THIS NUMBER YOU DONT HAVE PERMISSION  📵*",
    // ===== REACTION & STICKER SETTINGS =====
    AUTO_REACT: process.env.AUTO_REACT || "false",              // Auto-react to messages?
    OWNER_REACT: process.env.OWNER_REACT || "false",              // Auto-react to messages?
    CUSTOM_REACT: process.env.CUSTOM_REACT || "false",          // Use custom emoji reactions?
    CUSTOM_REACT_EMOJIS: getConfig("CUSTOM_REACT_EMOJIS") || process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",  // set custom reacts
    STICKER_NAME: process.env.STICKER_NAME || "𝐐𝐀𝐃𝐄𝐄𝐑-𝐀𝐈",     // Sticker pack name
    STICKER_NAME: process.env.STICKER_NAME || "QADEER-AI",     // Sticker pack name
    AUTO_STICKER: process.env.AUTO_STICKER || "false",          // Auto-send stickers?
    // ===== MEDIA & AUTOMATION =====
    AUTO_RECORDING: process.env.AUTO_RECORDING || "false",      // Auto-record voice notes?
@@ -55,7 +55,7 @@
    PM_BLOCKER: process.env.PM_BLOCKER || "true",

    // ===== BOT BEHAVIOR & APPEARANCE =====
    DESCRIPTION: process.env.DESCRIPTION || "*_© 𝙿𝙾𝚆𝙴𝚁𝙴𝙳 𝙱𝚈 𝚀𝙰𝙳𝙴𝙴𝚁 𝙰𝙸*",  // Bot description
    DESCRIPTION: process.env.DESCRIPTION || "*_© POWERED BY QADEER-AI*",  // Bot description
    PUBLIC_MODE: process.env.PUBLIC_MODE || "true",              // Allow public commands?
    ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",        // Show bot as always online?
    AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true", // React to status updates?
