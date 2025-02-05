import { useState, useEffect } from "react";
import "./assets/components/styles.css";

export default function App() {
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/quotes")
      .then((response) => response.json())
      .then((data) => setQuotes(data.quotes.slice(0, 10)))
      .catch((error) => console.error("Error fetching quotes:", error));
  }, []);

  return (
    <div className="container">
      <h1 className="title">Quotes</h1>
      {quotes.map((quote, index) => (
        <h1 key={index} className="quote">{quote.quote}</h1>
      ))}
    </div>
  );
}
