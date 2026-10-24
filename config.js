/**
 * ============================================================================
 * PERSONAL LANDING PAGE CONFIGURATION (config.js)
 * ============================================================================
 * Edit the values in this file to customize your GitHub Pages website,
 * including your homepage, /blog endpoint, and /now endpoint.
 * No build step is required—just save and refresh (or push to GitHub).
 */

window.PORTFOLIO_CONFIG = {
  // --------------------------------------------------------------------------
  // 1. BASIC PROFILE & BIO
  // --------------------------------------------------------------------------
  name: "Anubhav Singh",
  handle: "@anusinghg",
  role: "Software Engineer · AI Agents & Developer Tooling",
  location: "Bengaluru, India", // TODO: Update or set to "" to hide
  availability: "Open to interesting collaborations & engineering roles", // Set to "" to hide status pill
  bio: [
    "I design and build reliable software systems, autonomous AI agents, and developer tools that eliminate friction in engineering workflows.",
    "Recently, I've been focused on grounded multi-agent architectures using Google ADK and Gemini—combining static AST analysis with LLM reasoning and deterministic guardrails."
  ],

  // --------------------------------------------------------------------------
  // 2. SOCIAL & CONTACT LINKS
  // --------------------------------------------------------------------------
  socials: [
    {
      label: "GitHub",
      url: "https://github.com/anusinghg",
      username: "github.com/anusinghg"
    },
    {
      label: "LinkedIn",
      url: "https://linkedin.com/in/your-handle", // TODO: Replace with your LinkedIn URL
      username: "linkedin.com/in/your-handle"
    },
    {
      label: "X / Twitter",
      url: "https://x.com/your_handle", // TODO: Replace with your X handle
      username: "@your_handle"
    },
    {
      label: "Email",
      url: "mailto:you@example.com", // TODO: Replace with your email
      username: "you@example.com"
    },
    {
      label: "Resume",
      url: "./resume.pdf", // TODO: Add resume.pdf to this folder or link to Google Drive/Notion
      username: "PDF"
    }
  ],

  // --------------------------------------------------------------------------
  // 3. CURRENT FOCUS AREAS
  // --------------------------------------------------------------------------
  focusAreas: [
    {
      title: "Autonomous AI Agents",
      description: "Building verifiable agent workflows with Google ADK, Gemini, and local Ollama failovers backed by strict output guardrails."
    },
    {
      title: "Developer Tooling & Static Analysis",
      description: "Combining AST inspection, git diff analysis, and automated evaluation suites to catch bugs and doc-rot before production."
    },
    {
      title: "Cloud & Distributed Systems",
      description: "Designing resilient APIs, background workers, and cloud-native services with clean observability and low operational overhead."
    }
  ],

  // --------------------------------------------------------------------------
  // 4. FEATURED PROJECTS
  // --------------------------------------------------------------------------
  projects: [
    {
      title: "Doc Truth Verifier",
      subtitle: "Autonomous Documentation Auditor · GDG Cloud Bengaluru",
      description:
        "An AI software auditor built with Google ADK and Gemini 3.8 Flash that cross-examines README claims against actual Python AST control flow and uncommitted Git diffs, complete with 100% citation grounding verification and ready-to-apply diff patches.",
      tags: ["Python", "Google ADK", "Gemini", "Ollama", "AST", "Evals"],
      links: [
        { label: "Source Code", url: "https://github.com/gdgcblr/open-source-agents/tree/main/agents/doc-truth-verifier" }
      ],
      featured: true
    },
    {
      title: "Project Alpha (Stub)",
      subtitle: "Distributed Event Pipeline",
      description:
        "TODO: Replace with your project description. High-throughput event ingestion service with schema validation, dead-letter replay, and Prometheus metrics export.",
      tags: ["Go", "Kafka", "PostgreSQL", "Docker"],
      links: [
        { label: "GitHub", url: "https://github.com/anusinghg/project-alpha" },
        { label: "Live Demo", url: "https://example.com" }
      ],
      featured: false
    },
    {
      title: "DevFlow CLI (Stub)",
      subtitle: "Developer Productivity Utility",
      description:
        "TODO: Replace with your project description. Zero-config command-line tool that automates repository onboarding, environment checks, and pre-PR verification.",
      tags: ["TypeScript", "Node.js", "CLI", "GitHub Actions"],
      links: [
        { label: "GitHub", url: "https://github.com/anusinghg/devflow-cli" }
      ],
      featured: false
    },
    {
      title: "CloudPulse API (Stub)",
      subtitle: "Lightweight Telemetry & Health Monitor",
      description:
        "TODO: Replace with your project description. Multi-region endpoint monitor with webhook signing, configurable backoff policies, and real-time latency percentiles.",
      tags: ["Python", "FastAPI", "Redis", "GCP"],
      links: [
        { label: "GitHub", url: "https://github.com/anusinghg/cloudpulse-api" }
      ],
      featured: false
    }
  ],

  // --------------------------------------------------------------------------
  // 5. BLOG POSTS (Served at /blog and /blog/?post=<slug>)
  // --------------------------------------------------------------------------
  posts: [
    {
      slug: "catching-doc-rot-with-google-adk-and-ast",
      title: "Catching Semantic Doc-Rot with Google ADK and Python AST",
      date: "2026-10-24",
      readingTime: "4 min read",
      tags: ["AI Agents", "Google ADK", "Python AST", "Guardrails"],
      summary:
        "Why regex linters fail to catch outdated README claims—and how combining AST indexing with Gemini and deterministic citation guardrails solves it.",
      // Write your post body using clean HTML or paragraphs below:
      content: `
        <p>Every engineering team has been burned by <strong>doc-rot</strong>—where a repository's <code>README.md</code> promises that an API retries 3 times with exponential backoff, or uses a <code>CACHE_TTL_SECONDS=300</code> environment variable, when in reality a developer changed the code months ago.</p>
        <h3>Why Static Linters Aren't Enough</h3>
        <p>Traditional linters and regex scripts can't catch semantic drift because documentation claims are written in natural-language prose while the ground truth lives in Abstract Syntax Tree (AST) control flow and uncommitted Git diffs.</p>
        <h3>Combining AST Indexing with Google ADK</h3>
        <p>To solve this without blowing up token limits on 100+ file repositories, <strong>Doc Truth Verifier</strong> uses a two-stage pipeline:</p>
        <ul>
          <li><strong>Smart Claim-Targeted AST Index:</strong> Parses Python symbols, constants, CLI flags, and decorators across the repository and ranks files against extracted README claims.</li>
          <li><strong>Deterministic Output Guardrails:</strong> Every verdict (<code>VERIFIED</code>, <code>CONTRADICTED</code>, or <code>UNVERIFIED</code>) must cite exact file and line numbers verified against the actual source tree.</li>
        </ul>
        <pre><code>CLM-001  Upstream API retried up to 3 times w/ backoff  -> CONTRADICTED (app.py:47-57)
CLM-006  CACHE_TTL_SECONDS env var (default: 300)       -> CONTRADICTED (app.py:17)</code></pre>
        <p>By pairing LLM semantic reasoning with deterministic AST and citation verification, we get an autonomous auditor that teams can actually trust in CI.</p>
      `
    },
    {
      slug: "designing-reliable-local-cloud-llm-failovers",
      title: "Designing Reliable Cloud-to-Local LLM Failovers (Stub)",
      date: "2026-10-10",
      readingTime: "3 min read",
      tags: ["Architecture", "Gemini", "Ollama", "Reliability"],
      summary:
        "TODO: Replace with your own blog post. A practical guide to keeping agent workflows resilient when API rate limits or network drops happen.",
      content: `
        <p>TODO: Replace this stub content in <code>config.js</code> with your own post! You can add as many posts as you want to the <code>posts</code> array, or set <code>externalUrl: "https://..."</code> on any post to link directly to Medium, Dev.to, or Substack.</p>
        <h3>How to Add a New Blog Post</h3>
        <p>Open <code>config.js</code>, add a new object to <code>posts</code> with a unique <code>slug</code>, <code>title</code>, <code>date</code>, <code>summary</code>, and <code>content</code>, then commit and push.</p>
      `
    }
  ],

  // --------------------------------------------------------------------------
  // 6. /NOW PAGE (Served at /now — what you're focused on right now)
  // --------------------------------------------------------------------------
  now: {
    updatedAt: "October 2026",
    intro: "A snapshot of what I'm currently building, learning, and exploring (inspired by nownownow.com).",
    sections: [
      {
        heading: "Building",
        items: [
          "Developing autonomous code & documentation verification agents using Google ADK and Gemini.",
          "Refining evaluation harnesses and deterministic guardrails for developer tools."
        ]
      },
      {
        heading: "Learning & Exploring",
        items: [
          "Multi-agent orchestration patterns and low-latency local model failovers with Ollama.",
          "Distributed systems reliability and cloud-native observability."
        ]
      },
      {
        heading: "Reading / Community",
        items: [
          "Participating in GDG Cloud Bengaluru — Road to DevFest 2026 (FORK. BUILD. MERGE.).",
          "TODO: Add books, papers, or side-projects you're currently enjoying."
        ]
      }
    ]
  },

  // --------------------------------------------------------------------------
  // 7. TECH STACK & SKILLS
  // --------------------------------------------------------------------------
  skills: [
    {
      category: "Languages",
      items: ["Python", "TypeScript", "JavaScript", "Go", "SQL", "Bash"]
    },
    {
      category: "AI & Agent Engineering",
      items: ["Google ADK", "Gemini API", "Ollama", "AST Code Indexing", "Guardrails & Evals", "Prompt Engineering"]
    },
    {
      category: "Backend & Web",
      items: ["FastAPI", "Node.js", "React", "Next.js", "PostgreSQL", "Redis", "REST / gRPC"]
    },
    {
      category: "Cloud & Infrastructure",
      items: ["Google Cloud (GCP)", "Docker", "GitHub Actions", "Linux", "Git"]
    }
  ],

  // --------------------------------------------------------------------------
  // 8. EXPERIENCE / HIGHLIGHTS (Optional — leave array empty [] to hide section)
  // --------------------------------------------------------------------------
  experience: [
    {
      role: "Senior / Software Engineer (Stub)",
      org: "Company Name",
      period: "2024 — Present",
      summary: "TODO: Add 1–2 sentences about your impact, systems owned, or key achievements."
    },
    {
      role: "Open Source Builder — Road to DevFest 2026",
      org: "GDG Cloud Bengaluru",
      period: "2026",
      summary: "Built Doc Truth Verifier using Google ADK, combining AST static analysis with LLM reasoning and deterministic guardrails."
    }
  ]
};
