# Vue Tag Manager

> Simple Google Tag Manager implementation for Vue

## Usage

Simple setup:

```js
import Vue from "vue"
import VueTagManager from "vue-tag-manager"

// Do this before creating the Vue app
Vue.use(VueTagManager, {
    gtmId: 'GTM-XXXXXX'
})

```

Later in app:
```js
Vue.gtm.push({ event: 'some-event' })

// or in a component
this.$gtm.push({ event: 'some-event' })
```

or in a template:
```html
<button @click="$gtm.push({ event: 'some-event' })">
```

## Configuration Options

| Option          | Description                                                                                                      | Type     | Default       | Is Required? |
| --------------- | ---------------------------------------------------------------------------------------------------------------- | -------- | ------------- | ------------ |
| `gtmId`         | Google Tag Manager ID                                                                                            | `string` | -             | Yes          |
| `queryParams`   | Additional parameters to add to the script URL, including `gtm_preview` and `gtm_auth` for environment switching | `object` | `{}`          | No           |
| `dataLayer`     | Initialise the [GTM datalayer](https://developers.google.com/tag-manager/devguide#datalayer) with variables.     | `object` | `undefined`   | No           |
| `dataLayerName` | The [Data Layer variable name](https://developers.google.com/tag-manager/devguide#renaming)                      | `string` | `"dataLayer"` | No           |

## Usage

### `push(entry: Object)`

On a TagManager instance, this method allows you to push events onto the initialised data layer. See the [Google Tag Manager documentation](https://developers.google.com/tag-manager/devguide#events) for more details on event tracking with GTM.

## Native Implementation

While this library is mainly for Vue, the core Tag Manager is just a javascript object, so it's been exported too. It can be used as such:

```html
<!-- In the html head -->
<script src="https://unpkg.com/vue-tag-manager@x.x.x/lib/TagManager.js"></script>
<!-- Or use any other reference -->
<script>
    // intiates `window.TagManager`, and injects all necessary scripts.
    VueTagManager.initialize({
        gtmId: 'GTM-KG7LSMH'
    })
</script>

<!-- In code later -->
<script>
    window.TagManager.push({event: "something"})
</script>
```

## To-do

- [x] Initital implementation from React GTM
- [x] Basic Vue Plugin
- [x] Shell out tests
- [x] Simplify the URL + snippet generation and injection
- [x] Vue prototype property
- [ ] Basic implementation - don't break on SSR
- [ ] Vue auto-track router
- [ ] Vue track directive
- [ ] More through docs with examples
- [ ] SSR support

## Why need another GTM library?

Initially used [vue-gtm](https://github.com/mib200/vue-gtm) which is a great library, but wanted to be able to programatically configure the GTMID and initial DataLayer.

Really liked the [React GTM](https://github.com/alinemorelli/react-gtm) script injection dev experience, and liked the Vue GTM dev and track experience (as a Vue Plugin, with the `$gtm` interface). So this plugin aims to combine both of them into this simple library.

## Inspired by

- [React GTM](https://github.com/alinemorelli/react-gtm)
- [Vue GTM](https://github.com/mib200/vue-gtm)
- [Nuxt GTM](https://github.com/nuxt-community/modules/tree/master/packages/google-tag-manager)