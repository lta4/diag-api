Heroku deployment notes

1. Build & start
- Heroku runs `npm start` by default. The `Procfile` points to `npm start`.

2. Recommended `package.json` scripts
- Keep these in `package.json`:
  "scripts": {
    "start": "node server.js",
    "dev": "NODE_ENV=development node server.js",
    "dev:watch": "nodemon server.js"
  }

3. Environment
- Heroku provides `PORT` automatically. Your server reads `process.env.PORT || 3001`.
- Set `NODE_ENV` on Heroku if needed:
  heroku config:set NODE_ENV=production

4. Logs
- View runtime logs:
  heroku logs --tail

5. Troubleshooting
- If app crashes on start: check `heroku logs --tail` and `Procfile` correctness.
- If `package.json` uses `cross-env`, ensure it's installed or use plain `node server.js` for `start`.
