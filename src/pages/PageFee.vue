<template>
  <q-page padding>
		<q-btn
			to="/"
			:style="
      $q.dark.isActive
        ? 'color: white'
        : 'color: #1e1e1e'"
			icon="chevron_left"
			label="Back"
			flat />

	<h5 
      style="font-weight: bold"
      :style="
          $q.dark.isActive
            ? 'color: white'
            : 'color: #1e1e1e'"
      >Fee Schedule
      </h5>
    <div class="column items-center" style="height: 75vh;">
    <q-pdfviewer
      style="width: 75%"
      v-model="show"
      type="html5"
      :src="updatedSrc"
      content-class="relative"
    />
    </div>
    <footer />
    </q-page>   
</template>

<script>
import Footer from 'components/footer/Footer.vue'

export default {
  components: { Footer },
  data () {
    return {
      show: true,
      src: 'statics/pdf/Facility_Rental_Fee_Schedule_2019b.pdf'
    }
  },
  computed: {
    updatedSrc () {
      if (process.env.MODE === 'electron') {
        return '/' + this.src
      }
      return this.src
    }
  }
}
</script>

<style lang="scss" scoped>

</style>