import { useState, useEffect } from 'react';
const memoryLeak = true;
export default function App() {
  const [someState, setSomeState] = useState(false);
  useEffect(() => {
    const interval = setInterval(() => setSomeState(state => memoryLeak ? state : !state), 100);
    return () => clearInterval(interval);
  }, []);
  return <div>Test Memory Leak</div>;
}
