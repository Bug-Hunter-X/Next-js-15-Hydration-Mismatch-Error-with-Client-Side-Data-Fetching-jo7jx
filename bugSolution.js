```javascript
// pages/about.js
import { getStaticProps } from 'next';

const About = ({ data }) => {
  return (
    <div>About Page: {data.text}</div>
  );
};

export async function getStaticProps() {
  const res = await fetch('http://localhost:3000/api/data');
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
}

export default About;
```