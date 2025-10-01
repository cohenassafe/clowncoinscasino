# Background Image Setup - Countdown Page

## 🎨 How to Add Your Background Image

### **Step 1: Add Your Background Image**

1. **Place your background image** in the `/public/assets/images/` folder
2. **Recommended size:** 1920x1080px or larger
3. **Format:** JPG, PNG, or WebP
4. **File size:** Under 2MB for optimal loading

### **Step 2: Update the CSS**

Open `/src/App.css` and find this section (around line 14):

```css
.countdown-page {
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  background: var(--color-bg-primary);
  
  /* BACKGROUND IMAGE PLACEMENT: Replace this background with your image */
  /* Add your background image here */
  /* background-image: url('/assets/images/background.jpg'); */
  /* background-size: cover; */
  /* background-position: center; */
  /* background-repeat: no-repeat; */
}
```

### **Step 3: Uncomment and Update the Background**

Replace the commented lines with your actual image:

```css
.countdown-page {
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  background: var(--color-bg-primary);
  
  /* Replace 'background.jpg' with your actual image filename */
  background-image: url('/assets/images/your-background-image.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
```

### **Step 4: Optional - Add Overlay for Better Text Readability**

If your background image makes text hard to read, add an overlay:

```css
.countdown-page::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3); /* Adjust opacity as needed */
  z-index: 1;
}
```

## 🎯 **Example Setup:**

1. **Add image:** `/public/assets/images/casino-background.jpg`
2. **Update CSS:**
   ```css
   background-image: url('/assets/images/casino-background.jpg');
   background-size: cover;
   background-position: center;
   background-repeat: no-repeat;
   ```

## 📱 **Responsive Considerations:**

The background will automatically:
- ✅ Scale to fit all screen sizes
- ✅ Maintain aspect ratio
- ✅ Center the image
- ✅ Cover the entire viewport

## 🎨 **Design Tips:**

- **Dark backgrounds** work best with the current text colors
- **Avoid busy patterns** that might interfere with text readability
- **Consider adding a subtle overlay** for better contrast
- **Test on mobile devices** to ensure text remains readable

## 🚀 **After Adding Background:**

1. **Save the CSS file**
2. **Test locally** (if you have Node.js installed)
3. **Deploy to Vercel**
4. **Check on different devices** for readability

Your countdown page will look amazing with a custom background! 🎪
