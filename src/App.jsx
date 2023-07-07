import { Form, Logo, PackingList, Stats } from "./components"
import { useState } from "react"

function App() {
  const [items, setItems] = useState([])

  const handleAddItems = (item) => {
    setItems((items) => [...items, item])
  }

  const handleDeleteItem = (id) => {
    setItems((items) => items.filter(items => items.id !== id));
  }

  const handleToggle = (id) => {
    setItems((items) => 
      items.map((item) => 
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    )
  }

  const handleClearList = () => {
    const confirm = window.confirm('Are you sure you want to delete all items?');
    if(confirm) setItems([]);
  }

  return (
    <>
      <div className="app">
        <Logo />
        <Form onAddItems={handleAddItems} />
        <PackingList 
          items={items} 
          onDeleteItem={handleDeleteItem} 
          onToggleItem={handleToggle} 
          onClearList={handleClearList}
        />
        <Stats items={items} />
      </div>
    </>
  )
}

export default App
