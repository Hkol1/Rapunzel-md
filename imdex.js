const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const ytdl = require('ytdl-core');
const fs = require('fs');
const app = express();

app.use(bodyParser.json());

// 💢 Root route
app.get('/', (req, res) => {
  res.send('🔕 Rapunzel MD Downloader Bot is running!');
});

// 🔴 YouTube Downloader
app.post('/ytmp4', async (req, res) => {
  const { url } = req.body;
  if (!ytdl.validateURL(url)) return res.status(400).send('❌ Invalid YouTube URL');

  const info = await ytdl.getInfo(url);
  const title = info.videoDetails.title;
  const stream = ytdl(url, { quality: '18' });

  res.setHeader('Content-Disposition', `attachment; filename="title.mp4"`);
  stream.pipe(res);
);

// 🔴 TikTok Downloader (no watermark via 3rd-party API)
app.post('/tiktok', async (req, res) => 
  const  url  = req.body;
  try 
    const api = `https://api.tiklydown.me/api/download?url={encodeURIComponent(url)}`;
    const { data } = await axios.get(api);
    res.json({ video: data.video, title: data.title });
