drop database tops_songs;

CREATE DATABASE tops_songs;

USE tops_songs;

CREATE TABLE tops_songs
(
	id INTEGER NOT NULL primary key auto_increment,
    rank_id INTEGER NOT NULL,
	artist_name VARCHAR(255) NOT NULL,
	song_name varchar(255) NOT NULL,
    year_of_release integer,
    world_popularity float,
    US_popularity float, 
    UK_popularity float, 
    Europe_popularity float, 
    rest_of_world_combined_popularity float
);

