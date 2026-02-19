# Next.js Multi-Language Documentation Site

A modern, high-performance documentation site built with Next.js 15 (App Router), supporting Internationalization (i18n), Incremental Static Regeneration (ISR), and Docker containerization.

## Features

-   **Internationalization (i18n)**: Built-in support for English (`en`), Spanish (`es`), French (`fr`), and German (`de`).
-   **Incremental Static Regeneration (ISR)**: Documentation pages are statically generated and revalidated every 60 seconds.
-   **App Router Architecture**: Leveraging Next.js 15+ server components and routing.
-   **Client-Side Search**: Fast, responsive search functionality.
-   **API Reference**: Integrated Swagger UI for API documentation.
-   **Dark/Light Mode**: Theme switching with persistence.
-   **Docker Ready**: Multi-stage Dockerfile for optimized production builds.

## Tech Stack

-   **Framework**: Next.js 15.1.0 (App Router)
-   **Styling**: Tailwind CSS
-   **Localization**: `negotiator`, `@formatjs/intl-localematcher` (middleware-based)
-   **Content**: Markdown with `gray-matter` and `react-markdown`
-   **API Docs**: `swagger-ui-react`
-   **Container**: Docker

## Getting Started

### Prerequisites

-   Node.js 18+
-   npm or yarn
-   Docker (optional, for containerization)

### Local Development

1.  **Install dependencies**:
    ```bash
    npm install
    ```

2.  **Run the development server**:
    ```bash
    npm run dev
    ```

3.  **Open the application**:
    Visit [http://localhost:3000](http://localhost:3000).

### Production Build (Local)

1.  **Build the application**:
    ```bash
    npm run build
    ```

2.  **Start the production server**:
    ```bash
    npm start
    ```

### Docker Setup

The project includes a multi-stage `Dockerfile` optimized for production using Next.js standalone mode.

1.  **Build and run with Docker Compose**:
    ```bash
    docker-compose up --build
    ```

2.  **Access the application**:
    Visit [http://localhost:3000](http://localhost:3000).

## Project Structure

-   `app/[locale]`: localized application routes.
-   `_docs`: Markdown documentation files, organized by version and language.
-   `components`: Reusable UI components (Sidebar, Search, etc.).
-   `public/locales`: JSON translation files.

## Documentation Workflow

To add new documentation:
1.  Create a markdown file in `_docs/<version>/<language>/<slug>.md`.
2.  Add frontmatter metadata:
    ```markdown
    ---
    title: Your Title
    description: Brief description
    ---
    ```
3.  The page will be automatically available at `/<language>/docs/<version>/<slug>`.
