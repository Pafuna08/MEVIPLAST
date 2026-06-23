# MEVIPLAST - Landing Page y Sistema Web por Roles

Proyecto frontend academico desarrollado para la competencia de Ingenieria de Software del programa Analisis y Desarrollo de Software del SENA.

MEVIPLAST es una empresa dedicada a la fabricacion de bolsas plasticas y empaques adhesivos. Este prototipo presenta la empresa y simula un sistema web para digitalizar sus procesos de produccion, inventario, ventas y seguimiento operativo.

## Objetivos

- Presentar la empresa, sus productos y sus servicios.
- Comunicar los beneficios y el proceso de trabajo de MEVIPLAST.
- Explicar la solucion tecnologica propuesta.
- Facilitar el contacto mediante formulario y WhatsApp.
- Simular el acceso al sistema interno segun el rol del usuario.
- Mostrar interfaces empresariales tipo ERP para cada rol.

## Tecnologias utilizadas

- HTML5 semantico.
- CSS3 moderno.
- JavaScript Vanilla.
- Flexbox y CSS Grid.
- Intersection Observer para animaciones.
- LocalStorage para simular la sesion.
- SVG integrado para el icono de WhatsApp.

No se utilizan frameworks, librerias externas ni base de datos.

## Estructura del proyecto

```text
proyecto/
|-- index.html
|-- login.html
|-- dashboard-admin.html
|-- dashboard-supervisor.html
|-- dashboard-operario.html
|-- README.md
|-- css/
|   |-- style.css
|   |-- login.css
|   `-- dashboard.css
|-- js/
|   |-- script.js
|   |-- login.js
|   `-- dashboard.js
`-- assets/
    |-- logo-meviplast.png
    |-- hero-industrial.png
    |-- producto-bolsas.png
    `-- producto-adhesivos.png
```

## Paginas disponibles

### `index.html`

Landing Page corporativa con:

- Navbar fija y separada visualmente del hero.
- Botones de navegacion con borde y cambio de color al pasar el puntero.
- Menu hamburguesa para dispositivos moviles.
- Hero con imagen industrial, llamada a la accion e indicadores.
- Seccion Nosotros.
- Productos y servicios.
- Beneficios competitivos.
- Presentacion de la solucion tecnologica.
- Proceso de trabajo.
- Formulario de contacto validado con JavaScript.
- Footer corporativo.
- Boton flotante con el logotipo de WhatsApp.
- Animaciones suaves al hacer scroll.

### `login.html`

Interfaz de acceso al sistema con:

- Campo de usuario.
- Campo de contrasena.
- Boton para mostrar u ocultar la contrasena.
- Validaciones y mensajes de error.
- Credenciales de demostracion por rol.
- Redireccion automatica al dashboard correspondiente.

### `dashboard-admin.html`

El administrador tiene acceso conceptual a:

- Gestion de usuarios.
- Gestion de materias primas.
- Inventario de productos terminados.
- Produccion.
- Ventas.
- Reportes.
- Configuracion.

El dashboard muestra indicadores, ordenes recientes, actividad del sistema y accesos rapidos.

### `dashboard-supervisor.html`

El supervisor puede consultar o gestionar:

- Asignacion de tareas.
- Operarios disponibles.
- Seguimiento de produccion.
- Cumplimiento de metas.
- Novedades del turno.
- Reportes operativos.

### `dashboard-operario.html`

El operario puede:

- Consultar sus tareas asignadas.
- Registrar la produccion realizada.
- Revisar metas y avance.
- Consultar registros e historial de produccion.

## Credenciales de demostracion

| Rol | Usuario | Contrasena |
|---|---|---|
| Administrador | `admin` | `admin123` |
| Supervisor | `supervisor` | `super123` |
| Operario | `operario` | `oper123` |

El login guarda temporalmente la sesion en `localStorage`. Cada dashboard comprueba que el rol almacenado corresponda con la pagina solicitada. Si no existe una sesion valida, el usuario es enviado nuevamente al login.

## Ejecucion en Visual Studio Code

1. Abrir Visual Studio Code.
2. Seleccionar **Archivo > Abrir carpeta**.
3. Abrir la carpeta `proyecto`.
4. Instalar la extension **Live Server** si no esta disponible.
5. Hacer clic derecho sobre `index.html`.
6. Seleccionar **Open with Live Server**.
7. El sitio normalmente se abrira en `http://127.0.0.1:5500`.

Tambien puede ejecutarse con Python desde una terminal:

```powershell
python -m http.server 4173
```

Luego se abre:

```text
http://127.0.0.1:4173
```

## Comportamiento responsive

El proyecto fue preparado para computadores, portatiles, tabletas y telefonos moviles.

En pantallas pequenas:

- El menu principal se convierte en menu hamburguesa.
- Los layouts de varias columnas pasan a una columna.
- Las tarjetas se reorganizan verticalmente.
- El sidebar de los dashboards se oculta y puede abrirse con un boton.
- Las tablas conservan su contenido mediante desplazamiento interno.

## Validaciones implementadas

### Formulario de contacto

- Nombre obligatorio y minimo de caracteres.
- Correo electronico con formato valido.
- Mensaje obligatorio.
- Mensajes de error asociados a cada campo.

### Inicio de sesion

- Usuario obligatorio.
- Contrasena obligatoria.
- Validacion de las credenciales de demostracion.
- Mensaje amigable cuando las credenciales son incorrectas.
- Control conceptual de acceso segun el rol.

## Cambios visuales recientes

- El navbar ahora tiene un fondo azul independiente.
- La imagen del hero comienza debajo de la linea divisoria del navbar.
- Todos los enlaces principales se muestran como botones.
- Los botones del menu cambian a rojo al pasar el puntero.
- El boton de inicio de sesion se mantiene como accion destacada.
- Se reemplazaron las letras `WA` por el logotipo de WhatsApp.
- Se corrigieron las marcas de verificacion de la solucion tecnologica.
- Se corrigio el simbolo de copyright del footer.

## Accesibilidad

- Uso de etiquetas HTML semanticas.
- Enlace para saltar directamente al contenido.
- Textos alternativos en imagenes relevantes.
- Etiquetas asociadas a los campos de formularios.
- Estados `aria` para el menu movil.
- Mensajes dinamicos mediante regiones accesibles.
- Estilos compatibles con la preferencia de movimiento reducido.

## Estado y limitaciones

Esta entrega es un prototipo frontend. Por lo tanto:

- No existe una base de datos real.
- No se envian formularios a un servidor.
- Las cifras de los dashboards son datos demostrativos.
- Los botones internos simulan acciones mediante mensajes.
- Las credenciales estan definidas en `js/login.js`.
- LocalStorage no sustituye un sistema real de autenticacion.

## Siguiente etapa recomendada

1. Implementar un backend y una API.
2. Conectar una base de datos.
3. Cifrar contrasenas y manejar sesiones seguras.
4. Crear operaciones CRUD para usuarios, ordenes, inventario y ventas.
5. Conectar el formulario de contacto con correo o mensajeria.
6. Agregar pruebas automatizadas y permisos en el servidor.
