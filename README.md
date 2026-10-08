# Joshua Díaz, portfolio

Sitio estático (HTML, CSS y JavaScript) listo para GitHub Pages. No necesita instalar nada ni compilar.

## Estructura

```
index.html            Estructura de la página (casi nunca se toca)
content.js            TODO el contenido: textos, proyectos, fotos, videos, bio
assets/style.css      Diseño
assets/app.js         Funcionamiento (slide, zoom, video, navegación)
assets/photoswipe/    Visor con zoom (incluido, no depende de internet)
images/               Fotos, una carpeta por proyecto
videos/               Clips cortos para los fondos de la página de Video
.nojekyll             Le dice a GitHub que publique los archivos tal cual
```

## Páginas

- **Photo (inicio):** slide a pantalla completa que avanza solo y se pausa al pasar el cursor. Al hacer clic en la foto se abre el visor con zoom real (rueda del mouse, doble clic o pellizcar en el celular). Abajo, la cuadrícula de proyectos.
- **Proyecto:** fotos una debajo de otra, centradas. Clic en cualquiera para hacer zoom.
- **Video:** títulos grandes sobre un clip de fondo. Al pasar el cursor por un título cambia el fondo. Clic para ver el video completo.
- **Bio:** texto abajo a la izquierda y foto grande a la derecha.

## Publicar en GitHub Pages

1. En github.com crea un repositorio nuevo. Si lo llamas `TU-USUARIO.github.io`, el sitio queda en `https://TU-USUARIO.github.io`. Con cualquier otro nombre queda en `https://TU-USUARIO.github.io/NOMBRE`.
2. Entra al repositorio, clic en **Add file > Upload files** y arrastra todo el contenido de esta carpeta (no la carpeta en sí: `index.html` tiene que quedar en la raíz). Clic en **Commit changes**.
3. Ve a **Settings > Pages**. En "Source" elige **Deploy from a branch**, rama `main`, carpeta `/ (root)`, y guarda.
4. En uno o dos minutos el sitio está en línea. Cada vez que subas cambios se actualiza solo.

El archivo `.nojekyll` empieza con punto y en Mac queda oculto (en Finder, Cmd + Shift + . muestra archivos ocultos). Conviene subirlo.

Para usar un dominio propio: **Settings > Pages > Custom domain**, escribe tu dominio y crea en tu proveedor los registros DNS que GitHub indica. Luego activa **Enforce HTTPS**.

## Cambiar el contenido (todo en content.js)

**Antes de publicar, reemplaza:** el correo (`hello@joshuadiaz.com` es de ejemplo), los enlaces de Instagram y Vimeo, la bio y su foto, los proyectos y videos de muestra, y `images/share.jpg` (la imagen que aparece al compartir el link, 1200 x 630 px).

### Slide del inicio
- `seconds`: segundos por foto en computadora. `fade`: duración del fundido (0 = corte seco).
- `mobileSeconds` y `mobileFade`: lo mismo para celular.
- `photos`: las fotos del slide. Si lo dejas vacío usa la primera foto de cada proyecto. Para elegirlas:
  `{ src: "images/fuego/03.jpg", project: "fuego" }` (el `project` hace que el pie de foto lleve al proyecto).

### Proyectos de foto
- Copia un bloque completo de proyecto y cambia los datos. El orden de la lista es el orden en el sitio.
- `slug` es la dirección del proyecto: solo minúsculas, números y guiones.
- La primera foto es la portada; para otra, agrega `cover: "images/carpeta/foto.jpg"`.
- `caption` (opcional) pone un pie de foto debajo de esa imagen.
- `w` y `h` (opcional) son el tamaño en píxeles de la foto. Si los pones, el zoom abre más rápido.

### Videos
Cada video tiene dos partes:
- `loop` y `poster`: un clip corto sin sonido para el fondo (6 a 15 segundos, mp4, menos de 5 MB) y una imagen fija.
- El video completo, uno de estos: `vimeo: "123456789"`, `youtube: "abc123XYZ"` o `file: "videos/archivo.mp4"`.

Para exportar los clips de fondo: H.264, 1280 o 1920 px de ancho, sin audio, bitrate bajo (2 a 4 Mbps). Un fotograma del clip en JPG sirve como `poster`.

GitHub no acepta archivos de más de 100 MB, así que los videos largos van en Vimeo o YouTube.

### Fotos
- Exporta a 2500 px en el lado largo (para que el zoom se vea nítido), JPG calidad 75 a 80. Idealmente menos de 700 KB cada una.
- `alt` describe la foto para lectores de pantalla y Google.

## Probarlo en tu computadora

Abre una terminal en esta carpeta, ejecuta `python3 -m http.server` y abre `http://localhost:8000`. (Abrir `index.html` con doble clic no funciona bien porque el zoom necesita un servidor.)

## Créditos

El visor con zoom es PhotoSwipe (licencia MIT, incluida en `assets/photoswipe/LICENSE`).
