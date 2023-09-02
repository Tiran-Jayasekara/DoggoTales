
const MenuIcon = ({ onClick }) => {
  return (
    <div onClick={onClick} className="menu-icon cursor-pointer">
      <div className="menu-line h-1 w-6 bg-black mb-1"></div>
      <div className="menu-line h-1 w-6 bg-black mb-1"></div>
      <div className="menu-line h-1 w-6 bg-black"></div>
    </div>
  );
};

export default MenuIcon;
