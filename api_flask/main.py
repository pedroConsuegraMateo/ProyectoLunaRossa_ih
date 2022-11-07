from urllib import request
from flask import Flask
from flask import request
from tools import db_manager
from tools import df_manager
import pandas as pd
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/app/v1/restaurantes-tipo', methods=['GET'])
def getRestaurantesByLabel():
    db_connection = db_manager.Db_manager()
    label = request.args.get('label')
    
    restaurantesByLabel = db_connection.getRestaurantesByLabel(label)

    response = restaurantesByLabel.to_json(orient='records')
    
    return response


@app.route('/app/v1/restaurantes/top', methods=['GET'])
def getTopRestaurantesPopulares():

    db_connection = db_manager.Db_manager()
    x = float(request.args.get('x'))
    y = float(request.args.get('y'))
    
    query = f'SELECT * FROM restaurantes'
    rest = db_connection.getRestaurantesByQuery(query)
    
    rest = df_manager.df_with_distances(rest, x, y)
    
    nearby_rest = df_manager.nearby_places(rest)
    
    top = df_manager.top_restaurants(nearby_rest)
    response = top.to_json(orient='records')
    print(nearby_rest)
    return response


@app.route('/app/v1/saved', methods=['GET', 'POST', 'DELETE'])
def restaurantesGuardados():
    
    db_connection = db_manager.Db_manager()
    id = float(request.args.get('id', '1'))
    
    if request.method == 'POST':

        place_raw = request.json
        place = pd.DataFrame(place_raw)
        db_connection.postLugar(place, 'restaurantes_visitados', 'append')
        
        return 'guardado'
    
    if request.method == 'DELETE':

        db_connection.deleteLugar(id, 'restaurantes_visitados')
        
        return 'eliminado'
    
    saved = db_connection.getRestaurantesGuardados(id)
    response = saved.head(8).to_json(orient='records')
    
    return response

@app.route('/app/v1/recomendaciones', methods=['GET'])
def restaurantesRecomendados():
    
    db_connection = db_manager.Db_manager()
    id = float(request.args.get('id', '1'))
    
    query = '''
                SELECT r.id, r.nombre, r.rate, r.resenas, r.precio, r.labels, r.descripcion, r.direccion, r.url, r.numero, r.img, rv.rate as 'puntuacion', rv.id_usuario  
                FROM restaurantes r
                INNER JOIN restaurantes_visitados rv ON r.id = rv.id_restaurante
            '''
    restaurantes = db_connection.getRestaurantesByQuery(query)
    
    recomendaciones = df_manager.getRecomendaciones(restaurantes, id)
    response = recomendaciones.to_json(orient='records')
    
    return response

@app.route('/app/v1/todos')
def getAllRestaurantes():
    
    db_connection = db_manager.Db_manager()
    
    query = 'SELECT * FROM restaurantes'
    
    restaurantes = db_connection.getRestaurantesByQuery(query)
    restaurantes = df_manager.transformRateAndResenas(df)
    response = restaurantes.to_json(orient='records')
    
    return response
    
    

app.run(port=3030, debug=True)



