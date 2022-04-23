ARG NODE_VERSION
FROM node:${NODE_VERSION}

WORKDIR /var/www

RUN apk add yarn

RUN export PATH="$PATH:`yarn global bin`"

CMD ['node', 'dist/main']
