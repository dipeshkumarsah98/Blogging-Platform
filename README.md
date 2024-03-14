## Blogging Platform

### Fork the Repository:

1. **Fork this Repository**: Click on the "Fork" button at the top right corner of this repository to create a copy of it under your GitHub account. You will work on your forked repository to make changes and contributions.

### README Instructions:

1. **README for Backend**: 
    - Ensure the README in the `backend` folder provides clear instructions on how to install dependencies and run the backend server.

2. **README for Frontend**:
    - Ensure the README in the `frontend` folder provides clear instructions on how to install dependencies and start the frontend development server.

### Backend (Node.js with Express and Chosen ORM):
The backend project should be located in the `backend` folder and use the latest version of Express.js.

1. **Setup PostgreSQL Database**: Configure a PostgreSQL database to store blog post data.

2. **Choose and Integrate ORM**: Select and integrate an ORM (Object-Relational Mapping) library for database interaction.

3. **Define Data Models**:
    - **Blog Post Model**: `id`, `title`, `content`, `author`, `createdAt`, `updatedAt`, `imageURL`.
    - **Comment Model**: `id`, `postId`, `author`, `content`, `createdAt`.
    - **User Model**: `id, username, email, password, createdAt, updatedAt`.

4. **Implement CRUD Operations**: Develop CRUD operations using the chosen ORM for creating, retrieving, updating, and deleting blog posts and comments.

5. **Implement Authentication and Authorization**:
    - Allow users to sign up and log in securely.
    - Generate JWT tokens for authentication.
    - Implement middleware for JWT token for authentication.
    - Implement endpoint authorization to restrict user access, allowing only the author of a blog post or comment to perform actions such as editing or deleting their own content. Ensure that users can only modify or remove content they authored.

6. **Challenging Task (Optional)**: Implement a feature for collaborative editing of blog posts. Users can edit a blog post simultaneously, and their changes are saved in real-time (optional: using WebSocket technology).

### Frontend (Next.js):

The frontend project should be located in the `frontend` folder and use the latest version of Next.js.

1. **Create Next.js Frontend**: Develop a Next.js frontend for the blogging platform.

2. **Implement Features**:
    - Display a list of blog posts with images.
    - Allow users to view individual blog posts with associated images.
    - Enable users to create new blog posts with image uploads.
    - Implement comment functionality for blog posts, allowing users to view comments.

3. **Utilize Next.js Features**:
    - Leverage Next.js's routing and server-side rendering for enhanced performance and SEO.

4. **Integrate React Query**:
    - Utilize React Query's `useQuery` hook for efficient data fetching.
    - Use `useMutation` hook for handling mutations such as creating new blog posts or adding comments.
    - Cache fetched blog posts data to improve performance and reduce unnecessary network requests.

5. **Implement Authentication and Authorization**:
    - Enable users to sign up and log in securely.
    - Manage JWT token storage and usage for authenticated requests.
    - Allow only the author of a blog post or comment to perform actions such as editing or deleting their own content. Ensure that users can only modify or remove content they authored.

6. **Styling**:
    - Design can be simple and as per your preferred styling solution.

7. **Challenging Task (Optional)**: Implement a collaborative editor for editing blog posts. Users can edit a blog post simultaneously, and their changes are saved in real-time (optional: using WebSocket technology).
