# This file is the main docker file configurations

# Official Node JS runtime as a parent image
FROM node:20.0-alpine

# Set the working directory to ./app
WORKDIR /app

# Install app dependencies
# Copy the lockfile too so installs are reproducible
COPY package.json package-lock.json ./

RUN apk add --no-cache git

# Install pinned packages from the lockfile
RUN npm ci

# Bundle app source
COPY . /app

# Make port 3000 available to the world outside this container
EXPOSE 3000

# Run app.js when the container launches
CMD ["npm", "start"]
