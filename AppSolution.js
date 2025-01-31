```javascript
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

function Home() {
  return (
    <>
      <h1>Home</h1>
      <Link to="/about">Go to About</Link>      
    </>
  );
}

function About() {
  return (
    <>
      <h1>About</h1>
      <Link to="/">Go to Home</Link>
    </>
  );
}
function NotFound() { return <h1>404</h1>; }
export default App;
```