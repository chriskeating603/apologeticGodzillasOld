drop database if exists valence;

create valence;

use valence;

create table users (
  id int primary key auto_increment,
  username varchar unique
);

create table entries (
  id int primary key auto_increment,
  sleepHrs int(2),
  minsExercise int(2),
  mood int(2),
  users_id int(2),
  foreign key users_id references users(id)
);

 -- To run, enter the following in the Terminal:
 -- mysql -u root < server/schema.sql