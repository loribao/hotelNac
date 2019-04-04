FROM node:alpine
WORKDIR /app
COPY ./apps/package.json ./package.json
RUN npm install
COPY ./apps /app
EXPOSE 80 443
CMD [ "npm", "start" ]
