import {configureStore} from '@reduxjs/toolkit'
import search from '../slicer/search.jsx'

const store=configureStore({
    reducer:{
        search:search,
    }
})

export default store