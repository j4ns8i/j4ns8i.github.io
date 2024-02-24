// import circleQuestion from './assets/circle-question.svg'

import iro from "@jaames/iro"
import { useRef } from "react"

function PaletteHeader() {
  return <h1 className="text-3xl text-white">Palette</h1>
}

function PaletteInfo() {
  return (
    <div className="w-5 h-5 rounded-full flex justify-center items-center border-2 border-stone-500">
      <p className="text-stone-500">?</p>
    </div>
  )
}

function PaletteColorBox() {
  const myRef = useRef<HTMLDivElement>(null)

  const handleClick = () => {
    iro.ColorPicker(myRef.current!, {
      width: 100,
    });
  }

  return (
    <div ref={myRef} className='min-w-full h-16 rounded-sm bg-stone-500' onClick={handleClick}></div>
  )
}

function PaletteGrid() {
  return (
    <div className="grid grid-cols-2 gap-2 min-w-full mt-6">
      <PaletteColorBox />
      <PaletteColorBox />
      <PaletteColorBox />
      <PaletteColorBox />
      <PaletteColorBox />
      <PaletteColorBox />
      <PaletteColorBox />
      <PaletteColorBox />
    </div>
  )
}

function PaletteWindow() {
  return (
    <div className="bg-stone-900 p-2 w-64 flex flex-col items-center">
      <PaletteHeader />
      <PaletteInfo />
      <PaletteGrid />
    </div>
  )
}

function Frame({ children }: { children: React.ReactNode }) {
  return (
    // TODO: h-screen breaks if palette extends below initial viewport, so you
    // might need to revert to the initial implementation
    <div className="flex h-screen bg-stone-900 divide-x divide-stone-800">
      {children}
    </div>
  )
}

function Preview() {
  return <div className="grow bg-stone-900">
  </div>
}

function App() {
  return (
    <Frame>
      <PaletteWindow />
      <Preview />
    </Frame>
  )
}

export default App
