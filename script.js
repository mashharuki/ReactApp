let counter = 0;
let dom = document.querySelector('#root');
// 関数呼び出し
doCount ();

// 関数 
function doCount () {
    counter++;
    let element = React.createElement(
        'p', {}, 'count:' + counter
    )
    // レンダリング
    ReactDOM.render(element, dom)
}