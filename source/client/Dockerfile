FROM node:16.20-slim

WORKDIR /var/server

COPY package.json package-lock.json ./

RUN npm ci

COPY index.html tsconfig.json tsconfig.node.json vite.config.ts ./

COPY src/ ./src/

COPY public/ ./public/

RUN npm run build

CMD [ "npm", "run", "preview" ]