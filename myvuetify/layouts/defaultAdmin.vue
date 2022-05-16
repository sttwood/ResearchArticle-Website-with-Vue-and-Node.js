<!------------------------------------------------------------>
<!--                                                        -->
<!--                        _oo0oo_                         -->
<!--                       o8888888o                        -->
<!--                       88" . "88                        -->
<!--                       (| -_- |)                        -->
<!--                       0\  =  /0                        -->
<!--                     ___/`---'\___                      -->
<!--                   .' \|     |// '.                     -->
<!--                  / \|||  :  |||// \                    -->
<!--                 / _||||| -:- |||||- \                  -->
<!--                |   | \\  -  /// |   |                  -->
<!--                | \_|  ''\---/''  |_/ |                 -->
<!--                \  .-\__  '-'  ___/-. /                 -->
<!--              ___'. .'  /--.--\  `. .'___               -->
<!--           ."" '<  `.___\_<|>_/___.' >' "".             -->
<!--          | | :  `- \`.;`\ _ /`;.`/ - ` : | |           -->
<!--          \  \ `_.   \_ __\ /__ _/   .-` /  /           -->
<!--      =====`-.____`.___ \_____/___.-`___.-'=====        -->
<!--                        `=---='                         -->
<!--                                                        -->
<!------------------------------------------------------------>

<template>
  <v-app>
    <!-- Navbar -->
    <div class="nav navbar-expand-lg">
      <v-app-bar :clipped-left="clipped" >
        <v-app-bar-nav-icon 
          @click="drawer = true" 
          class="d-flex d-sm-none">
          <!--//Add this class to show menu icon only on small screen-->
          </v-app-bar-nav-icon>
        <v-tabs align-with-title>
          <v-tabs-slider color="red"></v-tabs-slider>
          <img src="images/logo.png" >
          <v-tab v-for="(item, i) in items" 
            :key="i" 
            :to="item.to" 
            router
            exact
            style="font-size:16px"
          >
            {{ item.title }}
          </v-tab>
          <v-spacer></v-spacer>
          <v-tab
            v-for="tablog in tablogin"
            :key="tablog.title" 
            :to="tablog.to"
            exact
            style="font-size:16px"
          >
            {{ tablog.title }}
          </v-tab>
        </v-tabs>
      </v-app-bar>
      <!-- Add a navigation bar -->
      <v-navigation-drawer
        v-model="drawer"
        absolute
        temporary
      >
        <v-list nav dense>
          <v-list-item-group>
            <v-list-item v-for="(item, i) in items" 
            :key="i" 
            :to="item.to" 
            router
            exact
            style="font-size:16px"
            >
              <v-list-tile-action>
                <v-icon class="mr-2">{{ item.icon }}</v-icon>
              </v-list-tile-action>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item>

          </v-list-item-group>
          <v-list-item-group>
            <v-list-item v-for="(item, i) in tablogin" 
            :key="i" 
            :to="item.to" 
            router
            exact
            style="font-size:16px"
            >
              <v-list-tile-action>
                <v-icon class="mr-2">{{ item.icon }}</v-icon>
              </v-list-tile-action>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-navigation-drawer>
      <!-- Navigation bar ends -->
    </div>

    <!-- Body -->
    <div class="bg">
      <v-container >
        <Nuxt />
      </v-container>
    </div>

    <!-- Footer --> 
    <div class="footer"> 
      <v-footer padless>
        <v-card
          flat
          tile
          width="100%"
          class="lighten-1 text-center"
        >
          <v-card-text>
            <v-btn
              v-for="icon in icons"
              :key="icon"
              class="mx-4"
              icon
            >
              <v-icon size="24px">
                {{ icon }}
              </v-icon>
            </v-btn>
          </v-card-text>
        </v-card>
      </v-footer>   
    </div>

  </v-app>
      
</template>

<script>

export default {
  data () {
    return {
      clipped: true,
      drawer: false,
      fixed: false,
      tablogin: [
        { title: "Logout", to: `/`, icon: 'mdi-login-variant' },
      ],
      items: [
        {
          icon: 'mdi-home',
          title: 'Home',
          to: '/admin/'
        },
        {
          icon: 'mdi-archive-search-outline',
          title: 'Research Article',
          to: '/admin/admindisplay'
        },
        {
          icon: 'mdi-archive-arrow-down-outline',
          title: 'Manage Request',
          to: '/admin/admincrud'
        },
        {
          icon: 'mdi-desktop-mac-dashboard',
          title: 'Dashboard',
          to: '/admin/dashboardRS'
        },
      ],
      icons: [
        { 
          icon: 'mdi-facebook',
          to: '/'
        },
        { 
          icon: 'mdi-linkedin',
          to: '/'
        },
        { 
          icon: 'mdi-github',
          to: '/'
        },
      ],
      miniVariant: false,
      title: 'MFU Research Request'
    }
  },
}
</script>

<style>
  .bg {
    background-image: url("/images/bg-mfu.png");
    background-repeat: no-repeat;
    background-size: cover;
    min-height: 100vh !important;
  }
</style>