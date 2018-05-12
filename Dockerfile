
FROM node:7
 
RUN mkdir /portfolio
# Set the working directory to /app
WORKDIR /portfolio

# Copy the current directory contents into the container at /app
ADD . /portfolio

# Install any needed packages specified in requirements.txt
RUN npm i

EXPOSE 8080

ENV NAME portfolio

# Run app.py when the container launches
CMD ["npm", "start"]
