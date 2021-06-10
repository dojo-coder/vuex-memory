<template>
  <div class="hello">
    <ul>
      <li><a @click.prevent="registerTwentyModules" href="#">Register 20 Modules</a></li>
      <li><a @click.prevent="registerFortyModules" href="#">Register 40 Modules</a></li>
      <li><a @click.prevent="unregisterTenModules" href="#">Unregister 10 Modules</a></li>
    </ul>
  </div>
</template>

<script>
import form from '@/store/modules/swat/screens/common/form.js'
import grid from '@/store/modules/swat/screens/common/grid.js'
import datasource from '@/store/modules/swat/screens/common/datasource.js'

export default {
  name: 'ModulesTest',
  props: {
    msg: String
  },
  methods: {
    registerTwentyModules() {
      for(let i = 0; i < 20; i++) {
        console.log('registering modules for i:' + i)
        this.$store.registerModule(['swat','screens','form' + i], form)
        this.$store.registerModule(['swat','screens','datasource' + i], datasource)
        this.$store.registerModule(['swat','screens','grid' + i], grid)
      }
    },
    registerFortyModules() {
      for(let i = 0; i < 40; i++) {
        console.log('registering modules for i:' + i)
        this.$store.registerModule(['swat','screens','form' + i], form)
        this.$store.registerModule(['swat','screens','datasource' + i], datasource)
        this.$store.registerModule(['swat','screens','grid' + i], grid)
      }
    },
    unregisterTenModules() {
      for(let i = 0; i < 10; i++) {
        console.log('unregister modules for i:' + i)
        this.$store.unregisterModule(['swat','screens','form' + i], form)
        this.$store.unregisterModule(['swat','screens','datasource' + i], datasource)
        this.$store.unregisterModule(['swat','screens','grid' + i], grid)
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
