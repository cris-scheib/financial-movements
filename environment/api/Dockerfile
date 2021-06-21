FROM ubuntu

ENV TZ=America/Sao_Paulo
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone

RUN mkdir /opt/api/

COPY ../../* /opt/api/

WORKDIR /opt/api/


CMD [ "ls", "-lath"]


