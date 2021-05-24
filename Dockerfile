FROM node:buster-slim

WORKDIR /home/node/app

ADD . /home/node/app

EXPOSE 3000

CMD ["node", "index.js"]