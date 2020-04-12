# population-trends ![](https://github.com/Mizuki901/population-trends/workflows/CI%20CD/badge.svg)

## 概要

* [RESAS API](https://opendata.resas-portal.go.jp/)（地域経済分析システム）から「都道府県一覧」を取得し、チェックボックスとあわせてブラウザに表示
* 任意の都道府県にチェックを入れると、RESAS APIから選択された都道府県の年別総人口を取得
* 取得した年別総人口を、X軸:年・Y軸:人口数の折れ線グラフを動的に生成して表示

## Demo

* <a href="https://population-trends.web.app/" target="_blank">Demo</a>

## Usage

``` bash
# install dependencies
cd population-trends
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```
