# Dockerfile

# base image
FROM node:16-alpine as build-stage

# create & set working directory
WORKDIR /usr/src

# copy source files
COPY ./ .

# install dependencies
RUN yarn install

# start app
RUN yarn build

EXPOSE 3000

CMD ["yarn", "start"]