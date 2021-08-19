---
nav:
  title: Components
  path: /components
---

## AutoSizer

React components that automatically calculate width and height

## When to use

When the content area needs to display big data tables or big data lists, many big data components need to `specify width and height values` instead of `percentage width and height values`

## Code demo

```tsx
/**
 * title: Get width and height values
 * desc: Use the `render-props` mode to obtain the width and height of the element directly through `width`, `height`, adjust the size of the outer border of the above element, and dynamically obtain the real-time width and height of the element
 */

import React from 'react';
import AutoSizer from '@oyyds/react-auto-sizer';
import type { Size } from '@oyyds/react-auto-sizer';

export default () => (
  <div style={{ width: '100%', height: '100%', resize: 'both', border: '2px solid #ddd', overflow: 'auto' }}>
    <AutoSizer>
      {({ width, height }: Size) => (
        <div
          style={{ width, height }}
        >{`Content area (width: ${width}, height: ${height})`}</div>
      )}
    </AutoSizer>
  </div>
);
```

```tsx
/**
 * title: Callback to be invoked on-resize
 * desc: Obtained by the input parameter `onResize` method, the first Size is the real-time width and high value object of the element, and the second optional parameter, see details[ResizeObserver](https://developer.mozilla.org/zh-CN/docs/Web/API/ResizeObserver)
 */

import React from 'react';
import AutoSizer from '@oyyds/react-auto-sizer';
import type { Size } from '@oyyds/react-auto-sizer';

export default () => {
  const onResize = (size: Size, entry?: ResizeObserverEntry) => {
    console.log('onResize-size: ', size);
    console.log('onResize-entry: ', entry);
  }
  return (
    <div style={{ width: '100%', height: '100%', resize: 'both', border: '2px solid #ddd', overflow: 'auto' }}>
      <AutoSizer onResize={onResize}>
        {({ width, height }: Size) => (
          <div
            style={{ width, height }}
          >{`Content area (width: ${width}, height: ${height})`}</div>
        )}
      </AutoSizer>
    </div>
  );
}
```

```tsx
/**
 * title: disableHeight
 * desc: Controlled by the parameter `disableHeight`
 */

import React from 'react';
import AutoSizer from '@oyyds/react-auto-sizer';
import type { Size } from '@oyyds/react-auto-sizer';

export default () => (
  <div style={{ width: '100%', height: '100%', resize: 'both', border: '2px solid #ddd', overflow: 'auto' }}>
    <AutoSizer disableHeight>
      {({ width, height }: Size) => (
        <div
          style={{ width, height }}
        >{`Content area (width: ${width}, height: ${height})`}</div>
      )}
    </AutoSizer>
  </div>
);
```

```tsx
/**
 * title: disableWidth
 * desc: Controlled by the parameter `disableWidth`
 */

import React from 'react';
import AutoSizer from '@oyyds/react-auto-sizer';
import type { Size } from '@oyyds/react-auto-sizer';

export default () => (
  <div style={{ width: '100%', height: '100%', resize: 'both', border: '2px solid #ddd', overflow: 'auto' }}>
    <AutoSizer disableWidth>
      {({ width, height }: Size) => (
        <div
          style={{ width, height }}
        >{`Content area (width: ${width}, height: ${height})`}</div>
      )}
    </AutoSizer>
  </div>
);
```

## API

The attributes are described as follows:

| Attributes          | instruction                                            | Required | type                           | Defaults  | 版Version本 |
|---------------------|--------------------------------------------------------|------|---------------------------------|--------|----|
| children            | Function responsible for rendering children            | Y    | (size: Size) => React.ReactNode  |        |    |
| className           | Optional custom CSS class name to attach to root AutoSizer element  | 否    | string                           |        |    |
| style               | Optional inline style                                  | N    | Object                           |   |    |
| disableHeight       | Disable dynamic :height property                       | N    | boolean                           |   false  |    |
| disableWidth        | Disable dynamic :width property                        | N    | boolean                           |   false   |    |
| onResize            | Callback to be invoked on-resize                       | N    | (size: Size, entry?: ResizeObserverEntry) => void |   |    |

## Browsers support

| <img src="https://raw.githubusercontent.com/niexq/picbed/main/picgo/chrome-logo.png" alt="Chrome" width="24px" height="24px" /><br/>Chrome | <img src="https://raw.githubusercontent.com/niexq/picbed/main/picgo/edge-logo.png" alt="IE / Edge" width="24px" height="24px" /><br/> Edge | <img src="https://raw.githubusercontent.com/niexq/picbed/main/picgo/firefox-logo.png" alt="Firefox" width="24px" height="24px" /><br/>Firefox | <img src="https://raw.githubusercontent.com/niexq/picbed/main/picgo/ie-logo.png" alt="Safari" width="24px" height="24px" /><br/>Internet Explorer | <img src="https://raw.githubusercontent.com/niexq/picbed/main/picgo/opera-logo.png" alt="Opera" width="24px" height="24px" /><br/>Opera | <img src="https://raw.githubusercontent.com/niexq/picbed/main/picgo/safari-logo.png" alt="Safari" width="24px" height="24px" /><br/>Safari | <img src="https://raw.githubusercontent.com/niexq/picbed/main/picgo/android-logo.png" alt="Safari" width="24px" height="24px" /><br/>WebView Android | <img src="https://raw.githubusercontent.com/niexq/picbed/main/picgo/chrome-logo.png" alt="Chrome" width="24px" height="24px" /><br/>Chrome Android | <img src="https://raw.githubusercontent.com/niexq/picbed/main/picgo/firefox-logo.png" alt="Firefox" width="24px" height="24px" /><br/>Firefox Android | <img src="https://raw.githubusercontent.com/niexq/picbed/main/picgo/opera-logo.png" alt="Opera" width="24px" height="24px" /><br/>Opera Android | <img src="https://raw.githubusercontent.com/niexq/picbed/main/picgo/safari-logo.png" alt="Safari" width="24px" height="24px" /><br/>Safari iOS | <img src="https://raw.githubusercontent.com/niexq/picbed/main/picgo/samsung-logo.png" alt="Samsung" width="24px" height="24px" /><br/>Samsung Internet |
| :-------: | :-------: | :-------: | :-------: | :-------: | :-------: | :-------: | :-------: | :-------: | :-------: | :-------: | :-------: |
|    64     |    79     |    69     |    ❌     |    51     |   13.1    |    64     |    64     |    79     |    47     |   13.4    |    9.0    |