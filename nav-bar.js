document.write(`<head>
    <link rel="stylesheet" href="./style.css">
</head>

<header>
    <h2>Big boys</h2>
    <nav>
        <ul>
            <li><a href="./index.html">Home</a></li>
            <li><a href="./sources.html">Sources</a></li>
            <li><a href="./links.html">External links</a></li>
            <li><a href="./about.html">About us</a></li>
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