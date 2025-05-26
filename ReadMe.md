# Personal Dashboard 📊

## Project Overview

The **Personal Dashboard** is a simple yet functional web app built using only HTML, CSS, and JavaScript. This project showcases my ability to fetch and display dynamic data from multiple external APIs, including cryptocurrency prices, weather updates, and background images.

## Features

- **Dynamic Background**: Fetches and displays a random landscape image from the **Unsplash API** each time the page is loaded.
- **Cryptocurrency Prices**: Displays live data for **Dogecoin** using the **CoinGecko API**, including current price, 24-hour high, and low values.
- **Current Weather**: Retrieves and displays local weather based on geolocation, including temperature and city name, using the **OpenWeather API**.
- **Live Clock**: Displays the current time in **real-time** with a dynamic clock.

## Technologies Used

- **HTML**
- **CSS**
- **JavaScript** (with Fetch API for handling external data)
- **Unsplash API** for random background images
- **CoinGecko API** for cryptocurrency prices
- **OpenWeather API** for real-time weather data

## Live Demo

[View Live Dashboard](https://personal-dashboard-claudio.netlify.app/) <!-- Replace with actual link -->

## Repository

[GitHub Repository](https://github.com/claudiooleite/personal_dashboard) <!-- Replace with actual link -->

## Screenshots

### Dashboard View

![Dashboard Screenshot](./images/desktop-dashboard.png) <!-- Replace with actual image path -->





Challenge: get a random image from Unsplash and set it as the background

Part 1:

URL: https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=nature
(You can change the "query" at the end to whatever theme you want)

Change the body's backgroundImage to:
`url(<insert the URL of the iamge from the API here>)`

(You may need to dig around the response body a bit to find this URL)

(Note I've already added some CSS to resize the image within the window.
Instructions for this were found on CSS Tricks:
https://css-tricks.com/perfect-full-page-background-image/#awesome-easy-progressive-css3-way)

step :2 - add Author name
