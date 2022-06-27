FROM nginx:1.23.0-alpine

LABEL MAINTAINER="kaisawind <wind.kaisa@gmail.com>"

COPY js /usr/share/nginx/html/js/
COPY images /usr/share/nginx/html/images/
COPY index.html /usr/share/nginx/html/
COPY file.conf /etc/nginx/conf.d/
COPY nginx.conf /etc/nginx/

VOLUME /usr/share/nginx/html/vtile
EXPOSE 8080
