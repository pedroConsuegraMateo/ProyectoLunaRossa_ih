export const getRestaurantesRecomendados = async (id) => {
    
    const url = `http://127.0.0.1:3030/app/v1/recomendaciones?id=${id}`
    const resp = await fetch(url)
    const data = await resp.json()
    
    return data
}

export const getRestaurantesGuardados = async (id) => {

    const url = `http://127.0.0.1:3030/app/v1/saved?id=${id}`
    const resp = await fetch(url)
    const data = await resp.json()

    return data
  }



  export const getUserLocation = async () => {
    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(
            (response) => {
                resolve(response)
                return response
            },
            ( err ) => {
                reject()
                return coords
            }
        )
    })
  }


  export const getRestaurantesCercanos = async (coords) => {

    const url = `http://127.0.0.1:3030/app/v1/restaurantes/top?x=${coords[0]}&y=${coords[1]}`
    const resp = await fetch(url)
    const data = await resp.json()
    
    return data
            
  }