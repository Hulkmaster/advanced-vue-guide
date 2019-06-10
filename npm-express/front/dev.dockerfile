FROM node:10-alpine

RUN mkdir /usr/front
WORKDIR /usr/front
COPY package.json package-lock.json ./
RUN npm i
ENTRYPOINT npm run dev
