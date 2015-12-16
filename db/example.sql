insert into athletes
        (firstname,      lastname, gender, created_at, updated_at)
values  ('Kelvin', 'Ma', 'M', NOW(), NOW()),
        ('Meb',         'Keflezghi',  'M',  NOW(),      NOW()),
        ('Ronda',        'Rousey', 'F',     NOW(),      NOW());

insert into workouts
        (title, date, type, duration, distance, notes, created_at, updated_at, athlete_id)
values  ('Harvard Stadium', '2015-12-16', 'November Project', 35, 37, 'Full Tour, way out of shape', NOW(),      NOW(), 1),
        ('Saturday Foundation Run', '2015-12-12', 'Run', 67, 7.3, '7.3 miles, heart rate not in sync with RPE', NOW(),      NOW(), 1),
        ('Summit Ave.', '2015-12-18', 'November Project', 30, 1.2, '3 Full Hills, sluggish', NOW(),      NOW(), 1);
