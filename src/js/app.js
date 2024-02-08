import $ from 'jquery'
window.$ = $;

import * as functions from './modules/functions.js';
import { ibg } from './modules/ibg.js';
import { burgerMenu } from './modules/burgermenu.js'
import { videos } from './modules/videos.js';
import { contactCardAnim } from './modules/contact-card-anim.js';
import { showContent } from './modules/showContent.js';
import { slickSlider } from './modules/slick-slider.js';

functions.isWebp()

$(document).ready(function(){
    ibg()
    burgerMenu()
    videos()
    contactCardAnim()
    showContent()
    slickSlider()
})

