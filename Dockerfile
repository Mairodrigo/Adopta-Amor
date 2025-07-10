# Imagen base oficial de Node.js
FROM node:18

# Directorio de trabajo en el contenedor
WORKDIR /app

# Copiar solo package.json y package-lock.json para aprovechar la cache de Docker
COPY package*.json ./
COPY .env .env

# Instalar dependencias
RUN npm install

# Copiar el resto del código del proyecto
COPY . .

# Exponer el puerto de tu app
EXPOSE 8080

# Variable de entorno por defecto (opcional)
ENV NODE_ENV=production

# Comando para iniciar la app
CMD ["npm", "start"]
