var h3Num = 1

function pageLoad() {
    for (i = 0; i < 100; i++) {
        var h3 = document.createElement('h3');
        var trackText = document.createTextNode(h3Num)
        var body = document.getElementsByTagName('body');
        body[0].appendChild(h3);
        h3.appendChild(trackText);
        h3Num++;
    }
};

pageLoad();