FROM node:alpine

WORKDIR /usr/src/app/api
COPY package*.json ./
RUN npm install
COPY . .

EXPOSE 3080

CMD ["npm", "run", "dev"]