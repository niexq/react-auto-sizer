<h1 align="center">Welcome to react-auto-sizer 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000" />
  <a href="https://github.com/niexq/react-auto-sizer#readme" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" />
  </a>
  <a href="https://github.com/niexq/react-auto-sizer/graphs/commit-activity" target="_blank">
    <img alt="Maintenance" src="https://img.shields.io/badge/Maintained%3F-yes-green.svg" />
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
  yarn add react-auto-sizer  # or npm i react-auto-sizer -S
```


### 🔨 Use

```tsx | pure
import AutoSizer from 'react-auto-sizer';

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

## Author

* Website: https://juejin.cn/user/4318537404123688/posts
* Github: [@niexq](https://github.com/niexq)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](https://github.com/niexq/react-auto-sizer/issues). 
<a href="https://opencollective.com/react-auto-sizer/organization/0/website"><img src="https://opencollective.com/react-auto-sizer/organization/0/avatar.svg"></a>

## Show your support

Give a ⭐️ if this project helped you!

## 📝 License

This project is [MIT](https://github.com/niexq/react-auto-sizer/blob/main/LICENSE) licensed.

***
_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_