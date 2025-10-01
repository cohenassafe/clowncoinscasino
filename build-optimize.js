// Build optimization script for Vercel deployment
const fs = require('fs');
const path = require('path');

// Remove unnecessary files that might cause build issues
const filesToRemove = [
  'node_modules/.cache',
  'build',
  '.DS_Store',
  'Thumbs.db'
];

const dirsToRemove = [
  'node_modules/.cache'
];

// Clean up function
function cleanup() {
  console.log('🧹 Cleaning up build artifacts...');
  
  filesToRemove.forEach(file => {
    if (fs.existsSync(file)) {
      fs.unlinkSync(file);
      console.log(`✅ Removed: ${file}`);
    }
  });
  
  dirsToRemove.forEach(dir => {
    if (fs.existsSync(dir)) {
      fs.rmSync(dir, { recursive: true, force: true });
      console.log(`✅ Removed directory: ${dir}`);
    }
  });
}

// Optimize package.json for production
function optimizePackageJson() {
  console.log('📦 Optimizing package.json...');
  
  const packagePath = path.join(__dirname, 'package.json');
  const packageJson = JSON.parse(fs.readFileSync(packagePath, 'utf8'));
  
  // Remove dev dependencies that aren't needed in production
  const optimizedPackage = {
    ...packageJson,
    scripts: {
      ...packageJson.scripts,
      'vercel-build': 'npm run build'
    }
  };
  
  fs.writeFileSync(packagePath, JSON.stringify(optimizedPackage, null, 2));
  console.log('✅ Package.json optimized');
}

// Main execution
if (require.main === module) {
  cleanup();
  optimizePackageJson();
  console.log('🚀 Build optimization complete!');
}
