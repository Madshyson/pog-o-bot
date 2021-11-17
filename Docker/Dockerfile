FROM node:16-alpine3.11

# Create app directory
RUN mkdir /home/node/app && chown -R node:node /home/node/app
WORKDIR /home/node/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY --chown=node:node ./package*.json ./

# Set basic user
USER node

RUN npm install && npm cache clean --force --loglevel=error
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY --chown=node:node ./botApp.js .

# start bot
CMD ["npm", "run", "start"]