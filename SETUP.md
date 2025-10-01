# React Setup Guide - ClownCoins Casino Landing Page

## 🚀 Quick Start (Without Node.js)

Since Node.js isn't installed on your system, here are your options:

### Option 1: Install Node.js (Recommended)

1. **Download Node.js:**
   - Go to [nodejs.org](https://nodejs.org)
   - Download the LTS version for Windows
   - Run the installer

2. **Verify Installation:**
   ```bash
   node --version
   npm --version
   ```

3. **Install Dependencies:**
   ```bash
   cd clowncoinscasino-landing
   npm install
   ```

4. **Start Development Server:**
   ```bash
   npm start
   ```

5. **Open Browser:**
   - Go to `http://localhost:3000`

### Option 2: Use the Vanilla Version

The original vanilla HTML/CSS/JS version is still available and works perfectly without any setup:

1. **Open directly in browser:**
   - Navigate to the `clowncoinscasino-landing` folder
   - Double-click `index.html` (if it still exists)

2. **Or use the React build files:**
   - The React components are ready to use
   - Just need Node.js to build and run

### Option 3: Online Development

Use online React development environments:

1. **CodeSandbox:**
   - Upload the project to [codesandbox.io](https://codesandbox.io)
   - Import from GitHub or upload files

2. **StackBlitz:**
   - Create new React project at [stackblitz.com](https://stackblitz.com)
   - Copy the component files

## 📁 What's Been Created

### React Project Structure:
```
clowncoinscasino-landing/
├── public/                    # Static files
│   ├── index.html            # HTML template
│   ├── manifest.json         # PWA manifest
│   ├── assets/              # Images and icons
│   └── partials/            # Legal pages
├── src/                     # React source code
│   ├── components/          # React components
│   │   ├── Header.js
│   │   ├── Hero.js
│   │   ├── HowItWorks.js
│   │   ├── Benefits.js
│   │   ├── CTA.js
│   │   ├── Footer.js
│   │   ├── LegalStrip.js
│   │   └── TypeformModal.js
│   ├── App.js               # Main App component
│   ├── App.css              # Component styles
│   ├── index.js             # React entry point
│   └── index.css            # Base styles
├── package.json             # Dependencies
└── README.md               # Documentation
```

## 🎯 Key React Features

### Components Created:
- **Header**: Logo and "Notify Me" button
- **Hero**: Main headline with CTA
- **HowItWorks**: Three-step process with icons
- **Benefits**: Key benefits with icons
- **CTA**: Final call to action
- **Footer**: Legal links and copyright
- **LegalStrip**: Compliance disclaimer
- **TypeformModal**: Email collection modal

### React Features:
- **Hooks**: useState, useEffect for state management
- **Event Handling**: Custom events for modal management
- **Accessibility**: ARIA labels and keyboard navigation
- **Responsive**: Mobile-first design
- **Performance**: Optimized re-renders and animations

## 🔧 Configuration Needed

### 1. Typeform URL
Update in `src/components/TypeformModal.js`:
```javascript
const TYPEFORM_URL = 'YOUR_ACTUAL_TYPEFORM_URL_HERE';
```

### 2. Assets
Replace placeholder files in `/public/assets/`:
- `logo.png` - Your logo (120x40px)
- `hero-placeholder.jpg` - Hero image (600x600px)
- `og-image.jpg` - Social sharing image (1200x630px)
- SVG icons in `/public/assets/icons/`

### 3. Analytics
Add your tracking code to components where events are tracked.

## 🚀 Next Steps

### To Run the React Version:
1. **Install Node.js** from [nodejs.org](https://nodejs.org)
2. **Open terminal** in the project folder
3. **Run commands:**
   ```bash
   npm install
   npm start
   ```
4. **Open** `http://localhost:3000`

### To Deploy:
1. **Build for production:**
   ```bash
   npm run build
   ```
2. **Deploy** the `build` folder to any hosting service

### To Use Without Node.js:
The vanilla HTML version is still available and works perfectly for immediate use!

## 🎨 Benefits of React Version

- **Component-based**: Easy to maintain and customize
- **Modern Development**: Hot reload, debugging tools
- **Performance**: Optimized rendering and state management
- **Scalability**: Easy to add new features
- **Deployment**: Easy deployment to modern platforms
- **Developer Experience**: Better tooling and debugging

## 📞 Support

If you need help with setup:
- Check the main README.md for detailed instructions
- Review component code for customization
- Contact: contact@clowncoinscasino.com

---

**Note**: The React version maintains the same design and functionality as the original, but with modern development practices and better maintainability.
