from sqlalchemy import create_engine

def db_connection(path):
    engine = create_engine(path)
    connection = engine.connect()
    return connection

def append_to_sql(df, table_name, connection):
    try:
        df.to_sql(table_name, connection, if_exists='append', index=False)
        return 'Data saved succesfully.'
    except:
        return 'There was a problem saving data.'