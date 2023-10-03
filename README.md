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
### Entrevista:



### LLuvia de ideas: 

Basándonos en la información recolectada a través de la téncnica de investigación y la entrevista hicimos una lluvia de ideas para determinar features de la aplicación y el alcance de la misma.
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

### RF(7): Responsive 
**Actor :** Sistema

**Descripcion :** El sistema debera ser responsive 

**Prioridad :** Alta

## Requerimientos No Funcionales (RNF)

### RNF(1):  Idiomas
**Descripcion :** El sistema debera soportar multiples lenguanjes

### RNF(2):  Reseñas
**Descripcion :** El usuario podra dar una reseña de las recetas

### RNF(3):  Diseño y Usabilidad
**Descripcion :** El sistema debera ser atractivo y facil de usar

### RNF(4):  Seguridad
**Descripcion :** El sistema debera ser seguro y proteger los datos de los usuarios

# USE CASES 
## Caso de uso 1
#### Actor:
Usuario
#### Referencia a RF:
RF2
#### Imagenes:
Imagen 1 y 2
#### Pre condicion:
No hay
#### Pos condicion:
La aplicacion mustra las recetas que son para ese alimento del dia

| **Accion de los actores:**| **Respuesta del sistema:**|
|-|-|
| 1. El usuario abre la aplicacion| 2. El sistema muestra el menu de inicio con botones para todos los alimentos del dia |
| 3. El usuario aprieta el boton que dice desayuno | 4. El sistema muestra todas las recetas que estan asociadas con el desayuno|

# BOCETOS DE LA INTERFAZ GRAFICA
## Imagen 1
### Menu
![Boceto Menu](img\BocetoUI-Menu.png)
## Imagen 2
### Seccion desayunos
![Boceto Desayuno](img\BocetoUI-Desayuno.png)
## Imagen 3
### Mas info sobre galletas
![Boceto Galletas info](img\BocetoUI-GalletasInfo.png)
## imagen 4
### Receta de las galletas
![Boceto Galletas receta](img\BocetoUI-GalletasReceta.png)