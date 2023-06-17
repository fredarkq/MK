import cn from "classnames";
import { FC,useEffect, useState } from "react";
import Cyrax from "../../assets/imsges/fighters/Cyrax.png";
import Kabal from "../../assets/imsges/fighters/Kabal.png";
import kano from "../../assets/imsges/fighters/Kano.png";
import KungLao from "../../assets/imsges/fighters/KungLao.png";
import Mileena from "../../assets/imsges/fighters/Mileena.png";
import Scorpion from "../../assets/imsges/fighters/Scorpion.png";
import Sektor from "../../assets/imsges/fighters/Sektor.png";
import ShangTsung from "../../assets/imsges/fighters/ShangTsung.png";
import Sheeva from "../../assets/imsges/fighters/Sheeva.png";
import subZero from "../../assets/imsges/fighters/Sub-Zero.png";
import jax from "../../assets/imsges/fighters/jax.png";
import Kitana from "../../assets/imsges/fighters/kitana.png";
import liuKang from "../../assets/imsges/fighters/liuKang.png";
import reptile from "../../assets/imsges/fighters/reptile.png";
import sonya from "../../assets/imsges/fighters/sonya.png";

import "./styles.scss";

interface Fighter {
  name: string;
  image: any;
}

interface iProps {
  setAllFightersSelected: (value: boolean) => void;
  setFightersInfo: (value: any) => void;
}

const FighterSelection: FC<iProps> = ({
  setAllFightersSelected,
  setFightersInfo,
}) => {
  const fighters: Fighter[][] = [
    [
      { name: "Scorpion", image: Scorpion },
      { name: "Sub-Zero", image: subZero },
      { name: "Liu Kang", image: liuKang },
      { name: "Kitana", image: Kitana },
      { name: "Reptile", image: reptile },
    ],
    [
      { name: "Sonya", image: sonya },
      { name: "Sheeva", image: Sheeva },
      { name: "Jax", image: jax },
      { name: "Kano", image: kano },
      { name: "Mileena", image: Mileena },
    ],
    [
      { name: "Kabal", image: Kabal },
      { name: "Kung Lao", image: KungLao },
      { name: "Shang Tsung", image: ShangTsung },
      { name: "Cyrax", image: Cyrax },
      { name: "Sektor", image: Sektor },
    ],
  ];

  const [selectedFighter, setSelectedFighter] = useState<Fighter | null>(null);
  const [selectedFighter2, setSelectedFighter2] = useState<Fighter | null>(
    null
  );
  const [selectedRowIndex, setSelectedRowIndex] = useState<number>(0);
  const [selectedColIndex, setSelectedColIndex] = useState<number>(0);
  const [selectedRowIndex2, setSelectedRowIndex2] = useState<number>(0);
  const [selectedColIndex2, setSelectedColIndex2] = useState<number>(4);
  const [p1selected, setP1Selected] = useState(false);
  const [p2selected, setP2Selected] = useState(false);
  const [timeoutId, setTimeoutId] = useState(null);

  useEffect(() => {
    const performAction = () => {
      setAllFightersSelected(true);
      setFightersInfo({ selectedFighter, selectedFighter2 });
    };

    const cancelTimeout = () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
        setTimeoutId(null);
      }
    };

    const setNewTimeout = () => {
      const newTimeoutId: any = setTimeout(() => {
        cancelTimeout();
        performAction();
      }, 2000);
      setTimeoutId(newTimeoutId);
    };

    const stateChanged = () => {
      if (p1selected && p2selected) {
        cancelTimeout();
        setNewTimeout();
      } else {
        cancelTimeout();
      }
    };

    stateChanged();

    return () => {
      cancelTimeout();
    };
  }, [p1selected, p2selected]);

  const handleFighterSelection = (fighter: Fighter): void => {
    setSelectedFighter(fighter);
  };

  const handleKeyDown = (event: any): void => {
    switch (event.keyCode) {
      case 87:
        setP1Selected(false);
        setSelectedRowIndex((prevRowIndex: number) =>
          prevRowIndex === 0 ? fighters.length - 1 : prevRowIndex - 1
        );
        break;
      case 83:
        setP1Selected(false);
        setSelectedRowIndex((prevRowIndex: number) =>
          prevRowIndex === fighters.length - 1 ? 0 : prevRowIndex + 1
        );
        break;
      case 65:
        setP1Selected(false);
        setSelectedColIndex((prevColIndex: number) =>
          prevColIndex === 0
            ? fighters[selectedRowIndex].length - 1
            : prevColIndex - 1
        );
        break;
      case 68:
        setP1Selected(false);
        setSelectedColIndex((prevColIndex: number) =>
          prevColIndex === fighters[selectedRowIndex].length - 1
            ? 0
            : prevColIndex + 1
        );
        break;
      case 16:
        setP1Selected((prevp1Selected: boolean) => !prevp1Selected);
        break;
      default:
        break;
    }
  };

  const handleKeyDown2 = (event: any): void => {
    switch (event.keyCode) {
      case 38:
        setP2Selected(false);
        setSelectedRowIndex2((prevRowIndex2: number) =>
          prevRowIndex2 === 0 ? fighters.length - 1 : prevRowIndex2 - 1
        );

        break;
      case 40:
        setP2Selected(false);

        setSelectedRowIndex2((prevRowIndex2: number) =>
          prevRowIndex2 === fighters.length - 1 ? 0 : prevRowIndex2 + 1
        );
        break;
      case 37:
        setP2Selected(false);

        setSelectedColIndex2((prevColIndex2: number) =>
          prevColIndex2 === 0
            ? fighters[selectedRowIndex2].length - 1
            : prevColIndex2 - 1
        );
        break;
      case 39:
        setP2Selected(false);

        setSelectedColIndex2((prevColIndex2: number) =>
          prevColIndex2 === fighters[selectedRowIndex2].length - 1
            ? 0
            : prevColIndex2 + 1
        );
        break;
      case 13:
        setP2Selected((prevp2Selected: boolean) => !prevp2Selected);
        break;
      default:
        break;
    }
  };


  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("keydown", handleKeyDown2);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("keydown", handleKeyDown2);
    };
  }, []);

  useEffect(() => {
    setSelectedFighter(fighters[selectedRowIndex][selectedColIndex]);
    setSelectedFighter2(fighters[selectedRowIndex2][selectedColIndex2]);
  }, [
    selectedRowIndex,
    selectedColIndex,
    selectedColIndex2,
    selectedRowIndex2,
  ]);

  return (
    <div className="fighterPage">
      <div className="fighterPage_container">
        <div className="fighterPage_container_selectedBox">
          <span className="fighterPage_container-title selection">
            P1: {selectedFighter?.name}
          </span>
          <span className="fighterPage_container-title">
            SELECT YOUR FIGHTER
          </span>
          <span className="fighterPage_container-title selection">
            P2: {selectedFighter2?.name}
          </span>
        </div>
        {fighters.map((row: Fighter[], rowIndex: number) => (
          <div key={rowIndex} className="fighterPage_container_itemsRow">
            {row.map((fighter: Fighter, colIndex: number) => (
              <div
                key={colIndex}
                onClick={() => handleFighterSelection(fighter)}
                className={cn("fighterPage_container_itemsRow-item ", {
                  active:
                    rowIndex === selectedRowIndex &&
                    colIndex === selectedColIndex,
                  activeSec:
                    rowIndex === selectedRowIndex2 &&
                    colIndex === selectedColIndex2,
                  activeBoth:
                    rowIndex === selectedRowIndex2 &&
                    colIndex === selectedColIndex2 &&
                    rowIndex === selectedRowIndex &&
                    colIndex === selectedColIndex,
                  selectedP1:
                    p1selected &&
                    rowIndex === selectedRowIndex &&
                    colIndex === selectedColIndex,
                  selectedP2:
                    p2selected &&
                    rowIndex === selectedRowIndex2 &&
                    colIndex === selectedColIndex2,
                })}
              >
                <img src={fighter.image} alt="" />
              </div>
            ))}
          </div>
        ))}
        <h1 className="fighterPage_container-title">
          KOMBAT ZONE: SOUL CHAMBER
        </h1>

        {/* {selectedFighter && (
        <p className="selected-fighter">You have selected: {selectedFighter.name}</p>
      )} */}
      </div>
    </div>
  );
};

export default FighterSelection;
