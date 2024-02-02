# React-Router-DOM-BookNerd

This project is a simple React application built to demonstrate routing functionality using React Router. It includes features such as dynamic routing, nested routes, parameterized routes, handling not found routes, and URL query parameter manipulation. The project is set up with Vite for fast development and utilizes Bootstrap for styling.

## GIF

![Screen_Recording_2024-02-02_at_19_54_31_AdobeExpress-ezgif com-video-to-gif-converter](https://github.com/tubayapa/React-Router-DOM-BookNerd/assets/147662888/82c8210e-4d7a-4983-ab96-513167cf53f5)


## Key Features:

- **Dynamic Routing:** Utilizes React Router's `<Route>` component to define routes dynamically based on the URL path.
- **Nested Routes:** Demonstrates nested routing by organizing pages hierarchically, such as `/category/story` and `/category/novel`.
- **Parameterized Routes:** Implements parameterized routes using React Router's `useParams()` hook to fetch detailed information about specific items, like individual books (`/product/:id`).
- **Route Navigation:** Utilizes React Router's `useNavigate()` hook for programmatic navigation, enabling redirection to specific routes, including handling error cases like 404 not found.
- **API Integration:** Utilizes Axios for making HTTP requests to a local API to fetch book information based on the provided IDs.
- **Dynamic Content Rendering:** Demonstrates conditional rendering to display loading messages while fetching data and rendering book details once the data is available.
- **URL Query Parameters:** Utilizes React Router's `useSearchParams()` hook to handle and manipulate URL query parameters, facilitating features like filtering and searching.
- **Fast Development:** Configured with Vite for rapid development and hot module replacement.

## Technologies Used:

- React.js
- React Router
- Axios
- JavaScript (ES6+)
- Bootstrap
- Vite

## Usage:

1. Clone the repository: `git clone <repository-url>`
2. Install dependencies: `npm install`
3. Start the development server: `npm start`

## Contributing:

Contributions are welcome! Feel free to submit bug reports, feature requests, or pull requests to help improve this project.

## License:

This project is licensed under the [MIT License](link-to-license).

