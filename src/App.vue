<template>
    <div id="app">
        <FormInput
            :type="'text'"
            :notify="n => (this.world.name = n)"
            :attributes="{
                transformers: (n, o) => 500 + n + o
            }"
            :events="{
                click: on.click.world.name,
                mouseover: on.mouseover.world.name
            }"
        />
        <img alt="Vue logo" src="./assets/logo.png" />
        {{ world.name }}
        <HelloWorld msg="Welcome to Your Vue.js App" />
    </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
    name: "app",
    components: {
        HelloWorld
    },
    methods: {},
    data() {
        return {
            actions: {
                emit: {
                    name: {
                        changes: (...args) => {
                            console.log("Name changes:", args);
                            this.world.name = args[0];
                        }
                    }
                }
            },
            world: {
                name: "--"
            },
            on: {
                click: {
                    world: {
                        name(...args) {
                            console.log("Clicked!", args);
                        }
                    }
                },
                mouseover: {
                    world: {
                        name(...args) {
                            console.log("Mouseovered!", args);
                        }
                    }
                }
            }
        };
    }
};
</script>

<style>
#app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>