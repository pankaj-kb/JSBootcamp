### Positions play a vital role while styling and positioning elements in CSS.
### There are five main positions we should focus on- Static, Relative, Absolute, Fixed & Sticky. 
### Let's check them out

## Position: Static

The "Static" is default position of every/any element you add to HTML page,every element has Static position as per normal flow of web page.

#### let's check it out in action

```css
        .StaticBox {
            position: static;
            height: 200px;
            width: 200px;
            background-color: blue;
            color: white;
            font-size: 35px;
        }
```
<!-- ![static-position](/images/static.png) -->

## Position: Relative

Actual positioning of elements begins here, the Relative position is used to move elements from their usual normal flow, where they are positioned relative to their Parent element.

#### let's check it out in action

```css

.RelativeBox {
            position: relative;
            height: 200px;
            width: 200px;
            border: 4px solid;
            background-color: blue;
            color: white;
            font-size: 35px;
            top: 30px;
            left: 30px;
        }
```
Here we applied top: 30px and left: 30px which should move the box accordingly from its relative postion.
<!-- ![]() -->

from the above result you can get the idea of how relative position works.

## Position: Absolute

The Absolute position is quite quirky in the way it functions, the element which is declared as Absolute is taken out of flow, and treats the nearest element as it does not exist, it acts according to its Parent if there is no Parent it acts according to root of page.

#### let's check it out in action

```css
        .AbsoluteBox {
            position: absolute;
            height: 200px;
            width: 200px;
            border: 4px solid;
            background-color: blue;
            color: white;
            font-size: 35px;
            top: 40px;
            left: 40px;
        }
```
<!-- ![]() -->

as per above result you can see that, it treated the static box as it does not exist and positioned itself accoring to the main page.


## Position: Fixed

Yes !!!, the first thing came in your mind after reading the word "Fixed" is right. When an element is set position of "Fixed" it stays in view of the web page even after you scroll through the web page and it acts same as "Absolute" in terms of positioning. For an simple example if you are reading this article in chrome you can see that bookmark bar at top stays even if you scroll through any page.

#### let's check it out in action

```css
.FixedBox {
            position: fixed;
            height: 200px;
            width: 200px;
            border: 4px solid;
            background-color: red;
            color: white;
            font-size: 35px;
            top: 40px;
            left: 40px;
        }
```
<!-- ![]() -->

As per above result you can see that even through I am scrolling through the page, the fixed box stays in the same position.

## Position: Sticky

Sticky position is kind of mix between Relative and Fixed position, it works as relative until it reaches end of it's parent element. after it acts as a Fixed position.

#### let's check it out in action

```css
.StickyBox {
            position: Sticky;
            height: 200px;
            width: 200px;
            border: 4px solid;
            background-color: red;
            color: white;
            font-size: 35px;
            top: 50px;
            left: 600px;
        }

```
<!-- ![]() -->

From above output we can see that, once the page starts scrolling the "StickyBox will stick to page like "Fixed Box" with set "top" propery which we have set here as "top:50px" and you can see the difference between Fixed and Sticky.

#### I hope you found this article helpful, your feedback on this would be great !!!.