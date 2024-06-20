const IconWrapper = ({ children }) => {
    return (
      <div className="hover:bg-slate-200 hover:cursor-pointer rounded-full flex items-center h-9 w-9 justify-center">
        {children}
      </div>
    );
  };
  
  export default IconWrapper;
  