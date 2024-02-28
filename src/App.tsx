// import circleQuestion from './assets/circle-question.svg'

import iro from "@jaames/iro"
import { MouseEvent, useRef } from "react"

function PaletteHeader() {
  return <h1 className="text-3xl text-white">Palette</h1>
}

function PaletteInfo() {
  return (
    <div className="size-5 rounded-full flex justify-center items-center border-2 border-stone-500">
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
        <div className='h-16 rounded-sm bg-stone-500' onClick={handleClick}></div>
        <div ref={myRef} className='fixed'></div>
      </div>
    </>
  )
}

function PaletteMix() {
  return (
    <div className="flex flex-1 gap-2 grow justify-center items-center">
      <div className="flex flex-col place-items-center">
        <PaletteHeader />
        <PaletteInfo />
      </div>
      <div className="grid grow gap-2 grid-cols-8">
        <PaletteColorBox />
        <PaletteColorBox />
        <PaletteColorBox />
        <PaletteColorBox />
        <PaletteColorBox />
        <PaletteColorBox />
        <PaletteColorBox />
        <PaletteColorBox />
      </div>
    </div>
  )
}

function PaletteWindow() {
  return (
    <div className="bg-stone-900 p-2 flex items-center">
      <PaletteMix />
    </div>
  )
}

function Preview() {
  return <div className="grow bg-stone-900">
  code here
  </div>
}

function App() {
  return (
    <div className="flex flex-col">
      <PaletteWindow />
      <Preview />
    </div>
  )
}

export default App
