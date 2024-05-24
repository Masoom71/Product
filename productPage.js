let tl = gsap.timeline()


tl.from("#header",{
    delay:0.5,
    opacity:0
})
tl.from("#header #logo,#header #nav-bar",{
    y:-80,
    duration:0.8,
    stagger:"0.3"
})
tl.from("section h2",{
    opacity:0,
    x:-50
})
tl.from("#info1 .info1-img,#info2 .info2-img",{
    scale:0.5,
    opacity:0
})
tl.from("#info1 h2,#info1 #content,#info2 h2,#info2 #content",{
    opacity:0,
    x:-50,
    stagger:"0.5"
})

