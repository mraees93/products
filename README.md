Instructions to run the project:

1. cd products_api

2. `dotnet run` to start the server

3. cd frontend, cd src

4. `npm start` to start the react app

Instructions to run the unit tests in react (the unit tests are inside `frontend/src/components/products.test.js`):

1. cd frontend

2. `npm t` to run the the unit tests

My planning phase:

I read the instructions thoroughly then I did thorough research on ASP.Net, .net 8 and C#. I learnt about thorough planning in my Umuzi leanership so in the past 3 years I've always written down my planning for a project on my whiteboard and typed the pseudocode before writing any form of code. 

Here are the steps I wrote on my whiteboard with best practices in mind:
1. Create the model and controllers.
2. Ensure the controllers work as intended.
3. Create the react components with a Test–Driven Development approach to ensure an improved quality of the code and maintenence.
4. Add additional unit tests (if needed).
5. Add CSS styling.
6. Refactor and clean up code (as i'm not only writing code for myself, it's usually for many other developers to read as well).
7. Triple check and run the unit tests again to see if anything broke.

Best practices I know of but didnt include:
1. To include sensitive information like URL's in a `.env` file but for the sake of this project I excluded it to make the assessing and testing quicker.
2. In `frontend/src/components/Products.js`, `line 31` I included the index of the map function inside the key prop because the productId from the products array of objects was not consistent. I read that I should only use the map index there as a last resort.
