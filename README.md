# day7

## HTML

```html
  <div class="container">
    <div class="split left">
      <h1>Playstation 5</h1>
      <a href="#" class="btn">Buy Now</a>
    </div>
    <div class="split right">
      <h1>XBox Series X</h1>
      <a href="#" class="btn">Buy Now</a>
    </div>
  </div>
```

## CSS

### The Container
Setting the container to 100% ensures we have 50% each to play with.

```css
.container {
  position: relative;
  width: 100%;
  height: 100%;
  background: #333;
}
```
### Splitting the container
How do you get 2 images to cover the screen equally? 
The container is position: relative, we split the container with 2 div's set to absolute with the same height and crucially width set to 50%.

```css
.split {
  position: absolute;
  width: 50%;
  height: 100%;
  overflow: hidden;
}
```
### Left and Right split
The split class applies to both divs, then it's just a case of setting the left div to left:0 and right div to right:0.
```css
.split.left {
  left: 0;
  background: url('./img/ps.jpg');
  background-repeat: no-repeat;
  background-size: cover;
}

.split.right {
  right: 0;
  background: url('./img/xbox.jpg');
  background-repeat: no-repeat;
  background-size: cover;
}
```
### Stop text wrapping to next line
a cool css property which stops text wrapping to the next line even when the screen width is decreased.

![an example of the whitespace effect](./img/whitespace.jpg)


```css
h1 {
  ...
  /* text won't wrap to next line */
  white-space: nowrap;
}
```

