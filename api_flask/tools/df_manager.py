import pandas as pd
import numpy as np
from scipy.spatial.distance import pdist, squareform
import math

def df_with_distances(df, x, y):
    df['distances'] = df.apply(
    lambda row: math.sqrt((x-float(row.x))**2+(y-float(row.y))**2), axis=1)
    return df

def nearby_places(df, l=12):
    response = df.sort_values('distances', ascending=True).reset_index().head(4)
    return response

def top_restaurants(df):
    df['resenas'] = df['resenas'].astype('int')
    df['rate'] = df['rate'].apply(lambda x: x.replace(',', '.')).astype('float64')
    return df.sort_values(by=['resenas', 'rate'], ascending=False).reset_index().head(4)

def getRecomendaciones(df, id_usuario):
    restVSuser = pd.pivot_table(df, values='puntuacion', index='id', columns=['id_usuario'])
    restVSuser = restVSuser.fillna(2.5)

    euclid_dist_norm = pd.DataFrame(1/(1 + squareform(pdist(restVSuser.T, 'euclidean'))),
                                index=restVSuser.columns,
                                columns=restVSuser.columns)
    euclid_simil_norm = euclid_dist_norm[id_usuario].sort_values(ascending=False)[1:]
    euclid_simil_items = dict(euclid_simil_norm).items()
    
    for id_, puntuacion in euclid_simil_items:
        restVSuser[id_] = restVSuser[id_] * puntuacion
        
    restVSuser['weights'] = restVSuser.sum(axis=1)
    restVSuser = restVSuser.sort_values('weights', ascending=False)
    
    top8 = restVSuser[['weights']].head(4)
    
    recomendaciones = df[df['id'].isin(top8.index)].drop(columns=['puntuacion', 'id_usuario']).drop_duplicates()
    
    return recomendaciones

def transformRateAndResenas(df):
    df['resenas'] = df['resenas'].astype('int')
    df['rate'] = df['rate'].apply(lambda x: x.replace(',', '.')).astype('float64')
    
    return df