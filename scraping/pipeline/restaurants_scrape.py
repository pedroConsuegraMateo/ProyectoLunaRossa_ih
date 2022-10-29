
from numpy import random
import numpy as np
import time

from modules import restaurant_navigation as rn
from modules import restaurants_cleaning_data as rcd
from modules import db_saving as dbs


def random_sleep():
    time.sleep(random.randint(0,5))
    


if __name__ == '__main__':
    
    driver_path = '../resources/firefox_driver/geckodriver'
    cp = input('Introduce un código postal: ')
    site = 'restaurantes'
    
    driver = rn.drive_start(driver_path)
    
    url = rn.gmaps_search(site, cp)
    rn.go_to_maps(url, driver)
    
    random_sleep()
    
    rn.scroll_places(driver)
    
    cards = rn.get_all_cards(driver)
    
    random_sleep()
    
    nombres, rates, nums_resenas, detalles, pricings, labels, descripciones, urls, img = rn.cards_travel(driver, cards)
    
    random_sleep()
    
    rn.finish_driver(driver)
    
    resenas = rcd.resenas_cleaning(nums_resenas)
    pricings = rcd.pricing_cleaning(pricings)
    direcciones = rcd.get_direcciones(detalles)
    phone_numbers = rcd.phone_numbers(detalles)
    
    restaurantes = rcd.create_restaurantes_df(nombres, rates, resenas, pricings, labels, descripciones, direcciones, urls, img, phone_numbers)
    
    db_path = f'sqlite:///../../../ih_final_project_DB/ih_final_project'
    
    connection = dbs.db_connection(db_path)
    dbs.append_to_sql(restaurantes, 'restaurantes', connection)
        
    print('Finished!!')