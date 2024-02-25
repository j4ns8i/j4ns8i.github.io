// import circleQuestion from './assets/circle-question.svg'

import iro from "@jaames/iro"
import { MouseEvent, useRef } from "react"

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
  const visible = useRef(false)

  const handleClick = (event: MouseEvent) => {
    if (visible.current) {
      return
    }
    visible.current = true
    const x = event.clientX, y = event.clientY
    myRef.current!.style.left = `${x}px`
    myRef.current!.style.top = `${y}px`
    iro.ColorPicker(myRef.current!, {
      width: 300,
      borderWidth: 1,
      handleRadius: 10,
      layout: [
        {
          component: iro.ui.Box,
        },
        {
          component: iro.ui.Slider,
          options: {
            sliderType: 'hue'
          }
        },
      ]
    });
  }

  return (
    <>
      <div>
        <div className='min-w-full h-16 rounded-sm bg-stone-500' onClick={handleClick}></div>
        <div ref={myRef} className='fixed left-12 top-24'></div>
      </div>
    </>
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
