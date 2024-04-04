# Mi_Recipe
CRUD database built using Django &amp; React. Inspired by my love of food, a place to hold your favorite recipes! 


MI_RECIPE APP
Description
MI_RECIPE APP is a CRUD database built using Django & React. Inspired by my love of food, it serves as a place to hold your favorite recipes!

Features
Create, Read, Update, and Delete recipes
More features coming soon!
Installation
Before getting started, ensure you have the following prerequisites installed:

Python 3
Pip (the default Python package installer)
NodeJS (version 6 or higher) and npm (version 5.2 or higher)
Setting up Python
Open your preferred IDE to an empty directory and create a virtual environment (venv) using the command:
Copy code
python -m venv logrocket_env
Activate the virtual environment:
bash
Copy code
source ./logrocket_env/bin/activate
Install Django and required dependencies:
Copy code
pip install django djangorestframework django-cors-headers
Setting up Django
Create a Django project:
Copy code
django-admin startproject django_react_proj
Update the settings.py file with necessary configurations as outlined in the article provided.
Running the Django Application
Start the Django server:
Copy code
python manage.py runserver
Setting up React
Install required dependencies for the React project:
css
Copy code
npm install bootstrap reactstrap axios --save
Create a constants folder and an index.js file inside src/ to store utility constants.
Add the API URL constant in the index.js file:
javascript
Copy code
export const API_URL = "http://localhost:8000/api/students/";
Run the React app:
sql
Copy code
npm start
Usage
Create new recipes
Update existing recipes
Read recipe details
Delete recipes
More features coming soon!
Configuration
Refer to the article for detailed configuration instructions.

Contributing
This project is open to collaboration. Feel free to contribute!

Credits
Article: Using React and Django to create a full-stack web application
Custom logo: Kittl
Styling tables: PrimeReact
Custom background image: Pixlr Image Generator
License
This project is not licensed.

