#import singleton_decorator as singleton
from tools.decorators import singleton
from sqlalchemy import create_engine
import pandas as pd



class Db_manager():
    
    def __init__(self) -> None:
        super().__init__()
        self.path = f'sqlite:///../../ih_final_project_DB/ih_final_project'
        self.engine = create_engine(self.path)
        self.connection = self.engine.connect()
        
    
    def getRestaurantesByQuery(self, query):
        connection = self.connection
        result = pd.read_sql(query, connection)
        return result.drop_duplicates(subset=['direccion'])
    
    def getRestaurantesGuardados(self, id_usuario):
        connection = self.connection
        
        query = f'''
                    SELECT r.id, r.nombre, r.rate, r.resenas, r.precio, r.labels, r.descripcion, r.direccion, r.url, r.numero, r.img  FROM restaurantes r
                    INNER JOIN restaurantes_visitados ON r.id = restaurantes_visitados.id_restaurante
                    WHERE id_usuario = {id_usuario}
                '''
        result = pd.read_sql(query, connection)
        return result.drop_duplicates(subset=['direccion']).head(8)
    
    def getRestaurantesByLabel(self, label):
        connection = self.connection
        
        if label == 'italiana':
            query = '''
                        SELECT * FROM restaurantes r 
                        WHERE r.labels LIKE "%italia%" 
                        OR r.labels LIKE "%pizz%"
                    '''
            pass
        elif label == 'latina':
            query = '''
                        SELECT * FROM restaurantes r 
                        WHERE r.labels LIKE "%latin%" 
                        OR r.labels LIKE "%colombi%" 
                        OR r.labels LIKE "%ecuatoria%" 
                        OR r.labels LIKE "%caribe%"
                        OR r.labels LIKE "%argenti%" 
                        OR r.labels LIKE "%venez%"
                        OR r.labels LIKE "%meji%" 
                        OR r.labels LIKE "%mexi%" 
                    '''
            pass
        elif label == 'espanola':
            query = '''
                        SELECT * FROM restaurantes r 
                        WHERE r.labels LIKE "%castella%" 
                        OR r.labels LIKE "%españ%" 
                        OR r.labels LIKE "%mediterra%" 
                        OR r.labels LIKE "%galleg%"
                        OR r.labels LIKE "%asturia%" 
                        OR r.labels LIKE "%andalu%"
                    '''
            pass
        elif label == 'asiatica':
            query = '''
                        SELECT * FROM restaurantes r 
                        WHERE r.labels LIKE "%chino%" 
                        OR r.labels LIKE "%japo%" 
                        OR r.labels LIKE "%sushi%" 
                        OR r.labels LIKE "%corea%"
                        OR r.labels LIKE "%asia%" 
                        OR r.labels LIKE "%canton%"
                        OR r.labels LIKE "%mandarin%"
                    '''
            pass
        elif label == 'tomar-algo':
            query = '''
                        SELECT * FROM restaurantes r 
                        WHERE r.labels LIKE "%bar%" 
                        OR r.labels LIKE "%tapas%" 
                        OR r.labels LIKE "%copas%" 
                        OR r.labels LIKE "%pub%"
                    '''
        else:
            query = 'SELECT * FROM restaurantes'

        
        result = pd.read_sql(query, connection).head(8)
        return result.drop_duplicates(subset=['direccion'])
        
    
    def postLugar(self, data, table_name, if_exists):
        try:
            data.to_sql(table_name, self.connection, if_exists=if_exists, index=False)
            return True
        except:
            return False
        
    def deleteLugar(self, id, table_name):
        connection = self.connection
        query = f'''
                DELETE FROM {table_name} WHERE id_usuario={id}
                '''
        try:
            pd.read_sql(query, connection)
            return 'Eliminado'
        except:
            return 'Hubo un problema al borrar el registro.'
        
        
        

