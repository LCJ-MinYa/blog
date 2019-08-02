---
title: ReactJS单页转场动画
date: 2019-08-02 11:23:45
categories: js
tags:
- 前端
- javascript
- ReactJS
---

## package.json配置
```
{
  "name": "react-router-animation-demo",
  "version": "0.1.0",
  "private": true,
  "dependencies": {
    "antd": "^3.16.2",
    "react": "^16.8.6",
    "react-dom": "^16.8.6",
    "react-router-dom": "^5.0.0",
    "react-scripts": "2.1.8",
    "react-transition-group": "^2.9.0"
  },
  "scripts": {
    "start": "set PORT=8001 && react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  "eslintConfig": {
    "extends": "react-app"
  },
  "browserslist": [
    ">0.2%",
    "not dead",
    "not ie <= 11",
    "not op_mini all"
  ]
}
```

## 样式
```css
.router-wrapper {
  overflow: hidden;
}

/**
 * 右侧淡入，右侧淡出
 */
.forward-from-right-enter {
  z-index: 2;
  opacity: 0;
  transform: translateX(100%);
}

.forward-from-right-enter-active {
  z-index: 2;
  opacity: 1;
  transform: translateX(0);
  transition: all 500ms;
}

.forward-from-right-exit {
  z-index: 1;
  opacity: 1;
}

.forward-from-right-exit-active {
  z-index: 1;
  opacity: .3;
  transition: all 500ms;
}

.back-to-right-enter {
  z-index: 1;
  opacity: .3;
}

.back-to-right-enter-active {
  z-index: 1;
  opacity: 1;
  transform: translateX(0);
  transition: all 500ms;
}

.back-to-right-exit {
  z-index: 2;
  opacity: 1;
  transform: translateX(0);
}

.back-to-right-exit-active {
  z-index: 2;
  opacity: 0;
  transform: translate(100%);
  transition: all 500ms;
}

/**
 * 下方淡入，下方淡出
 */
.forward-from-bottom-enter {
  z-index: 2;
  opacity: 0;
  transform: translateY(100%);
}

.forward-from-bottom-enter-active {
  z-index: 2;
  opacity: 1;
  transform: translateY(0);
  transition: all 500ms;
}

.forward-from-bottom-exit {
  z-index: 1;
  opacity: 1;
}

.forward-from-bottom-exit-active {
  z-index: 1;
  opacity: .3;
  transition: all 500ms;
}

.back-to-bottom-enter {
  z-index: 1;
  opacity: .3;
}

.back-to-bottom-enter-active {
  z-index: 1;
  opacity: 1;
  transition: all 500ms;
}

.back-to-bottom-exit {
  z-index: 2;
  opacity: 1;
  transform: translateY(0);
}

.back-to-bottom-exit-active {
  z-index: 2;
  opacity: 0;
  transform: translateY(100%);
  transition: all 500ms;
}
```

## 核心JS
```js
import React from 'react';

import {
  Route,
  Switch,
  withRouter,
  BrowserRouter
} from 'react-router-dom';

import './index.css';
import { RouterConfig } from './RouteConfig';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const DEFAULT_SCENE_CONFIG = {
  enter: 'from-right',
  exit: 'to-exit'
};

const getSceneConfig = location => {
  const matchedRoute = RouterConfig.find(config => new RegExp(`^${config.path}$`).test(location.pathname));
  return (matchedRoute && matchedRoute.sceneConfig) || DEFAULT_SCENE_CONFIG;
};

let oldLocation = null;
const Routes = withRouter(({ location, history }) => {
  console.log(location, history);
  debugger;
  // 转场动画应该都是采用当前页面的sceneConfig，所以：
  // push操作时，用新location匹配的路由sceneConfig
  // pop操作时，用旧location匹配的路由sceneConfig
  let classNames = '';
  if (history.action === 'PUSH') {
    classNames = 'forward-' + getSceneConfig(location).enter;
  } else if (history.action === 'POP' && oldLocation) {
    classNames = 'back-' + getSceneConfig(oldLocation).exit;
  }
  console.log(classNames);
  // 更新旧location
  oldLocation = location;

  return (
    <TransitionGroup
      className={'router-wrapper'}
      childFactory={child => React.cloneElement(child, { classNames })}
    >
      <CSSTransition timeout={500} key={location.pathname}>
        <Switch location={location}>
          {RouterConfig.map((config, index) => (
            <Route exact key={index} {...config} />
          ))}
        </Switch>
      </CSSTransition>
    </TransitionGroup>
  );
});

export default class App4 extends React.PureComponent {
  render() {
    return (
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    );
  }
}
```

## 路由配置
```js
import {HomePage, AboutPage, ListPage, DetailPage} from '../Pages/index';

export const RouterConfig = [
  {
    path: '/',
    component: HomePage
  },
  {
    path: '/about',
    component: AboutPage,
    sceneConfig: {
      enter: 'from-bottom',
      exit: 'to-bottom'
    }
  },
  {
    path: '/list',
    component: ListPage,
    sceneConfig: {
      enter: 'from-right',
      exit: 'to-right'
    }
  },
  {
    path: '/detail',
    component: DetailPage,
    sceneConfig: {
      enter: 'from-right',
      exit: 'to-right'
    }
  }
];
```

## 借鉴网址
[github项目react-router-animation-demo](https://github.com/SmallStoneSK/react-router-animation-demo)
