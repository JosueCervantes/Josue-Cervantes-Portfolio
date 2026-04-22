# Portfolio

![CI](https://github.com/JosueCervantes/portfolio/actions/workflows/ci.yml/badge.svg)
![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-8-646CFF?logo=vite&logoColor=white)
![License](https://img.shields.io/badge/license-MIT-green)

Personal portfolio built with React 19 and Vite — showcasing projects, skills, and professional background.

## Tech Stack

| Layer | Technology |
|-------|-----------|
| UI | React 19 |
| Bundler | Vite 8 |
| Linter | ESLint 9 |
| CI/CD | GitHub Actions |

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
src/
├── assets/       # Static assets (images, fonts)
├── App.jsx       # Root component
├── App.css       # Root styles
├── main.jsx      # Entry point
└── index.css     # Global styles
```

## CI/CD

Every push to `feature/dev` and every pull request targeting `main` runs the full pipeline:

1. **Lint** — ESLint checks for code quality issues
2. **Build** — Vite production build to catch compile-time errors
3. **Artifact** — `dist/` is uploaded for 7 days so builds are inspectable

## Branch Strategy

```
main          ← production-ready, protected
└── feature/dev  ← active development, merges via PR
```

## License

MIT
