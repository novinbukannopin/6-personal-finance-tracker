# 🧑‍💻 Next.js Starter - Novin Edition 🚀

This is a **Next.js starter template** built with modern tooling and production-ready configurations:

✅ **Next.js + TypeScript**  
✅ **pnpm package manager**  
✅ **Prettier + ESLint** for consistent code style  
✅ **Husky + lint-staged + Commitlint** for clean commits  
✅ **Docker & Docker Compose** minimal image builds  
✅ **Environment variables per environment**

---

## ✨ Features

- ⚡ **Next.js** latest version
- 🛡️ **TypeScript** for type safety
- 🎨 **Prettier** automatic formatting
- 🔍 **ESLint** linting with TypeScript rules
- 🔒 **Husky** git hooks
- 🚦 **lint-staged** pre-commit checks
- 📝 **Commitlint** enforcing Conventional Commits
- 🐳 **Dockerfile** with multi-stage minimal build
- ⚙️ **docker-compose.yml** for local dev & prod
- 🌿 **.env management** with automatic loading per environment

---

## 🚀 Getting Started

### 🟢 Install Dependencies

Using [pnpm](https://pnpm.io):

```bash
pnpm install
```

### 🟢 Development

Start dev server:

```bash
pnpm dev
```

### 🟢 Linting

Run ESLint:

```bash
pnpm lint --fix
```

### 🟢 Formatting

Run Prettier:

```bash
pnpm format
```

### 🟢 Husky Initialization

If you haven't set up Husky yet, run:

```bash
pnpm husky install
```

### 🟢 Docker

Build Docker image:

```bash
docker-compose up
```

---

## **🔟 Environment Variables**

```markdown
## ⚙️ Environment Variables

The project supports multiple `.env` files:

| File               | Usage                                   |
| ------------------ | --------------------------------------- |
| `.env`             | Default variables                       |
| `.env.local`       | Overrides `.env` for local development  |
| `.env.production`  | Used during `next build` / `next start` |
| `.env.development` | Specific for development                |
| `.env.test`        | For testing environments                |
```

## 🔒 Commit Conventions

This project enforces **Conventional Commits**.  
✅ Example valid commit messages:

- `feat(auth): add login endpoint`
- `fix(home): handle undefined props`
- `chore: update dependencies`

Invalid commit messages will be rejected.

## 🧑‍💻 Scripts

| Command       | Description              |
| ------------- | ------------------------ |
| `pnpm dev`    | Start development server |
| `pnpm build`  | Build production bundle  |
| `pnpm start`  | Start production server  |
| `pnpm lint`   | Run ESLint               |
| `pnpm format` | Run Prettier             |
| `pnpm test`   | (Optional) Run tests     |

## ✨ Credits

Created with ❤️ by [Novin](https://novin.fun)

## 📄 License

MIT License
