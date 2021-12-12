FROM node:16

# create app directory
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install

# copy all application source to the application directory
COPY . .

EXPOSE 3000

CMD [ "node", "index.js"]