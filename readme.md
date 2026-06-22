<div align="center">

<img src="https://img.shields.io/badge/IRIS%20GO-Multi--Agent%20AI-00ff78?style=for-the-badge&logoColor=white" alt="IRIS GO"/>

# IRIS GO 🤖

### _One Message. An Entire AI Team Gets to Work._

**IRIS GO** is a local-first, open-source Multi-Agent AI System that runs entirely on your machine — a team of specialized AI agents that think, plan, and execute real tasks autonomously.


Not a chatbot. Not an assistant. **An AI Team. Yours.**

<br/>

[![GitHub stars](https://img.shields.io/github/stars/201Harsh/IRIS-GO?style=flat-square&color=00ff78)](https://github.com/201Harsh/IRIS-GO/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/201Harsh/IRIS-GO?style=flat-square&color=00cfff)](https://github.com/201Harsh/IRIS-GO/forks)
[![License: MIT](https://img.shields.io/badge/License-MIT-purple?style=flat-square)](LICENSE)
[![Open Source](https://img.shields.io/badge/Open%20Source-Free%20Forever-00ff78?style=flat-square)](https://github.com/201Harsh/IRIS-GO)
[![Made in India](https://img.shields.io/badge/Made%20in-India%20🇮🇳-ff6b35?style=flat-square)](https://github.com/201Harsh)

<br/>

> _"Chat karo. System obeys."_


</div>

---

## 📑 Table of Contents

- [Overview](#-overview)
- [How It Works](#-how-it-works)
- [Agent Team](#-agent-team)
- [Tech Stack](#-tech-stack)
- [Folder Structure](#-folder-structure)
- [Prerequisites](#-prerequisites)
- [Installation](#-installation)
- [Configuration](#-configuration)
- [Deployment](#-deployment)
- [Roadmap](#-roadmap)
- [Contributing](#-contributing)
- [License](#-license)
- [Architect](#-architect)

---

## ⚡ Overview

IRIS GO is built on one idea —

> **Execution over conversation.**

While every other AI tool talks, IRIS GO acts. It is a fully local multi-agent orchestration system where a **Master Agent** routes tasks to a team of specialized sub-agents — each one an expert at its job — all working simultaneously.

You send one message. The team figures out the rest.

```
"Clone stripe.com with dark theme and deploy it"

  Master Agent receives → Plans → Routes

  Browser Agent    →  Scrapes the site
  File Agent       →  Saves all assets
  Coder Agent      →  Rewrites with dark theme
  Coder Agent      →  Deploys via Docker

  Live URL → Sent to your phone. Done.
```

**Everything runs on your machine. Your data never leaves.**

---

## 🧠 How It Works

```
You (WhatsApp / Web / CLI / Mobile)
           │
           ▼
     Master Agent
  (understands · plans · routes · combines)
           │
    ┌──────┼──────┬──────┬──────┐
    ▼      ▼      ▼      ▼      ▼
Browser  File    OS    Coder  Research
Agent   Agent  Agent  Agent   Agent
    │      │      │      │      │
    └──────┴──────┴──────┴──────┘
                  │
            Results Merged
                  │
            Delivered to You ✓
```

All agents run **async and in parallel** — powered by LangGraph's stateful graph engine. One mistake? The system self-corrects. One agent slow? Others keep running.

---

## 🤖 Agent Team

| Agent                 | Role         | What It Does                                                              |
| --------------------- | ------------ | ------------------------------------------------------------------------- |
| 🧠 **Master Agent**   | Orchestrator | Understands intent, plans tasks, routes to agents, merges results         |
| 🌐 **Browser Agent**  | Internet     | Full browser control via PinchTab — navigate, click, scrape, login, forms |
| 📁 **File Agent**     | Filesystem   | Read, write, create, delete, organize any file or folder                  |
| 💻 **OS Agent**       | System       | Open/close apps, control windows, shortcuts, screenshots, OCR             |
| 👨‍💻 **Coder Agent**    | Development  | Write code, debug, run terminal commands, deploy projects                 |
| 🔍 **Research Agent** | Intelligence | Deep web crawl, multi-source research, structured reports                 |

---

## 💻 Tech Stack

```
Frontend      →  Next JS (App Router · SSR · Dashboard)
Backend       →  Express JS + TypeScript (REST API · Gateway)
AI Brain      →  LangChain + LangGraph (Multi-Agent · Async · Stateful)
Browser       →  PinchTab (Chrome Control · 800 tok/page · Sessions)
Deployment    →  Docker + Docker Compose (One command · Any machine)
AI Model      →  BYOK (OpenAI · Gemini · Ollama · No lock-in)
```

### Why This Stack?

- **LangGraph** — Stateful graph engine. Agents run in parallel, share memory, self-correct on failure. Not a simple chain — a real orchestration system.
- **PinchTab** — Converts Chrome into an API. Reads pages at 800 tokens instead of 10,000. Persistent sessions. Tab locking for multi-agent browser access.
- **BYOK** — Zero vendor lock-in. Use OpenAI, Gemini, local Ollama models — or switch anytime. Your keys, your cost, your control.
- **Docker** — Run on AWS, any VPS, or your own PC. One command. `docker compose up` and IRIS GO is live.

---

## 📁 Folder Structure

```
iris-go/
│
├── client/                   # Next JS Frontend
│   ├── app/                  # App Router pages
│   │   ├── page.tsx          # Main dashboard
│   │   └── layout.tsx        # Root layout
│   ├── components/           # UI components
│   ├── hooks/                # Custom React hooks
│   ├── lib/                  # Utilities
│   ├── public/               # Static assets
│   ├── styles/               # Global styles
│   ├── next.config.ts
│   └── package.json
│
├── server/                   # Express + TypeScript Backend
│   ├── agents/               # All AI Agents
│   │   ├── master.ts         # Master orchestrator
│   │   ├── browser.ts        # Browser agent (PinchTab)
│   │   ├── file.ts           # File agent
│   │   ├── os.ts             # OS agent
│   │   ├── coder.ts          # Coder agent
│   │   └── research.ts       # Research agent
│   ├── tools/                # Agent tools
│   ├── routes/               # Express API routes
│   ├── memory/               # Vector + graph memory
│   ├── gateway/              # WhatsApp / Telegram / Web gateway
│   ├── index.ts              # Server entry point
│   └── package.json
│
├── .github/                  # GitHub Automation
│   ├── workflows/
│   │   ├── ci.yml            # CI pipeline
│   │   ├── deploy.yml        # Auto deploy
│   │   └── release.yml       # Release automation
│   ├── dependabot.yml        # Dependency updates
│   ├── ISSUE_TEMPLATE/
│   └── PULL_REQUEST_TEMPLATE/
│
├── .vscode/                  # VS Code settings
├── Dockerfile                # Container build
├── .dockerignore
├── .gitignore
├── README.md
├── SECURITY.md
├── CONTRIBUTING.md
└── LICENSE
```

---

## 🔧 Prerequisites

Before you start, make sure you have:

- **Node.js** v20+
- **npm** or **yarn**
- **Docker** + **Docker Compose**
- **Git**
- An API key from any of: OpenAI / Google Gemini / Groq — or run **Ollama** locally for 100% free inference

> Basic knowledge of JavaScript/TypeScript and React is enough to follow along. This series is built for real — no fluff.

---

## 🚀 Installation

```bash
# 1. Clone the repo
git clone https://github.com/201Harsh/IRIS-GO.git
cd iris-go

# 2. Install dependencies
cd client && npm install
cd ../server && npm install

# 3. Setup environment variables
cp .env.example .env
# Add your API keys inside .env

# 4. Run in development
# Terminal 1 — Frontend
cd client && npm run dev

# Terminal 2 — Backend
cd server && npm run dev
```

---

## ⚙️ Configuration

Create a `.env` file in `/server`:

```env
# AI Model — choose one
OPENAI_API_KEY=your_key_here
GEMINI_API_KEY=your_key_here
GROQ_API_KEY=your_key_here

# Or use Ollama locally (free)
OLLAMA_BASE_URL=http://localhost:11434

# App config
PORT=3001
NODE_ENV=development
```

**BYOK — Bring Your Own Key.**
Zero lock-in. Switch models anytime. Your keys never leave your machine.

---

## 🐳 Deployment

### Run with Docker (Recommended)

```bash
# Build and run everything
docker compose up --build

# IRIS GO is now running at
# Frontend  →  http://localhost:3000
# Backend   →  http://localhost:3001
```

### Deploy to AWS / VPS

```bash
# SSH into your server
ssh user@your-server-ip

# Clone and run
git clone https://github.com/201Harsh/IRIS-GO.git
cd iris-go
docker compose up -d

# Done. IRIS GO is live.
```

---

## 🗺️ Roadmap

- [x] Project architecture and design
- [x] Folder structure and tech stack
- [ ] Master Agent — LangGraph orchestrator
- [ ] Browser Agent — PinchTab integration
- [ ] File Agent — filesystem control
- [ ] OS Agent — system control
- [ ] Coder Agent — code generation and execution
- [ ] Research Agent — deep web crawl
- [ ] Web dashboard — Next JS
- [ ] WhatsApp / Telegram gateway
- [ ] Docker deployment
- [ ] Mobile app — React Native
- [ ] Plugin marketplace

---

## 🤝 Contributing

IRIS GO is built in public — contributions are welcome.

```bash
# Fork the repo
# Create your branch
git checkout -b feat/your-feature

# Commit your changes
git commit -m "feat: your feature description"

# Push and open a PR
git push origin feat/your-feature
```

Read [CONTRIBUTING.md](CONTRIBUTING.md) before submitting.

---

## ⚠️ Disclaimer

IRIS GO has deep system-level execution capabilities including browser control, file system access, and OS automation. Use responsibly. The maintainers are not liable for misuse.

---

## 📜 License

MIT License — see [LICENSE](LICENSE) file.

---

## 👨‍💻 Architect

<div align="center">

**Harsh Pandey**
_AI Systems Engineer · Building in Public_

[![Instagram](https://img.shields.io/badge/Instagram-@201Harshs-E4405F?style=flat-square&logo=instagram)](https://instagram.com/201Harshs)
[![GitHub](https://img.shields.io/badge/GitHub-@201Harsh-181717?style=flat-square&logo=github)](https://github.com/201Harsh)

</div>

---

<div align="center">

**⭐ Star this repo if you want the tutorial series to keep going**

_IRIS GO — Chat karo. System obeys._

**Made with ❤️ by Harsh · India 🇮🇳**

</div>
