FROM node:20-alpine

RUN npm i -g pnpm

WORKDIR /usr/src/app

COPY package.json pnpm-lock.yaml ./
RUN pnpm install 

COPY . .

RUN pnpm dev 
