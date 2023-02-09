# Specify the Base Image that we are building this new image from
FROM node:16

WORKDIR /

# Copied files over to the image
# index.js, package.json, package-lock.json
COPY . .

# Install dependencies (node_modules folder)
RUN npm install

EXPOSE 8080

# node index.js
ENTRYPOINT ["node", "index.js"]