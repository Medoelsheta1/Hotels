import { createSlice } from "@reduxjs/toolkit"

export const fvHotelsSlice = createSlice({
    initialState: {
    distination: '',
    isLogin: false,
    token: '',
    geoId: '',
    fvItems: [],
    userData: {},
    searchData: {}
},
    name: 'fvHotels',
    reducers: {
        addDis: (state , action) => {
            state.distination = action.payload.distination
        },
        addId: (state , action) => {
            state.geoId = action.payload.id
        },
        addItem: (state, action) => {
            let existIndex;
            existIndex = state.fvItems.findIndex((item) => item.id === action.payload.item.id)
            const existItem = state.fvItems[existIndex]
            if (existItem) {
                return
            }else {
                state.fvItems.push(action.payload.item)
            }
        },
        removeItem: (state, action) => {
            state.fvItems = state.fvItems.filter((ele) => ele.id !== action.payload.id)
        },
        login: (state , action) => {
            state.isLogin = true
            state.userData = action.payload.userData
            state.token = action.payload.token

        },
        logOut: (state) => {
            state.isLogin = false
            state.userData = {}
        },
        addSearchData: (state , action) => {
            let days, st,ed,stDay,edDay,startMonth,endMonth,startYear,endYear;
            const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
            st = new Date(action.payload.startDate)
            ed = new Date(action.payload.endDate)
            let diff = ed.getTime() - st.getTime()
            let time = new Date()
            let firstDayOfTheMonth = new Date(`1 ${month[time.getMonth()]} ${time.getFullYear()}`)
            stDay = (Math.ceil((st.getTime() / (1000 * 60  * 60 * 24)) ) - Math.ceil(firstDayOfTheMonth.getTime()  / (1000 * 60  * 60 * 24)) ) + 1
            edDay = (Math.ceil((ed.getTime() / (1000 * 60  * 60 * 24)) ) - Math.ceil(firstDayOfTheMonth.getTime()  / (1000 * 60  * 60 * 24)) ) + 1
            days = diff / (1000 * 60 * 60 * 24)
            startMonth = st.getMonth() + 1
            endMonth = st.getMonth() + 1
            startYear = st.getFullYear()
            endYear = st.getFullYear();     
            state.searchData = {
                adults: action.payload.adults,
                days: days,
                startDate: {
                    day: stDay,
                    month: startMonth,
                    year: startYear
                },
                endDate: {
                    day: edDay,
                    month: endMonth,
                    year: endYear
                }
            }
        }
    }
})
export const {addDis , addItem , removeItem , addId , login , logOut , addSearchData} = fvHotelsSlice.actions

export default fvHotelsSlice.reducer
