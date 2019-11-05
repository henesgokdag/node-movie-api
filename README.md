[![Build Status](https://api.travis-ci.org/henesgokdag/node-movie-api.svg)](https://travis-ci.org/henesgokdag/node-movie-api)
# node-movie-api
Node.Js Movie API
API filmler ve yönetmenlerle alakalıdır. API Node.js ile geliştirilmiştir ve veritabanı olarak mongoDb kullanılmaktadır. Ayrıca projede json web token ile oturum yönetimi bulunmaktadır. Ayrıca projenin içinde unit test dosyaları da bulunmaktadır.
# Movie

| Route | HTTP Verb	 | POST body	 | Description	 |
| --- | --- | --- | --- |
| /api/movies/ | `GET` | Empty | List all movies. |
| /api/movies/ | `POST` | {'title':'foo', 'category':'bar', 'country':'Turkey', year:1990, director:"id", imdb_score: 9.7 } | Create a new movie. |
| /api/movies/:movie_id | `GET` | Empty | Get a movie. |
| /api/movies/:movie_id | `PUT` | {'name':'foo', 'surname':'bar'} | Update a movie with new info. |
| /api/movies/:movie_id | `DELETE` | Empty | Delete a movie. |
| /api/movies/top10 | `GET` | Empty | Get the top 10 movies. |
| /api/movies/between/:start_year/:end_year | `GET` | Empty | Movies between two dates. |

# Director

| Route | HTTP Verb	 | POST body	 | Description	 |
| --- | --- | --- | --- |
| /api/directors/ | `GET` | Empty | List all directors. |
| /api/directors/ | `POST` | { name: 'foo', surname:'bar', bio:'lorem ipsum' } | Create a new director. |
| /api/directors/:director_id | `GET` | Empty | Get a director. |
| /api/directors/:director_id | `PUT` | {'name':'foo', 'surname':'bar'} | Update a director with new info. |
| /api/directors/:director_id | `DELETE` | Empty | Delete a director. |
| /api/directors/best10movie | `GET` | Empty | The director's top 10 films. |

# Users

| Route | HTTP Verb	 | POST body	 | Description	 |
| --- | --- | --- | --- |
| /register | `POST` | { username: 'foo', password:'1234' } | Create a new user. |
| /authenticate | `POST` | { username: 'foo', password:'1234' } | Generate a token. |


# Demo
[Live demo on Heroku](https://node-my-movie-api.herokuapp.com)