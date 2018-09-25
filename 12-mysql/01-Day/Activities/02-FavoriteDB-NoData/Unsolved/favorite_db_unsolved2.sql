/* *Instructions*

It is time to add some data into FavoriteDB! The data that you add should be unique to you and you should try to test your skills in not only adding new data, but also attempt to update old data as well!

Try to add at least three rows of data to each table.

BONUS: Look into how you you might go about creating a column that can hold a default value within it and how default values work when creating new rows.

BONUS: Look into how you might go about creating a column with a default value that automatically go up with each new row

BONUS: Look into the concept of making a column the "primary key"

ULTRA BONUS: Try to create a column called "id" in one of your tables that can contain an integer, is the primary key for the table, cannot be NULL, and automatically increments with each new row added. */

Use favorite_db;

insert into favorite_foods (food, score)
values ("apple", 300);
insert into favorite_foods (food, score)
values ("bananna", 600);
insert into favorite_foods (food, score)
values ("Pear", 500);

insert into favorite_movies (id, movie, five_times, score)
values (4,"Die Hard 1", 4, 400);
insert into favorite_movies (id, movie, five_times, score)
values (2,"Mom", 2, 210);
insert into favorite_movies (id, movie, five_times, score)
values (3,"Mission impossible", 4, 500);

insert into favorite_songs ( song , artist, score)
values("Kiki", "Drake", 500);
insert into favorite_songs ( song , artist, score)
values("Har ghadi", "Sonu Nigahm", 500);
insert into favorite_songs ( song , artist, score)
values("Savariya", "Shreya Ghoshal", 500);

select * from favorite_foods;
select * from favorite_movies;
select * from favorite_songs;


alter table favorite_foods 
add city varchar(30) not null default "Minneapolis" ;

select * from favorite_foods;

alter table favorite_foods 
add id  int(10) not null primary key auto_increment;
select * from favorite_foods;

delete from favorite_foods 
where id = 3;
select * from favorite_foods;





