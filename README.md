# ProyectoLunaRossa
#### Por Pedro Consuegra - Ironhack Data Analytics Part Time Mayo 2022

## Breve descripción

Este proyecto es una aplicación cuyo fin es recomendar restaurantes en base a cercanía al usuario y popularidad y recomendaciones en base a los gustos de otros usuarios. También es un área de juego en la que practicar, aprender o experimentar en el campo del manejo de datos y el desarrollo de software. La escalabilidad siempre ha sido la principal idea del proyecto.

### Composición

La aplicación se compone de 4 partes:

#### Scraper

Extraigo los datos de restaurantes de Google Maps usando principalmente Selenium. Una vez extraída toda la información, el siguiente paso del pipeline es limpiar y preparar el dato, eliminar duplicados y formar un DataFrame. A continuación, esta parte se cierra grabando los datos en la tabla correspondiente (restaurantes) de la base de datos.

#### Base de Datos

La base de datos se ha hecho de tal forma que permita añadir nuevas funcionalidades a la aplicación. Guarda datos de restaurantes, usuarios y sus comportamientos.

#### Api

La api sirve los datos al Front. Hay distintas rutas para poder hacer GET, POST o DELETE de diferentes datos en función de las peticiones del usuario. Sirve los restaurantes top más cercanos al usuario, los restaurantes que el usuario ha guardado en su cuenta y los restaurantes recomendados en base a otros usuarios, calculados mediante ML con el algoritmo de similitud de cosenos.

#### Frontend

Actualmente el Frontend es una aplicación web, aunque está previsto que sea una aplicación móvil. El usuario puede logearse o registrarse y después accederá a un panel en el que le sugiera diferentes lugares.

## Stack Tecnológico

- **python 3.9.13**
- numpy==1.23.1
- pandas==1.4.4 
- flask==2.1.3
- flask==cors 3.0.10
- fuzzywuzzy==0.18.0
- sqlite==3.39.3
- sqlalchemy==1.4.39 
- selenium==4.5.0
---
- **react==^18.2.0**
- **nodejs==8.18.0**  
- react-router-dom==^6.4.2
- vite==^3.1.0
- material-ui==^5.10.11
- axios==^1.1.3
- scipy==1.7.3

## Next Steps

- Añadir accesibilidad y responsive a la ui
- Buscador de restaurantes en base a tipo de comida
- Buscador de restaurantes en base a tipo de velada
- Añadir análisis de sentimiento a partir de los comentarios en google maps
- Mejorar distancias restaurante-usuario con geopandas
- Mejorar scraper para extraer más datos y de más restaurantes
- Automatizar scraper
- Optimizar frontend
- Posibilidad de puntuación de los restaurantes en el front.
- Añadir seguridad con JWT
- Mejorar recomendador a partir del comportamiento del usuario
- Extraer actividad del usuario (clics, etc)
- Pasar tabla restaurantes RAW a GOLD


#### Status
project version: alpha

### Agradecimientos

A mis dos profesores, Octavio y Victor por su ayuda y enseñar tan jodidamente bien.
Y a Jonathan, por sus consejos y sus ideas, por dejarme tiempo para trabajar en esto y por su confianza. Esto acaba de empezar.