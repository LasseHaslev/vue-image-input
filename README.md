# @lassehaslev/vue-image-input
> Image input using [ @lassehaslev/vue-image-picker ](https://github.com/LasseHaslev/vue-image-picker)

#### Under development
> This package is under development and is not yet safe to use..

## Installation
Run ```npm install @lassehaslev/vue-image-input --save``` in your project folder

## Usage
This package uses [vue-resource](https://github.com/vuejs/vue-resource), so just make sure you include it.
#### Javscript
```js
// Import vue
import Vue from 'vue';
import ImageInput from '@lassehaslev/vue-image-input';
Vue.use( 'image-input', ImagePicker );
```

#### Html
```html
<image-input url="'/your/images/url/here'"
    :images-adaptor="function( images ) {
        return images;
    }"
    :value="{url:'/your/url/here'}"
    name="image"
    :multiple="false"
    :value-adaptor="function( item ) {
        return item.id;
    }"
></image-input>
```



## Development

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).
