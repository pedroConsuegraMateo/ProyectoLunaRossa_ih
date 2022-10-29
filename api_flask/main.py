from urllib import request
from flask import Flask
from flask import request
from tools import db_manager
from tools import df_manager
import pandas as pd

app = Flask(__name__)



@app.route('/app/v1/restaurantes', methods=['GET'])
def getRestaurantesCercanos():
    db_connection = db_manager.Db_manager()
    x = float(request.args.get('x', '40.4156071'))
    y = float(request.args.get('y', '-3.6927362'))
    
    query = f'SELECT * FROM restaurantes'
    rest = db_connection.getRestaurantesByQuery(query)
    
    rest = df_manager.df_with_distances(rest, x, y)
    
    nearby_rest = df_manager.nearby_places(rest)

    response = nearby_rest.to_json(orient='records')
    return response

@app.route('/app/v1/restaurantes/top', methods=['GET'])
def getTopRestaurantesPopulares():

    db_connection = db_manager.Db_manager()
    x = float(request.args.get('x', '40.4156071'))
    y = float(request.args.get('y', '-3.6927362'))
    
    query = f'SELECT * FROM restaurantes'
    rest = db_connection.getRestaurantesByQuery(query)
    
    rest = df_manager.df_with_distances(rest, x, y)
    
    nearby_rest = df_manager.nearby_places(rest)
    top = df_manager.top_restaurants(nearby_rest)
    response = top.to_json(orient='records')
    return response

@app.route('/app/v1/restaurantes/exp', methods=['GET'])
def getTopRestaurantesCaros():

    db_connection = db_manager.Db_manager()
    x = float(request.args.get('x', '40.4156071'))
    y = float(request.args.get('y', '-3.6927362'))
    
    query = f'SELECT * FROM restaurantes'
    rest = db_connection.getRestaurantesByQuery(query)
    
    rest = df_manager.df_with_distances(rest, x, y)
    
    nearby_rest = df_manager.nearby_places(rest)
    top = df_manager.top_expensive_restaurants(nearby_rest)
    response = top.to_json(orient='records')

    return response

@app.route('/app/v1/restaurantes/cheap', methods=['GET'])
def getTopRestaurantesBaratos():

    db_connection = db_manager.Db_manager()
    x = float(request.args.get('x', '40.4156071'))
    y = float(request.args.get('y', '-3.6927362'))
    
    query = f'SELECT * FROM restaurantes'
    rest = db_connection.getRestaurantesByQuery(query)
    
    rest = df_manager.df_with_distances(rest, x, y)
    
    nearby_rest = df_manager.nearby_places(rest)
    top = df_manager.top_cheap_restaurants(nearby_rest)
    response = top.to_json(orient='records')
    return response

@app.route('/app/v1/saved', methods=['GET', 'POST', 'DELETE'])
def restaurantesGuardados():
    
    db_connection = db_manager.Db_manager()
    id = float(request.args.get('id', '1'))
    
    if(request.method == 'POST'):

        place_raw = request.json
        place = pd.DataFrame(place_raw)
        db_connection.postLugar(place, 'restaurantes_visitados', 'append')
        
        return 'guardado'
    
    if(request.method == 'DELETE'):
        # Lógica de eliminar lugar guardado
        place_raw = request.json
        place = pd.DataFrame(place_raw)
        
        return 'eliminado'
    
    saved = db_connection.getRestaurantesGuardados(id)
    response = saved.to_json(orient='records')
    print(type(saved))
    return response

@app.route('/app/v1/saved', methods=['POST', 'DELETE'])
def usuarioManager():
    
    db_connection = db_manager.Db_manager()
    if(request.method == 'POST'):
        pass
        

app.run(port=3030, debug=True)



