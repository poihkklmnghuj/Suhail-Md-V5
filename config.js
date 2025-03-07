const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text"  // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_14_15_03_04_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTg2LFxuICAgICAgICAyNTEsXG4gICAgICAgIDQxLFxuICAgICAgICAzNCxcbiAgICAgICAgMjMxLFxuICAgICAgICAxNjAsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTYyLFxuICAgICAgICAxMTEsXG4gICAgICAgIDI4LFxuICAgICAgICAxODgsXG4gICAgICAgIDgwLFxuICAgICAgICAyNDksXG4gICAgICAgIDI4LFxuICAgICAgICAyMCxcbiAgICAgICAgNTQsXG4gICAgICAgIDEyNyxcbiAgICAgICAgNjQsXG4gICAgICAgIDcwLFxuICAgICAgICAxNjEsXG4gICAgICAgIDg1LFxuICAgICAgICAxNCxcbiAgICAgICAgMTY2LFxuICAgICAgICAyMTMsXG4gICAgICAgIDQ3LFxuICAgICAgICAxMTUsXG4gICAgICAgIDI4LFxuICAgICAgICAxNjksXG4gICAgICAgIDIwNixcbiAgICAgICAgODdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTU0LFxuICAgICAgICAyMjksXG4gICAgICAgIDg1LFxuICAgICAgICAxMDksXG4gICAgICAgIDM3LFxuICAgICAgICAxMixcbiAgICAgICAgMTIsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjUyLFxuICAgICAgICA1MCxcbiAgICAgICAgMTA2LFxuICAgICAgICAxNyxcbiAgICAgICAgMTE1LFxuICAgICAgICAyOCxcbiAgICAgICAgMjA3LFxuICAgICAgICA2MSxcbiAgICAgICAgMTUzLFxuICAgICAgICAxLFxuICAgICAgICAyMTQsXG4gICAgICAgIDk3LFxuICAgICAgICAzNSxcbiAgICAgICAgMTk4LFxuICAgICAgICAyMSxcbiAgICAgICAgMjUsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTUyLFxuICAgICAgICAyMCxcbiAgICAgICAgMjI0LFxuICAgICAgICA2MSxcbiAgICAgICAgMTY0LFxuICAgICAgICAxNDcsXG4gICAgICAgIDNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwOCxcbiAgICAgICAgNjUsXG4gICAgICAgIDYxLFxuICAgICAgICAxNTQsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjI5LFxuICAgICAgICAxMDIsXG4gICAgICAgIDEwOSxcbiAgICAgICAgNTEsXG4gICAgICAgIDE1MixcbiAgICAgICAgNTUsXG4gICAgICAgIDUsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjI0LFxuICAgICAgICAyMjUsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjM4LFxuICAgICAgICAxOTcsXG4gICAgICAgIDY5LFxuICAgICAgICAxNDksXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjI5LFxuICAgICAgICA5MixcbiAgICAgICAgMTcsXG4gICAgICAgIDI5LFxuICAgICAgICA4MyxcbiAgICAgICAgNDMsXG4gICAgICAgIDUxLFxuICAgICAgICAyMTksXG4gICAgICAgIDE4NixcbiAgICAgICAgMjI0LFxuICAgICAgICA3MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODgsXG4gICAgICAgIDI4LFxuICAgICAgICAzNyxcbiAgICAgICAgMTcxLFxuICAgICAgICA3NyxcbiAgICAgICAgNjgsXG4gICAgICAgIDI1MSxcbiAgICAgICAgNTcsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjA0LFxuICAgICAgICAxMzUsXG4gICAgICAgIDIzNyxcbiAgICAgICAgNDEsXG4gICAgICAgIDEsXG4gICAgICAgIDgzLFxuICAgICAgICAxNDEsXG4gICAgICAgIDI1LFxuICAgICAgICAxOTgsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTczLFxuICAgICAgICAxMjIsXG4gICAgICAgIDQ5LFxuICAgICAgICAxNjAsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTU3LFxuICAgICAgICAxNDUsXG4gICAgICAgIDI4LFxuICAgICAgICAxMzAsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTE3LFxuICAgICAgICAxOSxcbiAgICAgICAgNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICAxMjcsXG4gICAgICAgIDE2OSxcbiAgICAgICAgOTgsXG4gICAgICAgIDM3LFxuICAgICAgICA0OSxcbiAgICAgICAgMTkwLFxuICAgICAgICAxNzQsXG4gICAgICAgIDExLFxuICAgICAgICAzOCxcbiAgICAgICAgMTAzLFxuICAgICAgICAxMjQsXG4gICAgICAgIDEwMCxcbiAgICAgICAgNzIsXG4gICAgICAgIDQ0LFxuICAgICAgICAxOTgsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTAzLFxuICAgICAgICAzMyxcbiAgICAgICAgMzQsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTcsXG4gICAgICAgIDksXG4gICAgICAgIDIyMixcbiAgICAgICAgMTAzLFxuICAgICAgICA4NSxcbiAgICAgICAgNTksXG4gICAgICAgIDU3LFxuICAgICAgICAyMzksXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTYsXG4gICAgICAgIDg1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDM1LFxuICAgICAgICAxMTYsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTIsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTI5LFxuICAgICAgICAyMixcbiAgICAgICAgMTcsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjI4LFxuICAgICAgICAxMixcbiAgICAgICAgMTY3LFxuICAgICAgICAyMjgsXG4gICAgICAgIDkyLFxuICAgICAgICAyNDcsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTgwLFxuICAgICAgICAxMjUsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTY0LFxuICAgICAgICAxMzUsXG4gICAgICAgIDIsXG4gICAgICAgIDExNCxcbiAgICAgICAgOTUsXG4gICAgICAgIDkzLFxuICAgICAgICA2MCxcbiAgICAgICAgMSxcbiAgICAgICAgMTMxLFxuICAgICAgICAxMDAsXG4gICAgICAgIDYsXG4gICAgICAgIDM5LFxuICAgICAgICA5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE1MixcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMixcbiAgICAgICAgICAzMSxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgNzFcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDksXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDc0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTk0LFxuICAgICAgICAxNDUsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTA5LFxuICAgICAgICAyMTUsXG4gICAgICAgIDkwLFxuICAgICAgICA3NCxcbiAgICAgICAgMTY1LFxuICAgICAgICA0NCxcbiAgICAgICAgMjAzLFxuICAgICAgICA5NyxcbiAgICAgICAgOTgsXG4gICAgICAgIDExMyxcbiAgICAgICAgOTYsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTYsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTgzLFxuICAgICAgICAxMTUsXG4gICAgICAgIDE2MyxcbiAgICAgICAgODUsXG4gICAgICAgIDMyLFxuICAgICAgICAxOTYsXG4gICAgICAgIDk4LFxuICAgICAgICA1LFxuICAgICAgICAyMjIsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTI4LFxuICAgICAgICAyNDIsXG4gICAgICAgIDU3LFxuICAgICAgICAxMjEsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTk4LFxuICAgICAgICAyOCxcbiAgICAgICAgODMsXG4gICAgICAgIDk4LFxuICAgICAgICAxNyxcbiAgICAgICAgODksXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTc1LFxuICAgICAgICAyMDUsXG4gICAgICAgIDU2LFxuICAgICAgICAzNSxcbiAgICAgICAgMjQyLFxuICAgICAgICAxMSxcbiAgICAgICAgMjI5LFxuICAgICAgICA2NyxcbiAgICAgICAgMjAzLFxuICAgICAgICAxMDUsXG4gICAgICAgIDc4LFxuICAgICAgICAyMTQsXG4gICAgICAgIDkzLFxuICAgICAgICA0OSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyNDksXG4gICAgICAgIDE2OCxcbiAgICAgICAgNDYsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMzksXG4gICAgICAgIDQ0LFxuICAgICAgICAxMzIsXG4gICAgICAgIDg3LFxuICAgICAgICAxOTIsXG4gICAgICAgIDEzOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjQ3LFxuICBcImFkdlNlY3JldEtleVwiOiBcImRlUGx6b0VTWUNKY1g0OHpqcnlmZFE0K05wRHpxdndHYmdNMTRCR09JcTg9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTIzMDExMzcyNjIzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJDQUZFQjc1MUQ2NzQ3NjZBQzRDRDE0RUM2OTkzMTNFOFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3NDEwOTc3MTZcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MjMwMTEzNzI2MjNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkRENkRFNEMwM0UwQUVBOTAwNTYzQjExNDdEQ0I2MDNDXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTc0MTA5NzcxNlxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJPVHZDYTJ3WlRHdW1VeWRqRTBlY05nXCIsXG4gIFwicGhvbmVJZFwiOiBcIjUzODMzNWI2LTQ2NWQtNDA5Ny1iMDEyLTE1ZWRjOGRmYjJlY1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMDMsXG4gICAgICAxNDAsXG4gICAgICAyMDEsXG4gICAgICAyNTQsXG4gICAgICAxMjYsXG4gICAgICAyNDYsXG4gICAgICAyMTQsXG4gICAgICAxNTEsXG4gICAgICAxMjksXG4gICAgICAyMDQsXG4gICAgICA3MyxcbiAgICAgIDIsXG4gICAgICA5LFxuICAgICAgMjIyLFxuICAgICAgMTk2LFxuICAgICAgMTUwLFxuICAgICAgMTQ5LFxuICAgICAgMTU5LFxuICAgICAgMTA4LFxuICAgICAgMjMzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDkxLFxuICAgICAgNDcsXG4gICAgICA3NCxcbiAgICAgIDI1MCxcbiAgICAgIDEwNCxcbiAgICAgIDYyLFxuICAgICAgMTQsXG4gICAgICAxNjgsXG4gICAgICAxOTgsXG4gICAgICA5OSxcbiAgICAgIDIwNSxcbiAgICAgIDY0LFxuICAgICAgMTAxLFxuICAgICAgMTQ4LFxuICAgICAgNjYsXG4gICAgICA2NixcbiAgICAgIDM1LFxuICAgICAgMTY4LFxuICAgICAgMTU1LFxuICAgICAgMTk2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkdIUDZFNkE3XCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjMwMTEzNzI2MjM6MjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJOYXdhYiBNYWppZFwiLFxuICAgIFwibGlkXCI6IFwiNjI0NjYwNTQ3MTc1MDE6MjFAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSUdicnJBR0VPMlZuTDRHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCI3dEtNaVJ1RU0xQS90OEhudjlGR2FmS2EybzRGQjhZMXpTbFRtZDZrZG5JPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIk1oOUhKSXdrUnpxU3JmT3RqU0hDM05SMDVzM1piOXlqSFFkVXg1RHNuYmJXRVRVb0UvclZSWGYrNDBoeDFCT3Zub3dVM3lqYzc2YjlJazd4OFhaYUNRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImE4ZjFEL0Vic2RHcllva3dYZnFNRmJ6Sm5jRi8vUXZOb2w4aUlKQUlzcXBqN3JVdTlRV1F1b3BaWWpVZXIrSTNSa2cva0FNMkRlZEdReDhxdTk1bGhRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzAxMTM3MjYyMzoyMUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDUsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAxMTRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTc0MTA5NzcxMyxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUZySFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRnJILmpzb24iOiAie1wia2V5RGF0YVwiOlwiSWNVbFpSdVlCVmNxZmdWb3lXNzloY2IreEoraFd2U05DcCt5Vyt1T0FtMD1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNzEyMDMzMTUzLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3NDEwOTc3MTQ2ODRcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.9",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
