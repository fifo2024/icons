---
title: Icon 图标
nav:
    title: 组件
    order: 1
group:
    title: 通用
    order: 1
toc: content
---

## 图标用法

```tsx
import React from 'react';
import { LeftOutlined } from 'fifo-icons';

export default () => (
    <div>
        <LeftOutlined />
        <LeftOutlined style={{ color: '#f0f', fontSize: '32px' }} />
        <LeftOutlined className="icon-cls" />
    </div>
);
```

## 线框风格

```tsx
import React from 'react';
import {
    LeftOutlined,
    RightOutlined,
    DownOutlined,
    UpOutlined,
} from 'fifo-icons';
import Wrapper from './wrapper';

import './index.md.css';


export default () => (
    <div className="icon">
        <Wrapper name="LeftOutlined">
            <LeftOutlined className="icon-style" />
        </Wrapper>
        <Wrapper name="RightOutlined">
            <RightOutlined className="icon-style" />
        </Wrapper>
        <Wrapper name="UpOutlined">
            <UpOutlined className="icon-style" />
        </Wrapper>
        <Wrapper name="DownOutlined">
            <DownOutlined className="icon-style" />
        </Wrapper>
    </div>
);
```

## 实底风格

```tsx
import React from 'react';

import './index.md.css';

export default () => (
    <div className="icon">

    </div>
);
```

## 双色风格

```tsx
import React from 'react';

export default () => <div></div>;
```

