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
    try:
        direcciones = [i[0] for i in detalles]
    except:
        direcciones = ['' for i in range(len(detalles))]
    return direcciones

def phone_numbers(detalles):

    final_list = []
    try:
        for i in detalles:
            for j in i:
                match = re.search('(\d*) (\d*) (\d*) (\d*)', j)
                try:
                    final_list.append([i[0], match.group(0)])
                except:
                    final_list.append([i[0], None])
    except:
        final_list = ['' for i in range(len(detalles))]
        
    phones_df = pd.DataFrame(final_list)
    phones_df.dropna(inplace=True)
    phones_df = phones_df.rename(columns={0:'direccion', 1:'numero'})
    
    return phones_df
            
def coordsExtractor(urls):
    x = [re.search('!3d\d\d.?\d{0,8}', i).group()[3:] for i in urls]
    y = [re.search('!4d-?\d\d?\.\d{0,8}', i).group()[3:] for i in urls]
    return x, y

def create_restaurantes_df(nombres, rates, nums_resenas, pricings, labels, descripciones, direcciones, urls, img, phone_numbers_df):
    
    x, y = coordsExtractor(urls)
    
    data = {
        'nombre': nombres,
        'rate': rates,
        'resenas': nums_resenas,
        'precio': pricings,
        'labels': labels,
        'descripcion': descripciones,
        'direccion':direcciones,
        'url': urls,
        'img': img,
        'x': x,
        'y': y
    }
    restaurantes_df = pd.DataFrame(data)
    restaurantes_df = pd.merge(restaurantes_df,phone_numbers_df,on='direccion', how='left')
    restaurantes_df = restaurantes_df.fillna('-')
    
    restaurantes_df = restaurantes_df.drop_duplicates()
    print(restaurantes_df)

    return restaurantes_df


