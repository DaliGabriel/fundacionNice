import BlueCircle from "./BlueCircle";
import YellowLineCircle from "./YellowLineCircle";
const RightDecoration = () => {
  return (
    <div className="absolute right-0 top-0">
      {/* Light Blue Circle */}
      <BlueCircle />

      {/* Dotted Circle with Yellow Stroke */}
      <YellowLineCircle />
    </div>
  );
};

export default RightDecoration;
