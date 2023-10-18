gsap.from(".navleft img , .navright h4", {
    y: -100,
    duration: .5,
    delay: .5,
    opacity: 0,
    stagger: .5,
})

gsap.from("#main .social a", {
    y: -800,
    duration: .5,
    delay: 2.5,
    opacity: 0,
    stagger: .5,
})

gsap.from(".portfolio-ctn .container", {
    y: 50,
    duration: .1,
    delay: 1,
    opacity: 0,
    stagger: .5,
    scrollTrigger: {
        trigger: "#portfolio",
        scroller: "body",
        // markers:true,
        start: "top 70%",
        end: "top 10%",
        scrub: 1,
    },
});

gsap.from(".service-item", {
    y: 50,
    duration: 5,
    delay: 2,
    opacity: 0,
    stagger: .5,
    scrollTrigger: {
        trigger: "#services",
        scroller: "body",
        // markers:true,
        start: "top 90%",
        end: "top -40%",
        scrub: 1,
    },
});

gsap.from("#first-exp , #second-exp", {
    x: -100,
    duration: 1,
    delay: 1,
    opacity: 0,
    stagger: 1,
    scrollTrigger: {
        trigger: "#exp",
        scroller: "body",
        // markers:true,
        start: "top 90%",
        end: "top -20%",
        scrub: 1,
    },
})