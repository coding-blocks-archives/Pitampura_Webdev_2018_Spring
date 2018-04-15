# Setup Database

## 1. Login as Root

```
mysql -u root -p
```

## 2. Create Database and User

```mysql-psql
CREATE DATABASE shopsampledb;
CREATE USER shopadmin IDENTIFIED BY 'shoppass';
GRANT ALL PRIVILEGES ON shopsampledb.* TO shopadmin;
FLUSH PRIVILEGES;
EXIT

```