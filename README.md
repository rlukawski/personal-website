# Rafał Łukawski - Personal Website

Modern portfolio website showcasing professional experience, technical skills, certifications, and projects. Built with cutting-edge web technologies and internationalization support.

## ✨ Features

- 🌍 **Bilingual Support** - English and Polish languages via i18next
- 📱 **Fully Responsive** - Modern, mobile-first design
- 🎨 **Beautiful UI** - Built with Tailwind CSS 4 and Headless UI
- 📄 **Downloadable CV** - Professional resume available in PDF format
- 🏢 **Professional Sections**:
  - About - Introduction and background
  - Experience - Career history with detailed descriptions
  - Skills - Technical stack visualization
  - Certificates - Professional certifications
  - Contact - Get in touch section
- 🐳 **Docker Ready** - Containerized deployment configuration
- ⚡ **Fast Performance** - Built with Vite for optimal speed

## 🛠 Tech Stack

- **Frontend Framework**: React 19 + TypeScript
- **Build Tool**: Vite 7
- **Styling**: Tailwind CSS 4
- **UI Components**: Headless UI, React Icons
- **Internationalization**: i18next, react-i18next
- **Containerization**: Docker & Docker Compose
- **Code Quality**: ESLint, TypeScript ESLint

## 📋 Prerequisites

- Node.js 20+ 
- npm or yarn
- Docker (optional, for containerized deployment)

## 🚀 Getting Started

### Installation

```bash
npm install
```

### Development

Run the development server:

```bash
npm run dev
```

The site will be available at `http://localhost:5173`

### Build

Build for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

### Code Quality

Run ESLint:

```bash
npm run lint
```

## 🐳 Docker Deployment

Build and run with Docker Compose:

```bash
docker-compose up -d
```

Or build the Docker image manually:

```bash
docker build -t personal-website .
docker run -p 80:80 personal-website
```

## 📁 Project Structure

```
src/
├── components/      # React components
│   ├── About.tsx
│   ├── Experience.tsx
│   ├── Skills.tsx
│   ├── Certificates.tsx
│   ├── Contact.tsx
│   ├── Navigation.tsx
│   ├── Footer.tsx
│   └── ...
├── locales/         # i18n translations
│   ├── en.json
│   └── pl.json
├── assets/          # Static assets (images, PDFs)
├── contexts/        # React contexts
├── utils/           # Utility functions
├── i18n.ts          # i18next configuration
├── App.tsx          # Main app component
└── main.tsx         # Entry point
```

## 🌐 Internationalization

The website supports multiple languages using i18next:
- English (en)
- Polish (pl)

Translation files are located in `src/locales/`.

## 📝 License

MIT