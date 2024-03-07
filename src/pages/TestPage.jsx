import { useState } from "react";

const TestPage = () => {
  const [currentTab, setCurrentTab] = useState(1);
  return (
    <main>
      <h2>Tab Test Page</h2>
      <div>
        <button onClick={() => setCurrentTab(1)}>Tab 1</button>
        <button onClick={() => setCurrentTab(2)}>Tab 2</button>
        <button onClick={() => setCurrentTab(3)}>Tab 3</button>
      </div>
      <div>
        {currentTab === 1 && <h1>Content 1</h1>}
        {currentTab === 2 && <h1>Content 2!!!</h1>}
        {currentTab === 3 && <h1>Content 3!!!!!!!!!!</h1>}
      </div>
    </main>
  );
};

export default TestPage;
