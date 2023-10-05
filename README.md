  Informe academico Entrega 1
  

| **Identificación** |
|----------|
| Fundamentos en Ingenieria de Sofware    |
| M4B - Docente Alejandro Adorjan    |
| Joaquin Rega, Agustin Robaina, Nicolas Tormbotti    |

  # Objetivo
 
A través de este proyecto buscamos de alguna manera simplificar la vida de las personas que sufren de celiaquía. Aproximadamente 30,000 personas padecen esta enfermedad en Uruguay, y esta estadística no toma en cuenta a los familiares que también se ven afectados porque tienen que cambiar su dieta. En Uruguay, las personas celiacas gastan un 300% más en su alimentación. Otro problema que se presenta es la poca variedad de platos que terminan consumiendo, no porque no exista diversidad, sino porque los alimentos más conocidos suelen contener gluten y se dejan de lado.

La aplicación no va a resolver directamente estos problemas económicos, pero apuntamos a simplificar el proceso de descubrir nuevos y variados menús para cada comida del día. También buscamos crear una especie de comunidad de celiacos donde cada uno pueda dar su opinión sobre cada plato o sugerir alternativas.



  # Repositorio GIT
  
  ## Creacion y uso de respositorios locales y remotos
   * Para la creacion del repositorio utilizamos el template propocionado por el docente. Una vez creado el repositorio cada uno de los integrantes del equipo trabajara en un su repositorio local utilizando check-in y check-out al respositorio remoto compartido.
  
  ## Comandos 
  * git clone
    * Lo utilizamos para crear una copia local de un repositorio remoto de Git. Cuando se ejecuta este comando, se descarga una copia completa del repositorio remoto en nuestra computadora y se crea una copia local del repositorio. Puede trabajar en la copia local del repositorio y hacer cambios en el código sin afectar el repositorio remoto.
* git add .
    * Agrega todos los archivos nuevos y modificados al área de preparación de Git.
* git status
    * Lo utilizamos para ver qué archivos están en el área de preparación y cuáles no.
* git commit -m "mensaje"
    * Git confirma los cambios en el repositorio local y agrega un mensaje de confirmación que describe los cambios realizados. El mensaje de confirmación es útil para para mantener un historial de cambios en el código.
* git log
    * Muestra una lista de todas las confirmaciones realizadas en el repositorio local, es útil para mantener un registro de los cambios realizados en el código y para revertir los cambios si es necesario.
* git pull
    * Sirve para actualizar el repositorio local de Git con los cambios realizados en el repositorio remoto, Git descarga los cambios realizados en el repositorio remoto y los fusiona con el repositorio local.
* git push
    * Se utiliza para enviar los cambios confirmados en el repositorio local de Git al repositorio remoto.
* git branch "nombre de la rama"
    * Crea una rama nueva con el nombre que le pongamos.
* git branch
    * Muestra una lista de todas las ramas en el repositorio local y resalta la rama actual.
* git checkout
    * Lo utilizamos para cambiar entre las distintas ramas.
* git merge
    * Fusiona dos ramas en el repositorio local de Git.

# Versionado
## Buenas prácticas

* Las buenas prácticas de Git son importantes para cualquier desarrollador de software y pueden ayudar a garantizar que el código sea fácil de mantener y actualizar. Algunas buenas prácticas de versionado de Git incluyen:

## Uso de ramas separadas de "main"

* Hacer commits pequeños y frecuentes, en lugar de grandes y poco precisos.
* El versionado de Git es una herramienta importante para cualquier desarrollador de software como explicamos en la parte anterior. Por lo tanto, utilizaremos distintas ramas para cada parte del proyecto.


## Resumen de commits y evolución del proyecto

* Realizar pruebas antes de realizar el commit para asegurarse de que el código funcione correctamente.
* Escribir mensajes de commits claros que describan lo realizado en el código.

# Elicitación

### Investigación:

La primera técnica de elicitación que decidimos usar fue la investigación ya que ninguno de los intergrantes del grupo tenía muy presente la condición de la celiaquía. Por lo cual realizamos un trabajo de investigación basándonos en diversas páginas que tuvieran un contenido avalado. Para así empezar a profundizar en el tema e identificar las primeras necesidades que podría tener un cliente potencial de nuesetra aplicación.

* La celiaquía es una enfermedad digestiva que daña el intestino delgado y altera la abosrbción de las vitaminas, minerales y demás nutrientes que contienen los alimentos. 

*  Algunas de las consecuencias de la enfermedad son : deficit nutricionales , bajo peso, retraso en el crecimiento.

* Es una enfermedad difícil de diagnosticar.

* Una de cada cien personas es celíaca en Uruguay.

* El precio de los productos sin glúten puede llegar a ser hasta 87 % mas cáros.

### Entrevista:

La siguiente técnica de elicitación que utilizamos fue la entrevista. En nuestro caso realizamos dos entrevistas a personas celíacas, cada una con perfiles y edades distintas para así obtener una perspectiva mas amplia de la condición y poder identificar la mayor cantidad de necesidades por parte de los potenciales usuarios.

Para realizar la entrevista decidimos basarnos en un prototipo de pregutnas, las cuales son abiertas para así no sesgar o forzar las respuestas y que el entrevistado pudiera explayarse en sus respuestas. 

A través de la entrevistas de las entrevistas realizadas obtuvimos las siguientes conclusiones:

* Las dificultades que se presentan a la hora de cocinar son el costo de los ingredientes y la preparación de las recetas, ya que son mas elaboradas al tener que utilizar otros tipos de harina que no contengan gluten.

* A la hora de buscar recetas en internet estas no son claras ni precisas.

* Una de los entrevistados nos comentó que le gustaría encontrar recetas que son difíciles de adaptar en una dieta sin gluten.

* A la hora de comprar hay baja disponibilidad y variedad de productos aptos para celíacos comparado con los que tienen glúten.

* En el caso de comer fuera de casa hay poca oferta de restaurantes que tengan un menú apto para celíacos o de locales de venta de comida sin glúten.

### LLuvia de ideas: 

Finalemente, basándonos en la información recolectada a través de la téncnica de investigación y la entrevista hicimos una lluvia de ideas para determinar features de la aplicación y el alcance de la misma.
Algunos puntos que se definieron fueron los siguientes:


* El sistema mostrará sugerencia de recetas que se encuentran disponibles

* El usuario podrá filtar las recetas por dificultad de y tiempo estimada de la misma.

* El usuario podrá agregar comida a favoritos

* Recomendación de locales que vendan productos aptos para celíacos

# Categorización de Usuarios: User Personas

![User Person Andres](img/UserPersonAndres(1).jpg)

![User Person Bettina](img/UserPersonBettina(1).jpg)

![User Person Nidia](img/UserPersonNidia(1).jpg)
# Modelo Conceptual del Problema

![Modelo conceptual del problema](img/MCP.jpg)

# Historia de Usuarios

## Historias de Usuario 1

### Titulo: Filtrar por Dificultad
* **Para** saber que tan dificl puede ser la receta
* **Como** usuario
* **Quiero** poder filtrar recetas por dificultad

### Criterios de Aceptación:
* El usuario debera estar en una de las pestañas de las comidas del dia 


## Historias de Usuario 2

### Titulo: Agregar a Favoritos

* **Como** usuario
* **Quiero** poder agregar a favoritos un plato en especifico
* **Para** poder visualizarlo mas tarde

### Criterios de Aceptación:
* Una misma receta no podra estar agregada dos veces

## Historias de Usuario 3

### Titulo: Interactuar en el Foro

* **Como** usuario
* **Quiero** poder comparir y leer resañas sobre las recetas 
* **Para** conocer distintas opinones sobre la misma

### Criterios de Aceptación:
* Debera llenar un formulario con datos de su nombre y direcciòn de correo
* Debe estar conectado a Internet


# ESPECIFICACIÓN
## Requerimientos Funcionales (RF)

### RF(1): Agregar a Favorito
**Actor :** Usuario

**Descripcion :** El usuario debera poder agregar una receta a su lista de favoritos

**Prioridad :** Baja

### RF(2): Filtrar por Comida del Dia
**Actor :** Usuario

**Descripcion :** El usuario debera poder filtrar las recetas segun el momento del dia

**Prioridad :** Media

### RF(3): Ingreso a la Aplicacion
**Actor :** Usuario

**Descripcion :** Al ingresar a la aplicacion debera mostrar sugerencias de recetas

**Prioridad :** Media


### RF(4): Filtrar por Dificultad
**Actor :** Usuario

**Descripcion :** El usuario debera filtrar las recetas segun la dificultad de la misma

**Prioridad :** Alta

### RF(5): Filtrar por Tiempo Estimado
**Actor :** Usuario

**Descripcion :** El usuario debera filtrar las recetas segun el tiempo estimado de la misma

**Prioridad :** Alta

### RF(6): Foro 
**Actor :** Usuario

**Descripcion :** El usuario podra interactura e intercambiar ideas sobre las recetas

**Prioridad :** Media


## Requerimientos No Funcionales (RNF)

### RNF(1):  Idiomas
**Descripcion :** El sistema debera soportar multiples lenguajes

### RNF(2):  Reseñas
**Descripcion :** El usuario podra dar una reseña de las recetas

### RNF(3):  Diseño y Usabilidad
**Descripcion :** El sistema debera ser atractivo y facil de usar

### RNF(4):  Seguridad
**Descripcion :** El sistema debera ser seguro y proteger los datos de los usuarios



# USE CASES 
## Caso de uso 1
### Actor:
Usuario
### Referencia a RF:
RF1
### Imagenes:
Imagen 1 y 2
### Pre condicion:
No hay
### Pos condicion:
La aplicacion 
agrega a la lista de favoritos el plato elegido
| **Accion de los actores:**| **Respuesta del sistema:**|
|-|-|
| 1. El usuario abre la aplicacion| 2. El sistema muestra el menu de inicio con botones para todos los alimentos del dia |
| 3. El usuario aprieta el boton que dice desayuno | 4. El sistema muestra todas las recetas que estan asociadas con el desayuno|
|4. El usuario aprieta la estrella de una receta que no tenga la estrella dorada|5. La estrella se vuelve dorada significando que se agrego correctamente a la lista de favoritos|
### Curso Alternativo
* **4.1 :** Usuario aprienta una estralla ya dorada
* **4.2 :** Sistema vuelve la estrella a su color original
* **4.3 :** Sistema quita la receta de favoritos

## Caso de uso 2
### Actor:
Usuario
### Referencia a RF:
RF2
### Imagenes:
Imagen 1 y 3
### Pre condicion:
No hay
### Pos condicion:
La aplicacion muestra las recetas que son para ese alimento del dia

| **Accion de los actores:**| **Respuesta del sistema:**|
|-|-|
| 1. El usuario abre la aplicacion| 2. El sistema muestra el menu de inicio con botones para todos los alimentos del dia |
| 3. El usuario aprieta el boton que dice desayuno | 4. El sistema muestra todas las recetas que estan asociadas con el desayuno|

## Caso de uso 3
### Actor:
Usuario
### Referencia a RF:
RF3
### Imagenes:
Imagen 1
### Pre condicion:
No hay
### Pos condicion:
La aplicacion muestra sugeridos
| **Accion de los actores:**| **Respuesta del sistema:**|
|-|-|
| 1. El usuario abre la aplicacion| 2. El sistema muestra el menu de inicio con platos sugeridos |

## Caso de uso 4
### Actor:
Usuario
### Referencia a RF:
RF4 y RF5
### Imagenes:
Imagen 3, 4 y 5
### Pre condicion:
El usuario esta en una seccion con una lista de platos
### Pos condicion:
La aplicacion permite filtrar por dificultad y por tiempo estimado de preparacion
| **Accion de los actores:**| **Respuesta del sistema:**|
|-|-|
| 1. El usuario aprieta el icono de filtros| 2. El sistema muestra una ventana con opciones para filtrar |
|3. El usuario elige la dificultad y rango de tiempo que quiere y aprieta en aplicar filtros|4. La lista seleccionada anteriormente se filtra entre los platos que cumplen los requerimientos pedidos|
## Curso Alternativo
* **3.1 :** Usuario selecciona una dificultad o rango de tiempo para el cual no existen recetas
* **3.2 :** Sistema muestra lista vacia

## Caso de uso 5
### Actor:
Usuario
### Referencia a RF:
RF6
### Imagenes:
Imagen 6 y 8
### Pre condicion:
El usuario esta en una seccion de mas info sobre un plato
### Pos condicion:
La aplicacion permite mostrar el foro en donde los usuarios pueden comentar sobre cada receta
| **Accion de los actores:**| **Respuesta del sistema:**|
|-|-|
| 1. El usuario aprieta en el boton de foro| 2. El sistema muestra una un formulario a llenar|
|3. El usuario completa los campos | 4. Sistema valida los campos|
|5. Usuario realiza el comentario | 6. Sistema publica el comentario|
## Curso Alternativo
* **3.1 :** Usuario no llena todos los campos
* **3.2 :** Sistema muestra error
* **5.1 :** Usuario sin conexion a internet
* **5.2 :** Sistema no publica el comentario


# BOCETOS DE LA INTERFAZ GRAFICA
## Imagen 1
### Seccion Menu
![Boceto Menu](img/BocetoUI-Menu.png)
## Imagen 2
### Seccion favoritos
![Boceto Favoritos](img/BocetoUI-Favoritos.png)
## Imagen 3
### Seccion desayunos
![Boceto Desayuno](img/BocetoUI-Desayuno.png)
## Imagen 4
### Seccion filtro
![Boceto Filtro](img/BocetoUI-Filtro.png)
## Imagen 5
### Seccion desayunos filtrados
![Boceto Desayuno Filtrado](img/BocetoUI-DesayunoFiltrado.png)
## Imagen 6
### Seccion mas info sobre galletas
![Boceto Galletas info](img/BocetoUI-GalletasInfo.png)
## imagen 7
### Seccion receta de las galletas
![Boceto Galletas Receta](img/BocetoUI-GalletasReceta.png)
## Imagen 8
### Seccion foro de las galletas
![Boceto Desayuno](img/BocetoUI-GalletasForo.png)

## VALIDACIÓN Y VERIFICACIÓN

### VALIDACIÓN
En lo que respecta a la validación de este proyecto, el mismo fue presentado a distintos grupos de terceros para su validación. Realizamos varias preguntas para obtener una devolución sobre su funcionamiento. 
Los usuarios que probaron el prototipo quedaron conformes con el mismo, pero nos dieron algunas sugerencias para mejorar la experiencia de usuario. Todas estas sugerencias seran aplicadas en un futuro cercano. 

### VERIFICACIÓN REQUERIMIENTOS
| **Requerimientos**                                 | RF1 | RF2 | RF3 | RF4 | RF5 | RF6 |
|----------------------------------------------------|-----|-----|-----|-----|-----|-----|
| **Correctitud**                                    |     |     |     |     |     |     |
| ¿Es viable?                                        | SI  | SI  | SI  | SI  | SI  | SI  |
| ¿Están  correctamente priorizados?                 | SI  | SI  | SI  | SI  | SI  | SI  |
| ¿Están los usuarios identificados?                 | SI  | SI  | SI  | SI  | SI  | SI  |
| ¿No hay conflictos con otros  requerimientos?      | SI  | SI  | SI  | SI  | SI  | SI  |
| ¿No incluye aspectos de diseño o  implementación?  | SI  | SI  | SI  | SI  | SI  | SI  |
| ¿Esta dentro del alcance del problema a  resolver? | SI  | SI  | SI  | SI  | SI  | SI  |
| **Verificabilidad y  no ambigüedad**               |     |     |     |     |     |     |
| ¿Es preciso y no  ambigüo?                         | SI  | SI  | SI  | SI  | SI  | SI  |
| ¿Es verificable?                                   | SI  | SI  | SI  | SI  | SI  | SI  |

### VERIFICACIÓN DE CASOS DE USO
| **Casos de Uso**                                       | Caso 1 | Caso 2 | Caso 3 | Caso 4 | Caso 5 |
|--------------------------------------------------------|--------|--------|--------|--------|--------|
| ¿Cumple un único objetivo?                             | SI     | SI     | SI     | SI     | SI     |
| ¿Queda claro quiénes  son los actores?                 | SI     | SI     | SI     | SI     | SI     |
| ¿Existe una secuencia  lógica de los pasos?            | SI     | SI     | SI     | SI     | SI     |
| ¿Está libre de detalles  de diseño e implementaciones? | SI     | SI     | SI     | SI     | SI     |
| ¿Se documentaron todos  los cursos alternativos?       | SI     | NO     | NO     | SI     | SI     |
## REFLEXIÓN

### Detalle del trabajo indivudual.


* **Agustín**: 

El trabajo fué realizado de manera conjunta entre los diversos integrantes del grupo. En mi caso me encargué de las técnicas de elicitación de investigación y realizando una de las entrevistas realizadas. Luego participé en la lluvia de ideas que realizamos a través de una discusión de github para poner sobre la mesas posibles features que tendría la aplicación. También participé con la especificación de los requerimientos funcionales y no funcionales.

* **Nicolás**: 

Los avances del proyecto fueron realizados en conjunto, cada uno de los integrantes del grupo aporto ideas y conocimientos para el desarrollo del mismo. En mi caso particular me encargue de la parte del versionado, donde profundizamos en las buenas practicas. Además de realizar los User Pesonas y las Historias de Usuarios. Por último aporte ideas para los requerimientos funcionales y no funcionales, asi como tambien para la verificación y validación de los mismos.

* **Joaquín**: 

El trabajo fue hecho de manera grupal con la ayuda de github, esto nos permitio trabajar al mismo tiempo sobre las mismas cosas sin generar muchos problemas. Yo en particular me enfoque en el armado de los bocetos de la interfaz, los use cases y el modelo conceptual del problema, pero ademas contrubui cosas especificas a las otras partes del trabajo como los requerimientos funcionales y no funcionales como tambien con la elicitacion.



### Técnicas aplicadas y aprendizaje.

En esta instancia de obligatorio tuvimos la oportunidad de aplicar lo aprendido hasta este punto del semestre. Pusimos en práctica las técnicas de elicitación vistas en clase, en nuestro caso fueron la investigación, entrevista y la lluvia de ideas.
También alpicamos lo aprendido de git y github para realizar el versionado del proyecto, lo cual nos resultó muy útil ya que nos permitió trabajar en paralelo y sin la necesidad de realizar llamdas constante para poder avanzar en el obligatorio.

Como conclusión creemos que fue una instancía en donde pudimos aplicar lo aprendido en clase y fortalecer los conceptos vistos. Además de poder trabajar en una parte del desarrollo muy interesante y no vista antes en la carrera hasta el momento.