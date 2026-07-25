[![Awesome](https://awesome.re/badge.svg)](https://github.com/sindresorhus/awesome#readme)

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
*   **Automated Updates:** Runs at 6:00UTC on each Monday

---

## SIEVE: Zero-Dependency Proxy

[SIEVE](https://github.com/moshmodo/sieve) is a local proxy that intercepts npm installs and limits them to libraries with zero dependencies. It helps you minimize transitives and reduce supply chain risk while keeping your bundle sizes lean.

- **Launch:** Run `npx sieve` in your terminal. It will listen to npm commands and help you evaluate or block libraries based on their dependency chain.

### Ensuring Compatibility

Our registry table uses a ✅ or ⛔ icon to indicate if an application is provided as a public npm library. For SIEVE to associate your repository correctly with its npm package, please add the following block to your `package.json`:

```json
  "repository": {
    "type": "git",
    "url": "git+https://github.com/<handle>/<repository>"
  }
```

This ensures a direct link between the npm registry and your GitHub source.

---

## Zero-Dependency Package Registry
 
This section lists the curated zero-dependency npm packages. The list is generated automatically and sorted by popularity (minimum 5 GitHub stars).

<!-- REGISTRY_TABLE_START -->

### Heavy Hitters 🏋️

| Name | Full Name | Description | ⭐ | npmjs.com |
|------|-----------|-------------|------|------:|
| [charts](https://github.com/frappe/charts) | frappe/charts | Simple, responsive, modern SVG Charts with zero dependencies | 15,086 | ✅ |
| [wouter](https://github.com/molefrog/wouter) | molefrog/wouter | 🥢 A minimalist-friendly ~2.2KB routing for React and Preact | 7,861 | ✅ |
| [tweakpane](https://github.com/cocopon/tweakpane) | cocopon/tweakpane | :control_knobs: Compact GUI for fine-tuning parameters and monitoring value changes | 4,554 | ✅ |
| [jslint](https://github.com/jslint-org/jslint) | jslint-org/jslint | JSLint, The JavaScript Code Quality and Coverage Tool | 3,660 | ✅ |
| [react-colorful](https://github.com/omgovich/react-colorful) | omgovich/react-colorful | 🎨 A tiny (2,8 KB) color picker component for React and Preact apps | 3,535 | ✅ |
| [dockview](https://github.com/mathuo/dockview) | mathuo/dockview | Zero dependency docking layout manager supporting tabs, groups, grids and splitviews. Supports React, Vue, Angular, and vanilla TypeScript. | 3,320 | ✅ |
| [colord](https://github.com/omgovich/colord) | omgovich/colord | 👑 A tiny yet powerful tool for high-performance color manipulations and conversions | 1,878 | ✅ |
| [picocolors](https://github.com/alexeyraspopov/picocolors) | alexeyraspopov/picocolors | The tiniest and the fastest library for terminal output formatting with ANSI colors | 1,736 | ✅ |
| [hucre](https://github.com/productdevbook/hucre) | productdevbook/hucre | Zero-dependency spreadsheet engine. Read & write XLSX, CSV, ODS. Pure TypeScript, works everywhere. | 1,451 | ✅ |
| [fireworks-js](https://github.com/crashmax-dev/fireworks-js) | crashmax-dev/fireworks-js | 🎆 A simple fireworks library! Ready to use components available for React, Vue 3, Svelte, Angular, Preact, Solid, and Web Components. | 1,383 | ✅ |
| [poku](https://github.com/wellwelwel/poku) | wellwelwel/poku | 🐷 Poku makes testing easy for Node.js, Bun, Deno, and you at the same time. | 1,173 | ✅ |

### Rising Stars 💫

| Name | Full Name | Description | ⭐ | npmjs.com |
|------|-----------|-------------|------|------:|
| [giant](https://github.com/heapwolf/giant) | heapwolf/giant | A Component Framework with SSR for Rust & Nodejs. Inspired by React, Tailwind, ShadCN, & Next.js | 885 | ⛔ |
| [cloudflare-worker-jwt](https://github.com/tsndr/cloudflare-worker-jwt) | tsndr/cloudflare-worker-jwt | A lightweight JWT implementation with ZERO dependencies for Cloudflare Workers. | 876 | ✅ |
| [financial](https://github.com/lmammino/financial) | lmammino/financial | A Zero-dependency TypeScript/JavaScript financial library (based on numpy-financial) for Node.js, Deno and the browser | 726 | ✅ |
| [arcsecond](https://github.com/francisrstokes/arcsecond) | francisrstokes/arcsecond | ✨Zero Dependency Parser Combinator Library for JS Based on Haskell's Parsec | 577 | ⛔ |
| [FableCut](https://github.com/ronak-create/FableCut) | ronak-create/FableCut | Zero-dependency browser video editor that AI agents can drive — JSON timeline, MCP + REST, live-reloading UI | 512 | ⛔ |
| [etiket](https://github.com/productdevbook/etiket) | productdevbook/etiket | Zero-dependency barcode & QR code SVG, PNG generator. 40+ formats, styled QR codes, tree-shakeable. Pure TypeScript. | 434 | ✅ |
| [vanilla-back-to-top](https://github.com/vfeskov/vanilla-back-to-top) | vfeskov/vanilla-back-to-top | Simple and smooth Back To Top button | 271 | ✅ |
| [bar-of-progress](https://github.com/badrap/bar-of-progress) | badrap/bar-of-progress | A small, easy & zero-dependency progress bar component | 248 | ✅ |
| [unemail](https://github.com/productdevbook/unemail) | productdevbook/unemail | One unified email API across 18 providers (SMTP, Resend, SES, Postmark, SendGrid, Mailgun, …). Zero deps, RFC 8058 + DKIM ready, edge-first, strict TypeScript. | 235 | ✅ |
| [claude-pulse](https://github.com/nikitadoudikov/claude-pulse) | nikitadoudikov/claude-pulse | Local, zero-dependency dashboard for Claude Code: live token usage and context, lost-session recovery, full-text search, and approve tool calls from your phone. | 234 | ⛔ |
| [pure-http](https://github.com/htdangkhoa/pure-http) | htdangkhoa/pure-http | ✨ The simple web framework for Node.js with zero dependencies. | 214 | ✅ |
| [consent-banner-js](https://github.com/tagconcierge/consent-banner-js) | tagconcierge/consent-banner-js | A zero-dependency, lightweight (~3kB), consent platform agnostic, cookie banner for any website (compatible with Google Consent Mode). | 196 | ⛔ |
| [dataclass](https://github.com/alexeyraspopov/dataclass) | alexeyraspopov/dataclass | Data classes for TypeScript & JavaScript | 191 | ✅ |
| [bonsai-js](https://github.com/danfry1/bonsai-js) | danfry1/bonsai-js | A safe, zero-dependency expression language for rules, filters, and templates | 175 | ✅ |
| [h5wasm](https://github.com/usnistgov/h5wasm) | usnistgov/h5wasm | A WebAssembly HDF5 reader/writer library  | 145 | ✅ |
| [react-apple-signin-auth](https://github.com/a-tokyo/react-apple-signin-auth) | a-tokyo/react-apple-signin-auth |  Apple signin for React using the official Apple JS SDK | 138 | ✅ |
| [sumak](https://github.com/productdevbook/sumak) | productdevbook/sumak | Type-safe SQL query builder. Zero dependencies, AST-first, hookable, tree-shakeable. Pure TypeScript. | 126 | ✅ |
| [twallpaper](https://github.com/crashmax-dev/twallpaper) | crashmax-dev/twallpaper | 🌈 Multicolor gradient wallpaper created algorithmically and shimmers smoothly. | 111 | ✅ |
| [llm](https://github.com/ultralytics/llm) | ultralytics/llm | Zero-dependency JavaScript AI chat widget with SSE streaming, search, page context, accessibility, and theming. | 104 | ⛔ |

### The Wildcards 🃏

| Name | Full Name | Description | ⭐ | npmjs.com |
|------|-----------|-------------|------|------:|
| [float-labels.js](https://github.com/pryley/float-labels.js) | pryley/float-labels.js | A zero-dependency plugin that applies the float label pattern to a form. | 88 | ✅ |
| [zero-crash](https://github.com/AbhishekSuresh2/zero-crash) | AbhishekSuresh2/zero-crash | 🛡️ Zero-dependency runtime crash guard for Node.js apps with disciplined exits and clean logs | 88 | ⛔ |
| [Perspective](https://github.com/Leopoldthecoder/Perspective) | Leopoldthecoder/Perspective | 🖼Parallax scrolling effect. And more. | 84 | ⛔ |
| [meeko](https://github.com/kongnet/meeko) | kongnet/meeko | zero-dependency Nodejs Personal  awesome utilities | 81 | ✅ |
| [pwa-install](https://github.com/ProgressiveWebComponents/pwa-install) | ProgressiveWebComponents/pwa-install | A tiny vanilla (zero-dependency) non-visual native browser web component (plug-n-play custom HTML element and extensible class) that helps implement custom patterns for promoting progressive web apps (PWA) installation | 74 | ⛔ |
| [node-bring-api](https://github.com/foxriver76/node-bring-api) | foxriver76/node-bring-api | Node module to mange Bring! shopping lists | 73 | ✅ |
| [plandeck](https://github.com/OthmanAdi/plandeck) | OthmanAdi/plandeck | The visual Kanban for long-running AI agents. Watch your agent's plan organize itself: dependencies unlock into Ready, the critical path lights up, the one next move is obvious. Nobody wants to read a markdown plan. | 62 | ⛔ |
| [get-ssl-certificate](https://github.com/johncrisostomo/get-ssl-certificate) | johncrisostomo/get-ssl-certificate | A zero-dependency utility that returns a website's SSL certificate | 60 | ✅ |
| [prpl](https://github.com/tyhopp/prpl) | tyhopp/prpl | Lightweight static site generator | 59 | ⛔ |
| [html-visual-editor](https://github.com/matongAI-lab/html-visual-editor) | matongAI-lab/html-visual-editor | 帮助非程序员把 AI 生成的 HTML 改到能用 \| A browser-based visual touch-up tool for AI-generated static HTML. No install — just double-click index.html. | 58 | ⛔ |
| [lite-fifo](https://github.com/kleinron/lite-fifo) | kleinron/lite-fifo | Lightweight and efficient implementations of FIFO/Queue, written in pure javascript | 56 | ✅ |
| [terlik.js](https://github.com/badursun/terlik.js) | badursun/terlik.js | Ultra-fast multi-language profanity filter, designed Turkish-first and extensible to any language. Catches leet speak, agglutination & evasion patterns. Zero deps, TypeScript, 35 KB. | 52 | ✅ |
| [contro](https://github.com/niklashigi/contro) | niklashigi/contro | :video_game: Game controls done right. | 51 | ⛔ |
| [lru.min](https://github.com/wellwelwel/lru.min) | wellwelwel/lru.min | 🔥 An extremely fast and efficient LRU cache for JavaScript with high compatibility (including Browsers). | 51 | ✅ |
| [portakal](https://github.com/productdevbook/portakal) | productdevbook/portakal | Universal printer language SDK — 9 languages, 9 parsers, 63 cross-compilers. TSC, ZPL, EPL, ESC/POS, CPCL, DPL, SBPL, Star PRNT, IPL. Zero dependencies. Pure TypeScript. | 51 | ✅ |
| [srpc](https://github.com/yzITI/srpc) | yzITI/srpc | Simplest Server-Client Communication for both JavaScript and Python! | 50 | ⛔ |
| [hydrate-text](https://github.com/vasilii-kovalev/hydrate-text) | vasilii-kovalev/hydrate-text | A small, dependency-free and strongly typed template engine. | 48 | ✅ |
| [http-node-api](https://github.com/joaovictornsv/http-node-api) | joaovictornsv/http-node-api | O objetivo dessa aplicação era criar uma API sem nenhuma dependência externa, apenas utilizando as bibliotecas nativas do NodeJS. Tudo foi feito utilizando 100% Javascript. | 46 | ⛔ |
| [headless-combobox](https://github.com/crvouga/headless-combobox) | crvouga/headless-combobox | ⚡️Zero dependencies 🔌 Framework agnostic 💪 TypeScript 🧠 Headless Combobox | 46 | ✅ |
| [jsonhilo](https://github.com/xtao-org/jsonhilo) | xtao-org/jsonhilo | Fast lossless JSON parse event streaming, in JavaScript. | 45 | ✅ |
| [md-lite-js](https://github.com/croct-tech/md-lite-js) | croct-tech/md-lite-js | 📝 A simple and easy-to-use Markdown parser and render for basic formatting. Only 1.5 KB gzipped! | 42 | ✅ |
| [lobsterjs](https://github.com/Hacknock/lobsterjs) | Hacknock/lobsterjs | A tool to convert Markdown into simple and rich web pages. | 41 | ⛔ |
| [microgpt-ts](https://github.com/dubzdubz/microgpt-ts) | dubzdubz/microgpt-ts | A complete GPT built from scratch in TypeScript with zero dependencies | 38 | ⛔ |
| [biggest](https://github.com/hmmhmmhm/biggest) | hmmhmmhm/biggest | (TS) Tiny 2kb, zero deps, infinite precision: Biggest for all your big integer + big decimal needs. | 37 | ⛔ |
| [tapzero](https://github.com/socketsupply/tapzero) | socketsupply/tapzero | Zero dependency test framework | 35 | ✅ |
| [terrario](https://github.com/terrario-js/terrario) | terrario-js/terrario | A refined, expressive parser combinator library. | 34 | ⛔ |
| [detector-js](https://github.com/pixu1980/detector-js) | pixu1980/detector-js | DetectorJS, zero-dependency platform/environment detector written in ES6 | 33 | ✅ |
| [ARE](https://github.com/BeratARPA/ARE) | BeratARPA/ARE | A lightweight, zero-dependency Action-Rule-Event engine for .NET (C#, Unity) and JavaScript/TypeScript. Build complex logic pipelines with a fluent API. | 31 | ⛔ |
| [tyrell](https://github.com/gersak/tyrell) | gersak/tyrell | Clojurescript WebComponents library | 29 | ✅ |
| [ahize](https://github.com/productdevbook/ahize) | productdevbook/ahize | One unified API for 18 live-chat & customer-support widgets. Zero deps, tree-shakeable, SSR-safe, CSP-aware, strict TypeScript. | 29 | ✅ |
| [WebWebWeb](https://github.com/instafluff/WebWebWeb) | instafluff/WebWebWeb | The zero-dependency alternative to ExpressJS. Create web servers with APIs SUPER EASILY in just a few lines of code. | 28 | ✅ |
| [leseq](https://github.com/ugaya40/leseq) | ugaya40/leseq | Lazy collection(lazy list) with high tree-shaking affinity and easy customization. | 27 | ✅ |
| [srvs](https://github.com/okwolf/srvs) | okwolf/srvs | zero dependency dev server | 26 | ✅ |
| [AB-Audio-Player](https://github.com/mattbartley/AB-Audio-Player) | mattbartley/AB-Audio-Player | HTML, CSS, JS only A/B audio player. Toggle and compare two versions of the same audio. | 26 | ⛔ |
| [seslen](https://github.com/productdevbook/seslen) | productdevbook/seslen | Zero-dep, tree-shakeable Web Audio library with synthesised UI presets, buses + ducking, polyphony cap, throttle, jitter, fades, pan, sprites, OfflineAudioContext render-to-WAV, AnalyserNode tap, prefers-reduced-motion + SSR-safe. Strict TypeScript. | 25 | ✅ |
| [keewebx](https://github.com/gynet/keewebx) | gynet/keewebx | Open a KeePass vault in your browser — no install, no signup. Try the demo in 10 seconds at keewebx.app/app?demo=1. Modern web-only KeePass client: KDBX4, passkey unlock, browser extension autofill, runs from a double-clicked .html file. | 25 | ⛔ |
| [react-headless-carousel](https://github.com/daformat/react-headless-carousel) | daformat/react-headless-carousel | A react headless carousel component with zero-dependency: scrollable, and swipeable carousel, even on desktop, complete with snapping, friction, rubber-banding and overscroll. | 23 | ✅ |
| [unblind](https://github.com/Santazuki/unblind) | Santazuki/unblind | A vision backend for AI Agents — self-healing Claude Code Agent Skill. Routes images to Mimo/OpenAI/Ollama vision API. | 22 | ⛔ |
| [xls-reader](https://github.com/zanlucathiago/xls-reader) | zanlucathiago/xls-reader | Zero-dependency reader for legacy .xls (BIFF8 / Excel 97–2003) files. Returns each sheet as a grid of typed cells. Runs in Node and the browser. | 21 | ✅ |
| [env-smart](https://github.com/jessety/env-smart) | jessety/env-smart | Zero-dependency Node library for using .env files with default values and types in TS/JS | 20 | ✅ |
| [springtype](https://github.com/springtype-org/springtype) | springtype-org/springtype | ~1k TypeScript/TSX nano-framework for the web | 20 | ✅ |
| [z-data](https://github.com/Funlang/z-data) | Funlang/z-data | Z-data is an extremely lightweight zero configuration embedded mini front-end js framework. | 20 | ⛔ |
| [skalex](https://github.com/TarekRaafat/skalex) | TarekRaafat/skalex | AI-first, zero-dependency JavaScript database. Vector search, agent memory, MCP server, and encryption built in. Node.js, Bun, Deno, browsers, and edge runtimes. | 20 | ✅ |
| [image-palette-webgpu](https://github.com/IvanLudvig/image-palette-webgpu) | IvanLudvig/image-palette-webgpu | A tiny zero-dependency browser package that extracts dominant color or color palette from an image using WebGPU API with various algorithms | 20 | ⛔ |
| [Physics-Toast](https://github.com/vorojar/Physics-Toast) | vorojar/Physics-Toast | Toast notifications with real spring physics & Dynamic Island morphing — a zero-dependency alternative to Sonner. Pure vanilla JS, ~20KB, no React/framework needed. Damped spring engine, SVG gooey effects, 6 toast types. 弹簧物理 Toast 通知，零依赖，Sonner 的原生 JS 平替。 | 20 | ⛔ |
| [ws](https://github.com/rabbxdev/ws) | rabbxdev/ws | Zero-copy WebSocket for every runtime. One import. 4KB. No native deps. | 20 | ⛔ |
| [job-ripper](https://github.com/dshovchko/job-ripper) | dshovchko/job-ripper | Rips through CPU-heavy file jobs on all cores via worker_threads. Zero deps, zero config. CLI + API | 19 | ✅ |
| [titef](https://github.com/shikaan/titef) | shikaan/titef | 🌠 A tiny, lightning-fast, zero-dependecies JavaScript test framework 🌠 | 18 | ✅ |
| [flare-redact](https://github.com/flare-collection/flare-redact) | flare-collection/flare-redact | International secret & PII redaction for JS/TS — logs, prompts, HTTP, datasets. 20+ languages, checksum-validated national IDs, reversible LLM layer. Zero deps, ReDoS-safe. | 18 | ✅ |
| [react-swipeable-cards](https://github.com/daformat/react-swipeable-cards) | daformat/react-swipeable-cards | A react headless swipeable cards carousel with zero-dependency, discard or send to back of the stack (without any clipping), looping or not. | 18 | ✅ |
| [gm-compat](https://github.com/chocolateboy/gm-compat) | chocolateboy/gm-compat | Portable monkey-patching for userscripts | 17 | ⛔ |
| [yay-machine](https://github.com/maurice/yay-machine) | maurice/yay-machine | The State Machine with more YAY! | 17 | ✅ |
| [srcset-parse](https://github.com/molefrog/srcset-parse) | molefrog/srcset-parse | 🏙  Extra tiny `srcset` attribute parser ~150B | 16 | ⛔ |
| [zero-dependency](https://github.com/zero-dependency/zero-dependency) | zero-dependency/zero-dependency | 📦 Zero Dependency monorepository | 16 | ⛔ |
| [tinyDrawer.js](https://github.com/jenstornell/tinyDrawer.js) | jenstornell/tinyDrawer.js | Really small mobile menu navigation sliding in from the left | 15 | ⛔ |
| [uri](https://github.com/coroboros/uri) | coroboros/uri | RFC-3986 URI toolkit for Node.js. IDN (RFC-3987), IPv6 zone identifiers (RFC 6874), Sitemap protocol. Zero dependencies. | 15 | ⛔ |
| [tiny-jest](https://github.com/ValeriaVG/tiny-jest) | ValeriaVG/tiny-jest | Minimalistic zero dependency Jest-like test library to run tests in browser, nodejs or deno | 15 | ⛔ |
| [quikdown](https://github.com/deftio/quikdown) | deftio/quikdown | Fast, secure markdown parser with bidirectional HTML conversion, plugin system, and live editor.    Zero dependencies, XSS-safe by default.  ~17KB core / 100KB editor. | 15 | ✅ |
| [connector-sdk](https://github.com/oomol-lab/connector-sdk) | oomol-lab/connector-sdk | Thin, zero-dependency TypeScript client for the OOMOL Connector gateway — call any connector action, proxy upstream APIs, and introspect the catalog. | 15 | ✅ |
| [naming-conventions-modeler](https://github.com/vhidvz/naming-conventions-modeler) | vhidvz/naming-conventions-modeler | Simple and Fast naming conventions modeler implemented by Proxy, zero dependencies. | 14 | ✅ |
| [virtual-gamepad-lib](https://github.com/KW-M/virtual-gamepad-lib) | KW-M/virtual-gamepad-lib | Display & emulate interactive gamepads in the browser using the native gamepad api. Modular with zero dependencies. | 14 | ✅ |
| [react-instastories](https://github.com/kenclaron/react-instastories) | kenclaron/react-instastories | The Next Generation of React Stories Library. | 14 | ✅ |
| [mask](https://github.com/virastack/mask) | virastack/mask | Lightweight, zero-dependency input masking library optimized for React Hook Form. | 14 | ⛔ |
| [lingo](https://github.com/pascalorg/lingo) | pascalorg/lingo | Make forms easier, LLM tools safer. Natural-language quantities, units, dates & ranges parsed into canonical values — zero dependencies, two-way. | 14 | ✅ |
| [gm-storage](https://github.com/chocolateboy/gm-storage) | chocolateboy/gm-storage | An ES6 Map wrapper for the synchronous userscript storage API | 13 | ✅ |
| [FsBrowserSide](https://github.com/WaRtr0/FsBrowserSide) | WaRtr0/FsBrowserSide | FS Browser side Javascript module (server-to-client adaptation) | 13 | ✅ |
| [jsonc.min](https://github.com/wellwelwel/jsonc.min) | wellwelwel/jsonc.min | ✨ Faster and safer JSON and JSONC minify, parse and stringify for JavaScript (Browser compatible) — 2.3KB. | 13 | ✅ |
| [MermZen](https://github.com/caoergou/MermZen) | caoergou/MermZen | A clean, lightweight Mermaid diagram editor — hand-drawn style, live preview, and one-click export. | 13 | ⛔ |
| [date-light](https://github.com/flyingsquirrel0419/date-light) | flyingsquirrel0419/date-light | Zero-dependency, ~3.11KB minzipped, fully typed date utility library | 13 | ✅ |
| [hyperfrontend](https://github.com/AndrewRedican/hyperfrontend) | AndrewRedican/hyperfrontend | MIT-licensed microfrontend runtime solution | 13 | ✅ |
| [radosgw-admin](https://github.com/nycanshu/radosgw-admin) | nycanshu/radosgw-admin | Node.js SDK for the Ceph RADOS Gateway Admin Ops API — manage users, buckets, quotas and rate limits programmatically. Zero dependencies, TypeScript, dual ESM/CJS. | 13 | ✅ |
| [flexily](https://github.com/beorn/flexily) | beorn/flexily | Pure JavaScript flexbox layout engine — Yoga-compatible API, 2.5x faster initial layout, 5.5x faster re-layout, zero WASM | 13 | ✅ |
| [business-hours](https://github.com/chatwoot/business-hours) | chatwoot/business-hours | A tiny (&gt; 1kb) library to handle business hours on the browser | 12 | ⛔ |
| [repair-json-stream](https://github.com/prxtenses/repair-json-stream) | prxtenses/repair-json-stream |  | 12 | ✅ |
| [lilac](https://github.com/maifeeulasad/lilac) | maifeeulasad/lilac | lilac: A smooth and elegant WYSIWYG editor for effortless writing | 12 | ✅ |
| [codenames](https://github.com/kriasoft/codenames) | kriasoft/codenames | A tiny, zero-dependency library for generating memorable codenames from numbers. | 11 | ⛔ |
| [saborter](https://github.com/TENSIILE/saborter) | TENSIILE/saborter | 🚀 🔥 A simple and efficient JavaScript/TypeScript library for canceling asynchronous requests using AbortController | 11 | ✅ |
| [string-builder](https://github.com/halil/string-builder) | halil/string-builder | Fast, zero-dependency string builder for Node.js — ESM, CommonJS & TypeScript support. Format specifiers, method chaining, prepend, replace, appendJoin and more. | 10 | ✅ |
| [mycal](https://github.com/AungMyoKyaw/mycal) | AungMyoKyaw/mycal | Zero dependency Myanmar Calendar library for TypeScript. Convert Gregorian dates to Myanmar calendar with Thingyan, Watat years, and Buddhist Era. | 10 | ✅ |
| [sChart](https://github.com/facejiong/sChart) | facejiong/sChart | simple svg charts with zero dependencies | 10 | ⛔ |
| [sans-schema](https://github.com/funkjunky/sans-schema) | funkjunky/sans-schema | 🕸️ Schemaless Normalizer. No config needed to get started. Minimal config needed for all use cases. | 10 | ⛔ |
| [csv-pipe](https://github.com/martsinlabs/csv-pipe) | martsinlabs/csv-pipe | Typed, zero-dependency CSV parser and encoder for TypeScript. Streams with flat memory and runs on Node, browsers, Deno, Bun, and edge. | 10 | ✅ |
| [femtocolors](https://github.com/delucis/femtocolors) | delucis/femtocolors | A microscopic, zero-dependency library for styling terminal text in Node.js | 10 | ✅ |
| [model-picker](https://github.com/zanwei/model-picker) | zanwei/model-picker | Dark reasoning mixer model picker as a zero-dependency Web Component (MIT) | 10 | ⛔ |
| [jsjs](https://github.com/nusr/jsjs) | nusr/jsjs | JavaScript interpret JavaScript.Zero dependencies. | 9 | ⛔ |
| [traefikjam](https://github.com/jojobyte/traefikjam) | jojobyte/traefikjam | A tiny (zero dependency) Node.js CLI utility to convert Traefik Let's Encrypt certificates from acme.json to PEM files | 9 | ✅ |
| [quickwind](https://github.com/recabasic/quickwind) | recabasic/quickwind | Quickwind is a fast and efficient Tailwind CSS build tool. | 9 | ⛔ |
| [extreme-router](https://github.com/liorcodev/extreme-router) | liorcodev/extreme-router | A high-performance, tree-based router for JavaScript and TypeScript, featuring a powerful plugin system for extreme extensibility | 9 | ✅ |
| [bitwrench](https://github.com/deftio/bitwrench) | deftio/bitwrench | bitwrench is a javascript front end and ui library which provides updates, components, and works with zero dependancies | 8 | ✅ |
| [node-file-upload](https://github.com/jacdebug/node-file-upload) | jacdebug/node-file-upload | Pure nodejs file upload with zero dependencies. | 8 | ⛔ |
| [packmar.js](https://github.com/krutoo/packmar.js) | krutoo/packmar.js |  Simplest vanilla JavaScript library for create components-based UI. | 8 | ⛔ |
| [convert-bech32-address](https://github.com/jasbanza/convert-bech32-address) | jasbanza/convert-bech32-address | Bech32 address converter library for node.js & JavaScript for browsers | 8 | ⛔ |
| [is-fast-internet](https://github.com/okasi/is-fast-internet) | okasi/is-fast-internet | Zero-dependency browser check for fast internet — reliable even in censored countries | 8 | ✅ |
| [fast-pixelizer](https://github.com/handsupmin/fast-pixelizer) | handsupmin/fast-pixelizer | Fast, zero-dependency image pixelation for browser and Node.js | 8 | ✅ |
| [oh-my-fable](https://github.com/didrod205/oh-my-fable) | didrod205/oh-my-fable | oh-my-fable — Fable 5's way of working a long task (plan first, self-correct, never lose the thread), as a model-agnostic agent harness. The run lives in one serializable RunContext, checkpointed every step, so a crash is a pause. Zero deps, deterministically testable. | 8 | ✅ |
| [simple-builder](https://github.com/Acro/simple-builder) | Acro/simple-builder | Tiny SQL builder that keeps your SQL visible. A safe sql`` tagged template plus the classic ? partials API → { text, values } for pg, mysql & mysql2. Zero dependencies, TypeScript, CJS+ESM. | 7 | ⛔ |
| [get-wild](https://github.com/chocolateboy/get-wild) | chocolateboy/get-wild | Extract nested properties from an object with support for wildcards | 7 | ✅ |
| [date-range-picker](https://github.com/danjohnson95/date-range-picker) | danjohnson95/date-range-picker | A zero-dependency native web component for selecting date ranges 🗓 | 7 | ⛔ |
| [patch-files](https://github.com/tyhopp/patch-files) | tyhopp/patch-files | Manage patches for node_modules | 7 | ⛔ |
| [waffle-chart](https://github.com/chiangs/waffle-chart) | chiangs/waffle-chart | Waffle chart for better storytelling with data. | 7 | ✅ |
| [acmejs](https://github.com/clshortfuse/acmejs) | clshortfuse/acmejs | Zero-dependency ACME Client | 7 | ⛔ |
| [the-finger](https://github.com/nordskill/the-finger) | nordskill/the-finger | Simple JS library for touch gestures detection and recognition. | 7 | ✅ |
| [simple-liquid-glass](https://github.com/lucaperullo/simple-liquid-glass) | lucaperullo/simple-liquid-glass | The only zero-dependency liquid glass component with real refraction on iPhone & Safari — not a blur fallback. React 16.8–19 + web-component. ~6.5KB. | 7 | ✅ |
| [zephyr-events](https://github.com/ebogdum/zephyr-events) | ebogdum/zephyr-events | Ultra-fast ES2023 event emitter with 889B bundle size and race-condition safety | 7 | ⛔ |
| [semola](https://github.com/leonardodipace/semola) | leonardodipace/semola | ⚡ Zero-dependency TypeScript utilities for modern Bun apps. Type-safe APIs, Redis queues, pub/sub, i18n, caching, auth policies and more | 7 | ✅ |
| [web-card-game-skill](https://github.com/mars-tw/web-card-game-skill) | mars-tw/web-card-game-skill | 純原生（零依賴）網頁卡牌遊戲的 Claude Code Skill：關鍵字技能對戰、開卡包、星級閃卡、主題切換，整合 Grok/GPT 生成卡牌美術。 | 7 | ⛔ |
| [kanji-data](https://github.com/sepTN/kanji-data) | sepTN/kanji-data | A distilled, offline-first Kanji database for Node.js. 13,000+ characters mapped into lazy-loading shards for zero dependencies and instant serverless cold starts. | 7 | ✅ |
| [cc-hud](https://github.com/WaterTian/cc-hud) | WaterTian/cc-hud | Compact Claude Code statusline — zero-dependency, crash-free on Windows | 7 | ⛔ |
| [puremock](https://github.com/orels1/puremock) | orels1/puremock | A zero-dependency mock api server ⚡️ | 6 | ✅ |
| [vally](https://github.com/on3iro/vally) | on3iro/vally | Zero-dependency ES6 form field validation library | 6 | ✅ |
| [seq](https://github.com/njlr/seq) | njlr/seq | Useful functions for manipulating JavaScript generators ⛓️ | 6 | ✅ |
| [dominate-color-js](https://github.com/Dominate-color/dominate-color-js) | Dominate-color/dominate-color-js | 🔎 dominate-color-js is a library for finding the dominant color in PNG, JPEG and WEBP images using the KMeans++ algorithm. It can extract the primary color and its hue in RGBA format and convert it. | 6 | ✅ |
| [cyber-toast-js](https://github.com/hsr88/cyber-toast-js) | hsr88/cyber-toast-js | A Sci-Fi / Cyberpunk notification library with glitch animations and typewriter effects. | 6 | ⛔ |
| [pw-punch](https://github.com/idtpanic/pw-punch) | idtpanic/pw-punch | 🔐 Ultra-lightweight password hashing & token signing with WebCrypto. Zero dependencies. Edge-native. Built for Cloudflare, Deno, Bun, and Vercel. | 6 | ⛔ |

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
  "npmName": "package-name",
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

*   **`update-npm-names.js`**: This script queries the public npm search API and adds `npmName` when npm packages declare the corresponding GitHub repository. A single match is stored as a string; multiple exact matches are stored as an array of names because one GitHub repository can publish several libraries. It writes `null` when no match can be verified.
    ```bash
    node update-npm-names.js
    ```
    Use `node update-npm-names.js --dry-run --limit=10` to inspect a sample without changing the registry. The script waits 6 seconds between npm requests by default (the workflow uses 7 seconds), retries rate-limit responses using `Retry-After` and exponential backoff, and skips entries that already have a non-empty string or array `npmName`. Previously unresolved entries (`null`) are retried on a future run. Set `NPM_REQUEST_DELAY_MS` only when you need a slower or faster local test.

*   **`update-readme.js`**: This script takes the generated `registry.json` and updates the markdown table within this README file.
    ```bash
    node update-readme.js
    ```
    Run this after updating `registry.json` to reflect changes in the README.

### Automated updates with GitHub Actions

The [`Update registry`](.github/workflows/update-registry.yml) workflow runs the registry update, npm-name enrichment, and README update in order every Monday at 06:00 UTC. It can also be started manually from the **Actions** tab with **Run workflow**.

The workflow uses the built-in `GITHUB_TOKEN` to query the GitHub API and, when `registry.json` or `README.md` changes, commits and pushes the generated files directly to the default branch. The repository must allow workflows to have **Read and write permissions** under **Settings → Actions → General → Workflow permissions**.

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

[![zero-dependency-badge](media/zero-dependency.svg)](https://github.com/moshmodo/zero-dep-npm-registry)

```markdown 
[![zero-dependency-badge](https://githubusercontent.com/moshmodo/zero-dep-npm-registry/main/media/zero-dependency.svg)](https://github.com/moshmodo/zero-dep-npm-registry)
```


---

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

---

## Code of Conduct

Please note that this project is released with a Contributor Code of Conduct. By participating in this project you agree to abide by its terms. You can find the full text at [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md).
