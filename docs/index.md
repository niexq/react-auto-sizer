---
title: react-auto-sizer - React components that automatically calculate width and height
order: 10
hero:
  title: react-auto-sizer
  desc: 📖 React components that automatically calculate width and height
  actions:
    - text: Getting Started
      link: /components/auto-sizer
features:
  - icon: https://gw.alipayobjects.com/zos/bmw-prod/881dc458-f20b-407b-947a-95104b5ec82b/k79dm8ih_w144_h144.png
    title: Simple
    desc: Developers get started at zero cost
  - icon: https://gw.alipayobjects.com/zos/bmw-prod/d1ee0c6f-5aed-4a45-a507-339a4bfe076c/k7bjsocq_w144_h144.png
    title: small size
    desc: Using `render-props` mode, using `react-hook` and `ResizeObserver` implementation, the code is maximized and streamlined
  - icon: https://gw.alipayobjects.com/zos/bmw-prod/f093e060-726e-471c-a53e-e988ed3f560c/kj9t9sk7_w144_h144.png
    title: Production available
    desc: Has been tested and polished in enough business scenarios within the company
footer: Open-source MIT Licensed | Copyright © 2019-present<br />Powered by react-auto-sizer
---

## 📦 Install

```bash
  yarn add @oyyds/react-auto-sizer  # or npm i @oyyds/react-auto-sizer -S
```

## 🔨 Use

```tsx | pure
import AutoSizer from '@oyyds/react-auto-sizer';

const AutoSizeComponent = () => {
  return (
    <div>
      <AutoSizer>
        {({ width, height }) => (
          <div
            style={{
              width,
              height,
            }}
          >
            Content area
          </div>
        )}
      </AutoSizer>
    </div>
  );
};
```

## 🔑 Feedback and co-construction

| Github Issue | Dingding group |
| --- | --- |
| [react-auto-sizer/issues](https://github.com/niexq/react-auto-sizer/issues) | <img src="https://raw.githubusercontent.com/niexq/picbed/main/picgo/autosizerdingding.jpeg" width="150" /> |
