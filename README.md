用法
动画实例有以下主要方法：

- anim.play（）
- anim.stop（）
- anim.pause（）
- anim.setLocationHref（locationHref） - 一个param通常传递为location.href。当你在你的网址没有#符号的safari中遇到掩码问题时，它很有用。
- anim.setSpeed（速度） - 一个参数速度（1是正常速度）
- anim.goToAndStop（value，isFrame）第一个参数是一个数值。第二个参数是一个布尔值，用于定义第一个参数的时间或帧
- anim.goToAndPlay（value，isFrame） first param是一个数值。第二个参数是一个布尔值，用于定义第一个参数的时间或帧
- anim.setDirection（direction） - 一个param方向（1是法线方向。）
- anim.playSegments（segments，forceFlag） - 第一个param是一个单独的数组或两个值的多个数组（fromFrame，toFrame），第二个param是一个布尔值，用于强制新的段右边awa
- anim.setSubframe（flag） - 如果为false，它将遵循原始的AE fps。如果为true，它将尽可能更新。（默认为true
- anim.destroy（）

lottie有8种主要方法：

- lottie.play（） - 带有1个可选参数名称，用于定位特定动画
- lottie.stop（） - 带有1个可选参数名称，用于定位特定动画
- lottie.setSpeed（） - 第一个参数速度（1是正常速度） - 带有1个可选参数名称，用于定位特定动画
- lottie.setDirection（） - 第一个参数方向（1是法线方向。） - 带有1个可选参数名称，用于定位特定动画
- lottie.searchAnimations（） - 查找类“lottie”的元素
- lottie.loadAnimation（） - 上面的解释。返回一个动画实例来单独控制。
- lottie.destroy（） - 销毁和释放资源。DOM元素将被清空。
- lottie.registerAnimation（） - 您可以使用registerAnimation直接注册元素。它必须具有指向data.json url的“data-animation-path”属性
- lottie.setQuality（） - 默认为'high'，设置'high'，'medium'，'low'或数字> 1以提高玩家的表现。在一些动画中，低至2将不会显示任何差异。
