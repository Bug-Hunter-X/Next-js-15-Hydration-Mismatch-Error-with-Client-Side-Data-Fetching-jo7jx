# Next.js 15 Hydration Mismatch Bug
This repository demonstrates a common hydration mismatch error in Next.js 15 applications. The error occurs when fetching data on the client-side in a component that is also rendered on the server-side during SSR.

## Bug Description
The `About` page fetches data from an API route using `fetch`. The data fetched on the client may differ from the data fetched on the server, causing a hydration mismatch and rendering errors in the browser.

## How to Reproduce
1. Clone the repository.
2. Run `npm install`.
3. Run `npm run dev`.
4. Navigate to the `/about` page.

You will see a hydration mismatch error in the browser's console.

## Solution
See the `bugSolution.js` file for a solution that uses `getStaticProps` to fetch data during build time and avoids the hydration mismatch.