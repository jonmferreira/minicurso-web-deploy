FROM node:18-bullseye

WORKDIR /app/

COPY ./package*.json ./

RUN npm cache clean --force
RUN npm install

COPY ./ ./

EXPOSE 8081

CMD npm run dev
