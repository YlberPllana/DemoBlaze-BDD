FROM cypress/base:latest

WORKDIR app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "run", "cy:run"]