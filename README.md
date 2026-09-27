# 🏆 Talento Lab — Marketplace de Artículos Deportivos

Trabajo integrador final del curso de **HTML, CSS y JavaScript** de **Talento Tech**.

Es un marketplace de pelotas deportivas. Antes de entrar al catálogo hay un **login validado con JavaScript**: si los datos son incorrectos, los errores se muestran en pantalla. Si son correctos, el usuario pasa a la página principal de la tienda.

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

---

## 📑 Contenido

- [Consigna](#-consigna)
- [Cómo probarlo](#-cómo-probarlo)
- [Login y validaciones](#-login-y-validaciones)
- [Página principal](#-página-principal-del-marketplace)
- [Estructura del proyecto](#-estructura-del-proyecto)
- [Tecnologías](#%EF%B8%8F-tecnologías)
- [Autor](#-autor)

---

## 📝 Consigna

> - Crear un formulario que implemente **validaciones de datos** utilizando JavaScript.
> - El formulario debe tener una **sección donde se muestren los mensajes** de las validaciones.
> - Implementar **validaciones de formato**, por ejemplo en campos de texto, numéricos y de email.
> - Si los datos son correctos, **redireccionar a otra página** o mostrar en la sección de mensajes **"Envío exitoso"**.
> - Los tipos de campos y el formulario se pueden personalizar a gusto (por ejemplo, un login con Usuario/Email, Contraseña y un botón que llame a la validación).

---

## 🚀 Cómo probarlo

No necesita instalación ni dependencias.

1. Clonar el repositorio:
   ```bash
   git clone https://github.com/efileonardo-creator/TPIntegrador-HTML-CSS-JS.git
   ```
2. Abrir **`index.html`** en el navegador (o usar **Live Server** en VS Code).
3. Ingresar con las credenciales de prueba:

| Campo          | Valor             |
|----------------|-------------------|
| 📧 Email       | `admin@admin.com` |
| 🔑 Contraseña  | `12345`           |

---

## 🔐 Login y validaciones

El formulario de `index.html` tiene los campos **email** y **contraseña**, más el botón **Ingresar**. Al hacer clic, `scripts/index.js` frena el envío normal del formulario (`preventDefault`) y ejecuta `validarDatos()`.

| Validación                  | Mensaje que se muestra                                   |
|-----------------------------|----------------------------------------------------------|
| Algún campo vacío           | ⚠️ Los datos deben de estar completos, no vacíos.         |
| Email incorrecto            | ⚠️ Email no válido.                                       |
| Contraseña incorrecta       | ⚠️ Contraseña no válida.                                  |
| Datos correctos             | ➡️ Redirecciona a `pages/home.html`                       |

**Cómo funciona:**

- Cada error tiene su propio contenedor (`emptyField_error`, `email_error`, `psw_error`) arriba del formulario. Esa es la **sección de mensajes**.
- `mostrarError()` escribe el mensaje y muestra el contenedor. `ocultarError()` lo esconde antes de cada nueva validación.
- El formulario usa `novalidate`, así que la validación la hace JavaScript y no el navegador.

---

## 🛒 Página principal del marketplace

Después del login se llega a `pages/home.html`, que tiene:

- 🧭 **Menú de navegación** con enlaces a Principal, Productos, Video corporativo y Contacto
- ⚽ **Catálogo de productos** en tarjetas con imagen, descripción, precio y botón de carrito:

  | Producto              | Precio   |
  |-----------------------|----------|
  | Pelota de fútbol      | $40.000  |
  | Pelota de golf        | $40.000  |
  | Pelota de paddle      | $40.000  |
  | Pelota de rugby       | $80.000  |
  | Bocha de hockey       | $35.000  |
  | Pelota de ping pong   | $10.000  |

- 🎬 **Video corporativo** con subtítulos en español (`.vtt`)
- ✉️ **Formulario de contacto** (nombre, email y mensaje) que se envía con [Formspree](https://formspree.io/)
- 🗺️ **Mapa** de Google Maps integrado
- 📱 **Redes sociales** con íconos de Font Awesome

---

## 📁 Estructura del proyecto

```
📦 TPIntegrador-HTML-CSS-JS
 ┣ 📜 index.html          → Login (página de entrada)
 ┣ 📂 pages
 ┃ ┗ 📜 home.html         → Página principal del marketplace
 ┣ 📂 css
 ┃ ┣ 📜 index.css         → Estilos del login
 ┃ ┗ 📜 home.css          → Estilos de la página principal
 ┣ 📂 scripts
 ┃ ┗ 📜 index.js          → Validación del formulario de login
 ┗ 📂 media               → Logo, imágenes de productos, video y subtítulos
```

---

## 🛠️ Tecnologías

- **HTML5**: estructura, formularios, video con subtítulos
- **CSS3**: diseño con Flexbox, efectos hover y Google Fonts (Oswald y Roboto)
- **JavaScript**: validación del login y manejo de mensajes de error
- **Font Awesome**: íconos
- **Formspree**: envío del formulario de contacto
- **Google Maps**: mapa embebido

---

## 👤 Autor

Desarrollado por **[efileonardo-creator](https://github.com/efileonardo-creator)** como trabajo final del curso de **Talento Tech**.
