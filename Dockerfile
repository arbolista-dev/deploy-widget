FROM mhart/alpine-node:base
# FROM mhart/alpine-node:base-0.10
# FROM mhart/alpine-node

WORKDIR /src
ADD . .

# If you have native dependencies, you'll need extra tools
# RUN apk add --no-cache make gcc g++ python
RUN apk update && apk upgrade && \
    apk add --no-cache bash git

# If you need npm, don't use a base tag
# RUN npm install

EXPOSE 3000
CMD ["node", "index.js"]
