<p align="center">
    <img height="180px" src="https://res.cloudinary.com/dpj9ddsjf/image/upload/v1616463721/swaltSvg_ctskhk.svg" alt="Turbo Browser svg icon" />
</p>
<h1 align="center">
    Swalt
</h1>
<h3 align="center">
   An amazing replacement for Javascript's default alerts
</h3>
<p align="center">
  <a target="_blank" href="https://swalt.netlify.app/">
    <img height="38px" src="https://res.cloudinary.com/dpj9ddsjf/image/upload/v1616242244/visit-website_axucr8.svg" alt="Turbo Browser website" />
  </a>
</p>
<br>
<p>
    An alternate Javascript library to show awesome alerts on your app
    It can be used either by CDN or by NPM. CDNs are available in raw as well as minified version.
</p>
<h2>
    Contents
</h2>

- [Installation](#-----installation)
- [Usage](#-----usage)
- [Templates](#-----templates)
- [Contribution](#-----contribution)
- [Author](#-----author)
- [Links](#-----links)
- [License](#-----license)

<h2>
    💻 Installation
</h2>

```bash
$ npm install swalt
```

<h2>
    📖 Usage
</h2>

```javascript
import swalt from 'swalt';

swalt("Hello world!");
```

<h2>
    🖌 Templates
</h2>

#### Normal Swalt
```javascript
swalt("Hello world!");
```

#### Dark Mode Swalt
```javascript
swalt("Hello World", {
  mode: "dark"
});
```

#### Swalt with Icon
```javascript
swalt("Hello World", {
  showIcon: true
});
```

#### Swalt with Custom Title
```javascript
swalt("Hello World", {
  title: "My Title"
});
```

#### Swalt with Input
```javascript
swalt("Hello World", {
  input: true
});
```

<h2>
    👏 Contribution
</h2>
<p>
    See <a href="https://github.com/codeninja02/Turbo-Browser/blob/master/CONTRIBUTING.md">CONTRIBUTING.md</a> to learn about contribution for swalt.
</p>

<h2>
    💻 Author
</h2>

- [CodeNinja](https://github.com/codeninja02)

<h2>
    🔗 Links
</h2>

- [Homepage](https://swalt.netlify.app/)
- [NPM](https://www.npmjs.com/package/swalt)
- [README](https://github.com/codeninja02/Swalt#readme)
- [LICENSE](https://github.com/codeninja02/Swalt/blob/main/LICENSE)

<h2>
    📄 License
</h2>
<p>
    This project is licensed under the MIT License, see the <a href="https://github.com/codeninja02/Swalt/blob/main/LICENSE">LICENSE.md</a> file for details.
</p>
