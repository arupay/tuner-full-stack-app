--1) MUST CONNECT TO DATABASE

\c tunes_dev;

--2) ADD PREMADE DATA TO BE ABLE TO ADD

INSERT INTO songs (name, artist, album, time, is_favorite)
    VALUES ('Still Dre', 'Dr Dre', 'Chronic', '3:44', true), 
    ('Its My Life', 'Bon Jovi', 'Greatest Hits', '3:55', false);

-- psql -U postgres -f db/seed.sql