# Stage 1: Install dependencies
# This stage is dedicated to installing npm packages. It will be cached by Docker
# and only re-run if package.json or package-lock.json changes.
FROM node:20-alpine AS deps
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm ci --only=production

# Stage 2: Production image
# This stage builds the final image. It copies the pre-installed dependencies
# and the application code.
FROM node:20-alpine
WORKDIR /usr/src/app
COPY --from=deps /usr/src/app/node_modules ./node_modules
COPY . .

EXPOSE 8000
CMD [ "node", "server.js" ]