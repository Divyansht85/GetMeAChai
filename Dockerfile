# Use the latest Node.js 18 image based on Alpine Linux
FROM node:18-alpine

# Set environment variables
ENV GITHUB_ID=Ov23li6pBDT7si5Ldgn0
ENV GITHUB_SECRET=ebcc390336aed4bb31f531a5b206f86fbefa516e
ENV NEXT_PUBLIC_KEY_ID=rzp_test_6vsm9SxNuCt2FK
ENV KEY_SECRET=Y6aFWGKrtzzOvQ7JhP8pd22S
ENV MONGO_DB_CONNECTION_STRING=mongodb+srv://divyansht85:CrazyDuck@cluster0.kd572g0.mongodb.net/chai?retryWrites=true&w=majority&appName=Cluster0
ENV GOOGLE_ID=858970125984-a6pdgf0domr8fu8t5875ru1mv4mc881m.apps.googleusercontent.com
ENV GOOGLE_SECRET=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
ENV NEXT_PUBLIC_URL=http://ec2-3-87-15-103.compute-1.amazonaws.com
ENV NEXTAUTH_URL=http://ec2-3-87-15-103.compute-1.amazonaws.com
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
