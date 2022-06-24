# Dockerfile

# base image
FROM node:16-alpine as build-stage

# create & set working directory
WORKDIR /usr/src

# copy source files
COPY ./ .

# install dependencies
RUN yarn install

# Build Staging
RUN yarn build:staging

EXPOSE 3000

CMD ["yarn", "start"]