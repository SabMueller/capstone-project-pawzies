import DesktopView from './DesktopView';
import MobileView from './MobileView';

export default function Navigation({ isStatic }) {
  const width = window.innerWidth;
  const breakpoint = 376;

  return (
    <>
      {width < breakpoint ? (
        <MobileView isStatic={isStatic} />
      ) : (
        <DesktopView isStatic={isStatic} />
      )}
    </>
  );
}
