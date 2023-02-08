import { useState } from 'react'
import './App.css'
import Register from './Register'
import { SelfRegistration } from './models';
import ListSelfRegistration from './ListSelfRegistration';

const LOCALSTORAGE_ITEM = 'registers';

function getCurrentItems(): SelfRegistration[] {
  return JSON.parse(localStorage.getItem(LOCALSTORAGE_ITEM) || '[]');
}

function App() {

  const [id, setId] = useState(new Date().getTime());
  const [currentItems, setCurrentItem] = useState<SelfRegistration[]>(
    getCurrentItems()
  );

  const saveLocalStorage = (newData: SelfRegistration) => {
    const newItems = currentItems.slice();
    newItems.push({ ...newData, id });

    localStorage.setItem(LOCALSTORAGE_ITEM, JSON.stringify(newItems));
    setId(new Date().getTime());
  }

  return (
    <div className="App">
      <Register onSave={saveLocalStorage} key={id} />
      <ListSelfRegistration items={currentItems} />
    </div>
  )
}

export default App
