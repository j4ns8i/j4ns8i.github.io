import './App.css'

function App({ name }: { name: string }) {
  return (
    <h1 className="text-3xl font-bold text-rose-200 drop-shadow-md">
      Hello {name}!
    </h1>
  )
}

export default App
