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
        
        
        

