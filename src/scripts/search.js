(() => {
    const searchQueries = [
        { query: "What to watch", searchVolume: 6200000 },
        { query: "What is my IP", searchVolume: 3600000 },
        { query: "Que significa", searchVolume: 2800000 },
        { query: "Where's my refund", searchVolume: 2800000 },
        { query: "Cuando cobro", searchVolume: 1800000 },
        { query: "Where is my train", searchVolume: 1500000 },
        { query: "How many days until Christmas", searchVolume: 1400000 },
        { query: "What time is it", searchVolume: 1400000 },
        { query: "Who won the election 2024", searchVolume: 1300000 },
        { query: "How many weeks in a year", searchVolume: 1200000 },
        { query: "Who is winning the election", searchVolume: 1200000 },
        { query: "How many ounces in a cup", searchVolume: 1100000 },
        { query: "How to calculate percentage", searchVolume: 1100000 },
        { query: "O que significa", searchVolume: 1100000 },
        { query: "Where am I", searchVolume: 1000000 },
        { query: "какой сегодня праздник", searchVolume: 995300 },
        { query: "Que hora es", searchVolume: 922000 },
        { query: "When is Easter", searchVolume: 817300 },
        { query: "What time is it in California", searchVolume: 791200 },
        { query: "How to screenshot on Mac", searchVolume: 777700 },
        { query: "Cuando juega argentina", searchVolume: 732200 },
        { query: "Cuando juega river", searchVolume: 690800 },
        { query: "Quando eh o prox carnaval", searchVolume: 678000 },
        { query: "What is the date today", searchVolume: 677900 },
        { query: "Cuando es el dia del padre", searchVolume: 665800 },
        { query: "When is Black Friday", searchVolume: 589500 },
        { query: "How many liters in a gallon", searchVolume: 583600 },
        { query: "How many ounces in a gallon", searchVolume: 578300 },
        { query: "How many seconds in a day", searchVolume: 553800 },
        { query: "How to delete Facebook account", searchVolume: 548300 },
        { query: "When is Father's Day", searchVolume: 512200 },
        { query: "How many ounces in a pound", searchVolume: 511800 },
        { query: "Who called me", searchVolume: 502900 },
        { query: "How to lose weight fast", searchVolume: 495800 },
        { query: "How to solve a Rubik's cube", searchVolume: 494600 },
        { query: "How to screenshot on Windows", searchVolume: 492900 },
        { query: "Qué día es hoy", searchVolume: 492800 },
        { query: "Cuando juega el Real Madrid", searchVolume: 485000 },
        { query: "What is love", searchVolume: 484800 },
        { query: "How to tie a tie", searchVolume: 472200 },
        { query: "When is Thanksgiving", searchVolume: 461900 },
        { query: "When is Mother's Day", searchVolume: 448200 },
        { query: "What song is this", searchVolume: 432000 },
        { query: "How to draw", searchVolume: 430500 },
        { query: "How many states in India", searchVolume: 399000 },
        { query: "How many grams in an ounce", searchVolume: 398600 },
        { query: "How many cups in a quart", searchVolume: 390000 },
        { query: "How to make money online", searchVolume: 386800 },
        { query: "Cual es mi IP", searchVolume: 383400 },
        { query: "What time is the eclipse", searchVolume: 378300 },
        { query: "How to vote in the US", searchVolume: 371800 },
        { query: "How are you meaning in Hindi", searchVolume: 371000 },
        { query: "When is the next full moon", searchVolume: 363000 },
        { query: "What time is it in Hawaii", searchVolume: 357600 },
        { query: "How many teaspoons in a tablespoon", searchVolume: 346900 },
        { query: "When is Daylight Savings", searchVolume: 342700 },
        { query: "What is Project 2025", searchVolume: 337700 },
        { query: "What is AI", searchVolume: 335600 },
        { query: "Qué hora es en Colombia", searchVolume: 333800 },
        { query: "How many oz in a cup", searchVolume: 331400 },
        { query: "How many quarts in a gallon", searchVolume: 320700 },
        { query: "What time is the Super Bowl", searchVolume: 313000 },
        { query: "How many oz in a gallon", searchVolume: 312800 },
        { query: "How to boil eggs", searchVolume: 301800 },
        { query: "Como se dice", searchVolume: 289400 },
        { query: "How many tablespoons in a cup", searchVolume: 288200 },
        { query: "How many feet in a mile", searchVolume: 286600 },
        { query: "What is DEI", searchVolume: 286200 },
        { query: "When is Ramadan", searchVolume: 277600 },
        { query: "How many steps in a mile", searchVolume: 276900 },
        { query: "Who is the richest person in the world", searchVolume: 276700 },
        { query: "What's the weather tomorrow", searchVolume: 274900 },
        { query: "What holiday is today", searchVolume: 272500 },
        { query: "How to delete a page in Word", searchVolume: 264300 },
        { query: "What is Juneteenth", searchVolume: 260500 },
        { query: "How many people are in the world", searchVolume: 244300 },
        { query: "How old is Taylor Swift", searchVolume: 236400 },
        { query: "How much house can I afford", searchVolume: 236200 },
        { query: "When is tiktok getting banned", searchVolume: 225700 },
        { query: "What is a prime number", searchVolume: 218800 },
        { query: "A como esta el dolar hoy", searchVolume: 218200 },
        { query: "How old is Mike Tyson", searchVolume: 215900 },
        { query: "What is pansexual", searchVolume: 199300 },
        { query: "What's the weather today", searchVolume: 193800 },
        { query: "Who shot Trump", searchVolume: 190600 },
        { query: "When does the time change", searchVolume: 184000 },
        { query: "What is gout", searchVolume: 182000 },
        { query: "When is the next solar eclipse", searchVolume: 177600 },
        { query: "What is gaslighting", searchVolume: 171300 },
        { query: "What is 100 factorial", searchVolume: 166700 },
        { query: "Where to watch Yellowstone TV show", searchVolume: 165800 },
        { query: "How many countries are there", searchVolume: 164300 },
        { query: "How to make French toast", searchVolume: 156200 },
        { query: "How to say hi in Spanish", searchVolume: 155900 },
        { query: "How to cook rice", searchVolume: 153500 },
        { query: "How old is Kamala Harris", searchVolume: 149100 },
        { query: "When is Diwali", searchVolume: 146100 },
        { query: "How to screenshot on Chromebook", searchVolume: 133000 },
        { query: "When are taxes due", searchVolume: 127900 },
        { query: "What does Pookie mean", searchVolume: null }
    ];

    function autocompleteMatch(input) {
        if (input === '') { 
            return [];
        }
        const reg = new RegExp(input, 'i'); //Creates a regex expression using input as the string to match and the flag 'i' so that 'hello' = 'HELLO'
        return searchQueries
            .filter(item => item.query.match(reg)) //Filters searchQueries to include only those where the query matches the input pattern
            .sort((a, b) => (b.searchVolume || 0) - (a.searchVolume || 0)) //Sorts the filtered results in descending order of searchVolume, If searchVolume is undefined, it falls back to 0 .
            .map(item => item.query); //Converts the filtered and sorted list of objects into a list of query strings, dropping the searchVolume.
    }
    
    function showResults(val) {
        const res = document.getElementById("result");
        res.innerHTML = '';
        const terms = autocompleteMatch(val);
        const list = terms.map(term => `<li>${term}</li>`).join('');
        res.innerHTML = `<ul>${list}</ul>`;
    }
    
    const input = document.getElementById("search_bar");
    input.addEventListener('keyup', (event) => {
        showResults(event.target.value);
    });
      
})();