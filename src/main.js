import './style/index.less'
import 'nprogress/nprogress.css'

import {
  Button,
  ConfigProvider,
  DatePicker,
  Divider,
  Drawer,
  Input,
  Layout,
  Menu,
  message,
  Modal,
  Popover,
  Select,
  Spin,
  Tag,
  Tooltip,
} from 'ant-design-vue'
import { createPinia } from 'pinia'
import { createApp } from 'vue'

import App from './App.vue'
import IconButton from './components/IconButton.vue'
import router from './router'
import i18n from './utils/i18n'

const app = createApp(App)

app.use(Button)
app.use(ConfigProvider)
app.use(DatePicker)
app.use(Drawer)
app.use(Divider)
app.use(Modal)
app.use(Menu)
app.use(Layout)
app.use(Spin)
app.use(Select)
app.use(Popover)
app.use(Input)
app.use(Tag)
app.use(Tooltip)

app.component('IconButton', IconButton)

message.config({
  maxCount: 3,
})

app.use(router)
app.use(createPinia())
app.use(i18n)

app.mount('#app')
