import { useState, useEffect, FC, ReactElement } from 'react';
import ReactDOM from 'react-dom';

interface PortalProps {
  children: ReactElement<HTMLDivElement>;
}

const Portal: FC<PortalProps> = ({ children }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    return () => setMounted(false);
  }, []);

  return mounted ? ReactDOM.createPortal(children, document.querySelector('#portal') as Element) : null;
};

export default Portal;
