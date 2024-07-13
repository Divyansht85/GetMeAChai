# Use the latest Node.js 18 image based on Alpine Linux
FROM node:18-alpine

# Set environment variables
ENV GITHUB_ID=Ov23liwNFFzaL5mOWsIW
ENV GITHUB_SECRET=7f6ef5e51db271879ce871e9020f421f8acf8f8c
ENV NEXT_PUBLIC_KEY_ID=rzp_test_6vsm9SxNuCt2FK
ENV KEY_SECRET=Y6aFWGKrtzzOvQ7JhP8pd22S
ENV MONGO_DB_CONNECTION_STRING=mongodb+srv://divyansht85:CrazyDuck@cluster0.kd572g0.mongodb.net/chai?retryWrites=true&w=majority&appName=Cluster0
ENV GOOGLE_ID=858970125984-54b3jeer5nsj7dd9jo7q28hbc6ukkjb0.apps.googleusercontent.com
ENV GOOGLE_SECRET=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
ENV NEXT_PUBLIC_URL=http://localhost:3000
ENV NEXTAUTH_URL=http://localhost:3000
ENV NEXTAUTH_SECRET=sdf
# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the port that the app runs on
EXPOSE 3000

# Start the application in development mode
CMD ["npm", "run", "dev"]
