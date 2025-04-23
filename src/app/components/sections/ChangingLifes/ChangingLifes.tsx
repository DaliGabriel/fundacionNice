import ChangingLifesDesktop from "./ChangingLifesDesktop";
import ChangingLifesmobile from "./ChangingLifesmobile";

const ChangingLifes = () => {
  return (
    <>
      <div className="hidden md:block">
        <ChangingLifesDesktop />
      </div>
      <div className="block md:hidden">
        <ChangingLifesmobile />
      </div>
    </>
  );
};

export default ChangingLifes;
