# Movie React App

This project was created with `npx create-react-app`.

## Run the project

To begin the development, run `npm start` or `yarn start` in the terminal.

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser
The page will reload when you make changes.\

## Description

The Movie app contains four pages: Home, Movies, Series, SingleMovie, and a few reusable components. 
Navbar displays on any page, and it's fixed so it's visible even we scroll down the pages.
On Home page displays Hero/Banner with one movie and its details. Next below there are lists of movies and series.
For these lists, I created the component MovieList, and then use it twice for the movies and series.
For each list on the Home page, it's possible to slide right over the list of items.
For displaying lists of movies/series on the Movie/TV Series page I created a reusable component PageList.
I used React Context to work with data anywhere inside the application.


The initial idea was to dynamic display the Hero/StyledHero depending on fetched data from API. The Hero would contain details about the random movie/serie.
I faced with trouble at fetching data from API in the following case. Actually, fetching data working fine, so I could used information about movies in this app. But, problem is when it's fetching data first time it return empty array, after that return array with real informations. I used useEffect() Hook to fetch data every time when searchTerm change.
Hence, I've been unable to access the individual items - movies, because I tried to access the array with no elements (at the first time fetching data). Till this moment I didn't solve the mentioned problem. 
Unfortunately, for this reason, I couldn't create the planned SinglePage for each movie/serie.



Online website: [Movie-project](https://movie-react-project-ed.netlify.app/)
