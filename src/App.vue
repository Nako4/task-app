<template>
  <div id="app">
    <!-- ③表示したい箇所にタグとして追加 -->
    <Header/> 
  </div>
</template>

<script>
// ①読み込むcomponentの記述
import Header from "./components/Header"
export default {
  name: 'app',
  components: {
    // ②importしたcomponentを記述
    Header
  }
}
</script>

<style>
</style>
