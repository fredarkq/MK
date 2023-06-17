import { FC, useEffect, useState } from "react";

import "./styles.scss";
import Box from "../../components/SelectingBox";

import Kitana from "../../assets/imsges/fighters/kitana.png";
import kano from "../../assets/imsges/fighters/Kano.png";
import Mileena from "../../assets/imsges/fighters/Mileena.png";
import Sektor from "../../assets/imsges/fighters/Sektor.png";
import sonya from "../../assets/imsges/fighters/sonya.png";
import reptile from "../../assets/imsges/fighters/reptile.png";

interface Fighters {
  selectedFighter: {
    name: string;
    image: any;
  };
  selectedFighter2: {
    name: string;
    image: any;
  };
}

interface iProps {
  fightersInfo: Fighters;
  setAllFightersSelected: (value: boolean) => void;
}

const images = [Kitana, kano, Mileena, Sektor, sonya, reptile];

const VSpage: FC<iProps> = ({ fightersInfo, setAllFightersSelected }) => {
  const [boxImages, setBoxImages] = useState<any>([0, 0, 0, 0, 0, 0]);

  useEffect(() => {
    setTimeout(() => {
      setAllFightersSelected(false);
    }, 4000);
  }, []);

  const handleChangeImage = (event: any): void => {
    switch (event.keyCode) {
      case 81:
        setBoxImages((prevBoxImages: any) => [
          ...prevBoxImages,
          (prevBoxImages[0] =
            prevBoxImages[0] + 1 < images.length ? prevBoxImages[0] + 1 : 0),
        ]);

        break;
      case 87:
        setBoxImages((prevBoxImages: any) => [
          ...prevBoxImages,
          (prevBoxImages[1] =
            prevBoxImages[1] + 1 < images.length ? prevBoxImages[1] + 1 : 0),
        ]);

        break;
      case 69:
        setBoxImages((prevBoxImages: any) => [
          ...prevBoxImages,
          (prevBoxImages[2] =
            prevBoxImages[2] + 1 < images.length ? prevBoxImages[2] + 1 : 0),
        ]);

        break;
      case 82:
        setBoxImages((prevBoxImages: any) => [
          ...prevBoxImages,
          (prevBoxImages[3] =
            prevBoxImages[3] + 1 < images.length ? prevBoxImages[3] + 1 : 0),
        ]);

        break;
      case 84:
        setBoxImages((prevBoxImages: any) => [
          ...prevBoxImages,
          (prevBoxImages[4] =
            prevBoxImages[4] + 1 < images.length ? prevBoxImages[4] + 1 : 0),
        ]);

        break;
      case 89:
        setBoxImages((prevBoxImages: any) => [
          ...prevBoxImages,
          (prevBoxImages[5] =
            prevBoxImages[5] + 1 < images.length ? prevBoxImages[5] + 1 : 0),
        ]);

        break;
      default:
        break;
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleChangeImage);

    return () => {
      document.removeEventListener("keydown", handleChangeImage);
    };
  }, []);


  return (
    <div className="vsPage">
      <div className="vsPage_header">
        <span>BATTLE</span>
        <span>1</span>
      </div>
      <div className="vsPage_mainContent">
        <img
          className="vsPage_mainContent-fighterImg"
          src={fightersInfo.selectedFighter.image}
          alt=""
        />
        <div className="vsPage_mainContent_buttonsRow">
          <Box image={images[boxImages[0]]} />
          <Box image={images[boxImages[1]]} />
          <Box image={images[boxImages[2]]} />
          <Box image={images[boxImages[3]]} />
          <Box image={images[boxImages[4]]} />
          <Box image={images[boxImages[5]]} />
        </div>
        <img
          className="vsPage_mainContent-fighterImg sec"
          src={fightersInfo.selectedFighter2.image}
          alt=""
        />
      </div>
    </div>
  );
};

export default VSpage;
