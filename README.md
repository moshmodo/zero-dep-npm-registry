# 📦 Zero-Dependency NPM Registry

> A curated index of npm packages with **zero dependencies** — lightweight, secure, and self-contained.

---

## Table of Contents

- [Project Overview](#project-overview)
- [Why Zero Dependencies?](#why-zero-dependencies)
- [Key Features](#key-features)
- [Zero-Dependency Package Registry](#zero-dependency-package-registry)
- [Getting Started](#getting-started)
- [Registry Format](#registry-format)
- [Updating the Registry](#updating-the-registry)
- [Validation and Handling False Positives](#validation-and-handling-false-positives)
- [Contributing](#contributing)
- [Showcase](#showcase-your-status)
- [License](#license)
- [Code of Conduct](#code-of-conduct)

---

## Project Overview

This repository maintains a curated registry of open-source npm packages (JavaScript & TypeScript) that have **no external dependencies**. This project serves as a valuable resource for developers seeking to build more robust, secure, and performant applications by minimizing supply chain risks and bundle sizes. Packages are primarily identified by the `zero-dependency` topic on GitHub.

The registry is stored as a single, sortable [`registry.json`](./registry.json) file.

---

## Why Zero Dependencies?

In today's development landscape, managing dependencies is critical. Packages with zero external dependencies offer significant advantages:

-   🔒 **Minimize Supply Chain Risk:** Eliminates vulnerabilities introduced through transitive dependencies. You know exactly what code is running in your project.
-   🪶 **Keep Bundles Lean:** Crucial for frontend and edge environments where every byte counts. Smaller bundles lead to faster load times and reduced bandwidth usage.
-   🧩 **Stay in Control:** Simplifies auditing, debugging, and understanding your project's codebase.

---

## Key Features

*   **Curated List:** Focuses exclusively on packages with no external dependencies.
*   **Developer-Centric:** Designed to help developers build more secure and efficient applications.
*   **Single JSON Source:** Easy to parse and integrate into build processes or tooling.
*   **Sorted by Popularity:** Registry entries are ordered by GitHub stars, highlighting community favorites.
*   **Automated Updates:** Scripts are provided to keep the registry current.

---

## Zero-Dependency Package Registry

This section lists the curated zero-dependency npm packages. The list is generated automatically and sorted by name.

<!-- REGISTRY_TABLE_START -->

| Name | Full Name | Description | Stars ⭐ |
|------|-----------|-------------|------:|
| [14kb-web](https://github.com/beno5950/14kb-web) | beno5950/14kb-web | Ultra-lightweight web development under 14KB with a fast Fastify API and SQLite. Minimalist blogs, weather and tasks apps with zero framework overhead and strong performance. 🐙 | 1 |
| [3d-spinner](https://github.com/runelaang/3d-spinner) | runelaang/3d-spinner | A lightweight, zero-dependency 3D spinner, loader, and progress indicator for JavaScript. | 1 |
| [3d-web-contents](https://github.com/instax-dutta/3d-web-contents) | instax-dutta/3d-web-contents | Zero-dep drop-in 3D components for React + Three.js — 8 copy-paste templates (CSS3DCard, ParticleField, MorphingBlob, WarpSpeed, TunnelScroll, GeometryRepel, LightingReflection, BarChart3D). Own the source, skip the npm bloat. | 0 |
| [a11y-control](https://github.com/QuentinMerle/a11y-control) | QuentinMerle/a11y-control | A lightweight, standalone accessibility menu, WCAG 2.1 AA compliant, delivered as a native Web Component. Zero dependencies. Zero build. One single tag. | 0 |
| [AB-Audio-Player](https://github.com/mattbartley/AB-Audio-Player) | mattbartley/AB-Audio-Player | HTML, CSS, JS only A/B audio player. Toggle and compare two versions of the same audio. | 26 |
| [acmejs](https://github.com/clshortfuse/acmejs) | clshortfuse/acmejs | Zero-dependency ACME Client | 7 |
| [aeo-image](https://github.com/vsima/aeo-image) | vsima/aeo-image | Write descriptive metadata — captions, keywords, alt text — into WebP, AVIF, HEIC, JPEG & PNG so AI answer engines (ChatGPT, Perplexity, Google AI Overviews) and search can read your images. The only pure-JS, zero-dependency library that writes XMP to AVIF/HEIC. Byte-preserving (never re-encodes). Runs on Node, Bun, Deno & edge. | 1 |
| [afetch](https://github.com/naveedurrehman/afetch) | naveedurrehman/afetch | Add fetch() to 'a' and 'button' via attributes only. | 3 |
| [affine-cipher-cli](https://github.com/kszongic/affine-cipher-cli) | kszongic/affine-cipher-cli | Encrypt and decrypt text using the affine cipher. CLI tool. Zero dependencies. | 0 |
| [agent-block](https://github.com/Brainrot-Creations/agent-block) | Brainrot-Creations/agent-block | Building the walls. Blocking AI agents from reading, scraping and automating your site. | 1 |
| [agent-breaker](https://github.com/lalPratheesh/agent-breaker) | lalPratheesh/agent-breaker | A universal zero-dependency TypeScript wrapper for AI agent loops that acts as a financial and behavioral circuit breaker (cost ceilings & runaway repetition detection). | 0 |
| [agent-diaries](https://github.com/swapwarick/agent-diaries) | swapwarick/agent-diaries | **Agent Diaries** is a lightweight, zero-dependency local SDK that prevents your AI agents from getting stuck in loops. By providing a persistent "diary" memory, your agents can remember their past actions, avoid repetitive tasks, and reflect on their results over time. | 3 |
| [agent-doc](https://github.com/mixxan05/agent-doc) | mixxan05/agent-doc | Zero-dependency git pre-commit hook that keeps your docs in sync with your code via an LLM - and never blocks a commit. | 1 |
| [agent-engine](https://github.com/xQUANTUMTECH/agent-engine) | xQUANTUMTECH/agent-engine | Lightweight model-agnostic cognitive agent engine (TypeScript). Planning, task decomposition, context management & tool-discipline over any OpenAI-compatible model. | 1 |
| [agent-hq](https://github.com/tools-for-agents/agent-hq) | tools-for-agents/agent-hq | 🛰️ Operating platform for an all-agent company: shared memory, kanban-for-agents, agent registry, live dashboard + MCP server. Zero dependencies. | 0 |
| [agent-work-console](https://github.com/jhcdev/agent-work-console) | jhcdev/agent-work-console | Cross-platform Hermes Agent work console PWA | 0 |
| [AgentBudget](https://github.com/MukundaKatta/AgentBudget) | MukundaKatta/AgentBudget | Token + dollar budget caps for AI agents — throws when an LLM call would push past the ceiling. Zero deps, drop into any provider SDK. | 0 |
| [AgentBudgetMcp](https://github.com/MukundaKatta/AgentBudgetMcp) | MukundaKatta/AgentBudgetMcp | MCP server for @mukundakatta/agentbudget — token + dollar budget caps for AI agents over stdio. Drop into Claude Desktop, Cursor, Cline, Windsurf, Zed. | 0 |
| [agentcast](https://github.com/MukundaKatta/agentcast) | MukundaKatta/agentcast | Structured output for any LLM call — validate, retry with feedback, return typed data or throw. Zero deps. Sibling to agentsnap + agentguard. | 0 |
| [agentcast-mcp](https://github.com/MukundaKatta/agentcast-mcp) | MukundaKatta/agentcast-mcp | MCP server: structured-output enforcer for any LLM. Wraps @mukundakatta/agentcast. | 1 |
| [agentfit](https://github.com/MukundaKatta/agentfit) | MukundaKatta/agentfit | Fit your messages into the LLM context window. Token-aware truncation with multiple strategies, pluggable tokenizers, zero deps. | 0 |
| [agentfit-mcp](https://github.com/MukundaKatta/agentfit-mcp) | MukundaKatta/agentfit-mcp | MCP server: token-aware message truncation. Wraps @mukundakatta/agentfit. | 1 |
| [agentguard](https://github.com/MukundaKatta/agentguard) | MukundaKatta/agentguard | Network egress firewall for AI agents — declarative allowlist of domains an agent's tools can fetch, throws on violation. Zero deps. | 0 |
| [agentguard-mcp](https://github.com/MukundaKatta/agentguard-mcp) | MukundaKatta/agentguard-mcp | MCP server: declarative network-egress firewall for agent tools. Wraps @mukundakatta/agentguard. | 1 |
| [agentkit](https://github.com/MukundaKatta/agentkit) | MukundaKatta/agentkit | The agent reliability stack in one install: fit, guard, snap, vet, cast. | 0 |
| [agentmeter](https://github.com/davidcjw/agentmeter) | davidcjw/agentmeter | See what your AI coding agent actually costs — cost & efficiency reports from local Claude Code transcripts | 0 |
| [agentsnap](https://github.com/MukundaKatta/agentsnap) | MukundaKatta/agentsnap | Snapshot tests for AI agents — record tool-call traces, diff against baselines, fail CI on regressions. Zero deps. | 0 |
| [agentsnap-action](https://github.com/MukundaKatta/agentsnap-action) | MukundaKatta/agentsnap-action | GitHub Action for AI agent tool-call snapshot tests. Diffs current traces against baselines, posts PR comments on drift. Wraps @mukundakatta/agentsnap. | 0 |
| [agentsnap-mcp](https://github.com/MukundaKatta/agentsnap-mcp) | MukundaKatta/agentsnap-mcp | MCP server: snapshot tests for tool-call traces. Wraps @mukundakatta/agentsnap. | 0 |
| [agenttrace](https://github.com/MukundaKatta/agenttrace) | MukundaKatta/agenttrace | Cost and latency tracking for AI agent runs. Wraps your LLM call, returns a per-step + per-run breakdown. | 0 |
| [agentvet](https://github.com/MukundaKatta/agentvet) | MukundaKatta/agentvet | Validate LLM-generated tool args before execution. Wrap your tools with a schema; throws ToolArgError with an LLM-friendly retry hint. Zero deps. | 0 |
| [agentvet-action](https://github.com/MukundaKatta/agentvet-action) | MukundaKatta/agentvet-action | GitHub Action that lints LLM tool definitions (Anthropic / OpenAI / MCP shapes). Wraps @mukundakatta/agentvet. | 0 |
| [agentvet-mcp](https://github.com/MukundaKatta/agentvet-mcp) | MukundaKatta/agentvet-mcp | MCP server: validate tool-call args before execution. Wraps @mukundakatta/agentvet. | 1 |
| [agentwatch](https://github.com/davidcjw/agentwatch) | davidcjw/agentwatch | A live perch over your Claude Code agents — a zero-dependency terminal dashboard of every active session in real time. The runtime sibling to agentmeter. | 0 |
| [ahize](https://github.com/productdevbook/ahize) | productdevbook/ahize | One unified API for 18 live-chat & customer-support widgets. Zero deps, tree-shakeable, SSR-safe, CSP-aware, strict TypeScript. | 29 |
| [ahmad-awais-deepseek-v4-toolrepair](https://github.com/TeFuirnever/ahmad-awais-deepseek-v4-toolrepair) | TeFuirnever/ahmad-awais-deepseek-v4-toolrepair | DeepSeek V4 beats Opus 4.7 with one repair layer. Auto-repair tool-calling quirks in Claude Code & OpenCode. Zero deps, 30s install. | 3 |
| [ai-eyes](https://github.com/mcarbonell/ai-eyes) | mcarbonell/ai-eyes | Let AI assistants see browser errors. Zero-dependency logging bridge for debugging web apps with Copilot, Cursor, and other AI coding tools. | 0 |
| [ai-output-runtime](https://github.com/wxkingstar/ai-output-runtime) | wxkingstar/ai-output-runtime | Schema-validated JSON blocks for AI-generated reports — Markdown source, safe runtime, zero AI-generated HTML/CSS/JS. Works with Claude Code, Codex, any agent. | 2 |
| [aiclientjs](https://github.com/florysnug949/aiclientjs) | florysnug949/aiclientjs | Build a lightweight AI client for JavaScript and TypeScript with one function, any model, streaming, and structured output, no dependencies | 1 |
| [aiclientjs](https://github.com/amit641/aiclientjs) | amit641/aiclientjs |  | 1 |
| [aikit](https://github.com/Cryptoteep/aikit) | Cryptoteep/aikit | A tiny, zero-dependency TypeScript toolkit for building AI applications — prompt templates, message builders, token estimation, cost calculation, and context-window management. | 1 |
| [aircast](https://github.com/tykimos/aircast) | tykimos/aircast | Your phone is the remote and the mirror — a zero-dependency live web presenter. Touch/laser/voice/hand-gesture control, live iframe slides, rooms with QR sharing, rear-camera screen mapping. | 0 |
| [ajs](https://github.com/qddegtya/ajs) | qddegtya/ajs | 🪄 Just another javascript utility library used by other @qddegtya JS projects. | 5 |
| [AkadeniaHelpers](https://github.com/akadenia/AkadeniaHelpers) | akadenia/AkadeniaHelpers | Zero-dependency TypeScript utility library covering dates, strings, objects, maps, files, and more — modular and tree-shakeable. | 5 |
| [alkaline](https://github.com/davccavalcante/alkaline) | davccavalcante/alkaline | Embeddable, zero-dependency durable execution for agents and NHEs. Deterministic replay, retries, cycle detection, a token budget, and a multi-agent task board, with no sidecar service. | 1 |
| [alpinejs-cache](https://github.com/Himmlisch-Studios/alpinejs-cache) | Himmlisch-Studios/alpinejs-cache | Persist and expire data easily with Alpine JS | 1 |
| [ambient-scan](https://github.com/miruns/ambient-scan) | miruns/ambient-scan | Zero-dependency single-file server for normalized environmental data: temperature, air quality, UV index, humidity, wind, and geolocation. | 0 |
| [ampmTimepicker](https://github.com/akreid/ampmTimepicker) | akreid/ampmTimepicker | Zero-dependency, vanilla JS timepicker as a native Web Component. Keyboard accessible & 12h/24h support. | 0 |
| [anim8-grid](https://github.com/muratdemirci/anim8-grid) | muratdemirci/anim8-grid | Animated responsive image grid. Zero dependencies. Framework-agnostic. | 2 |
| [ansi-rainbow-cli](https://github.com/kszongic/ansi-rainbow-cli) | kszongic/ansi-rainbow-cli |  | 0 |
| [anvil](https://github.com/tools-for-agents/anvil) | tools-for-agents/anvil | 🔨 Throwaway Docker sandbox for agents: run code/commands in isolated, resource-limited containers with structured results. CLI + MCP. Zero deps. | 0 |
| [api-api-keys-scope-doctor](https://github.com/funnyhcat-dotcom/api-api-keys-scope-doctor) | funnyhcat-dotcom/api-api-keys-scope-doctor | Audit API key scope docs for key types, least privilege, rotation, revocation, leak response, audit logs, limits, IP allowlists, and errors. | 0 |
| [api-api-quota-billing-doctor](https://github.com/funnyhcat-dotcom/api-api-quota-billing-doctor) | funnyhcat-dotcom/api-api-quota-billing-doctor | Audit API quota/billing docs for quota model, billable units, overages, hard/soft limits, rate-limit distinction, reset windows, usage APIs, alerts, plans, invoices, disputes, and privacy. | 0 |
| [api-api-version-negotiation-doctor](https://github.com/funnyhcat-dotcom/api-api-version-negotiation-doctor) | funnyhcat-dotcom/api-api-version-negotiation-doctor | Audit API docs for version negotiation strategy, defaults, errors, SDK config, caching, lifecycle, and migration paths. | 0 |
| [api-audit-log-export-doctor](https://github.com/funnyhcat-dotcom/api-audit-log-export-doctor) | funnyhcat-dotcom/api-audit-log-export-doctor | Audit audit-log export docs for schema, filters, formats, integrity signatures, chain-of-custody, permissions, redaction, retention, async jobs, limits, and SIEM guidance. | 0 |
| [api-backup-restore-runbook-doctor](https://github.com/funnyhcat-dotcom/api-backup-restore-runbook-doctor) | funnyhcat-dotcom/api-backup-restore-runbook-doctor | Audit backup/restore runbooks for assets, RPO/RTO, frequency, PITR, encryption, prechecks, restore steps, verification, rollback, drills, monitoring, audit evidence, automation, and ownership. | 0 |
| [api-batch-import-contract-doctor](https://github.com/funnyhcat-dotcom/api-batch-import-contract-doctor) | funnyhcat-dotcom/api-batch-import-contract-doctor | Audit batch import docs for job flow, file format, limits, validation, partial success, error reports, idempotency, statuses, privacy, cleanup, and rollback. | 0 |
| [api-billing-invoice-dispute-doctor](https://github.com/funnyhcat-dotcom/api-billing-invoice-dispute-doctor) | funnyhcat-dotcom/api-billing-invoice-dispute-doctor | Audit billing/invoice dispute docs for eligibility, evidence, intake, SLAs, statuses, usage reconciliation, tax/currency, refunds/credits, approvals, communication, audit, APIs, metrics, and ownership. | 0 |
| [api-changelog-rss-doctor](https://github.com/funnyhcat-dotcom/api-changelog-rss-doctor) | funnyhcat-dotcom/api-changelog-rss-doctor | Audit API changelog/RSS docs for feed discovery, stable URLs, metadata, categories, breaking changes, deprecations, migration guidance, archives, cache/rate limits, authenticity, metrics, and ownership. | 0 |
| [api-circuit-breaker-docs-doctor](https://github.com/funnyhcat-dotcom/api-circuit-breaker-docs-doctor) | funnyhcat-dotcom/api-circuit-breaker-docs-doctor | Audit circuit breaker docs for states, thresholds, rolling windows, fallback, retries, error classification, observability, testing, and runbooks. | 0 |
| [api-cookie-policy-doctor](https://github.com/funnyhcat-dotcom/api-cookie-policy-doctor) | funnyhcat-dotcom/api-cookie-policy-doctor | Audit cookie policy docs for inventory, Secure/HttpOnly/SameSite, prefixes, domain/path scope, expiry, consent, CSRF/auth flows, third-party cookies, deletion, examples, tests, and ownership. | 0 |
| [api-cursor-pagination-doctor](https://github.com/funnyhcat-dotcom/api-cursor-pagination-doctor) | funnyhcat-dotcom/api-cursor-pagination-doctor | Audit API cursor pagination docs for parameters, response shape, traversal, limits, ordering, opaque cursors, errors, SDK loops, and performance notes. | 0 |
| [api-customer-facing-changelog-doctor](https://github.com/funnyhcat-dotcom/api-customer-facing-changelog-doctor) | funnyhcat-dotcom/api-customer-facing-changelog-doctor | Audit customer-facing API changelogs for dates, impact, action required, breaking changes, migration links, rollout, examples, deprecations, subscriptions, and support paths. | 0 |
| [api-data-classification-doctor](https://github.com/funnyhcat-dotcom/api-data-classification-doctor) | funnyhcat-dotcom/api-data-classification-doctor | Audit API data-classification docs for PII, secrets, handling rules, encryption, access control, retention, logging redaction, vendors, ownership, and CI enforcement. | 0 |
| [api-data-deletion-request-doctor](https://github.com/funnyhcat-dotcom/api-data-deletion-request-doctor) | funnyhcat-dotcom/api-data-deletion-request-doctor | Audit data deletion/erasure request API docs for flow, identity verification, scope, exceptions, timelines, statuses, examples, confirmations, backups, audit logs, webhooks, auth, and privacy law context. | 0 |
| [api-data-retention-policy-doctor](https://github.com/funnyhcat-dotcom/api-data-retention-policy-doctor) | funnyhcat-dotcom/api-data-retention-policy-doctor | Audit data retention policy docs for scope, periods, categories, deletion methods, legal holds, backups, erasure requests, automation, verification, privacy, statuses, owners, and effective dates. | 0 |
| [api-data-subprocessor-doctor](https://github.com/funnyhcat-dotcom/api-data-subprocessor-doctor) | funnyhcat-dotcom/api-data-subprocessor-doctor | Audit data subprocessor disclosures for vendors, purpose, data categories, regions, DPA/legal terms, security controls, change notices, objections, retention, transfer mechanisms, and ownership. | 0 |
| [api-deprecation-email-doctor](https://github.com/funnyhcat-dotcom/api-deprecation-email-doctor) | funnyhcat-dotcom/api-deprecation-email-doctor | Audit API deprecation email templates for affected scope, timelines, impact, migration path, examples, CTAs, reminders, support, metrics, compliance, approvals, and ownership. | 0 |
| [api-docs-doctor-suite](https://github.com/funnyhcat-dotcom/api-docs-doctor-suite) | funnyhcat-dotcom/api-docs-doctor-suite | Unified zero-dependency API/SaaS docs quality suite that auto-detects doc types and audits launch, migration, webhook, billing, refund, privacy, and operations readiness. | 0 |
| [api-error-code-catalog-doctor](https://github.com/funnyhcat-dotcom/api-error-code-catalog-doctor) | funnyhcat-dotcom/api-error-code-catalog-doctor | Audit API error docs for stable codes, HTTP status mapping, retryability, SDK handling, observability, and privacy. | 0 |
| [api-error-taxonomy-doctor](https://github.com/funnyhcat-dotcom/api-error-taxonomy-doctor) | funnyhcat-dotcom/api-error-taxonomy-doctor | Audit API error taxonomy docs for stable codes, HTTP mapping, response schema, retryability, validation details, auth errors, correlation IDs, redaction, examples, SDK handling, and ownership. | 0 |
| [api-export-manifest-doctor](https://github.com/funnyhcat-dotcom/api-export-manifest-doctor) | funnyhcat-dotcom/api-export-manifest-doctor | Audit data export manifest docs for file lists, checksums, schema versions, signed URL expiry, metadata, record counts, formats, verification, privacy, retry, errors, retention, and audit logs. | 0 |
| [api-feature-flag-api-doctor](https://github.com/funnyhcat-dotcom/api-feature-flag-api-doctor) | funnyhcat-dotcom/api-feature-flag-api-doctor | Audit feature flag API docs for flag model, evaluation, targeting, rollout, environments, fallbacks, SDK caching, audit logs, permissions, rollback, metrics, consistency, cleanup, and privacy. | 0 |
| [api-file-upload-policy-doctor](https://github.com/funnyhcat-dotcom/api-file-upload-policy-doctor) | funnyhcat-dotcom/api-file-upload-policy-doctor | Audit API file upload docs for flow, limits, MIME policy, validation, malware scanning, signed URLs, privacy, errors, and cleanup. | 0 |
| [api-filter-query-doctor](https://github.com/funnyhcat-dotcom/api-filter-query-doctor) | funnyhcat-dotcom/api-filter-query-doctor | Audit API filter/query docs for syntax, operators, fields, encoding, examples, errors, performance, injection safety, and SDK builders. | 0 |
| [api-health-check-contract-doctor](https://github.com/funnyhcat-dotcom/api-health-check-contract-doctor) | funnyhcat-dotcom/api-health-check-contract-doctor | Audit health/readiness/liveness check docs for endpoints, status codes, schemas, dependencies, timeouts, exposure, Kubernetes probes, monitoring, and maintenance behavior. | 0 |
| [api-idempotent-consumer-doctor](https://github.com/funnyhcat-dotcom/api-idempotent-consumer-doctor) | funnyhcat-dotcom/api-idempotent-consumer-doctor | Audit idempotent event consumer docs for stable IDs, dedupe stores, transactions, side effects, ordering, replay, TTL, failures, concurrency, observability, and tests. | 0 |
| [api-incident-postmortem-doctor](https://github.com/funnyhcat-dotcom/api-incident-postmortem-doctor) | funnyhcat-dotcom/api-incident-postmortem-doctor | Audit incident postmortems for summary, timeline, impact, detection, root cause, mitigation, communication, what went well/wrong, action items, prevention, blamelessness, severity, and ownership. | 0 |
| [api-json-merge-patch-doctor](https://github.com/funnyhcat-dotcom/api-json-merge-patch-doctor) | funnyhcat-dotcom/api-json-merge-patch-doctor | Audit JSON Merge Patch docs for RFC 7396 media type, null deletion, omitted fields, array replacement, examples, validation, ETags, errors, and safety. | 0 |
| [api-json-schema-compat-doctor](https://github.com/funnyhcat-dotcom/api-json-schema-compat-doctor) | funnyhcat-dotcom/api-json-schema-compat-doctor | Audit JSON Schema compatibility docs for backward/forward rules, required fields, additionalProperties, type changes, enums, defaults, versioning, validation, diff checks, rollout, and ownership. | 0 |
| [api-migration-guide-doctor](https://github.com/funnyhcat-dotcom/api-migration-guide-doctor) | funnyhcat-dotcom/api-migration-guide-doctor | Audit API migration guides for steps, examples, rollback, validation, rollout, SDK impact, and troubleshooting. | 0 |
| [api-oauth-consent-screen-doctor](https://github.com/funnyhcat-dotcom/api-oauth-consent-screen-doctor) | funnyhcat-dotcom/api-oauth-consent-screen-doctor | Audit OAuth consent-screen docs for app identity, scopes, plain-language purpose, risks, privacy disclosures, redirect URI safety, revocation, offline access, examples, and support. | 0 |
| [api-oauth-token-lifetime-doctor](https://github.com/funnyhcat-dotcom/api-oauth-token-lifetime-doctor) | funnyhcat-dotcom/api-oauth-token-lifetime-doctor | Audit OAuth token-lifetime docs for access/refresh/ID-token TTLs, rotation, revocation, risk-based lifetimes, scopes, clock skew, storage, validation, errors, monitoring, and ownership. | 0 |
| [api-openapi-example-doctor](https://github.com/funnyhcat-dotcom/api-openapi-example-doctor) | funnyhcat-dotcom/api-openapi-example-doctor | Audit OpenAPI docs for practical examples: requests, responses, errors, auth, pagination, idempotency, webhooks, realistic values, and validation hints. | 0 |
| [api-openapi-pagination-doctor](https://github.com/funnyhcat-dotcom/api-openapi-pagination-doctor) | funnyhcat-dotcom/api-openapi-pagination-doctor | Audit OpenAPI pagination docs for style, parameters, response envelope, links, stable ordering, limits, cursor lifetime, errors, filters, mutations, SDK guidance, and compatibility. | 0 |
| [api-openapi-security-scheme-doctor](https://github.com/funnyhcat-dotcom/api-openapi-security-scheme-doctor) | funnyhcat-dotcom/api-openapi-security-scheme-doctor | Audit OpenAPI security scheme docs for securitySchemes, operation security, OAuth flows/scopes, bearer/JWT validation, API key locations, errors, rotation, docs consistency, and CI linting. | 0 |
| [api-outbox-event-doctor](https://github.com/funnyhcat-dotcom/api-outbox-event-doctor) | funnyhcat-dotcom/api-outbox-event-doctor | Audit transactional outbox/event docs for schema, atomic writes, relay workers, idempotency, ordering, retries, DLQ, monitoring, cleanup, and failures. | 0 |
| [api-refund-policy-doctor](https://github.com/funnyhcat-dotcom/api-refund-policy-doctor) | funnyhcat-dotcom/api-refund-policy-doctor | Audit refund policy docs for eligibility, non-refundable cases, partial refunds, refund timing, credits, tax/currency, intake, approvals, SLA, API examples, communication, audit, metrics, and ownership. | 0 |
| [api-request-id-doctor](https://github.com/funnyhcat-dotcom/api-request-id-doctor) | funnyhcat-dotcom/api-request-id-doctor | Audit API docs for request IDs, correlation IDs, trace context, propagation, logging, support workflows, SDK access, and privacy. | 0 |
| [api-request-signing-doctor](https://github.com/funnyhcat-dotcom/api-request-signing-doctor) | funnyhcat-dotcom/api-request-signing-doctor | Audit API request-signing docs for algorithms, canonical requests, signed headers, payload hashes, replay protection, key rotation, verification errors, examples, SDKs, and monitoring. | 0 |
| [api-sandbox-environment-doctor](https://github.com/funnyhcat-dotcom/api-sandbox-environment-doctor) | funnyhcat-dotcom/api-sandbox-environment-doctor | Audit API sandbox/test environment docs for base URLs, credentials, test data, cleanup, webhooks, isolation, limits, go-live guidance, and safety warnings. | 0 |
| [api-sdk-retry-policy-doctor](https://github.com/funnyhcat-dotcom/api-sdk-retry-policy-doctor) | funnyhcat-dotcom/api-sdk-retry-policy-doctor | Audit SDK retry policy docs for retryable errors, backoff+jitter, max attempts, timeouts, idempotency, Retry-After, cancellation, observability, config, tests, and compatibility. | 0 |
| [api-sdk-timeout-config-doctor](https://github.com/funnyhcat-dotcom/api-sdk-timeout-config-doctor) | funnyhcat-dotcom/api-sdk-timeout-config-doctor | Audit SDK timeout docs for defaults, phases, overrides, cancellation, retries, errors, streaming, observability, testing, and compatibility. | 0 |
| [api-secret-rotation-runbook-doctor](https://github.com/funnyhcat-dotcom/api-secret-rotation-runbook-doctor) | funnyhcat-dotcom/api-secret-rotation-runbook-doctor | Audit secret-rotation runbooks for inventory, triggers, prechecks, dual-secret rollout, rotation steps, verification, rollback, revocation, audit evidence, monitoring, communication, automation, and ownership. | 0 |
| [api-security-headers-doctor](https://github.com/funnyhcat-dotcom/api-security-headers-doctor) | funnyhcat-dotcom/api-security-headers-doctor | Audit HTTP security-header docs for CSP, HSTS, clickjacking, nosniff, referrer policy, permissions policy, CORS, cookies, cache/download headers, reporting, rollout, and tests. | 0 |
| [api-session-management-doctor](https://github.com/funnyhcat-dotcom/api-session-management-doctor) | funnyhcat-dotcom/api-session-management-doctor | Audit session-management docs for creation, cookie attributes, idle/absolute timeout, renewal, logout invalidation, MFA, device UI, concurrency, CSRF, risk detection, storage, tests, and ownership. | 0 |
| [api-slo-error-budget-doctor](https://github.com/funnyhcat-dotcom/api-slo-error-budget-doctor) | funnyhcat-dotcom/api-slo-error-budget-doctor | Audit API SLO and error-budget docs for targets, SLIs, burn-rate alerts, incidents, exclusions, status reporting, telemetry, owners, and rollout safety. | 0 |
| [api-status-page-incident-doctor](https://github.com/funnyhcat-dotcom/api-status-page-incident-doctor) | funnyhcat-dotcom/api-status-page-incident-doctor | Audit status-page incident communication docs for scope, severity, components, timelines, customer language, mitigation, resolution, subscribers, SLA/SLO, templates, accessibility, and ownership. | 0 |
| [api-subscription-plan-change-doctor](https://github.com/funnyhcat-dotcom/api-subscription-plan-change-doctor) | funnyhcat-dotcom/api-subscription-plan-change-doctor | Audit subscription plan change docs for upgrades, downgrades, proration, invoices, refunds, entitlements, permissions, previews, webhooks, support, audit, and ownership. | 0 |
| [api-sunset-header-doctor](https://github.com/funnyhcat-dotcom/api-sunset-header-doctor) | funnyhcat-dotcom/api-sunset-header-doctor | Audit API docs for Sunset and Deprecation headers, timelines, migration guides, and post-sunset errors. | 0 |
| [api-support-escalation-doctor](https://github.com/funnyhcat-dotcom/api-support-escalation-doctor) | funnyhcat-dotcom/api-support-escalation-doctor | Audit support escalation docs for severity, SLA targets, routing, ownership, escalation paths, customer impact, ticket fields, privacy, communications, incidents, handoff, metrics, and review. | 0 |
| [api-tenant-isolation-docs-doctor](https://github.com/funnyhcat-dotcom/api-tenant-isolation-docs-doctor) | funnyhcat-dotcom/api-tenant-isolation-docs-doctor | Audit SaaS/API tenant isolation docs for identity claims, authorization, data partitioning, cross-tenant prevention, audit logs, caches, storage, events, tests, and incidents. | 0 |
| [api-usage-metering-doctor](https://github.com/funnyhcat-dotcom/api-usage-metering-doctor) | funnyhcat-dotcom/api-usage-metering-doctor | Audit usage metering/billing docs for billable units, aggregation, rounding, idempotency, late events, quotas, usage APIs, privacy, auditability, and versioning. | 0 |
| [api-user-invite-flow-doctor](https://github.com/funnyhcat-dotcom/api-user-invite-flow-doctor) | funnyhcat-dotcom/api-user-invite-flow-doctor | Audit user-invite flow docs for scope, invite creation, token security, expiration, acceptance, roles, revocation, duplicates, domain policy, abuse controls, email, audit events, examples, and monitoring. | 0 |
| [api-webhook-dead-letter-doctor](https://github.com/funnyhcat-dotcom/api-webhook-dead-letter-doctor) | funnyhcat-dotcom/api-webhook-dead-letter-doctor | Audit webhook dead-letter docs for DLQ behavior, failure criteria, retries, failed records, replay, idempotency, retention, privacy, signatures, ordering, and alerts. | 0 |
| [api-webhook-ordering-doctor](https://github.com/funnyhcat-dotcom/api-webhook-ordering-doctor) | funnyhcat-dotcom/api-webhook-ordering-doctor | Audit webhook ordering docs for ordering guarantees, sequence numbers, partition keys, idempotency, retries, out-of-order handling, replay, DLQ, signatures, and monitoring. | 0 |
| [api-webhook-replay-doctor](https://github.com/funnyhcat-dotcom/api-webhook-replay-doctor) | funnyhcat-dotcom/api-webhook-replay-doctor | Audit webhook replay docs for retention, cursor ranges, filtering, idempotency, ordering, signatures, DLQ handling, safety controls, observability, permissions, and ownership. | 0 |
| [api-webhook-schema-version-doctor](https://github.com/funnyhcat-dotcom/api-webhook-schema-version-doctor) | funnyhcat-dotcom/api-webhook-schema-version-doctor | Audit webhook docs for schema versions, compatibility, signatures, replay testing, delivery semantics, privacy, and governance. | 0 |
| [api-webhook-security-doctor](https://github.com/funnyhcat-dotcom/api-webhook-security-doctor) | funnyhcat-dotcom/api-webhook-security-doctor | Audit webhook security docs for signatures, canonical payloads, replay protection, secret rotation, verification, TLS, endpoint ownership, retries, idempotency, privacy, monitoring, and incidents. | 0 |
| [api-websocket-reconnect-doctor](https://github.com/funnyhcat-dotcom/api-websocket-reconnect-doctor) | funnyhcat-dotcom/api-websocket-reconnect-doctor | Audit WebSocket docs for endpoint/auth, lifecycle states, heartbeat, reconnect backoff, close codes, subscription restore, resume cursors, delivery guarantees, and client examples. | 0 |
| [apidocgen](https://github.com/nadonghuang/apidocgen) | nadonghuang/apidocgen | 🚀 Zero-dependency API documentation generator from code comments | 0 |
| [archlang](https://github.com/ChanMeng666/archlang) | ChanMeng666/archlang | A declarative language that compiles to professional SVG floor plans — like Typst/LaTeX, but for architecture. Built for AI agents: deterministic output, JSON diagnostics that carry their own fix, and a describe/lint channel that verifies a plan against its brief without rendering an image. Zero-dependency TypeScript. | 2 |
| [arcsecond](https://github.com/francisrstokes/arcsecond) | francisrstokes/arcsecond | ✨Zero Dependency Parser Combinator Library for JS Based on Haskell's Parsec | 577 |
| [ARE](https://github.com/BeratARPA/ARE) | BeratARPA/ARE | A lightweight, zero-dependency Action-Rule-Event engine for .NET (C#, Unity) and JavaScript/TypeScript. Build complex logic pipelines with a fluent API. | 31 |
| [argoyle](https://github.com/stamat/argoyle) | stamat/argoyle | Minimal, zero-dependency CLI argument parser with auto-generated help for Node.js | 0 |
| [artifact-organizer](https://github.com/keepYaoung/artifact-organizer) | keepYaoung/artifact-organizer | Agent skill that turns semantic JSON into self-contained, themed HTML — then stacks your artifacts into one persistent, restyleable dashboard. Zero dependencies, opens offline. | 2 |
| [aseq](https://github.com/njlr/aseq) | njlr/aseq | Useful functions for manipulating JavaScript async generators | 2 |
| [AstuteDict](https://github.com/Telichkin/AstuteDict) | Telichkin/AstuteDict | Small and simple basis for your own js router | 0 |
| [async-minikit](https://github.com/richsundev/async-minikit) | richsundev/async-minikit | Tiny zero-dependency async toolkit for Node.js and browsers: sleep(), sleepUntil(), retry(), timeout(), debounceAsync(), throttleAsync() | 0 |
| [asyncraft](https://github.com/toris-dev/asyncraft) | toris-dev/asyncraft | Zero-dependency async utilities: retry with backoff, timeout, concurrency limit, and async pool — fully typed, AbortSignal-aware | 1 |
| [attribution-artisan](https://github.com/hunt3r157/attribution-artisan) | hunt3r157/attribution-artisan | Zero‑dep CLI + GitHub Action that generates THIRD_PARTY_NOTICES.md from your installed dependencies and (optionally) embeds license texts for MIT/BSD, etc. Pairs perfectly with License Lens. | 1 |
| [Aura](https://github.com/IzzoSol/Aura) | IzzoSol/Aura | AURA — dependency-free LLM token-saver. Answer recurring prompts free (cache/compute/skills), compress history, and DISTILL bloated system prompts. CLI + MCP server (Claude/Cursor/Claude Code) + library. v0.5.0 | 0 |
| [auth](https://github.com/ExorTek/auth) | ExorTek/auth |  Framework-agnostic, zero-dependency authentication toolkit for Node.js. 22 small packages under one scope — hash, HMAC, KDFs, AEAD ciphers, asymmetric signatures, sealed tokens, CSPRNG. Built on node:crypto. | 2 |
| [autoresize](https://github.com/edloidas/autoresize) | edloidas/autoresize | Automatically resize the inputs | 3 |
| [avoidMeanBoss](https://github.com/Ludan-daye/avoidMeanBoss) | Ludan-daye/avoidMeanBoss | 用 OpenAlex 公开数据看导师是否倾向于在师生合著论文上挂一作。纯静态零后端，分数即百分比本身，字母序学科与样本不足时拒答而非猜测。 | 0 |
| [awesome-api-docs-doctors](https://github.com/funnyhcat-dotcom/awesome-api-docs-doctors) | funnyhcat-dotcom/awesome-api-docs-doctors | Curated catalog of API/SaaS docs doctor tools for documentation, security, webhook, billing, privacy, and operations readiness. | 0 |
| [babelqueue-node](https://github.com/BabelQueue/babelqueue-node) | BabelQueue/babelqueue-node | Read & write the canonical BabelQueue envelope from Node.js — exchange messages with Laravel, Symfony, Go, Python & .NET over one strict JSON format. Zero-dependency core. | 1 |
| [backend-design-patterns](https://github.com/AdityaDwiNugroho/backend-design-patterns) | AdityaDwiNugroho/backend-design-patterns | High-performance Distributed System Patterns (Consistent Hashing, Token Bucket, LSM Tree) with zero dependencies. | 0 |
| [bag-of-holding-client](https://github.com/D-dezeeuw/bag-of-holding-client) | D-dezeeuw/bag-of-holding-client | The browser host toolkit for AI-driven D&D — structured/streaming LLM client, layered worldgen pipeline, procedural dungeon generator, overworld travel FSM, narrative (beats/factions) + settlement engines. Companion host machinery to the @zeeuw/bag-of-holding rules kernel. Zero-dep ESM, MPL-2.0. | 0 |
| [bar-chart-cli](https://github.com/kszongic/bar-chart-cli) | kszongic/bar-chart-cli | Render horizontal bar charts in the terminal. Zero dependencies. | 0 |
| [bar-of-progress](https://github.com/badrap/bar-of-progress) | badrap/bar-of-progress | A small, easy & zero-dependency progress bar component | 248 |
| [base32](https://github.com/distrentic/base32) | distrentic/base32 | zero dependency base32 encoder/decoder based on rfc3548 | 3 |
| [base64-cli](https://github.com/kszongic/base64-cli) | kszongic/base64-cli | Encode and decode Base64 from the command line. | 0 |
| [base64url-cli](https://github.com/kszongic/base64url-cli) | kszongic/base64url-cli |  | 0 |
| [bashjsast](https://github.com/woolkingx/bashjsast) | woolkingx/bashjsast | Bash AST parser for JavaScript — zero dependencies, complete syntax coverage | 1 |
| [batchline](https://github.com/Ayubjon/batchline) | Ayubjon/batchline | Build, split, and reconcile LLM batch jobs (OpenAI Batch API & Anthropic Message Batches). Zero-dep CLI + library, no API keys. | 1 |
| [bayescausal](https://github.com/davccavalcante/bayescausal) | davccavalcante/bayescausal | Calibrated incident root cause inference for TypeScript: declarative Bayesian networks with exact and approximate inference and the do-operator, zero runtime dependencies. | 1 |
| [bayesconsensus](https://github.com/davccavalcante/bayesconsensus) | davccavalcante/bayesconsensus | Dawid-Skene consensus for multi-agent and multi-LLM disagreement: learn each agent's reliability and the true answer with calibrated confidence. Zero dependencies, node-free, TypeScript-first. | 1 |
| [bayesdecide](https://github.com/davccavalcante/bayesdecide) | davccavalcante/bayesdecide | Bayesian multi-armed bandits for continuous prompt experimentation: Thompson sampling routes traffic to the best prompt variant and a stopping rule promotes a winner without a fixed-N A/B test. Zero dependencies, TypeScript-first. | 1 |
| [bayesroute](https://github.com/davccavalcante/bayesroute) | davccavalcante/bayesroute | Thompson-sampling Bayesian router that picks the right LLM per query across quality, cost, and latency. Zero-dependency, TypeScript-first, with exact conjugate posteriors, safe exploration, and bounded regret. | 0 |
| [bayestruth](https://github.com/davccavalcante/bayestruth) | davccavalcante/bayestruth | Exact Bayesian trust and reputation scoring for tools, MCP servers, skills, and agents. Zero-dependency, TypeScript-first: closed-form Beta-Bernoulli posteriors, calibrated credible intervals, Thompson-sampling routing, time-decay, and a tamper-evident audit trail. | 1 |
| [bcbp](https://github.com/ahmethasmerdogan/bcbp) | ahmethasmerdogan/bcbp | Zero-dependency Node.js CLI that decodes airline boarding pass barcodes (IATA BCBP format) | 0 |
| [bcd-cli](https://github.com/kszongic/bcd-cli) | kszongic/bcd-cli |  | 0 |
| [behavioralai](https://github.com/davccavalcante/behavioralai) | davccavalcante/behavioralai | Behavioral AI: zero-dependency behavioral observability for production agents. Learned per-agent fingerprints, real-time drift detection with attribution, predictive alerts before failures, OpenTelemetry GenAI ingestion, 13 alert channels. TypeScript, ESM+CJS, edge-ready. | 2 |
| [benchify](https://github.com/axiom-experiment/benchify) | axiom-experiment/benchify | Modern zero-dependency micro-benchmark runner for Node.js - the benchmark.js replacement with Vitest-style .bench.js files | 0 |
| [best-highlight](https://github.com/The-Best-Codes/best-highlight) | The-Best-Codes/best-highlight | best-highlight is a lightweight, efficient syntax highlighting library with zero runtime dependencies | 1 |
| [better-logger](https://github.com/0xMilord/better-logger) | 0xMilord/better-logger | Execution flow debugger for modern apps.  Turn scattered `console.log` calls into structured, timed, hierarchical flows — with context, trace IDs, and clean, atomic output.  Zero dependencies, &lt;10KB, works in Node,browser, and edge. Built to replace debugging guesswork with actual execution insight. | 3 |
| [better-seo-js](https://github.com/0xMilord/better-seo-js) | 0xMilord/better-seo-js | Programmable SEO for modern apps: typed SEO model, Next.js Metadata + JSON-LD, zero-dep core, OG/icons CLI — one pipeline for Google, social previews, and structured data. | 3 |
| [biggest](https://github.com/hmmhmmhm/biggest) | hmmhmmhm/biggest | (TS) Tiny 2kb, zero deps, infinite precision: Biggest for all your big integer + big decimal needs. | 37 |
| [bin2dec-cli](https://github.com/kszongic/bin2dec-cli) | kszongic/bin2dec-cli | Convert binary numbers to decimal from the command line. | 0 |
| [bin2oct-cli](https://github.com/kszongic/bin2oct-cli) | kszongic/bin2oct-cli |  | 0 |
| [BitRain-Matrixx](https://github.com/Hanny658/BitRain-Matrixx) | Hanny658/BitRain-Matrixx | A zero-dependency npm package that reders a bitrain effect (Like movie Matrix) at the background of your webpage | 0 |
| [bitwrench](https://github.com/deftio/bitwrench) | deftio/bitwrench | bitwrench is a javascript front end and ui library which provides updates, components, and works with zero dependancies | 8 |
| [bleizlabs-ui](https://github.com/JustBleiz/bleizlabs-ui) | JustBleiz/bleizlabs-ui | Zero-dependency, fully-styled React component library with seed-based design tokens. 100+ components, WAI-ARIA compliant, SCSS Modules, React 19 + Next.js 16. | 1 |
| [blue-js](https://github.com/bluegate-studio/blue-js) | bluegate-studio/blue-js | Zero-dependency utility library for Vanilla JS | 0 |
| [bmi-cli](https://github.com/kszongic/bmi-cli) | kszongic/bmi-cli |  | 0 |
| [bonsai-js](https://github.com/danfry1/bonsai-js) | danfry1/bonsai-js | A safe, zero-dependency expression language for rules, filters, and templates | 174 |
| [branchbroom](https://github.com/ryanda9910/branchbroom) | ryanda9910/branchbroom | Sweep up your local git branches, safely. A zero-dep CLI that classifies merged / gone / stale branches and deletes the safe ones after a y/N. npx github:ryanda9910/branchbroom | 1 |
| [branchreel](https://github.com/ctkrug/branchreel) | ctkrug/branchreel | Branching video on a page you control: drop in your clips and a JSON graph for click-to-branch playback. No platform, no backend. | 0 |
| [brazilkit](https://github.com/Cardoso222/brazilkit) | Cardoso222/brazilkit | Brazilian data validation, formatting and generation: CPF, CNPJ (alphanumeric-ready), CEP, phone and Pix codes. Zero dependencies, tree-shakeable. | 0 |
| [browser-extension-compat-data](https://github.com/cezaraugusto/browser-extension-compat-data) | cezaraugusto/browser-extension-compat-data | Validate WebExtensions manifest (and optionally permissions/APIs) against MDN browser-compat-data | 1 |
| [browser-session](https://github.com/jpoindexter/browser-session) | jpoindexter/browser-session | Reuse your real logged-in browser session from Node — read+decrypt Brave/Chrome/Edge cookies (zero deps) and open any login-walled page in a headless browser with that session. | 0 |
| [bsmrk](https://github.com/Black-Cat-OSS/bsmrk) | Black-Cat-OSS/bsmrk | BismarkJS von Bismark | 0 |
| [bt-zero-deps](https://github.com/1033087886/bt-zero-deps) | 1033087886/bt-zero-deps | Zero-dependency Node.js BitTorrent toolkit with CLI and Web UI | 0 |
| [Buncord-Transcript](https://github.com/LuigiColantuono/Buncord-Transcript) | LuigiColantuono/Buncord-Transcript | Ultrafast, zero-dependency Discord HTML transcript generator exclusively for the Bun ecosystem. | 2 |
| [business-hours](https://github.com/chatwoot/business-hours) | chatwoot/business-hours | A tiny (&gt; 1kb) library to handle business hours on the browser | 12 |
| [byte-offset-cli](https://github.com/kszongic/byte-offset-cli) | kszongic/byte-offset-cli | Calculate byte offsets in strings and files from the terminal | 0 |
| [byte-slice-cli](https://github.com/kszongic/byte-slice-cli) | kszongic/byte-slice-cli |  | 0 |
| [Cache](https://github.com/Timeraa/Cache) | Timeraa/Cache | Simple and powerful cache. | 4 |
| [caduceus](https://github.com/davccavalcante/caduceus) | davccavalcante/caduceus | Provider-agnostic transport and routing for LLMs: normalize OpenAI, Anthropic, and Gemini, route by cost, quality, or latency with per-model circuit breakers, USD budgets, automatic failover, and an auditable route trace. Zero dependencies, node-free core, TypeScript-first. | 1 |
| [calforge](https://github.com/didrod205/calforge) | didrod205/calforge | Generate valid .ics files & 'Add to Calendar' links (Google/Outlook/Yahoo/Apple) entirely locally — no SaaS, no tracking. RFC 5545 correct, zero deps. Web app + library. | 1 |
| [calforge](https://github.com/vbaha9706/calforge) | vbaha9706/calforge | Generate calendar event links and ICS files locally in milliseconds. | 0 |
| [camel2snake-cli](https://github.com/kszongic/camel2snake-cli) | kszongic/camel2snake-cli | Convert camelCase and PascalCase to snake_case from the terminal. Zero dependencies. | 0 |
| [canvas-js-3d](https://github.com/SebastianBathrick/canvas-js-3d) | SebastianBathrick/canvas-js-3d | canvas-js-3d is a lightweight, dependency-free 3D rendering JavaScript library built on the HTML Canvas API and designed to run in web browsers. | 1 |
| [caplabel](https://github.com/ArisRhiannon/caplabel) | ArisRhiannon/caplabel | Offline, zero-dependency static capability analyzer for JavaScript — see what a script can do (network, filesystem, exec, secrets) before you run it. CLI + CI exit codes. | 1 |
| [captionkit](https://github.com/didrod205/captionkit) | didrod205/captionkit | Convert & re-sync subtitles locally — SRT ⇄ WebVTT, shift, fix drift & overlaps. Exact timecode math, zero deps. Web app + library. | 1 |
| [captionkit](https://github.com/molhamh3086/captionkit) | molhamh3086/captionkit | Convert, sync, and fix SRT and WebVTT subtitle files locally. | 0 |
| [casemorph](https://github.com/Ludovic-Blondon/casemorph) | Ludovic-Blondon/casemorph | Type-safe deep case transformation for objects — snake_case, camelCase, kebab-case, PascalCase, CONSTANT_CASE with full TypeScript inference | 0 |
| [cassette](https://github.com/rxNxkolai/cassette) | rxNxkolai/cassette | A zero-dependency, offline VCR for LLM API calls. Record real responses once, then replay them deterministically and free in tests and CI. | 0 |
| [cc-hud](https://github.com/WaterTian/cc-hud) | WaterTian/cc-hud | Compact Claude Code statusline — zero-dependency, crash-free on Windows | 7 |
| [cc-lean](https://github.com/ssthil/cc-lean) | ssthil/cc-lean | Static, offline audit + setup for a lean Claude Code — flags never-used MCP connectors, oversized CLAUDE.md, and missing guardrails. | 0 |
| [CcGlanceLine](https://github.com/CxMYu/CcGlanceLine) | CxMYu/CcGlanceLine | A fast, zero-dependency, multi-line status line for Claude Code - model, effort, context, cache, git and session, all at a glance. | 3 |
| [ccpop](https://github.com/TTigger/ccpop) | TTigger/ccpop | Near-zero-token Claude Code helpers. One !-prefixed command to pop Claude's markdown into a window, open your IDE at a line, background-start a dev server, or review your session on a timeline — without leaving the chat or spending model tokens. Pure Node, zero dependencies, cross-platform. | 0 |
| [celery-env](https://github.com/theaaravagarwal/celery-env) | theaaravagarwal/celery-env | Zero-dependency environment validation with generated standalone validators. | 0 |
| [cert-days-cli](https://github.com/kszongic/cert-days-cli) | kszongic/cert-days-cli | Check SSL/TLS certificate expiry from the terminal. Zero dependencies. | 0 |
| [ceylonic](https://github.com/ChamathDilshanC/ceylonic) | ChamathDilshanC/ceylonic | Zero-dependency TypeScript utilities for Sri Lanka: NIC parsing/validation and Sinhala date, currency & number formatting npm package | 0 |
| [char-class-cli](https://github.com/kszongic/char-class-cli) | kszongic/char-class-cli | Classify characters by type (letter, digit, punctuation, emoji, whitespace) from the command line | 0 |
| [char-info-cli](https://github.com/kszongic/char-info-cli) | kszongic/char-info-cli | Get Unicode character info from the terminal. Zero dependencies. | 0 |
| [charts](https://github.com/frappe/charts) | frappe/charts | Simple, responsive, modern SVG Charts with zero dependencies | 15,085 |
| [chatfmt](https://github.com/Ayubjon/chatfmt) | Ayubjon/chatfmt | Convert LLM chat message arrays between OpenAI, Anthropic, and Gemini wire formats. Zero deps, no API key, CLI + library. | 2 |
| [chatlint](https://github.com/Ayubjon/chatlint) | Ayubjon/chatlint | Zero-dependency linter for LLM chat message arrays (OpenAI & Anthropic) — catch structural errors before you hit the API | 2 |
| [checkdigit](https://github.com/didrod205/checkdigit) | didrod205/checkdigit | Validate & generate checksummed IDs — credit cards (Luhn), IBANs (mod-97), ISBN-10/13, EAN/UPC barcodes. Exact check-digit math, zero deps, 100% local. Web app + library. | 1 |
| [checksum-cmp-cli](https://github.com/kszongic/checksum-cmp-cli) | kszongic/checksum-cmp-cli | Compare two files by checksum (MD5/SHA-1/SHA-256/SHA-512). Zero dependencies. | 0 |
| [checksum-verify-cli](https://github.com/kszongic/checksum-verify-cli) | kszongic/checksum-verify-cli | Verify files against checksum files (MD5SUMS, SHA256SUMS, etc.) — cross-platform sha256sum -c alternative. Zero deps CLI. | 0 |
| [chlog](https://github.com/bobfromarcher/chlog) | bobfromarcher/chlog | Generate a clean Keep-a-Changelog CHANGELOG.md from conventional commits + git tags. Zero deps, zero AI. | 0 |
| [chunk-text-cli](https://github.com/kszongic/chunk-text-cli) | kszongic/chunk-text-cli | Split text into chunks by size, words, or sentences from the terminal. | 0 |
| [chunklet](https://github.com/Ayubjon/chunklet) | Ayubjon/chunklet | Zero-dependency, markdown- and code-aware text chunker for RAG and LLM context windows: token budgets, overlap, and heading breadcrumbs. | 2 |
| [cidr-wildcard-cli](https://github.com/kszongic/cidr-wildcard-cli) | kszongic/cidr-wildcard-cli | Convert CIDR notation to wildcard masks and vice versa. Network engineering CLI tool. | 0 |
| [classify-filename](https://github.com/ElizabethSobiya/classify-filename) | ElizabethSobiya/classify-filename | Sort filenames into named buckets by rules - strings, regex, or predicates. Zero dependencies. | 4 |
| [claude-code-ctx](https://github.com/tugayoktayokay/claude-code-ctx) | tugayoktayokay/claude-code-ctx | Standalone zero-dep CLI for Claude Code session token tracking, model-aware quality ceiling, tailored /compact prompt generation, and snapshot-to-memory bridging. No hooks, no AI, no auto-triggers. | 0 |
| [Claude-Code-In-Motion](https://github.com/AnwarDebes/Claude-Code-In-Motion) | AnwarDebes/Claude-Code-In-Motion | Claude Code In Motion 🤗 Built with love and passion by an Anthropic enthusiast 🫶 | 0 |
| [claude-code-livetracker](https://github.com/mixxan05/claude-code-livetracker) | mixxan05/claude-code-livetracker | Echtzeit-Kostenwächter für LLM-API-Verkehr (Claude Code, Aider, Cursor): lokaler Reverse-Proxy mit Live-Dashboard und Budget-Schutz. Zero-Dependency. | 1 |
| [claude-forge](https://github.com/ForgeyClap/claude-forge) | ForgeyClap/claude-forge | Zero-dependency multi-agent build, automation and review system for Claude Code. 18 agents, 23 skills, a live per-project dashboard, and a /setup-forge onboarding wizard. One command: /forge. | 2 |
| [claude-journal](https://github.com/ayhan-kurt/claude-journal) | ayhan-kurt/claude-journal | Minimal, zero-dependency decision log for Claude Code. Markdown-only, git-trackable, three smart hooks. | 0 |
| [claude-pulse](https://github.com/nikitadoudikov/claude-pulse) | nikitadoudikov/claude-pulse | Local, zero-dependency dashboard for Claude Code: live token usage and context, lost-session recovery, full-text search, and approve tool calls from your phone. | 230 |
| [claude-statusline](https://github.com/slckarslan93/claude-statusline) | slckarslan93/claude-statusline | A fast, zero-dependency, configurable status line for Claude Code — model, reasoning effort, context usage, cost, rate limits, git, and more. | 2 |
| [cliedit](https://github.com/CodeTease/cliedit) | CodeTease/cliedit | A zero-dependency, embeddable TUI text editor for Node.js CLI applications. | 0 |
| [clif](https://github.com/arshad-shah/clif) | arshad-shah/clif | Tiny, zero-dependency CLI framework with beautiful output and a composable API. | 0 |
| [clone](https://github.com/coroboros/clone) | coroboros/clone | Deep clone and deep freeze for JavaScript — prototype-aware. | 1 |
| [cloudflare-worker-jwt](https://github.com/tsndr/cloudflare-worker-jwt) | tsndr/cloudflare-worker-jwt | A lightweight JWT implementation with ZERO dependencies for Cloudflare Workers. | 876 |
| [cnaddr](https://github.com/Apex-Origin/cnaddr) | Apex-Origin/cnaddr | 零依赖中文地址智能解析库 · Smart Chinese address parser (省/市/区/镇 + 姓名/手机/身份证/邮编) with zero dependencies | 2 |
| [codeblock-cli](https://github.com/kszongic/codeblock-cli) | kszongic/codeblock-cli | Extract fenced code blocks from Markdown files. Zero dependencies. | 0 |
| [codebot-ai](https://github.com/Ascendral/codebot-ai) | Ascendral/codebot-ai | Safe, local-first autonomous coding agent. Policy-governed, audit-trailed, sandboxed. Works with any LLM. | 2 |
| [codenames](https://github.com/kriasoft/codenames) | kriasoft/codenames | A tiny, zero-dependency library for generating memorable codenames from numbers. | 11 |
| [coderecap](https://github.com/didrod205/coderecap) | didrod205/coderecap | Spotify Wrapped for your git history — a local, deterministic year-in-code recap (terminal card + shareable SVG). No upload, no API key. Works on any repo, even private. | 1 |
| [cog-http](https://github.com/EugSh1/cog-http) | EugSh1/cog-http | Tiny HTTP framework built on node:http. | 0 |
| [cognitive-meter-verify](https://github.com/Stray-South/cognitive-meter-verify) | Stray-South/cognitive-meter-verify | Zero-dependency browser demo that verifies cognitive-meter v0.1 receipts (Ed25519 + SHA-256 hash chain). Live at stray-south.github.io/cognitive-meter-verify | 0 |
| [coldphrase](https://github.com/morpheusadam/coldphrase) | morpheusadam/coldphrase | Offline, single-file cold storage for crypto seed phrases. Argon2id + AES-256-GCM in one self-contained HTML file, with duress decoy and tamper detection. | 1 |
| [color-contrast-cli](https://github.com/kszongic/color-contrast-cli) | kszongic/color-contrast-cli |  | 0 |
| [color-fns](https://github.com/ahmedsemih/color-fns) | ahmedsemih/color-fns | A modern, lightweight, and tree-shakable utility library for working with colors.  | 0 |
| [color-mix-cli](https://github.com/kszongic/color-mix-cli) | kszongic/color-mix-cli |  | 0 |
| [colord](https://github.com/omgovich/colord) | omgovich/colord | 👑 A tiny yet powerful tool for high-performance color manipulations and conversions | 1,877 |
| [colorly](https://github.com/nadonghuang/colorly) | nadonghuang/colorly | 🎨 Terminal color palette generator, converter & visualizer — 7 harmony modes, WCAG contrast, gradient, CSS/Tailwind export. Zero deps. | 0 |
| [commit-digest](https://github.com/chunjiegame-cpu/commit-digest) | chunjiegame-cpu/commit-digest | Turn git history into maintainable release and weekly digest notes. | 1 |
| [commitwiz](https://github.com/kszongic/commitwiz) | kszongic/commitwiz | AI-powered git commit message generator. Stage changes, run commitwiz, get perfect conventional commits. | 0 |
| [commonprefix-cli](https://github.com/kszongic/commonprefix-cli) | kszongic/commonprefix-cli |  | 0 |
| [community-signal-radar-local](https://github.com/dannguyen9x/community-signal-radar-local) | dannguyen9x/community-signal-radar-local | Self-hosted community & web monitoring with local AI triage. An F5Bot/Syften alternative — no cloud, no database, zero dependencies. | 2 |
| [Compleet](https://github.com/na-2n/Compleet) | na-2n/Compleet | Zero dependency HTML input autocompletion library | 5 |
| [conductor](https://github.com/yksanjo/conductor) | yksanjo/conductor | 🎼 See what every live Claude Code window is doing — and reply to them. Read-only situational awareness + tmux control, as a CLI, a web cockpit, and an MCP server. Zero deps. | 2 |
| [conductor2](https://github.com/yksanjo/conductor2) | yksanjo/conductor2 | 🎼 Conductor V2 — configure the Claude Code swarm (topology + purpose + presets) before you fire it. Fable 5, tmux, zero deps. | 0 |
| [confer](https://github.com/rohansx/confer) | rohansx/confer | Highlight text in local HTML docs and ask a headless Claude Code agent in your repo - code-grounded answers, doc edits, and an in-browser file finder. | 0 |
| [config](https://github.com/kaareal/config) | kaareal/config | Node config module using environment vars | 0 |
| [conjoin](https://github.com/chocolateboy/conjoin) | chocolateboy/conjoin | A fast and flexible joiner for iterables and arrays with a tiny footprint | 1 |
| [connector-sdk](https://github.com/oomol-lab/connector-sdk) | oomol-lab/connector-sdk | Thin, zero-dependency TypeScript client for the OOMOL Connector gateway — call any connector action, proxy upstream APIs, and introspect the catalog. | 12 |
| [consent-banner-js](https://github.com/tagconcierge/consent-banner-js) | tagconcierge/consent-banner-js | A zero-dependency, lightweight (~3kB), consent platform agnostic, cookie banner for any website (compatible with Google Consent Mode). | 195 |
| [consoleload](https://github.com/ReXulEc/consoleload) | ReXulEc/consoleload | A fully customizable loading animation package for your Console Logs. | 4 |
| [contro](https://github.com/niklashigi/contro) | niklashigi/contro | :video_game: Game controls done right. | 51 |
| [convert-bech32-address](https://github.com/jasbanza/convert-bech32-address) | jasbanza/convert-bech32-address | Bech32 address converter library for node.js & JavaScript for browsers | 8 |
| [cookie](https://github.com/zero-dependency/cookie) | zero-dependency/cookie | 🍪 Document.cookie wrapper | 2 |
| [copyright-years](https://github.com/rdarida/copyright-years) | rdarida/copyright-years | Generate dynamic copyright year ranges (e.g., 2024-2026) | 0 |
| [core](https://github.com/forceCalendar/core) | forceCalendar/core | Lightweight, framework-agnostic calendar engine: recurrence rules, timezone support and RFC 5545 compliant ICS | 1 |
| [core-stream-processor](https://github.com/aether-synth-dev/core-stream-processor) | aether-synth-dev/core-stream-processor | High-performance, zero-dependency Node.js stream sanitization and telemetry engine. Built for speed and enterprise security. | 1 |
| [cortex](https://github.com/tools-for-agents/cortex) | tools-for-agents/cortex | 🧠 A local, Obsidian-compatible second brain for agents: wikilinked markdown vault, knowledge graph, FTS5 search, live graph web view. CLI + web + MCP. Zero deps. | 0 |
| [coryphaeus](https://github.com/davccavalcante/coryphaeus) | davccavalcante/coryphaeus | Open, local-first, provider-agnostic multi-agent orchestrator: compose frontier models as a coordinated team with Thinker/Worker/Verifier roles, cost budgets, and an auditable agent graph. Zero dependencies, node-free core, TypeScript-first. | 1 |
| [cpw-starfly](https://github.com/josefelixrc7/cpw-starfly) | josefelixrc7/cpw-starfly | A notification manager of websites. Un Administrador de notificaciones de sitios web. | 1 |
| [crc16-ccitt-cli](https://github.com/kszongic/crc16-ccitt-cli) | kszongic/crc16-ccitt-cli |  | 0 |
| [creator](https://github.com/tunder007/creator) | tunder007/creator | Scaffold a new cross-tool AI skill | 0 |
| [cricket-identity](https://github.com/nishantsingodia/cricket-identity) | nishantsingodia/cricket-identity | Shared cricket player-name normalization + fuzzy matching — single source of truth for identity resolution across wwc-draft and cricket-auction-helper. Zero-dep TS, ships compiled dist/. Returns null on ambiguity, never a wrong guess. | 0 |
| [cron-builder](https://github.com/eng-AhmedMahmoud/cron-builder) | eng-AhmedMahmoud/cron-builder | Build and understand cron expressions: plain-English description + next run times. Client-side, zero-dependency. | 0 |
| [cron-explain](https://github.com/axiom-experiment/cron-explain) | axiom-experiment/cron-explain | Validate a cron expression, get a human-readable description, and preview next N runs — zero dependencies. | 0 |
| [cron-explain](https://github.com/sabahattink/cron-explain) | sabahattink/cron-explain | Explain cron expressions in plain English. CLI + Library. | 0 |
| [croniq](https://github.com/didrod205/croniq) | didrod205/croniq | Tiny zero-dependency cron toolkit — parse, compute next/previous run times (fast field-jumping), validate, and describe in plain English. ~2KB. | 1 |
| [cronlet](https://github.com/ctkrug/cronlet) | ctkrug/cronlet | Read any cron expression in plain English and see its next run times. Zero-dependency TypeScript cron parser, scheduler, and describer. | 0 |
| [crucible](https://github.com/rxNxkolai/crucible) | rxNxkolai/crucible | An offline, zero-dependency red-team scanner for system prompts and agent-instruction files. Finds prompt-security weaknesses, emits adversarial probes, and scores resilience. | 0 |
| [csp-doctor](https://github.com/didrod205/csp-doctor) | didrod205/csp-doctor | Lint a Content-Security-Policy for XSS holes locally — 'unsafe-inline', wildcards, missing directives, and allowlisted hosts that bypass CSP (JSONP/AngularJS). Nonce/strict-dynamic aware. Deterministic CLI, JSON/MD reports, no website. | 1 |
| [css-parser](https://github.com/Ismail-elkorchi/css-parser) | Ismail-elkorchi/css-parser | CSS parser for JavaScript with stylesheet ASTs, selector helpers, tokenizer output, and parse budgets. | 0 |
| [csv-pipe](https://github.com/martsinlabs/csv-pipe) | martsinlabs/csv-pipe | Typed, zero-dependency CSV parser and encoder for TypeScript. Streams with flat memory and runs on Node, browsers, Deno, Bun, and edge. | 10 |
| [csvtd-parser](https://github.com/OSP-Engineer/csvtd-parser) | OSP-Engineer/csvtd-parser | Zero-dependency, quote-correct CSV parser with conservative delimiter auto-detection - the parser behind csvtodashboard.com | 1 |
| [ctx](https://github.com/madara88645/ctx) | madara88645/ctx | A zero-dependency "where was I" CLI — snapshot your working directory and resume it later. Built end to end by delegated AI agents, watched live through Understudy. | 0 |
| [ctxfit](https://github.com/Ayubjon/ctxfit) | Ayubjon/ctxfit | Zero-dependency context-window packer for LLM chat: fit a conversation into a token budget (middle-out, drop-oldest, priority, pinning). | 2 |
| [cumsum-cli](https://github.com/kszongic/cumsum-cli) | kszongic/cumsum-cli | Calculate cumulative sums from the command line. | 0 |
| [cvss-calc](https://github.com/HailBytes/cvss-calc) | HailBytes/cvss-calc | Zero-dependency CVSS v3.1 and v4.0 calculator. Parse and score vulnerability vectors as a library or web component. | 0 |
| [cx-utils](https://github.com/muhammad4dev/cx-utils) | muhammad4dev/cx-utils | The all-in-one class name utility: clsx + tailwind-merge + cva. TypeScript-first, zero dependencies, and production-ready. | 0 |
| [cyanic](https://github.com/mclrc/cyanic) | mclrc/cyanic | WIP sub 1k LOC zero-dependency reactive view library | 0 |
| [cyber-toast-js](https://github.com/hsr88/cyber-toast-js) | hsr88/cyber-toast-js | A Sci-Fi / Cyberpunk notification library with glitch animations and typewriter effects. | 6 |
| [cybercore-charts](https://github.com/sebyx07/cybercore-charts) | sebyx07/cybercore-charts | Zero-dependency cyberpunk SVG chart library with neon aesthetics. Companion to cybercore-css. | 3 |
| [DarajaSim](https://github.com/georgekimaninjoroge/DarajaSim) | georgekimaninjoroge/DarajaSim | Simulate M-PESA STK callbacks on localhost. No ngrok. No HTTPS. No internet. | 0 |
| [data-chart](https://github.com/ryo-manba/data-chart) | ryo-manba/data-chart | Chart your tables. Convert HTML tables to SVG charts using data attributes. | 1 |
| [dataclass](https://github.com/alexeyraspopov/dataclass) | alexeyraspopov/dataclass | Data classes for TypeScript & JavaScript | 191 |
| [date-light](https://github.com/flyingsquirrel0419/date-light) | flyingsquirrel0419/date-light | Zero-dependency, ~3.11KB minzipped, fully typed date utility library | 13 |
| [date-parse-cli](https://github.com/kszongic/date-parse-cli) | kszongic/date-parse-cli | Parse and format dates from the terminal. Supports multiple formats. | 0 |
| [date-range-picker](https://github.com/danjohnson95/date-range-picker) | danjohnson95/date-range-picker | A zero-dependency native web component for selecting date ranges 🗓 | 7 |
| [daublet](https://github.com/mmdmcy/daublet) | mmdmcy/daublet | Lightweight zero-dependency local paint app with movable layers | 0 |
| [dbmigrate](https://github.com/sulthonzh/dbmigrate) | sulthonzh/dbmigrate | Zero-dependency database migration tool for SQLite, PostgreSQL, and MySQL | 0 |
| [DebugPill](https://github.com/ToolBusDev/DebugPill) | ToolBusDev/DebugPill | Lightweight, zero-dependency debug badge, toggled by your framework flag. Switch on the optional phrase library—random lines + icons keep you company while you code; impossible to miss, so you’ll never push debug mode to prod again. | 0 |
| [dec2bin-cli](https://github.com/kszongic/dec2bin-cli) | kszongic/dec2bin-cli | Convert decimal numbers to binary from the command line. | 0 |
| [dec2oct-cli](https://github.com/kszongic/dec2oct-cli) | kszongic/dec2oct-cli |  | 0 |
| [decorators](https://github.com/Master4Novice/decorators) | Master4Novice/decorators | Zero-dependency TypeScript decorators for Node/backend apps — one self-documenting decorator replaces a block of boilerplate: config injection, validation, resilience  (retry/timeout/circuit-breaker/cache), secret redaction, observability, Express REST controllers, and LLM-agent tools & guardrails. | 0 |
| [dedupe-words-cli](https://github.com/kszongic/dedupe-words-cli) | kszongic/dedupe-words-cli | Remove duplicate words from text streams. | 0 |
| [deep-diff-ts](https://github.com/ofershap/deep-diff-ts) | ofershap/deep-diff-ts | Fast deep object diff with full TypeScript types - zero dependencies | 0 |
| [Demo_lightweight-expression-detector](https://github.com/Anant-404/Demo_lightweight-expression-detector) | Anant-404/Demo_lightweight-expression-detector | A zero-dependency JavaScript package for real-time facial expression detection. Published on NPM with 95+ weekly downloads, optimized for efficiency and easy integration into web or AI apps. | 2 |
| [dep-check](https://github.com/axiom-experiment/dep-check) | axiom-experiment/dep-check | Find unused and missing deps -- zero-dependency depcheck replacement | 0 |
| [dep-size](https://github.com/kszongic/dep-size) | kszongic/dep-size | Check npm package install size and dependency count before adding them. Zero deps CLI. | 0 |
| [depsift](https://github.com/davesheffer/depsift) | davesheffer/depsift | Should I install this? Audit any npm package — or your whole project — before installing: real CVEs, the literal install-script command that runs on your machine, npm-accurate dependency count, maintainers, and a letter grade. Zero deps, no account, no AI. | 2 |
| [design-language](https://github.com/tunder007/design-language) | tunder007/design-language | Design tokens -&gt; CSS generator + token linter | 0 |
| [detect-lang-cli](https://github.com/kszongic/detect-lang-cli) | kszongic/detect-lang-cli | Detect the language of text from the terminal. Zero dependencies. | 0 |
| [detector-js](https://github.com/pixu1980/detector-js) | pixu1980/detector-js | DetectorJS, zero-dependency platform/environment detector written in ES6 | 33 |
| [deterministic-checker](https://github.com/tunder007/deterministic-checker) | tunder007/deterministic-checker | Score a repo on AI-optimization & determinism | 0 |
| [dev-kit](https://github.com/liutingqiu/dev-kit) | liutingqiu/dev-kit | 零依赖开发工具箱：单文件工具集 + 错误翻译官 + 项目健康体检 + 无障碍检测 + 文档汉化指南 | 0 |
| [developer-feedback-dashboard](https://github.com/saidataharimatohoku-max/developer-feedback-dashboard) | saidataharimatohoku-max/developer-feedback-dashboard | Local dashboard that monitors and visualizes public developer feedback about 6 AI/ML providers (Together AI, Fireworks AI, Tinker API, Azure Kubernetes Service, Azure Machine Learning, OpenAI). | 0 |
| [devguard-scan](https://github.com/WRG-11/devguard-scan) | WRG-11/devguard-scan | 100% client-side secret scanner — a dependency-free, zero-upload browser port of the wrg-devguard scan engine. Paste code or drop files; nothing leaves your browser. | 0 |
| [device-signal-kit](https://github.com/gopi15699/device-signal-kit) | gopi15699/device-signal-kit | Zero-dependency TypeScript library for browser device fingerprinting, composite risk scoring, and bot/automation detection. Strict SOLID architecture, live dashboard, 90 tests. | 0 |
| [devknife](https://github.com/Avinashvelu03/devknife) | Avinashvelu03/devknife | The ultimate zero-dependency, 50-in-1 developer Swiss Army knife CLI & library. UUID, hash, JWT, base64, JSON, color, time & more — all in your terminal. | 0 |
| [dichroma](https://github.com/didrod205/dichroma) | didrod205/dichroma | Accurate, zero-dependency color-blindness (CVD) simulation for colors & images — protanopia, deuteranopia, tritanopia & more. 100% local. Web app + library. | 1 |
| [discord-error-codes](https://github.com/x1ee7/discord-error-codes) | x1ee7/discord-error-codes | Zero-dependency classifier for Discord API error codes: which are benign races (10008/10062) to swallow, which need the server owner (50013). discord.js-friendly. | 0 |
| [disocket](https://github.com/yeweroooo/disocket) | yeweroooo/disocket | Zero-dependency native C++ realtime chat engine for Node.js | 0 |
| [distance-matrix-2](https://github.com/Akuqt/distance-matrix-2) | Akuqt/distance-matrix-2 | Node.js wrapper for the Goople Distance Matrix API. | 0 |
| [distribution](https://github.com/tunder007/distribution) | tunder007/distribution | Distribute skills to ~/.claude / ~/.cursor or a template | 0 |
| [dni-validator-peru](https://github.com/Edsoncame/dni-validator-peru) | Edsoncame/dni-validator-peru | Validación offline de DNI y RUC peruanos con módulo-11 SUNAT. TypeScript ESM, zero deps, MIT. Mantenido por Securex (https://securex.pe). | 1 |
| [dockview](https://github.com/mathuo/dockview) | mathuo/dockview | Zero dependency docking layout manager supporting tabs, groups, grids and splitviews. Supports React, Vue, Angular, and vanilla TypeScript. | 3,311 |
| [docsify-music-player](https://github.com/jav1988/docsify-music-player) | jav1988/docsify-music-player | 🎵 A local music player plugin for docsify — a pure-CSS CD-turntable UI embedded in any article via a ```music code block. | 1 |
| [doctor](https://github.com/tunder007/doctor) | tunder007/doctor | Validate skills against the toolkit standard | 0 |
| [dollar-shell](https://github.com/uhop/dollar-shell) | uhop/dollar-shell | Run OS and shell commands using template tag functions. Same API in Node, Deno, and Bun. Web streams, TypeScript typings, zero dependencies. | 3 |
| [dom](https://github.com/zero-dependency/dom) | zero-dependency/dom | 📄 DOM utilities | 2 |
| [dom-observer](https://github.com/untemps/dom-observer) | untemps/dom-observer | Factory-based, zero-dependency wrapper around the MutationObserver API to track a specific DOM element in one-shot or continuous mode. | 4 |
| [domalt](https://github.com/pompyproductions/domalt) | pompyproductions/domalt | Makes creating DOM elements with Javascript a little less boring. | 0 |
| [dominate-color-js](https://github.com/Dominate-color/dominate-color-js) | Dominate-color/dominate-color-js | 🔎 dominate-color-js is a library for finding the dominant color in PNG, JPEG and WEBP images using the KMeans++ algorithm. It can extract the primary color and its hue in RGBA format and convert it. | 6 |
| [dotdrift](https://github.com/jjdoor/dotdrift) | jjdoor/dotdrift | Catch .env / .env.example drift before it causes production bugs. Zero dependencies. | 0 |
| [dotenv-guard](https://github.com/sabahattink/dotenv-guard) | sabahattink/dotenv-guard | Validate env vars, sync .env files, prevent secret leaks. Zero dependencies. | 0 |
| [double-meh](https://github.com/uhop/double-meh) | uhop/double-meh | A modern fetch-native HTTP I/O library for browsers and CLIs: caching, request dedup, retry, streaming, SSE, and transparent bundling. Zero dependencies. | 1 |
| [double-meh-bundler](https://github.com/uhop/double-meh-bundler) | uhop/double-meh-bundler | Server-side bundler for the double-meh bundle protocol: one fetch-handler core, framework adapters as thin subpaths. | 0 |
| [double-meh-sw](https://github.com/uhop/double-meh-sw) | uhop/double-meh-sw | Service-worker sibling of double-meh: shared cache tier, cross-tab request coalescing, transparent bundling, invalidation hub, and version upgrades — composable modules plus a ready assembly. Works with or without double-meh. | 0 |
| [drama-forge](https://github.com/sk-arr/drama-forge) | sk-arr/drama-forge | 短剧工坊 · 面向短剧/短视频业务的 AI 效率工具集(热点追踪·剧本转分镜·爆款文案·素材整理·AI 周报)。零依赖 Node + 原生前端,本地优先,兼容 DeepSeek/Kimi/通义等 OpenAI 兼容接口。 | 1 |
| [drop.that](https://github.com/oyo/drop.that) | oyo/drop.that | A drop input and download output component for web applications. | 0 |
| [DVE](https://github.com/NeaByteLab/DVE) | NeaByteLab/DVE | Tiny zero-dependency HTML template engine that renders data into safe HTML as a string or stream on any JavaScript runtime. | 1 |
| [dx-bind-js](https://github.com/okzgn/dx-bind-js) | okzgn/dx-bind-js | A lightweight, framework-agnostic, zero-dependency utility designed to simplify dynamic dependency injection and property binding. | 0 |
| [dx-central-js](https://github.com/okzgn/dx-central-js) | okzgn/dx-central-js | A robust, zero-dependency system to manage application configurations and shared state. It enforces strict immutability, ensuring your configuration objects are effectively Write Once Read Many. | 0 |
| [dx-data-js](https://github.com/okzgn/dx-data-js) | okzgn/dx-data-js | Reactive state management for JavaScript & TypeScript. Zero-dependency & ESM-only. DATAX: proxy-based store with swappable reactivity adapters (Vanilla, Angular, etc.) and deep object interception. DATA: lightweight property interceptor with stackable get/set middleware. | 0 |
| [dynamic-copyright](https://github.com/Smileatmaxi/dynamic-copyright) | Smileatmaxi/dynamic-copyright | My own little script for a dynamic copyright which updates every year | 0 |
| [ean-validate-cli](https://github.com/kszongic/ean-validate-cli) | kszongic/ean-validate-cli |  | 0 |
| [easypubsub](https://github.com/tongtwist/easypubsub) | tongtwist/easypubsub | A lightweight (&lt; 2kb), zero-deps, type-safe Pub/Sub library for TypeScript with powerful filtering capabilities. | 0 |
| [ekchylisma](https://github.com/Ismail-elkorchi/ekchylisma) | Ismail-elkorchi/ekchylisma | TypeScript extraction toolkit for agent workflows with source spans, shard status, and failure diagnostics. | 0 |
| [elementid](https://github.com/appzic/elementid) | appzic/elementid | Smart way to manage IDs for frontend Javascript and Typescript projects. | 1 |
| [elo-mmr-kit](https://github.com/Koval09/elo-mmr-kit) | Koval09/elo-mmr-kit | Zero-dependency, fully configurable Elo/MMR rating and matchmaking toolkit for games | 0 |
| [ema-cli](https://github.com/kszongic/ema-cli) | kszongic/ema-cli | Calculate exponential moving averages from the command line. | 0 |
| [emitter](https://github.com/zero-dependency/emitter) | zero-dependency/emitter | ✍️ Event Emitter | 2 |
| [enpoint-agentkit](https://github.com/Hainrixz/enpoint-agentkit) | Hainrixz/enpoint-agentkit | Abre los endpoints de tu app sin ser experto: detecta tu stack, genera un endpoint REST de solo lectura y arma la propuesta para registrar tu fuente en la red civica de personas desaparecidas. CLI sin dependencias; funciona igual con Claude, Codex y Cursor. | 1 |
| [entropass](https://github.com/didrod205/entropass) | didrod205/entropass | Generate strong, bias-free passwords (random/pronounceable/PIN) and measure strength — entropy & crack time — 100% locally. Zero deps. Web app + library. | 1 |
| [entropy](https://github.com/ekaone/entropy) | ekaone/entropy | Primitive Shannon entropy measurement for strings. | 2 |
| [env](https://github.com/andybarron/env) | andybarron/env | Zero-dependency environment variable parsing in Node, Deno, and Bun | 0 |
| [env_validator](https://github.com/tonyrubanraj/env_validator) | tonyrubanraj/env_validator | Zero-dependency TypeScript library to validate environment variables at startup - fail fast with clear, structured errors. | 0 |
| [env-cross](https://github.com/axiom-experiment/env-cross) | axiom-experiment/env-cross | Set environment variables across platforms. Zero-dependency drop-in replacement for the archived cross-env. | 0 |
| [env-diff-checker](https://github.com/chunjiegame-cpu/env-diff-checker) | chunjiegame-cpu/env-diff-checker | Maintainer-focused env drift checks for onboarding, CI, and release confidence. | 1 |
| [env-guard](https://github.com/IronFighter23/env-guard) | IronFighter23/env-guard | Zero-dependency environment variable validator for Node.js | 0 |
| [env-guard](https://github.com/ofershap/env-guard) | ofershap/env-guard | Validate .env files against .env.example or a JSON schema. CLI + library. Zero dependencies. | 0 |
| [env-lint-cli](https://github.com/kszongic/env-lint-cli) | kszongic/env-lint-cli | Lint and validate .env files against .env.example. Find missing vars instantly. | 0 |
| [env-sentinel](https://github.com/axiom-experiment/env-sentinel) | axiom-experiment/env-sentinel | Validate .env files against schemas | 0 |
| [env-smart](https://github.com/jessety/env-smart) | jessety/env-smart | Zero-dependency Node library for using .env files with default values and types in TS/JS | 20 |
| [env2args-cli](https://github.com/kszongic/env2args-cli) | kszongic/env2args-cli |  | 0 |
| [envault](https://github.com/ahmethasmerdogan/envault) | ahmethasmerdogan/envault | Zero-dependency encrypted .env vault — keep secrets encrypted at rest and inject them into your app's environment at runtime, with plaintext never touching disk. | 0 |
| [envcheck](https://github.com/eng-AhmedMahmoud/envcheck) | eng-AhmedMahmoud/envcheck | Validate your .env against .env.example — fails loudly on missing or malformed env vars. Zero dependencies. | 0 |
| [envdoc](https://github.com/bobfromarcher/envdoc) | bobfromarcher/envdoc | Find every env var your code reads, then document it — .env.example generator + CI guard. Zero deps, zero AI. | 0 |
| [envguard](https://github.com/trananhtung/envguard) | trananhtung/envguard | Validate, coerce, and type your environment variables — fail fast with one clear report. Zero dependencies, full TypeScript inference. | 1 |
| [envguard](https://github.com/faizkhairi/envguard) | faizkhairi/envguard | Zero-dependency CLI to audit environment variables -- find missing, unused, and undocumented env vars across your codebase | 0 |
| [envsync](https://github.com/nandukmelath/envsync) | nandukmelath/envsync | Keep your .env.example in sync with .env. A zero-dependency CLI that catches missing or undocumented environment variables before they break your build. | 1 |
| [envwise](https://github.com/Anicodeth/envwise) | Anicodeth/envwise | Tiny, zero-dependency, type-safe environment variable validation for the native .env era. Schema in, typed config out, fail fast with a clear error. | 0 |
| [eric-slider](https://github.com/ericrothdotorg/eric-slider) | ericrothdotorg/eric-slider | A lightweight, zero-dependency vanilla JavaScript slider / carousel. No jQuery, no bloat - just clean, accessible HTML output with smallest footprint possible. | 1 |
| [ESCSS-ESTest](https://github.com/ESCSS-labs/ESCSS-ESTest) | ESCSS-labs/ESCSS-ESTest | Non-intrusive JavaScript validator | 3 |
| [ethers-tools](https://github.com/neuroborus/ethers-tools) | neuroborus/ethers-tools | ethers-tools is a zero-dependency lightweight JavaScript/TypeScript library built on top of ethers.js designed to simplify smart contract interactions and multicall3 aggregation on the Ethereum blockchain and compatible EVM networks. | 3 |
| [etiket](https://github.com/productdevbook/etiket) | productdevbook/etiket | Zero-dependency barcode & QR code SVG, PNG generator. 40+ formats, styled QR codes, tree-shakeable. Pure TypeScript. | 433 |
| [ewma-cli](https://github.com/kszongic/ewma-cli) | kszongic/ewma-cli | Calculate exponentially weighted moving averages from the command line. | 0 |
| [ex-search](https://github.com/Ink01101011/ex-search) | Ink01101011/ex-search | Scoring-based fuzzy search with Myers Levenshtein distance and radix/tim sort ranking. Part of the ex-* ecosystem. | 0 |
| [extreme-router](https://github.com/liorcodev/extreme-router) | liorcodev/extreme-router | A high-performance, tree-based router for JavaScript and TypeScript, featuring a powerful plugin system for extreme extensibility | 9 |
| [FableCut](https://github.com/ronak-create/FableCut) | ronak-create/FableCut | Zero-dependency browser video editor that AI agents can drive — JSON timeline, MCP + REST, live-reloading UI | 479 |
| [fast-json-rules-engine](https://github.com/BobDu/fast-json-rules-engine) | BobDu/fast-json-rules-engine | Compiled, synchronous, zero-dependency rules engine compatible with the json-rules-engine rule format — compile once, no Promise overhead per run. | 1 |
| [fast-pixelizer](https://github.com/handsupmin/fast-pixelizer) | handsupmin/fast-pixelizer | Fast, zero-dependency image pixelation for browser and Node.js | 8 |
| [favicon-api](https://github.com/VeteranBoLuo/favicon-api) | VeteranBoLuo/favicon-api | Self-hosted favicon API for Node.js — zero dependencies, multi-source fallback for bot-blocked sites, caching, and SSRF protection. | 1 |
| [favicon-env](https://github.com/Amir-Abushanab/favicon-env) | Amir-Abushanab/favicon-env | Tint your favicon per environment so you can tell dev/staging/prod tabs apart at a glance. Runtime canvas + build-time/SSR SVG, zero deps, ~0-2.3 kB 🎨 | 1 |
| [feature-preview](https://github.com/cbcruk/feature-preview) | cbcruk/feature-preview | Zero-dependency, localStorage-backed feature preview SDK to see unreleased work in any deployed environment without redeploy | 0 |
| [feature-structure-creator](https://github.com/tunder007/feature-structure-creator) | tunder007/feature-structure-creator | Scaffold a feature dossier (md source + html view) | 0 |
| [femtocolors](https://github.com/delucis/femtocolors) | delucis/femtocolors | A microscopic, zero-dependency library for styling terminal text in Node.js | 10 |
| [fencepick](https://github.com/Ayubjon/fencepick) | Ayubjon/fencepick | Robustly extract fenced code blocks from LLM/markdown output: tolerates truncated fences, mixed backtick/tilde fences, nesting, and salvages the JSON inside. Zero-dep CLI + library. | 0 |
| [feriados-peru](https://github.com/Edsoncame/feriados-peru) | Edsoncame/feriados-peru | Calendario oficial de feriados nacionales del Perú + utilidades de días hábiles. TS+ESM, MIT. Mantenido por Securex (https://securex.pe). | 1 |
| [ferry](https://github.com/LucentiveLabs/ferry) | LucentiveLabs/ferry | Agent-era secrets broker: use a secret in an agent's command without ever showing it the value. Zero-dependency Node CLI — output redaction, per-command policy allowlist, append-only audit. | 0 |
| [fetch-smartly](https://github.com/Ali-Raza-Arain/fetch-smartly) | Ali-Raza-Arain/fetch-smartly | Zero-dependency, isomorphic HTTP client with intelligent retry, circuit breaker, and offline queue for Node.js and browsers | 1 |
| [fetcher](https://github.com/zero-dependency/fetcher) | zero-dependency/fetcher | 🌍 Flexible fetcher wrapper | 3 |
| [fetchwise](https://github.com/didrod205/fetchwise) | didrod205/fetchwise | Tiny zero-dependency resilient fetch — retries, exponential backoff, timeouts & Retry-After. ~1KB, works everywhere fetch does. | 1 |
| [file-hasher-cli](https://github.com/kszongic/file-hasher-cli) | kszongic/file-hasher-cli | Hash files with multiple algorithms from the command line. | 0 |
| [file-stat-cli](https://github.com/kszongic/file-stat-cli) | kszongic/file-stat-cli |  | 0 |
| [file-tree-cli](https://github.com/kszongic/file-tree-cli) | kszongic/file-tree-cli | Print directory tree structure to stdout. Customizable depth and ignore patterns. Zero deps. | 0 |
| [finance-tracker](https://github.com/Michael-WhiteCapData/finance-tracker) | Michael-WhiteCapData/finance-tracker | Self-hosted, local-first personal finance tracker — subscriptions, budgets, alerts & overdraft forecasting, with optional real-time bank sync via SimpleFIN. Zero dependencies. | 1 |
| [financial](https://github.com/lmammino/financial) | lmammino/financial | A Zero-dependency TypeScript/JavaScript financial library (based on numpy-financial) for Node.js, Deno and the browser | 726 |
| [financial](https://github.com/JohnFredok/financial) | JohnFredok/financial | A Zero-dependency TypeScript/JavaScript financial library (based on numpy-financial) for Node.js, Deno and the browser | 1 |
| [find-open-port-cli](https://github.com/kszongic/find-open-port-cli) | kszongic/find-open-port-cli | Find an available port on your machine from the command line. | 0 |
| [fireworks-js](https://github.com/crashmax-dev/fireworks-js) | crashmax-dev/fireworks-js | 🎆 A simple fireworks library! Ready to use components available for React, Vue 3, Svelte, Angular, Preact, Solid, and Web Components. | 1,382 |
| [fizzbuzz-cli](https://github.com/kszongic/fizzbuzz-cli) | kszongic/fizzbuzz-cli | Classic FizzBuzz as a CLI tool. Zero dependencies. | 0 |
| [flare-redact](https://github.com/umudhasanli/flare-redact) | umudhasanli/flare-redact | International secret & PII redaction for JS/TS — logs, prompts, HTTP, datasets. 20+ languages, checksum-validated national IDs, reversible LLM layer. Zero deps, ReDoS-safe. | 6 |
| [flexily](https://github.com/beorn/flexily) | beorn/flexily | Pure JavaScript flexbox layout engine — Yoga-compatible API, 2.5x faster initial layout, 5.5x faster re-layout, zero WASM | 13 |
| [flightcache](https://github.com/trananhtung/flightcache) | trananhtung/flightcache | Tiny async cache: TTL + LRU, single-flight dedup, and stale-while-revalidate. Zero dependencies. | 0 |
| [flightlog](https://github.com/hamr0/flightlog) | hamr0/flightlog | A flight recorder for your app — zero-dependency local error capture to JSONL. | 0 |
| [float-labels.js](https://github.com/pryley/float-labels.js) | pryley/float-labels.js | A zero-dependency plugin that applies the float label pattern to a form. | 88 |
| [float2hex-cli](https://github.com/kszongic/float2hex-cli) | kszongic/float2hex-cli | Convert floating point numbers to IEEE 754 hex representation. | 0 |
| [flowdown](https://github.com/Atomics-hub/flowdown) | Atomics-hub/flowdown | O(1) streaming markdown renderer for the AI era. Zero dependencies. ~4KB gzipped. | 1 |
| [flowshield](https://github.com/Avinashvelu03/flowshield) | Avinashvelu03/flowshield | FlowShield is a modern, zero-dependency, TypeScript-first resilience library that provides composable fault-tolerance patterns for any async operation. Think of it as a lightweight, modern alternative to Cockatiel/Polly — but with a cleaner API, better TypeScript inference, and built for edge runtimes (Node.js, Bun, Deno, Cloudflare Workers). | 0 |
| [flowx-control](https://github.com/Avinashvelu03/flowx-control) | Avinashvelu03/flowx-control | Production-grade, zero-dependency TypeScript resilience & async flow control library. 100% test coverage. Retry with backoff, Circuit Breaker, Bulkhead, Rate Limiter, Priority Queue, Semaphore, Mutex, Debounce, Throttle, Timeout, Hedge, Poll, Batch, Pipeline — all tree-shakable & composable. | 0 |
| [forgekit](https://github.com/CodeWithJuber/forgekit) | CodeWithJuber/forgekit | One config for every AI coding agent — cross-tool config + a cognitive substrate (memory, blast-radius, guardrails) for Claude Code, Codex, Cursor, Gemini, Aider, and more. | 2 |
| [ForgeSelect](https://github.com/cmm-cmm/ForgeSelect) | cmm-cmm/ForgeSelect | ForgeSelect is a next-generation JavaScript select component built for modern web applications. It provides a clean API, powerful customization options, excellent performance, and accessibility while remaining framework-agnostic. | 3 |
| [formula_tor](https://github.com/andriy-sotnyk/formula_tor) | andriy-sotnyk/formula_tor | A small JS library that visualizes mathematical expressions. | 1 |
| [fortifyjs](https://github.com/Chiranth-Janardhan-moger/fortifyjs) | Chiranth-Janardhan-moger/fortifyjs | The zero-dependency Web Application Firewall (WAF) for Node.js. 🛡️ One-line protection against SQLi, XSS, CSRF, SSRF, and more. | 1 |
| [frame-damp](https://github.com/x1ee7/frame-damp) | x1ee7/frame-damp | Zero-dependency framerate-independent damping (exponential smoothing) for scroll & cursor-follow animations. Fixes lerp smoothing that runs too fast on 144Hz. | 0 |
| [freq-table-cli](https://github.com/kszongic/freq-table-cli) | kszongic/freq-table-cli | Read lines from stdin and print a frequency table sorted by count. Percentages, ASCII bar charts, top-N, case folding. Zero deps. | 0 |
| [friskeval](https://github.com/ryanda9910/friskeval) | ryanda9910/friskeval | Deterministic, zero-dep routing linter for a skill catalog — catch description collisions and scope overclaim before you ship a skill. Ports the TF-IDF routing idea from agent-skills, adds a security-skill overclaim check. | 3 |
| [frogtalk](https://github.com/digiwood7/frogtalk) | digiwood7/frogtalk | 유료 상담 SaaS 없이 — 가벼운 사이트에 script 한 줄로 붙이는 텔레그램 상담톡 (의존성 0, Vercel+Supabase 무료 티어) | 0 |
| [FsBrowserSide](https://github.com/WaRtr0/FsBrowserSide) | WaRtr0/FsBrowserSide | FS Browser side Javascript module (server-to-client adaptation) | 13 |
| [fusion-mcp](https://github.com/yksanjo/fusion-mcp) | yksanjo/fusion-mcp | Zero-dep MCP server exposing OpenRouter Fusion (multi-model panel + judge synthesis) as a tool any agent can call. | 0 |
| [fuzzrank](https://github.com/didrod205/fuzzrank) | didrod205/fuzzrank | Tiny zero-dependency fuzzy matcher with fzf-quality scoring and match-position highlighting — for command palettes, quick-open & autocomplete. ~1KB. | 1 |
| [Fuzzy-Finder](https://github.com/NeaByteLab/Fuzzy-Finder) | NeaByteLab/Fuzzy-Finder | High-performance fuzzy search library using intelligent scoring and boundary bonuses for accurate file path ranking in codebases. | 0 |
| [game-of-life](https://github.com/fvzzy/game-of-life) | fvzzy/game-of-life | Interactive Game of Life in vanilla JS. | 0 |
| [gaptime](https://github.com/davccavalcante/gaptime) | davccavalcante/gaptime | GapTime: bi-temporal knowledge-graph memory for production agents. Every fact carries valid time and transaction time, so you time-travel to what was known at any instant, supersede outdated facts without losing history, and detect contradictions. Zero dependencies, TypeScript, edge-ready. | 1 |
| [gemini-chatbot](https://github.com/Ahmad1765/gemini-chatbot) | Ahmad1765/gemini-chatbot | A lightweight, zero-dependency frontend interface for the Google Gemini API, featuring a modern responsive UI and secure local storage. | 0 |
| [get-moment-stamp](https://github.com/tripolskypetr/get-moment-stamp) | tripolskypetr/get-moment-stamp | Calculate days since 01/01/1970 | 0 |
| [get-ssl-certificate](https://github.com/johncrisostomo/get-ssl-certificate) | johncrisostomo/get-ssl-certificate | A zero-dependency utility that returns a website's SSL certificate | 60 |
| [get-video-resolution](https://github.com/oscnord/get-video-resolution) | oscnord/get-video-resolution | Zero-dependency video metadata for Node.js and the browser. Read resolution, codec, HDR, audio/subtitle tracks, and DRM from MP4, MOV, WebM, MKV, AVI, HLS, and DASH. No ffmpeg / ffprobe required | 5 |
| [get-wild](https://github.com/chocolateboy/get-wild) | chocolateboy/get-wild | Extract nested properties from an object with support for wildcards | 7 |
| [ghcard](https://github.com/bobfromarcher/ghcard) | bobfromarcher/ghcard | Generate self-contained SVG stat cards + profile README from any GitHub account. No third-party services. Zero deps, zero AI. | 0 |
| [giant](https://github.com/heapwolf/giant) | heapwolf/giant | A Component Framework with SSR for Rust & Nodejs. Inspired by React, Tailwind, ShadCN, & Next.js | 886 |
| [git](https://github.com/Ismail-elkorchi/git) | Ismail-elkorchi/git | Pure TypeScript Git library with repository, object, reference, and adapter APIs for Node.js, Deno, and Bun. | 0 |
| [git-digest](https://github.com/autonsol/git-digest) | autonsol/git-digest |  | 0 |
| [git-hygiene](https://github.com/chitranklabs/git-hygiene) | chitranklabs/git-hygiene | The ultimate zero-dependency metadata validator for modern Git workflows. Enforce conventional commits, branch naming patterns, and PR titles with blazing-fast native Node.js performance. | 0 |
| [git-line-visualizer](https://github.com/moralmk/git-line-visualizer) | moralmk/git-line-visualizer | Visualize line-count changes of configurable file types across a git branch history in the browser — zero dependencies. | 0 |
| [git-snapshot](https://github.com/axiom-experiment/git-snapshot) | axiom-experiment/git-snapshot | Visual git stash manager — list, show, save, and pop stashes with readable output. Zero dependencies. | 0 |
| [git-whoami](https://github.com/sabahattink/git-whoami) | sabahattink/git-whoami | Show your git identity, SSH keys, GPG status at a glance. | 0 |
| [github-contribution-svg](https://github.com/adnanreza/github-contribution-svg) | adnanreza/github-contribution-svg | Zero-dependency React component that renders a GitHub contribution calendar as a crisp, CSS-themeable inline SVG | 1 |
| [github-monitor](https://github.com/ryabinski-labs/github-monitor) | ryabinski-labs/github-monitor | Local dashboard for GitHub pull requests, CI, CD, deployments, and self-hosted runners | 0 |
| [github-sync](https://github.com/tunder007/github-sync) | tunder007/github-sync | Safe gh branch/PR flow with standard conventions | 0 |
| [gitpulse](https://github.com/bobfromarcher/gitpulse) | bobfromarcher/gitpulse | One-screen git repo health report — commit cadence, hot files, contributors, language mix & TODO markers. Zero deps, zero AI. | 0 |
| [gitsweep](https://github.com/bobfromarcher/gitsweep) | bobfromarcher/gitsweep | Safely find & prune stale local git branches (merged or remote-gone). Zero deps, zero AI. | 0 |
| [gladknee](https://github.com/stephengladney/gladknee) | stephengladney/gladknee | An open-source utility library written in TypeScript | 5 |
| [glob-size-cli](https://github.com/kszongic/glob-size-cli) | kszongic/glob-size-cli | Check total file size matching glob patterns. Find what's bloating your project. | 0 |
| [glob-to-regex-cli](https://github.com/kszongic/glob-to-regex-cli) | kszongic/glob-to-regex-cli | Convert glob patterns to regex. Pipe-friendly CLI. Zero dependencies. | 0 |
| [glowprint](https://github.com/Devguru-J/glowprint) | Devguru-J/glowprint | ✦ Make console.log beautiful. Drop-in replacement with colorized, aligned, boxed output. Zero dependencies, TypeScript. | 1 |
| [gm-compat](https://github.com/chocolateboy/gm-compat) | chocolateboy/gm-compat | Portable monkey-patching for userscripts | 17 |
| [gm-storage](https://github.com/chocolateboy/gm-storage) | chocolateboy/gm-storage | An ES6 Map wrapper for the synchronous userscript storage API | 13 |
| [go-qweb](https://github.com/gkong/go-qweb) | gkong/go-qweb | golang zero-dependency web back-end components | 3 |
| [golazo26](https://github.com/onwike/golazo26) | onwike/golazo26 | Golazo 26 — a fan-built static guide to every 2026 FIFA World Cup match: schedule, venues, and how to watch free in the US. Zero-dependency Node generator, bake-don't-serve. | 0 |
| [gomoku-mini](https://github.com/patchsmith-dev/gomoku-mini) | patchsmith-dev/gomoku-mini | A lightweight zero-dependency browser Gomoku game. | 0 |
| [grahan](https://github.com/svarbhanu/grahan) | svarbhanu/grahan | The open-source sky engine - astronomy-grade Sun/Moon positions, sunrise/sunset, moon phases, and Vedic panchang. Zero dependencies, MIT. | 3 |
| [graphinql](https://github.com/taskless/graphinql) | taskless/graphinql | 🕸️ A zero-dependency graphql client that likes (but does not require) types | 1 |
| [graphql-batch](https://github.com/mfix22/graphql-batch) | mfix22/graphql-batch | Create batching GraphQL resolvers | 1 |
| [graphrefly-ts](https://github.com/graphrefly/graphrefly-ts) | graphrefly/graphrefly-ts | Reactive harness layer for agent workflows. Describe automations in plain language, trace every decision, enforce policies, persist checkpoints. TypeScript. Zero dependencies. | 1 |
| [graviton](https://github.com/zero-intelligence/graviton) | zero-intelligence/graviton | Zero-dependency local document intelligence substrate. Extract semantic embeddings, multi-topic clusters, revision diffs, and structural signal packets offline at the edge in &lt;1ms. Ships pre-trained vector geometry directly in the runtime. | 2 |
| [grid-cli](https://github.com/kszongic/grid-cli) | kszongic/grid-cli | Render grids and tables in the terminal. Zero dependencies. | 0 |
| [gsc-cli](https://github.com/Casys-AI/gsc-cli) | Casys-AI/gsc-cli | Zero-dependency Google Search Console CLI + library, built for agents. OAuth user flow, structured JSON, machine-readable errors. | 0 |
| [guarden](https://github.com/Avinashvelu03/guarden) | Avinashvelu03/guarden | 🛡️ Blazing-fast, zero-dependency TypeScript runtime safety toolkit. 60+ type guards with auto-narrowing, Result/Option monads, assertions, invariants, data pipelines (pipe/flow), string sanitization, and env validation. Tree-shakeable. Dual ESM/CJS. 313 tests. 100% coverage. Guard your runtime, harden your types. | 0 |
| [gzip-cli](https://github.com/kszongic/gzip-cli) | kszongic/gzip-cli | Gzip compress and decompress files or stdin from the command line. Zero dependencies. | 0 |
| [h5wasm](https://github.com/usnistgov/h5wasm) | usnistgov/h5wasm | A WebAssembly HDF5 reader/writer library  | 145 |
| [handa360](https://github.com/BFUR64/handa360) | BFUR64/handa360 | Handa360 is a web application that turns general disaster-preparedness instructions into a catered set of actionable items. | 3 |
| [happy-codec](https://github.com/JiangJie/happy-codec) | JiangJie/happy-codec | Zero-dependency codec library for UTF-8, Base64, Hex and ByteString encoding/decoding. | 2 |
| [hash-file-cli](https://github.com/kszongic/hash-file-cli) | kszongic/hash-file-cli | Hash files with MD5, SHA-1, SHA-256 and more from the command line. | 0 |
| [hcrypt](https://github.com/ahmethasmerdogan/hcrypt) | ahmethasmerdogan/hcrypt | Zero-dependency, all-in-one authenticated-encryption CLI & library for Node.js — cascade/fortress AEAD, scrypt/Argon2id, keyfile 2FA, streaming file & directory encryption. | 0 |
| [hdrtoys-library-server](https://github.com/TheBigSasha/hdrtoys-library-server) | TheBigSasha/hdrtoys-library-server | Tiny, zero-dependency local library server that serves your own folder of photos (or a macOS Photos library) to hdr.toys for HDR/gain-map editing — fully client-side. | 0 |
| [headless-combobox](https://github.com/crvouga/headless-combobox) | crvouga/headless-combobox | ⚡️Zero dependencies 🔌 Framework agnostic 💪 TypeScript 🧠 Headless Combobox | 46 |
| [hebrew-dates](https://github.com/ofershap/hebrew-dates) | ofershap/hebrew-dates | Modern Hebrew/Jewish calendar library for TypeScript - date conversion, holidays, formatting in Hebrew | 0 |
| [hebrew-slugify](https://github.com/ofershap/hebrew-slugify) | ofershap/hebrew-slugify | Slugify Hebrew text for URLs - transliteration + slug generation. Zero dependencies. | 0 |
| [hedron-contrast-checker](https://github.com/hedronit/hedron-contrast-checker) | hedronit/hedron-contrast-checker | Dependency-free color contrast checker. WCAG 2.2 AA/AAA + APCA, divergence detection, conformant color suggestions. Zero build step. | 3 |
| [hermitstash](https://github.com/dotCooCoo/hermitstash) | dotCooCoo/hermitstash | Post-quantum encrypted, self-hosted file sharing. ML-KEM-1024 + P-384 hybrid crypto, zero plaintext on disk, one-command deploy. 🦀 | 5 |
| [hermitstash-sync](https://github.com/dotCooCoo/hermitstash-sync) | dotCooCoo/hermitstash-sync | Desktop sync client for HermitStash. PQC TLS, WebSocket real-time sync, zero-dependency Node.js daemon. | 1 |
| [hex-add-cli](https://github.com/kszongic/hex-add-cli) | kszongic/hex-add-cli |  | 0 |
| [hex-decode-cli](https://github.com/kszongic/hex-decode-cli) | kszongic/hex-decode-cli |  | 0 |
| [hex-multiply-cli](https://github.com/kszongic/hex-multiply-cli) | kszongic/hex-multiply-cli |  | 0 |
| [hex-pad-cli](https://github.com/kszongic/hex-pad-cli) | kszongic/hex-pad-cli | Pad hex strings to a fixed width from the terminal. | 0 |
| [hex-sum-cli](https://github.com/kszongic/hex-sum-cli) | kszongic/hex-sum-cli | Sum hex values from the command line. Useful for checksums, memory offsets, and binary analysis. | 0 |
| [HistoryJS](https://github.com/buildwithdarsh/HistoryJS) | buildwithdarsh/HistoryJS | A modern, typed, framework-agnostic wrapper over the browser History API — the 2026 successor to history.js. Typed entries, async guards, query helpers, route matcher, link interception, virtual stack. Zero deps, ~3KB gz. | 0 |
| [hjyup-flags](https://github.com/HJyup/hjyup-flags) | HJyup/hjyup-flags | an experiment in publishing my own npm package | 0 |
| [hoard.js](https://github.com/beepboopbangbang/hoard.js) | beepboopbangbang/hoard.js | A small (zero dependency) Node.js CLI utility to clone & hoard repositories quickly | 1 |
| [hookguard](https://github.com/axiom-experiment/hookguard) | axiom-experiment/hookguard | Zero-dependency git hooks manager | 0 |
| [hors](https://github.com/dmitrymarison/hors) | dmitrymarison/hors | Hors - Zero-dependency HTTP security headers | 0 |
| [hostname-cli](https://github.com/kszongic/hostname-cli) | kszongic/hostname-cli | Print system hostname, FQDN, or IP addresses. Cross-platform. Zero dependencies. | 0 |
| [hostname-parse-cli](https://github.com/kszongic/hostname-parse-cli) | kszongic/hostname-parse-cli |  | 0 |
| [hot-repo-radar](https://github.com/Yuree000/hot-repo-radar) | Yuree000/hot-repo-radar | Snapshot GitHub Trending daily/weekly/monthly, diff rank changes, and generate structured Chinese reports — zero npm   dependencies. | 1 |
| [hover-effects](https://github.com/ofershap/hover-effects) | ofershap/hover-effects | Canvas-based hover effects for images - ASCII, pixelate, glitch, blur. Zero dependencies. | 0 |
| [html-editor](https://github.com/AmoryMing/html-editor) | AmoryMing/html-editor | HTML 编���器 freeze-edit：本地可视化（WYSIWYG）编辑 AI 生成的 HTML 设计稿/PRD——动态稿一键冻结为静态、双击改字、跨文件复制卡片不丢样式、元素级评论、局域网多人共编、保存自动备份。零依赖两个文件。Local WYSIWYG editor for AI-generated HTML. | 0 |
| [html-parser](https://github.com/Ismail-elkorchi/html-parser) | Ismail-elkorchi/html-parser | HTML parser for JavaScript with fragment parsing, DOM traversal, and visible text extraction. | 0 |
| [html-visual-editor](https://github.com/matongAI-lab/html-visual-editor) | matongAI-lab/html-visual-editor | 帮助非程序员把 AI 生成的 HTML 改到能用 \| A browser-based visual touch-up tool for AI-generated static HTML. No install — just double-click index.html. | 56 |
| [httix-http](https://github.com/Avinashvelu03/httix-http) | Avinashvelu03/httix-http | Ultra-lightweight, type-safe, zero-dependency HTTP client built on native Fetch. The modern axios replacement — 5kB, interceptors, retry, SSE streaming, rate limiting & more. | 0 |
| [http-head-cli](https://github.com/kszongic/http-head-cli) | kszongic/http-head-cli | Send HTTP HEAD requests and print response headers from the CLI. Zero dependencies. | 0 |
| [http-node-api](https://github.com/joaovictornsv/http-node-api) | joaovictornsv/http-node-api | O objetivo dessa aplicação era criar uma API sem nenhuma dependência externa, apenas utilizando as bibliotecas nativas do NodeJS. Tudo foi feito utilizando 100% Javascript. | 46 |
| [hubitat-client](https://github.com/cdowin/hubitat-client) | cdowin/hubitat-client | Zero-dependency Node client for the Hubitat Elevation local hub API | 0 |
| [hucre](https://github.com/productdevbook/hucre) | productdevbook/hucre | Zero-dependency spreadsheet engine. Read & write XLSX, CSV, ODS. Pure TypeScript, works everywhere. | 1,450 |
| [huebrew](https://github.com/didrod205/huebrew) | didrod205/huebrew | Brew a color palette & ready-to-use theme tokens from any image — median-cut extraction, OKLab ramps, CSS/Tailwind/SCSS/JSON/SVG export. Zero deps, 100% local. | 2 |
| [humanize-bytes-cli](https://github.com/kszongic/humanize-bytes-cli) | kszongic/humanize-bytes-cli | Convert byte counts to human-readable strings (KB, MB, GB) and back. Zero deps, cross-platform CLI. | 0 |
| [humanize-quick](https://github.com/sulthonzh/humanize-quick) | sulthonzh/humanize-quick | Zero-dependency human-readable formatting: bytes, durations, relative time, ordinals, compact numbers, pluralization, lists | 0 |
| [humidi](https://github.com/d-buckner/humidi) | d-buckner/humidi | Simple and lightweight MIDI library for humans. Zero dependencies, less than 5kB gzipped. | 2 |
| [hydrate-text](https://github.com/vasilii-kovalev/hydrate-text) | vasilii-kovalev/hydrate-text | A small, dependency-free and strongly typed template engine. | 48 |
| [hyperfrontend](https://github.com/AndrewRedican/hyperfrontend) | AndrewRedican/hyperfrontend | MIT-licensed microfrontend runtime solution | 13 |
| [hyperscroll](https://github.com/shuakami/hyperscroll) | shuakami/hyperscroll | Anchor-driven virtualization engine: scroll tens of millions of dynamic-height items at 60 FPS. Zero dependencies, framework-agnostic, constant memory. | 0 |
| [i18m](https://github.com/nmnmcc/i18m) | nmnmcc/i18m | a lightweight, type-safe internationalization helper | 2 |
| [i18n-framework-adapter](https://github.com/i18n-l10n/i18n-framework-adapter) | i18n-l10n/i18n-framework-adapter | One framework-agnostic i18n core (negotiation, fallback, ICU-subset formatting) with thin Next.js, Vue, and Svelte adapters | 0 |
| [i18nkit](https://github.com/Abdess/i18nkit) | Abdess/i18nkit | Extensible i18n CLI with plugin architecture | 1 |
| [ichnograph](https://github.com/kVadrum/ichnograph) | kVadrum/ichnograph | One-screen orientation for any codebase. | 0 |
| [ICM-Protocols](https://github.com/cleaneramade/ICM-Protocols) | cleaneramade/ICM-Protocols | Your AI can push code, send emails, and spend money. Decide what it's allowed to do. A local control panel for AI rules, app permissions, skills, and secrets — zero dependencies, nothing leaves your machine. | 0 |
| [icy](https://github.com/often/icy) | often/icy | An icy currency converter. | 0 |
| [idx](https://github.com/munesoft/idx) | munesoft/idx | ⚡ Zero-dependency ID generator for Node.js & browsers random, sortable, and human-readable IDs with crypto-safe entropy | 0 |
| [image-palette-webgpu](https://github.com/IvanLudvig/image-palette-webgpu) | IvanLudvig/image-palette-webgpu | A tiny zero-dependency browser package that extracts dominant color or color palette from an image using WebGPU API with various algorithms | 20 |
| [inertial](https://github.com/UnknownPrinciple/inertial) | UnknownPrinciple/inertial | Reactive signals made easy | 2 |
| [inject-radar](https://github.com/Ayubjon/inject-radar) | Ayubjon/inject-radar | Zero-dependency, local-first prompt-injection scanner and CI gate for LLM apps — risk scoring + obfuscation detection (zero-width, homoglyph, base64) | 2 |
| [inject.min](https://github.com/nenjack/inject.min) | nenjack/inject.min | dependency injection made super easy - all you need \| lazy register \| with override \| decorator support | 4 |
| [inkflow-editor](https://github.com/zidony/inkflow-editor) | zidony/inkflow-editor | A lightweight, zero-dependency, and high-performance WYSIWYG rich text editor built with pure Vanilla JavaScript. | 2 |
| [input-mask](https://github.com/virastack/input-mask) | virastack/input-mask | Lightweight, zero-dependency input masking library optimized for React Hook Form. | 14 |
| [int2roman-cli](https://github.com/kszongic/int2roman-cli) | kszongic/int2roman-cli | Convert integers to Roman numerals from the command line. | 0 |
| [invoice](https://github.com/chrisrobison/invoice) | chrisrobison/invoice | Simple, light-weight, totally self-contained, no external libraries, client-side invoice creator with all data stored locally in-browser. | 3 |
| [ip-distance-cli](https://github.com/kszongic/ip-distance-cli) | kszongic/ip-distance-cli |  | 0 |
| [ip-in-range-cli](https://github.com/kszongic/ip-in-range-cli) | kszongic/ip-in-range-cli |  | 0 |
| [ip-next-cli](https://github.com/kszongic/ip-next-cli) | kszongic/ip-next-cli |  | 0 |
| [ip-prev-cli](https://github.com/kszongic/ip-prev-cli) | kszongic/ip-prev-cli |  | 0 |
| [iris](https://github.com/tools-for-agents/iris) | tools-for-agents/iris | 👁 The agent's eye: render what you built at real viewports and themes, and measure what a glance would catch — overflow, clipping, contrast, unreadable type, collisions, design drift, dead game loops. CLI + MCP. Zero deps. | 0 |
| [is-fast-internet](https://github.com/okasi/is-fast-internet) | okasi/is-fast-internet | Zero-dependency browser check for fast internet — reliable even in censored countries | 9 |
| [is-valid-css-color](https://github.com/priyanshurav/is-valid-css-color) | priyanshurav/is-valid-css-color | A fast, lightweight validator for modern CSS color strings. | 1 |
| [isbn-gen-cli](https://github.com/kszongic/isbn-gen-cli) | kszongic/isbn-gen-cli | Generate random valid ISBN-10 and ISBN-13 numbers from the command line. Zero dependencies. | 0 |
| [isx](https://github.com/munesoft/isx) | munesoft/isx | Tiny, fast, zero-dependency type-checking & validation for JavaScript. Replace is-odd, is-array, is-number, kind-of and 50+ micro-packages with one unified utility. | 0 |
| [jaro-winkler-cli](https://github.com/kszongic/jaro-winkler-cli) | kszongic/jaro-winkler-cli | Calculate Jaro-Winkler string similarity from the terminal. | 0 |
| [jelly-local-sync](https://github.com/rajanndube/jelly-local-sync) | rajanndube/jelly-local-sync | Local-only browser viewer for Jelly QA annotations: npx jelly-local-sync, scan the QR, annotate. Nothing leaves the machine. | 1 |
| [jl-log](https://github.com/beixiyo/jl-log) | beixiyo/jl-log | 🎨 零依赖跨端彩色日志库 · Zero-dependency cross-platform logger for Browser & Node.js — colorful output, unified API, full TypeScript types | 0 |
| [job-ripper](https://github.com/dshovchko/job-ripper) | dshovchko/job-ripper | Rips through CPU-heavy file jobs on all cores via worker_threads. Zero deps, zero config. CLI + API | 18 |
| [jpegr](https://github.com/wellwelwel/jpegr) | wellwelwel/jpegr | 🖼️ Convert images to JPEG with size-targeted compression directly from browser with high compatibility rate. | 0 |
| [js-ephemeris](https://github.com/RedSC1/js-ephemeris) | RedSC1/js-ephemeris | High-precision solar system ephemeris engine for JavaScript/TypeScript. Zero dependencies, runs in Browser and Node.js. | 0 |
| [js-idb](https://github.com/josefjadrny/js-idb) | josefjadrny/js-idb | Lightweight JSON database for TypeScript with schema validation, indexed search, and sorting. Zero    dependencies. In-memory or file-persisted. Node.js & browser.  | 1 |
| [jsjs](https://github.com/nusr/jsjs) | nusr/jsjs | JavaScript interpret JavaScript.Zero dependencies. | 9 |
| [jslint](https://github.com/jslint-org/jslint) | jslint-org/jslint | JSLint, The JavaScript Code Quality and Coverage Tool | 3,660 |
| [json-diff-cli](https://github.com/sabahattink/json-diff-cli) | sabahattink/json-diff-cli | Compare two JSON files and show differences. Color-coded output. | 0 |
| [json-doctor](https://github.com/yellcamap/json-doctor) | yellcamap/json-doctor | 🩺 Fix broken JSON from LLMs, APIs, and humans. Zero dependencies. Repair, validate, diff, format, and convert JSON. | 0 |
| [json-flatten-cli](https://github.com/kszongic/json-flatten-cli) | kszongic/json-flatten-cli | Flatten nested JSON objects into dot-notation key-value pairs. Zero dependencies. | 0 |
| [json-fmt-cli](https://github.com/kszongic/json-fmt-cli) | kszongic/json-fmt-cli | Format and pretty-print JSON from the command line. | 0 |
| [json-parser-from-scratch](https://github.com/AdityaDwiNugroho/json-parser-from-scratch) | AdityaDwiNugroho/json-parser-from-scratch | Zero-dependency JSON parser written from scratch in JavaScript (Lexer + Recursive Descent Parser). | 0 |
| [json-stream-lite](https://github.com/jacobshirley/json-stream-lite) | jacobshirley/json-stream-lite | A super lightweight, zero dependency JSON streaming, written in TypeScript. Works in the browser and Node. | 1 |
| [Jsonary](https://github.com/NeaByteLab/Jsonary) | NeaByteLab/Jsonary | Zero-dependency embedded database storing JSON to files with query builder featuring filters, updates, and nested path support. | 2 |
| [jsonc.min](https://github.com/wellwelwel/jsonc.min) | wellwelwel/jsonc.min | ✨ Faster and safer JSON and JSONC minify, parse and stringify for JavaScript (Browser compatible) — 2.3KB. | 13 |
| [JsonCompare](https://github.com/jeanr2022/JsonCompare) | jeanr2022/JsonCompare | JSON diff side-by-side JSON module with zero-dependency and pure JavaScript, works everywhere | 0 |
| [jsoncraft](https://github.com/Cryptoteep/jsoncraft) | Cryptoteep/jsoncraft | A zero-dependency, TypeScript-first JSON toolkit for querying, transforming, and converting JSON data. JSONPath, YAML/CSV/TOML conversion, diff, merge, validate — runs on Node.js, Bun, Deno, and browsers. | 1 |
| [jsonhilo](https://github.com/xtao-org/jsonhilo) | xtao-org/jsonhilo | Fast lossless JSON parse event streaming, in JavaScript. | 45 |
| [jsonlkit](https://github.com/trananhtung/jsonlkit) | trananhtung/jsonlkit | Stream-friendly NDJSON / JSON Lines parsing and serialization for strings, ReadableStreams, and async iterables. Zero dependencies. | 0 |
| [jsonpluck](https://github.com/trananhtung/jsonpluck) | trananhtung/jsonpluck | Pluck valid JSON out of messy LLM output — strips markdown fences, fixes trailing commas, single quotes, comments, and truncation. Zero dependencies. | 1 |
| [just-color-it](https://github.com/itsaryanchauhan/just-color-it) | itsaryanchauhan/just-color-it | Lightweight terminal color library with dual module support | 4 |
| [jwt-cli](https://github.com/ahmethasmerdogan/jwt-cli) | ahmethasmerdogan/jwt-cli | Zero-dependency CLI to decode, inspect, and verify JSON Web Tokens (JWT) — human-readable claims and security-focused HMAC HS256/384/512 verification that never trusts the token's own alg. | 0 |
| [jwt-inspect-cli](https://github.com/kszongic/jwt-inspect-cli) | kszongic/jwt-inspect-cli | Decode and inspect JWT tokens from the command line. Header, payload, expiry. Zero dependencies. | 0 |
| [kanji-data](https://github.com/sepTN/kanji-data) | sepTN/kanji-data | A distilled, offline-first Kanji database for Node.js. 13,000+ characters mapped into lazy-loading shards for zero dependencies and instant serverless cold starts. | 7 |
| [kaysa](https://github.com/edukah/kaysa) | edukah/kaysa | Zero-dependency vanilla JS horizontal slider with touch controls, custom scrollbar, and responsive gap settings. | 1 |
| [kebab2camel-cli](https://github.com/kszongic/kebab2camel-cli) | kszongic/kebab2camel-cli | Convert kebab-case to camelCase or PascalCase from the terminal. Zero dependencies. | 0 |
| [kebab2title-cli](https://github.com/kszongic/kebab2title-cli) | kszongic/kebab2title-cli | Convert kebab-case strings to Title Case from the terminal. Zero dependencies. | 0 |
| [keel](https://github.com/sudhanshu1402/keel) | sudhanshu1402/keel | Durable execution for TypeScript AI agents. Crash-proof workflows that resume exactly where they left off. Zero cloud, zero cost, zero dependencies. | 0 |
| [keewebx](https://github.com/gynet/keewebx) | gynet/keewebx | Open a KeePass vault in your browser — no install, no signup. Try the demo in 10 seconds at keewebx.app/app?demo=1. Modern web-only KeePass client: KDBX4, passkey unlock, browser extension autofill, runs from a double-clicked .html file. | 25 |
| [keto-variation-engine](https://github.com/ahasol/keto-variation-engine) | ahasol/keto-variation-engine | Local-first web app that fights keto boredom — recombines a curated library of keto-legal ingredients into thousands of carb-counted meals. Zero-dependency Node server + deterministic engine + pluggable AI layer (Gemini/Anthropic/OpenAI-compatible). | 0 |
| [kilid](https://github.com/farskid/kilid) | farskid/kilid | Fast and efficient TypeScript keyboard, mouse and pointer management | 2 |
| [kill-port](https://github.com/sabahattink/kill-port) | sabahattink/kill-port | Kill any process running on a specified port. Cross-platform. | 0 |
| [kill-port-cli](https://github.com/kszongic/kill-port-cli) | kszongic/kill-port-cli | Find and kill processes by port. Zero dependencies. Works on Windows, macOS, and Linux. | 0 |
| [knowledge-as-code-template](https://github.com/snapsynapse/knowledge-as-code-template) | snapsynapse/knowledge-as-code-template | A template for building structured, self-healing, agent-accessible knowledge bases. Zero dependencies. Git-native. Ontology-driven. Multi-output. | 4 |
| [konteiner](https://github.com/petrmiko/konteiner) | petrmiko/konteiner | Simple DI container for node.js applications | 1 |
| [krikos](https://github.com/davccavalcante/krikos) | davccavalcante/krikos | Identity registry and lifecycle management for fleets of AI agents. Zero-dependency TypeScript IAM: cryptographic agent identity (Ed25519), declared capabilities with fail-closed authorization, an enforced lifecycle (provision, activate, suspend, revoke, expire, archive), A2A Signed Agent Cards, and a hash-chained audit trail. | 2 |
| [lacis](https://github.com/getlacis/lacis) | getlacis/lacis | Lacis is a zero-dependency, lightweight web framework for TypeScript, designed for maximum simplicity and flexibility. It provides intuitive file-based routing and makes building APIs and web applications straightforward while ensuring high performance. | 4 |
| [lan-drop-zero](https://github.com/ban10yuu/lan-drop-zero) | ban10yuu/lan-drop-zero | Move files between devices on the same Wi-Fi with one local command. No cloud or account. | 0 |
| [lcs-cli](https://github.com/kszongic/lcs-cli) | kszongic/lcs-cli | Find the longest common subsequence of two strings from the terminal | 0 |
| [leaksweep](https://github.com/bobfromarcher/leaksweep) | bobfromarcher/leaksweep | Scan code for committed secrets (keys, tokens, private keys, high-entropy). Pre-commit hook + CI gate. Zero deps, zero AI. | 0 |
| [learn](https://github.com/HarperZ9/learn) | HarperZ9/learn | Turn your own material into a runnable course: FSRS spaced repetition, retrieval practice, real grading, zero dependencies. Halts hard at every graded step, so the machine never takes the test for you; every graded step leaves a re-verifiable receipt. | 1 |
| [lens](https://github.com/tools-for-agents/lens) | tools-for-agents/lens | 🔎 Token-efficient code & doc retrieval for agents: FTS5 search, symbol outlines, surgical reads. CLI + MCP. Zero deps. | 0 |
| [lerp-cli](https://github.com/kszongic/lerp-cli) | kszongic/lerp-cli | Linear interpolation (lerp) calculator from the command line. | 0 |
| [leseq](https://github.com/ugaya40/leseq) | ugaya40/leseq | Lazy collection(lazy list) with high tree-shaking affinity and easy customization. | 27 |
| [libseymour](https://github.com/bhj/libseymour) | bhj/libseymour | Interact with RSS/Atom feed aggregators via the Google Reader/GReader API | 2 |
| [license-gen](https://github.com/sabahattink/license-gen) | sabahattink/license-gen | Generate LICENSE files from your terminal. | 0 |
| [license-maker](https://github.com/kszongic/license-maker) | kszongic/license-maker | Generate LICENSE files from the command line. MIT, Apache, GPL, BSD, ISC, MPL, Unlicense — zero dependencies. | 0 |
| [licsweep](https://github.com/bobfromarcher/licsweep) | bobfromarcher/licsweep | Audit npm dependency licenses — flag copyleft/unknown, fail CI on a deny-list. Zero deps, zero AI. | 0 |
| [life-battle](https://github.com/emmazangAI/life-battle) | emmazangAI/life-battle | Conway's Game of Life as a multi-species battle. Watch gliders, spaceships and Gosper guns fight for territory. Zero dependencies, plain HTML + Canvas + vanilla JS. | 4 |
| [lilac](https://github.com/maifeeulasad/lilac) | maifeeulasad/lilac | lilac: A smooth and elegant WYSIWYG editor for effortless writing | 12 |
| [lilnouns-online](https://github.com/JohnFredok/lilnouns-online) | JohnFredok/lilnouns-online | A Zero-dependency TypeScript/JavaScript financial library (based on numpy-financial) for Node.js, Deno and the browser | 0 |
| [linearizer](https://github.com/tunder007/linearizer) | tunder007/linearizer | Flatten a repo's AI-source into one token-budgeted bundle | 0 |
| [lines2json-cli](https://github.com/kszongic/lines2json-cli) | kszongic/lines2json-cli | Convert text lines to JSON arrays from the terminal. | 0 |
| [lingo](https://github.com/pascalorg/lingo) | pascalorg/lingo | Make forms easier, LLM tools safer. Natural-language quantities, units, dates & ranges parsed into canonical values — zero dependencies, two-way. | 13 |
| [lite-fifo](https://github.com/kleinron/lite-fifo) | kleinron/lite-fifo | Lightweight and efficient implementations of FIFO/Queue, written in pure javascript | 56 |
| [litmus](https://github.com/rxNxkolai/litmus) | rxNxkolai/litmus | Unit tests for your LLM prompts. Behavioral test suites with rich assertions, a deterministic offline mock provider, regression detection, and an interactive HTML report. Zero runtime dependencies. | 0 |
| [little-es](https://github.com/DominikBB/little-es) | DominikBB/little-es | An event sourcing library for JS / TS | 2 |
| [lllog](https://github.com/jormaechea/lllog) | jormaechea/lllog | A minimal zero-dependency logger. | 0 |
| [llm-extract](https://github.com/Ayubjon/llm-extract) | Ayubjon/llm-extract | Zero-dependency CLI + library to extract code blocks (into files) and JSON from messy LLM/markdown output. | 2 |
| [llm-router](https://github.com/nandukmelath/llm-router) | nandukmelath/llm-router | Route each prompt to the smallest model strong enough — heuristic+judge tier routing, multi-provider, response cache, budget caps. | 0 |
| [llmstream](https://github.com/Srikanth-AD/llmstream) | Srikanth-AD/llmstream | Tiny zero-dependency TypeScript library that parses LLM streaming responses (OpenAI, Anthropic, Gemini, Ollama) into a clean normalized async  iterator.  | 0 |
| [llmvantage](https://github.com/frandi/llmvantage) | frandi/llmvantage | Lightweight, zero-dependency observability layer for LLM API calls in TypeScript/Node.js. | 0 |
| [lobsterjs](https://github.com/Hacknock/lobsterjs) | Hacknock/lobsterjs | A tool to convert Markdown into simple and rich web pages. | 41 |
| [logease](https://github.com/Cryptoteep/logease) | Cryptoteep/logease | Beautiful, zero-dependency structured logging for Node.js & TypeScript. Tiny, colorful, typed, extensible. | 1 |
| [lognana](https://github.com/alex-page/lognana) | alex-page/lognana | 🍌 An emoji fueled log system with zero dependencies | 2 |
| [logprob-lens](https://github.com/Ayubjon/logprob-lens) | Ayubjon/logprob-lens | Analyze LLM token log-probabilities: perplexity, per-token confidence, low-confidence span detection, and a terminal heatmap. Zero deps, CLI + library. | 0 |
| [logstrip](https://github.com/mrwogu/logstrip) | mrwogu/logstrip | Library that compresses massive CI/system logs into dense, AI-ready error context, reducing LLM input tokens and filtering noise with streaming-safe parsing. | 5 |
| [logx](https://github.com/munesoft/logx) | munesoft/logx | Tiny zero-config JavaScript logger for Node.js & browser. Structured logging, colored output, JSON mode, child loggers & TypeScript support. No setup required. | 0 |
| [loopstop](https://github.com/Ayubjon/loopstop) | Ayubjon/loopstop | Zero-dependency loop detector for LLM agent tool-call trajectories — catch consecutive repeats, A-B-A-B oscillation, and no-progress cycles, then break the loop before it burns tokens. | 1 |
| [lorem-gen-cli](https://github.com/kszongic/lorem-gen-cli) | kszongic/lorem-gen-cli | Generate lorem ipsum placeholder text. Words, sentences, or paragraphs. Zero dependencies. | 0 |
| [lru.min](https://github.com/wellwelwel/lru.min) | wellwelwel/lru.min | 🔥 An extremely fast and efficient LRU cache for JavaScript with high compatibility (including Browsers). | 51 |
| [lrucache-x](https://github.com/sulthonzh/lrucache-x) | sulthonzh/lrucache-x | Zero-dep LRU cache with TTL, eviction callbacks, and stats | 0 |
| [lystore](https://github.com/CatOfJupit3r/lystore) | CatOfJupit3r/lystore | TypeScript-first library for creating type-safe listener stores | 0 |
| [maillint](https://github.com/didrod205/maillint) | didrod205/maillint | Lint HTML email for client compatibility — locally, no render farm. Flags CSS/HTML that breaks in Outlook (Word engine) & Gmail clipping at 102KB, against a bundled caniemail-derived support matrix. Deterministic CLI, JSON/MD reports. | 1 |
| [mailproof](https://github.com/hamr0/mailproof) | hamr0/mailproof | Email-native multi-party coordination kernel: DKIM-verified replies, git-committed ledger, scheduled triggers. Extracted from gitdone. WIP. | 0 |
| [marketo-auto-recon](https://github.com/austinjgilbert/marketo-auto-recon) | austinjgilbert/marketo-auto-recon | Point it at any Marketo instance and get an instance map, chronological buyer journeys, 20-second seller briefs, and a live feed of buying signals. Read-only, zero dependencies, works without credentials in mock mode. | 0 |
| [marquee](https://github.com/astoltz/marquee) | astoltz/marquee | Programmable LED marquee sign library for the browser — dot-matrix, split-flap, and modern text modes with 11 hardware presets, 13 animation phases, and zero dependencies | 2 |
| [marzipan](https://github.com/pinkpixel-dev/marzipan) | pinkpixel-dev/marzipan | “Marzipan is a zero-dependency, TypeScript-first markdown editor library with a pixel-perfect overlay preview, smart formatting actions, and plug-and-play theming/plugins for any web framework. | 2 |
| [matchigo](https://github.com/SUP2Ak/matchigo) | SUP2Ak/matchigo | Pattern-matching engine for TypeScript — compile-once hot path or allocation-free walk mode. Rust-like, type-safe, exhaustive, zero dependencies. | 1 |
| [math-expr-cli](https://github.com/kszongic/math-expr-cli) | kszongic/math-expr-cli | Evaluate math expressions from the command line. Supports variables, functions, and unit conversions. | 0 |
| [mathfuse](https://github.com/Avinashvelu03/mathfuse) | Avinashvelu03/mathfuse | Modern zero-dependency TypeScript math library — stats, algebra, number theory & numerical methods. 124 tests, ESM + CJS dual build. | 0 |
| [matrix-rain-cli](https://github.com/kszongic/matrix-rain-cli) | kszongic/matrix-rain-cli | Matrix digital rain effect in your terminal. Zero dependencies, customizable speed/density/color, katakana support. | 0 |
| [mcp-registry-finder](https://github.com/bharat3645/mcp-registry-finder) | bharat3645/mcp-registry-finder | Zero-dependency Node MCP server with 4 tools for searching the official MCP registry (registry.modelcontextprotocol.io) - find servers by keyword, inspect details, get install snippets. Node &gt;=18, stdio transport, node:test suite with recorded fixtures. | 0 |
| [mcpcustoms](https://github.com/davccavalcante/mcpcustoms) | davccavalcante/mcpcustoms | MCPCustoms is the customs checkpoint for MCP tool calls: a zero-dependency TypeScript runtime semantic firewall that inspects every Massive Intelligence (IM) agent tool call before execution. Detects tool poisoning, command/SQL/prompt injection, path traversal, and capability overreach; verifies signed Ed25519 publishers; fail-closed by default. | 2 |
| [md-lite-js](https://github.com/croct-tech/md-lite-js) | croct-tech/md-lite-js | 📝 A simple and easy-to-use Markdown parser and render for basic formatting. Only 1.5 KB gzipped! | 41 |
| [md5sum-cli](https://github.com/kszongic/md5sum-cli) | kszongic/md5sum-cli |  | 0 |
| [meadown-logger](https://github.com/meadown/meadown-logger) | meadown/meadown-logger | A development focused logger package for Node.js and TypeScript - Zero dependency - Development focused logger - Clickable source link - API response logging - Color-coded levels - Tree layout output | 4 |
| [meeko](https://github.com/kongnet/meeko) | kongnet/meeko | zero-dependency Nodejs Personal  awesome utilities | 81 |
| [mep](https://github.com/CodeTease/mep) | CodeTease/mep | Zero-dependency, powerful interactive CLI prompt for Node.js | 2 |
| [MermZen](https://github.com/caoergou/MermZen) | caoergou/MermZen | A clean, lightweight Mermaid diagram editor — hand-drawn style, live preview, and one-click export. | 13 |
| [meta-toolkit](https://github.com/uhop/meta-toolkit) | uhop/meta-toolkit | Zero-dependency toolkit for meta programming and OOP: name-casing conversions, property descriptors, aliases, prototype traversal, iterators, deep path access, option merging, and comparator adapters | 2 |
| [micro-loops](https://github.com/imedadel/micro-loops) | imedadel/micro-loops | 🚅 Fast and small (228B) implementations of JS loops  | 3 |
| [micro509](https://github.com/kjanat/micro509) | kjanat/micro509 | The zero-dependency TypeScript PKI toolkit for real certificate workflows. | 0 |
| [microgpt-ts](https://github.com/dubzdubz/microgpt-ts) | dubzdubz/microgpt-ts | A complete GPT built from scratch in TypeScript with zero dependencies | 38 |
| [mimic-data](https://github.com/fazelllyyy/mimic-data) | fazelllyyy/mimic-data | Lightweight, zero-dependency library for generating realistic dummy data with strong localization support. | 2 |
| [min-test](https://github.com/t-ski/min-test) | t-ski/min-test | Minimal test script for quickstart NodeJS projects. | 0 |
| [mind-gym](https://github.com/AICL-Lab/mind-gym) | AICL-Lab/mind-gym | 🧠 Browser-based memory training PWA with FSRS-4.5 spaced repetition, N-back training, and adaptive difficulty \| 基于 FSRS-4.5 间隔重复、N-back 训练和自适应难度的浏览器记忆力训练 PWA | 5 |
| [mind-mri-agent-second-brain](https://github.com/ara-5/mind-mri-agent-second-brain) | ara-5/mind-mri-agent-second-brain | A zero-dependency, offline-first Graph-RAG memory core and REST API server for autonomous AI agents. Features vector-like TF-IDF semantic search, exponential time-decay relevance scoring, and an interactive D3.js knowledge-graph visualizer | 0 |
| [minhash-dedupe](https://github.com/Ayubjon/minhash-dedupe) | Ayubjon/minhash-dedupe | Zero-dependency MinHash + LSH near-duplicate detector for LLM datasets (JSONL/text). Clean fine-tuning & RAG data locally — no embeddings, no API keys. | 0 |
| [mini-framework](https://github.com/TanakAiko/mini-framework) | TanakAiko/mini-framework | A lightweight educational JavaScript framework built from scratch. Implements Virtual DOM, Redux-like state management, and client-side routing - demonstrating how modern frameworks work internally without any dependencies. | 0 |
| [mini-wait-on](https://github.com/markxoe/mini-wait-on) | markxoe/mini-wait-on | Tiny, zero-dependency CLI alternative for wait-on | 1 |
| [mini-xlsx](https://github.com/MubsiraAnalytics/mini-xlsx) | MubsiraAnalytics/mini-xlsx | Build real .xlsx (Excel) files in the browser with zero dependencies. ~5 KB, one function. | 0 |
| [minima-js](https://github.com/Minimum-Viable-Web/minima-js) | Minimum-Viable-Web/minima-js | Tiny fully featured AI ready zero dependency javascript framework. | 1 |
| [minyatur](https://github.com/edukah/minyatur) | edukah/minyatur | Zero-dependency vanilla JS image slider with zoom, fullscreen, thumbnails, and responsive aspect ratio DSL. | 0 |
| [minzip](https://github.com/firien/minzip) | firien/minzip | Native Zip Writer | 1 |
| [mirror-text-cli](https://github.com/kszongic/mirror-text-cli) | kszongic/mirror-text-cli |  | 0 |
| [ml-basic](https://github.com/infinityfx-llc/ml-basic) | infinityfx-llc/ml-basic | Lightweight, zero dependency, machine learning library. | 2 |
| [mnemosyne](https://github.com/davccavalcante/mnemosyne) | davccavalcante/mnemosyne | Persistent, portable, shared memory for Massive Intelligence (IM) agents: pluggable stores, a deterministic identity seed stable across model swaps, masking and residency, and Ed25519-signed, SHA-256-chained tamper-evident access logs. Zero dependencies, node-free core, TypeScript-first. | 1 |
| [model-picker](https://github.com/zanwei/model-picker) | zanwei/model-picker | Dark reasoning mixer model picker as a zero-dependency Web Component (MIT) | 10 |
| [model-to-webgpu](https://github.com/svenflow/model-to-webgpu) | svenflow/model-to-webgpu | Convert any ML model (ONNX, GGUF, TFLite) into a standalone browser project with hand-written WGSL compute shaders. Zero dependencies, zero frameworks. | 2 |
| [moldjs](https://github.com/juhoen/moldjs) | juhoen/moldjs | JavaScript String expanded :tada: | 1 |
| [moment-less](https://github.com/thinkgrid-labs/moment-less) | thinkgrid-labs/moment-less | Moment.js muscle memory, Temporal-native engine. | 1 |
| [moqt-js](https://github.com/shiguredo/moqt-js) | shiguredo/moqt-js | MOQT (Media over QUIC Transport) client library | 4 |
| [morse-codec](https://github.com/Tim-Hopanchuk/morse-codec) | Tim-Hopanchuk/morse-codec | Morse code encoder and decoder for TypeScript and JavaScript. Lightweight and zero-dependency. | 0 |
| [mousepox-static-server](https://github.com/geoffb/mousepox-static-server) | geoffb/mousepox-static-server | A dead simple, zero-dependency static file server for Node.js. | 0 |
| [moving-avg-cli](https://github.com/kszongic/moving-avg-cli) | kszongic/moving-avg-cli | Calculate simple moving averages from the command line. | 0 |
| [ms-convert](https://github.com/sabahattink/ms-convert) | sabahattink/ms-convert | Convert between human-readable time strings and milliseconds. | 0 |
| [mutexkit](https://github.com/trananhtung/mutexkit) | trananhtung/mutexkit | Fair async Mutex and counting Semaphore with weighted permits, runExclusive, and AbortSignal support. Zero dependencies. | 0 |
| [mxverify](https://github.com/Perufitlife/mxverify) | Perufitlife/mxverify | Fast email verifier with no API key — syntax, disposable domains, role addresses, live MX records. Tags valid/risky/invalid. Zero dependencies. | 0 |
| [mycal](https://github.com/AungMyoKyaw/mycal) | AungMyoKyaw/mycal | Zero dependency Myanmar Calendar library for TypeScript. Convert Gregorian dates to Myanmar calendar with Thingyan, Watat years, and Buddhist Era. | 10 |
| [naming-conventions-modeler](https://github.com/vhidvz/naming-conventions-modeler) | vhidvz/naming-conventions-modeler | Simple and Fast naming conventions modeler implemented by Proxy, zero dependencies. | 14 |
| [nanocsv](https://github.com/didrod205/nanocsv) | didrod205/nanocsv | Tiny zero-dependency CSV parser & stringifier — handles quotes, escaped quotes, embedded commas/newlines & CRLF. ~1KB. | 1 |
| [nanoodle-js](https://github.com/nanoodlecom/nanoodle-js) | nanoodlecom/nanoodle-js | Run nanoodle workflows from JavaScript — zero-dependency executor for saved noodle-graph.json files | 0 |
| [nativecn-ui](https://github.com/muku534/nativecn-ui) | muku534/nativecn-ui | A curated registry of premium React Native UI components built for customization and performance. Unlike traditional libraries, nativecn-ui allows you to copy-paste code directly into your project, giving you full ownership with zero dependency bloat. Features TypeScript support, NativeWind styling, and smooth 60fps animations out of the box. | 0 |
| [NativeDB](https://github.com/CodingMarius/NativeDB) | CodingMarius/NativeDB | A simple, lightweight local database for Node.js that stores data in a JSON file on your storage. | 3 |
| [nct.js](https://github.com/carlylekatto/nct.js) | carlylekatto/nct.js | A lightweight, zero-dependency Node.js client library for the NhacCuaTui (NCT) API, supporting search, stream extraction, lyrics parsing, topic browsing, and user logins. Fully typed in TypeScript with dual CommonJS/ESM support. | 0 |
| [ndjson-avg-cli](https://github.com/kszongic/ndjson-avg-cli) | kszongic/ndjson-avg-cli | Calculate averages from NDJSON streams in the terminal. | 0 |
| [ndjson-compact-cli](https://github.com/kszongic/ndjson-compact-cli) | kszongic/ndjson-compact-cli | Compact NDJSON by removing null/empty fields. Pipe-friendly. Zero dependencies. | 0 |
| [ndjson-dedup-cli](https://github.com/kszongic/ndjson-dedup-cli) | kszongic/ndjson-dedup-cli | Deduplicate NDJSON (newline-delimited JSON) records by key. Unix-friendly streaming CLI. | 0 |
| [ndjson-del-cli](https://github.com/kszongic/ndjson-del-cli) | kszongic/ndjson-del-cli | Delete fields from NDJSON records. Pipe-friendly CLI. Zero dependencies. | 0 |
| [ndjson-rename-cli](https://github.com/kszongic/ndjson-rename-cli) | kszongic/ndjson-rename-cli | Rename fields in NDJSON records. Pipe-friendly CLI. Zero dependencies. | 0 |
| [ndjson-sum-cli](https://github.com/kszongic/ndjson-sum-cli) | kszongic/ndjson-sum-cli |  | 0 |
| [ndjson2yaml-cli](https://github.com/kszongic/ndjson2yaml-cli) | kszongic/ndjson2yaml-cli | Convert NDJSON streams to YAML from the command line. | 0 |
| [neural-network-race](https://github.com/fpirsch/neural-network-race) | fpirsch/neural-network-race |  | 3 |
| [nexit](https://github.com/ridakk/nexit) | ridakk/nexit | Tiny dependency free utility to exit NodeJs gracefully | 0 |
| [next-safe-env](https://github.com/mzeeshanwahid/next-safe-env) | mzeeshanwahid/next-safe-env | Typed, validated environment variables for Next.js and Node.js | 3 |
| [nextrush-log](https://github.com/0xTanzim/nextrush-log) | 0xTanzim/nextrush-log | Universal, zero-dependency, production-grade logger for modern JavaScript runtimes (Node.js, Bun, Deno, Edge, Browser). Features environment-based configuration, automatic redaction, and performance tracking. | 1 |
| [nexus](https://github.com/hawonb711-tech/nexus) | hawonb711-tech/nexus | Local-first trust layer for AI coding agents: structural prompt-injection and action guards, secret scanning, semantic memory, code review, and 17 MCP tools. No model API required. | 0 |
| [niimbot-web-bluetooth](https://github.com/iscarelli/niimbot-web-bluetooth) | iscarelli/niimbot-web-bluetooth | Zero-dependency Web Bluetooth driver + reverse-engineered protocol docs to print Niimbot label printers straight from the browser — no app. Validated on B1, B1 Pro and M2-H. | 1 |
| [Nimage](https://github.com/NeaByteLab/Nimage) | NeaByteLab/Nimage | Drop-in vanilla lightbox library turning any tagged image into a grouped gallery with keyboard, touch, pinch, and slideshow support. | 0 |
| [nl2br-cli](https://github.com/kszongic/nl2br-cli) | kszongic/nl2br-cli |  | 0 |
| [nlu-bot-trainer](https://github.com/divyamohan1993/nlu-bot-trainer) | divyamohan1993/nlu-bot-trainer | Enterprise-grade NLU bot trainer with 5-classifier stacking ensemble (171K params) — runs entirely in the browser | 0 |
| [nocket](https://github.com/n-1x/nocket) | n-1x/nocket | NodeJS Websocket module with no dependencies. | 1 |
| [node-bring-api](https://github.com/foxriver76/node-bring-api) | foxriver76/node-bring-api | Node module to mange Bring! shopping lists | 73 |
| [node-cgi-core](https://github.com/lfortin/node-cgi-core) | lfortin/node-cgi-core | Lightweight, zero-dependency middleware for hosting CGI scripts with HTTP/1.1 support | 0 |
| [node-cli](https://github.com/libraz/node-cli) | libraz/node-cli | Zero-dependency, batteries-included interactive CLI framework for Node.js / TypeScript | 0 |
| [node-cli-for-generating-files](https://github.com/mtrybus2208/node-cli-for-generating-files) | mtrybus2208/node-cli-for-generating-files |  | 1 |
| [node-file-upload](https://github.com/jacdebug/node-file-upload) | jacdebug/node-file-upload | Pure nodejs file upload with zero dependencies. | 8 |
| [node-jwt](https://github.com/SourceRegistry/node-jwt) | SourceRegistry/node-jwt | A lightweight, zero-dependency TypeScript library for creating, verifying and decoding JSON Web Tokens (JWT). | 0 |
| [NodeDeck](https://github.com/NazmulGit/NodeDeck) | NazmulGit/NodeDeck | NodeDeck - local-first dashboard & control center for Docker MCP Toolkit + PM2. Browse the MCP catalog, build profiles, manage secrets, run the gateway, and connect Claude, Cursor, VS Code & 16+ AI clients. Zero npm dependencies. | 0 |
| [nodeflow](https://github.com/santiagogdo/nodeflow) | santiagogdo/nodeflow | Dead-simple, customizable and zero-dependency canvas-based node editor. | 3 |
| [nodeviewer](https://github.com/dveronm21/nodeviewer) | dveronm21/nodeviewer | Zero-dependency Node.js network scanner - discovers hosts, open ports, IoT devices via mDNS/SSDP, and identifies running Node.js services with real-time SSE streaming UI. | 0 |
| [noeticos](https://github.com/davccavalcante/noeticos) | davccavalcante/noeticos | NoeticOS: the JIT compiler for agents. Adaptive runtime intelligence for production agents, per-task-class tuning of model, temperature, topP, maxTurns, retryBudget, and contextShare with confidence-bound bandits, deterministic canary rollouts, automatic rollback, and a complete decision audit log. Zero dependencies, TypeScript, edge-ready. | 1 |
| [noodle-embed](https://github.com/nanoodlecom/noodle-embed) | nanoodlecom/noodle-embed | Embed a nanoodle workflow, rendered read-only, in any page — one ES module, zero deps | 0 |
| [nostr-attestations](https://github.com/forgesworn/nostr-attestations) | forgesworn/nostr-attestations | One Nostr event kind for all attestations — credentials, endorsements, vouches, provenance, licensing, and trust. NIP-VA (kind 31000). | 2 |
| [NowClipboard](https://github.com/Spicy-Mustard/NowClipboard) | Spicy-Mustard/NowClipboard | 强大的现代剪贴板工具库 — 零依赖，支持浏览器和 Node.js 双环境 文本 / 图片 / 富文本复制，历史记录，跨标签页同步，多格式写入，开箱即用 | 2 |
| [npm-name-check](https://github.com/kszongic/npm-name-check) | kszongic/npm-name-check | Instantly check if npm package names are available. Bulk check + smart suggestions. Zero deps. | 0 |
| [nt-pulse](https://github.com/Forgata/nt-pulse) | Forgata/nt-pulse | A high-performance distributed network throughput engine built in Node.js. It bypasses disk I/O and V8 garbage collection to measure bare-metal link saturation across secured edge nodes. | 1 |
| [num-base-cli](https://github.com/kszongic/num-base-cli) | kszongic/num-base-cli | Convert numbers between any bases (2-36) from the terminal. | 0 |
| [numkey](https://github.com/devslab-kr/numkey) | devslab-kr/numkey | Numeric input formatting — live thousands grouping, caret-safe editing, right alignment (숫자 인풋: 천단위 콤마·커서·정렬) — TypeScript, zero-dep, vanilla/Vue/React | 0 |
| [obsidian-kb-workflow-lite](https://github.com/FireJW/obsidian-kb-workflow-lite) | FireJW/obsidian-kb-workflow-lite | Public-safe preview workflow primitives for Obsidian-style Markdown knowledge bases: frontmatter, wikilinks, search, and manifests. | 0 |
| [obsidian-native-mcp](https://github.com/usrivastava92/obsidian-native-mcp) | usrivastava92/obsidian-native-mcp | Zero-dependency MCP server for Obsidian vaults. Direct filesystem access — no Obsidian process or REST API plugin needed. | 1 |
| [ocm](https://github.com/dtzp555-max/ocm) | dtzp555-max/ocm | OCM — a zero-dependency local dashboard for OpenClaw: manage sub-agents, run commands in a built-in CLI, and avoid hand-editing JSON. | 4 |
| [octowrite](https://github.com/flavormingo/octowrite) | flavormingo/octowrite | a sacred all powerful github flavored markdown previewer beyond human comprehension | 0 |
| [of-cors](https://github.com/MMT40/of-cors) | MMT40/of-cors | Explain browser CORS decisions with typed, actionable diagnostics. | 1 |
| [oh-my-fable](https://github.com/didrod205/oh-my-fable) | didrod205/oh-my-fable | oh-my-fable — Fable 5's way of working a long task (plan first, self-correct, never lose the thread), as a model-agnostic agent harness. The run lives in one serializable RunContext, checkpointed every step, so a crash is a pause. Zero deps, deterministically testable. | 8 |
| [ohlcv-doctor](https://github.com/ahmethasmerdogan/ohlcv-doctor) | ahmethasmerdogan/ohlcv-doctor | Zero-dependency Node CLI that health-checks OHLCV market-data (candlestick) files for the data-quality bugs that quietly ruin a backtest. | 0 |
| [okcolor](https://github.com/didrod205/okcolor) | didrod205/okcolor | Tiny zero-dependency color toolkit with OKLab/OKLCH color science and WCAG accessibility. Parse, convert, mix perceptually, check contrast. ~3KB. | 1 |
| [ole2-reader](https://github.com/zanlucathiago/ole2-reader) | zanlucathiago/ole2-reader | Zero-dependency OLE2 / Compound File Binary (CFB) reader for Node and the browser — read the streams inside legacy Microsoft files (.xls, .doc, .ppt, .msg). | 1 |
| [olx-scraper](https://github.com/klimadev/olx-scraper) | klimadev/olx-scraper | Self-contained, zero-dependency OLX scraper — paste into browser console, extract all ad data including full adDetail JSON, descriptions, and structured specs | 0 |
| [omega-unified](https://github.com/Black0ffR/omega-unified) | Black0ffR/omega-unified | Ω Zero-dependency JS security scanner — deobfuscates webpack bundles, AST taint tracking, SW analysis, chunk graph. 273 findings on Juice Shop in 10.7s. Termux-native. | 0 |
| [omnitab](https://github.com/AnishBhandarkar/omnitab) | AnishBhandarkar/omnitab | Cross-tab messaging for browsers. Pub/Sub with automatic SharedWorker → BroadcastChannel → localStorage fallback. Zero dependencies. TypeScript ready. | 0 |
| [onboarding-zoom](https://github.com/kra-so/onboarding-zoom) | kra-so/onboarding-zoom | Cinematic, zoom-driven onboarding tours for live websites | 0 |
| [OpenGridX](https://github.com/OpenCoreStack/OpenGridX) | OpenCoreStack/OpenGridX | High-performance React data infrastructure. Unlock advanced Row Grouping, Excel Export, and Column Pinning without the usual "Pro" gatekeeping. Built for speed, scale, and complete architectural freedom. Fully open, virtualization-ready, and feature-complete. | 1 |
| [openinfra-logger](https://github.com/jonathascordeiro20/openinfra-logger) | jonathascordeiro20/openinfra-logger | OIL · Universal structured logging for Node, Python, Go and Rust — built from each runtime's standard library. Native batching, auto-redaction, AI root-cause analysis. Zero dependencies. | 1 |
| [openjsxl](https://github.com/joaquimserafim/openjsxl) | joaquimserafim/openjsxl | Fast, zero-dependency, TypeScript-first Excel (.xlsx) reader for Node, Deno, Bun, and the browser. | 1 |
| [orchard](https://github.com/antonvasin/orchard) | antonvasin/orchard | TypeScript Library | 2 |
| [Origentra](https://github.com/FrankAsanteVanLaarhoven/Origentra) | FrankAsanteVanLaarhoven/Origentra | The platform-neutral trusted control plane for digital content — verified identity, provable provenance, governed publication, and accountable evidence. Zero-dependency reference implementation with a reproducible security benchmark. | 0 |
| [oscillation](https://github.com/UnknownPrinciple/oscillation) | UnknownPrinciple/oscillation | Physics-based animation library | 3 |
| [oss-track](https://github.com/tunder007/oss-track) | tunder007/oss-track | Score a repo against an open-source readiness checklist | 0 |
| [OTSkit-core](https://github.com/OTSkit/OTSkit-core) | OTSkit/OTSkit-core | OpenTimestamps core library — TypeScript, zero-dependency, fail-closed | 2 |
| [p2p](https://github.com/fire17/p2p) | fire17/p2p | Tiny zero-dependency P2P chat — one 26-char key, E2E-encrypted, MITM-proof first contact, NAT traversal, no coordinator server. https://p2p.akeyo.io | 0 |
| [package-reality-check](https://github.com/JaydenYoonZK/package-reality-check) | JaydenYoonZK/package-reality-check | Check that your dependencies actually exist and are legit. Catches AI-hallucinated (slopsquatted) packages and typosquats before you install. Zero-dependency CLI, browser tool, and GitHub Action. | 0 |
| [packmar.js](https://github.com/krutoo/packmar.js) | krutoo/packmar.js |  Simplest vanilla JavaScript library for create components-based UI. | 8 |
| [panes](https://github.com/silicondaydream/panes) | silicondaydream/panes | Panes is a tiny, dependency-free movable & resizable in-app modal panes for the web | 0 |
| [pangram-cli](https://github.com/kszongic/pangram-cli) | kszongic/pangram-cli | Check if text is a pangram from the command line. Zero deps. | 0 |
| [parsi-text](https://github.com/sobhanaz/parsi-text) | sobhanaz/parsi-text | Tiny zero-dependency toolkit for Persian/Farsi text: digit conversion, Arabic→Persian normalization, RTL detection. | 0 |
| [parsley](https://github.com/flavormingo/parsley) | flavormingo/parsley | ultra lightweight zero dependency markdown parser  | 0 |
| [pascal2title-cli](https://github.com/kszongic/pascal2title-cli) | kszongic/pascal2title-cli | Convert PascalCase strings to Title Case from the terminal. Zero dependencies. | 0 |
| [password-analyzer](https://github.com/HailBytes/password-analyzer) | HailBytes/password-analyzer | Zero-dependency web component for password strength analysis. Works in Hugo, React, Vue, or plain HTML. | 1 |
| [patch-files](https://github.com/tyhopp/patch-files) | tyhopp/patch-files | Manage patches for node_modules | 7 |
| [path-depth-cli](https://github.com/kszongic/path-depth-cli) | kszongic/path-depth-cli | Get the depth of a file path from the terminal | 0 |
| [pcall.js](https://github.com/metaory/pcall.js) | metaory/pcall.js | Minimal Result/Monad library inspired by Lua pcall, Elixir Result, and Rust Result with lifecycle hooks and zero dependencies | 5 |
| [pdfnative-cli](https://github.com/Nizoka/pdfnative-cli) | Nizoka/pdfnative-cli | High-performance, zero-dependency CLI for the pdfnative engine. Automate JSON-to-PDF/A rendering, digital signatures (RSA/ECDSA), and compliance inspection within CI/CD pipelines via shell-pipe workflows. | 0 |
| [pdfnative-react](https://github.com/Nizoka/pdfnative-react) | Nizoka/pdfnative-react | Declarative React reconciler for pdfnative. Compile JSX directly to on-device, accessible PDF/A documents. No DOM dependencies, no headless browsers, no SaaS round-trips. Built for Edge and offline-first apps. | 1 |
| [pennywise](https://github.com/didrod205/pennywise) | didrod205/pennywise | Exact, zero-dependency money math — BigInt minor units mean no floating-point errors; allocate/split never lose a cent. ~2KB. | 1 |
| [percent-change-cli](https://github.com/kszongic/percent-change-cli) | kszongic/percent-change-cli | Calculate percentage change between values from the command line. | 0 |
| [percent-fmt-cli](https://github.com/kszongic/percent-fmt-cli) | kszongic/percent-fmt-cli | Format numbers as percentages from the command line. | 0 |
| [percent-rank-cli](https://github.com/kszongic/percent-rank-cli) | kszongic/percent-rank-cli | Calculate percentile ranks from the command line. | 0 |
| [perfect-number-cli](https://github.com/kszongic/perfect-number-cli) | kszongic/perfect-number-cli | Check if a number is perfect from the command line. | 0 |
| [Perspective](https://github.com/Leopoldthecoder/Perspective) | Leopoldthecoder/Perspective | 🖼Parallax scrolling effect. And more. | 84 |
| [Physics-Toast](https://github.com/vorojar/Physics-Toast) | vorojar/Physics-Toast | Toast notifications with real spring physics & Dynamic Island morphing — a zero-dependency alternative to Sonner. Pure vanilla JS, ~20KB, no React/framework needed. Damped spring engine, SVG gooey effects, 6 toast types. 弹簧物理 Toast 通知，零依赖，Sonner 的原生 JS 平替。 | 20 |
| [picocolors](https://github.com/alexeyraspopov/picocolors) | alexeyraspopov/picocolors | The tiniest and the fastest library for terminal output formatting with ANSI colors | 1,736 |
| [picosm](https://github.com/yesil/picosm) | yesil/picosm | Lightweight, zero-dependency state manager for observable classes — explicit actions, computed caching, batched notifications, Lit integration, store-driven routing. | 4 |
| [piggy-console](https://github.com/piggyzenghz/piggy-console) | piggyzenghz/piggy-console | Zero-dependency self-hosted server console & homelab dashboard — pure-stdlib Python backend, no-build vanilla JS frontend | 2 |
| [pigmentjs](https://github.com/JamesToohey/pigmentjs) | JamesToohey/pigmentjs | A zero-dependency colour organisation, creation and manipulation library built for web developers.  | 2 |
| [ping-toast](https://github.com/KumarDeepak16/ping-toast) | KumarDeepak16/ping-toast | Ultra-lightweight React toast notification library — ~5kb gzipped, zero dependencies, animated icons, action buttons & confirm dialogs. | 0 |
| [pintor](https://github.com/cezaraugusto/pintor) | cezaraugusto/pintor | A lightweight, zero-dependency library for adding colors to the terminal output. Useful for CLI applications, logging, and development tools. | 2 |
| [pioneer-coding-agent](https://github.com/4dmrkey/pioneer-coding-agent) | 4dmrkey/pioneer-coding-agent | A tiny, zero-dependency agentic coding agent for any Anthropic-compatible /v1/messages API (built for Pioneer, works with Anthropic). | 0 |
| [pipe-speed-cli](https://github.com/kszongic/pipe-speed-cli) | kszongic/pipe-speed-cli | Measure data throughput of piped commands. Zero dependencies. | 0 |
| [pkg-diff](https://github.com/axiom-experiment/pkg-diff) | axiom-experiment/pkg-diff | Zero-dependency CLI to diff two package.json files - shows added, removed, and changed dependencies, scripts, and config | 0 |
| [plandeck](https://github.com/OthmanAdi/plandeck) | OthmanAdi/plandeck | The visual Kanban for long-running AI agents. Watch your agent's plan organize itself: dependencies unlock into Ready, the critical path lights up, the one next move is obvious. Nobody wants to read a markdown plan. | 60 |
| [platform-dirs](https://github.com/wedefendit/platform-dirs) | wedefendit/platform-dirs | Dependency-free, cross-platform user directory resolver for Node.js and Bun. Inspired by Python’s platformdirs. | 0 |
| [Playground](https://github.com/buildwithdarsh/Playground) | buildwithdarsh/Playground | A single-page arcade — 6 zero-dependency JS libraries, 3 games (ORBIT shooter, REWIND Sokoban with browser-history undo, TABTRIVIA cross-tab quiz), zero build step. HistoryJS routes, TabJS syncs. | 0 |
| [pnyx](https://github.com/xwirkijowski/pnyx) | xwirkijowski/pnyx | 🛠️ A lightweight, zero-dependency configuration loader for Node.js applications, written in TypeScript. | 0 |
| [poku](https://github.com/wellwelwel/poku) | wellwelwel/poku | 🐷 Poku makes testing easy for Node.js, Bun, Deno, and you at the same time. | 1,173 |
| [polyglot-parity](https://github.com/VelkinaStudio/polyglot-parity) | VelkinaStudio/polyglot-parity | A zero-dependency CLI that fails your build when translation files drift apart, focusing on the placeholder and plural mismatches that key-counting tools miss. | 0 |
| [port-finder](https://github.com/sabahattink/port-finder) | sabahattink/port-finder | Find an available port. Zero dependencies. | 0 |
| [port-scan-cli](https://github.com/kszongic/port-scan-cli) | kszongic/port-scan-cli |  | 0 |
| [portakal](https://github.com/productdevbook/portakal) | productdevbook/portakal | Universal printer language SDK — 9 languages, 9 parsers, 63 cross-compilers. TSC, ZPL, EPL, ESC/POS, CPCL, DPL, SBPL, Star PRNT, IPL. Zero dependencies. Pure TypeScript. | 50 |
| [portakal](https://github.com/mickaelderen14/portakal) | mickaelderen14/portakal | Build thermal printer output in TypeScript with one API for 9 languages, supporting text, barcodes, QR codes, images, and shapes | 0 |
| [portals](https://github.com/rvanbaalen/portals) | rvanbaalen/portals | A lightweight portal system for rendering UI elements above the DOM flow, like modals, tooltips, and dropdowns. | 0 |
| [portcull](https://github.com/davidcjw/portcull) | davidcjw/portcull | Fast, zero-dependency CLI to list and kill the processes holding your dev ports — never fight EADDRINUSE again. | 0 |
| [portdown](https://github.com/axiom-experiment/portdown) | axiom-experiment/portdown | Zero-dependency cross-platform CLI to find and kill processes by port. Works on macOS, Linux, and Windows. The modern kill-port replacement. | 0 |
| [portkill](https://github.com/bobfromarcher/portkill) | bobfromarcher/portkill | Find & kill whatever is holding a TCP port. Cross-platform, zero deps, zero AI. Bye-bye EADDRINUSE. | 0 |
| [portpeek](https://github.com/nadonghuang/portpeek) | nadonghuang/portpeek | 🔍 Fast, beautiful local port scanner for developers — zero dependencies, service detection, colored output | 0 |
| [potentiajs](https://github.com/antistructured/potentiajs) | antistructured/potentiajs | PotentiaJS is an experimental, contract-driven JavaScript framework kernel for building server-first applications with explicit routing, actions, form metadata, and file-routing projection. | 0 |
| [ppt-notes-print](https://github.com/pamelaaaaa1218/ppt-notes-print) | pamelaaaaa1218/ppt-notes-print | 把 PPT 幻灯片和演讲者备注/逐字稿排在同一页 A4 打印的纯前端网页工具 | 1 |
| [pr-checklist-generator](https://github.com/chunjiegame-cpu/pr-checklist-generator) | chunjiegame-cpu/pr-checklist-generator | GitHub Action and CLI for risk-aware PR review checklists from git diffs. | 1 |
| [pressroom](https://github.com/fritzhand/pressroom) | fritzhand/pressroom | Turn your organization's happenings into compiled updates, a branded newsletter, and social collateral — local-first or Firebase team mode, BYO AI key | 0 |
| [prime-factors-cli](https://github.com/kszongic/prime-factors-cli) | kszongic/prime-factors-cli | Find prime factors of any number from the command line. | 0 |
| [prime-sieve-cli](https://github.com/kszongic/prime-sieve-cli) | kszongic/prime-sieve-cli |  | 0 |
| [prism](https://github.com/tools-for-agents/prism) | tools-for-agents/prism | The agent's data reader: any JSON/JSONL blob becomes its shape and the slice you asked for, not the whole thing. Zero-dep, CLI + MCP. | 0 |
| [privacy-friendly-iframe](https://github.com/TimothyGillespie/privacy-friendly-iframe) | TimothyGillespie/privacy-friendly-iframe | A customizable web component to retrieve consent before sending user data out when using iframes. It can be as easy as adding a script tag and replacing your &lt;iframe&gt; tags with &lt;pf-iframe&gt; tags. | 3 |
| [product-cli](https://github.com/kszongic/product-cli) | kszongic/product-cli | Calculate the product of numbers from stdin or arguments. Zero deps CLI. | 0 |
| [product-synonyms](https://github.com/ArkeyWave/product-synonyms) | ArkeyWave/product-synonyms | Pure, zero-dependency TypeScript helpers to parse, normalize, validate, and diff a product-synonym dictionary. | 0 |
| [project-benchmark](https://github.com/tunder007/project-benchmark) | tunder007/project-benchmark | 10-dimension project maturity benchmark | 0 |
| [Prompt2Issue](https://github.com/qapitall/Prompt2Issue) | qapitall/Prompt2Issue | A tiny local-first kanban board for planning your day, with an AI helper that turns a plain-language plan into ready-to-use task cards. Zero dependencies, runs entirely on your machine. | 0 |
| [promptforge](https://github.com/bobfromarcher/promptforge) | bobfromarcher/promptforge | A compiler for your reusable prompts: variables, file injection, recursive composition, straight to the clipboard. Zero deps, zero AI. | 0 |
| [protobuf-wire-decoder](https://github.com/jingshyang/protobuf-wire-decoder) | jingshyang/protobuf-wire-decoder | Schema-free Protocol Buffers wire-format decoder. Decode raw protobuf bytes without a .proto file. Zero dependencies. | 0 |
| [prpl](https://github.com/tyhopp/prpl) | tyhopp/prpl | Lightweight static site generator | 59 |
| [pulse-js-framework](https://github.com/vincenthirtz/pulse-js-framework) | vincenthirtz/pulse-js-framework | A declarative DOM framework with CSS selector-based structure: No build. No dependencies. Just JavaScript. | 2 |
| [pulselog](https://github.com/hamr0/pulselog) | hamr0/pulselog | Zero-dependency scheduled external watcher: health checks + weekly stats digest, silent on green, email on signal, one JSONL line per result (flightlog-compatible). | 0 |
| [pure-http](https://github.com/htdangkhoa/pure-http) | htdangkhoa/pure-http | ✨ The simple web framework for Node.js with zero dependencies. | 214 |
| [pure-node](https://github.com/SabianF/pure-node) | SabianF/pure-node | A zero-dependency (totally internal) pure NodeJS server build | 0 |
| [puredashboard](https://github.com/madnh/puredashboard) | madnh/puredashboard | Vanilla, zero-dependency, no-build UI components for embedded admin dashboards | 1 |
| [puremock](https://github.com/orels1/puremock) | orels1/puremock | A zero-dependency mock api server ⚡️ | 6 |
| [pushover](https://github.com/mustafakurtt/pushover) | mustafakurtt/pushover | Modern, TypeScript-first Pushover API client for Node.js & Bun. Zero dependencies, fluent builder, and enterprise-grade features. | 0 |
| [pw-punch](https://github.com/idtpanic/pw-punch) | idtpanic/pw-punch | 🔐 Ultra-lightweight password hashing & token signing with WebCrypto. Zero dependencies. Edge-native. Built for Cloudflare, Deno, Bun, and Vercel. | 6 |
| [pwa-install](https://github.com/ProgressiveWebComponents/pwa-install) | ProgressiveWebComponents/pwa-install | A tiny vanilla (zero-dependency) non-visual native browser web component (plug-n-play custom HTML element and extensible class) that helps implement custom patterns for promoting progressive web apps (PWA) installation | 73 |
| [pwd-entropy-cli](https://github.com/kszongic/pwd-entropy-cli) | kszongic/pwd-entropy-cli | Calculate password entropy and strength from the terminal. | 0 |
| [QrCode](https://github.com/OctaEDLP00/QrCode) | OctaEDLP00/QrCode | The modern, zero-dependency successor to qrcodejs. Built in TypeScript for the web, focusing on performance and type-safety for Canvas rendering | 0 |
| [qrp](https://github.com/nemanjan00/qrp) | nemanjan00/qrp | A data-first, declarative, low-overhead framework for dashboards. Zero RUNTIME dependencies, zero build step — the devDependencies below are only for tests, lint, and git hooks. | 0 |
| [querypipe](https://github.com/melihaycicek/querypipe) | melihaycicek/querypipe | A typed query behavior engine for filtering, progressive multi-sorting, pagination and backend-safe query generation. Zero-dependency TypeScript, ESM+CJS. | 0 |
| [quickagram](https://github.com/kvant83/quickagram) | kvant83/quickagram | Tiny, dependency-free SVG diagram engine for system & architecture diagrams. Declarative JSON in, polished SVG out. | 1 |
| [QuickCTX](https://github.com/nico-barbieri/QuickCTX) | nico-barbieri/QuickCTX | Fast & easy custom context menus for your web projects. | 1 |
| [quickwind](https://github.com/recabasic/quickwind) | recabasic/quickwind | Quickwind is a fast and efficient Tailwind CSS build tool. | 9 |
| [quikdown](https://github.com/deftio/quikdown) | deftio/quikdown | Fast, secure markdown parser with bidirectional HTML conversion, plugin system, and live editor.    Zero dependencies, XSS-safe by default.  ~17KB core / 100KB editor. | 15 |
| [quorum](https://github.com/rxNxkolai/quorum) | rxNxkolai/quorum | A council of critic-judges that supervises any AI agent loop in real time: keeps it on task, catches hallucinations, escalates to a human, or blocks the step. Framework-agnostic, free and offline by default, zero dependencies. | 0 |
| [quote-guard](https://github.com/Ayubjon/quote-guard) | Ayubjon/quote-guard | Verify that quotations in an LLM answer actually appear in the provided source documents — catch fabricated quotes in RAG. Zero-dependency Node CLI + library. | 2 |
| [racs](https://github.com/davccavalcante/racs) | davccavalcante/racs | RACS (Remote Agent Context Store): prefix-cache management for production agents. Stability-aware prompt planning, provider-faithful cache directives for Anthropic, OpenAI, Gemini, Bedrock and more, TTL keep-warm scheduling, prefix-drift detection, and hit-ratio and savings analytics. Zero dependencies, TypeScript, edge-ready. | 2 |
| [radosgw-admin](https://github.com/nycanshu/radosgw-admin) | nycanshu/radosgw-admin | Node.js SDK for the Ceph RADOS Gateway Admin Ops API — manage users, buckets, quotas and rate limits programmatically. Zero dependencies, TypeScript, dual ESM/CJS. | 13 |
| [railway-deploy](https://github.com/tunder007/railway-deploy) | tunder007/railway-deploy | Dry-run-by-default Railway deploys + secret scan | 0 |
| [rainbird-node](https://github.com/noelportugal/rainbird-node) | noelportugal/rainbird-node | Zero-dependency TypeScript client for Rain Bird irrigation controllers over the local LNK/LNK2 WiFi module. Promise-first, no cloud. | 0 |
| [randomcryp](https://github.com/touhidurrr/randomcryp) | touhidurrr/randomcryp | A cryptographically secure, feature rich, zero dependency, lightweight and browser friendly random number generator library. | 2 |
| [range-expand-cli](https://github.com/kszongic/range-expand-cli) | kszongic/range-expand-cli | Expand numeric ranges like 1-5,8,10-12 into individual numbers. Zero dependencies. | 0 |
| [rate-limit](https://github.com/oratis/rate-limit) | oratis/rate-limit | Zero-dependency in-memory sliding-window rate limiter for Node — tiny, typed, self-pruning. | 0 |
| [ratebucket](https://github.com/trananhtung/ratebucket) | trananhtung/ratebucket | Token-bucket rate limiter with fair FIFO waiting, weighted costs, and AbortSignal support. Zero dependencies. | 0 |
| [ratio-engine-ts](https://github.com/kiki007-lab/ratio-engine-ts) | kiki007-lab/ratio-engine-ts | Tiny zero-dependency TypeScript engine for category-pair ratio systems (loyalty tiers, swap platforms, multi-currency conversion). | 0 |
| [react-apple-signin-auth](https://github.com/a-tokyo/react-apple-signin-auth) | a-tokyo/react-apple-signin-auth |  Apple signin for React using the official Apple JS SDK | 138 |
| [react-canvas-force-graph](https://github.com/jasonpalmer1/react-canvas-force-graph) | jasonpalmer1/react-canvas-force-graph | Dependency-free force-directed graph as a single copy-paste React component — canvas-rendered, zero deps | 0 |
| [react-colorful](https://github.com/omgovich/react-colorful) | omgovich/react-colorful | 🎨 A tiny (2,8 KB) color picker component for React and Preact apps | 3,533 |
| [react-headless-carousel](https://github.com/daformat/react-headless-carousel) | daformat/react-headless-carousel | A react headless carousel component with zero-dependency: scrollable, and swipeable carousel, even on desktop, complete with snapping, friction, rubber-banding and overscroll. | 23 |
| [react-instastories](https://github.com/kenclaron/react-instastories) | kenclaron/react-instastories | The Next Generation of React Stories Library. | 14 |
| [react-nano-skeleton](https://github.com/UtkarshK95/react-nano-skeleton) | UtkarshK95/react-nano-skeleton | Ultra-minimal, lightweight skeleton loader for React with ready-to-use UI presets and zero dependencies. | 0 |
| [react-nano-skeleton-demo](https://github.com/UtkarshK95/react-nano-skeleton-demo) | UtkarshK95/react-nano-skeleton-demo | Demo app showcasing usage and real UI loading states for the react-nano-skeleton npm package. | 0 |
| [react-phone-number-input-pro](https://github.com/Saafirbhimani-154/react-phone-number-input-pro) | Saafirbhimani-154/react-phone-number-input-pro | A highly customizable React component for international phone number input with built-in country detection, strict validation, and zero runtime dependencies. | 1 |
| [react-registry](https://github.com/Kiyamov-Bulat/react-registry) | Kiyamov-Bulat/react-registry | A lightweight, fully typed React table component with per-column filtering and sorting — ready for admin panels and internal tools.  | 2 |
| [react-stagger-reveal](https://github.com/spotbo-inc/react-stagger-reveal) | spotbo-inc/react-stagger-reveal | Zero-dependency, SSR-safe scroll reveal animations for React. ~1.5KB gzipped. | 0 |
| [react-swipeable-cards](https://github.com/daformat/react-swipeable-cards) | daformat/react-swipeable-cards | A react headless swipeable cards carousel with zero-dependency, discard or send to back of the stack (without any clipping), looping or not. | 18 |
| [react-text-renderer-components](https://github.com/khatastroffik/react-text-renderer-components) | khatastroffik/react-text-renderer-components | a zero-dependencies component library providing (pure) text rendering for common and custom data/field types. | 1 |
| [ReactZero-DatePicker](https://github.com/motiondesignlv/ReactZero-DatePicker) | motiondesignlv/ReactZero-DatePicker | Zero-dependency, accessible React date & time picker. WCAG 2.1 AA, ~12 kB gzipped | 0 |
| [readlevel](https://github.com/didrod205/readlevel) | didrod205/readlevel | Measure how hard your writing is to read — Flesch, grade level, reading time, keyword density. Zero deps, 100% local. Web app + library. | 1 |
| [readme-doctor](https://github.com/chunjiegame-cpu/readme-doctor) | chunjiegame-cpu/readme-doctor | Maintainer-focused README audits for contributor onboarding and release readiness. | 1 |
| [reasonsplit](https://github.com/Ayubjon/reasonsplit) | Ayubjon/reasonsplit | Split reasoning-model output (DeepSeek R1, QwQ, thinking models) into chain-of-thought and final answer. Zero-dependency CLI + library. | 2 |
| [recall](https://github.com/tools-for-agents/recall) | tools-for-agents/recall | 🎯 Federated recall across an agent's knowledge — cortex, scout and lens — in one token-budgeted query. CLI + MCP. Zero deps. | 0 |
| [reddit-image-search](https://github.com/king-prawns/reddit-image-search) | king-prawns/reddit-image-search | Reddit Image Search example | 1 |
| [redline](https://github.com/rxNxkolai/redline) | rxNxkolai/redline | A zero-dependency linter for LLM prompts and agent-instruction files (CLAUDE.md, AGENTS.md, system prompts). Catches prompt-injection sinks, token bloat, weak directives, and unresolved placeholders. | 0 |
| [refusal-radar](https://github.com/Ayubjon/refusal-radar) | Ayubjon/refusal-radar | Zero-dependency detector and classifier for LLM refusals, deflections, and capability disclaimers — CLI + library with scoring, categories, JSONL batch, and a CI gate. | 1 |
| [regex-to-gbnf](https://github.com/Ayubjon/regex-to-gbnf) | Ayubjon/regex-to-gbnf | Convert a regular expression into a GBNF grammar for constrained decoding with llama.cpp and local LLMs. Zero dependencies. | 2 |
| [release-cinema](https://github.com/hunt3r157/release-cinema) | hunt3r157/release-cinema | Make your releases cinematic. Zero‑dep Node CLI + GitHub Action that renders a short trailer (GIF/MP4) summarizing a tag’s highlights and a CLI simulation of the release run. | 1 |
| [Reminist](https://github.com/AsterFlow/Reminist) | AsterFlow/Reminist | Blazing fast, zero-dependency, TypeScript-native router for any environment. | 0 |
| [repair-json-stream](https://github.com/prxtenses/repair-json-stream) | prxtenses/repair-json-stream |  | 12 |
| [repo-onboarding-map](https://github.com/chunjiegame-cpu/repo-onboarding-map) | chunjiegame-cpu/repo-onboarding-map | Generate practical onboarding maps for unfamiliar repositories. | 1 |
| [request](https://github.com/emresandikci/request) | emresandikci/request | Lightweight, fetch-based TypeScript HTTP client with zero dependencies composable adapters (retry, cache, dedupe), interceptors, lifecycle hooks, and strict types for both Browser and Node.js. | 1 |
| [respondix](https://github.com/mclrc/respondix) | mclrc/respondix | Tiny, zero-dependency, proxy-based reactivity library | 0 |
| [rest-domain-state-manager](https://github.com/2davi/rest-domain-state-manager) | 2davi/rest-domain-state-manager | Proxy-based REST state manager — auto-tracks field changes, smart-routes HTTP methods, and rolls back on failure. Zero dependencies. From JSP grids to React hooks. | 0 |
| [resume-lite](https://github.com/zbarnz/resume-lite) | zbarnz/resume-lite | Resume-Lite is a lightweight library designed for building and generating professional resumes in HTML format. With zero dependencies, it ensures minimal overhead and maximum simplicity. Systematically build resumes for quick application turnover and efficient job searching. | 1 |
| [resume-wall-breaker](https://github.com/ban10yuu/resume-wall-breaker) | ban10yuu/resume-wall-breaker | Generate ATS-friendly HTML and Markdown resumes from local JSON. No export paywall. | 0 |
| [retried](https://github.com/ioNihal/retried) | ioNihal/retried | A lightweight, zero-dependency retry utility for JavaScript & TypeScript. Exponential backoff, jitter, validation, and built-in logger. | 0 |
| [retrostrap](https://github.com/retrostrap/retrostrap) | retrostrap/retrostrap | Build like it's 2026, look like it's 1999. A CSS+JS framework for the era-authentic web: responsive, accessible, zero dependencies. | 0 |
| [retry-fn](https://github.com/sabahattink/retry-fn) | sabahattink/retry-fn | Retry any async function with exponential backoff. Zero dependencies. | 0 |
| [retry-ladder](https://github.com/VelkinaStudio/retry-ladder) | VelkinaStudio/retry-ladder | A tiny zero-dependency retry library that knows the difference between a rate limit, a timeout, and a bug, and only retries the ones worth retrying. | 0 |
| [retryx](https://github.com/sulthonzh/retryx) | sulthonzh/retryx | Zero-dep retry with exponential backoff, jitter strategies, and retry predicates | 0 |
| [rgb2hsl-cli](https://github.com/kszongic/rgb2hsl-cli) | kszongic/rgb2hsl-cli |  | 0 |
| [rivet](https://github.com/rxNxkolai/rivet) | rxNxkolai/rivet | Validate and repair the JSON that LLMs emit. Zero-dependency TypeScript: strips fences and prose, fixes trailing commas, smart quotes, comments, unquoted keys, and truncation, then parses and tells you what it fixed. Optional JSON Schema validation. | 0 |
| [rolloutkit-js](https://github.com/oktayhaktan0/rolloutkit-js) | oktayhaktan0/rolloutkit-js | RolloutKit is a dependency-free JavaScript feature flag engine with attribute targeting, deterministic percentage rollouts, kill switches, evaluation reasons and audit records. | 0 |
| [roman-calc-cli](https://github.com/kszongic/roman-calc-cli) | kszongic/roman-calc-cli | Arithmetic calculator using Roman numerals. | 0 |
| [roman2int-cli](https://github.com/kszongic/roman2int-cli) | kszongic/roman2int-cli | Convert Roman numerals to integers from the command line. | 0 |
| [rot13-reveal](https://github.com/marcel-breuer/rot13-reveal) | marcel-breuer/rot13-reveal | A zero-dependency, client-side ROT13 utility for obfuscating static content and revealing it on user interaction. | 0 |
| [rotn-cli](https://github.com/kszongic/rotn-cli) | kszongic/rotn-cli | Apply ROT-N rotation cipher to text from the terminal. Any shift, decode mode, stdin piping. Zero dependencies. | 0 |
| [rowset-diff](https://github.com/hojoongdev/rowset-diff) | hojoongdev/rowset-diff | Diff two sets of rows by key: added, removed, and field-level changed. Order-independent, composite keys, ignore volatile fields. Zero dependencies. | 1 |
| [Rowst](https://github.com/vyredo/Rowst) | vyredo/Rowst | Zero-dependency request-response correlation over WebSocket/WebRTC. Transport-agnostic RPC with retry, backpressure, and metrics. | 0 |
| [rt-accordion](https://github.com/Rethink-JS/rt-accordion) | Rethink-JS/rt-accordion | A lightweight, zero-dependency vanilla JavaScript utility for creating accessible, smooth, and fully responsive accordion components with attribute-driven configuration | 1 |
| [rt-accordion](https://github.com/Itzgkphotoshop/rt-accordion) | Itzgkphotoshop/rt-accordion | Build accessible, responsive JavaScript accordions with zero dependencies, simple setup, and support for multiple instances and attribute configuration. | 0 |
| [rtf-to-text](https://github.com/vinsonconsulting/rtf-to-text) | vinsonconsulting/rtf-to-text | Strip RTF down to clean plaintext. One function, zero dependencies, ESM + CJS + types. | 1 |
| [runpool](https://github.com/trananhtung/runpool) | trananhtung/runpool | Bounded-concurrency helpers for async tasks: a limiter plus order-preserving concurrent map (fail-fast or settled), with AbortSignal. Zero dependencies. | 0 |
| [saborter](https://github.com/TENSIILE/saborter) | TENSIILE/saborter | 🚀 🔥 A simple and efficient JavaScript/TypeScript library for canceling asynchronous requests using AbortController | 11 |
| [sadrazam](https://github.com/edukah/sadrazam) | edukah/sadrazam | Zero-dependency vanilla JavaScript UI component library — modals, tooltips, tabs, forms, and more. | 0 |
| [safe-json](https://github.com/sabahattink/safe-json) | sabahattink/safe-json | Safe JSON parse & stringify. Never throws. Zero dependencies. | 0 |
| [safeaccess-inline](https://github.com/felipesauer/safeaccess-inline) | felipesauer/safeaccess-inline | Dual-language library for safe nested data access with dot notation in PHP & TypeScript — JSON, YAML, XML, INI, ENV, NDJSON with built-in security, immutable writes, and cross-language parity. | 3 |
| [safeaccess-inline-js](https://github.com/felipesauer/safeaccess-inline-js) | felipesauer/safeaccess-inline-js | TypeScript/JavaScript library for safe nested data access with dot notation — JSON, YAML, XML, INI, ENV, NDJSON with built-in security validation, immutable writes, and a fluent builder API (ESM). | 3 |
| [safi-image](https://github.com/Abdulkader-Safi/safi-image) | Abdulkader-Safi/safi-image | Pure TypeScript image editing for Node and Bun. PNG, JPEG, WebP, GIF, BMP, TIFF. No native binaries. 23 KB core. | 1 |
| [sans-schema](https://github.com/funkjunky/sans-schema) | funkjunky/sans-schema | 🕸️ Schemaless Normalizer. No config needed to get started. Minimal config needed for all use cases. | 10 |
| [savenow](https://github.com/Chelebii/savenow) | Chelebii/savenow | OpenClaw + Telegram skill that saves durable conversation notes to a daily memory file, with semantic-dedupe preview/apply flow and inline Apply/Cancel buttons. | 1 |
| [scan-secrets](https://github.com/axiom-experiment/scan-secrets) | axiom-experiment/scan-secrets | Pure Node.js, zero-dependency CLI and library for scanning files for accidentally committed secrets, API keys, and credentials. Detects 25+ patterns including AWS, GitHub, Stripe, OpenAI, Slack, and more. | 0 |
| [sChart](https://github.com/facejiong/sChart) | facejiong/sChart | simple svg charts with zero dependencies | 10 |
| [scooter-rush-nanning](https://github.com/real-jiakai/scooter-rush-nanning) | real-jiakai/scooter-rush-nanning | 🛵 电驴风云·南宁 — a Road Rash-style pseudo-3D racer about Nanning's e-scooter army. Shield up, politely yeet traffic. Zero-dependency Canvas 2D, built with Claude Code. | 0 |
| [scout](https://github.com/tools-for-agents/scout) | tools-for-agents/scout | 🧭 The agent's web reader: fetch a URL as clean, cached, searchable markdown (~90% smaller than HTML). Pairs with cortex. CLI + MCP. Zero deps. | 0 |
| [screenshot-to-issue](https://github.com/chunjiegame-cpu/screenshot-to-issue) | chunjiegame-cpu/screenshot-to-issue | Maintainer-focused screenshot issue drafts for faster bug triage. | 1 |
| [scroll-parallax](https://github.com/ouvarov/scroll-parallax) | ouvarov/scroll-parallax | Scroll-driven animation for React in ~350 bytes. Pure CSS animation-timeline: view(). | 1 |
| [scroll-timeline-builder](https://github.com/css-scroll-driven/scroll-timeline-builder) | css-scroll-driven/scroll-timeline-builder | Visual builder for CSS scroll-driven animations — tune scroll()/view() timelines and ranges, preview live, export copy-paste CSS. Zero dependencies, no build step. | 0 |
| [scrubpii](https://github.com/didrod205/scrubpii) | didrod205/scrubpii | Find & redact PII and secrets (emails, Luhn-valid cards, JWTs, API keys, IBANs, SSNs, IPs) from JSON, logs & text — 100% local, deterministic, referential-integrity pseudonyms. CLI + zero-dep library. | 1 |
| [scrubpix](https://github.com/didrod205/scrubpix) | didrod205/scrubpix | See & remove hidden image metadata — EXIF, GPS, comments — losslessly and 100% locally. No re-encode, no upload. Web app + zero-dependency library. | 1 |
| [scrubtext](https://github.com/trananhtung/scrubtext) | trananhtung/scrubtext | Redact secrets and PII (emails, credit cards, API keys, JWTs, private keys…) from text — zero dependencies. | 1 |
| [sdbm-hash-cli](https://github.com/kszongic/sdbm-hash-cli) | kszongic/sdbm-hash-cli | SDBM hash function CLI. Hash strings from arguments or stdin. Zero dependencies. | 0 |
| [sdk](https://github.com/r2waredev/sdk) | r2waredev/sdk | Zero-dependency, data-attribute-driven JavaScript SDK for embedding r2ware forms, shop, e-signatures & sharing into any static site. | 0 |
| [search-summary](https://github.com/kyonenya/search-summary) | kyonenya/search-summary | Generate a summarized search result string. Zero dependency utils. | 0 |
| [seasonal-forecast](https://github.com/TourOperation/seasonal-forecast) | TourOperation/seasonal-forecast | Zero-dependency demand forecasting for seasonal businesses. Pure statistics, no ML, no cloud costs. | 1 |
| [sec2time-cli](https://github.com/kszongic/sec2time-cli) | kszongic/sec2time-cli |  | 0 |
| [secret-scan](https://github.com/ahmethasmerdogan/secret-scan) | ahmethasmerdogan/secret-scan | Zero-dependency CLI that scans your code for leaked secrets (API keys, tokens, private keys, committed .env) — with a clean, colorful terminal UI. | 0 |
| [securepixel-js](https://github.com/kdippan/securepixel-js) | kdippan/securepixel-js | Lightweight JavaScript SDK for client-side image steganography & AES-GCM encryption. Turn images into visual noise directly in the browser. Zero dependencies. | 0 |
| [security-roi-calculator](https://github.com/HailBytes/security-roi-calculator) | HailBytes/security-roi-calculator | Zero-dependency web component for calculating security awareness training ROI. Works in Hugo, React, Vue, or plain HTML. | 1 |
| [selfloop](https://github.com/ryanda9910/selfloop) | ryanda9910/selfloop | Zero-dependency self-improving loop harness: capture trajectories, reflect, adapt, persist. Pluggable memory + independent grader + fail-safe guards. Node & Cloudflare Workers; drops into Claude Code / Cursor / Windsurf. | 0 |
| [semola](https://github.com/leonardodipace/semola) | leonardodipace/semola | ⚡ Zero-dependency TypeScript utilities for modern Bun apps. Type-safe APIs, Redis queues, pub/sub, i18n, caching, auth policies and more | 7 |
| [semver-inc-cli](https://github.com/kszongic/semver-inc-cli) | kszongic/semver-inc-cli | Increment semantic version strings from the command line. | 0 |
| [Sentinel](https://github.com/georgekimaninjoroge/Sentinel) | georgekimaninjoroge/Sentinel | Zero-dependency browser JWT security. Vanilla JS + Web Crypto API. | 0 |
| [seq](https://github.com/njlr/seq) | njlr/seq | Useful functions for manipulating JavaScript generators ⛓️ | 6 |
| [seq-float-cli](https://github.com/kszongic/seq-float-cli) | kszongic/seq-float-cli |  | 0 |
| [seq-prime-cli](https://github.com/kszongic/seq-prime-cli) | kszongic/seq-prime-cli |  | 0 |
| [server](https://github.com/zenginlimited/server) | zenginlimited/server | A web-server tailored to Zengin services. | 0 |
| [seslen](https://github.com/productdevbook/seslen) | productdevbook/seslen | Zero-dep, tree-shakeable Web Audio library with synthesised UI presets, buses + ducking, polyphony cap, throttle, jitter, fades, pan, sprites, OfflineAudioContext render-to-WAV, AnalyserNode tap, prefers-reduced-motion + SSR-safe. Strict TypeScript. | 25 |
| [sha1sum-cli](https://github.com/kszongic/sha1sum-cli) | kszongic/sha1sum-cli | Calculate SHA-1 hashes from the terminal. Zero dependencies. | 0 |
| [sha384sum-cli](https://github.com/kszongic/sha384sum-cli) | kszongic/sha384sum-cli |  | 0 |
| [sha512sum-cli](https://github.com/kszongic/sha512sum-cli) | kszongic/sha512sum-cli |  | 0 |
| [shadowbuster](https://github.com/didrod205/shadowbuster) | didrod205/shadowbuster | That black redaction bar isn't redaction — it's a sticker. Drop a PDF, Excel, Word, PowerPoint or screenshot and recover what was hidden but never removed — 100% in your browser, nothing uploaded. Zero dependencies. | 3 |
| [shellrecap](https://github.com/didrod205/shellrecap) | didrod205/shellrecap | Spotify Wrapped for your terminal — a local, shareable recap of your zsh/bash/fish history. Top commands, typos, aliases you're owed (keystrokes saved), and secrets left in history (masked). No hooks, no upload, no API key. | 1 |
| [shielded](https://github.com/ekaone/shielded) | ekaone/shielded | TypeScript primitive that prevents sensitive state from leaking through logging, devtools, and serialization | 1 |
| [shippo-lite](https://github.com/jianhuaMr/shippo-lite) | jianhuaMr/shippo-lite | Tiny, zero-dependency, fully-typed Shippo client for Node & edge runtimes. Rates, labels, and tracking in three calls. | 1 |
| [shotpick](https://github.com/Ayubjon/shotpick) | Ayubjon/shotpick | Deterministic few-shot example selection for LLM prompts (TF-IDF/BM25/Jaccard + MMR diversity). Zero deps, no embedding API. | 0 |
| [shrinkurl](https://github.com/nadonghuang/shrinkurl) | nadonghuang/shrinkurl | 🔗 Zero-dependency URL shortener CLI tool with custom domains and analytics | 0 |
| [shufffle](https://github.com/responsedotok/shufffle) | responsedotok/shufffle | Dependency-free reverse proxy for Nodejs. | 0 |
| [sigiljs](https://github.com/antistructured/sigiljs) | antistructured/sigiljs | Executable data contracts for JavaScript runtime boundaries. | 2 |
| [sigmap-vscode](https://github.com/manojmallick/sigmap-vscode) | manojmallick/sigmap-vscode | SigMap AI context engine — VS Code extension. 96.9% token reduction, 80.0% retrieval hit@5, 29 languages. Works with Copilot, Claude, Cursor, Windsurf, Gemini. | 5 |
| [simple-builder](https://github.com/Acro/simple-builder) | Acro/simple-builder | Tiny SQL builder that keeps your SQL visible. A safe sql`` tagged template plus the classic ? partials API → { text, values } for pg, mysql & mysql2. Zero dependencies, TypeScript, CJS+ESM. | 7 |
| [simple-image-annotator](https://github.com/shibisuriya/simple-image-annotator) | shibisuriya/simple-image-annotator | Lightweight, zero-dependency image annotator | 1 |
| [simple-liquid-glass](https://github.com/lucaperullo/simple-liquid-glass) | lucaperullo/simple-liquid-glass | The only zero-dependency liquid glass component with real refraction on iPhone & Safari — not a blur fallback. React 16.8–19 + web-component. ~6.5KB. | 7 |
| [site-facts](https://github.com/ai9tui/site-facts) | ai9tui/site-facts | Fail the build when your site states a number it can no longer defend. Zero deps, one JSON file, any CI. | 0 |
| [site-to-ai-markdown](https://github.com/ban10yuu/site-to-ai-markdown) | ban10yuu/site-to-ai-markdown | Turn a URL or HTML file into clean Markdown and JSON for LLM workflows. No scraper account. | 0 |
| [situroom](https://github.com/nguyenminhduc9988/situroom) | nguyenminhduc9988/situroom | The zero-backend global situation room — live earthquakes, conflicts, hazards & markets on one static page. No server, no API keys, no paywall. Free local MCP server included. | 0 |
| [skalex](https://github.com/TarekRaafat/skalex) | TarekRaafat/skalex | AI-first, zero-dependency JavaScript database. Vector search, agent memory, MCP server, and encryption built in. Node.js, Bun, Deno, browsers, and edge runtimes. | 19 |
| [skyhawk](https://github.com/xGhst0/skyhawk) | xGhst0/skyhawk | Air-gapped, zero-dependency DFIR platform for blue teams. Capture findings, ingest host evidence, get copy-paste remediation, and produce signed incident reports, all offline on just Node.js. | 0 |
| [slack-status.ts](https://github.com/saehun/slack-status.ts) | saehun/slack-status.ts | A nodeJS package which can retrieve slack status via HTTP with zero dependency | 1 |
| [slarrow](https://github.com/siverson914/slarrow) | siverson914/slarrow | An overlay arrow that slithers across the page like a snake — morphing bezier shapes with car-like (Dubins) steering. Zero deps. | 0 |
| [sleep-until-cli](https://github.com/kszongic/sleep-until-cli) | kszongic/sleep-until-cli | Sleep until a specific wall-clock time. Zero dependencies, cross-platform. | 0 |
| [slidewright](https://github.com/feifeiqiu11-2025/slidewright) | feifeiqiu11-2025/slidewright | Agent skill for building stunning zero-dependency HTML presentations, with an inline-edit + comment/annotate review loop. Credits: zarazhangrui/beautiful-html-templates & kunchenguid/lavish-axi (both MIT). | 3 |
| [slight-ui](https://github.com/slight-ui/slight-ui) | slight-ui/slight-ui | Lightweight. Transparent dependencies. | 0 |
| [slop-lint](https://github.com/eric-sabe/slop-lint) | eric-sabe/slop-lint | Zero-dependency CLI that flags AI 'slop' in prose: fails on the em-dash, warns on LLM tells (words, cliches, smart quotes). Includes a corpus harness to discover new tells as models evolve. | 0 |
| [slopscore](https://github.com/Vinay-O/slopscore) | Vinay-O/slopscore | Scan your codebase for AI slop. Get a Slop Score. Ship clean. A zero-dependency CLI (85 detectors: security, performance, code-quality, design tells) + a 181-pattern Anti-Slop Protocol for AI coding agents. | 2 |
| [slug-gen](https://github.com/sabahattink/slug-gen) | sabahattink/slug-gen | URL-safe slug generator with Unicode support. Turkish, Arabic, Cyrillic. | 0 |
| [sma-cli](https://github.com/kszongic/sma-cli) | kszongic/sma-cli | Simple moving average calculator CLI. Pipe numbers in, get SMA out. Zero deps. | 0 |
| [smart-copy](https://github.com/tsvirov/smart-copy) | tsvirov/smart-copy | Copy HTML tables and div-grid layouts as clean Markdown + semantic HTML instead of flat, unreadable text. | 0 |
| [snake2title-cli](https://github.com/kszongic/snake2title-cli) | kszongic/snake2title-cli | Convert snake_case strings to Title Case from the terminal. Zero dependencies. | 0 |
| [softeneers-tools](https://github.com/tunder007/softeneers-tools) | tunder007/softeneers-tools | One CLI front door to the 13 Softeneers tools | 0 |
| [sosisci-sefa](https://github.com/atakanakis/sosisci-sefa) | atakanakis/sosisci-sefa | 🌭 Hot Dog Bush'un Türkçe tam versiyonu — İstanbul'da sosisli arabası simülasyonu (Canvas, drag-drop, modern pastel UI) | 0 |
| [spa](https://github.com/gkong/spa) | gkong/spa | zero-dependency front end components for single-page-apps / SPA / progressive web apps / PWA | 1 |
| [sparke](https://github.com/benshawuk/sparke) | benshawuk/sparke | Make a multi-page website feel like an instant SPA. A tiny zero-dependency progressive-enhancement script that preloads links and atomically swaps pages from memory. | 0 |
| [sparkline](https://github.com/danjohnson95/sparkline) | danjohnson95/sparkline | A zero-dependency native web component for showing trends 📈 | 0 |
| [sparkline](https://github.com/coroboros/sparkline) | coroboros/sparkline | Lightweight, zero-dependency SVG sparkline generator for Node.js. | 0 |
| [special-token-guard](https://github.com/Ayubjon/special-token-guard) | Ayubjon/special-token-guard | Detect and neutralize LLM chat-template special tokens (ChatML, Llama, Mistral, Gemma, Qwen, DeepSeek, Command-R) in untrusted text — zero-dependency CLI + library and CI gate against Special Token Injection. | 1 |
| [spellnum](https://github.com/didrod205/spellnum) | didrod205/spellnum | Convert numbers & money amounts to words — English & Korean (만/억/조). For invoices, cheques, contracts. Exact (BigInt), zero deps. Web app + library. | 1 |
| [spindle](https://github.com/tegos/spindle) | tegos/spindle | 360° frame-sequence spinner (object + aerial orbit). Vanilla TypeScript, zero deps. | 1 |
| [split-json-cli](https://github.com/kszongic/split-json-cli) | kszongic/split-json-cli | Split large JSON arrays into smaller files. CLI tool. Zero dependencies. | 0 |
| [spoken-token](https://github.com/forgesworn/spoken-token) | forgesworn/spoken-token | TOTP but you say it out loud. Derive time-rotating, human-speakable verification tokens from a shared secret. | 0 |
| [springtype](https://github.com/springtype-org/springtype) | springtype-org/springtype | ~1k TypeScript/TSX nano-framework for the web | 20 |
| [sqlrite](https://github.com/possumtech/sqlrite) | possumtech/sqlrite | SQL Done Right — SQL-first, zero-dependency persistence over node:sqlite | 2 |
| [srcset-parse](https://github.com/molefrog/srcset-parse) | molefrog/srcset-parse | 🏙  Extra tiny `srcset` attribute parser ~150B | 16 |
| [srpc](https://github.com/yzITI/srpc) | yzITI/srpc | Simplest Server-Client Communication for both JavaScript and Python! | 50 |
| [srvs](https://github.com/okwolf/srvs) | okwolf/srvs | zero dependency dev server | 26 |
| [sse-lens](https://github.com/Ayubjon/sse-lens) | Ayubjon/sse-lens | Decode, reconstruct & validate captured OpenAI / Anthropic streaming (SSE) responses. Zero deps, CLI + library. | 2 |
| [ssg-doctor](https://github.com/ssg-production/ssg-doctor) | ssg-production/ssg-doctor | Grades any static-site build (Astro, Hugo, Eleventy, Jekyll, Next, Nuxt, Gatsby) for production readiness — broken links, missing meta, mixed content, CLS-risk images, dead anchors, oversized bundles. Zero-dep CLI + GitHub Action, JSON/Markdown/SARIF output. | 0 |
| [stackable-bar-chart](https://github.com/chiangs/stackable-bar-chart) | chiangs/stackable-bar-chart | Stackable bar chart for better storytelling with data. | 2 |
| [stacklyn](https://github.com/stacklynjs/stacklyn) | stacklynjs/stacklyn | Stacklyn is a zero-dependency, cross-engine, JavaScript stack trace parser. | 3 |
| [starling](https://github.com/Bluebook722/starling) | Bluebook722/starling | Decentralized, offline-first mesh messaging. Zero infrastructure, end-to-end signed, store-and-forward. Stay connected when the network goes dark. | 1 |
| [statelet](https://github.com/lasitosPT/statelet) | lasitosPT/statelet | A tiny, fully-typed, zero-dependency finite state machine for TypeScript. | 0 |
| [staticshield](https://github.com/wangshengithub/staticshield) | wangshengithub/staticshield | 一款安全又便捷的网页加密工具。采用 AES-256 + PBKDF2 百万次迭代 + HMAC 验签，密码与解密全程留在浏览器本地；一条命令或图形界面即可把 HTML（乃至整站 css/js/图片）加密成自解密页面，部署到任意静态托管。Secure, effortless HTML encryption: AES-256, PBKDF2 (1M iterations), HMAC, with fully client-side decryption. Encrypt an entire site (CSS/JS/images) into a self-decrypting file via one command or GUI—deploy anywhere static. | 2 |
| [steam-workshop-ts](https://github.com/K4ryuu/steam-workshop-ts) | K4ryuu/steam-workshop-ts | Zero-dependency TypeScript client for the Steam Workshop Web API and SteamCMD. Query, search, download and cache workshop items on Node.js and Bun, with a CLI. | 1 |
| [stencil](https://github.com/rxNxkolai/stencil) | rxNxkolai/stencil | A zero-dependency, injection-safe template renderer for LLM prompts. Interpolate untrusted data without opening a prompt-injection hole, and lint templates for unsafe interpolation. | 0 |
| [storage](https://github.com/zero-dependency/storage) | zero-dependency/storage | 📒 Web storages wrapper | 1 |
| [streamjson](https://github.com/Atomics-hub/streamjson) | Atomics-hub/streamjson | O(1) streaming JSON parser for the AI era. Zero dependencies. ~4KB gzipped. | 0 |
| [string-builder](https://github.com/halil/string-builder) | halil/string-builder | Fast, zero-dependency string builder for Node.js — ESM, CommonJS & TypeScript support. Format specifiers, method chaining, prepend, replace, appendJoin and more. | 10 |
| [string-entropy-cli](https://github.com/kszongic/string-entropy-cli) | kszongic/string-entropy-cli | Calculate Shannon entropy of strings from the command line. Measure randomness and password strength. Zero deps. | 0 |
| [strip-trailing-ws-cli](https://github.com/kszongic/strip-trailing-ws-cli) | kszongic/strip-trailing-ws-cli |  | 0 |
| [strip-undefined-values](https://github.com/tomahg/strip-undefined-values) | tomahg/strip-undefined-values | Remove undefined values from objects. Fully typed. Zero dependencies. | 0 |
| [sulfa](https://github.com/anafro-incubator/sulfa) | anafro-incubator/sulfa | ❄ Wanna particles with physics? Piece of cake! Sulfa is a lightweight library for particle generation at coordinates with gravity, and wind! | 1 |
| [sumak](https://github.com/productdevbook/sumak) | productdevbook/sumak | Type-safe SQL query builder. Zero dependencies, AST-first, hookable, tree-shakeable. Pure TypeScript. | 126 |
| [superbstring](https://github.com/sharjeelfaiq/superbstring) | sharjeelfaiq/superbstring | Zero-dependency JavaScript/TypeScript string utilities for text cleanup, slugify, Base64, formatting, and transforms. | 2 |
| [supply-chain-scan](https://github.com/Flo5k5/supply-chain-scan) | Flo5k5/supply-chain-scan | A 5-second morning supply-chain safety check for npm/PyPI/Docker/Go/Rust: known-malicious packages, CVEs, zero-hour deps, release-cooldown & digest pinning, plus build-manifest and AI-agent-config auto-exec checks (Shai-Hulud/Miasma). Zero-dependency CLI + Claude Code plugin. | 2 |
| [Supports.js](https://github.com/metacurb/Supports.js) | metacurb/Supports.js | ⚡ A fast, simple, lightweight and dependency-free feature-detection library | 1 |
| [svelte-adapter-bun](https://github.com/fasticketid/svelte-adapter-bun) | fasticketid/svelte-adapter-bun | SvelteKit adapter for Bun. Bun.serve(), zero runtime dependencies, copy-paste into your project. Not on npm — by design. | 4 |
| [svelte-idb](https://github.com/Michael-Obele/svelte-idb) | Michael-Obele/svelte-idb | Zero-dependency, SSR-safe, Svelte 5 runes-native IndexedDB wrapper, an alternative to Dexie.js | 4 |
| [SwiftUI-For-Web](https://github.com/ShawnBaek/SwiftUI-For-Web) | ShawnBaek/SwiftUI-For-Web | SwiftUI's declarative API for the browser — 84 components, zero dependencies, no build step required | 1 |
| [sync-sha256](https://github.com/xlsft/sync-sha256) | xlsft/sync-sha256 | Zero-dependency synchronous SHA-256 for TypeScript | 0 |
| [tab-bridge](https://github.com/serbi2012/tab-bridge) | serbi2012/tab-bridge | Zero-dependency cross-tab state sync, leader election & RPC for browser tabs | 0 |
| [TabJS](https://github.com/buildwithdarsh/TabJS) | buildwithdarsh/TabJS | Cross-tab communication for the modern web — shared state, presence, leader election, locks, duplicate detection, and request/response. Typed, framework-agnostic, zero dependencies. | 0 |
| [table-ui](https://github.com/IbraheemAlz/table-ui) | IbraheemAlz/table-ui | A lightweight, headless Data Table for React. Features RTL support, column pinning, multi-selection, and a zero-dependency architecture. Built with Tailwind CSS & TypeScript. | 0 |
| [tablecrafter.js](https://github.com/TableCrafter/tablecrafter.js) | TableCrafter/tablecrafter.js | Zero-dependency JavaScript data table: inline editing, advanced filters, formula columns, mobile card view. Companion to the TableCrafter WordPress plugin. | 0 |
| [tabulate-cli](https://github.com/kszongic/tabulate-cli) | kszongic/tabulate-cli | Format stdin as aligned ASCII tables. Pipe-friendly. Zero dependencies. | 0 |
| [tailscale-sdk](https://github.com/RyanMoreau/tailscale-sdk) | RyanMoreau/tailscale-sdk | Zero-dependency TypeScript SDK for the Tailscale API v2. Supports API key and OAuth auth, retries, and webhook verification. React dashboard included to demonstrate how to set it up and utilize hooks. | 0 |
| [talk_bot](https://github.com/inklingconsulting/talk_bot) | inklingconsulting/talk_bot | Learns to write emails, posts, and replies in your own voice - a local, zero-dependency assistant that improves every time you edit a draft. | 0 |
| [tally](https://github.com/rxNxkolai/tally) | rxNxkolai/tally | A zero-dependency, offline token, cost, and context-budget analyzer for prompts and agent files. Estimates tokens, dollar cost across models, and where your context budget goes, per markdown section. | 0 |
| [tape-six](https://github.com/uhop/tape-six) | uhop/tape-six | TAP-inspired unit test library for Node, Deno, Bun, and browsers. ES modules, TypeScript, zero dependencies. | 2 |
| [tape-six-invariant](https://github.com/uhop/tape-six-invariant) | uhop/tape-six-invariant | Zero-dependency invariant checks that materialize into real tape-six assertions under test, and stay inert (or configurable) in production. | 1 |
| [tapzero](https://github.com/socketsupply/tapzero) | socketsupply/tapzero | Zero dependency test framework | 35 |
| [telebunny](https://github.com/denostapman/telebunny) | denostapman/telebunny | Lightweight zero-dependency Node.js module for Telegram Bot API | 3 |
| [telegram-bot-skill](https://github.com/hec-ovi/telegram-bot-skill) | hec-ovi/telegram-bot-skill | Expose any local CLI coding agent (Claude Code, opencode, Codex, Gemini) as a Telegram bot, or chat with your live session via MCP over stdio or Streamable HTTP (pull tools or Claude Code channels push). Zero-dependency Node 24 core, deterministic access gate with tiers, QR onboarding. | 1 |
| [teleprompter](https://github.com/mhashim6/teleprompter) | mhashim6/teleprompter | Teleprompter that paces and highlights your script word by word, with pause beats, dual themes, and per-deck memory. With agent authoring skill | 1 |
| [Telesense](https://github.com/EbParsa/Telesense) | EbParsa/Telesense | Behavioural Telemetry SDK | 4 |
| [terlik.js](https://github.com/badursun/terlik.js) | badursun/terlik.js | Ultra-fast multi-language profanity filter, designed Turkish-first and extensible to any language. Catches leet speak, agglutination & evasion patterns. Zero deps, TypeScript, 35 KB. | 49 |
| [termalytics](https://github.com/wenn-id/termalytics) | wenn-id/termalytics | Zero-dependency TypeScript terminal charts, dashboards, and dataviz CLI | 0 |
| [termpet](https://github.com/nadonghuang/termpet) | nadonghuang/termpet | 🐾 Terminal virtual pet — your Tamagotchi lives in the CLI. Feed, play, and care for your ASCII companion. Zero dependencies. | 0 |
| [terrario](https://github.com/terrario-js/terrario) | terrario-js/terrario | A refined, expressive parser combinator library. | 33 |
| [testgenx](https://github.com/denex-a-poulose/testgenx) | denex-a-poulose/testgenx | testgenx is the developer‑friendly way to create realistic, deterministic mock data at scale. Define the shape of your payload once—generate one record or a million with the same call. | 0 |
| [text-hash-cli](https://github.com/kszongic/text-hash-cli) | kszongic/text-hash-cli |  | 0 |
| [tg-rich-messages](https://github.com/vdistortion/tg-rich-messages) | vdistortion/tg-rich-messages | Platform-independent TypeScript builder for Telegram Rich Messages (HTML mode). Zero dependencies, fully typed, tree-shakeable. Generates valid Telegram HTML for sendRichMessage API. Supports all inline and block elements, media, tables, lists, and more. | 4 |
| [the-finger](https://github.com/nordskill/the-finger) | nordskill/the-finger | Simple JS library for touch gestures detection and recognition. | 7 |
| [theway](https://github.com/jojobyte/theway) | jojobyte/theway | A tiny (zero dependency) isomorphic router for browsers & servers. | 2 |
| [throttleguard-api](https://github.com/oktayhaktan0/throttleguard-api) | oktayhaktan0/throttleguard-api | ThrottleGuard is a dependency-free JavaScript API gateway with token-bucket rate limiting, per-client quotas, standard rate headers, optional upstream proxying and Docker support. | 0 |
| [ti18n](https://github.com/zealsprince/ti18n) | zealsprince/ti18n | Tiny dependency-less i18n implementation | 0 |
| [Tiktik](https://github.com/ianpurif/Tiktik) | ianpurif/Tiktik | TiktikToast: Lightweight, zero-dependency, Dynamic Island–style toast notification library for web apps. SSR-safe, accessible, and around 5KB gzipped. Perfect for React, Next.js, and Vanilla JS developers. | 1 |
| [time-cmd-cli](https://github.com/kszongic/time-cmd-cli) | kszongic/time-cmd-cli |  | 0 |
| [time2sec-cli](https://github.com/kszongic/time2sec-cli) | kszongic/time2sec-cli |  | 0 |
| [timeclock-rounding](https://github.com/x1ee7/timeclock-rounding) | x1ee7/timeclock-rounding | Zero-dependency time-clock punch rounding: round minutes to the nearest quarter-hour / tenth-of-hour increment. The 7-minute rule every payroll system needs. | 1 |
| [timefence](https://github.com/trananhtung/timefence) | trananhtung/timefence | Put a time limit on any promise, with real AbortSignal cancellation and a composable deadline signal. Zero dependencies. | 0 |
| [tiny-future](https://github.com/JiangJie/tiny-future) | JiangJie/tiny-future | A zero-dependency Future/Promise wrapper to resolve or reject a Promise outside its executor. | 5 |
| [tiny-jest](https://github.com/ValeriaVG/tiny-jest) | ValeriaVG/tiny-jest | Minimalistic zero dependency Jest-like test library to run tests in browser, nodejs or deno | 15 |
| [tiny-result](https://github.com/meeghele/tiny-result) | meeghele/tiny-result | A minimal, type-safe Result pattern for TypeScript | 1 |
| [tinyDrawer.js](https://github.com/jenstornell/tinyDrawer.js) | jenstornell/tinyDrawer.js | Really small mobile menu navigation sliding in from the left | 15 |
| [tinyfsm](https://github.com/tahaghafuri/tinyfsm) | tahaghafuri/tinyfsm | ⚡ A tiny (706B) zero-dependency finite state machine for JavaScript & TypeScript | 0 |
| [tinyRatings.js](https://github.com/jenstornell/tinyRatings.js) | jenstornell/tinyRatings.js | Really small rating star element with zero dependencies. | 0 |
| [tipo-cambio-peru](https://github.com/Edsoncame/tipo-cambio-peru) | Edsoncame/tipo-cambio-peru | Tipo de cambio oficial del Perú: BCRP, SBS, SUNAT en una sola llamada. TS+ESM, MIT. Mantenido por Securex (https://securex.pe). | 1 |
| [titef](https://github.com/shikaan/titef) | shikaan/titef | 🌠 A tiny, lightning-fast, zero-dependecies JavaScript test framework 🌠 | 18 |
| [title2camel-cli](https://github.com/kszongic/title2camel-cli) | kszongic/title2camel-cli | Convert Title Case strings to camelCase from the terminal. Zero dependencies. | 0 |
| [title2kebab-cli](https://github.com/kszongic/title2kebab-cli) | kszongic/title2kebab-cli | Convert Title Case strings to kebab-case from the terminal. Zero dependencies. | 0 |
| [title2snake-cli](https://github.com/kszongic/title2snake-cli) | kszongic/title2snake-cli | Convert Title Case strings to snake_case from the terminal. Zero dependencies. | 0 |
| [tls-inspect](https://github.com/ahmethasmerdogan/tls-inspect) | ahmethasmerdogan/tls-inspect | Inspect a host's TLS certificate and connection — protocol, cipher, expiry, SAN, and chain — with problems flagged. Zero-dependency Node CLI. | 0 |
| [to-do_app](https://github.com/Rudxain/to-do_app) | Rudxain/to-do_app | DOM learning project. Inspired by https://youtu.be/DEbNCqe2e2U | 0 |
| [todo-board](https://github.com/kushasahu7/todo-board) | kushasahu7/todo-board | A zero-dependency, read-only EPIC/status board for a Markdown TODO file. Point it at any TODO.md. | 0 |
| [token-diet](https://github.com/KasperChenGH/token-diet) | KasperChenGH/token-diet | Measure, diagnose, and cut LLM token usage in Claude Code agentic workflows — an 8-lever agent + zero-dependency CLI. | 1 |
| [tokenfit](https://github.com/trananhtung/tokenfit) | trananhtung/tokenfit | Fit text into LLM token budgets — estimate, trim, and pack prompts with zero dependencies. | 1 |
| [tool](https://github.com/axiestudio/tool) | axiestudio/tool | 50 zero-dependency fetch wrappers that replace MCP servers for AI agent workflows | 1 |
| [tool-use-guardian](https://github.com/christopherlhammer11-ai/tool-use-guardian) | christopherlhammer11-ai/tool-use-guardian | Reliability wrapper for AI tool calls with retries, timeouts, JSON repair, and failure metadata | 3 |
| [tools-for-agents.github.io](https://github.com/tools-for-agents/tools-for-agents.github.io) | tools-for-agents/tools-for-agents.github.io | Landing page for tools-for-agents — an operating system for agents | 0 |
| [totp](https://github.com/distrentic/totp) | distrentic/totp | zero dependency time-based one-time password provider based on rfc6238 | 4 |
| [totp](https://github.com/hongtak/totp) | hongtak/totp | A lightweight, zero-dependency Node.js library for generating and verifying Time-Based One-Time Passwords (TOTP) and HMAC-Based One-Time Passwords (HOTP), compliant with RFC 6238 and RFC 4226. | 1 |
| [totp](https://github.com/ahmethasmerdogan/totp) | ahmethasmerdogan/totp | Zero-dependency CLI authenticator for Node.js — generate & verify RFC 6238 TOTP and RFC 4226 HOTP codes, built only on the standard crypto module. | 0 |
| [tower-defense-skill](https://github.com/mars-tw/tower-defense-skill) | mars-tw/tower-defense-skill | 純原生（零依賴）Canvas 2D 無盡塔防遊戲的 Claude Code Skill：守護女神核心、多種砲塔升級、元素克制、Boss 波次，整合 Grok 生成美術。 | 2 |
| [traefikjam](https://github.com/jojobyte/traefikjam) | jojobyte/traefikjam | A tiny (zero dependency) Node.js CLI utility to convert Traefik Let's Encrypt certificates from acme.json to PEM files | 9 |
| [tribunal](https://github.com/davccavalcante/tribunal) | davccavalcante/tribunal | Governed verification and synthesis for Massive Intelligence (IM) outputs: configurable Thinker, Worker, and Verifier panels, model-as-judge, and Ed25519-signed, SHA-256-chained tamper-evident verdicts. Zero dependencies, node-free core, TypeScript-first. | 1 |
| [trkit](https://github.com/berkayyalcin7/trkit) | berkayyalcin7/trkit | Zero-dependency Turkish utility kit: TCKN/VKN/IBAN/phone validation, KVKK masking, Turkish-locale strings, number-to-words, KDV math. TypeScript-first, tree-shakeable, 100% tested. | 0 |
| [tron-cold-wallet-online](https://github.com/ivanrmnvch/tron-cold-wallet-online) | ivanrmnvch/tron-cold-wallet-online | TRON USDT cold wallet — online companion. Zero external dependencies (Node.js built-ins only). | 0 |
| [truncate-lines-cli](https://github.com/kszongic/truncate-lines-cli) | kszongic/truncate-lines-cli |  | 0 |
| [truss](https://github.com/KornLabs/truss) | KornLabs/truss | AI Subscription first - no API Key. A light weight, file-based, dependency-free workspace structure for AI agents. | 2 |
| [Trustless-ID](https://github.com/NeaByteLab/Trustless-ID) | NeaByteLab/Trustless-ID | Time-bound anonymous ID: request, decode, verify. No server. | 0 |
| [truthenv](https://github.com/AstroQuantumphysicist/truthenv) | AstroQuantumphysicist/truthenv | Tiny zero-dependency helper for safely reading boolean environment flags in Node.js | 1 |
| [ts-barcodes](https://github.com/ashaffah/ts-barcodes) | ashaffah/ts-barcodes | Zero-dependency TypeScript library for generating 17 barcode & QR symbologies. | 2 |
| [ts-erasable](https://github.com/AdametherzLab/ts-erasable) | AdametherzLab/ts-erasable | Zero-dependency checker for TypeScript erasable syntax compliance. | 0 |
| [ts-essentials-functions](https://github.com/maxgfr/ts-essentials-functions) | maxgfr/ts-essentials-functions | A set of essentials functions in typescript with zero-dependencies | 1 |
| [ts-loggly-bulk](https://github.com/nick-w-nick/ts-loggly-bulk) | nick-w-nick/ts-loggly-bulk | A zero-dependency TypeScript client implementation for Loggly meant to be a drop-in replacement for node-loggly-bulk | 0 |
| [ts-memoize-ttl](https://github.com/ava-avant-iconic/ts-memoize-ttl) | ava-avant-iconic/ts-memoize-ttl | Type-safe memoization with TTL, LRU eviction, cache stats, and stale-while-revalidate for TypeScript. Zero dependencies, strict mode. | 0 |
| [ts-nano-event](https://github.com/ofershap/ts-nano-event) | ofershap/ts-nano-event | Typed event emitter in &lt;200 bytes | 0 |
| [ts-result](https://github.com/ofershap/ts-result) | ofershap/ts-result | Rust-style Result&lt;T, E&gt; for TypeScript - type-safe error handling without try/catch | 0 |
| [ts-retry-backoff](https://github.com/variablesoftware/ts-retry-backoff) | variablesoftware/ts-retry-backoff | 🎛️🔁🚀 A tiny, zero‑dependencies retry helper with exponential backoff + jitter—usable for KV, HTTP, Durable Objects, or any async function. | 2 |
| [tsreport-sdk](https://github.com/pontasan/tsreport-sdk) | pontasan/tsreport-sdk | Zero-dependency TypeScript client for the tsreport print API (OAuth 2.0 client credentials, print job submission, status polling, PDF download) with a preview endpoint helper and browser connector | 0 |
| [turing-machine-js](https://github.com/mellonis/turing-machine-js) | mellonis/turing-machine-js | Composable multi-tape Turing-machine engine for JS/TS — callable subroutines, Mermaid round-trip diagrams, DevTools-style step debugger, zero dependencies | 4 |
| [turingconnect](https://github.com/DaveLee-fun/turingconnect) | DaveLee-fun/turingconnect | Zero-dependency Chrome control for coding agents like Codex CLI — drive your real, logged-in Chrome over raw CDP for fully automated browser work. | 0 |
| [tutorial-screen](https://github.com/tearim/tutorial-screen) | tearim/tutorial-screen | A lightweight, zero-dependency JavaScript library for creating interactive, step-by-step product tours. You can add themes and implement hooks! | 1 |
| [twallpaper](https://github.com/crashmax-dev/twallpaper) | crashmax-dev/twallpaper | 🌈 Multicolor gradient wallpaper created algorithmically and shimmers smoothly. | 110 |
| [tweakpane](https://github.com/cocopon/tweakpane) | cocopon/tweakpane | :control_knobs: Compact GUI for fine-tuning parameters and monitoring value changes | 4,554 |
| [Two-Go](https://github.com/two-go-testing/Two-Go) | two-go-testing/Two-Go | Zero-dependency fluent API and service testing for Node.js: chainable HTTP, rich assertions, soft assertions, polling, snapshots, sessions, faker and a utility belt, plus an optional AI layer (test generation, failure explanation, bug review and fuzzing) and an MCP server so agents can drive it. | 3 |
| [type-fetch](https://github.com/JamalLyons/type-fetch) | JamalLyons/type-fetch | A lightweight, zero-dependency HTTP client library for making type-safe API requests in JavaScript/TypeScript. | 5 |
| [typed-env-safe](https://github.com/itsahmadawais/typed-env-safe) | itsahmadawais/typed-env-safe | A zero-dependency, TypeScript-first utility to safely define, validate, and type environment variables. | 2 |
| [typed-event](https://github.com/quitam/typed-event) | quitam/typed-event | TypeScript-first EventEmitter with full type inference. Zero dependencies, &lt; 1KB gzipped. | 1 |
| [TypeForge-ts](https://github.com/Avinashvelu03/TypeForge-ts) | Avinashvelu03/TypeForge-ts | A blazing-fast, zero-dependency TypeScript utility toolkit — the modern lodash replacement. | 0 |
| [typemit](https://github.com/trananhtung/typemit) | trananhtung/typemit | Tiny, fully type-safe event emitter with a wildcard listener and a promise-based waitFor. Zero dependencies. | 0 |
| [typescript-zombie-attack](https://github.com/David-Else/typescript-zombie-attack) | David-Else/typescript-zombie-attack | Arcade quality thrilling game written in TypeScript with zero dependencies using custom game engine | 1 |
| [tyrell](https://github.com/gersak/tyrell) | gersak/tyrell | Clojurescript WebComponents library | 29 |
| [tz-convert-cli](https://github.com/kszongic/tz-convert-cli) | kszongic/tz-convert-cli |  | 0 |
| [ua-sortable](https://github.com/urbanstudioGmbH/ua-sortable) | urbanstudioGmbH/ua-sortable | `UA_Sortable` makes any list or grid container sortable by drag-and-drop using native Pointer Events. Works with mouse, touch, and stylus — no special handling needed. | 0 |
| [ubl-sdk](https://github.com/dlbr/ubl-sdk) | dlbr/ubl-sdk | Edge-native, zero-dependency JSON-to-UBL 2.1 XML generator fully compliant with the Serbian SEF (Sistem E-Faktura) technical specifications. | 0 |
| [UI.Js](https://github.com/Louistwee/UI.Js) | Louistwee/UI.Js | Don't load unnecessary Js files! | 1 |
| [ultraenv](https://github.com/Avinashvelu03/ultraenv) | Avinashvelu03/ultraenv | The ultimate zero-dependency environment manager. ultraenv bundles strict type-safe validation, encrypted Git-safe vaults, and built-in secret leak detection into one powerful suite. Easily sync environments, auto-generate TypeScript definitions, and never deploy a broken config again. | 0 |
| [ultralab-scanners](https://github.com/ppcvote/ultralab-scanners) | ppcvote/ultralab-scanners | Zero-dependency TypeScript scanners for SEO, AEO, and AI Visibility Score (AVS). Powers UltraProbe. No API calls, no LLM costs, &lt; 50ms. | 0 |
| [uModal](https://github.com/sean0x42/uModal) | sean0x42/uModal | The skeleton of a modal management tool. Abandoned for now. Perhaps another day. | 0 |
| [unblind](https://github.com/Santazuki/unblind) | Santazuki/unblind | A vision backend for AI Agents — self-healing Claude Code Agent Skill. Routes images to Mimo/OpenAI/Ollama vision API. | 23 |
| [unemail](https://github.com/productdevbook/unemail) | productdevbook/unemail | One unified email API across 18 providers (SMTP, Resend, SES, Postmark, SendGrid, Mailgun, …). Zero deps, RFC 8058 + DKIM ready, edge-first, strict TypeScript. | 234 |
| [unicode-name-cli](https://github.com/kszongic/unicode-name-cli) | kszongic/unicode-name-cli |  | 0 |
| [unspook](https://github.com/didrod205/unspook) | didrod205/unspook | Reveal & remove invisible, dangerous & confusable characters in your text — zero-width spaces, BOMs, bidi (Trojan Source), homoglyphs, smart quotes. 100% local. Web app + library + CLI. | 1 |
| [uri](https://github.com/coroboros/uri) | coroboros/uri | RFC-3986 URI toolkit for Node.js. IDN (RFC-3987), IPv6 zone identifiers (RFC 6874), Sitemap protocol. Zero dependencies. | 15 |
| [url](https://github.com/nberlette/url) | nberlette/url | Ponyfills for URL and URLSearchParams from the WHATWG URL Standard. | 1 |
| [url-status-cli](https://github.com/kszongic/url-status-cli) | kszongic/url-status-cli |  | 0 |
| [use-stepper](https://github.com/ofershap/use-stepper) | ofershap/use-stepper | Tiny React hook for multi-step forms and wizards. Headless, type-safe, zero dependencies. | 0 |
| [utilist](https://github.com/davguij/utilist) | davguij/utilist | A modern utility library for JavaScript and TypeScript. | 2 |
| [Utils-Core](https://github.com/NeaByteLab/Utils-Core) | NeaByteLab/Utils-Core | Zero-dependency utilities for modern development across all runtimes. | 1 |
| [uuid-gen-cli](https://github.com/kszongic/uuid-gen-cli) | kszongic/uuid-gen-cli | Generate UUIDs (v1, v4, v7) from the command line. Zero dependencies. | 0 |
| [uuid-info-cli](https://github.com/kszongic/uuid-info-cli) | kszongic/uuid-info-cli |  | 0 |
| [uuid-v3-cli](https://github.com/kszongic/uuid-v3-cli) | kszongic/uuid-v3-cli | Generate UUID v3 (MD5 namespace) from the command line. | 0 |
| [uuid-v5-cli](https://github.com/kszongic/uuid-v5-cli) | kszongic/uuid-v5-cli | Generate UUID v5 (SHA-1 namespace) from the command line. | 0 |
| [valicore](https://github.com/Avinashvelu03/valicore) | Avinashvelu03/valicore | Blazing-fast, zero-dependency, TypeScript-first schema validation with deep type inference, async support, and a complete validator suite. | 0 |
| [vally](https://github.com/on3iro/vally) | on3iro/vally | Zero-dependency ES6 form field validation library | 6 |
| [vanilla-back-to-top](https://github.com/vfeskov/vanilla-back-to-top) | vfeskov/vanilla-back-to-top | Simple and smooth Back To Top button | 271 |
| [vanilla-tabs](https://github.com/sagirk/vanilla-tabs) | sagirk/vanilla-tabs | A zero-dependency, vanilla JavaScript, URI fragment-driven tabbing system | 3 |
| [vanilla.waves](https://github.com/seb-prjcts-be/vanilla.waves) | seb-prjcts-be/vanilla.waves | Pure mathematical waves for DOM objects. | 0 |
| [vanillaJSTodo](https://github.com/rameshvr/vanillaJSTodo) | rameshvr/vanillaJSTodo | simple todo list with vanilla JS and localstorage | 1 |
| [vecs-client-node](https://github.com/riccardogiuriola/vecs-client-node) | riccardogiuriola/vecs-client-node | Zero-dependency, type-safe Node.js client for Vecs Semantic Cache. | 0 |
| [vegot](https://github.com/sujang958/vegot) | sujang958/vegot | Promise-based, Lightweight, and Zero-Dependency Http Client | 3 |
| [veil](https://github.com/rxNxkolai/veil) | rxNxkolai/veil | Zero-dependency, offline redactor for PII and secrets in text. Scrub emails, phone numbers, SSNs, Luhn-validated cards, JWTs, and provider keys before sending text to an LLM or writing a log, then restore the originals. | 0 |
| [veilmail-webhook-ingester](https://github.com/Resonia-Health/veilmail-webhook-ingester) | Resonia-Health/veilmail-webhook-ingester | Store Veil Mail webhook events in your database. Zero-dependency Node.js package with PostgreSQL, MySQL, and SQLite adapters. Open source and self-hostable. | 0 |
| [vepr](https://github.com/alexeyraspopov/vepr) | alexeyraspopov/vepr | 🚧 Visualization protocol for complex and sizable data visualizations | 1 |
| [vercel-deploy](https://github.com/tunder007/vercel-deploy) | tunder007/vercel-deploy | Guard-railed Vercel deploys (preview by default) | 0 |
| [verdict-ts](https://github.com/flyingsquirrel0419/verdict-ts) | flyingsquirrel0419/verdict-ts | Make fallible operations type-safe — Rust-inspired Result&lt;T, E&gt; for TypeScript, 491B, zero-dep | 1 |
| [veritas](https://github.com/rxNxkolai/veritas) | rxNxkolai/veritas | Verify what AI tells you. claimproof checks the factual claims and citations in any AI answer against real sources, flagging dead links, fabricated papers, and unsupported claims, with a trust score and an interactive HTML report. Open, local-first, zero dependencies. | 0 |
| [veritrail](https://github.com/ArisRhiannon/veritrail) | ArisRhiannon/veritrail | Tamper-evident, verifiable append-only logs & maps for TypeScript — RFC 6962 Merkle trees with inclusion & consistency proofs, Ed25519 signed checkpoints, and a sparse Merkle verifiable map. Zero dependencies. | 1 |
| [verspec](https://github.com/didrod205/verspec) | didrod205/verspec | Tiny zero-dependency SemVer toolkit — parse, compare, sort & range-match versions with correct prerelease precedence. ~2KB. | 1 |
| [vestige.js](https://github.com/essandhu/vestige.js) | essandhu/vestige.js | Zero-dependency TypeScript multi-object tracking for browser and Node. Implements SORT, ByteTrack, and OC-SORT, validated against their reference Python implementations. | 0 |
| [vibecheck](https://github.com/ArisRhiannon/vibecheck) | ArisRhiannon/vibecheck | Offline, no-AI "safe to ship?" gate for vibe-coded apps — finds the security mistakes AI coding agents make (secrets, unprotected routes, eval-RCE, SQLi, CORS, JWT, leaked keys). CLI + MCP, agent-runnable. | 2 |
| [virtual-gamepad-lib](https://github.com/KW-M/virtual-gamepad-lib) | KW-M/virtual-gamepad-lib | Display & emulate interactive gamepads in the browser using the native gamepad api. Modular with zero dependencies. | 14 |
| [vop](https://github.com/njlr/vop) | njlr/vop | Value-orientated programming tools for JavaScript 💎 | 0 |
| [voxli](https://github.com/oyo/voxli) | oyo/voxli | A minimalistic, zero dependency 3d engine for simple voxel visualizations based on WebGL | 0 |
| [waddle.js](https://github.com/nabeelvalley/waddle.js) | nabeelvalley/waddle.js | A collection of Javascript and Typescript libraries for performing common tasks in Node.js or the browser | 1 |
| [waffle-chart](https://github.com/chiangs/waffle-chart) | chiangs/waffle-chart | Waffle chart for better storytelling with data. | 7 |
| [walk-dir-cli](https://github.com/kszongic/walk-dir-cli) | kszongic/walk-dir-cli |  | 0 |
| [warden](https://github.com/rxNxkolai/warden) | rxNxkolai/warden | A zero-dependency linter for AI agent permissions and tool configs (Claude Code settings.json, .mcp.json). Flags wildcard shell, bypassed prompts, hard-coded secrets, auto-approved MCP, and missing guardrails. | 0 |
| [waze-api](https://github.com/Akuqt/waze-api) | Akuqt/waze-api | Node.js wrapper for waze. | 5 |
| [wc-json-cli](https://github.com/kszongic/wc-json-cli) | kszongic/wc-json-cli | Word count and text statistics for JSON fields from the command line. | 0 |
| [web-card-game-skill](https://github.com/mars-tw/web-card-game-skill) | mars-tw/web-card-game-skill | 純原生（零依賴）網頁卡牌遊戲的 Claude Code Skill：關鍵字技能對戰、開卡包、星級閃卡、主題切換，整合 Grok/GPT 生成卡牌美術。 | 7 |
| [web-components](https://github.com/Igor-ifrs/web-components) | Igor-ifrs/web-components | A minimalist, zero-dependency boilerplate for building native Web Components and modular styling | 0 |
| [web-items](https://github.com/cuteapple/web-items) | cuteapple/web-items | some web games (mainly develop under 24hr) | 0 |
| [web-xlsx](https://github.com/naka93-gh/web-xlsx) | naka93-gh/web-xlsx | 依存ゼロ・型安全な Excel(xlsx) 読み書きライブラリ（ブラウザ向け） | 0 |
| [web-xlsx-fill](https://github.com/naka93-gh/web-xlsx-fill) | naka93-gh/web-xlsx-fill | 依存ゼロ・型安全な xlsx テンプレート差し込みライブラリ（ブラウザ向け） | 0 |
| [webcrypto-envelope](https://github.com/JacobStephens2/webcrypto-envelope) | JacobStephens2/webcrypto-envelope | Tiny typed Web Crypto wrapper: PBKDF2 keys + AES-256-GCM envelope, plus seal/open for zero-knowledge shareable payloads | 0 |
| [webhook-verify](https://github.com/JacobStephens2/webhook-verify) | JacobStephens2/webhook-verify | Tiny typed HMAC webhook verifiers - raw-body (GitHub-style), timestamped with replay tolerance (Stripe-style), and URL+sorted-params (Twilio, Mandrill) - constant-time compares, zero dependencies. | 0 |
| [weblocks](https://github.com/bytesbrains/weblocks) | bytesbrains/weblocks | Block engine for AI-composable web apps — snap-together 'Lego' blocks + the AI catalog contract (manifest → validate → render static HTML). | 1 |
| [webp2any](https://github.com/justn-hyeok/webp2any) | justn-hyeok/webp2any | Convert/Change WEBP to JPG & PNG. Zero Dependency. Easily, right in the brower. | 1 |
| [webvtt-validator](https://github.com/khattaksd/webvtt-validator) | khattaksd/webvtt-validator | WebVTT validator | 1 |
| [WebWebWeb](https://github.com/instafluff/WebWebWeb) | instafluff/WebWebWeb | The zero-dependency alternative to ExpressJS. Create web servers with APIs SUPER EASILY in just a few lines of code. | 28 |
| [weighted-avg-cli](https://github.com/kszongic/weighted-avg-cli) | kszongic/weighted-avg-cli | Calculate weighted averages from the command line. | 0 |
| [whatsapp-archive-viewer](https://github.com/nshah1d/whatsapp-archive-viewer) | nshah1d/whatsapp-archive-viewer | Zero-dependency WhatsApp archive viewer. Renders _chat.txt exports as a searchable dark-mode chat UI. Handles 500k+ messages via virtual DOM with lazy-load chunked rendering. Deterministic 4-field deduplication engine. No uploads. No APIs. Retrieval time cut from 10-15 minutes to under 5 seconds. | 0 |
| [whatsmyfyi-sdk](https://github.com/koraykoylu/whatsmyfyi-sdk) | koraykoylu/whatsmyfyi-sdk | Official TypeScript SDK for the whatsmy.fyi IP API — public IP with zero config, free geolocation with an API key. Zero dependencies. | 0 |
| [whisper-edge](https://github.com/whisper-sec/whisper-edge) | whisper-sec/whisper-edge | whisper-edge — dependency-free Whisper agent-identity SDK for serverless & edge runtimes (Cloudflare Workers, Vercel, Deno, Netlify, Lambda, Supabase). Keyless verify/resolve/RDAP + control plane with an API key. | 1 |
| [whitespace-cli](https://github.com/kszongic/whitespace-cli) | kszongic/whitespace-cli | Detect, convert, and clean whitespace in files. Tabs, spaces, trailing whitespace, BOM. Zero deps. | 0 |
| [WildflowerJS](https://github.com/wfjs-admin/WildflowerJS) | wfjs-admin/WildflowerJS |  Reactive JS, no BS*. A no-build (buildless) reactive, performant JavaScript framework: create full reactive apps (components, stores, router, SSR, forms) in plain HTML, CSS, and JavaScript. No build step, no virtual DOM, no transpiler, no JSX, no dependencies. *Build Step | 2 |
| [wix-to-astro](https://github.com/alexandramartinez/wix-to-astro) | alexandramartinez/wix-to-astro | Faithful, dependency-free toolkit to migrate a Wix blog to Markdown (Astro / Hugo / Eleventy) — reads raw server HTML so you don't silently lose code, images, or structure. | 0 |
| [wma-cli](https://github.com/kszongic/wma-cli) | kszongic/wma-cli | Weighted moving average calculator CLI. Pipe numbers in, get WMA out. Zero deps. | 0 |
| [wog](https://github.com/Phara0h/wog) | Phara0h/wog | Just a wittle wogger | 2 |
| [works-on-my-machine](https://github.com/didrod205/works-on-my-machine) | didrod205/works-on-my-machine | "Works on my machine" — finally with receipts. Capture a paste-safe env fingerprint, diff it against a teammate's or CI, and get told exactly what's different and why it broke. Plus the legendary ✓ badge. npx womm — 100% local, no telemetry. | 1 |
| [workspace-optimizer](https://github.com/tunder007/workspace-optimizer) | tunder007/workspace-optimizer | Generate CLAUDE.md / AGENTS.md / .cursor/rules agent contracts | 0 |
| [wormguard](https://github.com/ArisRhiannon/wormguard) | ArisRhiannon/wormguard | Offline, npm supply-chain auditor — behavioral + baseline-diff detection of malicious install scripts (Shai-Hulud-style worms). No network, no account, no CVE database. | 1 |
| [wouter](https://github.com/molefrog/wouter) | molefrog/wouter | 🥢 A minimalist-friendly ~2.2KB routing for React and Preact | 7,857 |
| [ws](https://github.com/rabbxdev/ws) | rabbxdev/ws | Zero-copy WebSocket for every runtime. One import. 4KB. No native deps. | 19 |
| [x-native](https://github.com/jpoindexter/x-native) | jpoindexter/x-native | Native TypeScript client for X/Twitter GraphQL — search, bookmarks, read tweets. Keyless cookie auth, zero dependencies, no Python, self-healing query IDs. | 0 |
| [xls-reader](https://github.com/zanlucathiago/xls-reader) | zanlucathiago/xls-reader | Zero-dependency reader for legacy .xls (BIFF8 / Excel 97–2003) files. Returns each sheet as a grid of typed cells. Runs in Node and the browser. | 21 |
| [xml-parser](https://github.com/Ismail-elkorchi/xml-parser) | Ismail-elkorchi/xml-parser | XML parser for JavaScript with namespaces, DTD controls, canonical XML output, and validation helpers. | 0 |
| [xml-parser.ts](https://github.com/beenotung/xml-parser.ts) | beenotung/xml-parser.ts | A lightweight, zero-dependency XML parser for TypeScript/JavaScript that converts XML strings to JavaScript objects and vice versa. | 1 |
| [xsukax-JS-CAPTCHA](https://github.com/xsukax/xsukax-JS-CAPTCHA) | xsukax/xsukax-JS-CAPTCHA | A lightweight, client-side CAPTCHA library designed to protect web forms from automated bot submissions without relying on any external APIs or dependencies. Built entirely in vanilla JavaScript and rendered via HTML5 Canvas, it provides secure, user-friendly visual verification challenges that seamlessly integrate into any HTML form. | 4 |
| [xsukax-JS-CAPTCHA](https://github.com/1faint/xsukax-JS-CAPTCHA) | 1faint/xsukax-JS-CAPTCHA | 🛡️ Protect web forms from bots with a lightweight, secure, and privacy-focused JavaScript CAPTCHA solution that enhances user experience without external services. | 0 |
| [yass-kween-dolor-ipsum](https://github.com/remixmb/yass-kween-dolor-ipsum) | remixmb/yass-kween-dolor-ipsum | A themed placeholder-text generator. Lorem ipsum, but make it iconic — sassy, corporate, pirate, hacker, and more. | 1 |
| [yay-machine](https://github.com/maurice/yay-machine) | maurice/yay-machine | The State Machine with more YAY! | 17 |
| [yazman](https://github.com/edukah/yazman) | edukah/yazman | Zero-dependency vanilla JS WYSIWYG rich text editor with plugin architecture, undo/redo, and auto-save. | 0 |
| [z-data](https://github.com/Funlang/z-data) | Funlang/z-data | Z-data is an extremely lightweight zero configuration embedded mini front-end js framework. | 20 |
| [z-template](https://github.com/Funlang/z-template) | Funlang/z-template | Z-data is an extremely lightweight zero configuration embedded front-end framework. | 1 |
| [zalgo-cli](https://github.com/kszongic/zalgo-cli) | kszongic/zalgo-cli |  | 0 |
| [zappzarapp-node-browser-utils](https://github.com/marcstraube/zappzarapp-node-browser-utils) | marcstraube/zappzarapp-node-browser-utils | TypeScript browser utility library — modular, type-safe, zero-dependency helpers for storage, cookies, events, encryption, and more | 1 |
| [zephyr-events](https://github.com/ebogdum/zephyr-events) | ebogdum/zephyr-events | Ultra-fast ES2023 event emitter with 889B bundle size and race-condition safety | 6 |
| [zero-crash](https://github.com/AbhishekSuresh2/zero-crash) | AbhishekSuresh2/zero-crash | 🛡️ Zero-dependency runtime crash guard for Node.js apps with disciplined exits and clean logs | 88 |
| [zero-dep-xlsx](https://github.com/uhere2025/zero-dep-xlsx) | uhere2025/zero-dep-xlsx | Tiny zero-dependency XLSX (Excel/OOXML) writer for Node. No exceljs, no jszip — builds the ZIP and DEFLATE with Node's built-in zlib. Multiple sheets, column widths, number formats, bold headers, and timezone-safe dates. Ships ESM + CommonJS with TypeScript types. | 0 |
| [zero-dependency](https://github.com/zero-dependency/zero-dependency) | zero-dependency/zero-dependency | 📦 Zero Dependency monorepository | 16 |
| [zero-dependency-static-cms](https://github.com/isikmuhamm/zero-dependency-static-cms) | isikmuhamm/zero-dependency-static-cms | Architectural pattern for a serverless, client-side Content Management System. Decouples the Data Layer (JSON) from the Presentation Layer (DOM) using a custom Vanilla JS hydration engine. No build tools or backend required. | 0 |
| [zero-wysiwyg](https://github.com/KaTXi/zero-wysiwyg) | KaTXi/zero-wysiwyg | A lightweight, zero-dependency WYSIWYG HTML editor. Built-in tables, color picker, YouTube embeds, image resize, emoji picker, code blocks, task lists, slash commands, find & replace, balloon toolbar. 7 languages, dark/light themes, TypeScript types. Just 1 script + 1 CSS file. | 2 |
| [zerodep-node-http-server](https://github.com/statico/zerodep-node-http-server) | statico/zerodep-node-http-server | Zero-dependency TypeScript HTTP server built on node:http with Hono-compatible API | 0 |
| [zeshim](https://github.com/Santazuki/zeshim) | Santazuki/zeshim | Complexity drops from N×M to N+M — protocol-driven, zero-dependency LLM provider shim. | 3 |
| [zigzag-encode-cli](https://github.com/kszongic/zigzag-encode-cli) | kszongic/zigzag-encode-cli | Encode and decode integers with ZigZag encoding from the command line. | 0 |
| [zoooom](https://github.com/lukeslp/zoooom) | lukeslp/zoooom | ENHANCE! Zero-dependency pan/zoom image viewer. Mouse, touch, trackpad, keyboard, joystick. | 1 |
| [Zorvix](https://github.com/DanielLMcGuire/Zorvix) | DanielLMcGuire/Zorvix | Read-only source, wiki mirror and CI/CD for codeberg:DanielMcGuire/Zorvix https://zorvix.pages.dev/codeberg | 1 |
| [zpi-sdk](https://github.com/zeative/zpi-sdk) | zeative/zpi-sdk | Universal zero-dependency TypeScript SDK for the Zapi (Zest API) scraper platform | 1 |
| [Zynex](https://github.com/Abhinav943/Zynex) | Abhinav943/Zynex | A zero-dependency, detailed validation engine for Emails, Passwords, and URLs. Built with TypeScript for Node.js. | 0 |

<!-- REGISTRY_TABLE_END -->

---

## Getting Started

### Accessing the Registry

The primary way to access the registry data is by using the `registry.json` file directly from this repository. You can:

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/simbo1984/zero-dep-npm-registry.git
    cd zero-dep-npm-registry
    ```
    Then, you can access the `registry.json` file locally.

2.  **Download `registry.json`:** You can fetch the latest `registry.json` file directly using tools like `curl` or `wget`, or by integrating it into your build process.

### Example Usage (Node.js)

Here's a simple Node.js example demonstrating how to load and filter packages from `registry.json`:

```javascript
// Assuming you have registry.json in the same directory
const fs = require('fs');
const path = require('path');

try {
    const registryPath = path.join(__dirname, 'registry.json');
    const rawData = fs.readFileSync(registryPath, 'utf-8');
    const registry = JSON.parse(rawData);

    // Example: Find packages related to 'CLI'
    const cliPackages = registry.filter(pkg =>
        pkg.keywords.includes('cli') ||
        pkg.description.toLowerCase().includes('cli')
    );

    console.log(`Found ${cliPackages.length} CLI-related zero-dependency packages:`);
    cliPackages.slice(0, 5).forEach(pkg => {
        console.log(`- ${pkg.name} (${pkg.fullName}): ${pkg.description}`);
    });

} catch (error) {
    console.error("Error loading or processing registry:", error);
}
```

---

## Registry Format

Each entry in `registry.json` follows this structure:

```json
{
  "name": "package-name",
  "fullName": "owner/package-name",
  "description": "What the package does",
  "url": "https://github.com/owner/package-name",
  "stars": 1234,
  "ecosystem": "npm",
  "keywords": ["javascript", "zero-dependency", "..."]
}
```

Each entry in `blacklist.json` follow this structure:

```json
[
    "https://github.com/owner/package-name",
    "https://github.com/owner2/package-name"
]
```


---

## Updating the Registry

The registry is generated and maintained by scripts within this repository.

*   **`update-registry.js`**: This zero-dependency Node.js script queries the GitHub Search API for repositories tagged with `zero-dependency` in JavaScript or TypeScript. It generates the `registry.json` file.
    ```bash
    node update-registry.js
    ```

*   **`update-readme.js`**: This script takes the generated `registry.json` and updates the markdown table within this README file.
    ```bash
    node update-readme.js
    ```
    Run this after updating `registry.json` to reflect changes in the README.

---

## Handling False Positives

While we strive for accuracy, the registry relies on GitHub topics and automated checks, which may occasionally lead to false positives (packages incorrectly tagged as zero-dependency). To address this:

*   **Identification Method:** Packages are primarily identified by the `zero-dependency` topic on GitHub.
*   **Update Process:** Updating the `blacklist.json` file
*   **Blacklisting:** Libraries identified as having undeclared dependencies will be temporarily blacklisted.
*   **Removal from Blacklist:** Package owners can request removal from the blacklist by demonstrating that all dependencies have been resolved and removed.

---

## Contributing

We welcome contributions to make this registry even more comprehensive and useful!

*   **Suggesting New Packages:** If you know of a zero-dependency npm package that should be included, please open an issue with a link to the package's repository and a brief description. We strongly suggest that you communicate with the package owner in order for him to add the topic to his repository.
*   **Reporting Issues:** If you find any inaccuracies in the registry or have suggestions for improvement, please open an issue.
*   **Pull Requests:** We appreciate pull requests for bug fixes, documentation improvements, or script enhancements. Please ensure your changes adhere to the project's coding standards and include relevant tests if applicable.

---

## Showcase Your Status

If you’d like to proudly display that your library is completely dependency-free, feel free to add one of our official badges to your README.md.

Copy and paste the Markdown code below into your project documentation:

![Zero Dependency Badge](https://img.shields.io/badge/%F0%9F%92%9A%20Zero%20dependency-B6DBC1?style=flat&link=https%3A%2F%2Fgithub.com%2Fmoshmodo%2Fzero-dep-npm-registry)

```markdown 
![Zero Dependency Badge](https://img.shields.io/badge/%F0%9F%92%9A%20Zero%20dependency-B6DBC1?style=flat&link=https%3A%2F%2Fgithub.com%2Fmoshmodo%2Fzero-dep-npm-registry)
```

![Zero Dependency Badge](https://img.shields.io/badge/%F0%9F%92%9A%20Zero%20dependency-B6DBC1?style=flat-square&link=https%3A%2F%2Fgithub.com%2Fmoshmodo%2Fzero-dep-npm-registry)

```markdown
![Zero Dependency Badge](https://img.shields.io/badge/%F0%9F%92%9A%20Zero%20dependency-B6DBC1?style=flat&link=https%3A%2F%2Fgithub.com%2Fmoshmodo%2Fzero-dep-npm-registry)
```

![Zero Dependency Badge](https://img.shields.io/badge/%F0%9F%92%9A%20Zero%20dependency-B6DBC1?style=plastic&link=https%3A%2F%2Fgithub.com%2Fmoshmodo%2Fzero-dep-npm-registry)

```markdown
![Zero Dependency Badge](https://img.shields.io/badge/%F0%9F%92%9A%20Zero%20dependency-B6DBC1?style=plastic&link=https%3A%2F%2Fgithub.com%2Fmoshmodo%2Fzero-dep-npm-registry)
```

![Zero Dependency Badge](https://img.shields.io/badge/%F0%9F%92%9A%20Zero%20dependency-B6DBC1?style=for-the-badge&link=https%3A%2F%2Fgithub.com%2Fmoshmodo%2Fzero-dep-npm-registry)

```markdown
![Zero Dependency Badge](https://img.shields.io/badge/%F0%9F%92%9A%20Zero%20dependency-B6DBC1?style=for-the-badge&link=https%3A%2F%2Fgithub.com%2Fmoshmodo%2Fzero-dep-npm-registry)
```


---

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

---

## Code of Conduct

Please note that this project is released with a Contributor Code of Conduct. By participating in this project you agree to abide by its terms. You can find the full text at [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md).
