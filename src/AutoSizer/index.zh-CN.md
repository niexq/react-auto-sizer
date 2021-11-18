---
nav:
  title: 组件
  path: /components
---

## AutoSizer

自动计算宽高的 react 组件

## 何时使用

当内容区域需要展示大数据表格或大数据列表时，很多大数据组件需要`指定宽、高数值`，而不是`百分比的宽、高值`

## 代码演示

```tsx
/**
 * title: 获取宽、高数值
 * desc: 采用`render-props`模式，直接通过 `width`, `height` 来获取元素宽高，可调整上述元素外边框的尺寸，动态获取元素实时宽高
 */

import React from 'react';
import AutoSizer from '@oyyds/react-auto-sizer';
import type { SizeType } from '@oyyds/react-auto-sizer';

export default () => (
  <div
    style={{
      width: '100%',
      height: '100%',
      resize: 'both',
      border: '2px solid #ddd',
      overflow: 'auto',
    }}
  >
    <AutoSizer>
      {({ width, height }: SizeType) => (
        <div style={{ width, height }}>{`内容区域（宽：${width}，高：${height}）`}</div>
      )}
    </AutoSizer>
  </div>
);
```

```tsx
/**
 * title: 在调整大小时调用回调
 * desc: 通过入参 `onResize` 方法获取，第一个Size为元素实时宽、高值对象，第二个可选参数，详细见[ResizeObserver](https://developer.mozilla.org/zh-CN/docs/Web/API/ResizeObserver)
 */

import React from 'react';
import AutoSizer from '@oyyds/react-auto-sizer';
import type { SizeType } from '@oyyds/react-auto-sizer';

export default () => {
  const onResize = (size: SizeType, entry?: ResizeObserverEntry) => {
    console.log('onResize-size: ', size);
    console.log('onResize-entry: ', entry);
  };
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        resize: 'both',
        border: '2px solid #ddd',
        overflow: 'auto',
      }}
    >
      <AutoSizer onResize={onResize}>
        {({ width, height }: SizeType) => (
          <div style={{ width, height }}>{`内容区域（宽：${width}，高：${height}）`}</div>
        )}
      </AutoSizer>
    </div>
  );
};
```

```tsx
/**
 * title: 禁止高属性
 * desc: 通过入参 `disableHeight` 控制
 */

import React from 'react';
import AutoSizer from '@oyyds/react-auto-sizer';
import type { SizeType } from '@oyyds/react-auto-sizer';

export default () => (
  <div
    style={{
      width: '100%',
      height: '100%',
      resize: 'both',
      border: '2px solid #ddd',
      overflow: 'auto',
    }}
  >
    <AutoSizer disableHeight>
      {({ width, height }: SizeType) => (
        <div style={{ width, height }}>{`内容区域（宽：${width}，高：${height}）`}</div>
      )}
    </AutoSizer>
  </div>
);
```

```tsx
/**
 * title: 禁止宽属性
 * desc: 通过入参 `disableWidth` 控制
 */

import React from 'react';
import AutoSizer from '@oyyds/react-auto-sizer';
import type { SizeType } from '@oyyds/react-auto-sizer';

export default () => (
  <div
    style={{
      width: '100%',
      height: '100%',
      resize: 'both',
      border: '2px solid #ddd',
      overflow: 'auto',
    }}
  >
    <AutoSizer disableWidth>
      {({ width, height }: SizeType) => (
        <div style={{ width, height }}>{`内容区域（宽：${width}，高：${height}）`}</div>
      )}
    </AutoSizer>
  </div>
);
```

```tsx
/**
 * title: onResize 回调限制
 * desc: 当 `disableHeight` = true 时，父组件仅改变 `高度`，onResize不回调（`disableWidth` 同理）
 */

import React, { useState } from 'react';
import AutoSizer from '@oyyds/react-auto-sizer';
import type { SizeType } from '@oyyds/react-auto-sizer';

export default () => {
  const [height, setHeight] = useState<number>(200);
  const [width, setWidth] = useState<number>(300);
  const [onResizeCalledTimes, setOnResizeCalledTimes] = useState<number>(0);
  const onResize = (size: SizeType, entry?: ResizeObserverEntry) => {
    console.log('onResize-size: ', size);
    console.log('onResize-entry: ', entry);
    setOnResizeCalledTimes((prevTimes) => ++prevTimes);
  };
  return (
    <div style={{ width, height, resize: 'both', border: '2px solid #ddd', overflow: 'auto' }}>
      <AutoSizer onResize={onResize} disableHeight>
        {({ width, height }: SizeType) => (
          <div style={{ width, height }}>
            <div style={{ marginBottom: 20 }}>{`内容区域（宽：${width}，高：${height}）`}</div>
            <button onClick={() => setHeight((prevHeight) => prevHeight + 10)}>
              点击（高加10）
            </button>
            <button onClick={() => setWidth((prevWidth) => prevWidth + 10)}>点击（宽加10）</button>
            <div>{`onResize 被回调次数：${onResizeCalledTimes}`}</div>
          </div>
        )}
      </AutoSizer>
    </div>
  );
};
```

## API

详细属性说明如下：

| 属性 | 说明 | 是否必传 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- | --- |
| children | 负责渲染子级的函数 | 是 | (size: SizeType) => React.ReactNode |  |  |
| className | 附加到 AutoSizer 根元素的可选自定义 CSS 类名称 | 否 | string |  |  |
| style | 附加到 AutoSizer 根元素的可选内联样式 | 否 | Object |  |  |
| disableHeight | 禁用动态: height 属性 | 否 | boolean | false |  |
| disableWidth | 禁用动态: width 属性 | 否 | boolean | false |  |
| onResize | 在调整大小时调用的回调 | 否 | (size: SizeType, entry?: ResizeObserverEntry) => void |  |  |

## 浏览器兼容性

| <img src="https://raw.githubusercontent.com/niexq/picbed/main/picgo/chrome-logo.png" alt="Chrome" width="24px" height="24px" /><br/>Chrome | <img src="https://raw.githubusercontent.com/niexq/picbed/main/picgo/edge-logo.png" alt="IE / Edge" width="24px" height="24px" /><br/> Edge | <img src="https://raw.githubusercontent.com/niexq/picbed/main/picgo/firefox-logo.png" alt="Firefox" width="24px" height="24px" /><br/>Firefox | <img src="https://raw.githubusercontent.com/niexq/picbed/main/picgo/ie-logo.png" alt="Safari" width="24px" height="24px" /><br/>Internet Explorer | <img src="https://raw.githubusercontent.com/niexq/picbed/main/picgo/opera-logo.png" alt="Opera" width="24px" height="24px" /><br/>Opera | <img src="https://raw.githubusercontent.com/niexq/picbed/main/picgo/safari-logo.png" alt="Safari" width="24px" height="24px" /><br/>Safari | <img src="https://raw.githubusercontent.com/niexq/picbed/main/picgo/android-logo.png" alt="Safari" width="24px" height="24px" /><br/>WebView Android | <img src="https://raw.githubusercontent.com/niexq/picbed/main/picgo/chrome-logo.png" alt="Chrome" width="24px" height="24px" /><br/>Chrome Android | <img src="https://raw.githubusercontent.com/niexq/picbed/main/picgo/firefox-logo.png" alt="Firefox" width="24px" height="24px" /><br/>Firefox Android | <img src="https://raw.githubusercontent.com/niexq/picbed/main/picgo/opera-logo.png" alt="Opera" width="24px" height="24px" /><br/>Opera Android | <img src="https://raw.githubusercontent.com/niexq/picbed/main/picgo/safari-logo.png" alt="Safari" width="24px" height="24px" /><br/>Safari iOS | <img src="https://raw.githubusercontent.com/niexq/picbed/main/picgo/samsung-logo.png" alt="Samsung" width="24px" height="24px" /><br/>Samsung Internet |
| :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: |
| 64 | 79 | 69 | ❌ | 51 | 13.1 | 64 | 64 | 79 | 47 | 13.4 | 9.0 |
