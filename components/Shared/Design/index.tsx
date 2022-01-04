import { FC, useRef, useState, useEffect } from 'react';

import styles from './Design.module.scss';

interface IDesign {
  colorName: string;
  color: string;
}

const Design: FC<IDesign> = ({ colorName, color }) => {
  const colorRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  const handleClickOutside = (event: any) => {
    if (
      colorRef.current &&
      !colorRef.current.contains(event.target)
      // && colorRef.current?.classList[0] !== event.target.classList[0]
    ) {
      // console.log(event.target.classList[0]);

      setActive(false);
    }
  };

  console.log(colorRef.current?.classList[0]);

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  });

  return (
    <div ref={colorRef} onClick={() => setActive(!active)} className={`${styles.design} ${active ? styles.design_active : ''}`}>
      <span>{colorName}</span>
      <div style={{ backgroundColor: color }}></div>
    </div>
  );
};

export default Design;
