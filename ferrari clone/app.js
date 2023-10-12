Shery.mouseFollower({
    //Parameters are optional.
    skew: true,
    ease: "cubic-bezier(0.23, 10, 0.320, 10)",
    duration: 1,
});

gsap.to("#first", {
    x: 20,
    y: -10,
    duration: 1,
    scrollTrigger: {
        trigger: "#page1",
        scroller: "body",
        start: "top -80%",
        end: "top -81%",
        scrub: 2
    }
})
gsap.to("#owned", {
    x: -30,
    y: -10,
    duration: 1,
    scrollTrigger: {
        trigger: "#page1",
        scroller: "body",
        start: "top -100%",
        end: "top -100%",
        scrub: 2
    }
})
gsap.to("#hypercar", {
    x: 20,
    y: -10,
    duration: 1,
    scrollTrigger: {
        trigger: "#page2",
        scroller: "body",
        start: "top -50%",
        end: "top -60%",
        scrub: 2
    }
})
gsap.to("#pastmodel", {
    x: -30,
    y: -10,
    duration: 1,
    scrollTrigger: {
        trigger: "#page1",
        scroller: "body",
        start: "top -220%",
        end: "top -90%",
        scrub: 2
    }
})
gsap.to(".upper #first-ctn", {
    y: -50,
    x: -50,
    delay: 1,
    duration: 2,
    scrollTrigger: {
        trigger: "#page3",
        scroller: "body",
        start: "top 90%",
        end: "90%",
        scrub: 2
    }
})
gsap.to(".upper #second", {
    y: -10,
    x: 10,
    delay: 1,
    duration: 2,
    scrollTrigger: {
        trigger: "#page3",
        scroller: "body",
        start: "top 90%",
        end: "90%",
        scrub: 2
    }
})
gsap.to(".lower #first-ctn", {
    y: 10,
    x: -10,
    delay: 1,
    duration: 2,
    scrollTrigger: {
        trigger: "#page3",
        scroller: "body",
        start: "top 90%",
        end: "90%",
        scrub: 2
    }
})
gsap.to(".lower #second", {
    y: 50,
    x: 50,
    delay: 1,
    duration: 2,
    scrollTrigger: {
        trigger: "#page3",
        scroller: "body",
        start: "top 90%",
        end: "90%",
        scrub: 1
    }
})
gsap.to("#left-ctn", {
    x: 500,
    scrollTrigger: {
        trigger: "#page4",
        scroller: "body",
        start: "top 160%",
        end: "50%",
        scrub: 1
    }
})
gsap.to("#right-ctn", {
    x: -500,
    scrollTrigger: {
        trigger: "#page4",
        scroller: "body",
        start: "top 160%",
        end: "50%",
        scrub: 1
    }
})
gsap.to("#left-ctn-1", {
    x: 500,
    scrollTrigger: {
        trigger: "#page4",
        scroller: "body",
        start: "top 5%",
        end: "90%",
        scrub: 1
    }
})

