# Search_Suggestion

This project provides a simple search autocomplete feature where a list of search queries is filtered and displayed dynamically as the user types. It suggests search queries based on the input, sorted by search volume. It is a client-side application built using HTML, CSS, and JavaScript.

## Features

- **Autocomplete Search**: Suggests search queries as the user types in the input field.
- **Search Volume Sorting**: Results are sorted based on search volume, showing the most popular queries first.
- **Scrollable Results**: If there are too many results, the list is scrollable to prevent layout disruption.
- **Interactive User Experience**: The user can click on a suggested search term to select it.

## Project Structure

- **index.html**: The main HTML file that defines the structure of the autocomplete feature.
- **styles.css**: The CSS file that contains the styles for the layout and visual appearance.
- **scripts/search.js**: The JavaScript file that handles the logic for the autocomplete functionality.

## How It Works

1. **User Input**: As the user types in the input field, an event listener listens for `keyup` events.
2. **Search Query Filtering**: The input is matched against a list of predefined queries stored in an array.
3. **Results Display**: The results are dynamically displayed in a scrollable div below the input box, sorted by search volume.

## Search Query Data

The search queries used for autocomplete come from a predefined list with search volumes:

```javascript
const searchQueries = [
    { query: "What to watch", searchVolume: 6200000 },
    { query: "What is my IP", searchVolume: 3600000 },
    { query: "Que significa", searchVolume: 2800000 },
    ...
];
```
## Setup

- Clone the repository or download the files.
- Open index.html in a web browser to view the autocomplete functionality in action.

## Styling

The results are displayed in a scrollable container. If there are more results than can fit in the container, a scrollbar will appear. The results are sorted by search volume, and each result is clickable, allowing the user to select the suggested search.

## Installation

No installation is required. Just open index.html in a browser.
