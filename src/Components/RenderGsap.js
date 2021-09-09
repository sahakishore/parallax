/* eslint-disable */
import React, { useEffect, useRef } from 'react'

import { gsap, ScrollTrigger, Draggable, MotionPathPlugin } from "gsap/all"

import './style.css'

import BG from '../img/bg.jpg'
import MAN from '../img/man.png'
import CLOUD1 from '../img/clouds_1.png'
import CLOUD2 from '../img/clouds_2.png'
import MOUNTAINL from '../img/mountain_left.png'
import MOUNTAINR from '../img/mountain_right.png'


gsap.registerPlugin(ScrollTrigger)

const RenderGsap = () => {
    

    useEffect(() => {
        
        gsap.to("#bg", {
            scrollTrigger: {
                scrub : 1
            },
            scale : 1.5
        })
        
        gsap.to("#man", {
            scrollTrigger: {
                scrub : 1
            },
            scale : 0.5
        })
        
        gsap.to("#mountain_left", {
            scrollTrigger: {
                scrub : 1
            },
           x : -500,
        })

        gsap.to("#mountain_right", {
            scrollTrigger: {
                scrub : 1
            },
           x : 500,
        })
        
        gsap.to("#clouds_1", {
            scrollTrigger: {
                scrub : 1
            },
           x : 200,
        })
        
        gsap.to("#clouds_2", {
            scrollTrigger: {
                scrub : 1
            },
           x : -200,
        })
        
        gsap.to("#text", {
            scrollTrigger: {
                scrub : 1
            },
        //    y : -200,
           y : 500,
        })
        
        
    },[])


    return (
        <div>
            <section>
                <img src={BG} id="bg"  alt="" />
                <h2 id="text">SacroLabs</h2>
                <img src={MAN} id="man"  alt="" />
                <img src={CLOUD1} id="clouds_1"  alt="" />
                <img src={CLOUD2} id="clouds_2"  alt="" />
                <img src={MOUNTAINL} id="mountain_left"  alt="" />
                <img src={MOUNTAINR} id="mountain_right" alt="" />
            </section>

            <div className="sec">
                <h2>
                    Scroll Trigger is Awesome
                </h2>
                <p>
                    Many times, readers will get distracted by readable text when looking at the layout of a page. Instead of using filler text that says “Insert content here,” Lorem Ipsum uses a normal distribution of letters, making it resemble standard English.

                    This makes it easier for designers to focus on visual elements, as opposed to what the text on a page actually says.

                    Lorem Ipsum is absolutely necessary in most design cases, too. Web design projects like landing pages, website redesigns and so on only look as intended when they're fully-fleshed out with content. Even if the design work is gorgeous, its quality won't be apparent if all of the graphic elements are collapsed onto each other because there's no content in place to fill them out.

                    Lorem Ipsum can be especially helpful for projects that involve social media design, because it's virtually impossible to showcase a social media page layout without any content.Many variations of Lorem Ipsum exist today, and sometimes the text is altered to include humorous phrases.

                    If you’re going to be using Lorem Ipsum as filler text on your pages, you need to make sure that the passage doesn’t contain potentially embarrassing information.

                    Using our Lorem Ipsum generator, you can easily select a variation to build your desired number of Lorem Ipsum paragraphs, sentences, or words.

                    In addition, our generator can insert HTML markup, create HTML paragraphs, and make your text bold or italic. This makes it a great option for graphic designers and webmasters.

                    There really is no limit to where Lorem Ipsum should be used. It doesn't matter if you're building the next Facebook, or if you're the director of marketing for an industrial, heavy equipment seller - Lorem Ipsum ensures everything goes (and reads!) smoothly from design to implementation.

                    Lorem Ipsum is maintained by WebFX. To learn more about our revenue driving services, please visit: SEO, Internet marketing, web conversion, website redesign, social media, and online advertising services.

                    What are you waiting for? Feel free to give it a try!
                </p>
            </div>

        </div>
    )
}



export default RenderGsap