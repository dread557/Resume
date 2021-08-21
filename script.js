

const timeline = gsap.timeline({ defaults: { duration: .7 } })
timeline
    .from(".p-1-header", { opacity: 0, x: '-100%', ease: 'expo' })
    .from(".fade", { opacity: 0, stagger: .5 })
    .from(".connect", { opacity: 0, stagger: .3 })
    .from(".education", { x: '-100vw' })
    .from(".interest", { x: '100vw' })
    .from(".company", { y: '100vw' })