FROM node:alpine

WORKDIR /usr/src/app/client
COPY package*.json ./
RUN npm install
COPY . .

EXPOSE 3000

CMD ["npm", "install"]
CMD ["npm", "audit", "fix"]
CMD ["npm", "start"]