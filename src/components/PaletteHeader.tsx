import PaletteHeaderText from './PaletteHeaderText';
import PaletteInfo from './PaletteInfo';

function PaletteHeader() {
  return (
    <div className="place-self-center col-span-2">
      <PaletteHeaderText />
      <PaletteInfo />
    </div>
  )
}

export default PaletteHeader;
