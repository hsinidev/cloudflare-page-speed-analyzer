# 🚀 Cloudflare Page Speed Analyzer

[![Live Demo](https://img.shields.io/badge/LIVE%20DEMO-SitemapGenerator.doodax.com-cyan?style=for-the-badge&logo=rocket)](https://SitemapGenerator.doodax.com)

A high-performance, SEO-optimized web application designed to analyze website metrics and Core Web Vitals (LCP, FCP, CLS). Built with modern web technologies, this tool simulates the **Cloudflare Speed API** to provide instant, actionable insights for developers and marketers.

---

## 🌟 Key Features

*   **Real-time Analysis**: Instant feedback on website performance.
*   **Core Web Vitals Focus**: Detailed breakdown of Largest Contentful Paint, First Contentful Paint, and Cumulative Layout Shift.
*   **Device Simulation**: Toggle between Desktop and Mobile viewports for comprehensive reports.
*   **Trend Visualization**: Interactive charts tracking performance history over the last 10 days.
*   **Immersive UI**: Features a dynamic, multi-colored galaxy background with particle animations.
*   **SEO Optimized**: Fully integrated with JSON-LD Schema, Open Graph tags, and sitemap generation.

## 🛠️ Tech Stack

*   **Frontend**: React 18+ (TypeScript)
*   **Styling**: Tailwind CSS (Utility-first CSS framework)
*   **Data Visualization**: Recharts
*   **Animations**: CSS3 Keyframes & Custom Particle Effects
*   **Build Tool**: Vite (Implied)

## 📂 Project Structure

```
/
├── public/                 # Static assets (favicons, robots.txt, sitemap)
│   ├── favicon.svg
│   ├── robots.txt
│   └── sitemap.xml
├── components/             # Reusable UI components
│   ├── Footer.tsx          # Site footer with legal links
│   ├── HistoryPanel.tsx    # Recent test history list
│   ├── InfoModal.tsx       # Pop-up modal for content pages
│   ├── LoadingIndicator.tsx
│   ├── MetricCard.tsx      # Individual score display
│   ├── ResultsDashboard.tsx# Main results view
│   ├── SeoArticle.tsx      # Schema-rich SEO content block
│   ├── TrendChart.tsx      # Performance graph
│   ├── UrlInputForm.tsx    # Main input field
│   └── modalContent.tsx    # Content for About, Privacy, etc.
├── services/               # API logic
│   └── cloudflareService.ts# Simulated backend service
├── types.ts                # TypeScript definitions
├── App.tsx                 # Main application entry
├── index.html              # HTML shell with global SEO
└── index.tsx               # React DOM injection
```

## 🚀 Getting Started

1.  Clone the repository.
2.  Install dependencies: `npm install`
3.  Run the development server: `npm run dev`
4.  Build for production: `npm run build`

## 📄 License

This project is open-source and available under the MIT License.

---

<div align="center">
  <strong>Powered by <a href="https://github.com/hsinidev">HSINI MOHAMED</a></strong>
</div>