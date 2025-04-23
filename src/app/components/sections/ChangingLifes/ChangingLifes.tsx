import ChangingLifesDesktop from "./ChangingLifesDesktop";
import ChangingLifesmobile from "./ChangingLifesmobile";

const ChangingLifes = () => {
  return (
    <>
      <div className="hidden lg:block">
        <ChangingLifesDesktop />
      </div>
      <div className="block lg:hidden">
        <ChangingLifesmobile />
      </div>
    </>
  );
};

export default ChangingLifes;
