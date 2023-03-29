# estágio de compilação
FROM node:16-slim AS build
WORKDIR /app
COPY package*.json ./
RUN npm install --production=false
COPY . .
RUN npm run build

# estágio de produção
FROM node:16-slim AS production
WORKDIR /app
COPY package*.json ./
RUN npm install --production=true
COPY --from=build . .
EXPOSE 9001
CMD ["npm", "run", "start"]