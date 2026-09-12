# Web de TORSA S.R.L.

Página de una sola sección larga, hecha con Angular 20. Usa un componente principal y el módulo sencillo de formularios de Angular. No hay rutas, servicios propios ni bibliotecas visuales adicionales.

## Cómo verla

Desde la carpeta `web`, ejecutá `pnpm install` una vez y luego `pnpm start`. Abrí la dirección local que muestre la terminal.

## Cómo cambiar el contenido

- **Textos y tarjetas de servicios:** abrí `src/app/app.component.html`. Buscá `TARJETA 1` a `TARJETA 5`. En cada bloque están juntos el título, la descripción y la ruta de la foto.
- **Nuestros valores:** en el mismo archivo, buscá `TARJETA NUESTROS VALORES`. Cada título y mensaje se puede modificar allí.
- **Fotos:** reemplazá los archivos de `public/images` conservando sus nombres. Si cambiás el nombre de una foto, actualizá también su ruta en `app.component.html`.
- **Título principal, misión, visión y datos de contacto:** están escritos directamente en `src/app/app.component.html`, bajo sus secciones correspondientes.
- **Correo que recibe la consulta:** cambiá `contactEmail` en `src/app/app.component.ts`. La dirección visible se actualiza sola.
- **Colores:** están al comienzo de `src/styles.css`. La referencia visual está en `../propuestas-diseno/guia-visual-torsa.png`.
- **Espacios, tamaños y animación:** están en `src/app/app.component.css`. Buscá `.reveal` para el efecto de entrada de las tarjetas.

El formulario valida los campos y abre la aplicación de correo del visitante con un mensaje preparado. El visitante debe enviarlo desde allí; la página no guarda ni envía mensajes por un servidor. Para un envío directo desde la web hará falta conectar un servicio o backend de formularios.

Las fotografías fueron generadas como imágenes ilustrativas para este diseño; conviene reemplazarlas por fotos reales de proyectos de la empresa cuando estén disponibles. La carpeta `../output/pdf/` contiene una guía visual paso a paso para hacer cambios comunes.
