import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import { myTheme } from './theme'
import StudioNavbar from './components/StudioNavbar'
import Logo from './components/Logo'



export default defineConfig({
  basePath:"/studio",
  name: 'My_Daily_blog_Studio',
  title: 'Daily Blog Studio',

  projectId: 'on2yqnh5',
  dataset: 'production',

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },

  studio: {
    components:{
      logo: Logo,
      navbar: StudioNavbar
    }
  },
  theme: myTheme
})
