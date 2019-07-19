<template>
    <div class="box">
        <div id="bm" @click="lottieClick"></div>

        <button v-for="(value,key) in dataJson" :key="key" @click="changeFun(value)"> {{key}}</button>
        <button @click="speedFun(speed++)  ">speed++</button>
        <button @click="speedFun(speed--)  ">speed--</button>

    </div>
</template>

<script>
    import lottie from 'lottie-web';

    export default {
        name: 'lottie',
        components: {},
        data() {
            return {
                speed: 1,
                lottie: '',
                isAnimationLoad: true,
                dataJson: {
                    heart1: require('../assets/data'),
                    heart2: require('../assets/lottie (1)'),
                    hand1: require('../assets/lottie (2)'),
                    hand2: require('../assets/lottie')
                }
            };
        },
        computed: {},
        props: {},
        created() {
        },
        methods: {
            speedFun(value) {
                if (value < 1) {
                    value = 1;
                }

                this.lottie.setSpeed(value);
            },
            changeFun(data) {
                console.log();
                if (this.lottie != '') {
                    this.lottie.destroy();
                }
                this.isAnimationLoad = true;
                this.initLottie(data);
            },
            lottieClick() {
                if (this.isAnimationLoad) {
                    this.isAnimationLoad = false;
                    if (this.lottie.currentFrame == this.lottie.totalFrames - 1) {
                        this.lottie.setDirection(-1);
                        this.lottie.play();
                    } else {
                        this.lottie.setDirection(1);
                        this.lottie.play();
                    }
                }
            },
            completeFun() {
                this.isAnimationLoad = true;
            },
            initLottie(data) {
                this.lottie = lottie.loadAnimation({
                    container: document.getElementById('bm'),
                    renderer: 'svg',
                    loop: false,
                    autoplay: false,
                    animationData: data
                });

                //初始化状态
                // this.lottie.goToAndStop(this.lottie.totalFrames - 1, true);
                this.lottie.addEventListener('complete', this.completeFun);
            }
        },
        mounted() {

            this.initLottie(this.dataJson.heart1);

        },
        watch: {},
        destroyed() {
            //页面销毁时
        }

    };
</script>

<style lang="scss" scoped>

    .box {
        padding-top: 50px;
        padding-left: 50px;

        div {
            border: 1px solid #efefef;
            width: 100px;
            height: 100px;
        }

        button {
            padding: 4px 10px;
            margin-top: 20px;
            margin-right: 20px;
        }
    }
</style>
