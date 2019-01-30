Vue.component('greeting', {
	template:'<p>Het there, I\'m component name {{ name }}. <button v-on:click="changeName">changeName</button></p>',
	data: function() {
		return {name:'N0S'}
	},
	methods: {
		changeName() {
			this.name = 'Mario'
		}
	}
});


new Vue({
	el:'#vue-app',
	data:{
		firstName:'Pichet',
		job:'Web Developer',
		facebook: 'https://www.facebook.com/cd2811bdd7',
		age:22,
		a:0,
		b:0,
		name:'',
		available:false,
		nearby:false,
		success:true,
		error:false,
		lists:['Lorem ','ipsum ','dolor ','sit ','amet'],
		books:[{author:'Me', name:'Love at first sight'}, {author:'You', name:'Love at second sight'}],
		output:''
	},
	methods:{
		greet(time) {
			return 'Good ' + time + " " + this.name;
		},
		addAge(inc) {
			console.log('addAge');
			return this.age+=inc;
		},
		linkClicked(event) {
			console.log('clicked');
		},
		logName() {
			this.name
		},
		readRefs() {
			this.output = this.$refs.input.value;
		}
	},
	computed:{
		addToA() {
			console.log('addToA');
			return this.age + this.a;
		},
		addToB() {
			console.log('addToB');
			return this.age + this.b;
		},
		compClasses() {
			return {
				available: this.available,
				nearby: this.nearby
			}
		}
	}
});
