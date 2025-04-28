import WaveBottom from "../sections/ChangingLifes/Shapes/WaveBottom";

const WaveEffect = () => {
  return (
    <div
      className="absolute left-0 right-0 w-full pointer-events-none custom-wave-effect-top"
      style={{
        top: "560px",
        zIndex: 11,
      }}
    >
      <WaveBottom />
    </div>
  );
};

export default WaveEffect;
