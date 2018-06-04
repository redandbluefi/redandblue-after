FROM node:8-alpine
WORKDIR app
COPY . .
RUN npm install
RUN npm run build
EXPOSE 3000
ENV NODE_ENV=production
CMD node build/server.js
