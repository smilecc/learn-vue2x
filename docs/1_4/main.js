import Vue from 'vue'

const app = new Vue({
	el: '#app',
	data () {
		return {
			red: 0,
			green: 0,
			blue: 0
		}
	},
	methods: {
		getRGB () {
			alert(
				'红: '+ this.red + 
				'\n绿: ' + this.green + 
				'\n蓝: ' + this.blue
				);
		}
	},
	computed: {
		calcColor () {
			return 'background-color: rgb(' + this.red + ', ' + this.green + ', ' + this.blue + ')';
		}
	}
});