# Simple CI/CD Project

![CI/CD Pipeline](https://github.com/harshyad24/simple-cicd-project/actions/workflows/ci-cd.yml/badge.svg)

A professional Node.js/Express REST API with automated testing and continuous integration/deployment using GitHub Actions.

## 🚀 Features

- ✅ RESTful API built with Express.js
- ✅ Comprehensive automated testing with Jest
- ✅ CI/CD pipeline with GitHub Actions
- ✅ 93%+ code coverage
- ✅ Multi-version Node.js testing (18.x and 20.x)
- ✅ Automatic deployment on main branch
- ✅ Professional development workflow

## 📋 API Endpoints

### Health & Status
- **GET** `/health` - Health check endpoint
  ```json
  {
    "status": "healthy",
    "timestamp": "2024-10-31T12:00:00.000Z"
  }
  ```

### General Endpoints
- **GET** `/api/hello` - Returns a greeting message
  ```json
  {
    "message": "Hello from CI/CD project! Automation is awesome!"
  }
  ```

- **GET** `/api/time` - Returns current server time
  ```json
  {
    "message": "Current time",
    "time": "10/31/2024, 3:45:22 PM"
  }
  ```

- **GET** `/api/users` - Returns a list of users
  ```json
  {
    "users": [
      { "id": 1, "name": "Alice", "email": "alice@example.com" },
      { "id": 2, "name": "Bob", "email": "bob@example.com" },
      { "id": 3, "name": "Charlie", "email": "charlie@example.com" }
    ]
  }
  ```

### Calculator Endpoint
- **POST** `/api/calculate` - Performs mathematical operations
  
  **Request Body:**
  ```json
  {
    "a": 5,
    "b": 3,
    "operation": "add"
  }
  ```
  
  **Supported Operations:** `add`, `subtract`, `multiply`, `divide`
  
  **Response:**
  ```json
  {
    "result": 8
  }
  ```

## 🛠️ Tech Stack

- **Runtime:** Node.js
- **Framework:** Express.js
- **Testing:** Jest + Supertest
- **CI/CD:** GitHub Actions
- **Version Control:** Git & GitHub

## 📦 Installation & Setup

### Prerequisites

- Node.js (v18.x or higher)
- npm (comes with Node.js)
- Git

### Local Development

1. **Clone the repository:**
   ```bash
   git clone https://github.com/harshyad24/simple-cicd-project.git
   cd simple-cicd-project
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the application:**
   ```bash
   npm start
   ```
   
   The server will start on `http://localhost:3000`

4. **Run tests:**
   ```bash
   npm test
   ```

5. **Run tests in watch mode:**
   ```bash
   npm run test:watch
   ```

## 🧪 Testing

### Running Tests

```bash
# Run all tests with coverage
npm test

# Run tests in watch mode
npm run test:watch
```

### Test Coverage

Current test coverage: **93.75%**

- 12 test suites
- All critical paths covered
- Integration tests for all endpoints

### Example Test Output

```
PASS  ./app.test.js
  API Endpoints
    GET /health
      ✓ should return healthy status (10ms)
    GET /api/hello
      ✓ should return hello message (2ms)
    GET /api/users
      ✓ should return list of users (1ms)
    POST /api/calculate
      ✓ should add two numbers (8ms)
      ✓ should subtract two numbers (1ms)
      ✓ should multiply two numbers (1ms)
      ✓ should divide two numbers (3ms)

Test Suites: 1 passed, 1 total
Tests:       12 passed, 12 total
```

## 🔄 CI/CD Pipeline

### GitHub Actions Workflow

The project uses GitHub Actions for automated testing and deployment.

#### Pipeline Stages

1. **Test** 
   - Runs on Node.js 18.x and 20.x
   - Executes all unit and integration tests
   - Generates code coverage reports

2. **Lint**
   - Code quality checks
   - Style validation

3. **Build**
   - Verifies application builds correctly
   - Checks for build errors

4. **Deploy**
   - Automatic deployment to production
   - Only runs on `main` branch
   - Triggered after all tests pass

#### Workflow Triggers

- ✅ Push to `main` or `develop` branches
- ✅ Pull requests to `main` or `develop` branches
- ✅ Fully automated - no manual intervention needed

### Viewing Pipeline Results

1. Go to the [Actions tab](https://github.com/harshyad24/simple-cicd-project/actions)
2. Click on any workflow run to see detailed results
3. Green checkmark ✅ = All tests passed
4. Red X ❌ = Tests failed (needs attention)

## 📁 Project Structure

```
simple-cicd-project/
├── .github/
│   └── workflows/
│       └── ci-cd.yml          # GitHub Actions workflow configuration
├── .gitignore                 # Git ignore rules
├── app.js                     # Main Express application
├── app.test.js                # Test suite
├── package.json               # Project dependencies and scripts
├── package-lock.json          # Locked dependency versions
└── README.md                  # This file
```

## 🚀 Deployment

### Deploy to Render (Free)

1. Go to [render.com](https://render.com)
2. Sign up with your GitHub account
3. Click "New +" → "Web Service"
4. Select this repository
5. Render will auto-detect the Node.js app
6. Click "Create Web Service"
7. Wait 2-3 minutes for deployment

Your API will be live at: `https://your-app-name.onrender.com`

### Deploy to Railway (Free)

1. Go to [railway.app](https://railway.app)
2. Sign up with GitHub
3. Click "New Project" → "Deploy from GitHub repo"
4. Select this repository
5. Railway auto-configures everything
6. Your app is live!

### Deploy to Heroku

```bash
# Install Heroku CLI
brew tap heroku/brew && brew install heroku

# Login to Heroku
heroku login

# Create app
heroku create your-app-name

# Deploy
git push heroku main
```

## 🧑‍💻 Development Workflow

### Adding a New Feature

1. **Create a new branch:**
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make your changes** in the code

3. **Write tests** for your new feature

4. **Run tests locally:**
   ```bash
   npm test
   ```

5. **Commit your changes:**
   ```bash
   git add .
   git commit -m "Add your feature description"
   ```

6. **Push to GitHub:**
   ```bash
   git push origin feature/your-feature-name
   ```

7. **Create a Pull Request** on GitHub

8. **CI/CD automatically runs tests** on your PR

9. **Merge to main** after tests pass ✅

### Example: Adding a New Endpoint

```javascript
// In app.js, add before the 404 handler:
app.get('/api/status', (req, res) => {
  res.json({ 
    status: 'online',
    uptime: process.uptime(),
    timestamp: new Date().toISOString()
  });
});
```

Then add a test in `app.test.js`:

```javascript
describe('GET /api/status', () => {
  it('should return status information', async () => {
    const res = await request(app).get('/api/status');
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('status', 'online');
    expect(res.body).toHaveProperty('uptime');
    expect(res.body).toHaveProperty('timestamp');
  });
});
```

## 🧪 Testing Endpoints Manually

### Using cURL

```bash
# Health check
curl http://localhost:3000/health

# Hello endpoint
curl http://localhost:3000/api/hello

# Time endpoint
curl http://localhost:3000/api/time

# Get users
curl http://localhost:3000/api/users

# Calculator (POST request)
curl -X POST http://localhost:3000/api/calculate \
  -H "Content-Type: application/json" \
  -d '{"a": 10, "b": 5, "operation": "add"}'
```

### Using Browser

Simply navigate to:
- http://localhost:3000/health
- http://localhost:3000/api/hello
- http://localhost:3000/api/time
- http://localhost:3000/api/users

## 📊 Code Coverage

View detailed coverage report after running tests:

```bash
npm test
```

Coverage files are generated in the `coverage/` directory (gitignored).

## 🐛 Troubleshooting

### Port Already in Use

If port 3000 is already in use:

```bash
# Find and kill the process
lsof -ti:3000 | xargs kill -9

# Or use a different port
PORT=3001 npm start
```

### Tests Failing Locally

```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install

# Run tests again
npm test
```

### CI/CD Pipeline Failing

1. Check the Actions tab on GitHub
2. Click on the failed workflow
3. Review error messages
4. Fix the issue locally
5. Push the fix
6. Pipeline runs automatically

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Write/update tests
5. Ensure all tests pass
6. Submit a Pull Request

All PRs automatically trigger the CI/CD pipeline!

## 📝 License

MIT License - feel free to use this project for learning and development.

## 👨‍💻 Author

**harshyad24**
- GitHub: [@harshyad24](https://github.com/harshyad24)
- Repository: [simple-cicd-project](https://github.com/harshyad24/simple-cicd-project)

## 🎓 What I Learned Building This

- Setting up a professional Node.js/Express API
- Writing comprehensive automated tests with Jest
- Implementing CI/CD with GitHub Actions
- Following industry-standard DevOps practices
- Test-driven development (TDD)
- Git workflow and version control
- RESTful API design principles

## 🚀 Future Enhancements

- [ ] Add ESLint and Prettier for code formatting
- [ ] Implement rate limiting
- [ ] Add authentication with JWT
- [ ] Create API documentation with Swagger/OpenAPI
- [ ] Add Docker support
- [ ] Set up staging environment
- [ ] Implement logging with Winston or Pino
- [ ] Add database integration (MongoDB/PostgreSQL)
- [ ] Create more complex endpoints
- [ ] Add end-to-end tests with Cypress

## 📚 Resources

- [Express.js Documentation](https://expressjs.com/)
- [Jest Testing Framework](https://jestjs.io/)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [Node.js Best Practices](https://github.com/goldbergyoni/nodebestpractices)
- [REST API Design Guide](https://restfulapi.net/)

## 🙏 Acknowledgments

Built as a learning project to understand CI/CD pipelines and modern development workflows.

---

**⭐ If you found this project helpful, please give it a star on GitHub!**

**🐛 Found a bug? [Open an issue](https://github.com/harshyad24/simple-cicd-project/issues)**

**💡 Have a suggestion? [Start a discussion](https://github.com/harshyad24/simple-cicd-project/discussions)**
