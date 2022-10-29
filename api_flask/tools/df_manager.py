import pandas as pd
import math

def df_with_distances(df, x, y):
    df['distances'] = df.apply(
    lambda row: math.sqrt((x-float(row.x))**2+(y-float(row.y))**2), axis=1)
    return df

def nearby_places(df, l=25):
    return df.sort_values('distances', ascending=True).reset_index().head(l)

def top_restaurants(df):
    df['resenas'] = df['resenas'].astype('int')
    df['rate'] = df['rate'].apply(lambda x: x.replace(',', '.')).astype('float64')
    return df.sort_values(by=['resenas', 'rate'], ascending=False).reset_index().head(5)

def top_expensive_restaurants(df):
    expensive_rest = df[df['precio'] == '€€€']
    return expensive_rest.sort_values(by=['resenas', 'rate'], ascending=False).reset_index()

def top_cheap_restaurants(df):
    expensive_rest = df[df['precio'] == '€']
    return expensive_rest.sort_values(by=['resenas', 'rate'], ascending=False).reset_index()