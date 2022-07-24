# 个人常用的html布局



## 说明

**个人用 布局模板**

1、该文章这是方便我个人使用，所以我不会写的太详细，自行意会。

2、同时，该文章会持续更新和补充。

3、文中的对齐1920 意思是 一边对齐版心，另外一边则是超出版心贴着body(1920px)的边界线。



- common.scss 
  - 自行按项目配置 `page-about-config`、`page-about-template`
  - 不建议更改 `page-about-base`





## common.scss

```SCSS
$content-width: 1220px;
$p-color: #707072;
$des-color: #434649;
$title-color: #434649;

// page-about-config
// endregion
// banner 字体大小通用模板,
// !!! 如果要某一个banner字体想缩小, 请使用参数, 这边不建议重写 !!!
@mixin all-banner-h1($reduce-font-size) {
	color: #fff;
  font-size: calc(44px - $reduce-font-size);
  font-weight: 500;
  line-height: 70px;
  letter-spacing: 3px;
}

@mixin all-banner-p($reduce-font-size) {
	color: #fff;
  font-size: calc(16px - $reduce-font-size);
  line-height: 29px;
  color: #e5e5e5;
}

@mixin title-span {
  color: #000;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 2px;
}

@mixin title-h2 {
  color: #000;
  font-size: 36px;
  line-height: 60px;
  font-weight: 400;
  letter-spacing: 2px;
}

@mixin text-p {
  color: #000;
  font-size: 16px;
  line-height: 24px;
  font-weight: 300;
  // letter-spacing: 2px;
}

// #endregion

// page-about-base
// 以下内容为基础内容, 不建议更改
// #region
@mixin a-button($width, $height, $bgc, $color) {
  display: flex;
  justify-content: center;
  align-items: center;
  width: $width;
  height: $height;
  background-color: $bgc;
  color: $color;
}

@mixin div-img($class_Name, $num, $url) {
  &:nth-child(#{$num}) #{$class_Name} {
    content: '';
    background: url($url) no-repeat;
    background-size: auto;
  }
}

@mixin bg-img($num, $url) {
  &:nth-child(#{$num}) {
    content: '';
    background: url($url) no-repeat;
    background-size: auto;
  }
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.content {
  max-width: 1220px;
  margin: 0 auto;
}

body {
  position: relative;
  max-width: 1920px;
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // font-family: 'Arial', 'Source Han Sans', sans-serif;
  // font-family: 'Gotham*', 'Source Han Sans', sans-serif;
  ul {
    padding: 0;
    margin: 0;
  }
  li {
    list-style: none;
  }
  a {
    text-decoration: none;
    color: unset;
  }
  select,
  input,
  label,
  button {
    vertical-align: middle;
  }
}
// #endregion

// project-about-tempalte
.content {
	max-width: $content-width;
  margin: 0 auto;
}

.about-template__p{
  @include text-p();
}

.about-template__title {
  text-align: center;
  h2 {
    @include title-h2();
  }

  span {
    @include title-span();
  }
}
```



## banner

### 1、单栏布局

1、简单的单栏布局

```html
<div class="banner">
  <div class="content">
    <div class="banner__inner">
      <div class="banner__title">
        <span>ABOUT PANELMATE</span>
        <h1>We Are High Performance HMI Solution Provider</h1>
        <p>
        </p>
        <a href="#" class="banner__left-button">Contact Us</a>
      </div>
    </div>
  </div>
</div>
```



```scss
.banner {
  background: url(../img/page-about-banner-bg.png) no-repeat center;
  background-size: cover;

  .content {
    height: 780px;
  }

  .banner__inner {
    position: relative;
  }

  .banner__title {
    padding-top: 0;
  }
}

.banner__title {
  span {
  }
  h1 {
    @inclue all-banner-h1(0);
    margin-top: 40px;
  }
  p {
		@inclue all-banner-p(0);
  }

  .banner__left-button {
  }
}
```



## content

### 1、双栏 + 左右对齐版心

左文字，右图片。如果左右都是文字，

类名建议使用 `about-building__left ` + `about-building__right`。

```html
<div class="about-building">
  <div class="content">
    <div class="about-building__title about-common__title">
      <span></span>
      <h2></h2>
    </div>

    <div class="about-building__main">
      <div class="about-building__text">
        <p></p>
      </div>
      <div class="about-building__block">
        <div class="about-building__block-img">
          <img src="" alt="" />
        </div>
      </div>
    </div>
  </div>
</div>
```



```scss
.about-building {
  padding-top: 0;
  padding-bottom: 0;

  .content {
  }

  .about-building__title {
  }

  .about-building__main {
    display: flex;
    justify-content: space-between;
  }

  .about-building__text {
    width: 43.2%;
  }

  .about-building__block {
    width: 50.8%;
  }
}

.about-building__main {
  .about-building__text {
    p {
    }
  }

  .about-building__block-img {
    position: relative;
    img {
      width: 100%;
      height: 100%;
      content: '';
    }
  }
}
```





### 2、双栏 + 一边对齐1920

一边对齐1920px，一边对齐版心

```html
<div class="cnc-solution">
  <div class="content">
    <div class="cnc-solution__inner">
      <div class="cnc-solution__left">
        <h2>Intelligent CNC Machine Management Solution</h2>
        <p>
        </p>
      </div>
      <div class="cnc-solution__right">
        <div class="cnc-solution__right-img"></div>
      </div>
    </div>
  </div>
</div>
```

```scss
.cnc-solution {
  padding-top: 140px;

  .content {
  }

  .cnc-solution__inner {
    display: flex;
    justify-content: space-between;
  }

  .cnc-solution__left {
    width: 45%;
  }

  .cnc-solution__right {
    width: 46%;
  }
}

.cnc-solution__left {
  h2 {
  }

  p {
  }
}

.cnc-solution__right {
  .cnc-solution__right-img {
    width: 910px;
    height: 695px;
    content: '';
    background-image: url(../img/page-application-img1.png);
    background-repeat: no-repeat;
  }
}
```





### 3、列表

```html
<div class="home-product">
  <div class="content">
    <div class="home-product__main">
      <ul class="home-product__list">
        <li class="home-product__item">
          <a href="./single-product.html">
            <div class="home-product__item-img"></div>
            <p>
              123456789
            </p>
            <button class="home-product__item-button">Read more</button>
          </a>
        </li>
      </ul>
    </div>
  </div>
</div>
```



```scss
.home-product {
  padding-top: 100px;
  padding-bottom: 100px;
  .content {
  }
  .home-product__main {
  }
  .home-product__list {
    display: flex;
    justify-content: space-between;
    align-content: space-between;
    flex-wrap: wrap;
  }
}

.home-product__item {
  @for $i from 1 to 9 {
    @include div-img(
      '.home-product__item-img',
      $i,
      '../img/home-product-item#{$i}.png'
    );
  }

  width: 265px;
  height: 445px;
  background-color: #e6f2eb;
  text-align: center;

  transition: all 0.3s;

  &:hover {
    box-shadow: 1px 1px 10px 2px rgba(0, 0, 0, 0.3);
  }

  .home-product__item-img {
    max-width: 265px;
    height: 265px;
    content: '';
    background-size: cover;
  }

  p {
    display: block;
    height: 70px;
    margin-top: 20px;
    padding-left: 10px;
    padding-right: 10px;
    color: #3ca060;
    font-size: 15px;
    font-weight: 600;

    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
  }

  .home-product__item-button {
  }
}
```





### 4、nav

```html
<nav class="header-nav">
  <ul class="header-nav__list">
    <li class="header-nav__item">
      <a href="./index.html">Home</a>
    </li>
    <li class="header-nav__item">
      <a href="./about.html">About us</a>
    </li>
    <li class="header-nav__item">
      <a href="./product.html">Product</a>
    </li>
    <li class="header-nav__item">
      <a href="./blog.html">Blog</a>
    </li>
    <li class="header-nav__item">
      <a href="./contact.html">Contact us</a>
    </li>
  </ul>
</nav>
```



```SCSS
nav.header-nav {
  background-color: #3ca060;
  .header-nav__list {
    display: flex;
    justify-content: space-around;
    text-align: center;
  }
}

.header-nav__item {
  display: block;
  width: auto;
  // 让每个元素充满
  flex-grow: 1;
  height: 56px;
  line-height: 56px;
  transition: all 0.5s;

  a {
    display: block;
    color: #fff;
    font-weight: 600;
    font-size: 15px;
  }

  &:hover {
    background-color: #277544;
  }
}
```





## swiper

### 1、双栏 + 对齐1920

同时自定义按钮，下面代码底部会附上所需的svg。

![image-20220724175445636](http://img.zyugat.cn/zyuimg/2022-07-24_b8fe0016fb8d0.png)

```html
<div class="certificates">
  <div class="content">
    <div class="certificates__title about-common__title">
      <span></span>
      <h2></h2>
      <p>
      </p>
      <div class="certification-btn">
        <div class="swiper-button-prev swiper-btn"></div>
        <div class="swiper-button-next swiper-btn"></div>
      </div>
    </div>

    <div class="certificate-swiper">
      <ul class="swiper-wrapper">
        <li class="swiper-slide">
          <div class="img">
            <span
              style="
                background: url() no-repeat center;
              "
            ></span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</div>

<script>
  var width = $(window).width()
  var num = 3
  var gap = 50
  if (width <= 786) {
    num = 1.1
    gap = -50
  }

  var swiper_case = new Swiper('.certificate-swiper', {
    slidesPerView: 'auto',
    spaceBetween: gap,
    navigation: {
      nextEl: '.certification-btn .swiper-button-next',
      prevEl: '.certification-btn .swiper-button-prev',
    },
  })
</script>
```



```scss
.certificates {
  position: relative;
  padding-top: 0;
  padding-bottom: 0;
  // 这里的overflow 是防止元素超出内容区
  overflow: hidden;

  .content {
    display: flex;
    justify-content: space-between;
  }

  .certificates__title {
    position: relative;
    width: 26%;
  }

  div.certificate-swiper {
    width: 1200px;
    margin-right: -350px;
    overflow: hidden;

    .swiper-slide {
      width: 380px;
      height: 550px;
    }
  }
}

.certificates__title {
}

.certification-btn {
  position: relative;
  margin-top: 0;
  
  .swiper-btn {
    display: inline-block;
    position: relative;
    left: 0;
    width: 65px;
    height: 65px;
    // 间隔
    margin-right: 0.8rem;
    border-radius: 5px;
    background: url(../img/swiper-right-white.svg) #002665 no-repeat 27px 23px;
    background-size: 12px !important;
    z-index: 21;
    cursor: pointer;
    opacity: 1;
  }

  .swiper-btn.swiper-button-prev {
    background: url(../img/swiper-left-white.svg) #c5d0d7 no-repeat 25px 23px !important;
    background-size: 12px !important;
  }

  .swiper-button-prev:after,
  .swiper-rtl .swiper-button-next:after,
  .swiper-button-next:after {
    content: '' !important;
  }
}

.certificate-swiper {
  // position: relative;
  margin-top: 0px;

  ul.swiper-wrapper {
    li.swiper-slide {
      div.img {
        width: 400px;
        height: 570px;
      }
      div.img span {
        position: absolute;
        content: '';
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
      }
    }
  }
}
```





