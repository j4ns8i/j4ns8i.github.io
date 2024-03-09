import { useCallback, useRef, useState } from "react"
import { HexColorPicker } from "react-colorful";
import useClickOutside from "../lib/useClickOutside.ts"

function PaletteHeader() {
  return <h1 className="text-2xl font-theme_mono text-white">Palette</h1>
}

function PaletteInfo() {
  return (
    <div className="size-5 rounded-full flex justify-center items-center border-2 border-stone-500 mx-auto">
      <p className="text-stone-500">?</p>
    </div>
  )
}

function PaletteColorBox({ bgColor }: { bgColor: string }) {
  const baseRef = useRef<HTMLDivElement>(null);
  const pickerRef = useRef<HTMLInputElement>(null);
  const [color, setColor] = useState(bgColor);
  const [isOpen, toggleOpen] = useState(false);

  const close = useCallback(() => toggleOpen(false), []);
  const openIfNot = useCallback(() => !isOpen && toggleOpen(true), [isOpen]);
  useClickOutside(pickerRef, close);

  return (
    <>
      <div ref={baseRef} className={`h-20 rounded-sm`} style={{ backgroundColor: color }} onClick={openIfNot}>
        {isOpen && (
          // TODO: The div starts at 1/2 down and 1/2 right of the parent
          // element, except for when its bounds are outside the viewport. In
          // that case, it should be repositioned to fit within the viewport.
          <div className="relative top-1/2 left-1/2" ref={pickerRef}>
            <HexColorPicker color={color} onChange={setColor} />
          </div>
        )}
      </div>
    </>
  )
}

function PaletteHeaderBox() {
  return (
    <div className="place-self-center col-span-2">
      <PaletteHeader />
      <PaletteInfo />
    </div>
  )
}

function PaletteMix() {
  return (
    <div className="grid grid-flow-row grid-cols-8 gap-3 text-center p-3">
      <PaletteHeaderBox />
      <PaletteColorBox bgColor="#5d6068" />
      <PaletteColorBox bgColor="#5d6068" />
      <PaletteColorBox bgColor="#5d6068" />
      <PaletteColorBox bgColor="#5d6068" />
      <PaletteColorBox bgColor="#5d6068" />
      <PaletteColorBox bgColor="#5d6068" />
      <PaletteColorBox bgColor="#15171d" />
      <PaletteColorBox bgColor="#d4737f" />
      <PaletteColorBox bgColor="#90b782" />
      <PaletteColorBox bgColor="#ffcda4" />
      <PaletteColorBox bgColor="#86a5be" />
      <PaletteColorBox bgColor="#8f729a" />
      <PaletteColorBox bgColor="#76af9d" />
      <PaletteColorBox bgColor="#5d6068" />
      <PaletteColorBox bgColor="#3b3e46" />
      <PaletteColorBox bgColor="#c45361" />
      <PaletteColorBox bgColor="#607f55" />
      <PaletteColorBox bgColor="#d6ae86" />
      <PaletteColorBox bgColor="#4b799e" />
      <PaletteColorBox bgColor="#9b68b3" />
      <PaletteColorBox bgColor="#487e6d" />
      <PaletteColorBox bgColor="#c7d0e0" />
    </div>
  )
}

function PaletteWindow() {
  return (
    <div className="bg-stone-900">
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
