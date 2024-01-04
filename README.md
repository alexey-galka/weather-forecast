# Weather Forecast App

## Default State
- The left-hand list displays all available cities sorted alphabetically from A to Z.
- The favorite cities list (on the right) is initially empty, with the text: "Drag cities here whose weather interests you."
- The map initially shows the city of Saint Petersburg.

## Sorting
- Cities can be sorted alphabetically, both ascending (A to Z) and descending (Z to A).
- Sorting options are controlled via toggles in the top-left corner.

## Search
- Instant search triggers after each entered/deleted symbol.
- The general list displays cities containing the entered letter or combination of letters.
- If no matches are found, the list remains empty.

## Moving Cities
### From General to Favorites
- Cities from the general list can be moved to the favorites list.
- Movement occurs through drag and drop, grabbing the city icon (located on the right of the city card) and dropping it into the favorites list.
- The city disappears from the general list and appears in the favorites list with added wind information and weather icons.

### From Favorites to General
- Cities from the favorites list can be moved back to the general list.
- Movement occurs through drag and drop, grabbing the city icon (located in the top-left corner of the city card) and dropping it into the general list.
- The city disappears from the favorites list, reappears in the general list according to the sorting order (alphabetically), and loses wind and weather icons, retaining only the city name and temperature.

## Moving Within Lists
- Moving cities within the general city list is not allowed; they are arranged in strict alphabetical order.
- Cities in the favorites list can be rearranged in any order within that list.

## Filtering Favorite Cities
- Favorite cities can be filtered by weather using buttons above the favorites list.
- Filters are selected by clicking the weather button and deselected by a subsequent click.
- Filters can be combined; multiple options can be chosen simultaneously.
- For example, selecting rain will display cities where it is currently raining. If rain and sunshine are selected simultaneously, it will display cities experiencing both rain and sunshine.
- Button designations from left to right: rain, sunny, cloudy, snow, blizzard, thunderstorm, meteor shower.
- To show the entire list of favorite cities, remove all filters.

## Map and List Interaction
- All favorite cities have markers on the map.
- Clicking on a city in the favorites highlights it in the list, centers the map's viewport on its marker, and also highlights the marker.
- Hovering over a city in the favorites highlights the marker on the map if it is within the viewport.
- Reverse interaction: hovering over a city marker on the map highlights the marker and the corresponding city in the favorites list.

## Map Engine
- The map engine can be any chosen by the developer, such as Yandex.Maps, Google Maps, or Leaflet.

## Data
- Data is stored in JSON format.
- Data includes:
  - City name.
  - Temperature in Celsius.
  - Weather in the city.
  - Wind data: direction and speed.
# weather-forecast
