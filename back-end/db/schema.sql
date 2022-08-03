-- 1) IN CASE theres a database DROP IT
DROP DATABASE IF EXISTS tunes_dev;

--2) create the db
CREATE DATABASE tunes_dev;


--3) CONNECTO TO IT 

\c tunes_dev;

--4) blueprint out whatever tables we will need

CREATE TABLE songs 
    (id SERIAL PRIMARY KEY, name TEXT NOT NULL, artist TEXT NOT NULL, album TEXT, time TEXT, is_favorite BOOLEAN);


-- psql -U postgres -f db/schema.sql
