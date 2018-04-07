# SETTING UP MYSQL

## 1. Install Mysql Community Server


## 2. Login as Root 

If root has password
```
mysql -u root -p
```

If root has no password

```
mysql -u root
```

## 3. Create DB, User and Grant Privilege

```mysql

create database stumandb;

create user stumanuser identified by 'stumanpass';

grant all privileges on stumandb.* to stumanuser;

flush privileges;

exit;
```

## 4. Login as the new user

```
mysql -u stumanuser -p 
```

## 5. Create Tables

Select the database
```
use stumandb
```


### Teacher Table

```mysql-psql

CREATE TABLE teachers (
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL,
    subject VARCHAR(15)
);

```

### Student Table

```mysql-psql
CREATE TABLE students (
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL,
    batch VARCHAR(15),
    teacherId INTEGER
);
```

## 6. Add some data

Add some teachers
```mysql-psql
INSERT INTO teachers (name, subject) VALUES ('Prateek', 'C++');
INSERT INTO teachers (name, subject) VALUES ('Garima', 'Java');

```

Add some students

```mysql-psql
INSERT INTO students (name, batch, teacherId)
    VALUES ('Amit', 'Launchpad', 1);
INSERT INTO students (name, batch, teacherId)
    VALUES ('Neha', 'Algo.Java', 2);
INSERT INTO students (name, batch, teacherId)
    VALUES ('Shekhar', 'Crux', 2);
INSERT INTO students (name, batch, teacherId)
    VALUES ('Rashmi', 'Algo++', 1);
```