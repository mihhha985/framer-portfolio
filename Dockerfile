FROM node
WORKDIR /app
COPY . .
EXPOSE 3000
RUN npm install
RUN npm run build
CMD ["npm", "start"]
