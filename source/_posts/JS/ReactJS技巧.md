---
title: ReactJS技巧
date: 2019-08-01 14:09:45
categories: js
tags:
- 前端
- javascript
- ReactJS
---

## 修改默认端口
* 在package.json中修改<code>"start": "set PORT=8001 && react-scripts start"</code>

## react切换路由不触发componentWillReceiveProps
```
//由路由切换显示loading动画延申出来的BUG

//App.js
import React, {
    Component
} from 'react';

import {
    Switch,
    Route,
    withRouter,
    BrowserRouter
} from 'react-router-dom';
import { ActivityIndicator } from 'antd-mobile';
import { RouterConfig } from './router/router';

import './styles/init.css';
import Header from './components/header/header';
import Footer from './components/footer/footer';

class App extends Component {
    timer = null;
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
        }
    }

    componentDidMount() {
        console.log(this);
        this.loadingShow();
    }

    componentWillReceiveProps(nextProps) {
        //当路由切换时
        console.log(this);
        debugger;
        if (this.props.location !== nextProps.location) {
            window.scrollTo(0, 0);
            this.loadingShow();
        }
    }

    render() {
        return (
            <div>
                <ActivityIndicator
                    toast
                    text="Loading..."
                    animating={this.state.loading}
                />
                <Header />
                <Switch>
                    {RouterConfig.map((config, index) => (
                        <Route exact key={index} {...config} />
                    ))}
                </Switch>
                <Footer />
            </div>
        );
    }

    loadingShow() {
        this.setState({
            loading: true
        }, () => {
            clearTimeout(this.timer);
            this.timer = setTimeout(() => {
                this.setState({ loading: false });
            }, 1000);
        });
    }
}

export default withRouter(App);
```

* 搞忘最外层已经嵌套了一次BrowserRouter了
```
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {
    BrowserRouter,
    Route
} from 'react-router-dom';
import {
    Provider
} from 'react-redux';
import {
    store
} from './store';
//import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Route path='/' component={App}/>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);

/*是否注册正式环境的离线缓存*/
//serviceWorker.unregister();
```
* 最外层嵌套<code>BrowserRouter</code>两次导致检测不到

