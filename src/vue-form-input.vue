<template>
	<div>
		<input type="text" v-model="valueView" v-on="events" />
	</div>
</template>
<script>

export default {
	name: "FormInput",
	props: ["type", "notify", "events", "attributes", "defaultValue"],
	data() {
		return {
			valueView: this.defaultValue ? this.defaultValue : "",
			valueModel: this.defaultValue ? this.defaultValue : "",
			currentState: []
		};
	},
	created() {
		if(typeof this.events === "object") {
			for(let name in this.events) {
				this.$on(name, this.events[name]);
			}
		}
	},
	watch: {
		valueView(n, o) {
			let n2 = undefined;
			if(this.attributes && this.attributes.transformers) {
				const transformers = [].concat(this.attributes.transformers);
				let v = n;
				transformers.forEach(transformer => {
					v = transformer(v, n, o, this);
				});
				n2 = v;
			} else {
				n2 = n;
			}
			if(this.attributes && this.attributes.checkers) {
				const checkers = [].concat(this.attributes.checkers);
				checkers.forEach(checker => {
					const check = checker(n2, n, o);
					if(typeof check == "string") {
						// @TODO: apply css classes on top of the component
						// @TODO: set adecuate error/warning message
						// @TODO:
					}
				});
			}
			this.valueModel = this.valueView;
			if(this.notify === "function") {
				this.notify(this.valueModel, this.valueView, o, this);
			}
		}
	},
	methods: {
		sanitizeState(states) {
			let states2 = undefined;
			f(typeof states === "string") {
				return states.split(/[ \n\t\r]+/g);
			} else if(Array.isArray(states)) {
				return states;
			} else {
				throw new Error("State not identified");
			}
		},
		addState(states) {
			const stateClasses = this.sanitizeState(states);
			// @TODO: add state to the this.currentState list (if not already)
		},
		removeState(states) {
			const stateClasses = this.sanitizeState(states);
			// @TODO: remove state to the this.currentState list (if it is present)
		}
	}
};
</script>
<style></style>
