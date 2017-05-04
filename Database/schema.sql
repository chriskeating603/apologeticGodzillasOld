drop database if exists valence;

create database valence;

use valence;

create table users (
  id int(4) primary key auto_increment,
  username varchar(15) unique
);

create table entries (
  id int(5) primary key auto_increment,
  sleepHrs int(2),
  minsExercise int(2),
  mood int(2),
  users_id int(2),
<<<<<<< HEAD
  foreign key users_id references users(id)
);

 -- To run, enter the following in the Terminal:
 -- mysql -u root < server/schema.sql
=======
  foreign key (users_id) references users(id)
);
>>>>>>> creates queries and uses them in server listeners. fixes schema. needs testing of queries
