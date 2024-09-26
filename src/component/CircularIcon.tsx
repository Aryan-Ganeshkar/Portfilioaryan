interface Props{
    icon:string,
}
const CircularIcon = ({ icon }:Props) => {
  return (
    <div className="relative w-[40px] h-[40px] rounded-full bg-red-900 cursor-pointer flex items-center justify-center overflow-hidden transition-transform duration-300 transform-gpu hover:-translate-y-1">
      {icon}
    </div>
  );
};

export default CircularIcon;
