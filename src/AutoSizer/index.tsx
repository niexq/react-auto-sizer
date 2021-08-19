import React, { useRef, useEffect, useState } from 'react';

interface Size {
  height?: number;
  width?: number;
}

interface OuterStyle {
  overflow?: string;
  height?: number;
  width?: number;
}

export interface AutoSizerProps {
  /** Function responsible for rendering children. */
  children: (size: Size) => React.ReactNode;

  /** Optional custom CSS class name to attach to root AutoSizer element. */
  className?: string;

  /** Optional inline style */
  style?: Object;

  /** Default height to use for initial render; useful for SSR */
  defaultHeight?: number;

  /** Default width to use for initial render; useful for SSR */
  defaultWidth?: number;

  /** Disable dynamic :height property */
  disableHeight?: boolean;

  /** Disable dynamic :width property */
  disableWidth?: boolean;

  /** Callback to be invoked on-resize */
  onResize?: (size: Size, entry?: ResizeObserverEntry) => void;
}

const AutoSizer: React.FC<AutoSizerProps> = props => {
  const {
    children,
    className,
    style,
    defaultHeight,
    defaultWidth,
    disableHeight,
    disableWidth,
    onResize,
  } = props;
  let _autoSizer = useRef(null);
  const [bailoutOnChildren, setBailoutOnChildren] = useState<boolean>(false);
  const [outerStyle, setOuterStyle] = useState<OuterStyle>({});
  const [childParams, setChildParams] = useState<Size>({
    width: defaultWidth,
    height: defaultHeight,
  });

  useEffect(() => {
    const observer = new (window as any).ResizeObserver(
      (entries: ResizeObserverEntry[]) => {
        for (let entry of entries) {
          const contentRect = entry.contentRect;
          const width = Math.trunc(contentRect?.width || 0);
          const height = Math.trunc(contentRect?.height || 0);
          updateState(width, height);
          if (typeof onResize === 'function') {
            onResize({ width, height }, entry);
          }
        }
      },
    );
    observer.observe(_autoSizer?.current?.['parentNode']);
    return () => {
      observer.disconnect();
    };
  }, []);

  const updateState = (newWidth: number, newHeight: number) => {
    const newOuterStyle: OuterStyle = { overflow: 'visible' };
    const newChildParams: Size = { ...childParams };

    let newBailoutOnChildren = false;

    if (!disableHeight) {
      newBailoutOnChildren = newHeight === 0;
      // newOuterStyle.height = 0;
      newChildParams.height = newHeight;
    }

    if (!disableWidth) {
      newBailoutOnChildren = newWidth === 0;
      // newOuterStyle.width = 0;
      newChildParams.width = newWidth;
    }
    setBailoutOnChildren(newBailoutOnChildren);
    setOuterStyle(newOuterStyle);
    setChildParams(newChildParams);
  };
  return (
    <div
      className={className}
      ref={_autoSizer}
      style={{
        ...outerStyle,
        ...style,
      }}
    >
      {!bailoutOnChildren && children(childParams)}
    </div>
  );
};

AutoSizer.displayName = 'AutoSizer';

AutoSizer.defaultProps = {
  disableHeight: false,
  disableWidth: false,
};

export default React.memo(AutoSizer);
