// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { setContext } from 'apollo-link-context'
import VueApollo from 'vue-apollo'

Vue.config.productionTip = false

const httpLink = new HttpLink({
    // URL to graphql server, you should use an absolute URL here
    uri: 'http://localhost/graphql'
})

// create the apollo client
const apolloClient = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache()
},
    {
        link: authLink.concat(httpLink),
        cache: new InMemoryCache()
    })

// install the vue plugin
Vue.use(VueApollo)

const apolloProvider = new VueApollo({
    defaultClient: apolloClient
})
const authLink = setContext((_, { headers }) => {
    // from LocalStorage accept token（if it has）
    const token = localStorage.getItem('blog-app-token')

    // return the headers to the context so httpLink can read them
    return {
        headers: {
            ...headers,
            authorization: token ? `Bearer ${token}` : null
        }
    }
})

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    apolloProvider,
    template: '<App/>',
    components: { App }
})
