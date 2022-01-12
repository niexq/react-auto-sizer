<p align="center">
  <a href="https://niexq.github.io/react-auto-sizer">
    <img width="100" src="https://raw.githubusercontent.com/niexq/picbed/main/picgo/react-auto-size-logo-new.png">
  </a>
</p>

<h1 align="center">Welcome to react-auto-sizer 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/npm/v/@oyyds/react-auto-sizer.svg" />
  <a href="https://github.com/niexq/react-auto-sizer#readme" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" />
  </a>
  <a href="https://github.com/niexq/react-auto-sizer/graphs/commit-activity" target="_blank">
    <img alt="Maintenance" src="https://img.shields.io/badge/Maintained%3F-yes-green.svg" />
  </a>
  <a href="https://standardjs.com" target="_blank">
    <img alt="Maintenance" src="https://img.shields.io/badge/code_style-standard-brightgreen.svg" />
  </a>
  <a href="https://github.com/niexq/react-auto-sizer/blob/main/LICENSE" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/github/license/niexq/react-auto-sizer" />
  </a>
  <a href="https://gitmoji.dev">
    <img src="https://img.shields.io/badge/gitmoji-%20😜%20😍-FFDD67.svg?style=flat-square" alt="Gitmoji">
  </a>
</p>

> React components that automatically calculate width and height

English | [ 简体中文 ](./README.zh_CN.md)

### 🏠 [Homepage](https://niexq.github.io/react-auto-sizer)

![](https://raw.githubusercontent.com/niexq/picbed/main/picgo/homepageen.gif)

### 📦 Install

```bash
  yarn add @oyyds/react-auto-sizer  # or npm i @oyyds/react-auto-sizer -S
```

### 🔨 Use

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

## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](https://github.com/niexq/react-auto-sizer/issues).

<!-- <a href="https://opencollective.com/react-auto-sizer/organization/0/website"><img src="https://avatars.githubusercontent.com/u/16329407?s=48&v=4"></a> -->

## ❤️ Show your support

Give a ⭐️ if this project helped you!

## 📝 License

This project is [MIT](https://github.com/niexq/react-auto-sizer/blob/main/LICENSE) licensed.

## 🐳 Link

[react-virtualized-auto-sizer](https://github.com/bvaughn/react-virtualized-auto-sizer)<br /> [ResizeObserver](https://developer.mozilla.org/zh-CN/docs/Web/API/ResizeObserver)

## 🌐 Browsers support

| <img src="https://raw.githubusercontent.com/niexq/picbed/main/picgo/chrome-logo.png" alt="Chrome" width="24px" height="24px" /><br/>Chrome | <img src="https://raw.githubusercontent.com/niexq/picbed/main/picgo/edge-logo.png" alt="IE / Edge" width="24px" height="24px" /><br/> Edge | <img src="https://raw.githubusercontent.com/niexq/picbed/main/picgo/firefox-logo.png" alt="Firefox" width="24px" height="24px" /><br/>Firefox | <img src="https://raw.githubusercontent.com/niexq/picbed/main/picgo/ie-logo.png" alt="Safari" width="24px" height="24px" /><br/>Internet Explorer | <img src="https://raw.githubusercontent.com/niexq/picbed/main/picgo/opera-logo.png" alt="Opera" width="24px" height="24px" /><br/>Opera | <img src="https://raw.githubusercontent.com/niexq/picbed/main/picgo/safari-logo.png" alt="Safari" width="24px" height="24px" /><br/>Safari | <img src="https://raw.githubusercontent.com/niexq/picbed/main/picgo/android-logo.png" alt="Safari" width="24px" height="24px" /><br/>WebView Android | <img src="https://raw.githubusercontent.com/niexq/picbed/main/picgo/chrome-logo.png" alt="Chrome" width="24px" height="24px" /><br/>Chrome Android | <img src="https://raw.githubusercontent.com/niexq/picbed/main/picgo/firefox-logo.png" alt="Firefox" width="24px" height="24px" /><br/>Firefox Android | <img src="https://raw.githubusercontent.com/niexq/picbed/main/picgo/opera-logo.png" alt="Opera" width="24px" height="24px" /><br/>Opera Android | <img src="https://raw.githubusercontent.com/niexq/picbed/main/picgo/safari-logo.png" alt="Safari" width="24px" height="24px" /><br/>Safari iOS | <img src="https://raw.githubusercontent.com/niexq/picbed/main/picgo/samsung-logo.png" alt="Samsung" width="24px" height="24px" /><br/>Samsung Internet |
| :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: |
| 64 | 79 | 69 | ❌ | 51 | 13.1 | 64 | 64 | 79 | 47 | 13.4 | 9.0 |
