```javascript
// pages/index.js
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Welcome to my Next.js app</h1>
      <Link href='/about'>
        <a>Go to About</a>
      </Link>
    </div>
  );
}
```
```javascript
// pages/about.js

export default function About() {
  // This will cause a hydration mismatch error if the data fetched here
  // is different from the data fetched on the server during SSR
  const data = fetch('/api/data').then(res => res.json());

  return (
    <div>About Page</div>
  );
}
```
```javascript
// pages/api/data.js

export default function handler(req, res) {
  res.status(200).json({ text: 'Data from API' });
}
```