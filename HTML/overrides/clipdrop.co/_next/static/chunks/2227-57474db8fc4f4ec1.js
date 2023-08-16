

(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[2227], {
    5678: function(e, t, r) {
        let l = r(2784)
          , n = l.forwardRef(function(e, t) {
            return l.createElement("svg", Object.assign({
                xmlns: "http://www.w3.org/2000/svg",
                fill: "none",
                viewBox: "0 0 24 24",
                strokeWidth: 2,
                stroke: "currentColor",
                "aria-hidden": "true",
                ref: t
            }, e), l.createElement("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                d: "M11 17l-5-5m0 0l5-5m-5 5h12"
            }))
        });
        e.exports = n
    },
    82146: function(e, t, r) {
        let l = r(2784)
          , n = l.forwardRef(function(e, t) {
            return l.createElement("svg", Object.assign({
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 20 20",
                fill: "currentColor",
                "aria-hidden": "true",
                ref: t
            }, e), l.createElement("path", {
                fillRule: "evenodd",
                d: "M13.477 14.89A6 6 0 015.11 6.524l8.367 8.368zm1.414-1.414L6.524 5.11a6 6 0 018.367 8.367zM18 10a8 8 0 11-16 0 8 8 0 0116 0z",
                clipRule: "evenodd"
            }))
        });
        e.exports = n
    },
    78804: function(e, t, r) {
        let l = r(2784)
          , n = l.forwardRef(function(e, t) {
            return l.createElement("svg", Object.assign({
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 20 20",
                fill: "currentColor",
                "aria-hidden": "true",
                ref: t
            }, e), l.createElement("path", {
                fillRule: "evenodd",
                d: "M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z",
                clipRule: "evenodd"
            }))
        });
        e.exports = n
    },
    35339: function(e, t, r) {
        let l = r(2784)
          , n = l.forwardRef(function(e, t) {
            return l.createElement("svg", Object.assign({
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 20 20",
                fill: "currentColor",
                "aria-hidden": "true",
                ref: t
            }, e), l.createElement("path", {
                d: "M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z"
            }))
        });
        e.exports = n
    },
    90866: function(e, t, r) {
        "use strict";
        function l(e) {
            e.width = 1,
            e.height = 1;
            let t = e.getContext("2d");
            t && t.clearRect(0, 0, 1, 1)
        }
        r.d(t, {
            Z: function() {
                return l
            }
        })
    },
    94687: function(e, t, r) {
        "use strict";
        r.d(t, {
            Z: function() {
                return n
            }
        });
        var l = r(5632);
        function n() {
            let {pathname: e} = (0,
            l.useRouter)();
            return e.includes("/mobile")
        }
    },
    81562: function(e, t, r) {
        "use strict";
        r.d(t, {
            Z: function() {
                return n
            }
        });
        var l = r(52322);
        function n() {
            return (0,
            l.jsx)("svg", {
                className: "spinner",
                viewBox: "0 0 50 50",
                width: "50",
                height: "50",
                stroke: "currentColor",
                children: (0,
                l.jsx)("circle", {
                    className: "path",
                    cx: "25",
                    cy: "25",
                    r: "20",
                    fill: "none",
                    strokeWidth: "7"
                })
            })
        }
    },
    74977: function(e, t, r) {
        "use strict";
        r.d(t, {
            i7: function() {
                return l
            }
        });
        let l = "@initml/stable_doodle_submit"
    },
    49839: function(e, t, r) {
        "use strict";
        r.d(t, {
            Z: function() {
                return o
            }
        });
        var l = r(52322)
          , n = r(56877)
          , a = r(88707)
          , s = r(38893);
        function o(e) {
            let {state: t, actions: r, onSubmit: o, className: i, promptReverse: c=!1, promptClassName: u} = e;
            return (0,
            l.jsxs)("section", {
                className: (0,
                n.mergeClass)("flex flex-col w-full justify-center items-center gap-6", i),
                children: [(0,
                l.jsx)("div", {
                    className: "w-full max-w-[512px]",
                    children: (0,
                    l.jsx)(s.Z, {
                        actions: r,
                        onSketch: function(e) {
                            r.dispatch({
                                type: "edit-sketch",
                                payload: {
                                    sketch: e
                                }
                            })
                        }
                    })
                }), (0,
                l.jsx)("div", {
                    className: "w-full max-w-[512px]",
                    children: (0,
                    l.jsx)(a.Z, {
                        reverse: c,
                        onSubmit: function(e, l) {
                            t.sketch && (o(t.sketch, e, l),
                            r.startProcess(t.sketch, e, l))
                        },
                        defaultValue: t.prompt,
                        defaultPreset: t.preset,
                        className: u,
                        currentPrompt: t.prompt
                    })
                })]
            })
        }
    },
    32355: function(e, t, r) {
        "use strict";
        r.d(t, {
            Z: function() {
                return q
            }
        });
        var l = r(52322)
          , n = r(2784)
          , a = r(83112)
          , s = r(56877)
          , o = r(37794)
          , i = r(78898)
          , c = r(85673)
          , u = r(81562)
          , d = r(38893)
          , f = r(34218)
          , p = r.n(f);
        function m(e) {
            var t;
            let {state: r, actions: n, resultIndex: o} = e
              , {formatMessage: i} = (0,
            a.Z)()
              , c = r.results[o];
            return (null === (t = c.error) || void 0 === t ? void 0 : t.status) === 429 ? (0,
            l.jsx)("div", {
                className: "flex items-center justify-center w-full h-full rounded-xl",
                children: (0,
                l.jsx)(s.H5, {
                    children: i({
                        id: "/stable-doodle/p/reachLimit"
                    })
                })
            }) : c.nsfw ? (0,
            l.jsx)("div", {
                className: "flex items-center justify-center w-full h-full rounded-xl",
                children: (0,
                l.jsx)(s.P, {
                    className: "text-black dark:text-black rounded-xl p-3 bg-gray-200 bg-opacity-50",
                    children: i({
                        id: "/stable-doodle/p/invalidPrompt"
                    })
                })
            }) : c.maxQueueReached ? (0,
            l.jsx)("div", {
                className: "flex flex-col gap-2 items-center rounded-md bg-red-200/50 p-2",
                children: (0,
                l.jsx)(s.P, {
                    className: "text-center mx-2 text-black dark:text-black",
                    children: i({
                        id: "/stable-doodle/p/maxQueueReached"
                    })
                })
            }) : (0,
            l.jsx)("div", {
                className: "flex items-center justify-center w-full h-full rounded-xl",
                children: (0,
                l.jsx)("button", {
                    onClick: ()=>{
                        n.refreshResult(o),
                        console.log("refreshResult", o)
                    }
                    ,
                    children: (0,
                    l.jsx)(p(), {
                        width: 30,
                        height: 30,
                        className: "text-black dark:text-white"
                    })
                })
            })
        }
        var h = r(17779);
        function g(e) {
            let {state: t, resultIndex: r} = e
              , {formatMessage: n} = (0,
            a.Z)();
            t.results[r];
            let s = (0,
            o.useIsTablet)();
            return (0,
            l.jsx)("div", {
                className: "flex flex-col items-center justify-center w-full h-full rounded-xl",
                children: (0,
                l.jsx)(h.Loading, {
                    size: s ? 70 : 95
                })
            })
        }
        function v(e) {
            var t, r;
            let {onClick: o, state: f, actions: p, resultIndex: h, className: v, style: x, debug: y=!1} = e
              , {formatMessage: b} = (0,
            a.Z)()
              , w = f.selectedResult === h
              , j = f.results[h]
              , k = j.state !== i.tE
              , R = w ? "100%" : "calc(50% - 8px)"
              , N = (0,
            n.useMemo)(()=>w && j.hdFile ? URL.createObjectURL(j.hdFile) : j.file ? URL.createObjectURL(j.file) : null, [w, j.file, j.hdFile])
              , C = j.state === i.pn
              , E = (0,
            n.useMemo)(()=>j.state === i.br || j.hdState === i.br, [j.hdState, j.state]);
            return (0,
            l.jsxs)(c.E.button, {
                disabled: k,
                initial: {
                    height: R,
                    width: R
                },
                animate: {
                    height: R,
                    width: R,
                    transition: {
                        duration: .3,
                        ease: [.25, 1, .5, 1]
                    }
                },
                style: {
                    ...x,
                    zIndex: w ? 10 : 0
                },
                onClick: o,
                whileHover: k || w ? {} : {
                    scale: 1.015,
                    boxShadow: "0 0 16px rgba(0,0,0,0.15)"
                },
                className: (0,
                s.mergeClass)("absolute", "flex items-center justify-center", "select-none rounded-lg md:rounded-xl", "text-gray-500 dark:text-gray-300 bg-gray-100", 0 == h && w ? "dark:bg-black" : "dark:bg-gray-800", v),
                children: [0 == h && w && (0,
                l.jsx)(d.Z, {
                    actions: p,
                    onSketch: function(e) {
                        p.dispatch({
                            type: "edit-sketch",
                            payload: {
                                sketch: e
                            }
                        })
                    }
                }), (h > 0 || !w) && (N ? (0,
                l.jsxs)(l.Fragment, {
                    children: [(0,
                    l.jsxs)("div", {
                        className: "w-full h-full roundex-xl object-contain relative",
                        children: [(0,
                        l.jsx)("img", {
                            src: N,
                            alt: "A generate image from prompt",
                            className: "w-full h-full rounded-xl object-contain"
                        }), y && (0,
                        l.jsx)("img", {
                            src: (null === (t = f.results[0]) || void 0 === t ? void 0 : t.file) ? URL.createObjectURL(null === (r = f.results[0]) || void 0 === r ? void 0 : r.file) : "",
                            alt: "Sketch overlay",
                            className: "w-full h-full rounded-xl object-contain absolute top-0 left-0 opacity-30"
                        })]
                    }), E && (0,
                    l.jsxs)("div", {
                        className: (0,
                        s.mergeClass)("absolute top-0 left-0 bottom-0 right-0 rounded-xl", "flex flex-col justify-center items-center", "bg-gray-800 bg-opacity-25", "text-white dark:text-white"),
                        children: [(0,
                        l.jsx)(u.Z, {}), (0,
                        l.jsx)(s.P, {
                            className: "text-white dark:text-white",
                            children: b(j.hdState === i.br ? {
                                id: "/stable-doodle/p/upscaling"
                            } : {
                                id: "/stable-doodle/p/newImage"
                            })
                        })]
                    })]
                }) : C ? (0,
                l.jsx)(m, {
                    state: f,
                    actions: p,
                    resultIndex: h
                }) : (0,
                l.jsx)(g, {
                    state: f,
                    resultIndex: h
                }))]
            })
        }
        let x = "@initml/square-div_size-change";
        function y(e) {
            let {children: t, className: r} = e
              , [a,i] = (0,
            n.useState)(void 0)
              , [c,u] = (0,
            n.useState)(void 0)
              , d = (0,
            n.useRef)(null);
            (0,
            n.useEffect)(()=>{
                var e;
                let t = null === (e = d.current) || void 0 === e ? void 0 : e.parentElement;
                if (t) {
                    let {width: e, height: r} = t.getBoundingClientRect();
                    i(e),
                    u(r);
                    let l = new ResizeObserver(e=>{
                        let {width: t, height: r} = e[0].contentRect;
                        i(t),
                        u(r)
                    }
                    );
                    return l.observe(t),
                    ()=>{
                        l.disconnect()
                    }
                }
            }
            , []);
            let f = Math.min(a || 0, c || 0);
            return (0,
            n.useEffect)(()=>{
                (0,
                o.pub)(x, {
                    size: f
                })
            }
            , [f]),
            (0,
            l.jsx)("div", {
                ref: d,
                className: (0,
                s.mergeClass)("max-w-full max-h-full aspect-square", r),
                style: {
                    width: f,
                    height: f
                },
                children: t
            })
        }
        function b(e) {
            let {children: t, disabled: r, className: a} = e
              , [s,i] = (0,
            n.useState)(0);
            return (0,
            o.useEventListener)(x, e=>{
                i(()=>e.detail.size)
            }
            ),
            (0,
            l.jsx)("div", {
                className: a,
                style: {
                    width: r ? void 0 : s
                },
                children: t
            })
        }
        var w = r(15025);
        function j(e) {
            let {state: t, actions: r} = e;
            function a(e) {
                return ()=>{
                    0 !== t.selectedResult && (t.selectedResult === e ? r.selectResult(-1) : (r.generateHdVersion(e),
                    r.selectResult(e)))
                }
            }
            let s = (0,
            n.useRef)(r.generateHdVersion);
            (0,
            n.useEffect)(()=>{
                s.current = r.generateHdVersion
            }
            , [r.generateHdVersion]),
            (0,
            n.useEffect)(()=>{
                if (-1 !== t.selectedResult) {
                    let e = t.results[t.selectedResult];
                    e && !e.hdFile && e.hdState === i.hA && s.current(t.selectedResult)
                }
            }
            , [t.selectedResult, t.results]);
            let[o,c] = (0,
            n.useState)(!1);
            return (0,
            w.useShortcut)("alt", ()=>c(!o)),
            (0,
            l.jsxs)(y, {
                className: "relative isolate",
                children: [(0,
                l.jsx)(v, {
                    state: t,
                    actions: r,
                    onClick: a(0),
                    resultIndex: 0,
                    className: "top-0 left-0",
                    debug: !1
                }), (0,
                l.jsx)(v, {
                    state: t,
                    actions: r,
                    onClick: a(1),
                    resultIndex: 1,
                    className: "top-0 right-0",
                    debug: o
                }), (0,
                l.jsx)(v, {
                    state: t,
                    actions: r,
                    onClick: a(2),
                    resultIndex: 2,
                    className: "bottom-0 left-0",
                    debug: o
                }), (0,
                l.jsx)(v, {
                    state: t,
                    actions: r,
                    onClick: a(3),
                    resultIndex: 3,
                    className: "bottom-0 right-0",
                    debug: o
                })]
            })
        }
        var k = r(5678)
          , R = r.n(k)
          , N = r(78804)
          , C = r.n(N)
          , E = r(35339)
          , S = r.n(E)
          , P = r(81518);
        function I(e) {
            var t;
            let {state: r, actions: n, backLabel: o, onBack: c, showOptions: u} = e
              , {formatMessage: d} = (0,
            a.Z)()
              , f = r.results.every(e=>e.state === i.tE);
            return (0,
            l.jsx)(l.Fragment, {
                children: (0,
                l.jsxs)("div", {
                    className: "w-full p-1 md:p-8 flex items-center justify-between",
                    children: [(0,
                    l.jsxs)(s.Button, {
                        variant: "text",
                        size: "special",
                        onClick: c,
                        className: "text-black dark:text-white flex items-center hover:opacity-50 py-2 gap-1",
                        children: [(0,
                        l.jsx)(R(), {
                            className: "w-6 h-6"
                        }), (0,
                        l.jsx)("p", {
                            className: "font-semibold text-base",
                            children: o
                        })]
                    }), (0,
                    l.jsx)("div", {
                        className: "flex gap-2 md:gap-4 h-[52px]",
                        children: 0 === r.selectedResult ? (0,
                        l.jsx)(l.Fragment, {}) : u ? (0,
                        l.jsxs)(l.Fragment, {
                            children: [(0,
                            l.jsxs)(s.Button, {
                                size: "special",
                                onClick: ()=>n.download(r.selectedResult),
                                disabled: (null === (t = r.results[r.selectedResult]) || void 0 === t ? void 0 : t.hdState) !== i.tE,
                                children: [(0,
                                l.jsx)(C(), {
                                    className: "m-auto",
                                    height: 20,
                                    width: 20
                                }), (0,
                                l.jsx)("span", {
                                    className: "hidden md:block",
                                    children: d({
                                        id: "/stable-doodle/button/download"
                                    })
                                })]
                            }), (0,
                            l.jsx)(P.Z, {
                                dropdownPosition: "bottomRight",
                                getFile: function() {
                                    var e, t;
                                    let l = r.results[r.selectedResult];
                                    return l && null !== (t = null !== (e = l.hdFile) && void 0 !== e ? e : l.file) && void 0 !== t ? t : null
                                }
                            })]
                        }) : (0,
                        l.jsxs)(s.Button, {
                            size: "special",
                            disabled: !f,
                            onClick: ()=>n.share(),
                            className: (0,
                            s.mergeClass)("flex items-center gap-2", "rounded-full md:rounded-lg", "px-3 md:px-5", "w-12 md:w-auto h-12 md:h-[52px]"),
                            children: [(0,
                            l.jsx)(S(), {
                                className: "m-auto",
                                height: 20,
                                width: 20
                            }), (0,
                            l.jsx)("span", {
                                className: "hidden md:block",
                                children: d({
                                    id: "/stable-doodle/button/share"
                                })
                            })]
                        })
                    })]
                })
            })
        }
        var A = r(88707)
          , O = r(63848)
          , M = r.n(O);
        function z(e) {
            let {children: t} = e;
            return (0,
            l.jsx)("div", {
                className: "gap-2 w-full h-[calc(100vw-32px)] md:h-auto flex flex-col items-center justify-center absolute z-50 p-6",
                children: (0,
                l.jsx)("div", {
                    className: "max-w-[400px] w-full flex items-center flex-col drop-shadow-[0_0_16px_rgba(0,0,0,0.25)] bg-white dark:bg-gray-700 gap-2 p-4 rounded-2xl",
                    children: t
                })
            })
        }
        var T = r(163);
        function F(e) {
            let {actions: t, state: r, close: o} = e
              , {formatMessage: i} = (0,
            a.Z)()
              , [,,{getSubscribeAfterUpdate: c}] = (0,
            T.useSessionState)()
              , u = (0,
            n.useRef)(t.statusChangeRefresh);
            (0,
            n.useEffect)(()=>{
                u.current = t.statusChangeRefresh
            }
            , [t.statusChangeRefresh]);
            let d = M()(()=>{
                c().then(()=>{
                    u.current(),
                    setTimeout(()=>{
                        o()
                    }
                    , 200)
                }
                )
            }
            );
            return (0,
            l.jsxs)(z, {
                children: [(0,
                l.jsxs)(s.Button, {
                    onClick: d,
                    className: "w-full justify-between flex gap-4 items-center h-[51px] px-3",
                    children: [i({
                        id: "/stable-doodle/button/skipQueue"
                    }), (0,
                    l.jsx)("div", {
                        className: "px-4 py-2 bg-white text-black rounded",
                        children: "PRO"
                    })]
                }), (0,
                l.jsx)(s.Button, {
                    variant: "tonal",
                    className: "w-full h-[51px]",
                    onClick: o,
                    children: i({
                        id: "/stable-doodle/button/skip"
                    })
                })]
            })
        }
        var B = r(29945)
          , U = r.n(B);
        function Z(e) {
            return e.results.some(e=>{
                var t;
                return e.state === i.pn && (null === (t = e.error) || void 0 === t ? void 0 : t.status) === 429
            }
            )
        }
        function _(e) {
            var t;
            let {actions: r, state: o, close: c} = e
              , {formatMessage: u, formatRelativeTime: d} = (0,
            a.Z)()
              , [,,{getSubscribeAfterUpdate: f}] = (0,
            T.useSessionState)()
              , p = (0,
            n.useRef)(r.statusChangeRefresh);
            (0,
            n.useEffect)(()=>{
                p.current = r.statusChangeRefresh
            }
            , [r.statusChangeRefresh]);
            let m = U()(()=>{
                f().then(()=>{
                    p.current(),
                    setTimeout(()=>{
                        c()
                    }
                    , 200)
                }
                )
            }
            )
              , h = o.results.every(e=>e.state === i.pn)
              , g = Z(o)
              , v = o.results.find(e=>{
                var t, r;
                return e.state === i.pn && (null === (t = e.error) || void 0 === t ? void 0 : t.status) === 429 && (null === (r = e.error) || void 0 === r ? void 0 : r.canRefreshTimestamp)
            }
            );
            if (h && !g)
                return null;
            let x = null == v ? void 0 : null === (t = v.error) || void 0 === t ? void 0 : t.canRefreshTimestamp;
            return x ? (0,
            l.jsxs)(z, {
                children: [(0,
                l.jsx)("p", {
                    className: "text-black dark:text-white font-semibold text-base text-center",
                    children: u({
                        id: "/stable-doodle/p/availableAfter"
                    })
                }), (0,
                l.jsx)("p", {
                    className: "text-black dark:text-white font-semibold text-base text-center",
                    children: u({
                        id: "/stable-doodle/p/availableAfterDate"
                    }, {
                        date: d(Math.max(function(e) {
                            let t = e - Date.now();
                            return Math.round(t / 36e5)
                        }(x), 1), "hours")
                    })
                }), (0,
                l.jsx)(s.Button, {
                    className: "w-full",
                    onClick: m,
                    children: u({
                        id: "/stable-doodle/button/anonymousLogin"
                    })
                }), (0,
                l.jsx)(s.Button, {
                    variant: "tonal",
                    className: "w-full",
                    onClick: c,
                    children: u({
                        id: "/stable-doodle/button/skip"
                    })
                })]
            }) : null
        }
        function L(e) {
            let {state: t, actions: r} = e
              , a = t.results.some(e=>e.state === i.br)
              , s = Z(t)
              , [{user: o}] = (0,
            T.useSessionState)()
              , c = o && !o.isAnonymous
              , u = Math.max(0, ...t.results.map(e=>e.asyncQueuePosition).filter(e=>Number.isSafeInteger(e)))
              , [{showPopup: d, mode: f},{close: p}] = function(e) {
                let {loading: t, isLogged: r, oneReachLimit: l, maxQueuePosition: a} = e
                  , [s,o] = (0,
                n.useState)(!1)
                  , [i,c] = (0,
                n.useState)(void 0);
                return (0,
                n.useEffect)(()=>{
                    t && (c(void 0),
                    o(!0))
                }
                , [t]),
                (0,
                n.useEffect)(()=>{
                    !i && (!r && l ? c("quota") : a > 5 && c("queue"))
                }
                , [a, l, i, r]),
                [{
                    showPopup: s,
                    mode: i
                }, {
                    close: function() {
                        o(!1)
                    }
                }]
            }({
                loading: a,
                isLogged: c,
                maxQueuePosition: u,
                oneReachLimit: s
            });
            if (d) {
                if ("queue" === f)
                    return (0,
                    l.jsx)(F, {
                        state: t,
                        actions: r,
                        close: p
                    });
                if ("quota" === f)
                    return (0,
                    l.jsx)(_, {
                        state: t,
                        actions: r,
                        close: p
                    })
            }
            return null
        }
        var D = r(94687);
        function q(e) {
            let {state: t, actions: r, onSubmit: c, close: u, className: d} = e
              , {formatMessage: f} = (0,
            a.Z)()
              , [p,m] = (0,
            n.useState)(!0)
              , h = (0,
            D.Z)()
              , g = t.results.some(e=>e.state === i.br);
            (0,
            n.useEffect)(()=>{
                g && m(!0)
            }
            , [g]);
            let v = (0,
            o.useIsTablet)()
              , x = t.results[t.selectedResult]
              , y = -1 === t.selectedResult ? t.results.some(e=>e.state === i.br) : x.state === i.br || x.hdState === i.br;
            return (0,
            l.jsxs)("div", {
                className: (0,
                s.mergeClass)("h-full w-full", "absolute top-0 left-0 z-40", "flex flex-col", "bg-white dark:bg-gray-900", d),
                children: [(0,
                l.jsx)(I, {
                    state: t,
                    actions: r,
                    backLabel: -1 === t.selectedResult ? "Back" : "Back to grid",
                    onBack: ()=>{
                        -1 !== t.selectedResult ? r.selectResult(-1) : u()
                    }
                    ,
                    showOptions: -1 !== t.selectedResult
                }), (0,
                l.jsx)(s.H5, {
                    className: "text-center transition-opacity font-medium",
                    style: {
                        opacity: -1 === t.selectedResult ? 1 : 0
                    },
                    children: f({
                        id: "/stable-doodle/h5/selectHD"
                    })
                }), (0,
                l.jsxs)("div", {
                    style: v ? {
                        minWidth: 300,
                        minHeight: 300
                    } : void 0,
                    className: (0,
                    s.mergeClass)("flex items-center justify-center", "flex-1 w-full", "p-1 md:p-4", "overflow-hidden"),
                    children: [(0,
                    l.jsx)(j, {
                        state: t,
                        actions: r
                    }), !h && (0,
                    l.jsx)(L, {
                        state: t,
                        actions: r
                    })]
                }), (0,
                l.jsx)("div", {
                    className: "pb-0 md:pb-10 w-full md:p-4 items-end justify-center flex relative h-[235px] md:h-[122px]",
                    children: (0,
                    l.jsx)(b, {
                        className: "absolute bottom-0 md:bottom-10 w-full",
                        disabled: v,
                        children: (0,
                        l.jsx)(A.Z, {
                            reverse: !0,
                            className: "drop-shadow-[0_0_16px_rgba(0,0,0,0.15)] z-[45]",
                            defaultValue: t.prompt,
                            defaultPreset: t.preset,
                            onSubmit: function(e, l) {
                                t.sketch && (c(t.sketch, e, l),
                                0 === t.selectedResult || -1 == t.selectedResult ? r.startProcess(t.sketch, e, l) : r.startProcess(t.sketch, e, l, [t.selectedResult]))
                            },
                            disabled: y,
                            currentPrompt: t.prompt
                        })
                    })
                })]
            })
        }
    },
    88707: function(e, t, r) {
        "use strict";
        r.d(t, {
            Z: function() {
                return m
            }
        });
        var l = r(52322)
          , n = r(2784)
          , a = r(83112)
          , s = r(56877);
        let o = "https://storage.googleapis.com/clipdrop-static-assets/web/stable-diffusion/pressets"
          , i = {
            anime: {
                imageUrl: "".concat(o, "/anime.jpg"),
                name: "Anime",
                preset: "anime"
            },
            photographic: {
                imageUrl: "".concat(o, "/photographic.jpg"),
                name: "Photographic",
                preset: "photographic"
            },
            digitalArt: {
                imageUrl: "".concat(o, "/digital-art.jpg"),
                name: "Digital Art",
                preset: "digital art"
            },
            comicBook: {
                imageUrl: "".concat(o, "/comic-book.jpg"),
                name: "Comic Book",
                preset: "comic book"
            },
            fantasyArt: {
                imageUrl: "".concat(o, "/fantasy-art.jpg"),
                name: "Fantasy Art",
                preset: "fantasy art"
            },
            analogFilm: {
                imageUrl: "".concat(o, "/analog-film.jpg"),
                name: "Analog Film",
                preset: "analog film"
            },
            neonPunk: {
                imageUrl: "".concat(o, "/neon-punk.jpg"),
                name: "Neon Punk",
                preset: "neonpunk"
            },
            isometric: {
                imageUrl: "".concat(o, "/isometric.jpg"),
                name: "Isometric",
                preset: "isometric"
            },
            lowPoly: {
                imageUrl: "".concat(o, "/low-poly.jpg"),
                name: "Low Poly",
                preset: "lowpoly"
            },
            origami: {
                imageUrl: "".concat(o, "/origami.jpg"),
                name: "Origami",
                preset: "origami"
            },
            lineArt: {
                imageUrl: "".concat(o, "/line-art.jpg"),
                name: "Line Art",
                preset: "line art"
            },
            cinematic: {
                imageUrl: "".concat(o, "/cinematic.jpg"),
                name: "Cinematic",
                preset: "cinematic"
            },
            "3dModel": {
                imageUrl: "".concat(o, "/3d.jpg"),
                name: "3D Model",
                preset: "3d-model"
            },
            pixelArt: {
                imageUrl: "".concat(o, "/pixel-art.jpg"),
                name: "Pixel Art",
                preset: "pixel art"
            }
        }
          , c = [i.photographic, i.fantasyArt, i.origami, i.isometric, i.digitalArt, i.comicBook, i.anime, i.cinematic, i.analogFilm, i.neonPunk, i.pixelArt, i.lowPoly, i["3dModel"], i.lineArt];
        c[2],
        c[3],
        c[4],
        c[5],
        c[6],
        c[7],
        c[8],
        c[9],
        c[10],
        c[11],
        c[12];
        var u = r(82146)
          , d = r.n(u);
        function f(e) {
            return e.replace(" ", "").replace(/\d/, "").toLowerCase()
        }
        function p(e) {
            let {setShowStyle: t, setStyle: r, style: o, disabled: i=!1} = e
              , {formatMessage: u} = (0,
            a.Z)()
              , p = (0,
            n.useRef)(null)
              , m = (0,
            n.useRef)(o);
            return (0,
            n.useEffect)(()=>{
                try {
                    let e = m.current
                      , t = p.current;
                    if (e && t) {
                        let r = t.querySelector(".".concat(f(e.name)));
                        if (r) {
                            let e = r.getBoundingClientRect();
                            t.scrollBy({
                                left: e.left - e.width - 60,
                                behavior: "auto"
                            })
                        }
                    }
                } catch (e) {
                    console.error(e)
                }
            }
            , []),
            (0,
            l.jsxs)("div", {
                ref: p,
                className: "gap-4 grid grid-flow-col auto-cols-max overflow-y-hidden overflow-x-auto py-2 w-full px-4",
                children: [(0,
                l.jsxs)("button", {
                    disabled: i,
                    type: "button",
                    onClick: ()=>{
                        t(!1),
                        r(null)
                    }
                    ,
                    className: (0,
                    s.mergeClass)("shrink-0 flex flex-col items-center gap-1", "cursor-pointer select-none", "group "),
                    children: [(0,
                    l.jsx)("div", {
                        className: (0,
                        s.mergeClass)("h-20 md:h-24 w-20 md:w-24 rounded-2xl", "transition-all duration-100 bg-zinc-300 dark:bg-zinc-600 border-[3px] flex items-center justify-center", null === o ? "border-blue-500 dark:border-blue-500" : "border-zinc-300 dark:border-zinc-600 group-hover:border-blue-400 group-hover:opacity-90"),
                        children: (0,
                        l.jsx)(d(), {
                            width: 32,
                            height: 32,
                            className: "text-zinc-400"
                        })
                    }), (0,
                    l.jsx)(s.P, {
                        className: "text-center font-medium text-xs text-zinc-500 dark:text-zinc-400",
                        children: u({
                            id: "/stable-doodle/style/nostyle"
                        })
                    })]
                }), c.map(e=>(0,
                l.jsxs)("button", {
                    type: "button",
                    disabled: i,
                    onClick: ()=>{
                        t(!1),
                        r(e)
                    }
                    ,
                    className: (0,
                    s.mergeClass)(f(e.name), "shrink-0 flex flex-col items-center gap-1", "cursor-pointer", "group select-none"),
                    children: [(0,
                    l.jsx)("img", {
                        src: e.imageUrl,
                        className: (0,
                        s.mergeClass)("h-20 md:h-24 w-20 md:w-24 rounded-2xl", "transition-all duration-100 border-zinc-300 dark:border-zinc-600 border-[3px]", (null == o ? void 0 : o.imageUrl) === e.imageUrl ? "border-blue-500 dark:border-blue-500" : "border-zinc-300 dark:border-zinc-600 group-hover:border-blue-400 group-hover:opacity-90"),
                        alt: "example style"
                    }), (0,
                    l.jsx)(s.P, {
                        className: (0,
                        s.mergeClass)("text-center font-medium text-xs", (null == o ? void 0 : o.imageUrl) === e.imageUrl ? "text-black dark:text-white" : "text-zinc-500 dark:text-zinc-400"),
                        children: e.name
                    })]
                }, e.imageUrl))]
            })
        }
        function m(e) {
            var t;
            let {reverse: r=!1, disabled: o=!1, onSubmit: i, onOptionsChange: u, defaultValue: d, defaultPreset: f, className: m, currentPrompt: h, style: g} = e
              , {formatMessage: v} = (0,
            a.Z)()
              , x = (0,
            n.useRef)(null);
            t = x,
            (0,
            n.useEffect)(()=>{
                void 0 !== h && t.current && document.activeElement !== t.current && (t.current.value = h)
            }
            , [h, t]);
            let[y,b] = (0,
            n.useState)(!1)
              , [w,j] = (0,
            n.useState)(()=>{
                if (f) {
                    let e = c.find(e=>e.preset === f);
                    if (e)
                        return e
                }
                return null
            }
            );
            (0,
            n.useEffect)(()=>{
                if (f) {
                    let e = c.find(e=>e.preset === f);
                    e && j(e)
                }
            }
            , [f]);
            let k = (0,
            n.useRef)(u);
            return (0,
            n.useEffect)(()=>{
                k.current = u
            }
            , [u]),
            (0,
            n.useEffect)(()=>{
                var e;
                let t = x.current;
                null === (e = k.current) || void 0 === e || e.call(k, (null == w ? void 0 : w.preset) || "", (null == t ? void 0 : t.value) || "")
            }
            , [w]),
            (0,
            l.jsx)("form", {
                onSubmit: function(e) {
                    e.preventDefault();
                    let t = e.target["input-prompt"];
                    t.value.length > 0 && (null == i || i(t.value, (null == w ? void 0 : w.preset) || ""),
                    t.blur())
                },
                autoComplete: "off",
                className: (0,
                s.mergeClass)("relative", "w-full flex flex-col gap-4 items-center", m),
                style: g,
                children: (0,
                l.jsxs)("div", {
                    className: (0,
                    s.mergeClass)("flex items-center justify-center gap-2", "w-full", "md:rounded-[20px] p-2 md:p-2", "bg-primary-100 dark:bg-primary-800", r ? "flex-col-reverse rounded-t-[20px] absolute bottom-0" : "flex-col rounded-[20px]"),
                    children: [(0,
                    l.jsxs)("div", {
                        className: "flex flex-col md:flex-row items-center w-full gap-2 md:gap-2",
                        children: [(0,
                        l.jsx)("input", {
                            type: "text",
                            required: !0,
                            ref: x,
                            defaultValue: d,
                            disabled: o,
                            name: "input-prompt",
                            placeholder: v({
                                id: "/stable-doodle/placeholder/describe"
                            }),
                            autoComplete: "false",
                            role: "presentation",
                            className: (0,
                            s.mergeClass)("p-4 md:p-0 md:px-2 flex-1", "text-base font-medium text-primary-700 dark:text-primary-200", "placeholder-primary-700 dark:placeholder-primary-200 placeholder:opacity-35", "w-full h-6", "outline-none resize-none bg-gray-100 dark:bg-gray-900 md:bg-transparent rounded-xl", "disabled:opacity-50"),
                            onKeyDown: e=>{
                                if ("Enter" === e.key || 13 === e.keyCode) {
                                    var t;
                                    e.preventDefault(),
                                    e.stopPropagation();
                                    let r = e.target
                                      , l = null === (t = r.form) || void 0 === t ? void 0 : t.querySelector('button[type="submit"]');
                                    null == l || l.click()
                                }
                            }
                        }), (0,
                        l.jsxs)("div", {
                            className: "flex w-full md:w-auto gap-2",
                            children: [(0,
                            l.jsx)(s.Button, {
                                variant: w ? "outline" : "tonal",
                                type: "button",
                                onClick: ()=>b(!y),
                                disabled: o,
                                className: "w-full md:w-auto",
                                children: w ? w.name : "No style"
                            }), (0,
                            l.jsx)(s.Button, {
                                type: "submit",
                                className: "w-full md:w-auto",
                                disabled: o,
                                children: v({
                                    id: "/stable-doodle/button/generate"
                                })
                            })]
                        })]
                    }), y ? (0,
                    l.jsxs)(l.Fragment, {
                        children: [(0,
                        l.jsx)("div", {
                            className: "h-[1px] rounded-full w-full bg-zinc-300 dark:bg-zinc-600"
                        }), (0,
                        l.jsx)(p, {
                            setStyle: j,
                            setShowStyle: b,
                            disabled: o,
                            style: w
                        })]
                    }) : null]
                })
            })
        }
    },
    38893: function(e, t, r) {
        "use strict";
        r.d(t, {
            Z: function() {
                return b
            }
        });
        var l = r(52322)
          , n = r(2784)
          , a = r(83112)
          , s = r(21687)
          , o = r(85673)
          , i = r(56877)
          , c = r(76765)
          , u = r(37794)
          , d = r(17779)
          , f = r(15025);
        function p(e) {
            let t = null == e ? void 0 : e.getContext("2d");
            t && t.clearRect(0, 0, t.canvas.width, t.canvas.height)
        }
        function m(e, t, r) {
            let l = e.getBoundingClientRect()
              , n = t - l.x
              , a = r - l.y
              , s = e.width / l.width;
            return {
                x: n,
                y: a,
                scale: s
            }
        }
        var h = r(90866);
        function g(e, t, r, l) {
            if (!l)
                return;
            p(l),
            l.width = t,
            l.height = r;
            let n = l.getContext("2d");
            return n && (n.fillStyle = "white",
            n.fillRect(0, 0, t, r),
            e.forEach(e=>{
                let {brush: t} = e;
                t && n.drawImage(t, 0, 0)
            }
            )),
            l
        }
        var v = r(46258);
        function x(e) {
            let {actions: t, className: a} = e
              , [s,o] = (0,
            n.useState)(!1);
            function c() {
                (0,
                v.logEvent)("stableDoodle_import");
                let e = Promise.all([r.e(8934), r.e(1229), r.e(4199), r.e(2806)]).then(r.bind(r, 66924))
                  , l = document.createElement("input");
                l.type = "file",
                l.accept = "image/png, image/jpeg",
                l.onchange = async()=>{
                    var r;
                    o(!0);
                    let n = null === (r = l.files) || void 0 === r ? void 0 : r[0];
                    t.dispatch({
                        type: "edit-sketch",
                        payload: {
                            sketch: n
                        }
                    });
                    try {
                        let {convertToSketch: r} = await e
                          , l = await r(n);
                        t.historyState[2].replaceHistory({
                            brush: l
                        }),
                        o(!1)
                    } catch (e) {
                        console.error(e),
                        o(!1)
                    }
                }
                ,
                l.click()
            }
            return (0,
            f.useShortcut)("i", c),
            (0,
            f.useShortcut)("e", t.exportSketch),
            (0,
            l.jsxs)(l.Fragment, {
                children: [(0,
                l.jsx)(i.Button, {
                    className: "w-full",
                    variant: "tonal",
                    onClick: c,
                    disabled: s,
                    children: "Import"
                }), (0,
                l.jsx)(i.Button, {
                    className: "mr-2",
                    variant: "tonal",
                    onClick: t.exportSketch,
                    disabled: s,
                    children: (0,
                    l.jsx)(i.P, {
                        children: "Export"
                    })
                })]
            })
        }
        function y(e, t, r, l, n, a) {
            e.fillStyle = a,
            e.strokeStyle = "transparent",
            e.beginPath(),
            e.arc(t * l, r * l, n * l / 2 * line_width, 0, 2 * Math.PI),
            //        x,     y,       rad, s, end
            e.fill(),
            e.closePath()
        }
        function b(e) {
            let {onSketch: t, actions: r} = e
              , v = r.historyState
              , {formatMessage: b} = (0,
            a.Z)()
              , w = (0,
            n.useRef)(null)
              , j = (0,
            s.c)(0)
              , k = (0,
            s.c)(0)
              , [R,N] = (0,
            n.useState)(4)
              , [C,E] = (0,
            n.useState)("PEN")
              , [S,P] = (0,
            n.useState)(!1)
              , I = (0,
            n.useRef)(null);
            (0,
            n.useEffect)(()=>{
                I.current = document.createElement("canvas")
            }
            , []);
            let A = (0,
            n.useRef)(null);
            (0,
            n.useEffect)(()=>{
                A.current = document.createElement("canvas")
            }
            , []);
            let O = (0,
            n.useRef)(null)
              , [M,z,{history: T, fullHistory: F, prev: B, hasPrev: U, next: Z, hasNext: _, replaceHistory: L}] = v
              , D = (0,
            n.useCallback)(()=>{
                L({
                    brush: void 0
                })
            }
            , [L, T]);
            (0,
            n.useEffect)(()=>{
                let e = ()=>{
                    var e, t, r, l, n;
                    let a = null === (e = O.current) || void 0 === e ? void 0 : e.getContext("2d");
                    if (!a || !O.current)
                        return;
                    O.current.width = 1024,
                    O.current.height = 1024,
                    I.current && (I.current.width = O.current.width,
                    I.current.height = O.current.height);
                    let s = O.current.getBoundingClientRect();
                    N(Math.max(1, ("ERASER" === C ? 25 : 4) * s.width / 512));
                    let o = g(T, null !== (l = null === (t = O.current) || void 0 === t ? void 0 : t.width) && void 0 !== l ? l : 0, null !== (n = null === (r = O.current) || void 0 === r ? void 0 : r.height) && void 0 !== n ? n : 0, A.current);
                    a && (p(O.current),
                    o && a.drawImage(o, 0, 0))
                }
                ;
                return e(),
                window.addEventListener("resize", e),
                ()=>{
                    window.removeEventListener("resize", e)
                }
            }
            , [I, T, C]);
            let[q,H] = (0,
            n.useState)(()=>null)
              , Y = (0,
            n.useRef)(t);
            (0,
            n.useEffect)(()=>{
                Y.current = t
            }
            , [t]),
            (0,
            n.useEffect)(()=>{
                var e, t, r, l, n;
                async function a(e) {
                    let t = await (0,
                    c.canvasToBlob)(e);
                    t && Y.current(t)
                }
                let s = null === (e = O.current) || void 0 === e ? void 0 : e.getContext("2d")
                  , o = g(T, null !== (l = null === (t = O.current) || void 0 === t ? void 0 : t.width) && void 0 !== l ? l : 0, null !== (n = null === (r = O.current) || void 0 === r ? void 0 : r.height) && void 0 !== n ? n : 0, A.current);
                s && (p(O.current),
                o && (s.drawImage(o, 0, 0),
                a(o)))
            }
            , [T]);
            let V = (0,
            n.useRef)(U);
            (0,
            n.useEffect)(()=>{
                V.current = U
            }
            , [U]);
            let Q = (0,
            n.useCallback)((e,t,r)=>{
                var l, n;
                let a = null === (l = O.current) || void 0 === l ? void 0 : l.getContext("2d")
                  , s = null === (n = I.current) || void 0 === n ? void 0 : n.getContext("2d");
                if (!a || !s)
                    return;
                let o = "ERASER" === C ? "white" : "black";
                y(a, e, t, r, R, o),
                y(s, e, t, r, R, o),
                w.current = {
                    x: e,
                    y: t
                }
            }
            , [R, I, C])
              , W = (0,
            n.useCallback)(()=>{
                var e, t;
                let r = null === (e = O.current) || void 0 === e ? void 0 : e.getContext("2d")
                  , l = null === (t = I.current) || void 0 === t ? void 0 : t.getContext("2d");
                function n(e) {
                    e.closePath()
                }
                r && l && (w.current = null,
                n(r),
                n(l))
            }
            , [I])
              , X = (0,
            n.useCallback)((e,t,r)=>{
                var l, n;
                let a = null === (l = O.current) || void 0 === l ? void 0 : l.getContext("2d")
                  , s = null === (n = I.current) || void 0 === n ? void 0 : n.getContext("2d");
                function o(l) {
                    let n = "ERASER" === C ? "white" : "black"
                      , a = w.current;
                    if (a) {
                        var s;
                        (s = l).strokeStyle = n,
                        s.lineWidth = R * r * line_width,
                        s.lineCap = "round",
                        s.beginPath(),
                        s.moveTo(a.x * r, a.y * r),
                        s.lineTo(e * r, t * r),
                        s.stroke(),
                        s.closePath()
                    } else
                        y(l, e, t, r, R, n)
                }
                a && s && (o(a),
                o(s),
                w.current = {
                    x: e,
                    y: t
                })
            }
            , [R, I, C])
              , G = (0,
            n.useCallback)((e,t,r)=>{
                var l, n;
                let a = null === (l = O.current) || void 0 === l ? void 0 : l.getContext("2d")
                  , s = null === (n = I.current) || void 0 === n ? void 0 : n.getContext("2d");
                if (q && (q.x.set(t - R / 2),
                q.y.set(r - R / 2)),
                a && s && S) {
                    let {x: l, y: n, scale: a} = m(e, t, r);
                    X(l, n, a)
                }
            }
            , [q, S, R, I, X])
              , K = (0,
            n.useCallback)(async()=>{
                var e, t, r, l;
                P(!1),
                W();
                let n = document.createElement("canvas");
                n.width = null !== (r = null === (e = O.current) || void 0 === e ? void 0 : e.width) && void 0 !== r ? r : 0,
                n.height = null !== (l = null === (t = O.current) || void 0 === t ? void 0 : t.height) && void 0 !== l ? l : 0;
                let a = n.getContext("2d");
                if (!a || !I.current)
                    return;
                a.drawImage(I.current, 0, 0),
                p(I.current);
                let s = await createImageBitmap(n);
                (0,
                h.Z)(n),
                z({
                    brush: s
                })
            }
            , [z, W, I])
              , $ = (0,
            u.useIsMobileDevice)()
              , J = (0,
            n.useMemo)(()=>["mod+z", "mod+z"], []);
            (0,
            f.useShortcut)(J, B);
            let ee = (0,
            n.useMemo)(()=>["mod+y", "mod+Y"], []);
            (0,
            f.useShortcut)(ee, Z);
            let[et,er] = (0,
            n.useState)(!1);
            return (0,
            f.useShortcut)("d d d d", ()=>er(!et)),
            (0,
            l.jsxs)("div", {
                className: "relative touch-none flex flex-col gap-6",
                children: [(0,
                l.jsx)("div", {
                    className: "flex justify-between gap-2",
                    children: (0,
                    l.jsxs)(l.Fragment, {
                        children: [(0,
                        l.jsxs)("div", {
                            className: "flex gap-2",
                            children: [et && (0,
                            l.jsx)(x, {
                                actions: r
                            }), (0,
                            l.jsx)(i.Tooltip, {
                                hint: b({
                                    id: "/stable-doodle/tooltip/tool"
                                }),
                                children: (0,
                                l.jsx)(i.SegmentedButton, {
                                    list: [{
                                        value: "PEN",
                                        content: (0,
                                        l.jsx)(d.Pencil, {
                                            size: 22
                                        })
                                    }, {
                                        value: "ERASER",
                                        content: (0,
                                        l.jsx)(d.Eraser, {
                                            size: 22
                                        })
                                    }],
                                    value: C,
                                    onChange: E
                                })
                            })]
                        }), (0,
                        l.jsxs)("div", {
                            className: "flex gap-2",
                            children: [(0,
                            l.jsx)(i.Tooltip, {
                                hint: b({
                                    id: "/stable-doodle/tooltip/clear"
                                }),
                                children: (0,
                                l.jsx)(i.Button, {
                                    variant: "tonal",
                                    onClick: D,
                                    children: b({
                                        id: "/stable-doodle/button/clear"
                                    })
                                })
                            }), (0,
                            l.jsx)(i.Tooltip, {
                                hint: b({
                                    id: "/stable-doodle/tooltip/undo"
                                }),
                                disabled: !U,
                                children: (0,
                                l.jsx)(i.Button, {
                                    disabled: !U,
                                    variant: "tonal",
                                    size: "square",
                                    onClick: B,
                                    children: (0,
                                    l.jsx)(d.ArrowGoBack, {
                                        size: 22
                                    })
                                })
                            }), (0,
                            l.jsx)(i.Tooltip, {
                                hint: b({
                                    id: "/stable-doodle/tooltip/redo"
                                }),
                                disabled: !U,
                                children: (0,
                                l.jsx)(i.Button, {
                                    disabled: !_,
                                    variant: "tonal",
                                    size: "square",
                                    onClick: Z,
                                    children: (0,
                                    l.jsx)(d.ArrowGoForward, {
                                        size: 22
                                    })
                                })
                            })]
                        })]
                    })
                }), (0,
                l.jsxs)("div", {
                    className: "flex flex-1",
                    children: [(0,
                    l.jsx)("canvas", {
                        ref: O,
                        className: (0,
                        i.mergeClass)("aspect-square max-w-full max-h-[512px] cursor-none", "w-full h-full", "bg-white", "rounded-xl drop-shadow-[0_0_24px_rgba(0,0,0,0.15)]"),
                        style: {
                            gridArea: "1 / 1 / 2 / 2",
                            alignSelf: "center",
                            justifySelf: "center"
                        },
                        onMouseDown: e=>{
                            if (!$) {
                                P(!0);
                                let t = e.target
                                  , {x: r, y: l, scale: n} = m(t, e.clientX, e.clientY);
                                Q(r, l, n)
                            }
                        }
                        ,
                        onTouchStart: e=>{
                            P(!0);
                            let t = e.target
                              , {x: r, y: l, scale: n} = m(t, e.touches[0].clientX, e.touches[0].clientY);
                            Q(r, l, n)
                        }
                        ,
                        onMouseUp: async e=>{
                            K()
                        }
                        ,
                        onTouchEnd: async()=>{
                            K()
                        }
                        ,
                        onMouseEnter: e=>{
                            j.set(e.clientX - R / 2),
                            k.set(e.clientY - R / 2),
                            H({
                                x: j,
                                y: k
                            })
                        }
                        ,
                        onMouseLeave: async()=>{
                            H(null),
                            S && K()
                        }
                        ,
                        onMouseMove: e=>{
                            if (!$) {
                                let t = e.target;
                                G(t, e.clientX, e.clientY)
                            }
                        }
                        ,
                        onTouchMove: e=>{
                            if (1 === e.touches.length) {
                                let t = e.target;
                                G(t, e.touches[0].clientX, e.touches[0].clientY)
                            }
                        }
                    }), q && (0,
                    l.jsx)(o.E.div, {
                        className: "fixed top-0 left-0 rounded-full pointer-events-none cursor-crosshair opacity-80",
                        style: {
                            x: q.x,
                            y: q.y,
                            width: R,
                            height: R,
                            backgroundColor: "ERASER" === C ? "white" : "black",
                            border: "1px solid black",
                            transformOrigin: "center"
                        }
                    })]
                })]
            })
        }
    },
    19471: function(e, t, r) {
        "use strict";
        r.d(t, {
            Z: function() {
                return h
            }
        });
        var l = r(2784)
          , n = r(27217)
          , a = r(37794)
          , s = r(76765)
          , o = r(163)
          , i = r(38660)
          , c = r(45638)
          , u = r(78898)
          , d = r(4964);
        function f(e) {
            let t = e.getContext("2d")
              , r = document.createElement("canvas");
            r.width = e.width,
            r.height = e.height;
            let l = r.getContext("2d")
              , n = t.getImageData(0, 0, e.width, e.height)
              , a = n.data;
            for (let e = 0; e < a.length; e += 4)
                255 === a[e] && 255 === a[e + 1] && 255 === a[e + 2] && (a[e + 3] = 0);
            t.putImageData(n, 0, 0),
            l.fillStyle = "white",
            l.fillRect(0, 0, e.width, e.height),
            l.filter = "blur(5px)",
            l.drawImage(e, 0, 0),
            l.filter = "blur(0px)",
            l.drawImage(e, 0, 0),
            t.drawImage(r, 0, 0)
        }
        function p(e) {
            let t = e.getContext("2d");
            t.filter = "invert(1)",
            t.drawImage(e, 0, 0)
        }
        var m = r(90866);
        function h() {
            let[e,t] = (0,
            u.ZP)()
              , [,,{getSubscribeAfterUpdate: r}] = (0,
            o.useSessionState)()
              , {syncProcess: h} = function(e, t) {
                let r = (0,
                n.useInternalAPI)(n.stableDoodleApi)
                  , l = (0,
                o.useUserRequired)();
                async function a(t, l, a, o, i) {
                    e({
                        type: "loading-result",
                        payload: {
                            index: o
                        }
                    });
                    let c = await (0,
                    s.blobToCanvas)(t);
                    f(c),
                    p(c);
                    let u = await (0,
                    s.canvasToBlob)(c);
                    if (!u)
                        throw Error("Failed to convert canvas to blob");
                    (0,
                    m.Z)(c);
                    try {
                        let[t,{unacceptableContentType: n, unacceptableContentDetected: s, flywheelEntryId: c}] = await r({
                            sketch: u,
                            prompt: l + " " + a
                        }, {
                            signal: null == i ? void 0 : i.signal
                        })
                          , d = new File([t],"result.png",{
                            type: "image/png"
                        });
                        e({
                            type: "success-result",
                            payload: {
                                file: d,
                                index: o,
                                nsfw: s && "nsfw" === n
                            }
                        })
                    } catch (s) {
                        var d, h, g, v;
                        let t = null == i ? void 0 : null === (d = i.signal) || void 0 === d ? void 0 : d.aborted;
                        if (t)
                            return;
                        let r = s instanceof n.NetworkError ? s.status : void 0
                          , l = s instanceof n.NetworkError ? null == s ? void 0 : null === (h = s.params) || void 0 === h ? void 0 : h.canRefreshAt : void 0
                          , a = s instanceof n.NetworkError && (null === (g = s.params) || void 0 === g ? void 0 : g["x-unacceptable-content-detected"]) === "true" ? (null === (v = s.params) || void 0 === v ? void 0 : v["x-unacceptable-content-type"]) === "nsfw" : void 0;
                        e({
                            type: "error-result",
                            payload: {
                                index: o,
                                status: r,
                                canRefreshTimestamp: l ? Date.now() + Number.parseInt(l, 10) : void 0,
                                nsfw: a
                            }
                        })
                    }
                }
                return {
                    syncProcess: async function(t, r, n) {
                        let s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : [1, 2, 3]
                          , o = arguments.length > 4 ? arguments[4] : void 0;
                        await l(),
                        1 === s.length ? (e({
                            type: "edit-sketch",
                            payload: {
                                sketch: t
                            }
                        }),
                        e({
                            type: "edit-prompt",
                            payload: {
                                prompt: r
                            }
                        }),
                        e({
                            type: "edit-preset",
                            payload: {
                                preset: n
                            }
                        })) : e({
                            type: "start",
                            payload: {
                                sketch: t,
                                prompt: r,
                                preset: n
                            }
                        });
                        let i = new File([t],"sketch.png",{
                            type: "image/png"
                        });
                        e({
                            type: "success-result",
                            payload: {
                                file: i,
                                index: 0
                            }
                        }),
                        (0,
                        d.runSequential)(s.map(e=>()=>a(t, r, n, e, o)), console.error)
                    },
                    processSyncImageAtIndex: a
                }
            }(t, 0)
              , {asyncProcess: g} = function(e, t) {
                let r = (0,
                n.useInternalAPI)(n.asyncStableDoodleApi)
                  , l = (0,
                o.useUserRequired)();
                async function a(t, l, a, o, i) {
                    var c, u, h, g, v, x, y;
                    e({
                        type: "loading-result",
                        payload: {
                            index: o
                        }
                    });
                    let b = await (0,
                    s.blobToCanvas)(t);
                    f(b),
                    p(b);
                    let w = await (0,
                    s.canvasToBlob)(b);
                    if (!w)
                        throw Error("Failed to convert canvas to blob");
                    (0,
                    m.Z)(b);
                    try {
                        let[{documentId: t}] = await r({
                            sketch: w,
                            prompt: l + " " + a
                        }, {
                            signal: null == i ? void 0 : i.signal
                        });
                        e({
                            type: "update-result",
                            payload: {
                                index: o,
                                asyncTaskId: t
                            }
                        });
                        let {file: n, task: s} = await (0,
                        d.waitForQueuedTask)(t, t=>{
                            e({
                                type: "update-result",
                                payload: {
                                    index: o,
                                    asyncQueuePosition: t
                                }
                            })
                        }
                        , "sketch.png", i);
                        e({
                            type: "success-result",
                            payload: {
                                index: o,
                                file: n,
                                nsfw: null === (c = s.outputs) || void 0 === c ? void 0 : null === (u = c.generatedImage) || void 0 === u ? void 0 : u.generatedImageNsfw
                            }
                        })
                    } catch (c) {
                        let t = null == i ? void 0 : null === (h = i.signal) || void 0 === h ? void 0 : h.aborted;
                        if (t)
                            return;
                        let r = c instanceof n.NetworkError ? c.status : void 0
                          , l = c instanceof n.NetworkError ? null == c ? void 0 : null === (g = c.params) || void 0 === g ? void 0 : g.canRefreshAt : void 0
                          , a = c instanceof n.NetworkError && (null === (v = c.params) || void 0 === v ? void 0 : v["x-unacceptable-content-detected"]) === "true" ? (null === (x = c.params) || void 0 === x ? void 0 : x["x-unacceptable-content-type"]) === "nsfw" : void 0
                          , s = c instanceof n.NetworkError && (null === (y = c.params) || void 0 === y ? void 0 : y["x-conflict-cause"]) === "queue-max-size-reached";
                        e({
                            type: "error-result",
                            payload: {
                                index: o,
                                status: r,
                                canRefreshTimestamp: l ? Date.now() + Number.parseInt(l, 10) : void 0,
                                nsfw: a,
                                maxQueueReached: s
                            }
                        })
                    }
                }
                return {
                    asyncProcess: async function(t, r, n) {
                        let s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : [1, 2, 3]
                          , o = arguments.length > 4 ? arguments[4] : void 0;
                        await l(),
                        1 === s.length ? (e({
                            type: "edit-sketch",
                            payload: {
                                sketch: t
                            }
                        }),
                        e({
                            type: "edit-prompt",
                            payload: {
                                prompt: r
                            }
                        }),
                        e({
                            type: "edit-preset",
                            payload: {
                                preset: n
                            }
                        })) : e({
                            type: "start",
                            payload: {
                                sketch: t,
                                prompt: r,
                                preset: n
                            }
                        });
                        let i = new File([t],"sketch.png",{
                            type: "image/png"
                        });
                        e({
                            type: "success-result",
                            payload: {
                                file: i,
                                index: 0
                            }
                        });
                        let c = s.map(async e=>{
                            await a(t, r, n, e, o)
                        }
                        );
                        await (0,
                        d.runParallel)(c)
                    },
                    processAsyncImageAtIndex: a
                }
            }(t, 0)
              , [v,x] = (0,
            n.useConcurrencyController)();
            async function y(e, t, l) {
                let n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : [1, 2, 3]
                  , a = arguments.length > 4 ? arguments[4] : void 0
                  , {user: s, subscription: i} = await r();
                (0,
                o.userIsLogged)(s) && (0,
                o.subscriptionToIsPro)(null != i ? i : void 0) ? await h(e, t, l, n, a) : await g(e, t, l, n, a)
            }
            async function b() {
                let t = v();
                try {
                    if (!e.sketch)
                        throw Error("No image file selected");
                    let r = e.results.slice(1, 4).map((e,t)=>e.state === u.tE ? t : void 0).filter(e=>void 0 !== e);
                    await y(e.sketch, e.prompt, e.preset, r, t)
                } catch (e) {
                    console.error(e)
                }
            }
            async function w() {
                let r = v();
                t({
                    type: "clear-all-hd-result"
                });
                try {
                    if (!e.sketch)
                        throw Error("No image file selected");
                    let t = e.results.slice(1, 4).map((e,t)=>e.state === u.tE ? t : void 0).filter(e=>void 0 !== e);
                    await y(e.sketch, e.prompt, e.preset, t, r),
                    -1 !== e.selectedResult && e.results[e.selectedResult].hdFile && await N(e.selectedResult, r)
                } catch (e) {
                    console.error(e)
                }
            }
            async function j() {
                let {subscription: e} = await r();
                e && (0,
                o.subscriptionToIsPro)(e) ? await w() : await b()
            }
            async function k(r, l) {
                try {
                    if (!e.sketch)
                        throw Error("No sketch");
                    if (!e.prompt)
                        throw Error("No prompt");
                    t({
                        type: "loading-result",
                        payload: {
                            index: r
                        }
                    }),
                    await y(e.sketch, e.prompt, e.preset, [r], l)
                } catch (e) {
                    console.error(e)
                }
            }
            let R = (0,
            n.useInternalAPI)(n.enhanceApi);
            async function N(r, l) {
                let n = e.results[r];
                if (!(null == n ? void 0 : n.file))
                    throw Error("No result at index ".concat(r));
                if (n.nsfw)
                    return n.file;
                if (n.hdFile)
                    return n.hdFile;
                t({
                    type: "hd-loading",
                    payload: {
                        index: r
                    }
                });
                try {
                    let e = await R({
                        file: n.file,
                        scale: 2,
                        outputFormat: "jpg",
                        featuredTool: "stableDiffusion"
                    }, {
                        signal: null == l ? void 0 : l.signal
                    })
                      , {name: a} = (0,
                    s.extractImageInfosFromPath)(n.file.name)
                      , o = new File([e],"".concat(a, ".jpeg"),{
                        type: "image/jpeg"
                    });
                    return t({
                        type: "hd-success",
                        payload: {
                            index: r,
                            file: o
                        }
                    }),
                    o
                } catch (e) {
                    throw t({
                        type: "hd-error",
                        payload: {
                            index: r
                        }
                    }),
                    e
                }
            }
            let[C] = (0,
            n.useConcurrencyController)();
            async function E(e) {
                let t = C();
                try {
                    let r = await N(e, t);
                    await (0,
                    s.downloadImageOrShare)(r)
                } catch (e) {
                    t.signal.aborted || console.error(e)
                }
            }
            let S = (0,
            l.useMemo)(()=>{
                try {
                    return function(e) {
                        var t;
                        let r = e ? null == navigator ? void 0 : null === (t = navigator.canShare) || void 0 === t ? void 0 : t.call(navigator, e) : !!(null == navigator ? void 0 : navigator.canShare)
                          , l = navigator.userAgent || navigator.vendor
                          , n = /android|iPad|iPhone|iPod/i.test(l);
                        return r && n
                    }()
                } catch (e) {
                    return !1
                }
            }
            , []);
            async function P() {
                try {
                    let t = e.results.every(e=>e.state === u.tE);
                    if (!t)
                        throw Error("Not all results are loaded");
                    let r = e.results.map(e=>e.file).filter(e=>void 0 !== e);
                    if (4 !== r.length)
                        throw Error("Not enough results to share");
                    let l = "image/png"
                      , n = await (0,
                    c.Z)(r, l, "/watermark.png")
                      , a = e.prompt.slice(0, 100);
                    e.preset && (a += " - ".concat(e.preset));
                    let o = new File([n],"".concat(a, ".png"),{
                        type: l
                    });
                    await (0,
                    s.downloadImageOrShare)(o)
                } catch (e) {
                    console.error(e),
                    (0,
                    i.newToast)({
                        label: "We got an error during the generation of the image, sorry for the inconvenience",
                        type: "error",
                        duration: 5e3,
                        canClose: !0
                    })
                }
            }
            let I = (0,
            a.useStateWithHistory)({
                brush: void 0
            })
              , A = (0,
            n.useInternalAPI)(n.cancelBufferedTaskApi);
            async function O() {
                let t = e.results.filter(e=>e.state === u.br)
                  , r = t.map(e=>e.asyncTaskId).filter(Boolean);
                r.forEach(e=>A({
                    taskId: e
                }))
            }
            return [e, {
                dispatch: t,
                startProcess: y,
                refreshResult: k,
                refreshOnLogin: b,
                refreshOnBecomePro: w,
                statusChangeRefresh: j,
                generateHdVersion: N,
                cancelRunningTasks: O,
                selectResult: function(e) {
                    t({
                        type: "select-result",
                        payload: {
                            index: e
                        }
                    })
                },
                download: E,
                canShare: S,
                share: P,
                historyState: I,
                exportSketch: function() {
                    e.sketch && (0,
                    s.downloadImageOrShare)(new File([e.sketch],"stable-doodle.png"))
                }
            }]
        }
    },
    78898: function(e, t, r) {
        "use strict";
        r.d(t, {
            ZP: function() {
                return u
            },
            br: function() {
                return a
            },
            hA: function() {
                return s
            },
            pn: function() {
                return o
            },
            tE: function() {
                return n
            }
        });
        var l = r(2784);
        let n = 0
          , a = 1
          , s = 2
          , o = -1
          , i = {
            prompt: "",
            preset: "",
            sketch: null,
            selectedResult: -1,
            results: [{
                file: void 0,
                state: s,
                hdState: s
            }, {
                file: void 0,
                state: s,
                hdState: s
            }, {
                file: void 0,
                state: s,
                hdState: s
            }, {
                file: void 0,
                state: s,
                hdState: s
            }]
        };
        function c(e, t) {
            switch (t.type) {
            case "start":
                return {
                    ...i,
                    prompt: t.payload.prompt,
                    preset: t.payload.preset,
                    sketch: t.payload.sketch
                };
            case "clear-all-hd-result":
                return {
                    ...e,
                    results: e.results.map(e=>({
                        ...e,
                        hdFile: void 0,
                        hdState: s
                    }))
                };
            case "clear-hd-result":
                return {
                    ...e,
                    results: e.results.map((e,r)=>r === t.payload.index ? {
                        ...e,
                        hdFile: void 0,
                        hdState: s
                    } : e)
                };
            case "edit-sketch":
                return {
                    ...e,
                    sketch: t.payload.sketch
                };
            case "edit-prompt":
                return {
                    ...e,
                    prompt: t.payload.prompt
                };
            case "edit-preset":
                return {
                    ...e,
                    preset: t.payload.preset
                };
            case "loading-result":
                return {
                    ...e,
                    results: e.results.map((e,r)=>r === t.payload.index ? {
                        ...e,
                        state: a
                    } : e)
                };
            case "update-result":
                return {
                    ...e,
                    results: e.results.map((e,r)=>r === t.payload.index ? {
                        ...e,
                        ...t.payload
                    } : e)
                };
            case "success-result":
                return {
                    ...e,
                    results: e.results.map((e,r)=>r === t.payload.index ? {
                        ...e,
                        hdFile: void 0,
                        hdState: s,
                        error: void 0,
                        file: t.payload.file,
                        state: n,
                        nsfw: t.payload.nsfw
                    } : e)
                };
            case "error-result":
                return {
                    ...e,
                    results: e.results.map((e,r)=>r === t.payload.index ? {
                        ...e,
                        state: o,
                        error: {
                            status: t.payload.status,
                            canRefreshTimestamp: t.payload.canRefreshTimestamp
                        },
                        nsfw: t.payload.nsfw,
                        maxQueueReached: t.payload.maxQueueReached
                    } : e)
                };
            case "select-result":
                return {
                    ...e,
                    selectedResult: t.payload.index
                };
            case "hd-loading":
                return {
                    ...e,
                    results: e.results.map((e,r)=>r === t.payload.index ? {
                        ...e,
                        hdState: a
                    } : e)
                };
            case "hd-success":
                return {
                    ...e,
                    results: e.results.map((e,r)=>r === t.payload.index ? {
                        ...e,
                        hdState: n,
                        hdFile: t.payload.file
                    } : e)
                };
            case "hd-error":
                return {
                    ...e,
                    results: e.results.map((e,r)=>r === t.payload.index ? {
                        ...e,
                        hdState: o
                    } : e)
                };
            case "reset":
                return i;
            default:
                return e
            }
        }
        function u() {
            return (0,
            l.useReducer)(c, i)
        }
    },
    24015: function(e, t, r) {
        "use strict";
        function l(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var r = 0, l = Array(t); r < t; r++)
                l[r] = e[r];
            return l
        }
        var n = Object.defineProperty
          , a = Object.getOwnPropertyDescriptor
          , s = Object.getOwnPropertyNames
          , o = Object.prototype.hasOwnProperty
          , i = {};
        !function(e, t) {
            for (var r in t)
                n(e, r, {
                    get: t[r],
                    enumerable: !0
                })
        }(i, {
            default: function() {
                return x
            },
            fadeAnimation: function() {
                return g
            },
            silentAnimation: function() {
                return v
            },
            slideUpAnimation: function() {
                return h
            }
        }),
        e.exports = function(e, t, r, l) {
            if (t && "object" == typeof t || "function" == typeof t) {
                var i = !0
                  , c = !1
                  , u = void 0;
                try {
                    for (var d, f = s(t)[Symbol.iterator](); !(i = (d = f.next()).done); i = !0)
                        !function() {
                            var r = d.value;
                            o.call(e, r) || void 0 === r || n(e, r, {
                                get: function() {
                                    return t[r]
                                },
                                enumerable: !(l = a(t, r)) || l.enumerable
                            })
                        }()
                } catch (e) {
                    c = !0,
                    u = e
                } finally {
                    try {
                        i || null == f.return || f.return()
                    } finally {
                        if (c)
                            throw u
                    }
                }
            }
            return e
        }(n({}, "__esModule", {
            value: !0
        }), i);
        var c = r(2784)
          , u = r(28316)
          , d = r(53316)
          , f = r(56877)
          , p = r(37794)
          , m = r(52322)
          , h = {
            transition: {
                ease: "easeInOut",
                duration: .8
            },
            initial: {
                translateY: "100%",
                borderTopLeftRadius: 16,
                borderTopRightRadius: 16
            },
            animate: {
                translateY: 0,
                borderTopLeftRadius: 0,
                borderTopRightRadius: 0
            },
            exit: {
                translateY: "100%",
                borderTopLeftRadius: 16,
                borderTopRightRadius: 16
            }
        }
          , g = {
            transition: {
                ease: "easeInOut",
                duration: .2
            },
            initial: {
                opacity: 0
            },
            animate: {
                opacity: 1
            },
            exit: {
                opacity: 0
            }
        }
          , v = {
            transition: {
                duration: 0
            },
            initial: {},
            animate: {},
            exit: {}
        };
        function x(e) {
            var t, r = e.children, n = e.open, a = e.tool, s = e.animation, o = void 0 === s ? g : s, i = e.fullScreenMode, h = void 0 === i || i, x = function(e) {
                if (Array.isArray(e))
                    return e
            }(t = (0,
            c.useState)(null)) || function(e, t) {
                var r, l, n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (null != n) {
                    var a = []
                      , s = !0
                      , o = !1;
                    try {
                        for (n = n.call(e); !(s = (r = n.next()).done) && (a.push(r.value),
                        !t || a.length !== t); s = !0)
                            ;
                    } catch (e) {
                        o = !0,
                        l = e
                    } finally {
                        try {
                            s || null == n.return || n.return()
                        } finally {
                            if (o)
                                throw l
                        }
                    }
                    return a
                }
            }(t, 2) || function(e, t) {
                if (e) {
                    if ("string" == typeof e)
                        return l(e, t);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    if ("Object" === r && e.constructor && (r = e.constructor.name),
                    "Map" === r || "Set" === r)
                        return Array.from(r);
                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
                        return l(e, t)
                }
            }(t, 2) || function() {
                throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }(), y = x[0], b = x[1];
            (0,
            c.useEffect)(function() {
                if ("undefined" != typeof document) {
                    var e = document.createElement("div");
                    return e.id = "".concat(a, "_full-page"),
                    document.body.appendChild(e),
                    b(e),
                    document.body.scrollTop = 0,
                    function() {
                        document.body.removeChild(e)
                    }
                }
            }, [a]);
            var w = (0,
            p.useIsMobileDevice)()
              , j = (0,
            c.useRef)(n);
            return ((0,
            c.useEffect)(function() {
                h && (w && j.current !== n && (n ? document.documentElement.requestFullscreen && setTimeout(function() {
                    document.documentElement.requestFullscreen().catch(console.warn)
                }, 1e3) : document.exitFullscreen && document.fullscreenEnabled && document.exitFullscreen().catch(console.warn)),
                j.current = n)
            }, [n, w, h]),
            (0,
            p.useAddClassToBody)("full-size-fixed", n),
            y) ? (0,
            u.createPortal)((0,
            m.jsx)(d.AnimatePresence, {
                children: n && (0,
                m.jsx)(d.motion.div, {
                    transition: {
                        ease: "easeInOut",
                        duration: o === v ? 0 : .2
                    },
                    initial: {
                        opacity: 0
                    },
                    animate: {
                        opacity: 1
                    },
                    exit: {
                        opacity: 0
                    },
                    className: "fixed top-0 right-0 bottom-0 left-0 bg-gray-900 bg-opacity-95 z-30",
                    children: (0,
                    m.jsx)(d.motion.div, {
                        transition: o.transition,
                        initial: o.initial,
                        animate: o.animate,
                        exit: o.exit,
                        className: (0,
                        f.mergeClass)("relative top-0 right-0 bottom-0 left-0", "overflow-hidden", "bg-white shadow dark:bg-gray-900", "w-full h-full"),
                        children: r
                    }, "@initml/app-launcher-modal_dialog")
                }, "@initml/full-page")
            }), y) : null
        }
    },
    15025: function(e, t, r) {
        "use strict";
        var l, n, a = Object.create, s = Object.defineProperty, o = Object.getOwnPropertyDescriptor, i = Object.getOwnPropertyNames, c = Object.getPrototypeOf, u = Object.prototype.hasOwnProperty, d = function(e, t, r, l) {
            if (t && "object" == typeof t || "function" == typeof t) {
                var n = !0
                  , a = !1
                  , c = void 0;
                try {
                    for (var d, f = i(t)[Symbol.iterator](); !(n = (d = f.next()).done); n = !0)
                        !function() {
                            var n = d.value;
                            u.call(e, n) || n === r || s(e, n, {
                                get: function() {
                                    return t[n]
                                },
                                enumerable: !(l = o(t, n)) || l.enumerable
                            })
                        }()
                } catch (e) {
                    a = !0,
                    c = e
                } finally {
                    try {
                        n || null == f.return || f.return()
                    } finally {
                        if (a)
                            throw c
                    }
                }
            }
            return e
        }, f = {};
        !function(e, t) {
            for (var r in t)
                s(e, r, {
                    get: t[r],
                    enumerable: !0
                })
        }(f, {
            useHoldKeyAction: function() {
                return g
            },
            useShortcut: function() {
                return v
            }
        }),
        e.exports = d(s({}, "__esModule", {
            value: !0
        }), f);
        var p = (n = null != (l = r(27495)) ? a(c(l)) : {},
        d(l && l.__esModule ? n : s(n, "default", {
            value: l,
            enumerable: !0
        }), l))
          , m = r(2784);
        function h(e, t, r) {
            var l = (0,
            m.useRef)(r);
            (0,
            m.useEffect)(function() {
                l.current = r
            }, [r]),
            (0,
            m.useEffect)(function() {
                var r = function(e) {
                    e.code === t && l.current(e)
                };
                return document.addEventListener(e, r),
                function() {
                    return document.removeEventListener(e, r)
                }
            }, [e, t])
        }
        function g(e, t, r) {
            h("keydown", e, t),
            h("keyup", e, r)
        }
        function v(e, t, r) {
            var l = (0,
            m.useRef)(t);
            (0,
            m.useEffect)(function() {
                l.current = t
            }, [t]),
            (0,
            m.useEffect)(function() {
                if (null == r || !r.disabled) {
                    var t = p.default.bind(e, function(e, t) {
                        l.current(e, t)
                    });
                    return function() {
                        t.unbind(e)
                    }
                }
            }, [e, t, null == r ? void 0 : r.disabled])
        }
    },
    48587: function(e, t, r) {
        "use strict";
        var l, n, a = Object.create, s = Object.defineProperty, o = Object.getOwnPropertyDescriptor, i = Object.getOwnPropertyNames, c = Object.getPrototypeOf, u = Object.prototype.hasOwnProperty, d = function(e, t, r, l) {
            if (t && "object" == typeof t || "function" == typeof t) {
                var n = !0
                  , a = !1
                  , c = void 0;
                try {
                    for (var d, f = i(t)[Symbol.iterator](); !(n = (d = f.next()).done); n = !0)
                        !function() {
                            var n = d.value;
                            u.call(e, n) || n === r || s(e, n, {
                                get: function() {
                                    return t[n]
                                },
                                enumerable: !(l = o(t, n)) || l.enumerable
                            })
                        }()
                } catch (e) {
                    a = !0,
                    c = e
                } finally {
                    try {
                        n || null == f.return || f.return()
                    } finally {
                        if (a)
                            throw c
                    }
                }
            }
            return e
        }, f = {};
        !function(e, t) {
            for (var r in t)
                s(e, r, {
                    get: t[r],
                    enumerable: !0
                })
        }(f, {
            default: function() {
                return g
            }
        }),
        e.exports = d(s({}, "__esModule", {
            value: !0
        }), f);
        var p = r(56877)
          , m = (n = null != (l = r(24015)) ? a(c(l)) : {},
        d(l && l.__esModule ? n : s(n, "default", {
            value: l,
            enumerable: !0
        }), l))
          , h = r(52322);
        function g(e) {
            var t = e.className
              , r = e.animation
              , l = e.tool
              , n = e.input
              , a = e.output
              , s = e.displayOutput
              , o = e.fullScreenMode;
            return (0,
            h.jsxs)(h.Fragment, {
                children: [(0,
                h.jsx)(m.default, {
                    open: s,
                    tool: l,
                    animation: r,
                    fullScreenMode: o,
                    children: a
                }), (0,
                h.jsx)("section", {
                    className: (0,
                    p.mergeClass)("flex flex-1 flex-col sm:flex-row w-full gap-10 justify-center items-center sm:items-start", t),
                    children: n
                })]
            })
        }
    }
}]);
