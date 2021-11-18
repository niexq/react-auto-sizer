import * as React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
// import { renderHook, act } from '@testing-library/react-hooks';
import AutoSizer from '../index';
import ResizeObserver from 'resize-observer-polyfill';

let listener;
window.ResizeObserver = class NewResizeObserver extends ResizeObserver {
  constructor(ls) {
    super(ls);
    listener = ls;
  }
};
// window.ResizeObserver =
//   window.ResizeObserver ||
//   jest.fn().mockImplementation(() => ({
//     disconnect: jest.fn(),
//     observe: jest.fn(),
//     unobserve: jest.fn(),
//   }));

let container = null;
beforeEach(() => {
  // 创建一个 DOM 元素作为渲染目标
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  // 退出时进行清理
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

describe('Jest -> AutoSizer', () => {
  const DefaultChildComponent = ({ height, width, foo }) => {
    const otherLabel = foo || foo === 0 ? `, foo: ${foo}` : '';
    return <div>{`width: ${width}, height: ${height}${otherLabel}`}</div>;
  };
  const AutoSizerComponent = ({
    ChildComponent = DefaultChildComponent,
    foo = undefined,
    className = undefined,
    style = undefined,
    defaultHeight = undefined,
    defaultWidth = undefined,
    disableHeight = false,
    disableWidth = false,
    onResize,
  } = {}) => {
    return (
      <div style={{ boxSizing: 'border-box' }}>
        <AutoSizer
          className={className}
          style={style}
          defaultHeight={defaultHeight}
          defaultWidth={defaultWidth}
          disableHeight={disableHeight}
          disableWidth={disableWidth}
          onResize={onResize}
        >
          {({ height, width }) => (
            <ChildComponent
              width={disableWidth ? undefined : width}
              height={disableHeight ? undefined : height}
              foo={foo}
            />
          )}
        </AutoSizer>
      </div>
    );
  };

  async function simulateResize({ width, height }) {
    act(() => {
      listener([
        {
          contentRect: {
            width,
            height,
          },
        },
      ]);
    });
    await new Promise((resolve) => setTimeout(resolve, 100));
  }

  describe('render React child and get width/height and set disableWidth/disableHeight', () => {
    it('should relay properties to ChildComponent or React child', () => {
      act(() => {
        render(<AutoSizerComponent foo={456} />, container);
      });

      expect(container.textContent).toContain('foo: 456');
    });

    it('should set the correct initial width and height of ChildComponent or React child', () => {
      // let listener = undefined;
      // window.ResizeObserver = class ResizeObserver {
      //   constructor(ls) {
      //     listener = ls;
      //   }
      //   observe() {}
      //   disconnect() {}
      // };

      act(() => {
        render(<AutoSizerComponent />, container);
      });

      act(() => {
        listener([
          {
            contentRect: {
              width: 100,
              height: 160,
            },
          },
        ]);
      });

      expect(container.textContent).toBe('width: 100, height: 160');
    });

    it('should not update :width if :disableWidth is true', () => {
      act(() => {
        render(<AutoSizerComponent disableWidth />, container);
      });

      act(() => {
        listener([
          {
            contentRect: {
              width: 200,
              height: 260,
            },
          },
        ]);
      });

      expect(container.textContent).toBe('width: undefined, height: 260');
    });

    it('should not update :height if :disableHeight is true', () => {
      act(() => {
        render(<AutoSizerComponent disableHeight />, container);
      });

      act(() => {
        listener([
          {
            contentRect: {
              width: 300,
              height: 360,
            },
          },
        ]);
      });

      expect(container.textContent).toBe('width: 300, height: undefined');
    });

    it('should update :height after a resize event', async (done) => {
      act(() => {
        render(<AutoSizerComponent />, container);
      });

      act(() => {
        listener([
          {
            contentRect: {
              width: 400,
              height: 460,
            },
          },
        ]);
      });

      expect(container.textContent).toBe('width: 400, height: 460');
      await simulateResize({ width: 500, height: 560 });
      expect(container.textContent).toBe('width: 500, height: 560');
      done();
    });
  });

  describe('onResize and (re)render', () => {
    it('should trigger when size changes', async (done) => {
      const onResize = jest.fn();
      const ChildComponent = jest.fn().mockImplementation(DefaultChildComponent);

      act(() => {
        render(
          <AutoSizerComponent ChildComponent={ChildComponent} onResize={onResize} />,
          container,
        );
      });

      act(() => {
        listener([
          {
            contentRect: {
              width: 600,
              height: 660,
            },
          },
        ]);
      });

      ChildComponent.mockClear();
      expect(onResize).toHaveBeenCalledTimes(1);
      await simulateResize({ width: 700, height: 760 });
      expect(ChildComponent).toHaveBeenCalledTimes(1);
      expect(onResize).toHaveBeenCalledTimes(2);
      done();
    });

    it('should only trigger when height changes for disableWidth == true', async (done) => {
      const onResize = jest.fn();
      const ChildComponent = jest.fn().mockImplementation(DefaultChildComponent);

      act(() => {
        render(
          <AutoSizerComponent ChildComponent={ChildComponent} onResize={onResize} disableWidth />,
          container,
        );
      });

      ChildComponent.mockClear();

      act(() => {
        listener([
          {
            contentRect: {
              width: 800,
              height: 860,
            },
          },
        ]);
      });

      expect(onResize).toHaveBeenCalledTimes(1);
      await simulateResize({ width: 900, height: 860 });
      expect(ChildComponent).toHaveBeenCalledTimes(1);
      expect(onResize).toHaveBeenCalledTimes(1);
      expect(container.textContent).toBe('width: undefined, height: 860');
      await simulateResize({ width: 800, height: 960 });
      expect(ChildComponent).toHaveBeenCalledTimes(2);
      expect(onResize).toHaveBeenCalledTimes(2);
      done();
    });

    it('should only trigger when width changes for disableHeight == true', async (done) => {
      const onResize = jest.fn();
      const ChildComponent = jest.fn().mockImplementation(DefaultChildComponent);

      act(() => {
        render(
          <AutoSizerComponent ChildComponent={ChildComponent} onResize={onResize} disableHeight />,
          container,
        );
      });

      ChildComponent.mockClear();

      act(() => {
        listener([
          {
            contentRect: {
              width: 1000,
              height: 1060,
            },
          },
        ]);
      });

      expect(onResize).toHaveBeenCalledTimes(1);
      await simulateResize({ width: 1000, height: 1160 });
      expect(ChildComponent).toHaveBeenCalledTimes(1);
      expect(onResize).toHaveBeenCalledTimes(1);
      await simulateResize({ width: 1100, height: 1060 });
      expect(ChildComponent).toHaveBeenCalledTimes(2);
      expect(onResize).toHaveBeenCalledTimes(2);
      done();
    });
  });

  describe('className and style', () => {
    it('should use a custom :className if specified', () => {
      act(() => {
        render(<AutoSizerComponent className="autoSizerContainer" />, container);
      });
      expect(container.firstChild.firstChild.className).toContain('autoSizerContainer');
    });

    it('should use a custom :style if specified', () => {
      act(() => {
        render(<AutoSizerComponent style={{ backgroundColor: 'blue' }} />, container);
      });
      expect(container.firstChild.firstChild.style.backgroundColor).toEqual('blue');
    });
  });
});
