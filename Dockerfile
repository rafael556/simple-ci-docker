# estágio de compilação
FROM node-slim AS build
WORKDIR /app
COPY package*.json ./
RUN npm install --production=false
COPY . .

# estágio de testes
FROM build AS test
RUN npm run test

# estágio de produção
FROM node-slim AS production
WORKDIR /app
COPY package*.json ./
RUN npm install --production=true
COPY --from=build . .
EXPOSE 9001
CMD ["npm", "start"]


