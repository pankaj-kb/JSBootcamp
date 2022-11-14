# Article on CSS Selector

what are selectors and why should we learn them ?

when we have to style an HTML element we go with this approach

```css
h1 {
    color: #12B0E8;
}
```

It will work as intended and change the color of all the "h1" elements inside the html file with the given color, but here is an problem, what if we want to set different color and behavior to each "h1" element(tag).
Now here the selectors come into the picture, with selectors we can style each element our group of elements selectively.

## Let's check out this selectors

## Universal Selector

The universal selector is the same which we saw in above example, which selects all the elements in the html file,

```css
* {
  color: #50DBB4;
}
```

here "*" selects all the elements in the document.

## Individual Selector

now we can say we are really starting with selectors as we are going to style an specific element. the individual selector only styles an specific element.

lets check with this example, we will select only the h1 tag this time.

```css
h1 {
    color: #FF6666;
}
```

## Class and ID selector

the class and id selectors are very commonly used in css styling, they target elements with class or id given to them.
here the class is denoted with "." and id with "#".

first let tackle the class

```css
.heading-element {
    color: #03203C;
}
```

now the id selector

```css
#paragraph-element {
            color: #E8BD0D;
        }
```
