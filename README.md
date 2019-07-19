
### 首先安装lottie
```
npm install lottie-web
```

在组件内引用
```
import lottie from 'lottie-web';
```

初始化lottie
```

<div id="bm" @click="lottieClick"></div>
//在mounted里引用，注意钩子的生命周期，created里#bm这个元素还未创建
this.lottie = lottie.loadAnimation({
      container: document.getElementById('bm'),
      renderer: 'svg',
      loop: false,
      autoplay: false,
      animationData: data
});
```
##### 这是我制作的一个简单应用。
![效果图](https://upload-images.jianshu.io/upload_images/6870396-6a481607100a67f6.gif?imageMogr2/auto-orient/strip)

[git地址](https://github.com/baibaibai455/lottie-learn.git)
下面贴一下这个效果的组件源代码

```

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



```











[官方文档](http://airbnb.io/lottie/#/web?id=html-player-installation)


### 动画实例有以下主要方法：

#### animation instances have these main methods:
>- anim.play()
>- anim.stop()
>- anim.pause()
>- anim.setLocationHref(locationHref) -- one param usually pass as location.href. Its useful when you experience mask issue in safari where your url does not have # symbol.
>- anim.setSpeed(speed) -- one param speed (1 is normal speed)
>- anim.goToAndStop(value, isFrame) first param is a numeric value. second param is a boolean that defines time or frames for first param
>- anim.goToAndPlay(value, isFrame) first param is a numeric value. second param is a boolean that defines time or frames for first param
>- anim.setDirection(direction) -- one param direction (1 is normal direction.)
>- anim.playSegments(segments, forceFlag) -- first param is a single array or multiple arrays of two values each(fromFrame,toFrame), second param is a boolean for forcing the new segment right awa
>- anim.setSubframe(flag) -- If false, it will respect the original AE fps. If true, it will update as much as possible. (true by default
>- anim.destroy()
#### lottie has 8 main methods:

>- lottie.play() -- with 1 optional parameter name to target a specific animation
>- lottie.stop() -- with 1 optional parameter name to target a specific animation
>- lottie.setSpeed() -- first param speed (1 is normal speed) -- with 1 optional parameter name to target a specific animation
>- lottie.setDirection() -- first param direction (1 is normal direction.) -- with 1 optional parameter name to target a specific animation
>- lottie.searchAnimations() -- looks for elements with class "lottie"
>- lottie.loadAnimation() -- Explained above. returns an animation instance to control individually.
>- lottie.destroy() -- To destroy and release resources. The DOM element will be emptied.
>- lottie.registerAnimation() -- you can register an element directly with registerAnimation. It must have the "data-animation-path" attribute pointing at the data.json url
>- lottie.setQuality() -- default 'high', set 'high','medium','low', or a number > 1 to improve player performance. In some animations as low as 2 won't show any difference.

