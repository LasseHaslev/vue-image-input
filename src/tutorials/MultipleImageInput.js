import { ImageInput } from '../index';
export default {
    template: `
        <div>
            <section class="section">
                <div class="container">
                    <h3 class="title is-2">Multiple image input</h3>
                    <h4 class="subtitle is-4">Open a image picker</h4>
                    <p>We have created a image picker with the logic of the @lassehaslev/vue-item-picker</p>
                </div>
            </section>
            <section class="hero is-light">
                <div class="hero-body">
                    <div class="container">
                        <image-input
                        :dropzone="true"
                        :multiple="true" url="http://localhost:1337/api/images"
                        :values="images" name="images"
                        :images-adaptor="imageAdaptor"
                        :value-adaptor="valueAdaptor"></image-input>
                    </div>
                </div>
            </section>
        </div>
    `,

    data() {
        return {
            images: []
        }
    },

    methods: {
        imageAdaptor( images ) {
            console.log(images);
            // return images;
            return images.data;
        },
        valueAdaptor( value ) {
            return value.id;
        }
    },

    components: {
        ImageInput,
    }
}
