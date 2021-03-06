import React, { useRef, useEffect, useState, useMemo, useCallback } from 'react';

export interface SizeType {
  height?: number;
  width?: number;
}

interface OuterStyleType {
  overflow?: string;
  height?: number;
  width?: number;
}

export interface AutoSizerProps {
  /** Function responsible for rendering children. */
  children: (size: SizeType) => React.ReactNode;

  /** Optional custom CSS class name to attach to root AutoSizer element. */
  className?: string;

  /** Optional inline style */
  style?: React.CSSProperties;

  /** Default height to use for initial render; useful for SSR */
  defaultHeight?: number;

  /** Default width to use for initial render; useful for SSR */
  defaultWidth?: number;

  /** Disable dynamic :height property */
  disableHeight?: boolean;

  /** Disable dynamic :width property */
  disableWidth?: boolean;

  /** Callback to be invoked on-resize */
  onResize?: (size: SizeType, entry?: ResizeObserverEntry) => void;
}

const AutoSizer: React.FC<AutoSizerProps> = (props) => {
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
  const [bailoutOnChildren, setBailoutOnChildren] = useState<boolean>(false);
  const [outerStyle, setOuterStyle] = useState<OuterStyleType>({});
  const [childParams, setChildParams] = useState<SizeType>({
    width: defaultWidth,
    height: defaultHeight,
  });
  const _autoSizerRef = useRef<HTMLDivElement>(null);
  const _childParamsRef = useRef<SizeType>(childParams);

  const updateState = useCallback(
    (newWidth: number, newHeight: number, entry: ResizeObserverEntry) => {
      const newOuterStyle: OuterStyleType = { overflow: 'visible' };
      const newChildParams: SizeType = { ...childParams };

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
      if (
        (!disableHeight && _childParamsRef.current?.height !== newHeight) ||
        (!disableWidth && _childParamsRef.current?.width !== newWidth)
      ) {
        setBailoutOnChildren(newBailoutOnChildren);
        setOuterStyle(newOuterStyle);
        setChildParams({ ...newChildParams });
        if (typeof onResize === 'function') {
          onResize({ ...newChildParams }, entry);
        }
      }
    },
    [childParams, disableHeight, disableWidth, onResize],
  );

  const observer = useMemo(
    () =>
      new ResizeObserver((entries: ResizeObserverEntry[]) => {
        for (const entry of entries) {
          const contentRect = entry.contentRect;
          const width = Math.trunc(contentRect?.width || 0);
          const height = Math.trunc(contentRect?.height || 0);
          updateState(width, height, entry);
        }
      }),
    [updateState],
  );

  useEffect(() => {
    _childParamsRef.current = childParams;
  }, [childParams]);

  useEffect(() => {
    if (!_autoSizerRef?.current?.parentNode) {
      throw new Error('Not Found AutoSizer parentNode');
    }
    observer.observe(_autoSizerRef?.current?.parentNode as Element);
    return () => {
      observer.disconnect();
    };
  }, [observer]);

  return (
    <div
      className={className}
      ref={_autoSizerRef}
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
