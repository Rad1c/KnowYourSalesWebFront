FROM node:18-alpine as BUILD_IMAGE

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

EXPOSE 5173 

CMD ["npm", "run", "dev"] 

