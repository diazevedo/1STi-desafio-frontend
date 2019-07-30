function setCityData(city) {
  
  return {
         
    name: `${city.location.city}, ${city.location.region} - ${city.location.country}`,
    currentCondition: {
      degrees: `${city.current_observation.condition.temperature}°C`,
      condition: city.current_observation.condition.code,
      min: `${city.forecasts[0].low}°`,
      max: `${city.forecasts[0].high}°`,
      wind: `${city.current_observation.wind.speed.toFixed(0)}km/h`,
      feelsLike: Math.floor((city.current_observation.wind.chill -32) * 5 / 9) + 'º',
      humidity: `${city.current_observation.atmosphere.humidity}%`,
    },
    forecast: city.forecasts.slice(1, 5)
  }

}





export { setCityData as cityObject };