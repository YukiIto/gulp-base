# gulp-base

表側担当：伊藤  
システム担当：札幌  
リーダー：栗原さん  

gulpで構築し、Githubでファイル管理。

### ディレクトリ構成

※8/19時点。今後、追加・削除時は随時更新

```
├── /app/  
│   ├── view/  
│   │   ├── htmlファイル  
│   └── public/  
│       ├── css/  
│       ├── js/  
│       └── images/   
└── /assets/  
    ├── foundation/  
    │   ├── _base.scss  
    │   └── _normalize.scss  
    ├── layout/  
    │   ├── _nav.scss  
    │   ├── _header.scss  
    │   ├── _main.scss  
    │   └── _sidebar.scss  
    └── object/  
        ├── component/  
        │   ├── _button.scss  
        │   ├── _dialog.scss  
        │   ├── _grid.scss  
        │   └── _media.scss  
        ├── project/  
        │   ├── _articles.scss  
        │   ├── _comments.scss  
        │   ├── _gallery.scss  
        │   └── _profile.scss  
        └── utility/  
            ├── _align.scss  
            ├── _clearfix.scss  
            ├── _margin.scss  
            ├── _position.scss  
            ├── _size.scss  
            └── _text.scss  
```

### gulp動作に必要なプラグイン

- gulp-sass（npm install gulp-sass --save-dev）  
　→GulpでSassをコンパイルできるようにする
- gulp-autoprefixer（npm install gulp-autoprefixer --save-dev）  
　→ベンダープレフィックス付与を自動化
- gulp-frontnote（npm install gulp-frontnote --save-dev）  
　→FrontNoteでスタイルガイド生成
- gulp-uglify（npm install gulp-uglify --save-dev）  
　→JavaScriptの圧縮を自動化
- browser-sync（npm install browser-sync --save-dev）  
　→LiveReload環境構築、更新ボタンを押さなくてもブラウザへの反映を自動化
- gulp-plumber（npm install gulp-plumber --save-dev）  
　→エラー時にwatchを止めない

## GithubクローンURL

https://github.com/YukiIto/gulp-base.git
