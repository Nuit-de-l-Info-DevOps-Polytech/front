
FROM node:16
ENV NODE_ENV=production
EXPOSE 3000

WORKDIR /app

COPY ["package.json", "package-lock.json*", "./"]

RUN npm install --production

COPY . .

RUN start
