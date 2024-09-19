const Furno = {
    webservice: {
        nt: {}
    }
};

Furno.webservice.nt.crt_index = function () {
    document.title = "猫尾巴 — Neko-Tail —";

    const body = document.querySelector('body');
    // 导入CSS
    const css = document.createElement('link');
    css.rel = 'stylesheet';
    css.type = 'text/css';
    css.href = css.href.replace(css.href, 'https://cdn.jsdelivr.net/gh/enorsona/NekoTail@main/nt_css.css');
    document.head.appendChild(css);

    // 创建模板
    const header = document.createElement('header');
    const main = document.createElement('main');
    const footer = document.createElement('footer');
    body.appendChild(header);
    body.appendChild(main);
    body.appendChild(footer);

    // 创建标题
    const headerList = document.createElement('div');
    headerList.classList.add('header');
    const headerListContents = ['主页', '流媒体', '下载管理']
    headerListContents.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.innerHTML = item;
        itemDiv.classList.add('nt-btn');
        headerList.appendChild(itemDiv);
    })
    header.appendChild(headerList);

}

const Nekotail = Furno.webservice.nt;
window.onload = () => {
    Nekotail.crt_index();
}
