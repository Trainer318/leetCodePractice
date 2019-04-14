/*
TestCase:
{"headers": {"Person": ["Id", "Email"]}, "rows": {"Person": [[1, "a@b.com"], [2, "c@d.com"], [3, "a@b.com"]]}}
*/

# Write your MySQL query statement below
SELECT DISTINCT
    p1.Email
FROM
    Person p1
INNER JOIN
    Person p2
    ON
    p2.Id<>p1.Id
WHERE
    p1.Email=p2.Email