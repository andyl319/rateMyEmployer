# Schema Information

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique

## Restaurant/business
| column name    | data type | details               |
| ---------------|-----------|-----------------------|
| id             | integer   | not null, primary key |
| name           | string    | not null              |
| location       | string    | not null, indexed     |
| avg. rating    | integer   |                       |
| mgmt. rating   | integer   |                       |
| cowrkr. rating | integer   |                       |
| pay rating     | integer   |                       |
| wrk hrs rating | integer   |                       |


## review
| column name    | data type | details                        |
| ---------------|-----------|------------------------------- |
| id             | integer   | not null, primary key          |
| author_id      | integer   | not null, foreign key, indexed |
| bsnss_id       | integer   | not null, foreign key, indexed |
| mgmt. rating   | integer   | not null                       |
| cowrkr. rating | integer   | not null                       |
| pay rating     | integer   | not null                       |
| wrk hrs rating | integer   | not null                       |
| pros           | text      | not null                       |
| cons           | text      | not null                       |
| review         | text      |                                |


## likes
column name    | data type | details                         |
---------------|-----------|---------------------------------|
id             | integer   | not null, primary key           |
user_id        | integer   | not null, foreign key, indexed  |
review_id      | integer   | not null, foreign key, indexed  |
vote           | integer   | not null                        |


## tags
column name    | data type | details                         |
---------------|-----------|---------------------------------|
id             | integer   | not null, primary key           |
user_id        | integer   | not null, foreign key           |
bsnss_id       | integer   | not null, foreign key, indexed  |
tagName        | string    | not null                        |
