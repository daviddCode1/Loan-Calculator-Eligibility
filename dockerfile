# Use an official Node.js runtime as the parent image
FROM node:14

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy the package.json and package-lock.json files
# This will allow Docker to cache the node_modules layer if these files don't change
COPY package*.json ./

# Install the dependencies inside the container
RUN npm install

# Copy the rest of the application into the container
COPY . .

# Build the React app
RUN npm run build

# Use nginx to serve the build files
FROM nginx:alpine

# Copy the build files from the previous stage
COPY --from=0 /usr/src/app/build /usr/share/nginx/html

# Expose the port that nginx will run on
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
