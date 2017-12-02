import { cube, foo } from './api';
import '../style/main.scss'
import $ from 'jquery';
import 'bootstrap';
import {data} from "./data"
import _ from "lodash"

(()=>{
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
        clickLink:()=>{
            // Select all links with hashes
            $('a[href*="#"]')
                // Remove links that don't actually link to anything
                .not('[href="#"]')
                .not('[href="#0"]')
                .click(function (event) {
                    const param = $(this).attr("href")
                    $('a[href*="#"]').not(`[href='${param}']`).removeClass("active")

                    $(this).addClass("active")
                    // On-page links
                    if (
                        location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
                        &&
                        location.hostname == this.hostname
                    ) {
                        // Figure out element to scroll to
                        var target = $(this.hash);
                        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                        // Does a scroll target exist?
                        if (target.length) {
                            // Only prevent default if animation is actually gonna happen
                            event.preventDefault();
                            $('html, body').animate({
                                scrollTop: target.offset().top
                            }, 1000, function () {
                                // Callback after animation
                                // Must change focus!
                                var $target = $(target);
                                $target.focus();
                                if ($target.is(":focus")) { // Checking if the target was focused
                                    return false;
                                } else {
                                    $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                                    $target.focus(); // Set focus again
                                };
                            });
                        }
                    }
                });
        },
        main: () => {
            $(window).scroll(function (event) {console.log(Event)})
            mainArr.menuList()
            mainArr.clickLink()
            mainArr.menuContent.css({"padding-top": "4rem"})
        }
    }
    console.log(mainArr.data)
    mainArr.main();
})()