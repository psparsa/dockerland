import { useState, useEffect } from "preact/hooks";

export function App() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<undefined | string>(undefined);

  useEffect(() => {
    fetch("http://127.0.0.1:4444")
      .then((res) => res.text())
      .then((res) => {
        setData(res);
      })
      .finally(() => setLoading(false));
  }, []);

  const result = (() => {
    if (loading) return "Loading...";
    if (data) return `Response: ${data}`;
    return "Error!!!";
  })();

  return <div>{result}</div>;
}
