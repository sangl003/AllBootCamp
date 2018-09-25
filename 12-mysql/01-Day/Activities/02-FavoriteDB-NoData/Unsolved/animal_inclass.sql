CREATE DATABASE animal_db;

USE animal_db;

CREATE table people ( 

	Name varchar(30) NOT NULL,
	Has_Pet boolean NOT NULL,
	Pet_Name varchar(30),
    Pet_age integer(10)
    );
    

insert into people( Name, Has_Pet, Pet_Name, Pet_age)
values("Sharvari", true, "Whiskey", 13);

insert into people( Name, Has_Pet, Pet_Name, Pet_age)
values("Adam", true, "jim", 8);

insert into people( Name, Has_Pet, Pet_Name, Pet_age)
values("Mark", true, "Pluto", 1);

select * from people;

update people
set Has_Pet = false
where Name = "Adam";
select * from people;
