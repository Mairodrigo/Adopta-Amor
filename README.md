# 🐾 Adopta-Amor

**Adopta-Amor** es una API RESTful construida con **Node.js**, **Express** y **MongoDB**, pensada para gestionar la adopción responsable de mascotas. Este backend permite manejar usuarios, mascotas, procesos de adopción y generar datos simulados para pruebas y desarrollo.

---

## 📌 Funcionalidades principales

- Gestión de usuarios con roles (`user`, `admin`)
- Registro y consulta de mascotas
- Proceso de adopción entre usuarios y mascotas
- Autenticación de sesiones
- Generación de datos mock (usuarios y mascotas)
- Pruebas funcionales con Mocha + Chai
- Documentación interactiva con Swagger
- Contenerización con Docker

---

## 🔗 Principales endpoints

### Usuarios
- `GET /api/users`
- `GET /api/users/:uid`
- `PUT /api/users/:uid`
- `DELETE /api/users/:uid`

### Mascotas
- `GET /api/pets`
- `POST /api/pets`

### Adopciones
- `GET /api/adoptions`
- `GET /api/adoptions/:aid`
- `POST /api/adoptions/:uid/:pid`

### Sesiones
- `POST /api/sessions/login`
- `POST /api/sessions/logout`

### Mocking
- `GET /api/mocks/mockingpets`
- `GET /api/mocks/mockingusers`
- `POST /api/mocks/generateData`

---

## 📚 Documentación Swagger

Disponible en:  
🔗 [http://localhost:8080/api/docs](http://localhost:8080/api/docs)

Incluye documentación completa del módulo `Users`.

---

## 🧪 Tests funcionales

El proyecto incluye pruebas funcionales para todos los endpoints de `adoption.router.js`, cubriendo:

- Casos de éxito (adopción correcta)
- Casos con errores (usuario o mascota inexistente, datos faltantes)
- Respuestas con los códigos adecuados (200, 400, 404)

```bash
npm test
```

---

## 🐳 Docker

Este proyecto puede ejecutarse en un contenedor Docker.

### 🛠️ Construir y correr la imagen

```bash
# Construcción de la imagen
docker build -t adopta-amor .

# Correr el contenedor
docker run -p 8080:8080 adopta-amor
```

### 📦 Imagen en DockerHub
🔗 https://hub.docker.com/repository/docker/mairodrigo/adopta-amor/general
---

## Instalación local
```bash
git clone https://github.com/Mairodrigo/Adopta-Amor.git
cd adopta-amor
npm install
npm run dev
```

---

## 🛠️ Stack
Node.js · Express · MongoDB · Swagger · Mocha · Chai · Docker · Faker.js · Bcrypt · Dotenv

---

## 👩‍💻 Autora
**Mailen Rodrigo**,
Kinesióloga y estudiante de programación full stack. 
