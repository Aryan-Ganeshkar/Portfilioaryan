import ShimmerButton from "../magicui/ShimmerButton";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FollowerPointerCard, TitleComponent } from "../magicui/Pointer";
import photo from "../assets/photo.jpeg";

const Navbar = () => {

  return (
    <div className="flex justify-between m-2 border-b-[1px]">
      <div>
      <FollowerPointerCard
        title={
          <TitleComponent
            title={"Aryan"}
            avatar={photo}
          />
        }
      >  <h2 className="text-blue-500 font-bold text-2xl">Aryan</h2>
</FollowerPointerCard>
      </div>
      <div className="flex gap-2">
        <div className="cursor-pointer">
            <ShimmerButton to="https://github.com/Ankitb3">
              <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight bg-white text-black lg:text-lg">
                <FaGithub />
              </span>
            </ShimmerButton>
        </div>
        <div className=" cursor-pointer">
          <ShimmerButton to="https://linkedin.com/in/ankit-bankar-b36a65256/">
            <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight  bg-white text-black  lg:text-lg">
              <FaLinkedinIn />
            </span>
          </ShimmerButton>
        </div>

        {/* <div className=" cursor-pointer">
          <ShimmerButton onClick={handleSwitch}>
            {theme === "light"? <IoSunnyOutline/>:  <FaMoon /> }
          
          </ShimmerButton>
        </div> */}
      </div>
    </div>
  );
};

export default Navbar;
