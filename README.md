# react-avatar-fractal

> Generates fractal from string(user name, email, nickname, etc..) that can be used as avatar

[![NPM](https://img.shields.io/npm/v/react-avatar-fractal.svg)](https://www.npmjs.com/package/react-avatar-fractal) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-avatar-fractal
```

## Usage

```jsx
import AvatarFractal from 'react-avatar-fractal'

function Example {
  return (
    <AvatarFractal value="Arnold Schwarzenegger" size={200} />
  )
}
```

## Props

| Name                     | Type       | Description                                                                                  |
| ------------------------ | ---------- | -------------------------------------------------------------------------------------------- |
| `value`                  | `String`   | **Required.** Any name/email/nickname.                                                       |
| `size`                   | `Number`   |  Size of avatar in px.                                                                       |
| `scale`                  | `Number`   |  Scale of fractal (0.45 default)                                                             |

## License

MIT © [dikhtenkott](https://github.com/dikhtenkott)
