FROM node:20-alpine

WORKDIR /src

COPY pachage*.json ./

RUN npm install

COPY . .

ENV PORT=4550