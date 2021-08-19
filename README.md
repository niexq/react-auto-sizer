<h1 align="center">欢迎来到 react-auto-sizer 👋</h1>
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

> 自动计算宽高的react组件

简体中文 | [English](./README.en-US.md)

### 🏠 [预览](https://niexq.github.io/react-auto-sizer)

### 📦 安装

```bash
  yarn add @oyyds/react-auto-sizer  # or npm i @oyyds/react-auto-sizer -S
```

### 🔨 使用

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

## 🦧 作者

* Github: [@niexq](https://github.com/niexq)

## 🤝 贡献

欢迎投稿、问题和功能请求！<br />随时检查 [issues](https://github.com/niexq/react-auto-sizer/issues).
<!-- <a href="https://opencollective.com/react-auto-sizer/organization/0/website"><img src="https://avatars.githubusercontent.com/u/16329407?s=48&v=4"></a> -->

## 表达您的支持

如果这个项目对你有帮助，请给一个⭐️！

## 📝 License

这个项目是 [MIT](https://github.com/niexq/react-auto-sizer/blob/main/LICENSE) licensed.

## 🐳 灵感来源

[react-virtualized-auto-sizer](https://github.com/bvaughn/react-virtualized-auto-sizer)
[ResizeObserver](https://developer.mozilla.org/zh-CN/docs/Web/API/ResizeObserver)

***
_这个 README 是由 ❤️ [readme-md-generator](https://github.com/kefranabg/readme-md-generator)生成的_