document.write(`<head>
    <link rel="stylesheet" href="./style.css">
</head>

<header>
    <img src="./logo.png" />
    <nav>
        <ul>
            <li><a href="./index.html">Главная</a></li>
            <li><a href="./advantages.html">Плюсы и минусы</a></li>
            <li><a href="./links.html">Внешние ссылки</a></li>
            <li><a href="./about.html">О нас</a></li>
        </ul>
    </nav>
</header>`);

for (let i = 0; i < document.links.length; i++) {
    if (document.links[i].href == document.URL) {
        document.links[i].className = "active";
    } else {
        document.links[i].className = "inactive";
    }
}