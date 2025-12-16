# Productos API

API REST para la gestión de productos desarrollada con Node.js y Express, siguiendo una arquitectura en capas (Clean Architecture).

## 📋 Prerequisitos

Antes de comenzar, asegúrate de tener instalado:

- **Node.js** (versión 18 o superior)
- **npm** (viene incluido con Node.js)
- **MongoDB** (versión 4.4 o superior)
  - Puedes usar MongoDB local o MongoDB Atlas (cloud)
- **Git** (opcional, para clonar el repositorio)

## 🚀 Instalación

1. **Clonar el repositorio** (si aplica):
   ```bash
   git clone <url-del-repositorio>
   cd producto-api
   ```

2. **Instalar dependencias**:
   ```bash
   npm install
   ```

3. **Configurar variables de entorno**:
   
   Crea un archivo `.env` en la raíz del proyecto con las siguientes variables:
   
   ```env
   # Puerto del servidor
   PORT=3000
   
   # URI de conexión a MongoDB
   MONGO_URI=mongodb://localhost:27017/productos
   # O si usas MongoDB Atlas:
   # MONGO_URI=mongodb+srv://usuario:password@cluster.mongodb.net/productos
   
   # ⚠️ IMPORTANTE: Credenciales para Basic Authentication
   # Estas son las credenciales que debes usar para consumir los endpoints
   # Puedes cambiarlas por las que prefieras
   BASIC_AUTH_USER=admin
   BASIC_AUTH_PASS=password123
   
   # Secret para JWT (genera uno seguro)
   JWT_SECRET=tu_secret_key_muy_segura_aqui
   
   # Entorno de ejecución
   NODE_ENV=development
   ```
   
   **📝 Nota:** Las credenciales `BASIC_AUTH_USER` y `BASIC_AUTH_PASS` son las que debes usar para autenticarte al consumir los endpoints. Si cambias estos valores, asegúrate de usar los nuevos valores en tus solicitudes.

## ▶️ Cómo ejecutar la aplicación

### Modo desarrollo

Para ejecutar la aplicación en modo desarrollo con recarga automática (nodemon):

```bash
npm run dev
```

### Modo producción

Para ejecutar la aplicación en modo producción:

```bash
npm start
```

La aplicación estará disponible en `http://localhost:3000` (o el puerto que hayas configurado en `.env`).

## 📚 Documentación de la API

Una vez que la aplicación esté corriendo, puedes acceder a la documentación interactiva de Swagger en:

```
http://localhost:3000/api-docs
```

### 🔐 Autenticación en Swagger

La documentación de Swagger incluye un botón **"Authorize"** (🔒) en la parte superior derecha que te permite ingresar tus credenciales de Basic Auth directamente en la interfaz.

**Pasos para usar la autenticación en Swagger:**

1. Abre `http://localhost:3000/api-docs`
2. Haz clic en el botón **"Authorize"** (🔒) en la parte superior
3. Ingresa las credenciales:
   - **Username:** El valor de `BASIC_AUTH_USER` de tu archivo `.env`
   - **Password:** El valor de `BASIC_AUTH_PASS` de tu archivo `.env`
4. Haz clic en **"Authorize"** y luego en **"Close"**
5. Ahora puedes probar todos los endpoints directamente desde Swagger con autenticación incluida

**Nota:** Las credenciales se mantendrán durante tu sesión en Swagger, así que solo necesitas autorizarte una vez.

## 🔐 Autenticación

La API utiliza **Basic Authentication** para proteger los endpoints. Las credenciales se configuran en el archivo `.env` mediante las variables `BASIC_AUTH_USER` y `BASIC_AUTH_PASS`.

### 📍 Dónde verificar las credenciales

Las credenciales están configuradas en el archivo **`.env`** en la raíz del proyecto. Si no tienes este archivo, créalo basándote en el ejemplo siguiente:

**Ubicación del archivo:** `/producto-api/.env`

**Variables a verificar:**
```env
BASIC_AUTH_USER=admin        # Usuario para autenticación
BASIC_AUTH_PASS=password123  # Contraseña para autenticación
```

### 🔍 Cómo verificar tus credenciales actuales

1. **Abre el archivo `.env`** en la raíz del proyecto
2. **Busca las variables:**
   - `BASIC_AUTH_USER` - Este es tu **usuario**
   - `BASIC_AUTH_PASS` - Esta es tu **contraseña**

### 💡 Cómo usar las credenciales

Una vez que tengas las credenciales del archivo `.env`, úsalas así:

**Con curl:**
```bash
# Usa el formato: -u USUARIO:CONTRASEÑA
curl -u admin:password123 http://localhost:3000/api/productos
```

**En el header HTTP:**
```
Authorization: Basic YWRtaW46cGFzc3dvcmQxMjM=
```

**Nota:** El valor `YWRtaW46cGFzc3dvcmQxMjM=` es la codificación base64 de `admin:password123`. Puedes generar tu propio token base64 con:
```bash
echo -n "usuario:contraseña" | base64
```

**En Postman/Insomnia:**
- Selecciona "Basic Auth" en la pestaña Authorization
- Usuario: valor de `BASIC_AUTH_USER`
- Password: valor de `BASIC_AUTH_PASS`

## 📡 Endpoints disponibles

### Productos

- `POST /api/productos` - Crear un nuevo producto
- `GET /api/productos` - Obtener todos los productos
- `GET /api/productos/:id` - Obtener un producto por ID
- `PUT /api/productos/:id` - Actualizar un producto
- `DELETE /api/productos/:id` - Eliminar un producto

### Health Check

- `GET /health` - Verificar el estado del servidor

## 📝 Ejemplo de uso

### Crear un producto

```bash
curl -X POST http://localhost:3000/api/productos \
  -u admin:password123 \
  -H "Content-Type: application/json" \
  -d '{
    "nombre": "Martillo",
    "descripcion": "Martillo de acero con mango de madera",
    "precio": 25.99
  }'
```

### Obtener todos los productos

```bash
curl -u admin:password123 http://localhost:3000/api/productos
```

### Obtener un producto por ID

```bash
curl -u admin:password123 http://localhost:3000/api/productos/{id}
```

## 🏗️ Estructura del proyecto

```
producto-api/
├── server.js                 # Punto de entrada principal
├── src/
│   ├── app.js               # Configuración de Express
│   ├── domain/              # Capa de dominio
│   │   ├── entities/        # Entidades del negocio
│   │   └── usecases/        # Casos de uso
│   ├── application/         # Capa de aplicación
│   │   └── services/       # Servicios de aplicación
│   ├── adapters/            # Capa de adaptadores
│   │   ├── controllers/    # Controladores HTTP
│   │   ├── routes/         # Rutas de la API
│   │   ├── repositories/   # Repositorios
│   │   └── middlewares/   # Middlewares
│   ├── infra/              # Infraestructura
│   │   └── db/            # Configuración de BD
│   └── config/             # Configuraciones
└── package.json
```

## 🛠️ Scripts disponibles

- `npm start` - Inicia la aplicación en modo producción
- `npm run dev` - Inicia la aplicación en modo desarrollo con nodemon
- `npm run lint` - Ejecuta el linter para verificar el código

## 🔧 Tecnologías utilizadas

- **Express.js** - Framework web para Node.js
- **MongoDB** - Base de datos NoSQL
- **Mongoose** - ODM para MongoDB
- **Swagger** - Documentación de API
- **JWT** - Autenticación con tokens
- **Helmet** - Seguridad HTTP
- **CORS** - Configuración de CORS
- **Morgan** - Logger HTTP

## 📦 Dependencias principales

- express
- mongoose
- jsonwebtoken
- swagger-ui-express
- helmet
- cors
- dotenv

## ⚠️ Notas importantes

- Asegúrate de que MongoDB esté corriendo antes de iniciar la aplicación
- No olvides configurar las variables de entorno en el archivo `.env`
- En producción, usa credenciales seguras y un `JWT_SECRET` robusto
- El archivo `.env` no debe ser commiteado al repositorio (debe estar en `.gitignore`)

## 🐛 Solución de problemas

### Error de conexión a MongoDB

Verifica que:
- MongoDB esté corriendo
- La URI en `.env` sea correcta
- Tengas permisos para acceder a la base de datos

### Error 401 Unauthorized

Verifica que:
- Estés enviando las credenciales correctas en el header Authorization
- Las variables `BASIC_AUTH_USER` y `BASIC_AUTH_PASS` estén configuradas correctamente en el archivo `.env`
- **Para verificar tus credenciales actuales:** Abre el archivo `.env` y revisa los valores de `BASIC_AUTH_USER` y `BASIC_AUTH_PASS`
- Las credenciales que uses en tus solicitudes deben coincidir exactamente con las del archivo `.env`

## 📄 Licencia

Este proyecto está licenciado bajo la **GNU General Public License v3.0 (GPL-3.0)**.

Para más información, consulta el archivo [LICENSE](LICENSE) en la raíz del proyecto.

