import {configureStore} from '@reduxjs/toolkit'
import search from '../slicer/search.jsx'
import user from '../slicer/user.jsx'
import driver from '../slicer/driver.jsx'

const store=configureStore({
    reducer:{
        search:search,
        user:user,
        driver:driver
    }
})

export default store