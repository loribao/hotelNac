FROM node:alpine
WORKDIR /app
COPY ./apps/package.json ./package.json
RUN npm install
COPY ./apps /app
EXPOSE 3001
CMD [ "npm", "start" ]