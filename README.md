# ProyectoLunaRossa
#### Por Pedro Consuegra - Ironhack Data Analytics Part Time Mayo 2022

---

## Breve descripción

Este proyecto es una aplicación cuyo fin es recomendar restaurantes en base a cercanía al usuario y popularidad y recomendaciones en base a los gustos de otros usuarios. También es un área de juego en la que practicar, aprender o experimentar en el campo del manejo de datos y el desarrollo de software. La escalabilidad siempre ha sido la principal idea del proyecto.

![meme ux data web](/lunaRossaFrontEnd/src/assets/meme1.png)

### Composición

La aplicación se compone de 4 partes:

#### 🤖 Scraper

Extraigo los datos de restaurantes de Google Maps usando principalmente Selenium. Una vez extraída toda la información, el siguiente paso del pipeline es limpiar y preparar el dato, eliminar duplicados y formar un DataFrame. A continuación, esta parte se cierra grabando los datos en la tabla correspondiente (restaurantes) de la base de datos.

#### 💿 Base de Datos

La base de datos se ha hecho de tal forma que permita añadir nuevas funcionalidades a la aplicación. Guarda datos de restaurantes, usuarios y sus comportamientos.

#### 💽 Api

La api sirve los datos al Front. Hay distintas rutas para poder hacer GET, POST o DELETE de diferentes datos en función de las peticiones del usuario. Sirve los restaurantes top más cercanos al usuario, los restaurantes que el usuario ha guardado en su cuenta y los restaurantes recomendados en base a otros usuarios, calculados mediante ML con el algoritmo de similitud de cosenos.

#### 💫 Frontend

Actualmente el Frontend es una aplicación web, aunque está previsto que sea una aplicación móvil. El usuario puede logearse o registrarse y después accederá a un panel en el que le sugiera diferentes lugares.

## 👨🏼‍💻 Stack Tecnológico

- **python**
- numpy
- pandas 
- flask
- flask
- sqlite
- sqlalchemy
- selenium
- scipy
- plotly
---
- **react**
- nodejs  
- react-router-dom
- vite
- material-ui
- axios
- React Chart.js 2

## 🚀 Next Steps

- Pasar tabla restaurantes RAW a GOLD
- Buscador de restaurantes en base a tipo de velada
- Mejorar distancias restaurante-usuario con geopandas
- Mejorar scraper para extraer más datos y de más restaurantes
- Automatizar scraper
- Añadir análisis de sentimiento a partir de los comentarios en google maps
- Mejorar recomendador a partir del comportamiento del usuario
- Optimizar frontend
- Posibilidad de puntuación de los restaurantes en el front.
- Añadir accesibilidad y responsive a la ui
- Extraer actividad del usuario (clics, etc)
- Añadir seguridad con JWT
- Continuar con visualización de datos en Frontend con React
- **Seguir trabajando**

## 🗂 Estructura Principal
```
└── LunaRossa
    ├── __trash__
    ├── .gitignore
    ├── .env
    ├── api_flask 
    |       ├── documentacion
    |       ├──  tools
    |       |       |── db_manager.py
    |       |       |── decorators.py
    |       |       └── df_manager.py
    |       └── main.py
    |
    ├── scraper
    |       ├── documentacion
    |       ├── data
    |       ├── notebooks
    |       |       ├── eda_restaurantes.ipynb
    |       |       └── scraper_notebook.ipynb 
    |       |    
    |       ├── pipeline
    |       |       ├── modules
    |       |       |       ├── db_saving.py
    |       |       |       ├── restaurant_navigation.py
    |       |       |       └── restaurants_cleaning_data.py
    |       |       |
    |       |       └── restaurantes_scrape.py 
    |       |    
    │       └── resources
    |               ├── chrome_driver
    |               └── firefox_driver
    |
    ├── lunaRossaFrontEnd 
    ├── db
    └── README.md
```
## 🧐 Cómo funciona

Al lanzar el script de scrapeo, con selenium extraigo los datos de cada tarjeta de restaurante que encontramos en google maps con la palabra clave que introducimos al principio. Un pain point en esta parte fue la forma de maps de mostrarte los lugares: se renderizan en función vas haciendo scroll hacia abajo. Para saltar este punto la función full_scroll hace un loop donde ejecuta código javascript para arrastrar un punto hacia abajo hasta que se encuentra el mensaje de que no hay más resultados.

Una vez hecho todo el scroll hemos cargado todos los elementos y ahora selenium irá clicando uno a uno, presentando así la información detallada de cada lugar, de donde extrae la información.

Con la información extraída, limpiamos los datos con regex y creamos una lista de elementos por columna de la base de datos. Creamos un dataframe con todo y guardamos en la tabla restaurantes de la base de datos (próximamente tabla restaurantes_raw).

Tenemos los datos guardados, ahora la siguiente fase es ofrecer diferentes formas de muestra con flask. Hay distintas rutas: podemos hacer una petición de los restaurantes recomendados para cada usuario. Estas recomendaciones se hacen usando machine learning y el algoritmo de similitud de cosenos, apoyándonos en otra tabla de la base de datos que recoge el feedback que los usuarios dan sobre restaurantes (la puntuación o rate). Otra ruta nos dará los restaurantes que el usuario guarde para sí. Podemos ofrecer restaurantes cercanos al usuario (se calculan las distancias a cada restaurante desde la ubicación del usuario, extraída al iniciar sesión. Si no permite la geolocalización, esta funcionalidad no está disponible para ese usuario). Por último, a través de diferentes querys se ofrecen restaurantes por tipo de comida (actualmente servidas en al usuario de antemano, próximamente el usuario podría realizar una búsqueda personalizada).

El frontend es una web app en la que el usuario puede ver los diferentes restaurantes y opciones que se sirven desde la api. Hay logeo de usuarios y cada usuario puede disponer de una información personalizada para él. He añadido una zona en la que puedo ver diferentes insights de los restaurantes, con visualización de datos y gráficas hechas con React Chart.js. Esta funcionalidad está en construcción y en principio no será para usuarios si no para mí o el administrador de la aplicación.

## 🪜 La clave de todo: la escalabilidad

Todas las partes de la aplicación se han construido desde el principio con una idea: seguir trabajando en esto. Queda mejorar el método de extracción de datos, nuevas funcionalidades en la api, mejorar el diseño ui y hacerlo responsive en móvil y accesible para cualquier persona. Hacer testing tanto en python en la api como en el frontend con React. Limpiar el código y refactorizar. Etcétera.

### Status
version: alpha

### 🙏🏼 Agradecimientos

A mis dos profesores, Octavio y Victor por su ayuda y enseñar tan jodidamente bien.
Y a Jonathan, por sus consejos y sus ideas, por dejarme tiempo para trabajar en esto y por su confianza. Esto acaba de empezar.