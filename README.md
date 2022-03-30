# compornent（共通部品）

## イメージ画像

- xxx

## 概要

- カード（画像（swiper/slider）、タイトル、説明、詳しく見る、pagination は外側に設置）
- `pagination`を外に配置する為、cdn 版を使用してません。
- `swiper-bundle.min.css`ダウンロード版を使用してます。
- https://unpkg.com/browse/swiper@8.0.7/swiper-bundle.min.css
-
- html は以下を`<div class="swiper">`の外に移動する。
- `<!-- If we need pagination -->`
- `<div class="swiper-pagination"></div>`
-
- css は以下は`swiper-bundle.min.css`の以下を修正する。
- `transform: translate3d(0, 0, 0);`→`transform: translate3d(0, 35px, 0);`に変更。
- `.swiper-pagination {`
- `position: absolute;`
- `text-align: center;`
- `transition: 0.3s opacity;`
- `transform: translate3d(0, 35px, 0);`
- `z-index: 10;`

## 仕様

- スマホファースト
- rem 記述
- ルートフォントを vw で設定していることから PC サイズのレイアウトをタブレットで表示させることが出来ます（rem で書いた場合のみ）。
- xxx

## 注意事項

- xxx

## 使い方

- 「copy start」から「copy end」をコピペ。
- css: src -> module -> card をコピペ。

## w3c html チェック結果

- https://validator.w3.org/nu/

## w3c css チェック結果

- https://jigsaw.w3.org/css-validator/

## portfolio url:

- https://c-0038.wtb.cfbx.jp/

## 参考にしたサイト

- CSS 擬似要素「before/after」の背景画像表示で鬼ハマリしたので備忘録メモ
- https://tinyurl.com/y8j7uexx
- CSS 疑似要素の content で画像を表示する方法！サイズを調整するには？
- https://kouhekikyozou.com/css_content_image
- 【CSS】疑似要素の画像サイズを変更する方法
- https://saruwakakun.com/html-css/reference/change-before-after
- 疑似要素で設定した画像のサイズを変更する方法を紹介！
- https://qumeru.com/magazine/537
- bottom
- https://developer.mozilla.org/ja/docs/Web/CSS/bottom
- CSS で要素を上下や左右から中央寄せする 7 つの方法
- https://www.granfairs.com/blog/staff/centering-by-css
- CSS で文字や div を下揃えする方法４選【flex など】
- https://csshtml.work/side-bottom/
- Swiper の基本な使い方
- スライダー下部に表示される ● ナビゲーション（ページネーション）の表示位置を外側に出したい場合は、対象の HTML 要素を以下のように単に外側に出す。

## 更新履歴

- 2022/3/20 swiper(slide)、ボタンの slide も実装完了。
- 2022/3/27 初版（スマホ版はある程度完成。pagination も外側に設定済。）

## 環境・使い方

- ダウンロードしたフォルダを開く。
- ターミナルを開き、 npm i とコマンドを入力する。
- node_modules と package-lock.json が生成されるのを確認する。
- 「 npx gulp 」とコマンドを入力すると動き出します。

## 備考
