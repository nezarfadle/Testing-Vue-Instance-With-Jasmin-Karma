import Vue from 'vue';
import VueResource from 'vue-resource';

Vue.use(VueResource);

export default new Vue({
	el: "#app",
	data: {
		name: "John Doe",
		posts: [],
	},
	methods:{
		changeName: function(name)
		{
			this.name = name;
		},

		load: function()
		{
			let url = 'https://jsonplaceholder.typicode.com/posts';
			return this.$http.get(url).then(function(res){
				this.posts = res.data;
			})
		}
	}
})