// import circleQuestion from './assets/circle-question.svg'

// import iro from "@jaames/iro"
import { MouseEvent, useRef, useState } from "react"
import { HexColorPicker } from "react-colorful";

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
  const [visible, setVisible] = useState(false);
  const [bgc, setBgc] = useState(bgColor);

  const handleClick = (event: MouseEvent) => {
    if (visible) {
      return
    }
    setVisible(true)
    const x = event.clientX, y = event.clientY
    pickerRef.current!.style.left = `${x}px`
    pickerRef.current!.style.top = `${y}px`
    // Color.close();
    // const picker = 
    // const picker = iro.ColorPicker(pickerRef.current!, {
    //   width: 300,
    //   borderColor: '#292524',
    //   borderWidth: 0,
    //   handleRadius: 10,
    //   layout: [
    //     {
    //       component: iro.ui.Box,
    //     },
    //     {
    //       component: iro.ui.Slider,
    //       options: {
    //         sliderType: 'hue'
    //       }
    //     },
    //   ]
    // });
    // picker.on('color:change', (c: iro.Color) => {
    //   baseRef.current!.style.backgroundColor = c.hexString;
    // });
    // picker.on('input:end', () => {
    //   console.log('input:end');
    // })
    // picker.
  }

  // const co = <div ref={baseRef} key={bgc} className={`h-20 rounded-sm ${bgc}`} onClick={handleClick}></div>;
  // if (visible) {
  //   return <>
  //     {co}
  //     <div ref={pickerRef} className='fixed' ></div >
  //   </>;
  // } else {
  //   return co;
  // }

  return (
    <>
      <div ref={baseRef} key={bgc} className={`h-20 rounded-sm ${bgc}`} onClick={handleClick}></div>
      {/* TODO: add HexColorPicker here */}
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
      <PaletteColorBox bgColor="bg-cterm-0" />
      <PaletteColorBox bgColor="bg-cterm-1" />
      <PaletteColorBox bgColor="bg-cterm-2" />
      <PaletteColorBox bgColor="bg-cterm-3" />
      <PaletteColorBox bgColor="bg-cterm-4" />
      <PaletteColorBox bgColor="bg-cterm-5" />
      <PaletteColorBox bgColor="bg-cterm-6" />
      <PaletteColorBox bgColor="bg-cterm-7" />
      <PaletteColorBox bgColor="bg-cterm-8" />
      <PaletteColorBox bgColor="bg-cterm-9" />
      <PaletteColorBox bgColor="bg-cterm-10" />
      <PaletteColorBox bgColor="bg-cterm-11" />
      <PaletteColorBox bgColor="bg-cterm-12" />
      <PaletteColorBox bgColor="bg-cterm-13" />
      <PaletteColorBox bgColor="bg-cterm-14" />
      <PaletteColorBox bgColor="bg-cterm-15" />
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
