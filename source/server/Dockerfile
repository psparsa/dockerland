FROM node:16.20-slim

WORKDIR /var/server/

COPY package.json package-lock.json ./

RUN npm ci

COPY tsconfig.json ./
COPY src/ ./src/

ARG PORT
ENV APP_PORT=$PORT

EXPOSE $PORT

RUN npm run build

CMD [ "node", "dist/index.js" ]