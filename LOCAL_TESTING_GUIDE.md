# 🧪 Local Testing Guide (No Vercel CLI Required!)

Since you're on a company laptop and can't install Vercel CLI, I've added a **development fallback mode** that lets you test the app by simply opening the HTML file in your browser.

## ✅ Easy Local Testing (2 Steps!)

### Step 1: Open the File

Simply open `index.html` in your browser:

**Option A: Double-click the file**
- Navigate to your project folder
- Double-click `index.html`
- It will open in your default browser

**Option B: Drag and drop**
- Drag `index.html` into your browser window

**Option C: From terminal**
```bash
cd "/Users/nicolastecher/Downloads/untitled folder 3"
open index.html
```

### Step 2: Test It!

1. **Check Spotify Status**: You should see ✅ "Connected to Spotify API"
2. **Upload a test Excel file** (with tracks in column A, artists in column B)
3. **Click "Retrieve ISRCs"**
4. **Check the results** table
5. **Test the export checkbox** for release dates
6. **Download the Excel** file

That's it! No installation required! 🎉

---

## 🔒 Security Note

### Development Mode (Local Testing)
When you open the file directly, the app runs in **development mode**:
- ⚠️ Uses client-side authentication (credentials visible in browser console)
- ✅ Perfect for testing and development
- ⚠️ **Not secure** - only use for local testing!

### Production Mode (Deployed on Vercel)
When deployed on Vercel, the app automatically uses:
- ✅ Secure serverless function (`/api/spotify-token`)
- ✅ Credentials hidden in environment variables
- ✅ No exposure in browser
- ✅ **Fully secure** for production use!

The app automatically detects which mode to use, so you don't have to do anything!

---

## 🎯 Testing Checklist

Use this checklist to test all features:

- [ ] App loads successfully
- [ ] "Connected to Spotify API" status shows
- [ ] Can drag & drop Excel file
- [ ] Can click to browse and select Excel file
- [ ] File info displays correctly (filename, track count)
- [ ] "Retrieve ISRCs" button becomes enabled
- [ ] Processing starts when button is clicked
- [ ] Progress bar shows correctly
- [ ] Results table populates as tracks are processed
- [ ] Perfect matches show ✅
- [ ] Uncertain matches show ⚠️ with "?" indicator
- [ ] Not found tracks show ❌
- [ ] Search bar filters results correctly
- [ ] Release date checkbox is visible
- [ ] Export works with checkbox checked (includes release dates)
- [ ] Export works with checkbox unchecked (no release dates)
- [ ] Exported file is sorted: perfect → uncertain → not found
- [ ] All original columns are preserved in export

---

## 🐛 Troubleshooting Local Testing

### "Failed to connect to Spotify API"

**Check browser console:**
1. Right-click → Inspect → Console tab
2. Look for error messages
3. If you see CORS errors, that's normal - the fallback should still work

**Solution:** Refresh the page (Cmd+R or Ctrl+R)

### Results not showing

**Possible causes:**
- Excel file doesn't have the correct format (column A should have track titles)
- First row should be headers
- No valid data in the file

**Solution:** Check your Excel file structure

### App looks broken

**Browser cache issue:**
1. Hard refresh: **Cmd+Shift+R** (Mac) or **Ctrl+Shift+F5** (Windows)
2. Or clear browser cache

### Export not working

**Browser popup blocker:**
- Some browsers block downloads
- Check for popup blocker notification
- Allow downloads from `file://` protocol

---

## 📊 Test Excel File Format

Your test Excel file should look like this:

| Column A (Title) | Column B (Artist) | Column C (Empty) |
|-----------------|------------------|------------------|
| Track Title     | Artist Name      |                  |
| Bohemian Rhapsody | Queen          |                  |
| Billie Jean     | Michael Jackson  |                  |
| Shape of You    | Ed Sheeran       |                  |

- **Row 1**: Headers
- **Column A**: Track titles (required)
- **Column B**: Artists (optional but recommended)
- **Column C**: Will be filled with ISRCs

---

## 🚀 When Ready to Deploy

Once you've tested locally and everything works:

1. **Deploy to Vercel** (see `DEPLOYMENT_GUIDE.md`)
2. The app will **automatically switch** to secure mode
3. No code changes needed!

The development fallback is ignored in production - Vercel will use the secure serverless function instead.

---

## 💡 Tips

1. **Use a small test file first** (5-10 tracks) to test quickly
2. **Check browser console** if something doesn't work
3. **Test both with and without artist names** to see uncertain matches
4. **Try the search feature** to filter results
5. **Test export with checkbox both on and off**

---

## ❓ Need Help?

If you run into issues:
1. Check the browser console (F12 → Console)
2. Review the troubleshooting section above
3. Make sure your Excel file is formatted correctly
4. Try a different browser (Chrome usually works best)

Happy testing! 🎵

