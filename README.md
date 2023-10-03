  Informe academico Entrega 1
  

| **Identificación** |
|----------|
| Fundamentos en Ingenieria de Sofware    |
| M4B - Docente Alejandro Adorjan    |
| Joaquin Rega, Agustin Robaina, Nicolas Tormbotti    |

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

**Descripcion :** El usuario podra interactura e interacmbiar ideas 

**Prioridad :** Media


## Requerimientos No Funcionales (RNF)

### RNF(1):  Idiomas
**Descripcion :** El sistema debera soportar multiples lenguanjes

### RNF(2):  Reseñas
**Descripcion :** El usuario podra dar una reseña de las recetas

### RNF(3):  Diseño y Usabilidad
**Descripcion :** El sistema debera ser atractivo y facil de usar

### RNF(4):  Seguridad
**Descripcion :** El sistema debera ser seguro y proteger los datos de los usuarios

## Historias de Usuario 1

### Titulo: Filtrar por Dificultad

* **Como** usuario
* **Quiero** poder filtrar recetas por dificultad
* **Para** saber que tan dificl puede ser la receta

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

### Titulo: Interacuar en el Foro

* **Como** usuario
* **Quiero** poder comparir y leer resañas sobre las recetas 
* **Para** conocer distintas opinones sobre la misma

### Criterios de Aceptación:
* El usuario debrera tener un nombre de usuario asociado
* Debe estar conectado a Internet