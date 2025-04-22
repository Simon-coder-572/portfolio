FROM node:18-alpine

WORKDIR /app

# Kopieer package.json en installeer dependencies
COPY package.json ./
RUN npm install

# Kopieer de rest van de bestanden naar de container
COPY . .

# Exposeer de poorten voor frontend en dashboard
EXPOSE 5001

# Standaard commando om de frontend server te starten
CMD ["node", "backend/public.js"]