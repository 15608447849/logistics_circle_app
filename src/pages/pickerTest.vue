<template>
  <cube-button @click="showCascadePicker">地区选择</cube-button>
</template>
<script>
  export default {
    data() {
      return {
        cascadeData: ''
      }
    },
    mounted () {
      this.getArea();
    },
    methods: {
      // 获取地区信息
      getArea() {
        this.cascadeData = JSON.parse(localStorage.getItem('area'));
        debugger
        console.log(this.cascadeData)
        this.cascadePicker = this.$createCascadePicker({
          title: '地区选择',
          data: this.cascadeData,
          selectedIndex: [0, 1, 0],
          onSelect: this.selectHandle,
          onCancel: this.cancelHandle
        })
      },
      showCascadePicker() {
        this.cascadePicker.show()
      },
      selectHandle(selectedVal, selectedIndex, selectedText) {
        this.$createDialog({
          type: 'warn',
          content: `Selected Item: <br/> - value: ${selectedVal.join(', ')} <br/> - index: ${selectedIndex.join(', ')} <br/> - text: ${selectedText.join(' ')}`,
          icon: 'cubeic-alert'
        }).show()
      },
      cancelHandle() {
        this.$createToast({
          type: 'correct',
          txt: 'Picker canceled',
          time: 1000
        }).show()
      }
    }
  }
</script>
<style>

</style>
