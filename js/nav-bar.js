document.write(`<head>
    <link rel="stylesheet" href="css/nav-bar.css">
</head>

<header>
    <a class="logo" href="./index.html"><img src="img/logo.png" /></a>
    <nav>
        <ul>
            <li><a href="./index.html">Главная</a></li>
            <li><a href="./advantages.html">Плюсы и минусы</a></li>
            <li><a href="./links.html">Внешние ссылки</a></li>
            <li><a href="./about.html">Контакты</a></li>
        </ul>
    </nav>
</header>`);

for (let i = 0; i < document.links.length; i++) {
    if (document.links[i].className) {
        continue;
    }

    if (document.links[i].href == document.URL) {
        document.links[i].className = "active";
    } else {
        document.links[i].className = "inactive";
    }
}