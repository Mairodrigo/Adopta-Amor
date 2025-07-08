# Imagen base
FROM node:18

# Directorio de trabajo dentro del contenedor
WORKDIR /app

# Copiar archivos necesarios
COPY package*.json ./

# Instalar dependencias
RUN npm install

# Copiar el resto del código
COPY . .

# Exponer el puerto que usa tu app
EXPOSE 8080

# Comando de inicio
CMD ["npm", "start"]
