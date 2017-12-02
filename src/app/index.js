import { cube, foo } from './api';
import '../style/main.scss'
import $ from 'jquery';
import 'bootstrap';
import {data} from "./data"
import _ from "lodash"

(()=>{
    console.log(cube(2))
    const mainArr = {
        data,
        title: $(".user-profile"),
        menu: $(".menuList"),
        menuContent: $(".menu-content"),
        menuList:()=>{
            const list = _.map(mainArr.data.menu, (v)=>{
                return `<li class="nav-item">
                            <a class="nav-link" href="#${v.url}">${v.val}</a>
                        </li>`
            })
            mainArr.menu.append(list);
        },
        main: () => {
            mainArr.menuList()
            mainArr.menuContent.css({"padding-top": "4rem"})
        }
    }
    console.log(mainArr.data)
    mainArr.main();
})()