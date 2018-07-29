# Vue Tag Manager

> Simple Google Tag Manager implementation for Vue

## Usage

Simple usage:

```js
import Vue from "vue"
import VueTagManager from "vue-tag-manager"

Vue.use(VueTagManager, {
    gtmId: 'GTM-XXXXXX'
})
```

## Configuration Options

| Option          | Description                                                                                  | Type     | Default       | Is Required? |
| --------------- | -------------------------------------------------------------------------------------------- | -------- | ------------- | ------------ |
| `gtmId`         | Google Tag Manager ID                                                                        | `string` | -             | Yes          |
| `events`        | Additional events to track                                                                   | `object` | `{}`          | No           |
| `dataLayer`     | Initialise the [GTM datalayer](https://developers.google.com/tag-manager/devguide#datalayer) | `object` | `undefined`   | No           |
| `dataLayerName` | The [Data Layer variable name](https://developers.google.com/tag-manager/devguide#renaming)  | `string` | `"dataLayer"` | No           |
| `preview`       | Used to [set an environment](https://support.google.com/tagmanager/answer/6311518?hl=en)     | `string` | `undefined`   | No           |
| `auth`          | Used to set an environment, with `preview`                                                   | `string` | `undefined`   | No           |


## To-do

- [x] Initital implementation from React GTM
- [x] Basic Vue Plugin
- [x] Shell out tests
- [ ] Simplify the URL + snippet generation and injection
- [ ] Basic don't break on SSR
- [ ] Regex page view matcher
- [ ] SSR injection
- [ ] More through docs with examples

## Why need another GTM library?

Initially used [vue-gtm](https://github.com/mib200/vue-gtm) which is a great library, but wanted to be able to programatically configure the GTMID and initial DataLayer.

Really liked the [React GTM](https://github.com/alinemorelli/react-gtm) script injection dev experience, and liked the Vue GTM dev and track experience (as a Vue Plugin, with the `$gtm` interface). So this plugin aims to combine both of them into this simple library.

## Inspired by

- [React GTM](https://github.com/alinemorelli/react-gtm)
- [Vue GTM](https://github.com/mib200/vue-gtm)
- [Nuxt GTM](https://github.com/nuxt-community/modules/tree/master/packages/google-tag-manager)