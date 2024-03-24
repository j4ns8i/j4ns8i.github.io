import { useCallback, useRef, useState } from 'react';
import { HexColorPicker } from "react-colorful";
import useClickOutside from "../lib/useClickOutside";

function PaletteColorBox({ bgColor }: { bgColor: string }) {
  const baseRef = useRef<HTMLDivElement>(null);
  const pickerRef = useRef<HTMLInputElement>(null);
  const [color, setColor] = useState(bgColor);
  const [isOpen, setOpen] = useState(false);

  const close = useCallback(() => setOpen(false), []);
  const openIfNot = useCallback(() => !isOpen && setOpen(true), [isOpen]);
  useClickOutside(pickerRef, close);

  const changeColors = (color: string) => {
    setColor(color);
    document.documentElement.style.setProperty('--color-cterm-1', color);
  }

  return (
    <>
      <div
        ref={baseRef}
        className={`h-20 rounded-md border-2 border-zinc-800`}
        style={{ backgroundColor: color }}
        onClick={openIfNot}
      >
        {isOpen && (
          // TODO: The div starts at 1/2 down and 1/2 right of the parent
          // element, except for when its bounds are outside the viewport. In
          // that case, it should be repositioned to fit within the viewport.
          <div className="relative top-1/2 left-1/2" ref={pickerRef}>
            <HexColorPicker color={color} onChange={changeColors} />
          </div>
        )}
      </div>
    </>
  )
}

export default PaletteColorBox;
