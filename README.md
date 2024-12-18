## Environment Variables for Frontend

### `VITE_API_URL`

This variable specifies the **base URL** of the backend API that the frontend will communicate with.

- **Usage**: It is used to make HTTP requests to the backend server (e.g., for fetching or updating data).
- **Format**: The value should be a valid URL.

**Example**:

```env
VITE_API_URL="http://localhost:5050"
```

- In **local development**, this typically points to your backend server running on `localhost` with the specified port (e.g., `5050`).
- In **production**, replace the URL with your production API endpoint:
  ```env
  VITE_API_URL="https://api.yourdomain.com"
  ```
