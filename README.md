# Your Camper web app

The student's individual test task, created with a deadline of seven days.

## Setting tasks 

Create an app for a company that provides camper van rental services in Ukraine.

### The application consists of 3 pages:

* The main page with a general description of the services provided by the company. Stylization and design at your discretion.
* A page containing a catalog of campers of various configurations, which the user can filter by location, equipment and type
* A page with adverts that the user has added to their favorites

The appearance of the program should consist of navigation (design at your discretion) and the viewing area. A [mockup](https://www.figma.com/design/fnMWH0eBB7NnoqdAiiKWsQ/Test?node-id=0-1&t=tgvcjXs3KWHWrTqf-0) has been provided with directory and advert filtering, and design of pop-up window is provided.

## Project tech stack:

* **React**: Created using React ([Create React App](https://github.com/facebook/create-react-app)), SPA (Single Page Application) comply with users' demand
* **React Router**: App navigation implemented using [React Router](https://reactrouter.com/en/main)
* **Redux**: Main store state is made with Redux ([Redux Toolkit](https://redux-toolkit.js.org/)), saving "Favourites" list between sessions, using [Redux Persist](https://www.npmjs.com/package/redux-persist)
* **Axios**: HTTP requests are made with [Axios](https://axios-http.com/)
* MockAPI: [MockAPI.io](https://mockapi.io/) was used as a remote server for stored main data 
