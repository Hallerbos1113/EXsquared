# How to play it.

> > docker-compose up --build

You have to run post-man application.

Follow as [New]/[GraphQL].

Please type "http://localhost:5000/graphql".
You can see two queries as "getVehicles" and "getVehicle".
A query "getVehicles" return data like make_id and make_name.
A query "getVehicle" needs one argument (make_id) then return the expected output of requirement.
You can test make_id "12858".

To test project, command "npm test"

Thank you.
Feel free to contact me any time on teal.ademam.ky5g9@gmail.com

# React assessment URL

https://codesandbox.io/p/sandbox/react-class-conversion-assignment-forked-j3lkq2?file=%2Fsrc%2FAppFunc.js%3A43%2C3

# backend workflow

Receive the graphQL query.
Let's see "src/api/graphql/resolvers.ts".
There are 2 queries, one is to get all data, another is to get more detail.
Here, it can store data to mongoDB.
