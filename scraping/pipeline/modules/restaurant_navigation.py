from numpy import random
import numpy as np
import time

from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.service import Service

def random_sleep():
    time.sleep(random.randint(3,5))

def drive_start(driver_path):
    service = Service(executable_path=driver_path)
    driver = webdriver.Firefox(service=service)
    return driver

def gmaps_search(site, cp):
    return f'https://www.google.com/search?q={site}+en+{cp}&rlz=1C5CHFA_enES1019ES1019&oq={site}+en+{cp}&aqs=chrome..69i57j69i60l3.4633j0j15&sourceid=chrome&ie=UTF-8'

def go_to_maps(url, driver):
    try: 
        driver.get(url)
        driver.maximize_window()
        cookie_button = driver.find_element(by=By.ID, value='L2AGLb')
        cookie_button.click()

        mapslink = driver.find_element(By.XPATH, '/html/body/div[8]/div/div[4]/div/div[1]/div/div[1]/div/div[2]/a')
        mapslink.click()
        return True
    except:
        return False
    
    

def full_scroll(driver):
    
    
    altura = driver.execute_script('return document.querySelector(".ecceSd").firstChild.scrollHeight')

    nueva_altura = 0
    while True:   

        driver.execute_script(f'document.querySelector(".ecceSd ").firstChild.scrollTo(0, {altura});')

        time.sleep(1)
        
        nueva_altura = driver.execute_script('return document.querySelector(".ecceSd").firstChild.firstChild.scrollHeight')
    
        altura = nueva_altura
        if altura == nueva_altura:
            break


def scroll_places(driver):
    while True:
        try:
            driver.find_element(By.CLASS_NAME, 'HlvSq')
            print('final')
            break
        except:
            full_scroll(driver)
            

def get_all_cards(driver):
    try:   
        cards = driver.find_elements(By.CLASS_NAME, 'hfpxzc')
        random_sleep()
        return cards
    except:
        return False
    
def cards_travel(driver, cards):
    nombres = []
    rates = []
    nums_resenas = []
    pricings = []
    detalles = []
    labels = []
    descripciones = []
    img = []
    urls = [i.get_attribute('href') for i in cards]

    for i in range(len(cards)):
        cards[i].click()

        random_sleep()

        try:
            nombre = driver.find_element(By.CLASS_NAME, 'DUwDvf').text
            nombres.append(nombre)
        except:
            nombres.append('')

        try:
            rate = driver.find_element(By.CLASS_NAME, 'fontDisplayLarge').text
            rates.append(rate)
        except:
            rates.append('')

        try:
            num_resenas = driver.find_element(By.CLASS_NAME, 'DkEaL').text
            nums_resenas.append(num_resenas)

        except:
            nums_resenas.append('')

        try:
            pricing = driver.find_element(By.CLASS_NAME, 'mgr77e').text
            pricings.append(pricing)
        except:
            pricings.append('')

        try:
            detalle = driver.find_elements(By.CLASS_NAME, 'rogA2c')
            detalles.append([i.text for i in detalle])
        except:
            detalles.append([''])

        try:
            label = driver.find_element(By.CLASS_NAME,'u6ijk').text
            labels.append(label)
        except:
            labels.append('')
        try:
            descripcion = driver.find_element(By.CLASS_NAME,'PYvSYb').text
            descripciones.append(descripcion)
        except:
            descripciones.append('')
        
        try:                                       
            image = driver.find_element(By.XPATH,'/html/body/div[3]/div[9]/div[9]/div/div/div[1]/div[3]/div/div[1]/div/div/div[2]/div[1]/div[1]/button/img' ).get_attribute("src")
            img.append(image)
        except:
            img.append('')
    
    return nombres, rates, nums_resenas, detalles, pricings, labels, descripciones, urls, img


def finish_driver(driver):
    driver.quit()
    return True


