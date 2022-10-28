from urllib import request, response
from flask import Flask
from flask import request
from sqlalchemy import create_engine
import pandas as pd

def db_connection(path):
    engine = create_engine(path)
    connection = engine.connect()
    return connection


app = Flask(__name__)

@app.route('/app/v1/restaurantes/user/<id>', methods=['GET', 'POST'])
def getRestaurantesByUserId(id):
    path = f'sqlite:///../../ih_final_project_DB/ih_final_project'
    con = db_connection(path)
    label = request.args.get('label', 'restaurante')
    
    
    query = f'SELECT * FROM restaurantes WHERE labels LIKE "%{label}%"'
    rest = pd.read_sql(query, con)
    
    
    response = rest.to_json()
    return response

app.run(debug=True)


