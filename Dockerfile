FROM node:latest as prod
RUN apk update && apk add python make g++
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build:ssr
EXPOSE 4000
CMD npm run serve:ssr
