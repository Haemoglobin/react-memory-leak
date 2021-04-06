import { useState, useEffect } from 'react';
const memoryLeak = true;
export default function App() {
  const [someState, setSomeState] = useState(false);
  useEffect(() => {
    setInterval(() => setSomeState(state => memoryLeak ? state : !state), 100);
  }, []);
  return <div>Test Memory Leak</div>;
}
