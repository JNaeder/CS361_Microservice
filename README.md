# CS361 Weather Microservice

## How to Request Data

Send an HTTP GET request to the following URL:

    https://cs361weather.onrender.com/weather

With the following query parameters:

- **lat** (Latitude of location) ex. 48.8566
- **long** (Longitude of location) ex. 2.3522

**Example:**

    https://cs361weather.onrender.com/weather?lat=48.8566&long=2.3522

## How to Receive Data

Response is a JSON Object with the following key-value pairs:

- **name** - Name of the city
- **region** - Name of the region
- **country** - Name of the country
- **temp_celsius** - Temperature in Celsius
- **temp_fahrenheit** - Temperature in Fahrenheit
- **phrase** - Random phrase based on the temperature.

**Example:**

    {
        "name":"Paris",
        "region":"Ile-de-France",
        "country":"France",
        "temp_celsius":"10",
        "temp_fahrenheit":"50",
        "phrase":"I could stay out here all day in this weather."
    }

## UML Sequence Diagram

![UML Sequence Diagram](/Screenshot%202023-02-14%20001753.jpg)
