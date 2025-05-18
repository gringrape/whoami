
import { createRoot } from 'react-dom/client';

import App from './App';

function main() {
  const root = document.getElementById("root");
  
  if (!root) {
    console.log("** 오류: Root element 가 존재하지 않습니다.");
    return;
  }
  
  createRoot(root).render(<App />);
}

main();
