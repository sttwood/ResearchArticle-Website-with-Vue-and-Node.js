<template>
  <v-container>

    <v-row>
      <v-container>
        <v-carousel
          cycle
          height="400"
          hide-delimiter-background
          show-arrows-on-hover
        >
          <v-carousel-item
            v-for="(img,i) in imgs"
            :key="i"
            :src="img.src"
            reverse-transition="fade-transition"
            transition="fade-transition"  
          >
          </v-carousel-item>
        </v-carousel>
      </v-container>
    </v-row>

    <v-row>
      <v-col>
        <v-card class="mt-2 pl-5 pt-1 pb-1 pr-1">
          <h2>Annouments</h2>
          <v-divider></v-divider>
          <v-container>
            <v-row dense class="mt-1"> 
              <v-hover v-slot="{ hover }">
                <v-card 
                  :class="{ 'on-hover': hover }" 
                  :elevation="hover ? 12 : 2"
                  width="100%" 
                  href="https://research.mfu.ac.th/rs-newsresearch/rs-detail/detail/News/11729.html"
                  >
                  <v-card-title style="font-size:14px">
                    <v-icon class="pr-1" small>mdi-bullhorn-variant</v-icon>
                    ส่วนบริหารงานวิจัย ดำเนินการจัดกิจกรรม การบรรยายพิเศษเรื่อง "นโยบายและทิศทางการสนับสนุนงบประมาณของทุนสนับสนุนงานมูลฐาน (Fundamental Fund-FF)"
                  </v-card-title>
                  <v-card-subtitle style="font-size:12px">
                    22 พฤศจิกายน 2564 15:35น.
                  </v-card-subtitle>
                </v-card>
              </v-hover>
            </v-row>

            <v-row dense class="mt-3"> 
              <v-hover v-slot="{ hover }">
                <v-card 
                :class="{ 'on-hover': hover }" 
                :elevation="hover ? 12 : 2"
                width="100%" 
                href="https://research.mfu.ac.th/rs-newsresearch/rs-detail/detail/News/11608.html"
                >
                  <v-card-title style="font-size:14px">
                    <v-icon class="pr-1" small>mdi-bullhorn-variant</v-icon>
                    ส่วนบริหารงานวิจัยได้จัดกิจกรรมบรรยายพิเศษเรื่อง "นโยบายและทิศทางการสนับสนุนงบประมาณของทุนสนับสนุนงานมูลฐาน (Fundamental Fund-FF)"
                  </v-card-title>
                  <v-card-subtitle style="font-size:12px">
                    12 พฤศจิกายน 2564 14:44น.
                  </v-card-subtitle>
                </v-card>
              </v-hover>
            </v-row>

            <v-row dense class="mt-3"> 
              <v-hover v-slot="{ hover }">
                <v-card 
                  :class="{ 'on-hover': hover }" 
                  :elevation="hover ? 12 : 2"
                  width="100%" 
                  href="https://research.mfu.ac.th/rs-newsresearch/rs-detail/detail/News/11725.html"
                  >
                  <v-card-title style="font-size:14px">
                    <v-icon class="pr-1" small>mdi-bullhorn-variant</v-icon>
                    ส่วนบริหารงานวิจัย ขอเชิญชวนคณาจารย์ นักวิจัย และบุคลากรทุกท่าน เข้าร่วมรับฟัง “การประชุมระหว่างผู้บริหารและผู้ทรงคุณวุฒิจาก บพข. กับ ผู้บริหารและคณะนักวิจัย มฟล.”
                  </v-card-title>
                  <v-card-subtitle style="font-size:12px">
                    22 พฤศจิกายน 2564 11:22น.
                  </v-card-subtitle>
                </v-card>
              </v-hover>
            </v-row>

            <v-row dense class="mt-3"> 
              <v-hover v-slot="{ hover }">
                <v-card 
                  :class="{ 'on-hover': hover }" 
                  :elevation="hover ? 12 : 2"
                  width="100%" 
                  href="https://research.mfu.ac.th/rs-newsresearch/rs-detail/detail/News/11582.html"
                  >
                  <v-card-title style="font-size:14px">
                    <v-icon class="pr-1" small>mdi-bullhorn-variant</v-icon>
                    กิจกรรมหารือ เรื่อง แนวทางความร่วมมือและการดำเนินงานภายใต้แผนงานวิจัยด้านสมุนไพร ระหว่าง มฟล. กับ สวก.
                  </v-card-title>
                  <v-card-subtitle style="font-size:12px">
                    22 พฤศจิกายน 2564 11:22น.
                  </v-card-subtitle>
                </v-card>
              </v-hover>
            </v-row>

          </v-container>
        </v-card>
      </v-col>

    </v-row>

  </v-container>
</template>

<script>
  export default {
    layout: 'defaultAdmin',
    data () {
      return {
        imgs: [
          {src:'/images/slide/Banner_THE_Ranking_2021-01-01_01.png'},
          {src:'/images/slide/Banner_fundamrntal_fund-ff01.jpg'},
          {src:'/images/slide/Banner_Research_2564.jpg'},
          {src:'/images/slide/banner_peer1.jpg'},
          {src:'/images/slide/Banner-TAX2.jpg'},
          {src:'/images/slide/E-service.jpg'},
        ],
      }
    },
  }
</script>