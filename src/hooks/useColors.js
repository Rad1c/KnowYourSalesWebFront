import { useState, useEffect } from 'react';

export const useColor = (role) => {
  const [primaryColor, setPrimaryColor] = useState("#55347f")
  const [secondaryColor, setSecondaryColor] = useState("#3B2559")
  const [searchColor, setSearchColor] = useState("rgba(59, 37, 89, 0.6)")

  useEffect(() => {
    switch (role) {
      case "User":
        setPrimaryColor("#7F3551");
        setSecondaryColor("#592539")
        setSearchColor("rgba(89, 37, 57, 0.6)");
        break;
      case "Commerce":
        setPrimaryColor("#357F54");
        setSecondaryColor("#25593B")
        setSearchColor("rgba(37, 89, 59, 0.6)");
        break;
      default:
        setPrimaryColor("#55347f");
        setSecondaryColor("#3B2559")
        setSearchColor("rgba(59, 37, 89, 0.6)");
    }
  }, [role])

  return { primaryColor, secondaryColor, searchColor };
}