# setup.ps1
Write-Host "Setting up Shrikant's Portfolio..." -ForegroundColor Cyan

# Delete existing folder if it exists
if (Test-Path "shrikant-portfolio") {
    Write-Host "Removing existing folder..." -ForegroundColor Yellow
    Remove-Item -Path "shrikant-portfolio" -Recurse -Force
}

# Create Next.js app
Write-Host "Creating Next.js app..." -ForegroundColor Green
npx create-next-app@latest shrikant-portfolio --typescript --tailwind --eslint --app

# Navigate to project
cd shrikant-portfolio

# Install dependencies
Write-Host "Installing dependencies..." -ForegroundColor Green
npm install framer-motion gsap lenis @react-three/fiber @react-three/drei three lucide-react @radix-ui/react-dialog @radix-ui/react-slot class-variance-authority clsx tailwind-merge tailwindcss-animate react-hook-form @hookform/resolvers zod react-intersection-observer react-typed next-mdx-remote gray-matter remark remark-html date-fns react-github-calendar

# Install dev dependencies
npm install -D @types/node @types/react @types/react-dom @types/three

# Create folder structure
Write-Host "Creating folder structure..." -ForegroundColor Green

$folders = @(
    "app\(routes)\about",
    "app\(routes)\projects",
    "app\(routes)\projects\[slug]",
    "app\(routes)\experience",
    "app\(routes)\github",
    "app\(routes)\photography",
    "components\ui",
    "components\layout",
    "components\sections",
    "components\animations",
    "components\3d",
    "components\ai-assistant",
    "hooks",
    "lib\api",
    "lib\constants",
    "lib\utils",
    "lib\types",
    "animations",
    "assets\images\hero",
    "assets\images\projects",
    "assets\images\photography",
    "assets\images\about",
    "assets\fonts",
    "assets\icons",
    "styles",
    "config",
    "public"
)

foreach ($folder in $folders) {
    New-Item -ItemType Directory -Path $folder -Force | Out-Null
}

# Create files
Write-Host "Creating files..." -ForegroundColor Green

$files = @(
    "app\layout.tsx",
    "app\providers.tsx",
    "app\globals.css",
    "app\page.tsx",
    "app\(routes)\page.tsx",
    "app\(routes)\about\page.tsx",
    "app\(routes)\projects\page.tsx",
    "app\(routes)\projects\[slug]\page.tsx",
    "app\(routes)\experience\page.tsx",
    "app\(routes)\github\page.tsx",
    "app\(routes)\photography\page.tsx",
    "components\ui\button.tsx",
    "components\ui\card.tsx",
    "components\ui\glass-card.tsx",
    "components\ui\animated-grid.tsx",
    "components\ui\gradient-text.tsx",
    "components\ui\magnetic-button.tsx",
    "components\layout\navbar.tsx",
    "components\layout\footer.tsx",
    "components\layout\section-wrapper.tsx",
    "components\sections\loader.tsx",
    "components\sections\hero.tsx",
    "components\sections\about.tsx",
    "components\sections\skills.tsx",
    "components\sections\projects.tsx",
    "components\sections\experience.tsx",
    "components\sections\achievements.tsx",
    "components\sections\learning.tsx",
    "components\sections\github.tsx",
    "components\sections\terminal.tsx",
    "components\sections\photography.tsx",
    "components\sections\contact.tsx",
    "components\animations\mouse-follower.tsx",
    "components\animations\floating-particles.tsx",
    "components\animations\marquee.tsx",
    "components\animations\parallax-section.tsx",
    "components\3d\scene.tsx",
    "components\3d\floating-shapes.tsx",
    "components\3d\skills-galaxy.tsx",
    "components\ai-assistant\assistant.tsx",
    "hooks\use-scroll.ts",
    "hooks\use-mouse.ts",
    "hooks\use-intersection.ts",
    "hooks\use-typing.ts",
    "hooks\use-terminal.ts",
    "hooks\use-github.ts",
    "lib\api\github.ts",
    "lib\api\email.ts",
    "lib\constants\projects.ts",
    "lib\constants\skills.ts",
    "lib\constants\experience.ts",
    "lib\constants\achievements.ts",
    "lib\constants\learning.ts",
    "lib\utils\animations.ts",
    "lib\utils\helpers.ts",
    "lib\utils\terminal-commands.ts",
    "lib\types\index.ts",
    "animations\fade.ts",
    "animations\slide.ts",
    "animations\scale.ts",
    "animations\variants.ts",
    "config\site.ts",
    "config\seo.ts",
    "config\navigation.ts",
    "styles\theme.css",
    ".env.local"
)

foreach ($file in $files) {
    New-Item -ItemType File -Path $file -Force | Out-Null
}

Write-Host "Setup complete!" -ForegroundColor Green
Write-Host "Next steps:" -ForegroundColor Yellow
Write-Host "1. Add your images to public/images/" -ForegroundColor White
Write-Host "2. Update .env.local with your API keys" -ForegroundColor White
Write-Host "3. Run npm run dev to start development" -ForegroundColor White
Write-Host "4. Open http://localhost:3000 in your browser" -ForegroundColor White