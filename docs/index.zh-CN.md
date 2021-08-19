---
title: react-auto-sizer - 自动计算宽高的react组件
order: 10
hero:
  title: react-auto-sizer
  desc: 📖 自动计算宽高的react组件
  actions:
    - text: 快速上手
      link: /zh-CN/components/auto-sizer
features:
  - icon: https://gw.alipayobjects.com/zos/bmw-prod/881dc458-f20b-407b-947a-95104b5ec82b/k79dm8ih_w144_h144.png
    title: 简单
    desc: 开发者零成本上手使用
  - icon: https://gw.alipayobjects.com/zos/bmw-prod/d1ee0c6f-5aed-4a45-a507-339a4bfe076c/k7bjsocq_w144_h144.png
    title: 体积小
    desc: 采用`render-props`模式，使用`react-hook`及`ResizeObserver`实现，代码最大化精简
  - icon: https://gw.alipayobjects.com/zos/bmw-prod/f093e060-726e-471c-a53e-e988ed3f560c/kj9t9sk7_w144_h144.png
    title: 生产可用
    desc: 已在公司内部经受过足够多的业务场景考验及打磨
footer: Open-source MIT Licensed | Copyright © 2019-present<br />Powered by react-auto-sizer
---

## 📦 安装

```bash
  yarn add @oyyds/react-auto-sizer  # or npm i @oyyds/react-auto-sizer -S
```


## 🔨 使用

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
              height
            }}
          >内容区</div>
        )}
      </AutoSizer>
    </div>
  )
}
```

## 🔑 反馈与共建

| Github Issue | 钉钉群 |
| --- | --- |
| [react-auto-sizer/issues](https://github.com/niexq/react-auto-sizer/issues) | <img src="https://raw.githubusercontent.com/niexq/picbed/main/picgo/autosizerdingding.jpeg" width="150" /> |
