 const getCategoryFromPathname = (pathname) => {
    switch (pathname) {
      case "/men":
        return "men's clothing";
      case "/women":
        return "women's clothing";
      case "/":
        return "";
      default:
        return "";
    }
  };
  export default getCategoryFromPathname