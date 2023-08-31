const express = require('express');
const { createRequestHandler } = require('@remix-run/express');
const helmet = require('helmet');
const path = require('path')
const cors = require('cors')


const BUILD_DIR = path.join(process.cwd(), 'build')

const app = express();

app.use(cors())

app.enable('trust proxy')

app.set('x-powered-by', false)

// Use helmet middleware to set security-related headers, including CSP
app.use(
  helmet({
    contentSecurityPolicy: {
      directives: {
        scriptSrc: ["'self'","'unsafe-inline'","'unsafe-eval'", "https://*.googleapis.com","https://*.gstatic.com", "*.google.com", "https://*.ggpht.com", "*.googleusercontent.com"," blob:"],
        frameSrc: ["*.google.com"],
      },
    },
  })
);

app.use(
    `/build`,
    express.static('public/build', { immutable: true, maxAge: '1y' })
  )

// Use the Remix request handler
app.all(
  '*',
  createRequestHandler({
    build: require(BUILD_DIR),
    getLoadContext() {
        return {}
      // Provide any context you want to be available during rendering
    },
    // ... other options ...
  })
);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});