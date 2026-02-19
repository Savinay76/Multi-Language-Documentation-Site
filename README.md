# 🌐 Next.js Multi-Language Documentation Site

![Next.js](https://img.shields.io/badge/Next.js-15.1-black?style=for-the-badge&logo=next.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-Ready-2496ED?style=for-the-badge&logo=docker&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-4.0-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

A production-ready, high-performance documentation platform built with **Next.js 15 App Router**. Designed for scalability, it features seamless internationalization (i18n), robust search, and an integrated API reference viewer.

---

## ✨ Key Features

-   **🌍 Internationalization (i18n)**: Native support for multiple languages (`en`, `es`, `fr`, `de`) with middleware-based locale detection.
-   **⚡ Incremental Static Regeneration (ISR)**: Blazing fast page loads with content that updates automatically every 60 seconds without rebuilds.
-   **🎨 Dark/Light Mode**: Fully responsive theme switching with system preference detection.
-   **🔍 Powerful Search**: Client-side full-text search powered by `flexsearch` for instant results.
-   **🛠️ API Reference**: Embedded **Swagger UI** to visualize OpenAPI specifications directly within the site.
-   **📦 Dockerized**: Optimized multi-stage `Dockerfile` for lightweight, production-ready container images.
-   **🧩 Component-Driven**: Modular UI with reusable components like `CodeBlock` (w/ copy to clipboard), `Sidebar`, and `TableOfContents`.

---

## 🏗️ Architecture & Tech Stack

-   **Core**: [Next.js 15](https://nextjs.org/) (App Router) & [React 19](https://react.dev/)
-   **Language**: [TypeScript](https://www.typescriptlang.org/)
-   **Styling**: [Tailwind CSS](https://tailwindcss.com/) & `lucide-react` icons
-   **Content**: Markdown processing with `gray-matter`, `react-markdown`, and `remark-gfm`
-   **Search**: `flexsearch`
-   **Docs API**: `swagger-ui-react`
-   **Deployment**: Docker & Docker Compose

---

## 🚀 Getting Started

Follow these steps to set up the project locally.

### Prerequisites

-   **Node.js** 18.17 or later
-   **npm** or **yarn**
-   **Docker** (Optional, for containerization)

### 💻 Local Development

1.  **Clone the repository**
    ```bash
    git clone https://github.com/Savinay76/Multi-Language-Documentation-Site.git
    cd Multi-Language-Documentation-Site
    ```

2.  **Install dependencies**
    ```bash
    npm install
    ```

3.  **Run the dev server**
    ```bash
    npm run dev
    ```

4.  **Explore**
    Open [http://localhost:3000](http://localhost:3000) in your browser.

### 🐳 Docker Deployment

Run the application in a production-like container environment.

```bash
# Build and start the container
docker-compose up --build -d

# Check logs
docker-compose logs -f
```

The app will be available at [http://localhost:3000](http://localhost:3000).

---

## 📂 Project Structure

```bash
├── app/
│   ├── [locale]/          # Localized routes
│   │   ├── docs/          # Documentation pages
│   │   └── page.tsx       # Landing page
│   └── api-reference/     # Swagger UI page
├── _docs/                 # 📝 Documentation Content
│   ├── v1/
│   │   ├── en/            # English docs
│   │   ├── es/            # Spanish docs
│   │   └── ...
├── components/            # 🧩 UI Components (Sidebar, Navbar, etc.)
├── public/
│   ├── locales/           # 🗣️ Translation JSONs
│   └── openapi.json       # API Specification
├── lib/                   # Utility functions
├── docker-compose.yml
└── Dockerfile
```

---

## 📝 Managing Documentation

### Adding a New Page
1.  Navigate to `_docs/<version>/<language>/`.
2.  Create a new markdown file (e.g., `getting-started.md`).
3.  Add the required frontmatter:
    ```markdown
    ---
    title: Getting Started
    description: How to install and use the library.
    ---

    # Content goes here...
    ```
4.  The page is instantly available at `/<lang>/docs/<version>/getting-started`.

### Updating API Docs
Replace the `public/openapi.json` file with your latest OpenAPI/Swagger specification.

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the Branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

---

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.
