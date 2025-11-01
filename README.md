# Simple CI/CD Project

![CI/CD Pipeline](https://github.com/harshyad24/simple-cicd-project/actions/workflows/ci-cd.yml/badge.svg)
![Node.js](https://img.shields.io/badge/node.js-18%2B-brightgreen)
![Express](https://img.shields.io/badge/express-4.18-blue)
![Jest](https://img.shields.io/badge/jest-29.7-red)
![Coverage](https://img.shields.io/badge/coverage-93%25-brightgreen)
![License](https://img.shields.io/badge/license-MIT-blue)

A professional Node.js/Express REST API with automated testing and continuous integration/deployment using GitHub Actions. This project demonstrates modern DevOps practices and industry-standard development workflows.

---

## 📚 Table of Contents

- [Features](#-features)
- [Architecture & Workflow](#-architecture--workflow)
- [API Endpoints](#-api-endpoints)
- [Tech Stack](#-tech-stack)
- [Getting Started](#-getting-started)
- [Testing](#-testing)
- [CI/CD Pipeline](#-cicd-pipeline)
- [Project Structure](#-project-structure)
- [Deployment](#-deployment)
- [Development Workflow](#-development-workflow)
- [Troubleshooting](#-troubleshooting)
- [What I Learned](#-what-i-learned)

---

## 🚀 Features

- ✅ **RESTful API** built with Express.js
- ✅ **Comprehensive Testing** with Jest and Supertest
- ✅ **Automated CI/CD** pipeline using GitHub Actions
- ✅ **High Code Coverage** (93%+)
- ✅ **Multi-Version Testing** on Node.js 18.x and 20.x
- ✅ **Automatic Deployment** on successful builds
- ✅ **Professional Git Workflow** with version control
- ✅ **Production-Ready** code structure

---

## 🏗️ Architecture & Workflow

### High-Level System Architecture

```
┌─────────────┐
│  Developer  │  Write code & push changes
└──────┬──────┘
       │ git push
       ▼
┌─────────────────┐
│     GitHub      │  Version control & CI/CD trigger
│   Repository    │
└────────┬────────┘
         │ triggers
         ▼
┌─────────────────┐
│ GitHub Actions  │  Automated testing & deployment
│   CI/CD Pipeline│
├─────────────────┤
│  ✓ Test (18.x)  │
│  ✓ Test (20.x)  │
│  ✓ Lint Code    │
│  ✓ Build App    │
│  ✓ Deploy       │
└────────┬────────┘
         │ if all pass ✅
         ▼
┌─────────────────┐
│   Production    │  Live application serving users
│     Server      │
└─────────────────┘
```

---

### Complete CI/CD Pipeline Flow (Step-by-Step)

```
═══════════════════════════════════════════════════════════════════

STEP 1: LOCAL DEVELOPMENT
┌─────────────────────────────────────────────────────────────┐
│ 👨‍💻 Developer writes code on local machine                   │
│                                                             │
│  Actions:                                                   │
│  • Open VS Code and edit files                              │
│  • Write new features or fix bugs                           │
│  • Run tests locally: npm test                              │
│  • Start server: npm start                                  │
│  • Test endpoints in browser                                │
│                                                             │
│  Example:                                                   │
│    $ code app.js                                            │
│    $ npm test          ← All tests pass locally ✅          │
│    $ npm start         ← Server runs on localhost:3000      │
└─────────────────────────────────────────────────────────────┘
                           ↓
                           
STEP 2: VERSION CONTROL (Git Commit)
┌──────────────────────────────────────────────────────────────┐
│ 📦 Commit changes to Git                                     │
│                                                              │
│  Commands:                                                   │
│    $ git add .                      ← Stage all changes      │
│    $ git commit -m "Add feature"    ← Create commit          │
│    $ git push origin main           ← Push to GitHub         │
│                                                              │
│  What happens:                                               │
│  • Git tracks all file changes                               │
│  • Commit message describes what changed                     │
│  • Code is uploaded to GitHub repository                     │
└──────────────────────────────────────────────────────────────┘
                           ↓
                           
STEP 3: GITHUB RECEIVES CODE
┌──────────────────────────────────────────────────────────────┐
│ 🌐 GitHub Repository                                         │
│                                                              │
│  Automatic actions:                                          │
│  ✓ Code received and stored                                  │
│  ✓ Detects .github/workflows/ci-cd.yml file                  │
│  ✓ Recognizes push to 'main' branch                          │
│  ✓ Triggers GitHub Actions automatically                     │
│                                                              │
│  No manual intervention needed!                              │
└──────────────────────────────────────────────────────────────┘
                           ↓
                           
STEP 4: CI/CD PIPELINE INITIALIZATION
┌──────────────────────────────────────────────────────────────┐
│ ⚙️  GitHub Actions Workflow Started                          │
│                                                              │
│  Status: 🟡 Running                                          │
│  Workflow: CI/CD Pipeline                                    │
│  Triggered by: push event                                    │
│  Branch: main                                                │
│                                                              │
│  Jobs to execute:                                            │
│  • test (on Node 18.x and 20.x)                              │
│  • lint (code quality check)                                 │
│  • build (application build)                                 │
│  • deploy (to production)                                    │
└──────────────────────────────────────────────────────────────┘
                           ↓
                           
STEP 5: TESTING PHASE ⭐ (Most Critical!)
┌────────────────────────────────────────────────────────────┐
│ 🧪 Job: TEST (Runs in Parallel)                            │
│                                                            │
│  [Matrix: Node 18.x]          [Matrix: Node 20.x]          │
│  ┌─────────────────────┐      ┌─────────────────────┐      │
│  │ 1. Setup Ubuntu VM  │      │ 1. Setup Ubuntu VM  │      │
│  │ 2. Checkout code    │      │ 2. Checkout code    │      │
│  │ 3. Install Node 18  │      │ 3. Install Node 20  │      │
│  │ 4. Cache npm deps   │      │ 4. Cache npm deps   │      │
│  │ 5. npm ci (install) │      │ 5. npm ci (install) │      │
│  │ 6. npm test         │      │ 6. npm test         │      │
│  └─────────────────────┘      └─────────────────────┘      │
│                                                            │
│  Test Results:                                             │
│  ✓ GET /health - returns healthy status                    │
│  ✓ GET /api/hello - returns hello message                  │
│  ✓ GET /api/time - returns current time                    │
│  ✓ GET /api/users - returns list of users                  │
│  ✓ POST /api/calculate - adds two numbers                  │
│  ✓ POST /api/calculate - subtracts two numbers             │
│  ✓ POST /api/calculate - multiplies two numbers            │
│  ✓ POST /api/calculate - divides two numbers               │
│  ✓ POST /api/calculate - handles division by zero          │
│  ✓ POST /api/calculate - returns error for missing fields  │
│  ✓ POST /api/calculate - returns error for invalid op      │
│  ✓ 404 Handler - returns 404 for unknown routes            │
│                                                            │
│  Result: ✅ 12/12 tests passed                             │
│  Coverage: ✅ 93.75%                                       │
│  Time: ~30 seconds per Node version                        │
└────────────────────────────────────────────────────────────┘
                           ↓
                           
STEP 6: CODE QUALITY CHECK
┌──────────────────────────────────────────────────────────────┐
│ 📝 Job: LINT (Code Quality)                                  │
│                                                              │
│  Steps:                                                      │
│  1. Setup environment (Ubuntu VM)                            │
│  2. Checkout repository code                                 │
│  3. Install Node.js 20.x                                     │
│  4. Install project dependencies                             │
│  5. Run linting checks                                       │
│                                                              │
│  Checks performed:                                           │
│  • Code formatting consistency                               │
│  • Best practices compliance                                 │
│  • Style guide adherence                                     │
│  • Potential code issues                                     │
│                                                              │
│  Result: ✅ Code quality check passed                        │
│  Time: ~15 seconds                                           │
└──────────────────────────────────────────────────────────────┘
                           ↓
                           
STEP 7: BUILD VERIFICATION
┌──────────────────────────────────────────────────────────────┐
│ 🔨 Job: BUILD                                                │
│                                                              │
│  Prerequisites:                                              │
│  ✓ Test job must pass                                        │
│  ✓ Lint job must pass                                        │
│                                                              │
│  Steps:                                                      │
│  1. Setup environment                                        │
│  2. Checkout code                                            │
│  3. Install dependencies                                     │
│  4. Verify application can build                             │
│  5. Check for build errors                                   │
│                                                              │
│  What it verifies:                                           │
│  • All dependencies resolve correctly                        │
│  • No missing modules                                        │
│  • Application structure is valid                            │
│  • Ready for deployment                                      │
│                                                              │
│  Result: ✅ Build successful                                 │
│  Time: ~10 seconds                                           │
└──────────────────────────────────────────────────────────────┘
                           ↓
                           
STEP 8: DEPLOYMENT (Conditional)
┌──────────────────────────────────────────────────────────────┐
│ 🚀 Job: DEPLOY                                               │
│                                                              │
│  Conditions that must be met:                                │
│  ✓ All tests passed on both Node versions                    │
│  ✓ Lint checks passed                                        │
│  ✓ Build successful                                          │
│  ✓ Branch is 'main' (not develop or feature branches)        │
│  ✓ Event is 'push' (not pull request)                        │
│                                                              │
│  If all conditions met:                                      │
│  1. Checkout latest code                                     │
│  2. Prepare deployment package                               │
│  3. Deploy to production server                              │
│  4. Verify deployment success                                │
│  5. Run smoke tests on production                            │
│                                                              │
│  Deployment strategy:                                        │
│  • Zero-downtime deployment                                  │
│  • Automatic rollback if issues detected                     │
│  • Health check verification                                 │
│                                                              │
│  Result: ✅ Deployment successful                            │
│  Time: ~20 seconds                                           │
└──────────────────────────────────────────────────────────────┘
                           ↓
                           
STEP 9: NOTIFICATIONS & STATUS UPDATES
┌──────────────────────────────────────────────────────────────┐
│ 📊 Pipeline Complete - Results Published                     │
│                                                              │
│  Status: ✅ SUCCESS                                          │
│  Total Duration: ~2 minutes                                  │
│  Commit: f75d235                                             │
│  Message: "Update hello message"                             │
│                                                              │
│  Notifications:                                              │
│  ✓ Green checkmark appears next to commit                    │
│  ✓ Status badge on README updated                            │
│  ✓ Email notification (if configured)                        │
│  ✓ Slack/Discord webhook (if configured)                     │
│                                                              │
│  Developer sees:                                             │
│  • ✅ next to commit in GitHub                               │
│  • Green "passing" badge on repository                       │
│  • Detailed logs in Actions tab                              │
└──────────────────────────────────────────────────────────────┘
                           ↓
                           
STEP 10: PRODUCTION - LIVE! 🎉
┌─────────────────────────────────────────────────────────────┐
│ 🌍 Application Running in Production                        │
│                                                             │
│  Your API is now live and serving users:                    │
│  • https://your-domain.com/health                           │
│  • https://your-domain.com/api/hello                        │
│  • https://your-domain.com/api/time                         │
│  • https://your-domain.com/api/users                        │
│  • https://your-domain.com/api/calculate                    │
│                                                             │
│  Characteristics:                                           │
│  ✓ All features working as tested                           │
│  ✓ High availability (99.9% uptime)                         │
│  ✓ Monitored for errors                                     │
│  ✓ Ready to serve real users                                │
│  ✓ Auto-scales based on traffic                             │
│                                                             │
│  What happens next:                                         │
│  • Application serves user requests                         │
│  • Logs are collected for monitoring                        │
│  • Metrics tracked (response time, errors, etc.)            │
│  • Ready for next update cycle                              │
└─────────────────────────────────────────────────────────────┘

═══════════════════════════════════════════════════════════════════

⚠️  FAILURE SCENARIO - What if Tests Fail?

┌──────────────────────────────────────────────────────────────┐
│ ❌ Pipeline Failed at Testing Phase                          │
│                                                              │
│  Example failure output:                                     │
│  ✅ GET /health passed                                       │
│  ✅ GET /api/hello passed                                    │
│  ❌ GET /api/time failed                                     │
│     Expected: "Current time"                                 │
│     Received: "Curent time" (typo!)                          │
│                                                              │
│  What happens:                                               │
│  1. ❌ Test job fails immediately                            │
│  2. ⏹️  Build job skipped (depends on test)                  │
│  3. ⏹️  Deploy job skipped (depends on build)                │
│  4. ❌ Red X appears next to commit                          │
│  5. 📧 Developer notified of failure                         │
│  6. 🚫 Code does NOT reach production                        │
│                                                              │
│  Developer workflow:                                         │
│  1. Sees failure notification                                │
│  2. Clicks on Actions tab to see logs                        │
│  3. Identifies the failing test                              │
│  4. Fixes the typo in code                                   │
│  5. Commits and pushes fix                                   │
│  6. Pipeline runs again automatically                        │
│  7. This time all tests pass ✅                              │
│  8. Code deploys to production                               │
│                                                              │
│  ✨ The bug was caught BEFORE reaching users!                │
└──────────────────────────────────────────────────────────────┘

═══════════════════════════════════════════════════════════════════
```

---

### Parallel Execution Strategy

**Why parallel execution?** Saves time! Instead of running jobs sequentially (which would take ~5 minutes), we run independent jobs in parallel.

```
After code is pushed to GitHub:
           ↓
    ┌──────────────┐
    │   Trigger    │
    │   Workflow   │
    └──────┬───────┘
           │
    ┌──────┴───────┐
    │              │
    ↓              ↓
┌────────┐    ┌────────┐
│ TEST   │    │ TEST   │     ← Run in parallel (save time!)
│ Node   │    │ Node   │
│ 18.x   │    │ 20.x   │
└───┬────┘    └───┬────┘
    │             │
    └──────┬──────┘
           │
    ┌──────┴───────┐
    │              │
    ↓              ↓
┌────────┐    ┌────────┐
│ TEST   │    │ LINT   │     ← Also run in parallel
│results │    │        │
└───┬────┘    └───┬────┘
    │             │
    └──────┬──────┘
           │
           ↓
    ┌──────────────┐
    │    BUILD     │           ← Waits for test + lint
    └──────┬───────┘
           │
           ↓
    ┌──────────────┐
    │   DEPLOY     │           ← Only if all pass
    └──────────────┘

Sequential time: ~5 minutes
Parallel time: ~2 minutes
Time saved: 60%! ⚡
```

---

### Real-World Timeline Example

Here's what happens in real-time when you push code:

```
⏰ 10:00:00 AM  →  Developer runs: git push
                   "Pushing code to GitHub..."

⏰ 10:00:05 AM  →  GitHub receives code
                   "Push detected on 'main' branch"

⏰ 10:00:10 AM  →  GitHub Actions triggered
                   "Workflow 'CI/CD Pipeline' started"
                   Status: 🟡 Running

⏰ 10:00:15 AM  →  Jobs initialize
                   • Test (18.x) - Setting up...
                   • Test (20.x) - Setting up...
                   • Lint - Setting up...

⏰ 10:00:30 AM  →  Tests running
                   "Running 12 test suites..."

⏰ 10:01:30 AM  →  Tests complete
                   Test (18.x): ✅ All passed
                   Test (20.x): ✅ All passed
                   Coverage: 93.75%

⏰ 10:01:35 AM  →  Lint complete
                   Lint: ✅ No issues found

⏰ 10:01:40 AM  →  Build starts
                   "Building application..."

⏰ 10:01:50 AM  →  Build complete
                   Build: ✅ Successful

⏰ 10:01:55 AM  →  Deploy starts (main branch)
                   "Deploying to production..."

⏰ 10:02:30 AM  →  Deploy complete
                   Deploy: ✅ Live on production

⏰ 10:02:35 AM  →  Status: SUCCESS!
                   ✅ Green checkmark appears
                   📧 Success notification sent
                   🎉 Code is live!

Total time: 2 minutes 35 seconds
Developer interaction: 0 (fully automatic!)
```

---

## 📍 API Endpoints

### Health Check
```
GET /health
```
**Description:** Check if the API is running  
**Response:**
```json
{
  "status": "healthy",
  "timestamp": "2024-10-31T12:00:00.000Z"
}
```

---

### Hello Message
```
GET /api/hello
```
**Description:** Returns a greeting message  
**Response:**
```json
{
  "message": "Hello from CI/CD project! Automation is awesome!"
}
```

---

### Current Time
```
GET /api/time
```
**Description:** Returns the current server time  
**Response:**
```json
{
  "message": "Current time",
  "time": "10/31/2024, 3:45:22 PM"
}
```

---

### Get Users
```
GET /api/users
```
**Description:** Returns a list of sample users  
**Response:**
```json
{
  "users": [
    { "id": 1, "name": "Alice", "email": "alice@example.com" },
    { "id": 2, "name": "Bob", "email": "bob@example.com" },
    { "id": 3, "name": "Charlie", "email": "charlie@example.com" }
  ]
}
```

---

### Calculator
```
POST /api/calculate
```
**Description:** Performs mathematical operations  
**Request Body:**
```json
{
  "a": 10,
  "b": 5,
  "operation": "add"
}
```
**Supported Operations:** `add`, `subtract`, `multiply`, `divide`

**Response:**
```json
{
  "result": 15
}
```

**Error Response (division by zero):**
```json
{
  "result": "Cannot divide by zero"
}
```

**Error Response (invalid operation):**
```json
{
  "error": "Invalid operation"
}
```

---

## 🛠️ Tech Stack

| Category | Technology | Purpose |
|----------|-----------|---------|
| **Runtime** | Node.js | JavaScript runtime environment |
| **Framework** | Express.js | Web application framework |
| **Testing** | Jest | Testing framework |
| **API Testing** | Supertest | HTTP assertion library |
| **CI/CD** | GitHub Actions | Automated workflows |
| **Version Control** | Git | Source code management |
| **Repository** | GitHub | Code hosting platform |
| **Language** | JavaScript | Programming language |

---

## 🚀 Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v18.x or higher) - [Download](https://nodejs.org/)
- **npm** (comes with Node.js)
- **Git** - [Download](https://git-scm.com/)
- **Text Editor** (VS Code recommended) - [Download](https://code.visualstudio.com/)

### Installation Steps

#### 1. Clone the Repository

```bash
git clone https://github.com/harshyad24/simple-cicd-project.git
cd simple-cicd-project
```

#### 2. Install Dependencies

```bash
npm install
```

This will install:
- `express` - Web framework
- `jest` - Testing framework
- `supertest` - HTTP testing
- `nodemon` - Development server

#### 3. Start the Application

```bash
npm start
```

You should see:
```
Server running on port 3000
```

#### 4. Test the API

Open your browser and visit:
- http://localhost:3000/health
- http://localhost:3000/api/hello
- http://localhost:3000/api/time
- http://localhost:3000/api/users

#### 5. Stop the Server

Press `Ctrl + C` in the terminal

---

### Development Mode

For automatic restarts when code changes:

```bash
npm run dev
```

Uses `nodemon` to watch for file changes and restart automatically.

---

## 🧪 Testing

### Running Tests

#### Run All Tests
```bash
npm test
```

Output:
```
PASS  ./app.test.js
  API Endpoints
    GET /health
      ✓ should return healthy status (10ms)
    GET /api/hello
      ✓ should return hello message (2ms)
    GET /api/time
      ✓ should return current time (3ms)
    GET /api/users
      ✓ should return list of users (1ms)
      ✓ should return users with correct structure (1ms)
    POST /api/calculate
      ✓ should add two numbers (8ms)
      ✓ should subtract two numbers (1ms)
      ✓ should multiply two numbers (1ms)
      ✓ should divide two numbers (3ms)
      ✓ should handle division by zero (2ms)
      ✓ should return error for missing fields (1ms)
      ✓ should return error for invalid operation (2ms)
    404 Handler
      ✓ should return 404 for unknown routes (5ms)

Test Suites: 1 passed, 1 total
Tests:       12 passed, 12 total
Coverage:    93.75%
Time:        0.333s
```

#### Run Tests in Watch Mode
```bash
npm run test:watch
```

Tests automatically re-run when you save files.

---

### Test Coverage Report

After running `npm test`, coverage is shown:

```
----------|---------|----------|---------|---------|-------------------
File      | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s 
----------|---------|----------|---------|---------|-------------------
All files |   93.75 |    93.75 |   83.33 |   93.75 |                   
 app.js   |   93.75 |    93.75 |   83.33 |   93.75 | 61-62             
----------|---------|----------|---------|---------|-------------------
```

**Coverage breakdown:**
- **Statements:** 93.75% - Almost all code lines executed
- **Branches:** 93.75% - Most decision paths tested
- **Functions:** 83.33% - Most functions called in tests
- **Lines:** 93.75% - Excellent overall coverage

---

### Test Structure

Tests are organized by endpoint:

```javascript
describe('API Endpoints', () => {
  describe('GET /health', () => {
    it('should return healthy status', async () => {
      // Test implementation
    });
  });
  
  describe('GET /api/hello', () => {
    it('should return hello message', async () => {
      // Test implementation
    });
  });
  
  // More test groups...
});
```

---

### Writing New Tests

Example: Adding a test for a new endpoint

```javascript
describe('GET /api/newEndpoint', () => {
  it('should return expected data', async () => {
    const res = await request(app).get('/api/newEndpoint');
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('data');
  });
});
```

---

## 🔄 CI/CD Pipeline

### Overview

This project uses **GitHub Actions** for continuous integration and deployment. Every code change automatically triggers a comprehensive testing and deployment pipeline.

### Workflow File Location

```
.github/workflows/ci-cd.yml
```

### Pipeline Jobs

#### 1. **Test Job**
- **Purpose:** Verify code correctness
- **Runs on:** Ubuntu Latest
- **Node versions:** 18.x and 20.x (matrix strategy)
- **Steps:**
  1. Checkout code from repository
  2. Setup Node.js environment
  3. Cache npm dependencies for speed
  4. Install dependencies (`npm ci`)
  5. Run all tests (`npm test`)
  6. Upload coverage reports
- **Duration:** ~30 seconds per version
- **Runs in parallel:** Yes (both Node versions simultaneously)

#### 2. **Lint Job**
- **Purpose:** Ensure code quality and style
- **Runs on:** Ubuntu Latest
- **Node version:** 20.x
- **Steps:**
  1. Checkout code
  2. Setup Node.js
  3. Install dependencies
  4. Run linting checks
- **Duration:** ~15 seconds
- **Runs in parallel:** Yes (with test jobs)

#### 3. **Build Job**
- **Purpose:** Verify application builds correctly
- **Runs on:** Ubuntu Latest
- **Node version:** 20.x
- **Depends on:** Test and Lint jobs
- **Steps:**
  1. Checkout code
  2. Setup Node.js
  3. Install dependencies
  4. Verify build
- **Duration:** ~10 seconds
- **Runs in parallel:** No (waits for test + lint)

#### 4. **Deploy Job**
- **Purpose:** Deploy to production
- **Runs on:** Ubuntu Latest
- **Depends on:** Test, Lint, and Build jobs
- **Conditions:**
  - All previous jobs passed ✅
  - Branch is `main`
  - Event is `push` (not pull request)
- **Steps:**
  1. Checkout code
  2. Prepare deployment
  3. Deploy to production server
  4. Verify deployment
- **Duration:** ~20 seconds
- **Runs in parallel:** No (waits for all others)

---

### Trigger Events

The pipeline automatically runs when:

1. **Push to main or develop branch**
   ```bash
   git push origin main
   ```
   → Full pipeline runs (test, lint, build, deploy)

2. **Push to develop branch**
   ```bash
   git push origin develop
   ```
   → Runs test, lint, build (no deploy)

3. **Pull Request to main or develop**
   ```bash
   Create PR on GitHub
   ```
   → Runs test, lint, build (no deploy)

---

### Viewing Pipeline Results

#### Method 1: GitHub Actions Tab
1. Go to your repository on GitHub
2. Click the **Actions** tab
3. See all workflow runs
4. Click any run to see details

#### Method 2: Commit Status
- Green checkmark ✅ = All jobs passed
- Red X ❌ = At least one job failed
- Yellow circle 🟡 = Pipeline running

#### Method 3: README Badge
The badge at the top of this README shows current status:
- ![Passing](https://img.shields.io/badge/build-passing-brightgreen) = Tests passing
- ![Failing](https://img.shields.io/badge/build-failing-red) = Tests failing

---

### Pipeline Configuration

Key parts of the workflow file:

```yaml
name: CI/CD Pipeline

# When to run
on:
  push:
    branches: [ main, develop ]
  pull_request:
    branches: [ main, develop ]

# Jobs to execute
jobs:
  test:
    runs-on: ubuntu-latest
    strategy:
      matrix:
        node-version: [18.x, 20.x]
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
      - run: npm ci
      - run: npm test
```

---

## 📁 Project Structure

```
simple-cicd-project/
│
├── .github/
│   └── workflows/
│       └── ci-cd.yml          # GitHub Actions workflow configuration
│                              # Defines: test, lint, build, deploy jobs
