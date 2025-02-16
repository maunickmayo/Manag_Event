FROM node:20.12.1

WORKDIR /app

COPY package.json ./ 

RUN npm install

COPY . .

EXPOSE 80

CMD ["npm", "start"]`