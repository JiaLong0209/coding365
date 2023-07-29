let scrollTime = 250;
let scrollDist = 200;
let interval = 1000/120; // 120 FPS
let minSpeed = 0, maxSpeed = 2;
let power = 1.2;

function scrollByDistance(x , y, duration){
    let time = 0;
    let count = Math.round(duration / interval);
    let midCount = (count / 2);
    let scroll = setInterval(() => {
        if(time >= count) clearInterval(scroll);
        let dist = (Math.abs((time > midCount ? (count - time)**power : time**power ) - midCount**power )) ** (1/power);    // calculate the distance, but it isn't linear
        let scrollx = x/count * (maxSpeed - (dist/midCount) * (maxSpeed - minSpeed)) * power;   // make the scroll more smooth
        let scrolly = y/count * (maxSpeed - (dist/midCount) * (maxSpeed - minSpeed)) * power;   // make the scroll more smooth
        window.scrollBy(scrollx, scrolly );
        time++;
    }, interval);
    
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

let isEraser = false
let buttons
let keymap = {'z':3, 'x':4, 'q':2}

function switchPenOrEraser(){
    buttons[~~(isEraser=!isEraser)].click()
}

function keyMaping(key){
    keymap[key] ? buttons[keymap[key]].click() : null
}

function keyListener(e){
    switch (e.key){
        case 'e':
            switchPenOrEraser();

        case ' ':
            e.preventDefault();
            break;

        case 'j':  // scroll page to bottom by distance
            scrollByDistance(0, scrollDist, scrollTime);
            break;

        case 'J':   // scroll page to bottom by distance, but double the scroll distance
            scrollByDistance(0, scrollDist*2, scrollTime);
            break;

        case 'k':  // scroll page to top by distance
            scrollByDistance(0, -scrollDist, scrollTime);
            break;

        case 'K':   // scroll page to top by distance, but double the scroll distance
            scrollByDistance(0, -scrollDist*2, scrollTime);
            break;

        case 'i':
            scrollByDistance(0, -scrollDist/4, scrollTime);
            break;

        case 'm':
            scrollByDistance(0, scrollDist/4, scrollTime);
            break;

        case 'h':   // scroll page to left by distance
            scrollByDistance(-scrollDist, 0, scrollTime);
            break;

        case 'l':  // scroll page to right by distance
            scrollByDistance(scrollDist, 0, scrollTime);
            break;

        default:
            keyMaping(e.key)
            break;
    } 
}
 

window.onload = () => {
    console.log('hello clipdrop');
    window.addEventListener('keydown', keyListener);
    buttons = document.querySelectorAll('button')

}

(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[9488], {
    91630: function(e, l, t) {
        let a = t(2784)
          , o = a.forwardRef(function(e, l) {
            return a.createElement("svg", Object.assign({
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 20 20",
                fill: "currentColor",
                "aria-hidden": "true",
                ref: l
            }, e), a.createElement("path", {
                fillRule: "evenodd",
                d: "M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z",
                clipRule: "evenodd"
            }))
        });
        e.exports = o
    },
    83120: function(e, l, t) {
        (window.__NEXT_P = window.__NEXT_P || []).push(["/stable-doodle", function() {
            return t(46198)
        }
        ])
    },
    69652: function(e, l, t) {
        "use strict";
        async function a(e, l) {
            let t = await fetch(e)
              , a = await t.blob();
            return new File([a],l,{
                type: a.type
            })
        }
        t.d(l, {
            Z: function() {
                return a
            }
        })
    },
    46198: function(e, l, t) {
        "use strict";
        t.r(l),
        t.d(l, {
            __N_SSG: function() {
                return A
            },
            default: function() {
                return R
            }
        });
        var a = t(52322)
          , o = t(2784)
          , i = t(83112)
          , s = t(11089)
          , d = t.n(s)
          , n = t(13211)
          , r = t.n(n)
          , c = t(17779)
          , p = t(5091)
          , m = t.n(p)
          , u = t(56877)
          , x = t(75790)
          , f = t(48587)
          , b = t.n(f)
          , h = t(24015)
          , g = t(49839)
          , w = t(32355)
          , j = t(19471)
          , y = t(37794)
          , v = t(74977);
        function N(e) {
            let {promptReverse: l=!1} = e
              , [t,i] = (0,
            o.useState)(!1)
              , [s,d] = (0,
            j.Z)();
            function n() {
                i(!0)
            }
            async function r(e, l, t) {
                let a = document.createElement("canvas");
                a.width = l,
                a.height = t;
                let o = a.getContext("2d");
                return o.drawImage(e, 0, 0, l, t),
                await createImageBitmap(a)
            }
            return (0,
            y.useEventListener)(v.i7, async e=>{
                let {sketch: l, prompt: t, style: a} = e.detail
                  , [o,s,{replaceHistory: n}] = d.historyState
                  , c = await createImageBitmap(l);
                n({
                    brush: await r(c, 1024, 1024)
                }),
                d.startProcess(l, t, null != a ? a : ""),
                i(!0)
            }
            ),
            (0,
            y.useBeforeUnloadAction)(()=>{
                d.cancelRunningTasks()
            }
            ),
            (0,
            a.jsx)(a.Fragment, {
                children: (0,
                a.jsx)(b(), {
                    input: (0,
                    a.jsx)(g.Z, {
                        state: s,
                        actions: d,
                        onSubmit: n,
                        promptReverse: l
                    }),
                    displayOutput: t,
                    output: (0,
                    a.jsx)(w.Z, {
                        close: function() {
                            i(!1),
                            d.cancelRunningTasks()
                        },
                        state: s,
                        actions: d,
                        onSubmit: n
                    }),
                    fullScreenMode: !1,
                    animation: h.fadeAnimation
                })
            })
        }
        var _ = t(90835)
          , S = t.n(_)
          , C = t(38660)
          , k = t(69652);
        function E(e, l) {
            return {
                value: l.toString(),
                content: e.title
            }
        }
        function Z(e) {
            let {description: l, variants: t} = e
              , [s,d] = (0,
            o.useState)("1")
              , {formatMessage: n} = (0,
            i.Z)()
              , r = (0,
            y.useIsMobile)()
              , c = t.reduce((e,l,t)=>r ? l.mobile ? [...e, E(l, t)] : e : [...e, E(l, t)], []);
            async function p(e, l, t) {
                try {
                    let a = await (0,
                    k.Z)("https://static.clipdrop.co/web/".concat(e), "doodle.jpg");
                    (0,
                    y.pub)(v.i7, {
                        sketch: a,
                        prompt: l,
                        style: t
                    })
                } catch (e) {
                    console.error(e),
                    (0,
                    C.newToast)({
                        type: "error",
                        label: n({
                            id: "/home/toast/exempleError"
                        }),
                        canClose: !0,
                        duration: 1e4
                    })
                }
            }
            return (0,
            a.jsxs)("div", {
                className: "w-full h-full flex flex-col justify-start gap-8 items-center",
                children: [(0,
                a.jsx)(u.SegmentedButton, {
                    value: s,
                    onChange: d,
                    list: c,
                    className: "max-w-full",
                    cellSize: r ? void 0 : 100,
                    cellClassName: "w-auto md:w-[100px]"
                }), (0,
                a.jsxs)("div", {
                    className: "flex-1 w-full justify-center items-center relative",
                    children: [(0,
                    a.jsx)(u.DynamicImage, {
                        src: "https://static.clipdrop.co/web/".concat(t[+s].src),
                        alt: t[+s].alt,
                        className: (0,
                        u.mergeClass)("rounded-2xl transition-opacity duration-300", "drop-shadow-[0_0_24px_rgba(0,0,0,0.15)]", "pointer-events-none")
                    }), (0,
                    a.jsx)("div", {
                        className: "absolute top-0 left-0 h-full w-full ",
                        children: (0,
                        a.jsx)(u.DynamicImage, {
                            src: "https://static.clipdrop.co/web/".concat(t[0].src),
                            alt: t[0].alt,
                            className: (0,
                            u.mergeClass)("rounded-2xl transition-opacity duration-300", "hover:opacity-40 opacity-0")
                        })
                    })]
                }), (0,
                a.jsx)(u.P, {
                    className: "text-justify md:text-center max-w max-w-3xl px-2",
                    children: l
                }), (0,
                a.jsx)(u.Button, {
                    onClick: ()=>p(t[0].src, t[+s].prompt, t[+s].style),
                    children: n({
                        id: "/stable-doodle/button/examples/doodle"
                    })
                })]
            })
        }
        function M() {
            let {formatMessage: e} = (0,
            i.Z)();
            return (0,
            a.jsxs)("section", {
                id: "example-section",
                className: (0,
                u.mergeClass)("relative w-full", "force-full-screen-w m-auto featured-background", "flex flex-col items-center justify-center gap-8", "py-8 md:py-16"),
                children: [(0,
                a.jsx)(u.H2, {
                    className: "text-center w-full",
                    children: e({
                        id: "/generic/h2/examples"
                    })
                }), (0,
                a.jsxs)(_.OnHover, {
                    className: "w-full flex flex-col items-center gap-8",
                    children: [(0,
                    a.jsx)(_.ButtonsTabs, {
                        width: 650,
                        tabs: [{
                            index: 0,
                            title: e({
                                id: "/stable-doodle/example/3/title"
                            })
                        }, {
                            index: 1,
                            title: e({
                                id: "/stable-doodle/example/2/title"
                            })
                        }, {
                            index: 2,
                            title: e({
                                id: "/stable-doodle/example/1/title"
                            })
                        }]
                    }), (0,
                    a.jsx)(S(), {
                        className: "w-full h-[450px] md:h-[750px]",
                        initialAnimation: !0,
                        autoPaginate: !1,
                        children: [(0,
                        a.jsx)(Z, {
                            description: e({
                                id: "/stable-doodle/example/3/description"
                            }),
                            variants: [{
                                title: e({
                                    id: "/stable-doodle/example/filter/doodle"
                                }),
                                src: "stable-doodle/example/owl/doodle.jpg",
                                alt: "a doodle of a owl",
                                prompt: "a cute owl",
                                mobile: !0
                            }, {
                                title: e({
                                    id: "/stable-doodle/example/3/filter/1"
                                }),
                                src: "stable-doodle/example/owl/photo.jpg",
                                alt: "a photorealistic owl",
                                prompt: "a cute owl national geographic photo",
                                style: "photographic",
                                mobile: !0
                            }, {
                                title: e({
                                    id: "/stable-doodle/example/3/filter/2"
                                }),
                                src: "stable-doodle/example/owl/3d.jpg",
                                alt: "a 3D animation owl",
                                prompt: "a cute owl",
                                style: "3d-model",
                                mobile: !0
                            }, {
                                title: e({
                                    id: "/stable-doodle/example/3/filter/3"
                                }),
                                src: "stable-doodle/example/owl/pixel.jpg",
                                alt: "a pixel art owl",
                                prompt: "a cute owl",
                                style: "pixel art",
                                mobile: !0
                            }]
                        }, 0), (0,
                        a.jsx)(Z, {
                            description: e({
                                id: "/stable-doodle/example/2/description"
                            }),
                            variants: [{
                                title: e({
                                    id: "/stable-doodle/example/filter/doodle"
                                }),
                                src: "stable-doodle/example/chair/doodle.jpg",
                                alt: "a sketch of a chair",
                                prompt: "a chair",
                                mobile: !0
                            }, {
                                title: e({
                                    id: "/stable-doodle/example/2/filter/1"
                                }),
                                src: "stable-doodle/example/chair/comfy.jpg",
                                alt: "a comfy chair",
                                prompt: "a comfy chair",
                                mobile: !0
                            }, {
                                title: e({
                                    id: "/stable-doodle/example/2/filter/2"
                                }),
                                src: "stable-doodle/example/chair/modern.jpg",
                                alt: "a modern chair",
                                prompt: "a modern chair",
                                mobile: !0
                            }, {
                                title: e({
                                    id: "/stable-doodle/example/2/filter/3"
                                }),
                                src: "stable-doodle/example/chair/colorful.jpg",
                                alt: "a colorful chair",
                                prompt: "a colorful design chair",
                                mobile: !0
                            }, {
                                title: e({
                                    id: "/stable-doodle/example/2/filter/4"
                                }),
                                src: "stable-doodle/example/chair/flower.jpg",
                                alt: "a flower chair",
                                prompt: "a flower chair",
                                mobile: !1
                            }]
                        }, 1), (0,
                        a.jsx)(Z, {
                            description: e({
                                id: "/stable-doodle/example/1/description"
                            }),
                            variants: [{
                                title: e({
                                    id: "/stable-doodle/example/filter/doodle"
                                }),
                                src: "stable-doodle/example/landscape/doodle.jpg",
                                alt: "3 simples horizontal strokes",
                                prompt: "a beatiful landscape",
                                mobile: !0
                            }, {
                                title: e({
                                    id: "/stable-doodle/example/1/filter/1"
                                }),
                                src: "stable-doodle/example/landscape/paint.jpg",
                                alt: "A colorful painted landscape",
                                prompt: "a colorful painted landscape",
                                style: "cinematic",
                                mobile: !0
                            }, {
                                title: e({
                                    id: "/stable-doodle/example/1/filter/2"
                                }),
                                src: "stable-doodle/example/landscape/cinema.jpg",
                                alt: "A realistic landscape with cinematic sun light",
                                prompt: "a beautiful landscape",
                                style: "cinematic",
                                mobile: !0
                            }, {
                                title: e({
                                    id: "/stable-doodle/example/1/filter/3"
                                }),
                                src: "stable-doodle/example/landscape/city.jpg",
                                alt: "old school photo of a city",
                                prompt: "a city skyline",
                                style: "analog film",
                                mobile: !0
                            }, {
                                title: e({
                                    id: "/stable-doodle/example/1/filter/4"
                                }),
                                src: "stable-doodle/example/landscape/ocean.jpg",
                                alt: "a storm in the ocean",
                                prompt: "a storm in the ocean",
                                style: "cinematic",
                                mobile: !1
                            }]
                        }, 2)]
                    })]
                })]
            })
        }
        var B = t(97468);
        let I = ()=>{
            let {formatMessage: e, messages: l} = (0,
            i.Z)()
              , t = (0,
            o.useMemo)(()=>/^\/stable-doodle\/faq\//, [])
              , s = (0,
            p.useFaqFromI18nMessages)(t, e, l);
            return (0,
            a.jsxs)(a.Fragment, {
                children: [(0,
                a.jsx)(x.Z, {
                    title: e({
                        id: "/stable-doodle/title/index"
                    }),
                    description: e({
                        id: "/stable-doodle/description/index"
                    }),
                    appSlug: "stable-doodle"
                }), (0,
                a.jsx)(d(), {
                    campaign: "stable-doodle"
                }), (0,
                a.jsxs)("div", {
                    className: (0,
                    u.mergeClass)("w-full flex flex-col"),
                    children: [(0,
                    a.jsx)("div", {
                        className: "w-full flex flex-[1.3_1.3_0%] flex-col items-center justify-end",
                        children: (0,
                        a.jsx)(r(), {
                            title: e({
                                id: "/stable-doodle/h1/page-name"
                            }),
                            summary: e({
                                id: "/stable-doodle/h2/page-summary"
                            }),
                            icon: (0,
                            a.jsx)(c.StableDoodle, {
                                size: 48
                            })
                        })
                    }), (0,
                    a.jsx)("div", {
                        className: "w-full flex flex-1 flex-col items-center justify-start py-8 relative",
                        children: (0,
                        a.jsx)(N, {})
                    })]
                }), (0,
                a.jsx)(M, {}), (0,
                a.jsx)(B.Z, {
                    id: "tools-section",
                    title: e({
                        id: "/generic/h2/tools"
                    })
                }), (0,
                a.jsx)(m(), {
                    questions: s,
                    limit: 2
                })]
            })
        }
        ;
        var A = !0
          , R = I
    }
}, function(e) {
    e.O(0, [9464, 5486, 7495, 8719, 7076, 7929, 2227, 9774, 2897, 1151, 1326, 2888, 179], function() {
        return e(e.s = 83120)
    }),
    _N_E = e.O()
}
]);
