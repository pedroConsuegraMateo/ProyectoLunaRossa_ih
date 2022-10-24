import pandas as pd
import re


def resenas_cleaning(resenas):
    
    cleaned_list = []
    for i in resenas:
        i = i.replace('.', '')

        match = re.search('\d*', i)
        cleaned_list.append(match.group(0))

    return cleaned_list


def pricing_cleaning(pricings):
    
    cleaned_list = []
    for i in pricings:
        
        match = re.search('€*$', i)
        cleaned_list.append(match.group(0))
        
    return cleaned_list

def get_direcciones(detalles):
    direcciones = [i[0] for i in detalles]
    return direcciones

def phone_numbers(detalles):

    final_list = []
    for i in detalles:
        for j in i:
            match = re.search('(\d*) (\d*) (\d*) (\d*)', j)
            try:
                final_list.append([i[0], match.group(0)])
            except:
                final_list.append([i[0], None])
    phones_df = pd.DataFrame(final_list)
    phones_df.dropna(inplace=True)
    phones_df = phones_df.rename(columns={0:'direccion', 1:'numero'})
    print(phones_df)
    
    return phones_df
            

def create_restaurantes_df(nombres, rates, nums_resenas, pricings, labels, descripciones, direcciones, urls, phone_numbers_df):
    data = {
        'nombre': nombres,
        'rate': rates,
        'resenas': nums_resenas,
        'precio': pricings,
        'labels': labels,
        'descripcion': descripciones,
        'direccion':direcciones,
        'url': urls
    }
    restaurantes_df = pd.DataFrame(data)
    restaurantes_df = pd.merge(restaurantes_df,phone_numbers_df,on='direccion', how='left')
    restaurantes_df = restaurantes_df.fillna('-')
    
    restaurantes_df = restaurantes_df.drop_duplicates()

    return restaurantes_df


