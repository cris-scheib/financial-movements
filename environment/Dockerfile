FROM ubuntu


ENV TZ=America/Sao_Paulo
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone

EXPOSE 3334 3333 8081 8080

COPY ../* /opt/

RUN apt update && apt install -y \
        nodejs \
        npm
