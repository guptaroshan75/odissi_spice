import { configureStore } from '@reduxjs/toolkit'
import testimonialsSlice from './features/testimonialsSlice'
import propositionSlice from './features/propositionSlice'
import menuSlice from './features/menuSlice'
import { API } from '../API';
import navSlice from './features/navSlice';
import mediaSlice from './features/mediaSlice';

const Store = configureStore({
    reducer: {
        testimonial: testimonialsSlice,
        proposition: propositionSlice,
        menuCat: menuSlice,
        navs: navSlice,
        media: mediaSlice,
    },
    middleware: (getDefaultMiddleware) => (
        getDefaultMiddleware({
            thunk: {
                extraArgument: API,
            },
            serializableCheck: false,
        })
    )
})

export default Store