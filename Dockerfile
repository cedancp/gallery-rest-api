FROM node

WORKDIR /home/gallery-api

RUN mkdir /home/gallery-api/uploadedImages

COPY package*.json ./
COPY wait-for.sh ./

RUN chmod +x wait-for.sh

RUN npm install

COPY . .

EXPOSE 3000