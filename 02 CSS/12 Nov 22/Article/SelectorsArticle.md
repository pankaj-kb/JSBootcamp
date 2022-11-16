What are selectors and why should we learn them ?

When we have to style an HTML element we go with this approach

```css
h1 {
color: #12B0E8;
}
```

It will work as intended and change the color of all the "h1" elements inside the html file with the given color, but
here is an problem, what if we want to set different color and behavior to each "h1" element(tag).
Now here the selectors come into the picture, with selectors we can style each element our group of elements
selectively.

# Let's check out this selectors

## universal selector

The universal selector is the same which we saw in above example, which selects all the elements in the html file,

```css
* {
color: #50DBB4;
}
```

![image.png](<https://cdn.hashnode.com/res/hashnode/image/upload/v1668519449058/miXeD_7Ob.png> align="left")

here "*" selects all the elements in the document.

## individual selector

now we can say we are really starting with selectors as we are going to style an specific element. the individual
selector only styles an specific element.

lets check with this example, we will select only the h1 tag this time.

```css
h1 {
color: #FF6666;
}
```

![image.png](<https://cdn.hashnode.com/res/hashnode/image/upload/v1668519484649/56zcSXK0Q.png> align="left")

## class and id selector

the class and id selectors are very commonly used in css styling, they target elements with class or id given to them.
here the class is denoted with "." and id with "#".

first let tackle the class

```css
.heading-element {
color: #03203C;
}
```

![image.png](<https://cdn.hashnode.com/res/hashnode/image/upload/v1668519501309/xVosUSR8a.png> align="left")

now the id selector

```css
#paragraph-element {
color: #E8BD0D;
}
```

![image.png](<https://cdn.hashnode.com/res/hashnode/image/upload/v1668519585173/pRoGjl-kY.png> align="left")

## and selector

the and selector as it's name suggests it will take check for two classes declared or given to the html element and accordingly apply the styles to it.
the classes inside the html must be separated with space.

```css
li.first.top{
        background-color: #000;
        color: #ef9323;
      }
```

![image.png](<https://cdn.hashnode.com/res/hashnode/image/upload/v1668519599327/W3PebWXQ-.png> align="left")

## combined selector

the combined selector also takes two classes or id or elements and styles them accordingly. just separate the targets with ",".

```css
second, third {
    background-color: #2E294E;
    color: #77919d;
}
```

![image.png](<https://cdn.hashnode.com/res/hashnode/image/upload/v1668519086442/5JhzOs0bt.png> align="left")

## inside an element

what if we want to target something inside an element ?
yes there is an selector for it.
so now we want to target an ordered list inside an div
it can be done like this

```css
div ol li {
    background-color: #cbe86b;
}
```

![image.png](<https://cdn.hashnode.com/res/hashnode/image/upload/v1668519096983/X62buVul2.png> align="left")

## direct child

now we want to target an element which lies inside another element, here we use ">" greater then sign to target children inside the element.

```css
div > li > p {
        background-color: #7667e4;
      }
```

![image.png](<https://cdn.hashnode.com/res/hashnode/image/upload/v1668519123642/Hu020VUX5f.png> align="left")

## sibling selector

according to me this is very different kind of selector then given above it selects the element which was declared after the element which was given the declared class.
here we can use "~" or "+" sign to indicate which sibling element we wanna target.

```css
.sibling + p {
        background-color: pink;
      }

```

![image.png](<https://cdn.hashnode.com/res/hashnode/image/upload/v1668519835284/ssQkP5FeA.png> align="left")
[Code for the Selectors](https://github.com/pankaj-kb/JSBootcamp/blob/00ff9b74ad7e871dbc415029f33621aea9031ffe/02%20CSS/12%20Nov%2022/Selectors.html)

# Pseudo-Selectors

this are the selectors which are declared as keyword after the selector with ":" to add the styles on elements when there is event or some action happened to that element, it could be an mouse hover over the button or click on link.

```css
button:hover {
  color: blue;
}
```

here "button" is selector & and ":hover is a pseduo-selector" which is added to give extra style to the button, here when we will hover over the button it will change it's color to "blue".

## before selector

before selector is declared with "::" after an element, here it adds an style before an element.

```css
.imp-label:hover::before {
            content: '';
            display: block;
            width: 20px;
            height: 20px;
            border-radius: 10px;
            background-color: #EC7357;
        }
```

![before selector.gif](<https://cdn.hashnode.com/res/hashnode/image/upload/v1668520317137/88xJ6k0l1.gif> align="left")

## after selector

just like the before selector, after selector also declared with "::", it adds style after the element.

```css
.imp-label:hover::after {
            content: '';
            display: block;
            width: 20px;
            height: 20px;
            border-radius: 10px;
            background-color: #EC7357;
        }
```

![after selector.gif](<https://cdn.hashnode.com/res/hashnode/image/upload/v1668520340330/ra6SrNC9Z.gif> align="left")

[Code for Pseudo-Selectors](https://github.com/pankaj-kb/JSBootcamp/blob/00ff9b74ad7e871dbc415029f33621aea9031ffe/02%20CSS/12%20Nov%2022/beforeAfter.html)
