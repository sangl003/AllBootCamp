-- Drops the programming_db if it already exists --
DROP DATABASE IF EXISTS programming_db;
-- Create a database called programming_db --
CREATE DATABASE programming_db;

Use programming_db;
-- Use programming db for the following statements --

CREATE TABLE programming_languages(
	id int(10) auto_increment not null,
  -- Create a numeric column called "id" which will automatically increment its default value as we create new rows. --
	language varchar(255),
  -- Create a string column called "language" --
	rating int(10),
  -- Create an integer column called "rating" --
	mastered boolean not null default true,
  -- Create a boolean column called "mastered" which will automatically fill --  
  -- with true when a new row is made and the value isn't otherwise defined. --
	primary key (id)
  -- Set the id as this table's primary key
);

-- Create new example rows


INSERT INTO programming_languages (id, language, rating, mastered)
VALUES (1, "C++", 5, false);

INSERT INTO programming_languages (language, rating)
VALUES ("Jquery", 5);

INSERT INTO programming_languages (language, rating)
VALUES ("NodeJS", 3);

INSERT INTO programming_languages (id, language, rating, mastered)
VALUES (2, "C++", 5, false);
INSERT INTO programming_languages (id, language, rating, mastered)
VALUES (3, "C++", 5, false);

INSERT INTO programming_languages (id, language, rating, mastered)
VALUES (6, "C++", 5, false);


create table programmer ( 
	id int(10) not null auto_increment primary key,
    Name varchar(50)
);

insert into programmer(Name)
values("Tim");
insert into programmer(Name)
values("Jim");
insert into programmer(Name)
values("Sim");
insert into programmer(Name)
values("Dim");
insert into programmer(Name)
values("Kim");
insert into programmer(Name)
values("Zim");

select * from programmer;
select * from programming_languages;

SELECT t1 .id, t1.name, t2.language, t2.mastered,t2.rating
FROM programmer t1 right JOIN programming_languages t2 ON t1.id = t2.id;

SELECT t1 .id, t1.name, t2.language, t2.mastered,t2.rating
FROM programmer t1 left JOIN programming_languages t2 ON t1.id = t2.id;
  
SELECT t1 .id, t1.name, t2.language, t2.mastered,t2.rating
FROM programmer t1 inner JOIN programming_languages t2 ON t1.id = t2.id;
    