FROM node:18-bullseye

WORKDIR /app/

COPY ./frontend/package*.json ./

RUN npm cache clean --force
RUN npm install

COPY ./frontend/ ./

EXPOSE 8081

CMD npm run dev
