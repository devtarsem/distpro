import {create} from 'zustand'

const resStore = create(
    (set)=>({
        displayNavBar : false,
        setDisplayNavOpen : ()=>{
            set({displayNavBar : true})
        },
        CloseDisplayNavOpen : ()=>{
            set({displayNavBar : false})
        }

        ,
        displayNavBarExportstab : false,
        setDisplayNavOpenExportstab : ()=>{
            set({displayNavBarExportstab : true})
        },
        CloseDisplayNavOpenExportstab : ()=>{
            set({displayNavBarExportstab : false})
        }

    })
)

export default resStore;