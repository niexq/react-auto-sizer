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
</p>

> React components that automatically calculate width and height

[ 简体中文 ](./README.md) | English

### 🏠 [Homepage](https://niexq.github.io/react-auto-sizer)

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
              height
            }}
          >Content area</div>
        )}
      </AutoSizer>
    </div>
  )
}
```

## 🦧 Author

* Website: https://juejin.cn/user/4318537404123688/posts
* Github: [@niexq](https://github.com/niexq)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](https://github.com/niexq/react-auto-sizer/issues). 
<!-- <a href="https://opencollective.com/react-auto-sizer/organization/0/website"><img src="https://avatars.githubusercontent.com/u/16329407?s=48&v=4"></a> -->

## Show your support

Give a ⭐️ if this project helped you!

## 📝 License

This project is [MIT](https://github.com/niexq/react-auto-sizer/blob/main/LICENSE) licensed.

## 🐳 Link

[react-virtualized-auto-sizer](https://github.com/bvaughn/react-virtualized-auto-sizer)
[ResizeObserver](https://developer.mozilla.org/zh-CN/docs/Web/API/ResizeObserver)

***
_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_