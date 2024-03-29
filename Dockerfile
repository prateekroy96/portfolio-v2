FROM node:12-alpine
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build:ssr
EXPOSE 4000
CMD npm run serve:ssr
