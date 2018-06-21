# What's &quot; jQuery.desc.freame &quot; ?
## Summary
This Plugin will be able to description summary on the your image file within &quot;img &quot; HTML tag.
For example, text area, select Box, button and etc at summary description on the your image file.

## Getting File
- Download or copy to the jquery.desc.frame.js
- Link for jQuery and the download file on your HTML files
- Decide on id or class in The image file that needs a descriptions

## How to Use

#### HTML
###### - JavaScript's source links in the head tag
```
<head>

  <script src="jquerry.js">  <!-- jQuery's Link -->
  <script src="jquery.desc.freame.js">   <!-- jquery.desc.freame.js's Link -->

</head>
```
###### - How to coding in the Body
```
<body>

  <div class="hoge"><!--Circle Line tag (The Class name or ID is Your favorite name)-->

  	<img src="image_file.js"><!--Your Image File-->
  	<div class="desc_circle"><!--Circle Line tag (This class name is define)-->
  	<div class="desc_strings"><!--String or Number tag (This class name is define)-->

  </div><!--.hoge-->

</body>
```

###### - Kind of &quot;data tag&quot;
```
//Class of desc_circle is describe below
  <div class="desc_circle" data-top="2"></div> <!-- Set a top position only with a number -->
  <div class="desc_circle" data-left="2"></div>  <!-- Set a left position only with a number -->
  <div class="desc_circle" data-width="2"></div>  <!-- Set a width size only with a number -->
  <div class="desc_circle" data-height="2"></div>  <!-- Set a height size only with a number -->
  <div class="desc_circle" data-border_radius="2"></div>  <!-- Set a corner of description area only with a number -->
  <div class="desc_circle" data-border_width="2"></div>  <!--Set a border width only width a number -->
  <div class="desc_circle" data-border_color="#666"></div>  <!--Set a border color -->
  <div class="desc_circle" data-border_style="solid"></div>  <!--Set a border styles -->

//Class of desc_number is describe below
  <div class="desc_number" data-num_top="2></div>  <!-- Set a top position only with a number -->
  <div class="desc_number" data-num_left="2"></div>  <!-- Set a left position only with a number -->
  <div class="desc_number" data-font_size="2"></div>  <!-- Set a font size only with a number -->
  <div class="desc_number" data-font_color="#FFF"></div> <!-- Set a font color -->
  <div class="desc_number" data-background="#666"></div>  <!-- Set a background color -->
  <div class="desc_number" data-num_radius="2"></div>  <!-- Set a corner of description letter's area only with a number -->
```

#### JavaScript
###### - Default setting.
```
<script>

  $(function(){
    $('.hoge').desc_freame();
  });

</script>
  ```

###### When Option Setting with Fade In action is MouseOver.
  ```
  <script>

  $(function(){
    $('.hoge').desc_freame({
        action:'on', //Action's switch is "on"
        transition:0.5 //Fade in Speed（Rage between 0.1 and 0.9)
    });
  });

</script>
```
