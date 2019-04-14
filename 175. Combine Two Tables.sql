/*
TestCase:
{"headers": {"Person": ["PersonId", "LastName", "FirstName"], "Address": ["AddressId", "PersonId", "City", "State"]}, "rows": {"Person": [[1, "Wang", "Allen"]], "Address": [[1, 2, "New York City", "New York"]]}}
*/

# Write your MySQL query statement below
SELECT
    FirstName,
    LastName,
    City,
    State
FROM
    Person
LEFT OUTER JOIN
    Address
ON
    Person.PersonId=Address.PersonId