FROM ubuntu

ENV TZ=America/Sao_Paulo
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone

RUN mkdir /opt/api/

COPY * /opt/api/

WORKDIR /opt/api

RUN apt update && apt install -y \
        nodejs \
        npm

RUN npm install && npm i -g @adonisjs/cli \
        && adonis key:generate \
        && adonis migration:run --seed

CMD [ "npm", "start"]


