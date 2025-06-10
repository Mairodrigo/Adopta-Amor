# Adopta-Amor 
**Adopta-Amor** será una API RESTful construida con Node.js, Express y MongoDB, pensada para gestionar la adopción responsable de mascotas. Este backend permitirá manejar usuarios, mascotas, procesos de adopción y generación de datos simulados para pruebas y desarrollo.

## 📌 Funcionalidades principales

- Gestión de usuarios con roles (`user`, `admin`)
- Registro y consulta de mascotas
- Proceso de adopción entre usuarios y mascotas
- Autenticación con sesiones
- Generación de datos mock (usuarios y mascotas)

---

## 🔗 Principales endpoints

### Usuarios
- `GET /api/users`
- `POST /api/users`

### Mascotas
- `GET /api/pets`
- `POST /api/pets`

### Adopciones
- `GET /api/adoptions`
- `POST /api/adoptions`

### Sesiones
- `POST /api/sessions/login`
- `POST /api/sessions/logout`

### Mocking
- `GET /api/mocks/mockingpets`
- `GET /api/mocks/mockingusers`
- `POST /api/mocks/generateData`

---

## 🚧 Estado

Proyecto en desarrollo. Se prioriza la escalabilidad, la limpieza del código y la facilidad para generar datos de prueba.

---

## 🛠️ Stack

Node.js · Express · MongoDB · Faker.js · Bcrypt · Dotenv
