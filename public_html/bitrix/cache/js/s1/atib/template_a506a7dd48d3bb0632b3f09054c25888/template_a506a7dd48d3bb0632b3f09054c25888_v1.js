
; /* Start:"a:4:{s:4:"full";s:71:"/bitrix/templates/atib/libs/jquery/jquery-3.7.1.min.js?1710768558138292";s:6:"source";s:54:"/bitrix/templates/atib/libs/jquery/jquery-3.7.1.min.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
/*! jQuery v3.5.1 | (c) JS Foundation and other contributors | jquery.org/license */
!(function (e, t) {
	'use strict'
	'object' == typeof module && 'object' == typeof module.exports
		? (module.exports = e.document
				? t(e, !0)
				: function (e) {
						if (!e.document)
							throw new Error('jQuery requires a window with a document')
						return t(e)
				  })
		: t(e)
})('undefined' != typeof window ? window : this, function (C, e) {
	'use strict'
	var t = [],
		r = Object.getPrototypeOf,
		s = t.slice,
		g = t.flat
			? function (e) {
					return t.flat.call(e)
			  }
			: function (e) {
					return t.concat.apply([], e)
			  },
		u = t.push,
		i = t.indexOf,
		n = {},
		o = n.toString,
		v = n.hasOwnProperty,
		a = v.toString,
		l = a.call(Object),
		y = {},
		m = function (e) {
			return 'function' == typeof e && 'number' != typeof e.nodeType
		},
		x = function (e) {
			return null != e && e === e.window
		},
		E = C.document,
		c = { type: !0, src: !0, nonce: !0, noModule: !0 }
	function b(e, t, n) {
		var r,
			i,
			o = (n = n || E).createElement('script')
		if (((o.text = e), t))
			for (r in c)
				(i = t[r] || (t.getAttribute && t.getAttribute(r))) &&
					o.setAttribute(r, i)
		n.head.appendChild(o).parentNode.removeChild(o)
	}
	function w(e) {
		return null == e
			? e + ''
			: 'object' == typeof e || 'function' == typeof e
			? n[o.call(e)] || 'object'
			: typeof e
	}
	var f = '3.5.1',
		S = function (e, t) {
			return new S.fn.init(e, t)
		}
	function p(e) {
		var t = !!e && 'length' in e && e.length,
			n = w(e)
		return (
			!m(e) &&
			!x(e) &&
			('array' === n ||
				0 === t ||
				('number' == typeof t && 0 < t && t - 1 in e))
		)
	}
	;(S.fn = S.prototype =
		{
			jquery: f,
			constructor: S,
			length: 0,
			toArray: function () {
				return s.call(this)
			},
			get: function (e) {
				return null == e
					? s.call(this)
					: e < 0
					? this[e + this.length]
					: this[e]
			},
			pushStack: function (e) {
				var t = S.merge(this.constructor(), e)
				return (t.prevObject = this), t
			},
			each: function (e) {
				return S.each(this, e)
			},
			map: function (n) {
				return this.pushStack(
					S.map(this, function (e, t) {
						return n.call(e, t, e)
					})
				)
			},
			slice: function () {
				return this.pushStack(s.apply(this, arguments))
			},
			first: function () {
				return this.eq(0)
			},
			last: function () {
				return this.eq(-1)
			},
			even: function () {
				return this.pushStack(
					S.grep(this, function (e, t) {
						return (t + 1) % 2
					})
				)
			},
			odd: function () {
				return this.pushStack(
					S.grep(this, function (e, t) {
						return t % 2
					})
				)
			},
			eq: function (e) {
				var t = this.length,
					n = +e + (e < 0 ? t : 0)
				return this.pushStack(0 <= n && n < t ? [this[n]] : [])
			},
			end: function () {
				return this.prevObject || this.constructor()
			},
			push: u,
			sort: t.sort,
			splice: t.splice,
		}),
		(S.extend = S.fn.extend =
			function () {
				var e,
					t,
					n,
					r,
					i,
					o,
					a = arguments[0] || {},
					s = 1,
					u = arguments.length,
					l = !1
				for (
					'boolean' == typeof a && ((l = a), (a = arguments[s] || {}), s++),
						'object' == typeof a || m(a) || (a = {}),
						s === u && ((a = this), s--);
					s < u;
					s++
				)
					if (null != (e = arguments[s]))
						for (t in e)
							(r = e[t]),
								'__proto__' !== t &&
									a !== r &&
									(l && r && (S.isPlainObject(r) || (i = Array.isArray(r)))
										? ((n = a[t]),
										  (o =
												i && !Array.isArray(n)
													? []
													: i || S.isPlainObject(n)
													? n
													: {}),
										  (i = !1),
										  (a[t] = S.extend(l, o, r)))
										: void 0 !== r && (a[t] = r))
				return a
			}),
		S.extend({
			expando: 'jQuery' + (f + Math.random()).replace(/\D/g, ''),
			isReady: !0,
			error: function (e) {
				throw new Error(e)
			},
			noop: function () {},
			isPlainObject: function (e) {
				var t, n
				return (
					!(!e || '[object Object]' !== o.call(e)) &&
					(!(t = r(e)) ||
						('function' ==
							typeof (n = v.call(t, 'constructor') && t.constructor) &&
							a.call(n) === l))
				)
			},
			isEmptyObject: function (e) {
				var t
				for (t in e) return !1
				return !0
			},
			globalEval: function (e, t, n) {
				b(e, { nonce: t && t.nonce }, n)
			},
			each: function (e, t) {
				var n,
					r = 0
				if (p(e)) {
					for (n = e.length; r < n; r++) if (!1 === t.call(e[r], r, e[r])) break
				} else for (r in e) if (!1 === t.call(e[r], r, e[r])) break
				return e
			},
			makeArray: function (e, t) {
				var n = t || []
				return (
					null != e &&
						(p(Object(e))
							? S.merge(n, 'string' == typeof e ? [e] : e)
							: u.call(n, e)),
					n
				)
			},
			inArray: function (e, t, n) {
				return null == t ? -1 : i.call(t, e, n)
			},
			merge: function (e, t) {
				for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r]
				return (e.length = i), e
			},
			grep: function (e, t, n) {
				for (var r = [], i = 0, o = e.length, a = !n; i < o; i++)
					!t(e[i], i) !== a && r.push(e[i])
				return r
			},
			map: function (e, t, n) {
				var r,
					i,
					o = 0,
					a = []
				if (p(e))
					for (r = e.length; o < r; o++)
						null != (i = t(e[o], o, n)) && a.push(i)
				else for (o in e) null != (i = t(e[o], o, n)) && a.push(i)
				return g(a)
			},
			guid: 1,
			support: y,
		}),
		'function' == typeof Symbol && (S.fn[Symbol.iterator] = t[Symbol.iterator]),
		S.each(
			'Boolean Number String Function Array Date RegExp Object Error Symbol'.split(
				' '
			),
			function (e, t) {
				n['[object ' + t + ']'] = t.toLowerCase()
			}
		)
	var d = (function (n) {
		var e,
			d,
			b,
			o,
			i,
			h,
			f,
			g,
			w,
			u,
			l,
			T,
			C,
			a,
			E,
			v,
			s,
			c,
			y,
			S = 'sizzle' + 1 * new Date(),
			p = n.document,
			k = 0,
			r = 0,
			m = ue(),
			x = ue(),
			A = ue(),
			N = ue(),
			D = function (e, t) {
				return e === t && (l = !0), 0
			},
			j = {}.hasOwnProperty,
			t = [],
			q = t.pop,
			L = t.push,
			H = t.push,
			O = t.slice,
			P = function (e, t) {
				for (var n = 0, r = e.length; n < r; n++) if (e[n] === t) return n
				return -1
			},
			R =
				'checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped',
			M = '[\\x20\\t\\r\\n\\f]',
			I =
				'(?:\\\\[\\da-fA-F]{1,6}' +
				M +
				'?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+',
			W =
				'\\[' +
				M +
				'*(' +
				I +
				')(?:' +
				M +
				'*([*^$|!~]?=)' +
				M +
				'*(?:\'((?:\\\\.|[^\\\\\'])*)\'|"((?:\\\\.|[^\\\\"])*)"|(' +
				I +
				'))|)' +
				M +
				'*\\]',
			F =
				':(' +
				I +
				')(?:\\(((\'((?:\\\\.|[^\\\\\'])*)\'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|' +
				W +
				')*)|.*)\\)|)',
			B = new RegExp(M + '+', 'g'),
			$ = new RegExp('^' + M + '+|((?:^|[^\\\\])(?:\\\\.)*)' + M + '+$', 'g'),
			_ = new RegExp('^' + M + '*,' + M + '*'),
			z = new RegExp('^' + M + '*([>+~]|' + M + ')' + M + '*'),
			U = new RegExp(M + '|>'),
			X = new RegExp(F),
			V = new RegExp('^' + I + '$'),
			G = {
				ID: new RegExp('^#(' + I + ')'),
				CLASS: new RegExp('^\\.(' + I + ')'),
				TAG: new RegExp('^(' + I + '|[*])'),
				ATTR: new RegExp('^' + W),
				PSEUDO: new RegExp('^' + F),
				CHILD: new RegExp(
					'^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(' +
						M +
						'*(even|odd|(([+-]|)(\\d*)n|)' +
						M +
						'*(?:([+-]|)' +
						M +
						'*(\\d+)|))' +
						M +
						'*\\)|)',
					'i'
				),
				bool: new RegExp('^(?:' + R + ')$', 'i'),
				needsContext: new RegExp(
					'^' +
						M +
						'*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(' +
						M +
						'*((?:-\\d)?\\d*)' +
						M +
						'*\\)|)(?=[^-]|$)',
					'i'
				),
			},
			Y = /HTML$/i,
			Q = /^(?:input|select|textarea|button)$/i,
			J = /^h\d$/i,
			K = /^[^{]+\{\s*\[native \w/,
			Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
			ee = /[+~]/,
			te = new RegExp('\\\\[\\da-fA-F]{1,6}' + M + '?|\\\\([^\\r\\n\\f])', 'g'),
			ne = function (e, t) {
				var n = '0x' + e.slice(1) - 65536
				return (
					t ||
					(n < 0
						? String.fromCharCode(n + 65536)
						: String.fromCharCode((n >> 10) | 55296, (1023 & n) | 56320))
				)
			},
			re = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
			ie = function (e, t) {
				return t
					? '\0' === e
						? '\ufffd'
						: e.slice(0, -1) +
						  '\\' +
						  e.charCodeAt(e.length - 1).toString(16) +
						  ' '
					: '\\' + e
			},
			oe = function () {
				T()
			},
			ae = be(
				function (e) {
					return !0 === e.disabled && 'fieldset' === e.nodeName.toLowerCase()
				},
				{ dir: 'parentNode', next: 'legend' }
			)
		try {
			H.apply((t = O.call(p.childNodes)), p.childNodes),
				t[p.childNodes.length].nodeType
		} catch (e) {
			H = {
				apply: t.length
					? function (e, t) {
							L.apply(e, O.call(t))
					  }
					: function (e, t) {
							var n = e.length,
								r = 0
							while ((e[n++] = t[r++]));
							e.length = n - 1
					  },
			}
		}
		function se(t, e, n, r) {
			var i,
				o,
				a,
				s,
				u,
				l,
				c,
				f = e && e.ownerDocument,
				p = e ? e.nodeType : 9
			if (
				((n = n || []),
				'string' != typeof t || !t || (1 !== p && 9 !== p && 11 !== p))
			)
				return n
			if (!r && (T(e), (e = e || C), E)) {
				if (11 !== p && (u = Z.exec(t)))
					if ((i = u[1])) {
						if (9 === p) {
							if (!(a = e.getElementById(i))) return n
							if (a.id === i) return n.push(a), n
						} else if (f && (a = f.getElementById(i)) && y(e, a) && a.id === i)
							return n.push(a), n
					} else {
						if (u[2]) return H.apply(n, e.getElementsByTagName(t)), n
						if (
							(i = u[3]) &&
							d.getElementsByClassName &&
							e.getElementsByClassName
						)
							return H.apply(n, e.getElementsByClassName(i)), n
					}
				if (
					d.qsa &&
					!N[t + ' '] &&
					(!v || !v.test(t)) &&
					(1 !== p || 'object' !== e.nodeName.toLowerCase())
				) {
					if (((c = t), (f = e), 1 === p && (U.test(t) || z.test(t)))) {
						;((f = (ee.test(t) && ye(e.parentNode)) || e) === e && d.scope) ||
							((s = e.getAttribute('id'))
								? (s = s.replace(re, ie))
								: e.setAttribute('id', (s = S))),
							(o = (l = h(t)).length)
						while (o--) l[o] = (s ? '#' + s : ':scope') + ' ' + xe(l[o])
						c = l.join(',')
					}
					try {
						return H.apply(n, f.querySelectorAll(c)), n
					} catch (e) {
						N(t, !0)
					} finally {
						s === S && e.removeAttribute('id')
					}
				}
			}
			return g(t.replace($, '$1'), e, n, r)
		}
		function ue() {
			var r = []
			return function e(t, n) {
				return (
					r.push(t + ' ') > b.cacheLength && delete e[r.shift()],
					(e[t + ' '] = n)
				)
			}
		}
		function le(e) {
			return (e[S] = !0), e
		}
		function ce(e) {
			var t = C.createElement('fieldset')
			try {
				return !!e(t)
			} catch (e) {
				return !1
			} finally {
				t.parentNode && t.parentNode.removeChild(t), (t = null)
			}
		}
		function fe(e, t) {
			var n = e.split('|'),
				r = n.length
			while (r--) b.attrHandle[n[r]] = t
		}
		function pe(e, t) {
			var n = t && e,
				r =
					n &&
					1 === e.nodeType &&
					1 === t.nodeType &&
					e.sourceIndex - t.sourceIndex
			if (r) return r
			if (n) while ((n = n.nextSibling)) if (n === t) return -1
			return e ? 1 : -1
		}
		function de(t) {
			return function (e) {
				return 'input' === e.nodeName.toLowerCase() && e.type === t
			}
		}
		function he(n) {
			return function (e) {
				var t = e.nodeName.toLowerCase()
				return ('input' === t || 'button' === t) && e.type === n
			}
		}
		function ge(t) {
			return function (e) {
				return 'form' in e
					? e.parentNode && !1 === e.disabled
						? 'label' in e
							? 'label' in e.parentNode
								? e.parentNode.disabled === t
								: e.disabled === t
							: e.isDisabled === t || (e.isDisabled !== !t && ae(e) === t)
						: e.disabled === t
					: 'label' in e && e.disabled === t
			}
		}
		function ve(a) {
			return le(function (o) {
				return (
					(o = +o),
					le(function (e, t) {
						var n,
							r = a([], e.length, o),
							i = r.length
						while (i--) e[(n = r[i])] && (e[n] = !(t[n] = e[n]))
					})
				)
			})
		}
		function ye(e) {
			return e && 'undefined' != typeof e.getElementsByTagName && e
		}
		for (e in ((d = se.support = {}),
		(i = se.isXML =
			function (e) {
				var t = e.namespaceURI,
					n = (e.ownerDocument || e).documentElement
				return !Y.test(t || (n && n.nodeName) || 'HTML')
			}),
		(T = se.setDocument =
			function (e) {
				var t,
					n,
					r = e ? e.ownerDocument || e : p
				return (
					r != C &&
						9 === r.nodeType &&
						r.documentElement &&
						((a = (C = r).documentElement),
						(E = !i(C)),
						p != C &&
							(n = C.defaultView) &&
							n.top !== n &&
							(n.addEventListener
								? n.addEventListener('unload', oe, !1)
								: n.attachEvent && n.attachEvent('onunload', oe)),
						(d.scope = ce(function (e) {
							return (
								a.appendChild(e).appendChild(C.createElement('div')),
								'undefined' != typeof e.querySelectorAll &&
									!e.querySelectorAll(':scope fieldset div').length
							)
						})),
						(d.attributes = ce(function (e) {
							return (e.className = 'i'), !e.getAttribute('className')
						})),
						(d.getElementsByTagName = ce(function (e) {
							return (
								e.appendChild(C.createComment('')),
								!e.getElementsByTagName('*').length
							)
						})),
						(d.getElementsByClassName = K.test(C.getElementsByClassName)),
						(d.getById = ce(function (e) {
							return (
								(a.appendChild(e).id = S),
								!C.getElementsByName || !C.getElementsByName(S).length
							)
						})),
						d.getById
							? ((b.filter.ID = function (e) {
									var t = e.replace(te, ne)
									return function (e) {
										return e.getAttribute('id') === t
									}
							  }),
							  (b.find.ID = function (e, t) {
									if ('undefined' != typeof t.getElementById && E) {
										var n = t.getElementById(e)
										return n ? [n] : []
									}
							  }))
							: ((b.filter.ID = function (e) {
									var n = e.replace(te, ne)
									return function (e) {
										var t =
											'undefined' != typeof e.getAttributeNode &&
											e.getAttributeNode('id')
										return t && t.value === n
									}
							  }),
							  (b.find.ID = function (e, t) {
									if ('undefined' != typeof t.getElementById && E) {
										var n,
											r,
											i,
											o = t.getElementById(e)
										if (o) {
											if ((n = o.getAttributeNode('id')) && n.value === e)
												return [o]
											;(i = t.getElementsByName(e)), (r = 0)
											while ((o = i[r++]))
												if ((n = o.getAttributeNode('id')) && n.value === e)
													return [o]
										}
										return []
									}
							  })),
						(b.find.TAG = d.getElementsByTagName
							? function (e, t) {
									return 'undefined' != typeof t.getElementsByTagName
										? t.getElementsByTagName(e)
										: d.qsa
										? t.querySelectorAll(e)
										: void 0
							  }
							: function (e, t) {
									var n,
										r = [],
										i = 0,
										o = t.getElementsByTagName(e)
									if ('*' === e) {
										while ((n = o[i++])) 1 === n.nodeType && r.push(n)
										return r
									}
									return o
							  }),
						(b.find.CLASS =
							d.getElementsByClassName &&
							function (e, t) {
								if ('undefined' != typeof t.getElementsByClassName && E)
									return t.getElementsByClassName(e)
							}),
						(s = []),
						(v = []),
						(d.qsa = K.test(C.querySelectorAll)) &&
							(ce(function (e) {
								var t
								;(a.appendChild(e).innerHTML =
									"<a id='" +
									S +
									"'></a><select id='" +
									S +
									"-\r\\' msallowcapture=''><option selected=''></option></select>"),
									e.querySelectorAll("[msallowcapture^='']").length &&
										v.push('[*^$]=' + M + '*(?:\'\'|"")'),
									e.querySelectorAll('[selected]').length ||
										v.push('\\[' + M + '*(?:value|' + R + ')'),
									e.querySelectorAll('[id~=' + S + '-]').length || v.push('~='),
									(t = C.createElement('input')).setAttribute('name', ''),
									e.appendChild(t),
									e.querySelectorAll("[name='']").length ||
										v.push('\\[' + M + '*name' + M + '*=' + M + '*(?:\'\'|"")'),
									e.querySelectorAll(':checked').length || v.push(':checked'),
									e.querySelectorAll('a#' + S + '+*').length ||
										v.push('.#.+[+~]'),
									e.querySelectorAll('\\\f'),
									v.push('[\\r\\n\\f]')
							}),
							ce(function (e) {
								e.innerHTML =
									"<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>"
								var t = C.createElement('input')
								t.setAttribute('type', 'hidden'),
									e.appendChild(t).setAttribute('name', 'D'),
									e.querySelectorAll('[name=d]').length &&
										v.push('name' + M + '*[*^$|!~]?='),
									2 !== e.querySelectorAll(':enabled').length &&
										v.push(':enabled', ':disabled'),
									(a.appendChild(e).disabled = !0),
									2 !== e.querySelectorAll(':disabled').length &&
										v.push(':enabled', ':disabled'),
									e.querySelectorAll('*,:x'),
									v.push(',.*:')
							})),
						(d.matchesSelector = K.test(
							(c =
								a.matches ||
								a.webkitMatchesSelector ||
								a.mozMatchesSelector ||
								a.oMatchesSelector ||
								a.msMatchesSelector)
						)) &&
							ce(function (e) {
								;(d.disconnectedMatch = c.call(e, '*')),
									c.call(e, "[s!='']:x"),
									s.push('!=', F)
							}),
						(v = v.length && new RegExp(v.join('|'))),
						(s = s.length && new RegExp(s.join('|'))),
						(t = K.test(a.compareDocumentPosition)),
						(y =
							t || K.test(a.contains)
								? function (e, t) {
										var n = 9 === e.nodeType ? e.documentElement : e,
											r = t && t.parentNode
										return (
											e === r ||
											!(
												!r ||
												1 !== r.nodeType ||
												!(n.contains
													? n.contains(r)
													: e.compareDocumentPosition &&
													  16 & e.compareDocumentPosition(r))
											)
										)
								  }
								: function (e, t) {
										if (t) while ((t = t.parentNode)) if (t === e) return !0
										return !1
								  }),
						(D = t
							? function (e, t) {
									if (e === t) return (l = !0), 0
									var n =
										!e.compareDocumentPosition - !t.compareDocumentPosition
									return (
										n ||
										(1 &
											(n =
												(e.ownerDocument || e) == (t.ownerDocument || t)
													? e.compareDocumentPosition(t)
													: 1) ||
										(!d.sortDetached && t.compareDocumentPosition(e) === n)
											? e == C || (e.ownerDocument == p && y(p, e))
												? -1
												: t == C || (t.ownerDocument == p && y(p, t))
												? 1
												: u
												? P(u, e) - P(u, t)
												: 0
											: 4 & n
											? -1
											: 1)
									)
							  }
							: function (e, t) {
									if (e === t) return (l = !0), 0
									var n,
										r = 0,
										i = e.parentNode,
										o = t.parentNode,
										a = [e],
										s = [t]
									if (!i || !o)
										return e == C
											? -1
											: t == C
											? 1
											: i
											? -1
											: o
											? 1
											: u
											? P(u, e) - P(u, t)
											: 0
									if (i === o) return pe(e, t)
									n = e
									while ((n = n.parentNode)) a.unshift(n)
									n = t
									while ((n = n.parentNode)) s.unshift(n)
									while (a[r] === s[r]) r++
									return r ? pe(a[r], s[r]) : a[r] == p ? -1 : s[r] == p ? 1 : 0
							  })),
					C
				)
			}),
		(se.matches = function (e, t) {
			return se(e, null, null, t)
		}),
		(se.matchesSelector = function (e, t) {
			if (
				(T(e),
				d.matchesSelector &&
					E &&
					!N[t + ' '] &&
					(!s || !s.test(t)) &&
					(!v || !v.test(t)))
			)
				try {
					var n = c.call(e, t)
					if (
						n ||
						d.disconnectedMatch ||
						(e.document && 11 !== e.document.nodeType)
					)
						return n
				} catch (e) {
					N(t, !0)
				}
			return 0 < se(t, C, null, [e]).length
		}),
		(se.contains = function (e, t) {
			return (e.ownerDocument || e) != C && T(e), y(e, t)
		}),
		(se.attr = function (e, t) {
			;(e.ownerDocument || e) != C && T(e)
			var n = b.attrHandle[t.toLowerCase()],
				r = n && j.call(b.attrHandle, t.toLowerCase()) ? n(e, t, !E) : void 0
			return void 0 !== r
				? r
				: d.attributes || !E
				? e.getAttribute(t)
				: (r = e.getAttributeNode(t)) && r.specified
				? r.value
				: null
		}),
		(se.escape = function (e) {
			return (e + '').replace(re, ie)
		}),
		(se.error = function (e) {
			throw new Error('Syntax error, unrecognized expression: ' + e)
		}),
		(se.uniqueSort = function (e) {
			var t,
				n = [],
				r = 0,
				i = 0
			if (
				((l = !d.detectDuplicates),
				(u = !d.sortStable && e.slice(0)),
				e.sort(D),
				l)
			) {
				while ((t = e[i++])) t === e[i] && (r = n.push(i))
				while (r--) e.splice(n[r], 1)
			}
			return (u = null), e
		}),
		(o = se.getText =
			function (e) {
				var t,
					n = '',
					r = 0,
					i = e.nodeType
				if (i) {
					if (1 === i || 9 === i || 11 === i) {
						if ('string' == typeof e.textContent) return e.textContent
						for (e = e.firstChild; e; e = e.nextSibling) n += o(e)
					} else if (3 === i || 4 === i) return e.nodeValue
				} else while ((t = e[r++])) n += o(t)
				return n
			}),
		((b = se.selectors =
			{
				cacheLength: 50,
				createPseudo: le,
				match: G,
				attrHandle: {},
				find: {},
				relative: {
					'>': { dir: 'parentNode', first: !0 },
					' ': { dir: 'parentNode' },
					'+': { dir: 'previousSibling', first: !0 },
					'~': { dir: 'previousSibling' },
				},
				preFilter: {
					ATTR: function (e) {
						return (
							(e[1] = e[1].replace(te, ne)),
							(e[3] = (e[3] || e[4] || e[5] || '').replace(te, ne)),
							'~=' === e[2] && (e[3] = ' ' + e[3] + ' '),
							e.slice(0, 4)
						)
					},
					CHILD: function (e) {
						return (
							(e[1] = e[1].toLowerCase()),
							'nth' === e[1].slice(0, 3)
								? (e[3] || se.error(e[0]),
								  (e[4] = +(e[4]
										? e[5] + (e[6] || 1)
										: 2 * ('even' === e[3] || 'odd' === e[3]))),
								  (e[5] = +(e[7] + e[8] || 'odd' === e[3])))
								: e[3] && se.error(e[0]),
							e
						)
					},
					PSEUDO: function (e) {
						var t,
							n = !e[6] && e[2]
						return G.CHILD.test(e[0])
							? null
							: (e[3]
									? (e[2] = e[4] || e[5] || '')
									: n &&
									  X.test(n) &&
									  (t = h(n, !0)) &&
									  (t = n.indexOf(')', n.length - t) - n.length) &&
									  ((e[0] = e[0].slice(0, t)), (e[2] = n.slice(0, t))),
							  e.slice(0, 3))
					},
				},
				filter: {
					TAG: function (e) {
						var t = e.replace(te, ne).toLowerCase()
						return '*' === e
							? function () {
									return !0
							  }
							: function (e) {
									return e.nodeName && e.nodeName.toLowerCase() === t
							  }
					},
					CLASS: function (e) {
						var t = m[e + ' ']
						return (
							t ||
							((t = new RegExp('(^|' + M + ')' + e + '(' + M + '|$)')) &&
								m(e, function (e) {
									return t.test(
										('string' == typeof e.className && e.className) ||
											('undefined' != typeof e.getAttribute &&
												e.getAttribute('class')) ||
											''
									)
								}))
						)
					},
					ATTR: function (n, r, i) {
						return function (e) {
							var t = se.attr(e, n)
							return null == t
								? '!=' === r
								: !r ||
										((t += ''),
										'=' === r
											? t === i
											: '!=' === r
											? t !== i
											: '^=' === r
											? i && 0 === t.indexOf(i)
											: '*=' === r
											? i && -1 < t.indexOf(i)
											: '$=' === r
											? i && t.slice(-i.length) === i
											: '~=' === r
											? -1 < (' ' + t.replace(B, ' ') + ' ').indexOf(i)
											: '|=' === r &&
											  (t === i || t.slice(0, i.length + 1) === i + '-'))
						}
					},
					CHILD: function (h, e, t, g, v) {
						var y = 'nth' !== h.slice(0, 3),
							m = 'last' !== h.slice(-4),
							x = 'of-type' === e
						return 1 === g && 0 === v
							? function (e) {
									return !!e.parentNode
							  }
							: function (e, t, n) {
									var r,
										i,
										o,
										a,
										s,
										u,
										l = y !== m ? 'nextSibling' : 'previousSibling',
										c = e.parentNode,
										f = x && e.nodeName.toLowerCase(),
										p = !n && !x,
										d = !1
									if (c) {
										if (y) {
											while (l) {
												a = e
												while ((a = a[l]))
													if (
														x
															? a.nodeName.toLowerCase() === f
															: 1 === a.nodeType
													)
														return !1
												u = l = 'only' === h && !u && 'nextSibling'
											}
											return !0
										}
										if (((u = [m ? c.firstChild : c.lastChild]), m && p)) {
											;(d =
												(s =
													(r =
														(i =
															(o = (a = c)[S] || (a[S] = {}))[a.uniqueID] ||
															(o[a.uniqueID] = {}))[h] || [])[0] === k &&
													r[1]) && r[2]),
												(a = s && c.childNodes[s])
											while ((a = (++s && a && a[l]) || (d = s = 0) || u.pop()))
												if (1 === a.nodeType && ++d && a === e) {
													i[h] = [k, s, d]
													break
												}
										} else if (
											(p &&
												(d = s =
													(r =
														(i =
															(o = (a = e)[S] || (a[S] = {}))[a.uniqueID] ||
															(o[a.uniqueID] = {}))[h] || [])[0] === k && r[1]),
											!1 === d)
										)
											while ((a = (++s && a && a[l]) || (d = s = 0) || u.pop()))
												if (
													(x
														? a.nodeName.toLowerCase() === f
														: 1 === a.nodeType) &&
													++d &&
													(p &&
														((i =
															(o = a[S] || (a[S] = {}))[a.uniqueID] ||
															(o[a.uniqueID] = {}))[h] = [k, d]),
													a === e)
												)
													break
										return (d -= v) === g || (d % g == 0 && 0 <= d / g)
									}
							  }
					},
					PSEUDO: function (e, o) {
						var t,
							a =
								b.pseudos[e] ||
								b.setFilters[e.toLowerCase()] ||
								se.error('unsupported pseudo: ' + e)
						return a[S]
							? a(o)
							: 1 < a.length
							? ((t = [e, e, '', o]),
							  b.setFilters.hasOwnProperty(e.toLowerCase())
									? le(function (e, t) {
											var n,
												r = a(e, o),
												i = r.length
											while (i--) e[(n = P(e, r[i]))] = !(t[n] = r[i])
									  })
									: function (e) {
											return a(e, 0, t)
									  })
							: a
					},
				},
				pseudos: {
					not: le(function (e) {
						var r = [],
							i = [],
							s = f(e.replace($, '$1'))
						return s[S]
							? le(function (e, t, n, r) {
									var i,
										o = s(e, null, r, []),
										a = e.length
									while (a--) (i = o[a]) && (e[a] = !(t[a] = i))
							  })
							: function (e, t, n) {
									return (r[0] = e), s(r, null, n, i), (r[0] = null), !i.pop()
							  }
					}),
					has: le(function (t) {
						return function (e) {
							return 0 < se(t, e).length
						}
					}),
					contains: le(function (t) {
						return (
							(t = t.replace(te, ne)),
							function (e) {
								return -1 < (e.textContent || o(e)).indexOf(t)
							}
						)
					}),
					lang: le(function (n) {
						return (
							V.test(n || '') || se.error('unsupported lang: ' + n),
							(n = n.replace(te, ne).toLowerCase()),
							function (e) {
								var t
								do {
									if (
										(t = E
											? e.lang
											: e.getAttribute('xml:lang') || e.getAttribute('lang'))
									)
										return (
											(t = t.toLowerCase()) === n || 0 === t.indexOf(n + '-')
										)
								} while ((e = e.parentNode) && 1 === e.nodeType)
								return !1
							}
						)
					}),
					target: function (e) {
						var t = n.location && n.location.hash
						return t && t.slice(1) === e.id
					},
					root: function (e) {
						return e === a
					},
					focus: function (e) {
						return (
							e === C.activeElement &&
							(!C.hasFocus || C.hasFocus()) &&
							!!(e.type || e.href || ~e.tabIndex)
						)
					},
					enabled: ge(!1),
					disabled: ge(!0),
					checked: function (e) {
						var t = e.nodeName.toLowerCase()
						return (
							('input' === t && !!e.checked) || ('option' === t && !!e.selected)
						)
					},
					selected: function (e) {
						return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
					},
					empty: function (e) {
						for (e = e.firstChild; e; e = e.nextSibling)
							if (e.nodeType < 6) return !1
						return !0
					},
					parent: function (e) {
						return !b.pseudos.empty(e)
					},
					header: function (e) {
						return J.test(e.nodeName)
					},
					input: function (e) {
						return Q.test(e.nodeName)
					},
					button: function (e) {
						var t = e.nodeName.toLowerCase()
						return ('input' === t && 'button' === e.type) || 'button' === t
					},
					text: function (e) {
						var t
						return (
							'input' === e.nodeName.toLowerCase() &&
							'text' === e.type &&
							(null == (t = e.getAttribute('type')) ||
								'text' === t.toLowerCase())
						)
					},
					first: ve(function () {
						return [0]
					}),
					last: ve(function (e, t) {
						return [t - 1]
					}),
					eq: ve(function (e, t, n) {
						return [n < 0 ? n + t : n]
					}),
					even: ve(function (e, t) {
						for (var n = 0; n < t; n += 2) e.push(n)
						return e
					}),
					odd: ve(function (e, t) {
						for (var n = 1; n < t; n += 2) e.push(n)
						return e
					}),
					lt: ve(function (e, t, n) {
						for (var r = n < 0 ? n + t : t < n ? t : n; 0 <= --r; ) e.push(r)
						return e
					}),
					gt: ve(function (e, t, n) {
						for (var r = n < 0 ? n + t : n; ++r < t; ) e.push(r)
						return e
					}),
				},
			}).pseudos.nth = b.pseudos.eq),
		{ radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
			b.pseudos[e] = de(e)
		for (e in { submit: !0, reset: !0 }) b.pseudos[e] = he(e)
		function me() {}
		function xe(e) {
			for (var t = 0, n = e.length, r = ''; t < n; t++) r += e[t].value
			return r
		}
		function be(s, e, t) {
			var u = e.dir,
				l = e.next,
				c = l || u,
				f = t && 'parentNode' === c,
				p = r++
			return e.first
				? function (e, t, n) {
						while ((e = e[u])) if (1 === e.nodeType || f) return s(e, t, n)
						return !1
				  }
				: function (e, t, n) {
						var r,
							i,
							o,
							a = [k, p]
						if (n) {
							while ((e = e[u]))
								if ((1 === e.nodeType || f) && s(e, t, n)) return !0
						} else
							while ((e = e[u]))
								if (1 === e.nodeType || f)
									if (
										((i =
											(o = e[S] || (e[S] = {}))[e.uniqueID] ||
											(o[e.uniqueID] = {})),
										l && l === e.nodeName.toLowerCase())
									)
										e = e[u] || e
									else {
										if ((r = i[c]) && r[0] === k && r[1] === p)
											return (a[2] = r[2])
										if (((i[c] = a)[2] = s(e, t, n))) return !0
									}
						return !1
				  }
		}
		function we(i) {
			return 1 < i.length
				? function (e, t, n) {
						var r = i.length
						while (r--) if (!i[r](e, t, n)) return !1
						return !0
				  }
				: i[0]
		}
		function Te(e, t, n, r, i) {
			for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++)
				(o = e[s]) && ((n && !n(o, r, i)) || (a.push(o), l && t.push(s)))
			return a
		}
		function Ce(d, h, g, v, y, e) {
			return (
				v && !v[S] && (v = Ce(v)),
				y && !y[S] && (y = Ce(y, e)),
				le(function (e, t, n, r) {
					var i,
						o,
						a,
						s = [],
						u = [],
						l = t.length,
						c =
							e ||
							(function (e, t, n) {
								for (var r = 0, i = t.length; r < i; r++) se(e, t[r], n)
								return n
							})(h || '*', n.nodeType ? [n] : n, []),
						f = !d || (!e && h) ? c : Te(c, s, d, n, r),
						p = g ? (y || (e ? d : l || v) ? [] : t) : f
					if ((g && g(f, p, n, r), v)) {
						;(i = Te(p, u)), v(i, [], n, r), (o = i.length)
						while (o--) (a = i[o]) && (p[u[o]] = !(f[u[o]] = a))
					}
					if (e) {
						if (y || d) {
							if (y) {
								;(i = []), (o = p.length)
								while (o--) (a = p[o]) && i.push((f[o] = a))
								y(null, (p = []), i, r)
							}
							o = p.length
							while (o--)
								(a = p[o]) &&
									-1 < (i = y ? P(e, a) : s[o]) &&
									(e[i] = !(t[i] = a))
						}
					} else (p = Te(p === t ? p.splice(l, p.length) : p)), y ? y(null, t, p, r) : H.apply(t, p)
				})
			)
		}
		function Ee(e) {
			for (
				var i,
					t,
					n,
					r = e.length,
					o = b.relative[e[0].type],
					a = o || b.relative[' '],
					s = o ? 1 : 0,
					u = be(
						function (e) {
							return e === i
						},
						a,
						!0
					),
					l = be(
						function (e) {
							return -1 < P(i, e)
						},
						a,
						!0
					),
					c = [
						function (e, t, n) {
							var r =
								(!o && (n || t !== w)) ||
								((i = t).nodeType ? u(e, t, n) : l(e, t, n))
							return (i = null), r
						},
					];
				s < r;
				s++
			)
				if ((t = b.relative[e[s].type])) c = [be(we(c), t)]
				else {
					if ((t = b.filter[e[s].type].apply(null, e[s].matches))[S]) {
						for (n = ++s; n < r; n++) if (b.relative[e[n].type]) break
						return Ce(
							1 < s && we(c),
							1 < s &&
								xe(
									e
										.slice(0, s - 1)
										.concat({ value: ' ' === e[s - 2].type ? '*' : '' })
								).replace($, '$1'),
							t,
							s < n && Ee(e.slice(s, n)),
							n < r && Ee((e = e.slice(n))),
							n < r && xe(e)
						)
					}
					c.push(t)
				}
			return we(c)
		}
		return (
			(me.prototype = b.filters = b.pseudos),
			(b.setFilters = new me()),
			(h = se.tokenize =
				function (e, t) {
					var n,
						r,
						i,
						o,
						a,
						s,
						u,
						l = x[e + ' ']
					if (l) return t ? 0 : l.slice(0)
					;(a = e), (s = []), (u = b.preFilter)
					while (a) {
						for (o in ((n && !(r = _.exec(a))) ||
							(r && (a = a.slice(r[0].length) || a), s.push((i = []))),
						(n = !1),
						(r = z.exec(a)) &&
							((n = r.shift()),
							i.push({ value: n, type: r[0].replace($, ' ') }),
							(a = a.slice(n.length))),
						b.filter))
							!(r = G[o].exec(a)) ||
								(u[o] && !(r = u[o](r))) ||
								((n = r.shift()),
								i.push({ value: n, type: o, matches: r }),
								(a = a.slice(n.length)))
						if (!n) break
					}
					return t ? a.length : a ? se.error(e) : x(e, s).slice(0)
				}),
			(f = se.compile =
				function (e, t) {
					var n,
						v,
						y,
						m,
						x,
						r,
						i = [],
						o = [],
						a = A[e + ' ']
					if (!a) {
						t || (t = h(e)), (n = t.length)
						while (n--) (a = Ee(t[n]))[S] ? i.push(a) : o.push(a)
						;(a = A(
							e,
							((v = o),
							(m = 0 < (y = i).length),
							(x = 0 < v.length),
							(r = function (e, t, n, r, i) {
								var o,
									a,
									s,
									u = 0,
									l = '0',
									c = e && [],
									f = [],
									p = w,
									d = e || (x && b.find.TAG('*', i)),
									h = (k += null == p ? 1 : Math.random() || 0.1),
									g = d.length
								for (
									i && (w = t == C || t || i);
									l !== g && null != (o = d[l]);
									l++
								) {
									if (x && o) {
										;(a = 0), t || o.ownerDocument == C || (T(o), (n = !E))
										while ((s = v[a++]))
											if (s(o, t || C, n)) {
												r.push(o)
												break
											}
										i && (k = h)
									}
									m && ((o = !s && o) && u--, e && c.push(o))
								}
								if (((u += l), m && l !== u)) {
									a = 0
									while ((s = y[a++])) s(c, f, t, n)
									if (e) {
										if (0 < u) while (l--) c[l] || f[l] || (f[l] = q.call(r))
										f = Te(f)
									}
									H.apply(r, f),
										i &&
											!e &&
											0 < f.length &&
											1 < u + y.length &&
											se.uniqueSort(r)
								}
								return i && ((k = h), (w = p)), c
							}),
							m ? le(r) : r)
						)).selector = e
					}
					return a
				}),
			(g = se.select =
				function (e, t, n, r) {
					var i,
						o,
						a,
						s,
						u,
						l = 'function' == typeof e && e,
						c = !r && h((e = l.selector || e))
					if (((n = n || []), 1 === c.length)) {
						if (
							2 < (o = c[0] = c[0].slice(0)).length &&
							'ID' === (a = o[0]).type &&
							9 === t.nodeType &&
							E &&
							b.relative[o[1].type]
						) {
							if (!(t = (b.find.ID(a.matches[0].replace(te, ne), t) || [])[0]))
								return n
							l && (t = t.parentNode), (e = e.slice(o.shift().value.length))
						}
						i = G.needsContext.test(e) ? 0 : o.length
						while (i--) {
							if (((a = o[i]), b.relative[(s = a.type)])) break
							if (
								(u = b.find[s]) &&
								(r = u(
									a.matches[0].replace(te, ne),
									(ee.test(o[0].type) && ye(t.parentNode)) || t
								))
							) {
								if ((o.splice(i, 1), !(e = r.length && xe(o))))
									return H.apply(n, r), n
								break
							}
						}
					}
					return (
						(l || f(e, c))(
							r,
							t,
							!E,
							n,
							!t || (ee.test(e) && ye(t.parentNode)) || t
						),
						n
					)
				}),
			(d.sortStable = S.split('').sort(D).join('') === S),
			(d.detectDuplicates = !!l),
			T(),
			(d.sortDetached = ce(function (e) {
				return 1 & e.compareDocumentPosition(C.createElement('fieldset'))
			})),
			ce(function (e) {
				return (
					(e.innerHTML = "<a href='#'></a>"),
					'#' === e.firstChild.getAttribute('href')
				)
			}) ||
				fe('type|href|height|width', function (e, t, n) {
					if (!n) return e.getAttribute(t, 'type' === t.toLowerCase() ? 1 : 2)
				}),
			(d.attributes &&
				ce(function (e) {
					return (
						(e.innerHTML = '<input/>'),
						e.firstChild.setAttribute('value', ''),
						'' === e.firstChild.getAttribute('value')
					)
				})) ||
				fe('value', function (e, t, n) {
					if (!n && 'input' === e.nodeName.toLowerCase()) return e.defaultValue
				}),
			ce(function (e) {
				return null == e.getAttribute('disabled')
			}) ||
				fe(R, function (e, t, n) {
					var r
					if (!n)
						return !0 === e[t]
							? t.toLowerCase()
							: (r = e.getAttributeNode(t)) && r.specified
							? r.value
							: null
				}),
			se
		)
	})(C)
	;(S.find = d),
		(S.expr = d.selectors),
		(S.expr[':'] = S.expr.pseudos),
		(S.uniqueSort = S.unique = d.uniqueSort),
		(S.text = d.getText),
		(S.isXMLDoc = d.isXML),
		(S.contains = d.contains),
		(S.escapeSelector = d.escape)
	var h = function (e, t, n) {
			var r = [],
				i = void 0 !== n
			while ((e = e[t]) && 9 !== e.nodeType)
				if (1 === e.nodeType) {
					if (i && S(e).is(n)) break
					r.push(e)
				}
			return r
		},
		T = function (e, t) {
			for (var n = []; e; e = e.nextSibling)
				1 === e.nodeType && e !== t && n.push(e)
			return n
		},
		k = S.expr.match.needsContext
	function A(e, t) {
		return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
	}
	var N = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i
	function D(e, n, r) {
		return m(n)
			? S.grep(e, function (e, t) {
					return !!n.call(e, t, e) !== r
			  })
			: n.nodeType
			? S.grep(e, function (e) {
					return (e === n) !== r
			  })
			: 'string' != typeof n
			? S.grep(e, function (e) {
					return -1 < i.call(n, e) !== r
			  })
			: S.filter(n, e, r)
	}
	;(S.filter = function (e, t, n) {
		var r = t[0]
		return (
			n && (e = ':not(' + e + ')'),
			1 === t.length && 1 === r.nodeType
				? S.find.matchesSelector(r, e)
					? [r]
					: []
				: S.find.matches(
						e,
						S.grep(t, function (e) {
							return 1 === e.nodeType
						})
				  )
		)
	}),
		S.fn.extend({
			find: function (e) {
				var t,
					n,
					r = this.length,
					i = this
				if ('string' != typeof e)
					return this.pushStack(
						S(e).filter(function () {
							for (t = 0; t < r; t++) if (S.contains(i[t], this)) return !0
						})
					)
				for (n = this.pushStack([]), t = 0; t < r; t++) S.find(e, i[t], n)
				return 1 < r ? S.uniqueSort(n) : n
			},
			filter: function (e) {
				return this.pushStack(D(this, e || [], !1))
			},
			not: function (e) {
				return this.pushStack(D(this, e || [], !0))
			},
			is: function (e) {
				return !!D(this, 'string' == typeof e && k.test(e) ? S(e) : e || [], !1)
					.length
			},
		})
	var j,
		q = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/
	;((S.fn.init = function (e, t, n) {
		var r, i
		if (!e) return this
		if (((n = n || j), 'string' == typeof e)) {
			if (
				!(r =
					'<' === e[0] && '>' === e[e.length - 1] && 3 <= e.length
						? [null, e, null]
						: q.exec(e)) ||
				(!r[1] && t)
			)
				return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e)
			if (r[1]) {
				if (
					((t = t instanceof S ? t[0] : t),
					S.merge(
						this,
						S.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : E, !0)
					),
					N.test(r[1]) && S.isPlainObject(t))
				)
					for (r in t) m(this[r]) ? this[r](t[r]) : this.attr(r, t[r])
				return this
			}
			return (
				(i = E.getElementById(r[2])) && ((this[0] = i), (this.length = 1)), this
			)
		}
		return e.nodeType
			? ((this[0] = e), (this.length = 1), this)
			: m(e)
			? void 0 !== n.ready
				? n.ready(e)
				: e(S)
			: S.makeArray(e, this)
	}).prototype = S.fn),
		(j = S(E))
	var L = /^(?:parents|prev(?:Until|All))/,
		H = { children: !0, contents: !0, next: !0, prev: !0 }
	function O(e, t) {
		while ((e = e[t]) && 1 !== e.nodeType);
		return e
	}
	S.fn.extend({
		has: function (e) {
			var t = S(e, this),
				n = t.length
			return this.filter(function () {
				for (var e = 0; e < n; e++) if (S.contains(this, t[e])) return !0
			})
		},
		closest: function (e, t) {
			var n,
				r = 0,
				i = this.length,
				o = [],
				a = 'string' != typeof e && S(e)
			if (!k.test(e))
				for (; r < i; r++)
					for (n = this[r]; n && n !== t; n = n.parentNode)
						if (
							n.nodeType < 11 &&
							(a
								? -1 < a.index(n)
								: 1 === n.nodeType && S.find.matchesSelector(n, e))
						) {
							o.push(n)
							break
						}
			return this.pushStack(1 < o.length ? S.uniqueSort(o) : o)
		},
		index: function (e) {
			return e
				? 'string' == typeof e
					? i.call(S(e), this[0])
					: i.call(this, e.jquery ? e[0] : e)
				: this[0] && this[0].parentNode
				? this.first().prevAll().length
				: -1
		},
		add: function (e, t) {
			return this.pushStack(S.uniqueSort(S.merge(this.get(), S(e, t))))
		},
		addBack: function (e) {
			return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
		},
	}),
		S.each(
			{
				parent: function (e) {
					var t = e.parentNode
					return t && 11 !== t.nodeType ? t : null
				},
				parents: function (e) {
					return h(e, 'parentNode')
				},
				parentsUntil: function (e, t, n) {
					return h(e, 'parentNode', n)
				},
				next: function (e) {
					return O(e, 'nextSibling')
				},
				prev: function (e) {
					return O(e, 'previousSibling')
				},
				nextAll: function (e) {
					return h(e, 'nextSibling')
				},
				prevAll: function (e) {
					return h(e, 'previousSibling')
				},
				nextUntil: function (e, t, n) {
					return h(e, 'nextSibling', n)
				},
				prevUntil: function (e, t, n) {
					return h(e, 'previousSibling', n)
				},
				siblings: function (e) {
					return T((e.parentNode || {}).firstChild, e)
				},
				children: function (e) {
					return T(e.firstChild)
				},
				contents: function (e) {
					return null != e.contentDocument && r(e.contentDocument)
						? e.contentDocument
						: (A(e, 'template') && (e = e.content || e),
						  S.merge([], e.childNodes))
				},
			},
			function (r, i) {
				S.fn[r] = function (e, t) {
					var n = S.map(this, i, e)
					return (
						'Until' !== r.slice(-5) && (t = e),
						t && 'string' == typeof t && (n = S.filter(t, n)),
						1 < this.length &&
							(H[r] || S.uniqueSort(n), L.test(r) && n.reverse()),
						this.pushStack(n)
					)
				}
			}
		)
	var P = /[^\x20\t\r\n\f]+/g
	function R(e) {
		return e
	}
	function M(e) {
		throw e
	}
	function I(e, t, n, r) {
		var i
		try {
			e && m((i = e.promise))
				? i.call(e).done(t).fail(n)
				: e && m((i = e.then))
				? i.call(e, t, n)
				: t.apply(void 0, [e].slice(r))
		} catch (e) {
			n.apply(void 0, [e])
		}
	}
	;(S.Callbacks = function (r) {
		var e, n
		r =
			'string' == typeof r
				? ((e = r),
				  (n = {}),
				  S.each(e.match(P) || [], function (e, t) {
						n[t] = !0
				  }),
				  n)
				: S.extend({}, r)
		var i,
			t,
			o,
			a,
			s = [],
			u = [],
			l = -1,
			c = function () {
				for (a = a || r.once, o = i = !0; u.length; l = -1) {
					t = u.shift()
					while (++l < s.length)
						!1 === s[l].apply(t[0], t[1]) &&
							r.stopOnFalse &&
							((l = s.length), (t = !1))
				}
				r.memory || (t = !1), (i = !1), a && (s = t ? [] : '')
			},
			f = {
				add: function () {
					return (
						s &&
							(t && !i && ((l = s.length - 1), u.push(t)),
							(function n(e) {
								S.each(e, function (e, t) {
									m(t)
										? (r.unique && f.has(t)) || s.push(t)
										: t && t.length && 'string' !== w(t) && n(t)
								})
							})(arguments),
							t && !i && c()),
						this
					)
				},
				remove: function () {
					return (
						S.each(arguments, function (e, t) {
							var n
							while (-1 < (n = S.inArray(t, s, n)))
								s.splice(n, 1), n <= l && l--
						}),
						this
					)
				},
				has: function (e) {
					return e ? -1 < S.inArray(e, s) : 0 < s.length
				},
				empty: function () {
					return s && (s = []), this
				},
				disable: function () {
					return (a = u = []), (s = t = ''), this
				},
				disabled: function () {
					return !s
				},
				lock: function () {
					return (a = u = []), t || i || (s = t = ''), this
				},
				locked: function () {
					return !!a
				},
				fireWith: function (e, t) {
					return (
						a ||
							((t = [e, (t = t || []).slice ? t.slice() : t]),
							u.push(t),
							i || c()),
						this
					)
				},
				fire: function () {
					return f.fireWith(this, arguments), this
				},
				fired: function () {
					return !!o
				},
			}
		return f
	}),
		S.extend({
			Deferred: function (e) {
				var o = [
						[
							'notify',
							'progress',
							S.Callbacks('memory'),
							S.Callbacks('memory'),
							2,
						],
						[
							'resolve',
							'done',
							S.Callbacks('once memory'),
							S.Callbacks('once memory'),
							0,
							'resolved',
						],
						[
							'reject',
							'fail',
							S.Callbacks('once memory'),
							S.Callbacks('once memory'),
							1,
							'rejected',
						],
					],
					i = 'pending',
					a = {
						state: function () {
							return i
						},
						always: function () {
							return s.done(arguments).fail(arguments), this
						},
						catch: function (e) {
							return a.then(null, e)
						},
						pipe: function () {
							var i = arguments
							return S.Deferred(function (r) {
								S.each(o, function (e, t) {
									var n = m(i[t[4]]) && i[t[4]]
									s[t[1]](function () {
										var e = n && n.apply(this, arguments)
										e && m(e.promise)
											? e
													.promise()
													.progress(r.notify)
													.done(r.resolve)
													.fail(r.reject)
											: r[t[0] + 'With'](this, n ? [e] : arguments)
									})
								}),
									(i = null)
							}).promise()
						},
						then: function (t, n, r) {
							var u = 0
							function l(i, o, a, s) {
								return function () {
									var n = this,
										r = arguments,
										e = function () {
											var e, t
											if (!(i < u)) {
												if ((e = a.apply(n, r)) === o.promise())
													throw new TypeError('Thenable self-resolution')
												;(t =
													e &&
													('object' == typeof e || 'function' == typeof e) &&
													e.then),
													m(t)
														? s
															? t.call(e, l(u, o, R, s), l(u, o, M, s))
															: (u++,
															  t.call(
																	e,
																	l(u, o, R, s),
																	l(u, o, M, s),
																	l(u, o, R, o.notifyWith)
															  ))
														: (a !== R && ((n = void 0), (r = [e])),
														  (s || o.resolveWith)(n, r))
											}
										},
										t = s
											? e
											: function () {
													try {
														e()
													} catch (e) {
														S.Deferred.exceptionHook &&
															S.Deferred.exceptionHook(e, t.stackTrace),
															u <= i + 1 &&
																(a !== M && ((n = void 0), (r = [e])),
																o.rejectWith(n, r))
													}
											  }
									i
										? t()
										: (S.Deferred.getStackHook &&
												(t.stackTrace = S.Deferred.getStackHook()),
										  C.setTimeout(t))
								}
							}
							return S.Deferred(function (e) {
								o[0][3].add(l(0, e, m(r) ? r : R, e.notifyWith)),
									o[1][3].add(l(0, e, m(t) ? t : R)),
									o[2][3].add(l(0, e, m(n) ? n : M))
							}).promise()
						},
						promise: function (e) {
							return null != e ? S.extend(e, a) : a
						},
					},
					s = {}
				return (
					S.each(o, function (e, t) {
						var n = t[2],
							r = t[5]
						;(a[t[1]] = n.add),
							r &&
								n.add(
									function () {
										i = r
									},
									o[3 - e][2].disable,
									o[3 - e][3].disable,
									o[0][2].lock,
									o[0][3].lock
								),
							n.add(t[3].fire),
							(s[t[0]] = function () {
								return (
									s[t[0] + 'With'](this === s ? void 0 : this, arguments), this
								)
							}),
							(s[t[0] + 'With'] = n.fireWith)
					}),
					a.promise(s),
					e && e.call(s, s),
					s
				)
			},
			when: function (e) {
				var n = arguments.length,
					t = n,
					r = Array(t),
					i = s.call(arguments),
					o = S.Deferred(),
					a = function (t) {
						return function (e) {
							;(r[t] = this),
								(i[t] = 1 < arguments.length ? s.call(arguments) : e),
								--n || o.resolveWith(r, i)
						}
					}
				if (
					n <= 1 &&
					(I(e, o.done(a(t)).resolve, o.reject, !n),
					'pending' === o.state() || m(i[t] && i[t].then))
				)
					return o.then()
				while (t--) I(i[t], a(t), o.reject)
				return o.promise()
			},
		})
	var W = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/
	;(S.Deferred.exceptionHook = function (e, t) {
		C.console &&
			C.console.warn &&
			e &&
			W.test(e.name) &&
			C.console.warn('jQuery.Deferred exception: ' + e.message, e.stack, t)
	}),
		(S.readyException = function (e) {
			C.setTimeout(function () {
				throw e
			})
		})
	var F = S.Deferred()
	function B() {
		E.removeEventListener('DOMContentLoaded', B),
			C.removeEventListener('load', B),
			S.ready()
	}
	;(S.fn.ready = function (e) {
		return (
			F.then(e)['catch'](function (e) {
				S.readyException(e)
			}),
			this
		)
	}),
		S.extend({
			isReady: !1,
			readyWait: 1,
			ready: function (e) {
				;(!0 === e ? --S.readyWait : S.isReady) ||
					((S.isReady = !0) !== e && 0 < --S.readyWait) ||
					F.resolveWith(E, [S])
			},
		}),
		(S.ready.then = F.then),
		'complete' === E.readyState ||
		('loading' !== E.readyState && !E.documentElement.doScroll)
			? C.setTimeout(S.ready)
			: (E.addEventListener('DOMContentLoaded', B),
			  C.addEventListener('load', B))
	var $ = function (e, t, n, r, i, o, a) {
			var s = 0,
				u = e.length,
				l = null == n
			if ('object' === w(n)) for (s in ((i = !0), n)) $(e, t, s, n[s], !0, o, a)
			else if (
				void 0 !== r &&
				((i = !0),
				m(r) || (a = !0),
				l &&
					(a
						? (t.call(e, r), (t = null))
						: ((l = t),
						  (t = function (e, t, n) {
								return l.call(S(e), n)
						  }))),
				t)
			)
				for (; s < u; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)))
			return i ? e : l ? t.call(e) : u ? t(e[0], n) : o
		},
		_ = /^-ms-/,
		z = /-([a-z])/g
	function U(e, t) {
		return t.toUpperCase()
	}
	function X(e) {
		return e.replace(_, 'ms-').replace(z, U)
	}
	var V = function (e) {
		return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
	}
	function G() {
		this.expando = S.expando + G.uid++
	}
	;(G.uid = 1),
		(G.prototype = {
			cache: function (e) {
				var t = e[this.expando]
				return (
					t ||
						((t = {}),
						V(e) &&
							(e.nodeType
								? (e[this.expando] = t)
								: Object.defineProperty(e, this.expando, {
										value: t,
										configurable: !0,
								  }))),
					t
				)
			},
			set: function (e, t, n) {
				var r,
					i = this.cache(e)
				if ('string' == typeof t) i[X(t)] = n
				else for (r in t) i[X(r)] = t[r]
				return i
			},
			get: function (e, t) {
				return void 0 === t
					? this.cache(e)
					: e[this.expando] && e[this.expando][X(t)]
			},
			access: function (e, t, n) {
				return void 0 === t || (t && 'string' == typeof t && void 0 === n)
					? this.get(e, t)
					: (this.set(e, t, n), void 0 !== n ? n : t)
			},
			remove: function (e, t) {
				var n,
					r = e[this.expando]
				if (void 0 !== r) {
					if (void 0 !== t) {
						n = (t = Array.isArray(t)
							? t.map(X)
							: (t = X(t)) in r
							? [t]
							: t.match(P) || []).length
						while (n--) delete r[t[n]]
					}
					;(void 0 === t || S.isEmptyObject(r)) &&
						(e.nodeType ? (e[this.expando] = void 0) : delete e[this.expando])
				}
			},
			hasData: function (e) {
				var t = e[this.expando]
				return void 0 !== t && !S.isEmptyObject(t)
			},
		})
	var Y = new G(),
		Q = new G(),
		J = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
		K = /[A-Z]/g
	function Z(e, t, n) {
		var r, i
		if (void 0 === n && 1 === e.nodeType)
			if (
				((r = 'data-' + t.replace(K, '-$&').toLowerCase()),
				'string' == typeof (n = e.getAttribute(r)))
			) {
				try {
					n =
						'true' === (i = n) ||
						('false' !== i &&
							('null' === i
								? null
								: i === +i + ''
								? +i
								: J.test(i)
								? JSON.parse(i)
								: i))
				} catch (e) {}
				Q.set(e, t, n)
			} else n = void 0
		return n
	}
	S.extend({
		hasData: function (e) {
			return Q.hasData(e) || Y.hasData(e)
		},
		data: function (e, t, n) {
			return Q.access(e, t, n)
		},
		removeData: function (e, t) {
			Q.remove(e, t)
		},
		_data: function (e, t, n) {
			return Y.access(e, t, n)
		},
		_removeData: function (e, t) {
			Y.remove(e, t)
		},
	}),
		S.fn.extend({
			data: function (n, e) {
				var t,
					r,
					i,
					o = this[0],
					a = o && o.attributes
				if (void 0 === n) {
					if (
						this.length &&
						((i = Q.get(o)), 1 === o.nodeType && !Y.get(o, 'hasDataAttrs'))
					) {
						t = a.length
						while (t--)
							a[t] &&
								0 === (r = a[t].name).indexOf('data-') &&
								((r = X(r.slice(5))), Z(o, r, i[r]))
						Y.set(o, 'hasDataAttrs', !0)
					}
					return i
				}
				return 'object' == typeof n
					? this.each(function () {
							Q.set(this, n)
					  })
					: $(
							this,
							function (e) {
								var t
								if (o && void 0 === e)
									return void 0 !== (t = Q.get(o, n))
										? t
										: void 0 !== (t = Z(o, n))
										? t
										: void 0
								this.each(function () {
									Q.set(this, n, e)
								})
							},
							null,
							e,
							1 < arguments.length,
							null,
							!0
					  )
			},
			removeData: function (e) {
				return this.each(function () {
					Q.remove(this, e)
				})
			},
		}),
		S.extend({
			queue: function (e, t, n) {
				var r
				if (e)
					return (
						(t = (t || 'fx') + 'queue'),
						(r = Y.get(e, t)),
						n &&
							(!r || Array.isArray(n)
								? (r = Y.access(e, t, S.makeArray(n)))
								: r.push(n)),
						r || []
					)
			},
			dequeue: function (e, t) {
				t = t || 'fx'
				var n = S.queue(e, t),
					r = n.length,
					i = n.shift(),
					o = S._queueHooks(e, t)
				'inprogress' === i && ((i = n.shift()), r--),
					i &&
						('fx' === t && n.unshift('inprogress'),
						delete o.stop,
						i.call(
							e,
							function () {
								S.dequeue(e, t)
							},
							o
						)),
					!r && o && o.empty.fire()
			},
			_queueHooks: function (e, t) {
				var n = t + 'queueHooks'
				return (
					Y.get(e, n) ||
					Y.access(e, n, {
						empty: S.Callbacks('once memory').add(function () {
							Y.remove(e, [t + 'queue', n])
						}),
					})
				)
			},
		}),
		S.fn.extend({
			queue: function (t, n) {
				var e = 2
				return (
					'string' != typeof t && ((n = t), (t = 'fx'), e--),
					arguments.length < e
						? S.queue(this[0], t)
						: void 0 === n
						? this
						: this.each(function () {
								var e = S.queue(this, t, n)
								S._queueHooks(this, t),
									'fx' === t && 'inprogress' !== e[0] && S.dequeue(this, t)
						  })
				)
			},
			dequeue: function (e) {
				return this.each(function () {
					S.dequeue(this, e)
				})
			},
			clearQueue: function (e) {
				return this.queue(e || 'fx', [])
			},
			promise: function (e, t) {
				var n,
					r = 1,
					i = S.Deferred(),
					o = this,
					a = this.length,
					s = function () {
						--r || i.resolveWith(o, [o])
					}
				'string' != typeof e && ((t = e), (e = void 0)), (e = e || 'fx')
				while (a--)
					(n = Y.get(o[a], e + 'queueHooks')) &&
						n.empty &&
						(r++, n.empty.add(s))
				return s(), i.promise(t)
			},
		})
	var ee = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
		te = new RegExp('^(?:([+-])=|)(' + ee + ')([a-z%]*)$', 'i'),
		ne = ['Top', 'Right', 'Bottom', 'Left'],
		re = E.documentElement,
		ie = function (e) {
			return S.contains(e.ownerDocument, e)
		},
		oe = { composed: !0 }
	re.getRootNode &&
		(ie = function (e) {
			return (
				S.contains(e.ownerDocument, e) || e.getRootNode(oe) === e.ownerDocument
			)
		})
	var ae = function (e, t) {
		return (
			'none' === (e = t || e).style.display ||
			('' === e.style.display && ie(e) && 'none' === S.css(e, 'display'))
		)
	}
	function se(e, t, n, r) {
		var i,
			o,
			a = 20,
			s = r
				? function () {
						return r.cur()
				  }
				: function () {
						return S.css(e, t, '')
				  },
			u = s(),
			l = (n && n[3]) || (S.cssNumber[t] ? '' : 'px'),
			c =
				e.nodeType &&
				(S.cssNumber[t] || ('px' !== l && +u)) &&
				te.exec(S.css(e, t))
		if (c && c[3] !== l) {
			;(u /= 2), (l = l || c[3]), (c = +u || 1)
			while (a--)
				S.style(e, t, c + l),
					(1 - o) * (1 - (o = s() / u || 0.5)) <= 0 && (a = 0),
					(c /= o)
			;(c *= 2), S.style(e, t, c + l), (n = n || [])
		}
		return (
			n &&
				((c = +c || +u || 0),
				(i = n[1] ? c + (n[1] + 1) * n[2] : +n[2]),
				r && ((r.unit = l), (r.start = c), (r.end = i))),
			i
		)
	}
	var ue = {}
	function le(e, t) {
		for (var n, r, i, o, a, s, u, l = [], c = 0, f = e.length; c < f; c++)
			(r = e[c]).style &&
				((n = r.style.display),
				t
					? ('none' === n &&
							((l[c] = Y.get(r, 'display') || null),
							l[c] || (r.style.display = '')),
					  '' === r.style.display &&
							ae(r) &&
							(l[c] =
								((u = a = o = void 0),
								(a = (i = r).ownerDocument),
								(s = i.nodeName),
								(u = ue[s]) ||
									((o = a.body.appendChild(a.createElement(s))),
									(u = S.css(o, 'display')),
									o.parentNode.removeChild(o),
									'none' === u && (u = 'block'),
									(ue[s] = u)))))
					: 'none' !== n && ((l[c] = 'none'), Y.set(r, 'display', n)))
		for (c = 0; c < f; c++) null != l[c] && (e[c].style.display = l[c])
		return e
	}
	S.fn.extend({
		show: function () {
			return le(this, !0)
		},
		hide: function () {
			return le(this)
		},
		toggle: function (e) {
			return 'boolean' == typeof e
				? e
					? this.show()
					: this.hide()
				: this.each(function () {
						ae(this) ? S(this).show() : S(this).hide()
				  })
		},
	})
	var ce,
		fe,
		pe = /^(?:checkbox|radio)$/i,
		de = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
		he = /^$|^module$|\/(?:java|ecma)script/i
	;(ce = E.createDocumentFragment().appendChild(E.createElement('div'))),
		(fe = E.createElement('input')).setAttribute('type', 'radio'),
		fe.setAttribute('checked', 'checked'),
		fe.setAttribute('name', 't'),
		ce.appendChild(fe),
		(y.checkClone = ce.cloneNode(!0).cloneNode(!0).lastChild.checked),
		(ce.innerHTML = '<textarea>x</textarea>'),
		(y.noCloneChecked = !!ce.cloneNode(!0).lastChild.defaultValue),
		(ce.innerHTML = '<option></option>'),
		(y.option = !!ce.lastChild)
	var ge = {
		thead: [1, '<table>', '</table>'],
		col: [2, '<table><colgroup>', '</colgroup></table>'],
		tr: [2, '<table><tbody>', '</tbody></table>'],
		td: [3, '<table><tbody><tr>', '</tr></tbody></table>'],
		_default: [0, '', ''],
	}
	function ve(e, t) {
		var n
		return (
			(n =
				'undefined' != typeof e.getElementsByTagName
					? e.getElementsByTagName(t || '*')
					: 'undefined' != typeof e.querySelectorAll
					? e.querySelectorAll(t || '*')
					: []),
			void 0 === t || (t && A(e, t)) ? S.merge([e], n) : n
		)
	}
	function ye(e, t) {
		for (var n = 0, r = e.length; n < r; n++)
			Y.set(e[n], 'globalEval', !t || Y.get(t[n], 'globalEval'))
	}
	;(ge.tbody = ge.tfoot = ge.colgroup = ge.caption = ge.thead),
		(ge.th = ge.td),
		y.option ||
			(ge.optgroup = ge.option =
				[1, "<select multiple='multiple'>", '</select>'])
	var me = /<|&#?\w+;/
	function xe(e, t, n, r, i) {
		for (
			var o,
				a,
				s,
				u,
				l,
				c,
				f = t.createDocumentFragment(),
				p = [],
				d = 0,
				h = e.length;
			d < h;
			d++
		)
			if ((o = e[d]) || 0 === o)
				if ('object' === w(o)) S.merge(p, o.nodeType ? [o] : o)
				else if (me.test(o)) {
					;(a = a || f.appendChild(t.createElement('div'))),
						(s = (de.exec(o) || ['', ''])[1].toLowerCase()),
						(u = ge[s] || ge._default),
						(a.innerHTML = u[1] + S.htmlPrefilter(o) + u[2]),
						(c = u[0])
					while (c--) a = a.lastChild
					S.merge(p, a.childNodes), ((a = f.firstChild).textContent = '')
				} else p.push(t.createTextNode(o))
		;(f.textContent = ''), (d = 0)
		while ((o = p[d++]))
			if (r && -1 < S.inArray(o, r)) i && i.push(o)
			else if (
				((l = ie(o)), (a = ve(f.appendChild(o), 'script')), l && ye(a), n)
			) {
				c = 0
				while ((o = a[c++])) he.test(o.type || '') && n.push(o)
			}
		return f
	}
	var be = /^key/,
		we = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
		Te = /^([^.]*)(?:\.(.+)|)/
	function Ce() {
		return !0
	}
	function Ee() {
		return !1
	}
	function Se(e, t) {
		return (
			(e ===
				(function () {
					try {
						return E.activeElement
					} catch (e) {}
				})()) ==
			('focus' === t)
		)
	}
	function ke(e, t, n, r, i, o) {
		var a, s
		if ('object' == typeof t) {
			for (s in ('string' != typeof n && ((r = r || n), (n = void 0)), t))
				ke(e, s, n, r, t[s], o)
			return e
		}
		if (
			(null == r && null == i
				? ((i = n), (r = n = void 0))
				: null == i &&
				  ('string' == typeof n
						? ((i = r), (r = void 0))
						: ((i = r), (r = n), (n = void 0))),
			!1 === i)
		)
			i = Ee
		else if (!i) return e
		return (
			1 === o &&
				((a = i),
				((i = function (e) {
					return S().off(e), a.apply(this, arguments)
				}).guid = a.guid || (a.guid = S.guid++))),
			e.each(function () {
				S.event.add(this, t, i, r, n)
			})
		)
	}
	function Ae(e, i, o) {
		o
			? (Y.set(e, i, !1),
			  S.event.add(e, i, {
					namespace: !1,
					handler: function (e) {
						var t,
							n,
							r = Y.get(this, i)
						if (1 & e.isTrigger && this[i]) {
							if (r.length)
								(S.event.special[i] || {}).delegateType && e.stopPropagation()
							else if (
								((r = s.call(arguments)),
								Y.set(this, i, r),
								(t = o(this, i)),
								this[i](),
								r !== (n = Y.get(this, i)) || t ? Y.set(this, i, !1) : (n = {}),
								r !== n)
							)
								return e.stopImmediatePropagation(), e.preventDefault(), n.value
						} else
							r.length &&
								(Y.set(this, i, {
									value: S.event.trigger(
										S.extend(r[0], S.Event.prototype),
										r.slice(1),
										this
									),
								}),
								e.stopImmediatePropagation())
					},
			  }))
			: void 0 === Y.get(e, i) && S.event.add(e, i, Ce)
	}
	;(S.event = {
		global: {},
		add: function (t, e, n, r, i) {
			var o,
				a,
				s,
				u,
				l,
				c,
				f,
				p,
				d,
				h,
				g,
				v = Y.get(t)
			if (V(t)) {
				n.handler && ((n = (o = n).handler), (i = o.selector)),
					i && S.find.matchesSelector(re, i),
					n.guid || (n.guid = S.guid++),
					(u = v.events) || (u = v.events = Object.create(null)),
					(a = v.handle) ||
						(a = v.handle =
							function (e) {
								return 'undefined' != typeof S && S.event.triggered !== e.type
									? S.event.dispatch.apply(t, arguments)
									: void 0
							}),
					(l = (e = (e || '').match(P) || ['']).length)
				while (l--)
					(d = g = (s = Te.exec(e[l]) || [])[1]),
						(h = (s[2] || '').split('.').sort()),
						d &&
							((f = S.event.special[d] || {}),
							(d = (i ? f.delegateType : f.bindType) || d),
							(f = S.event.special[d] || {}),
							(c = S.extend(
								{
									type: d,
									origType: g,
									data: r,
									handler: n,
									guid: n.guid,
									selector: i,
									needsContext: i && S.expr.match.needsContext.test(i),
									namespace: h.join('.'),
								},
								o
							)),
							(p = u[d]) ||
								(((p = u[d] = []).delegateCount = 0),
								(f.setup && !1 !== f.setup.call(t, r, h, a)) ||
									(t.addEventListener && t.addEventListener(d, a))),
							f.add &&
								(f.add.call(t, c), c.handler.guid || (c.handler.guid = n.guid)),
							i ? p.splice(p.delegateCount++, 0, c) : p.push(c),
							(S.event.global[d] = !0))
			}
		},
		remove: function (e, t, n, r, i) {
			var o,
				a,
				s,
				u,
				l,
				c,
				f,
				p,
				d,
				h,
				g,
				v = Y.hasData(e) && Y.get(e)
			if (v && (u = v.events)) {
				l = (t = (t || '').match(P) || ['']).length
				while (l--)
					if (
						((d = g = (s = Te.exec(t[l]) || [])[1]),
						(h = (s[2] || '').split('.').sort()),
						d)
					) {
						;(f = S.event.special[d] || {}),
							(p = u[(d = (r ? f.delegateType : f.bindType) || d)] || []),
							(s =
								s[2] &&
								new RegExp('(^|\\.)' + h.join('\\.(?:.*\\.|)') + '(\\.|$)')),
							(a = o = p.length)
						while (o--)
							(c = p[o]),
								(!i && g !== c.origType) ||
									(n && n.guid !== c.guid) ||
									(s && !s.test(c.namespace)) ||
									(r && r !== c.selector && ('**' !== r || !c.selector)) ||
									(p.splice(o, 1),
									c.selector && p.delegateCount--,
									f.remove && f.remove.call(e, c))
						a &&
							!p.length &&
							((f.teardown && !1 !== f.teardown.call(e, h, v.handle)) ||
								S.removeEvent(e, d, v.handle),
							delete u[d])
					} else for (d in u) S.event.remove(e, d + t[l], n, r, !0)
				S.isEmptyObject(u) && Y.remove(e, 'handle events')
			}
		},
		dispatch: function (e) {
			var t,
				n,
				r,
				i,
				o,
				a,
				s = new Array(arguments.length),
				u = S.event.fix(e),
				l = (Y.get(this, 'events') || Object.create(null))[u.type] || [],
				c = S.event.special[u.type] || {}
			for (s[0] = u, t = 1; t < arguments.length; t++) s[t] = arguments[t]
			if (
				((u.delegateTarget = this),
				!c.preDispatch || !1 !== c.preDispatch.call(this, u))
			) {
				;(a = S.event.handlers.call(this, u, l)), (t = 0)
				while ((i = a[t++]) && !u.isPropagationStopped()) {
					;(u.currentTarget = i.elem), (n = 0)
					while ((o = i.handlers[n++]) && !u.isImmediatePropagationStopped())
						(u.rnamespace &&
							!1 !== o.namespace &&
							!u.rnamespace.test(o.namespace)) ||
							((u.handleObj = o),
							(u.data = o.data),
							void 0 !==
								(r = (
									(S.event.special[o.origType] || {}).handle || o.handler
								).apply(i.elem, s)) &&
								!1 === (u.result = r) &&
								(u.preventDefault(), u.stopPropagation()))
				}
				return c.postDispatch && c.postDispatch.call(this, u), u.result
			}
		},
		handlers: function (e, t) {
			var n,
				r,
				i,
				o,
				a,
				s = [],
				u = t.delegateCount,
				l = e.target
			if (u && l.nodeType && !('click' === e.type && 1 <= e.button))
				for (; l !== this; l = l.parentNode || this)
					if (1 === l.nodeType && ('click' !== e.type || !0 !== l.disabled)) {
						for (o = [], a = {}, n = 0; n < u; n++)
							void 0 === a[(i = (r = t[n]).selector + ' ')] &&
								(a[i] = r.needsContext
									? -1 < S(i, this).index(l)
									: S.find(i, this, null, [l]).length),
								a[i] && o.push(r)
						o.length && s.push({ elem: l, handlers: o })
					}
			return (
				(l = this), u < t.length && s.push({ elem: l, handlers: t.slice(u) }), s
			)
		},
		addProp: function (t, e) {
			Object.defineProperty(S.Event.prototype, t, {
				enumerable: !0,
				configurable: !0,
				get: m(e)
					? function () {
							if (this.originalEvent) return e(this.originalEvent)
					  }
					: function () {
							if (this.originalEvent) return this.originalEvent[t]
					  },
				set: function (e) {
					Object.defineProperty(this, t, {
						enumerable: !0,
						configurable: !0,
						writable: !0,
						value: e,
					})
				},
			})
		},
		fix: function (e) {
			return e[S.expando] ? e : new S.Event(e)
		},
		special: {
			load: { noBubble: !0 },
			click: {
				setup: function (e) {
					var t = this || e
					return (
						pe.test(t.type) && t.click && A(t, 'input') && Ae(t, 'click', Ce),
						!1
					)
				},
				trigger: function (e) {
					var t = this || e
					return (
						pe.test(t.type) && t.click && A(t, 'input') && Ae(t, 'click'), !0
					)
				},
				_default: function (e) {
					var t = e.target
					return (
						(pe.test(t.type) &&
							t.click &&
							A(t, 'input') &&
							Y.get(t, 'click')) ||
						A(t, 'a')
					)
				},
			},
			beforeunload: {
				postDispatch: function (e) {
					void 0 !== e.result &&
						e.originalEvent &&
						(e.originalEvent.returnValue = e.result)
				},
			},
		},
	}),
		(S.removeEvent = function (e, t, n) {
			e.removeEventListener && e.removeEventListener(t, n)
		}),
		(S.Event = function (e, t) {
			if (!(this instanceof S.Event)) return new S.Event(e, t)
			e && e.type
				? ((this.originalEvent = e),
				  (this.type = e.type),
				  (this.isDefaultPrevented =
						e.defaultPrevented ||
						(void 0 === e.defaultPrevented && !1 === e.returnValue)
							? Ce
							: Ee),
				  (this.target =
						e.target && 3 === e.target.nodeType
							? e.target.parentNode
							: e.target),
				  (this.currentTarget = e.currentTarget),
				  (this.relatedTarget = e.relatedTarget))
				: (this.type = e),
				t && S.extend(this, t),
				(this.timeStamp = (e && e.timeStamp) || Date.now()),
				(this[S.expando] = !0)
		}),
		(S.Event.prototype = {
			constructor: S.Event,
			isDefaultPrevented: Ee,
			isPropagationStopped: Ee,
			isImmediatePropagationStopped: Ee,
			isSimulated: !1,
			preventDefault: function () {
				var e = this.originalEvent
				;(this.isDefaultPrevented = Ce),
					e && !this.isSimulated && e.preventDefault()
			},
			stopPropagation: function () {
				var e = this.originalEvent
				;(this.isPropagationStopped = Ce),
					e && !this.isSimulated && e.stopPropagation()
			},
			stopImmediatePropagation: function () {
				var e = this.originalEvent
				;(this.isImmediatePropagationStopped = Ce),
					e && !this.isSimulated && e.stopImmediatePropagation(),
					this.stopPropagation()
			},
		}),
		S.each(
			{
				altKey: !0,
				bubbles: !0,
				cancelable: !0,
				changedTouches: !0,
				ctrlKey: !0,
				detail: !0,
				eventPhase: !0,
				metaKey: !0,
				pageX: !0,
				pageY: !0,
				shiftKey: !0,
				view: !0,
				char: !0,
				code: !0,
				charCode: !0,
				key: !0,
				keyCode: !0,
				button: !0,
				buttons: !0,
				clientX: !0,
				clientY: !0,
				offsetX: !0,
				offsetY: !0,
				pointerId: !0,
				pointerType: !0,
				screenX: !0,
				screenY: !0,
				targetTouches: !0,
				toElement: !0,
				touches: !0,
				which: function (e) {
					var t = e.button
					return null == e.which && be.test(e.type)
						? null != e.charCode
							? e.charCode
							: e.keyCode
						: !e.which && void 0 !== t && we.test(e.type)
						? 1 & t
							? 1
							: 2 & t
							? 3
							: 4 & t
							? 2
							: 0
						: e.which
				},
			},
			S.event.addProp
		),
		S.each({ focus: 'focusin', blur: 'focusout' }, function (e, t) {
			S.event.special[e] = {
				setup: function () {
					return Ae(this, e, Se), !1
				},
				trigger: function () {
					return Ae(this, e), !0
				},
				delegateType: t,
			}
		}),
		S.each(
			{
				mouseenter: 'mouseover',
				mouseleave: 'mouseout',
				pointerenter: 'pointerover',
				pointerleave: 'pointerout',
			},
			function (e, i) {
				S.event.special[e] = {
					delegateType: i,
					bindType: i,
					handle: function (e) {
						var t,
							n = e.relatedTarget,
							r = e.handleObj
						return (
							(n && (n === this || S.contains(this, n))) ||
								((e.type = r.origType),
								(t = r.handler.apply(this, arguments)),
								(e.type = i)),
							t
						)
					},
				}
			}
		),
		S.fn.extend({
			on: function (e, t, n, r) {
				return ke(this, e, t, n, r)
			},
			one: function (e, t, n, r) {
				return ke(this, e, t, n, r, 1)
			},
			off: function (e, t, n) {
				var r, i
				if (e && e.preventDefault && e.handleObj)
					return (
						(r = e.handleObj),
						S(e.delegateTarget).off(
							r.namespace ? r.origType + '.' + r.namespace : r.origType,
							r.selector,
							r.handler
						),
						this
					)
				if ('object' == typeof e) {
					for (i in e) this.off(i, t, e[i])
					return this
				}
				return (
					(!1 !== t && 'function' != typeof t) || ((n = t), (t = void 0)),
					!1 === n && (n = Ee),
					this.each(function () {
						S.event.remove(this, e, n, t)
					})
				)
			},
		})
	var Ne = /<script|<style|<link/i,
		De = /checked\s*(?:[^=]|=\s*.checked.)/i,
		je = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g
	function qe(e, t) {
		return (
			(A(e, 'table') &&
				A(11 !== t.nodeType ? t : t.firstChild, 'tr') &&
				S(e).children('tbody')[0]) ||
			e
		)
	}
	function Le(e) {
		return (e.type = (null !== e.getAttribute('type')) + '/' + e.type), e
	}
	function He(e) {
		return (
			'true/' === (e.type || '').slice(0, 5)
				? (e.type = e.type.slice(5))
				: e.removeAttribute('type'),
			e
		)
	}
	function Oe(e, t) {
		var n, r, i, o, a, s
		if (1 === t.nodeType) {
			if (Y.hasData(e) && (s = Y.get(e).events))
				for (i in (Y.remove(t, 'handle events'), s))
					for (n = 0, r = s[i].length; n < r; n++) S.event.add(t, i, s[i][n])
			Q.hasData(e) && ((o = Q.access(e)), (a = S.extend({}, o)), Q.set(t, a))
		}
	}
	function Pe(n, r, i, o) {
		r = g(r)
		var e,
			t,
			a,
			s,
			u,
			l,
			c = 0,
			f = n.length,
			p = f - 1,
			d = r[0],
			h = m(d)
		if (h || (1 < f && 'string' == typeof d && !y.checkClone && De.test(d)))
			return n.each(function (e) {
				var t = n.eq(e)
				h && (r[0] = d.call(this, e, t.html())), Pe(t, r, i, o)
			})
		if (
			f &&
			((t = (e = xe(r, n[0].ownerDocument, !1, n, o)).firstChild),
			1 === e.childNodes.length && (e = t),
			t || o)
		) {
			for (s = (a = S.map(ve(e, 'script'), Le)).length; c < f; c++)
				(u = e),
					c !== p &&
						((u = S.clone(u, !0, !0)), s && S.merge(a, ve(u, 'script'))),
					i.call(n[c], u, c)
			if (s)
				for (l = a[a.length - 1].ownerDocument, S.map(a, He), c = 0; c < s; c++)
					(u = a[c]),
						he.test(u.type || '') &&
							!Y.access(u, 'globalEval') &&
							S.contains(l, u) &&
							(u.src && 'module' !== (u.type || '').toLowerCase()
								? S._evalUrl &&
								  !u.noModule &&
								  S._evalUrl(
										u.src,
										{ nonce: u.nonce || u.getAttribute('nonce') },
										l
								  )
								: b(u.textContent.replace(je, ''), u, l))
		}
		return n
	}
	function Re(e, t, n) {
		for (var r, i = t ? S.filter(t, e) : e, o = 0; null != (r = i[o]); o++)
			n || 1 !== r.nodeType || S.cleanData(ve(r)),
				r.parentNode &&
					(n && ie(r) && ye(ve(r, 'script')), r.parentNode.removeChild(r))
		return e
	}
	S.extend({
		htmlPrefilter: function (e) {
			return e
		},
		clone: function (e, t, n) {
			var r,
				i,
				o,
				a,
				s,
				u,
				l,
				c = e.cloneNode(!0),
				f = ie(e)
			if (
				!(
					y.noCloneChecked ||
					(1 !== e.nodeType && 11 !== e.nodeType) ||
					S.isXMLDoc(e)
				)
			)
				for (a = ve(c), r = 0, i = (o = ve(e)).length; r < i; r++)
					(s = o[r]),
						(u = a[r]),
						void 0,
						'input' === (l = u.nodeName.toLowerCase()) && pe.test(s.type)
							? (u.checked = s.checked)
							: ('input' !== l && 'textarea' !== l) ||
							  (u.defaultValue = s.defaultValue)
			if (t)
				if (n)
					for (o = o || ve(e), a = a || ve(c), r = 0, i = o.length; r < i; r++)
						Oe(o[r], a[r])
				else Oe(e, c)
			return 0 < (a = ve(c, 'script')).length && ye(a, !f && ve(e, 'script')), c
		},
		cleanData: function (e) {
			for (var t, n, r, i = S.event.special, o = 0; void 0 !== (n = e[o]); o++)
				if (V(n)) {
					if ((t = n[Y.expando])) {
						if (t.events)
							for (r in t.events)
								i[r] ? S.event.remove(n, r) : S.removeEvent(n, r, t.handle)
						n[Y.expando] = void 0
					}
					n[Q.expando] && (n[Q.expando] = void 0)
				}
		},
	}),
		S.fn.extend({
			detach: function (e) {
				return Re(this, e, !0)
			},
			remove: function (e) {
				return Re(this, e)
			},
			text: function (e) {
				return $(
					this,
					function (e) {
						return void 0 === e
							? S.text(this)
							: this.empty().each(function () {
									;(1 !== this.nodeType &&
										11 !== this.nodeType &&
										9 !== this.nodeType) ||
										(this.textContent = e)
							  })
					},
					null,
					e,
					arguments.length
				)
			},
			append: function () {
				return Pe(this, arguments, function (e) {
					;(1 !== this.nodeType &&
						11 !== this.nodeType &&
						9 !== this.nodeType) ||
						qe(this, e).appendChild(e)
				})
			},
			prepend: function () {
				return Pe(this, arguments, function (e) {
					if (
						1 === this.nodeType ||
						11 === this.nodeType ||
						9 === this.nodeType
					) {
						var t = qe(this, e)
						t.insertBefore(e, t.firstChild)
					}
				})
			},
			before: function () {
				return Pe(this, arguments, function (e) {
					this.parentNode && this.parentNode.insertBefore(e, this)
				})
			},
			after: function () {
				return Pe(this, arguments, function (e) {
					this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
				})
			},
			empty: function () {
				for (var e, t = 0; null != (e = this[t]); t++)
					1 === e.nodeType && (S.cleanData(ve(e, !1)), (e.textContent = ''))
				return this
			},
			clone: function (e, t) {
				return (
					(e = null != e && e),
					(t = null == t ? e : t),
					this.map(function () {
						return S.clone(this, e, t)
					})
				)
			},
			html: function (e) {
				return $(
					this,
					function (e) {
						var t = this[0] || {},
							n = 0,
							r = this.length
						if (void 0 === e && 1 === t.nodeType) return t.innerHTML
						if (
							'string' == typeof e &&
							!Ne.test(e) &&
							!ge[(de.exec(e) || ['', ''])[1].toLowerCase()]
						) {
							e = S.htmlPrefilter(e)
							try {
								for (; n < r; n++)
									1 === (t = this[n] || {}).nodeType &&
										(S.cleanData(ve(t, !1)), (t.innerHTML = e))
								t = 0
							} catch (e) {}
						}
						t && this.empty().append(e)
					},
					null,
					e,
					arguments.length
				)
			},
			replaceWith: function () {
				var n = []
				return Pe(
					this,
					arguments,
					function (e) {
						var t = this.parentNode
						S.inArray(this, n) < 0 &&
							(S.cleanData(ve(this)), t && t.replaceChild(e, this))
					},
					n
				)
			},
		}),
		S.each(
			{
				appendTo: 'append',
				prependTo: 'prepend',
				insertBefore: 'before',
				insertAfter: 'after',
				replaceAll: 'replaceWith',
			},
			function (e, a) {
				S.fn[e] = function (e) {
					for (var t, n = [], r = S(e), i = r.length - 1, o = 0; o <= i; o++)
						(t = o === i ? this : this.clone(!0)),
							S(r[o])[a](t),
							u.apply(n, t.get())
					return this.pushStack(n)
				}
			}
		)
	var Me = new RegExp('^(' + ee + ')(?!px)[a-z%]+$', 'i'),
		Ie = function (e) {
			var t = e.ownerDocument.defaultView
			return (t && t.opener) || (t = C), t.getComputedStyle(e)
		},
		We = function (e, t, n) {
			var r,
				i,
				o = {}
			for (i in t) (o[i] = e.style[i]), (e.style[i] = t[i])
			for (i in ((r = n.call(e)), t)) e.style[i] = o[i]
			return r
		},
		Fe = new RegExp(ne.join('|'), 'i')
	function Be(e, t, n) {
		var r,
			i,
			o,
			a,
			s = e.style
		return (
			(n = n || Ie(e)) &&
				('' !== (a = n.getPropertyValue(t) || n[t]) ||
					ie(e) ||
					(a = S.style(e, t)),
				!y.pixelBoxStyles() &&
					Me.test(a) &&
					Fe.test(t) &&
					((r = s.width),
					(i = s.minWidth),
					(o = s.maxWidth),
					(s.minWidth = s.maxWidth = s.width = a),
					(a = n.width),
					(s.width = r),
					(s.minWidth = i),
					(s.maxWidth = o))),
			void 0 !== a ? a + '' : a
		)
	}
	function $e(e, t) {
		return {
			get: function () {
				if (!e()) return (this.get = t).apply(this, arguments)
				delete this.get
			},
		}
	}
	!(function () {
		function e() {
			if (l) {
				;(u.style.cssText =
					'position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0'),
					(l.style.cssText =
						'position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%'),
					re.appendChild(u).appendChild(l)
				var e = C.getComputedStyle(l)
				;(n = '1%' !== e.top),
					(s = 12 === t(e.marginLeft)),
					(l.style.right = '60%'),
					(o = 36 === t(e.right)),
					(r = 36 === t(e.width)),
					(l.style.position = 'absolute'),
					(i = 12 === t(l.offsetWidth / 3)),
					re.removeChild(u),
					(l = null)
			}
		}
		function t(e) {
			return Math.round(parseFloat(e))
		}
		var n,
			r,
			i,
			o,
			a,
			s,
			u = E.createElement('div'),
			l = E.createElement('div')
		l.style &&
			((l.style.backgroundClip = 'content-box'),
			(l.cloneNode(!0).style.backgroundClip = ''),
			(y.clearCloneStyle = 'content-box' === l.style.backgroundClip),
			S.extend(y, {
				boxSizingReliable: function () {
					return e(), r
				},
				pixelBoxStyles: function () {
					return e(), o
				},
				pixelPosition: function () {
					return e(), n
				},
				reliableMarginLeft: function () {
					return e(), s
				},
				scrollboxSize: function () {
					return e(), i
				},
				reliableTrDimensions: function () {
					var e, t, n, r
					return (
						null == a &&
							((e = E.createElement('table')),
							(t = E.createElement('tr')),
							(n = E.createElement('div')),
							(e.style.cssText = 'position:absolute;left:-11111px'),
							(t.style.height = '1px'),
							(n.style.height = '9px'),
							re.appendChild(e).appendChild(t).appendChild(n),
							(r = C.getComputedStyle(t)),
							(a = 3 < parseInt(r.height)),
							re.removeChild(e)),
						a
					)
				},
			}))
	})()
	var _e = ['Webkit', 'Moz', 'ms'],
		ze = E.createElement('div').style,
		Ue = {}
	function Xe(e) {
		var t = S.cssProps[e] || Ue[e]
		return (
			t ||
			(e in ze
				? e
				: (Ue[e] =
						(function (e) {
							var t = e[0].toUpperCase() + e.slice(1),
								n = _e.length
							while (n--) if ((e = _e[n] + t) in ze) return e
						})(e) || e))
		)
	}
	var Ve = /^(none|table(?!-c[ea]).+)/,
		Ge = /^--/,
		Ye = { position: 'absolute', visibility: 'hidden', display: 'block' },
		Qe = { letterSpacing: '0', fontWeight: '400' }
	function Je(e, t, n) {
		var r = te.exec(t)
		return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || 'px') : t
	}
	function Ke(e, t, n, r, i, o) {
		var a = 'width' === t ? 1 : 0,
			s = 0,
			u = 0
		if (n === (r ? 'border' : 'content')) return 0
		for (; a < 4; a += 2)
			'margin' === n && (u += S.css(e, n + ne[a], !0, i)),
				r
					? ('content' === n && (u -= S.css(e, 'padding' + ne[a], !0, i)),
					  'margin' !== n &&
							(u -= S.css(e, 'border' + ne[a] + 'Width', !0, i)))
					: ((u += S.css(e, 'padding' + ne[a], !0, i)),
					  'padding' !== n
							? (u += S.css(e, 'border' + ne[a] + 'Width', !0, i))
							: (s += S.css(e, 'border' + ne[a] + 'Width', !0, i)))
		return (
			!r &&
				0 <= o &&
				(u +=
					Math.max(
						0,
						Math.ceil(
							e['offset' + t[0].toUpperCase() + t.slice(1)] - o - u - s - 0.5
						)
					) || 0),
			u
		)
	}
	function Ze(e, t, n) {
		var r = Ie(e),
			i =
				(!y.boxSizingReliable() || n) &&
				'border-box' === S.css(e, 'boxSizing', !1, r),
			o = i,
			a = Be(e, t, r),
			s = 'offset' + t[0].toUpperCase() + t.slice(1)
		if (Me.test(a)) {
			if (!n) return a
			a = 'auto'
		}
		return (
			((!y.boxSizingReliable() && i) ||
				(!y.reliableTrDimensions() && A(e, 'tr')) ||
				'auto' === a ||
				(!parseFloat(a) && 'inline' === S.css(e, 'display', !1, r))) &&
				e.getClientRects().length &&
				((i = 'border-box' === S.css(e, 'boxSizing', !1, r)),
				(o = s in e) && (a = e[s])),
			(a = parseFloat(a) || 0) +
				Ke(e, t, n || (i ? 'border' : 'content'), o, r, a) +
				'px'
		)
	}
	function et(e, t, n, r, i) {
		return new et.prototype.init(e, t, n, r, i)
	}
	S.extend({
		cssHooks: {
			opacity: {
				get: function (e, t) {
					if (t) {
						var n = Be(e, 'opacity')
						return '' === n ? '1' : n
					}
				},
			},
		},
		cssNumber: {
			animationIterationCount: !0,
			columnCount: !0,
			fillOpacity: !0,
			flexGrow: !0,
			flexShrink: !0,
			fontWeight: !0,
			gridArea: !0,
			gridColumn: !0,
			gridColumnEnd: !0,
			gridColumnStart: !0,
			gridRow: !0,
			gridRowEnd: !0,
			gridRowStart: !0,
			lineHeight: !0,
			opacity: !0,
			order: !0,
			orphans: !0,
			widows: !0,
			zIndex: !0,
			zoom: !0,
		},
		cssProps: {},
		style: function (e, t, n, r) {
			if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
				var i,
					o,
					a,
					s = X(t),
					u = Ge.test(t),
					l = e.style
				if (
					(u || (t = Xe(s)), (a = S.cssHooks[t] || S.cssHooks[s]), void 0 === n)
				)
					return a && 'get' in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t]
				'string' === (o = typeof n) &&
					(i = te.exec(n)) &&
					i[1] &&
					((n = se(e, t, i)), (o = 'number')),
					null != n &&
						n == n &&
						('number' !== o ||
							u ||
							(n += (i && i[3]) || (S.cssNumber[s] ? '' : 'px')),
						y.clearCloneStyle ||
							'' !== n ||
							0 !== t.indexOf('background') ||
							(l[t] = 'inherit'),
						(a && 'set' in a && void 0 === (n = a.set(e, n, r))) ||
							(u ? l.setProperty(t, n) : (l[t] = n)))
			}
		},
		css: function (e, t, n, r) {
			var i,
				o,
				a,
				s = X(t)
			return (
				Ge.test(t) || (t = Xe(s)),
				(a = S.cssHooks[t] || S.cssHooks[s]) &&
					'get' in a &&
					(i = a.get(e, !0, n)),
				void 0 === i && (i = Be(e, t, r)),
				'normal' === i && t in Qe && (i = Qe[t]),
				'' === n || n
					? ((o = parseFloat(i)), !0 === n || isFinite(o) ? o || 0 : i)
					: i
			)
		},
	}),
		S.each(['height', 'width'], function (e, u) {
			S.cssHooks[u] = {
				get: function (e, t, n) {
					if (t)
						return !Ve.test(S.css(e, 'display')) ||
							(e.getClientRects().length && e.getBoundingClientRect().width)
							? Ze(e, u, n)
							: We(e, Ye, function () {
									return Ze(e, u, n)
							  })
				},
				set: function (e, t, n) {
					var r,
						i = Ie(e),
						o = !y.scrollboxSize() && 'absolute' === i.position,
						a = (o || n) && 'border-box' === S.css(e, 'boxSizing', !1, i),
						s = n ? Ke(e, u, n, a, i) : 0
					return (
						a &&
							o &&
							(s -= Math.ceil(
								e['offset' + u[0].toUpperCase() + u.slice(1)] -
									parseFloat(i[u]) -
									Ke(e, u, 'border', !1, i) -
									0.5
							)),
						s &&
							(r = te.exec(t)) &&
							'px' !== (r[3] || 'px') &&
							((e.style[u] = t), (t = S.css(e, u))),
						Je(0, t, s)
					)
				},
			}
		}),
		(S.cssHooks.marginLeft = $e(y.reliableMarginLeft, function (e, t) {
			if (t)
				return (
					(parseFloat(Be(e, 'marginLeft')) ||
						e.getBoundingClientRect().left -
							We(e, { marginLeft: 0 }, function () {
								return e.getBoundingClientRect().left
							})) + 'px'
				)
		})),
		S.each({ margin: '', padding: '', border: 'Width' }, function (i, o) {
			;(S.cssHooks[i + o] = {
				expand: function (e) {
					for (
						var t = 0, n = {}, r = 'string' == typeof e ? e.split(' ') : [e];
						t < 4;
						t++
					)
						n[i + ne[t] + o] = r[t] || r[t - 2] || r[0]
					return n
				},
			}),
				'margin' !== i && (S.cssHooks[i + o].set = Je)
		}),
		S.fn.extend({
			css: function (e, t) {
				return $(
					this,
					function (e, t, n) {
						var r,
							i,
							o = {},
							a = 0
						if (Array.isArray(t)) {
							for (r = Ie(e), i = t.length; a < i; a++)
								o[t[a]] = S.css(e, t[a], !1, r)
							return o
						}
						return void 0 !== n ? S.style(e, t, n) : S.css(e, t)
					},
					e,
					t,
					1 < arguments.length
				)
			},
		}),
		(((S.Tween = et).prototype = {
			constructor: et,
			init: function (e, t, n, r, i, o) {
				;(this.elem = e),
					(this.prop = n),
					(this.easing = i || S.easing._default),
					(this.options = t),
					(this.start = this.now = this.cur()),
					(this.end = r),
					(this.unit = o || (S.cssNumber[n] ? '' : 'px'))
			},
			cur: function () {
				var e = et.propHooks[this.prop]
				return e && e.get ? e.get(this) : et.propHooks._default.get(this)
			},
			run: function (e) {
				var t,
					n = et.propHooks[this.prop]
				return (
					this.options.duration
						? (this.pos = t =
								S.easing[this.easing](
									e,
									this.options.duration * e,
									0,
									1,
									this.options.duration
								))
						: (this.pos = t = e),
					(this.now = (this.end - this.start) * t + this.start),
					this.options.step &&
						this.options.step.call(this.elem, this.now, this),
					n && n.set ? n.set(this) : et.propHooks._default.set(this),
					this
				)
			},
		}).init.prototype = et.prototype),
		((et.propHooks = {
			_default: {
				get: function (e) {
					var t
					return 1 !== e.elem.nodeType ||
						(null != e.elem[e.prop] && null == e.elem.style[e.prop])
						? e.elem[e.prop]
						: (t = S.css(e.elem, e.prop, '')) && 'auto' !== t
						? t
						: 0
				},
				set: function (e) {
					S.fx.step[e.prop]
						? S.fx.step[e.prop](e)
						: 1 !== e.elem.nodeType ||
						  (!S.cssHooks[e.prop] && null == e.elem.style[Xe(e.prop)])
						? (e.elem[e.prop] = e.now)
						: S.style(e.elem, e.prop, e.now + e.unit)
				},
			},
		}).scrollTop = et.propHooks.scrollLeft =
			{
				set: function (e) {
					e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
				},
			}),
		(S.easing = {
			linear: function (e) {
				return e
			},
			swing: function (e) {
				return 0.5 - Math.cos(e * Math.PI) / 2
			},
			_default: 'swing',
		}),
		(S.fx = et.prototype.init),
		(S.fx.step = {})
	var tt,
		nt,
		rt,
		it,
		ot = /^(?:toggle|show|hide)$/,
		at = /queueHooks$/
	function st() {
		nt &&
			(!1 === E.hidden && C.requestAnimationFrame
				? C.requestAnimationFrame(st)
				: C.setTimeout(st, S.fx.interval),
			S.fx.tick())
	}
	function ut() {
		return (
			C.setTimeout(function () {
				tt = void 0
			}),
			(tt = Date.now())
		)
	}
	function lt(e, t) {
		var n,
			r = 0,
			i = { height: e }
		for (t = t ? 1 : 0; r < 4; r += 2 - t)
			i['margin' + (n = ne[r])] = i['padding' + n] = e
		return t && (i.opacity = i.width = e), i
	}
	function ct(e, t, n) {
		for (
			var r,
				i = (ft.tweeners[t] || []).concat(ft.tweeners['*']),
				o = 0,
				a = i.length;
			o < a;
			o++
		)
			if ((r = i[o].call(n, t, e))) return r
	}
	function ft(o, e, t) {
		var n,
			a,
			r = 0,
			i = ft.prefilters.length,
			s = S.Deferred().always(function () {
				delete u.elem
			}),
			u = function () {
				if (a) return !1
				for (
					var e = tt || ut(),
						t = Math.max(0, l.startTime + l.duration - e),
						n = 1 - (t / l.duration || 0),
						r = 0,
						i = l.tweens.length;
					r < i;
					r++
				)
					l.tweens[r].run(n)
				return (
					s.notifyWith(o, [l, n, t]),
					n < 1 && i
						? t
						: (i || s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l]), !1)
				)
			},
			l = s.promise({
				elem: o,
				props: S.extend({}, e),
				opts: S.extend(!0, { specialEasing: {}, easing: S.easing._default }, t),
				originalProperties: e,
				originalOptions: t,
				startTime: tt || ut(),
				duration: t.duration,
				tweens: [],
				createTween: function (e, t) {
					var n = S.Tween(
						o,
						l.opts,
						e,
						t,
						l.opts.specialEasing[e] || l.opts.easing
					)
					return l.tweens.push(n), n
				},
				stop: function (e) {
					var t = 0,
						n = e ? l.tweens.length : 0
					if (a) return this
					for (a = !0; t < n; t++) l.tweens[t].run(1)
					return (
						e
							? (s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l, e]))
							: s.rejectWith(o, [l, e]),
						this
					)
				},
			}),
			c = l.props
		for (
			!(function (e, t) {
				var n, r, i, o, a
				for (n in e)
					if (
						((i = t[(r = X(n))]),
						(o = e[n]),
						Array.isArray(o) && ((i = o[1]), (o = e[n] = o[0])),
						n !== r && ((e[r] = o), delete e[n]),
						(a = S.cssHooks[r]) && ('expand' in a))
					)
						for (n in ((o = a.expand(o)), delete e[r], o))
							(n in e) || ((e[n] = o[n]), (t[n] = i))
					else t[r] = i
			})(c, l.opts.specialEasing);
			r < i;
			r++
		)
			if ((n = ft.prefilters[r].call(l, o, c, l.opts)))
				return (
					m(n.stop) &&
						(S._queueHooks(l.elem, l.opts.queue).stop = n.stop.bind(n)),
					n
				)
		return (
			S.map(c, ct, l),
			m(l.opts.start) && l.opts.start.call(o, l),
			l
				.progress(l.opts.progress)
				.done(l.opts.done, l.opts.complete)
				.fail(l.opts.fail)
				.always(l.opts.always),
			S.fx.timer(S.extend(u, { elem: o, anim: l, queue: l.opts.queue })),
			l
		)
	}
	;(S.Animation = S.extend(ft, {
		tweeners: {
			'*': [
				function (e, t) {
					var n = this.createTween(e, t)
					return se(n.elem, e, te.exec(t), n), n
				},
			],
		},
		tweener: function (e, t) {
			m(e) ? ((t = e), (e = ['*'])) : (e = e.match(P))
			for (var n, r = 0, i = e.length; r < i; r++)
				(n = e[r]),
					(ft.tweeners[n] = ft.tweeners[n] || []),
					ft.tweeners[n].unshift(t)
		},
		prefilters: [
			function (e, t, n) {
				var r,
					i,
					o,
					a,
					s,
					u,
					l,
					c,
					f = 'width' in t || 'height' in t,
					p = this,
					d = {},
					h = e.style,
					g = e.nodeType && ae(e),
					v = Y.get(e, 'fxshow')
				for (r in (n.queue ||
					(null == (a = S._queueHooks(e, 'fx')).unqueued &&
						((a.unqueued = 0),
						(s = a.empty.fire),
						(a.empty.fire = function () {
							a.unqueued || s()
						})),
					a.unqueued++,
					p.always(function () {
						p.always(function () {
							a.unqueued--, S.queue(e, 'fx').length || a.empty.fire()
						})
					})),
				t))
					if (((i = t[r]), ot.test(i))) {
						if (
							(delete t[r],
							(o = o || 'toggle' === i),
							i === (g ? 'hide' : 'show'))
						) {
							if ('show' !== i || !v || void 0 === v[r]) continue
							g = !0
						}
						d[r] = (v && v[r]) || S.style(e, r)
					}
				if ((u = !S.isEmptyObject(t)) || !S.isEmptyObject(d))
					for (r in (f &&
						1 === e.nodeType &&
						((n.overflow = [h.overflow, h.overflowX, h.overflowY]),
						null == (l = v && v.display) && (l = Y.get(e, 'display')),
						'none' === (c = S.css(e, 'display')) &&
							(l
								? (c = l)
								: (le([e], !0),
								  (l = e.style.display || l),
								  (c = S.css(e, 'display')),
								  le([e]))),
						('inline' === c || ('inline-block' === c && null != l)) &&
							'none' === S.css(e, 'float') &&
							(u ||
								(p.done(function () {
									h.display = l
								}),
								null == l && ((c = h.display), (l = 'none' === c ? '' : c))),
							(h.display = 'inline-block'))),
					n.overflow &&
						((h.overflow = 'hidden'),
						p.always(function () {
							;(h.overflow = n.overflow[0]),
								(h.overflowX = n.overflow[1]),
								(h.overflowY = n.overflow[2])
						})),
					(u = !1),
					d))
						u ||
							(v
								? 'hidden' in v && (g = v.hidden)
								: (v = Y.access(e, 'fxshow', { display: l })),
							o && (v.hidden = !g),
							g && le([e], !0),
							p.done(function () {
								for (r in (g || le([e]), Y.remove(e, 'fxshow'), d))
									S.style(e, r, d[r])
							})),
							(u = ct(g ? v[r] : 0, r, p)),
							r in v ||
								((v[r] = u.start), g && ((u.end = u.start), (u.start = 0)))
			},
		],
		prefilter: function (e, t) {
			t ? ft.prefilters.unshift(e) : ft.prefilters.push(e)
		},
	})),
		(S.speed = function (e, t, n) {
			var r =
				e && 'object' == typeof e
					? S.extend({}, e)
					: {
							complete: n || (!n && t) || (m(e) && e),
							duration: e,
							easing: (n && t) || (t && !m(t) && t),
					  }
			return (
				S.fx.off
					? (r.duration = 0)
					: 'number' != typeof r.duration &&
					  (r.duration in S.fx.speeds
							? (r.duration = S.fx.speeds[r.duration])
							: (r.duration = S.fx.speeds._default)),
				(null != r.queue && !0 !== r.queue) || (r.queue = 'fx'),
				(r.old = r.complete),
				(r.complete = function () {
					m(r.old) && r.old.call(this), r.queue && S.dequeue(this, r.queue)
				}),
				r
			)
		}),
		S.fn.extend({
			fadeTo: function (e, t, n, r) {
				return this.filter(ae)
					.css('opacity', 0)
					.show()
					.end()
					.animate({ opacity: t }, e, n, r)
			},
			animate: function (t, e, n, r) {
				var i = S.isEmptyObject(t),
					o = S.speed(e, n, r),
					a = function () {
						var e = ft(this, S.extend({}, t), o)
						;(i || Y.get(this, 'finish')) && e.stop(!0)
					}
				return (
					(a.finish = a),
					i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
				)
			},
			stop: function (i, e, o) {
				var a = function (e) {
					var t = e.stop
					delete e.stop, t(o)
				}
				return (
					'string' != typeof i && ((o = e), (e = i), (i = void 0)),
					e && this.queue(i || 'fx', []),
					this.each(function () {
						var e = !0,
							t = null != i && i + 'queueHooks',
							n = S.timers,
							r = Y.get(this)
						if (t) r[t] && r[t].stop && a(r[t])
						else for (t in r) r[t] && r[t].stop && at.test(t) && a(r[t])
						for (t = n.length; t--; )
							n[t].elem !== this ||
								(null != i && n[t].queue !== i) ||
								(n[t].anim.stop(o), (e = !1), n.splice(t, 1))
						;(!e && o) || S.dequeue(this, i)
					})
				)
			},
			finish: function (a) {
				return (
					!1 !== a && (a = a || 'fx'),
					this.each(function () {
						var e,
							t = Y.get(this),
							n = t[a + 'queue'],
							r = t[a + 'queueHooks'],
							i = S.timers,
							o = n ? n.length : 0
						for (
							t.finish = !0,
								S.queue(this, a, []),
								r && r.stop && r.stop.call(this, !0),
								e = i.length;
							e--;

						)
							i[e].elem === this &&
								i[e].queue === a &&
								(i[e].anim.stop(!0), i.splice(e, 1))
						for (e = 0; e < o; e++)
							n[e] && n[e].finish && n[e].finish.call(this)
						delete t.finish
					})
				)
			},
		}),
		S.each(['toggle', 'show', 'hide'], function (e, r) {
			var i = S.fn[r]
			S.fn[r] = function (e, t, n) {
				return null == e || 'boolean' == typeof e
					? i.apply(this, arguments)
					: this.animate(lt(r, !0), e, t, n)
			}
		}),
		S.each(
			{
				slideDown: lt('show'),
				slideUp: lt('hide'),
				slideToggle: lt('toggle'),
				fadeIn: { opacity: 'show' },
				fadeOut: { opacity: 'hide' },
				fadeToggle: { opacity: 'toggle' },
			},
			function (e, r) {
				S.fn[e] = function (e, t, n) {
					return this.animate(r, e, t, n)
				}
			}
		),
		(S.timers = []),
		(S.fx.tick = function () {
			var e,
				t = 0,
				n = S.timers
			for (tt = Date.now(); t < n.length; t++)
				(e = n[t])() || n[t] !== e || n.splice(t--, 1)
			n.length || S.fx.stop(), (tt = void 0)
		}),
		(S.fx.timer = function (e) {
			S.timers.push(e), S.fx.start()
		}),
		(S.fx.interval = 13),
		(S.fx.start = function () {
			nt || ((nt = !0), st())
		}),
		(S.fx.stop = function () {
			nt = null
		}),
		(S.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
		(S.fn.delay = function (r, e) {
			return (
				(r = (S.fx && S.fx.speeds[r]) || r),
				(e = e || 'fx'),
				this.queue(e, function (e, t) {
					var n = C.setTimeout(e, r)
					t.stop = function () {
						C.clearTimeout(n)
					}
				})
			)
		}),
		(rt = E.createElement('input')),
		(it = E.createElement('select').appendChild(E.createElement('option'))),
		(rt.type = 'checkbox'),
		(y.checkOn = '' !== rt.value),
		(y.optSelected = it.selected),
		((rt = E.createElement('input')).value = 't'),
		(rt.type = 'radio'),
		(y.radioValue = 't' === rt.value)
	var pt,
		dt = S.expr.attrHandle
	S.fn.extend({
		attr: function (e, t) {
			return $(this, S.attr, e, t, 1 < arguments.length)
		},
		removeAttr: function (e) {
			return this.each(function () {
				S.removeAttr(this, e)
			})
		},
	}),
		S.extend({
			attr: function (e, t, n) {
				var r,
					i,
					o = e.nodeType
				if (3 !== o && 8 !== o && 2 !== o)
					return 'undefined' == typeof e.getAttribute
						? S.prop(e, t, n)
						: ((1 === o && S.isXMLDoc(e)) ||
								(i =
									S.attrHooks[t.toLowerCase()] ||
									(S.expr.match.bool.test(t) ? pt : void 0)),
						  void 0 !== n
								? null === n
									? void S.removeAttr(e, t)
									: i && 'set' in i && void 0 !== (r = i.set(e, n, t))
									? r
									: (e.setAttribute(t, n + ''), n)
								: i && 'get' in i && null !== (r = i.get(e, t))
								? r
								: null == (r = S.find.attr(e, t))
								? void 0
								: r)
			},
			attrHooks: {
				type: {
					set: function (e, t) {
						if (!y.radioValue && 'radio' === t && A(e, 'input')) {
							var n = e.value
							return e.setAttribute('type', t), n && (e.value = n), t
						}
					},
				},
			},
			removeAttr: function (e, t) {
				var n,
					r = 0,
					i = t && t.match(P)
				if (i && 1 === e.nodeType) while ((n = i[r++])) e.removeAttribute(n)
			},
		}),
		(pt = {
			set: function (e, t, n) {
				return !1 === t ? S.removeAttr(e, n) : e.setAttribute(n, n), n
			},
		}),
		S.each(S.expr.match.bool.source.match(/\w+/g), function (e, t) {
			var a = dt[t] || S.find.attr
			dt[t] = function (e, t, n) {
				var r,
					i,
					o = t.toLowerCase()
				return (
					n ||
						((i = dt[o]),
						(dt[o] = r),
						(r = null != a(e, t, n) ? o : null),
						(dt[o] = i)),
					r
				)
			}
		})
	var ht = /^(?:input|select|textarea|button)$/i,
		gt = /^(?:a|area)$/i
	function vt(e) {
		return (e.match(P) || []).join(' ')
	}
	function yt(e) {
		return (e.getAttribute && e.getAttribute('class')) || ''
	}
	function mt(e) {
		return Array.isArray(e) ? e : ('string' == typeof e && e.match(P)) || []
	}
	S.fn.extend({
		prop: function (e, t) {
			return $(this, S.prop, e, t, 1 < arguments.length)
		},
		removeProp: function (e) {
			return this.each(function () {
				delete this[S.propFix[e] || e]
			})
		},
	}),
		S.extend({
			prop: function (e, t, n) {
				var r,
					i,
					o = e.nodeType
				if (3 !== o && 8 !== o && 2 !== o)
					return (
						(1 === o && S.isXMLDoc(e)) ||
							((t = S.propFix[t] || t), (i = S.propHooks[t])),
						void 0 !== n
							? i && 'set' in i && void 0 !== (r = i.set(e, n, t))
								? r
								: (e[t] = n)
							: i && 'get' in i && null !== (r = i.get(e, t))
							? r
							: e[t]
					)
			},
			propHooks: {
				tabIndex: {
					get: function (e) {
						var t = S.find.attr(e, 'tabindex')
						return t
							? parseInt(t, 10)
							: ht.test(e.nodeName) || (gt.test(e.nodeName) && e.href)
							? 0
							: -1
					},
				},
			},
			propFix: { for: 'htmlFor', class: 'className' },
		}),
		y.optSelected ||
			(S.propHooks.selected = {
				get: function (e) {
					var t = e.parentNode
					return t && t.parentNode && t.parentNode.selectedIndex, null
				},
				set: function (e) {
					var t = e.parentNode
					t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
				},
			}),
		S.each(
			[
				'tabIndex',
				'readOnly',
				'maxLength',
				'cellSpacing',
				'cellPadding',
				'rowSpan',
				'colSpan',
				'useMap',
				'frameBorder',
				'contentEditable',
			],
			function () {
				S.propFix[this.toLowerCase()] = this
			}
		),
		S.fn.extend({
			addClass: function (t) {
				var e,
					n,
					r,
					i,
					o,
					a,
					s,
					u = 0
				if (m(t))
					return this.each(function (e) {
						S(this).addClass(t.call(this, e, yt(this)))
					})
				if ((e = mt(t)).length)
					while ((n = this[u++]))
						if (((i = yt(n)), (r = 1 === n.nodeType && ' ' + vt(i) + ' '))) {
							a = 0
							while ((o = e[a++]))
								r.indexOf(' ' + o + ' ') < 0 && (r += o + ' ')
							i !== (s = vt(r)) && n.setAttribute('class', s)
						}
				return this
			},
			removeClass: function (t) {
				var e,
					n,
					r,
					i,
					o,
					a,
					s,
					u = 0
				if (m(t))
					return this.each(function (e) {
						S(this).removeClass(t.call(this, e, yt(this)))
					})
				if (!arguments.length) return this.attr('class', '')
				if ((e = mt(t)).length)
					while ((n = this[u++]))
						if (((i = yt(n)), (r = 1 === n.nodeType && ' ' + vt(i) + ' '))) {
							a = 0
							while ((o = e[a++]))
								while (-1 < r.indexOf(' ' + o + ' '))
									r = r.replace(' ' + o + ' ', ' ')
							i !== (s = vt(r)) && n.setAttribute('class', s)
						}
				return this
			},
			toggleClass: function (i, t) {
				var o = typeof i,
					a = 'string' === o || Array.isArray(i)
				return 'boolean' == typeof t && a
					? t
						? this.addClass(i)
						: this.removeClass(i)
					: m(i)
					? this.each(function (e) {
							S(this).toggleClass(i.call(this, e, yt(this), t), t)
					  })
					: this.each(function () {
							var e, t, n, r
							if (a) {
								;(t = 0), (n = S(this)), (r = mt(i))
								while ((e = r[t++]))
									n.hasClass(e) ? n.removeClass(e) : n.addClass(e)
							} else (void 0 !== i && 'boolean' !== o) || ((e = yt(this)) && Y.set(this, '__className__', e), this.setAttribute && this.setAttribute('class', e || !1 === i ? '' : Y.get(this, '__className__') || ''))
					  })
			},
			hasClass: function (e) {
				var t,
					n,
					r = 0
				t = ' ' + e + ' '
				while ((n = this[r++]))
					if (1 === n.nodeType && -1 < (' ' + vt(yt(n)) + ' ').indexOf(t))
						return !0
				return !1
			},
		})
	var xt = /\r/g
	S.fn.extend({
		val: function (n) {
			var r,
				e,
				i,
				t = this[0]
			return arguments.length
				? ((i = m(n)),
				  this.each(function (e) {
						var t
						1 === this.nodeType &&
							(null == (t = i ? n.call(this, e, S(this).val()) : n)
								? (t = '')
								: 'number' == typeof t
								? (t += '')
								: Array.isArray(t) &&
								  (t = S.map(t, function (e) {
										return null == e ? '' : e + ''
								  })),
							((r =
								S.valHooks[this.type] ||
								S.valHooks[this.nodeName.toLowerCase()]) &&
								'set' in r &&
								void 0 !== r.set(this, t, 'value')) ||
								(this.value = t))
				  }))
				: t
				? (r = S.valHooks[t.type] || S.valHooks[t.nodeName.toLowerCase()]) &&
				  'get' in r &&
				  void 0 !== (e = r.get(t, 'value'))
					? e
					: 'string' == typeof (e = t.value)
					? e.replace(xt, '')
					: null == e
					? ''
					: e
				: void 0
		},
	}),
		S.extend({
			valHooks: {
				option: {
					get: function (e) {
						var t = S.find.attr(e, 'value')
						return null != t ? t : vt(S.text(e))
					},
				},
				select: {
					get: function (e) {
						var t,
							n,
							r,
							i = e.options,
							o = e.selectedIndex,
							a = 'select-one' === e.type,
							s = a ? null : [],
							u = a ? o + 1 : i.length
						for (r = o < 0 ? u : a ? o : 0; r < u; r++)
							if (
								((n = i[r]).selected || r === o) &&
								!n.disabled &&
								(!n.parentNode.disabled || !A(n.parentNode, 'optgroup'))
							) {
								if (((t = S(n).val()), a)) return t
								s.push(t)
							}
						return s
					},
					set: function (e, t) {
						var n,
							r,
							i = e.options,
							o = S.makeArray(t),
							a = i.length
						while (a--)
							((r = i[a]).selected =
								-1 < S.inArray(S.valHooks.option.get(r), o)) && (n = !0)
						return n || (e.selectedIndex = -1), o
					},
				},
			},
		}),
		S.each(['radio', 'checkbox'], function () {
			;(S.valHooks[this] = {
				set: function (e, t) {
					if (Array.isArray(t))
						return (e.checked = -1 < S.inArray(S(e).val(), t))
				},
			}),
				y.checkOn ||
					(S.valHooks[this].get = function (e) {
						return null === e.getAttribute('value') ? 'on' : e.value
					})
		}),
		(y.focusin = 'onfocusin' in C)
	var bt = /^(?:focusinfocus|focusoutblur)$/,
		wt = function (e) {
			e.stopPropagation()
		}
	S.extend(S.event, {
		trigger: function (e, t, n, r) {
			var i,
				o,
				a,
				s,
				u,
				l,
				c,
				f,
				p = [n || E],
				d = v.call(e, 'type') ? e.type : e,
				h = v.call(e, 'namespace') ? e.namespace.split('.') : []
			if (
				((o = f = a = n = n || E),
				3 !== n.nodeType &&
					8 !== n.nodeType &&
					!bt.test(d + S.event.triggered) &&
					(-1 < d.indexOf('.') && ((d = (h = d.split('.')).shift()), h.sort()),
					(u = d.indexOf(':') < 0 && 'on' + d),
					((e = e[S.expando]
						? e
						: new S.Event(d, 'object' == typeof e && e)).isTrigger = r ? 2 : 3),
					(e.namespace = h.join('.')),
					(e.rnamespace = e.namespace
						? new RegExp('(^|\\.)' + h.join('\\.(?:.*\\.|)') + '(\\.|$)')
						: null),
					(e.result = void 0),
					e.target || (e.target = n),
					(t = null == t ? [e] : S.makeArray(t, [e])),
					(c = S.event.special[d] || {}),
					r || !c.trigger || !1 !== c.trigger.apply(n, t)))
			) {
				if (!r && !c.noBubble && !x(n)) {
					for (
						s = c.delegateType || d, bt.test(s + d) || (o = o.parentNode);
						o;
						o = o.parentNode
					)
						p.push(o), (a = o)
					a === (n.ownerDocument || E) &&
						p.push(a.defaultView || a.parentWindow || C)
				}
				i = 0
				while ((o = p[i++]) && !e.isPropagationStopped())
					(f = o),
						(e.type = 1 < i ? s : c.bindType || d),
						(l =
							(Y.get(o, 'events') || Object.create(null))[e.type] &&
							Y.get(o, 'handle')) && l.apply(o, t),
						(l = u && o[u]) &&
							l.apply &&
							V(o) &&
							((e.result = l.apply(o, t)),
							!1 === e.result && e.preventDefault())
				return (
					(e.type = d),
					r ||
						e.isDefaultPrevented() ||
						(c._default && !1 !== c._default.apply(p.pop(), t)) ||
						!V(n) ||
						(u &&
							m(n[d]) &&
							!x(n) &&
							((a = n[u]) && (n[u] = null),
							(S.event.triggered = d),
							e.isPropagationStopped() && f.addEventListener(d, wt),
							n[d](),
							e.isPropagationStopped() && f.removeEventListener(d, wt),
							(S.event.triggered = void 0),
							a && (n[u] = a))),
					e.result
				)
			}
		},
		simulate: function (e, t, n) {
			var r = S.extend(new S.Event(), n, { type: e, isSimulated: !0 })
			S.event.trigger(r, null, t)
		},
	}),
		S.fn.extend({
			trigger: function (e, t) {
				return this.each(function () {
					S.event.trigger(e, t, this)
				})
			},
			triggerHandler: function (e, t) {
				var n = this[0]
				if (n) return S.event.trigger(e, t, n, !0)
			},
		}),
		y.focusin ||
			S.each({ focus: 'focusin', blur: 'focusout' }, function (n, r) {
				var i = function (e) {
					S.event.simulate(r, e.target, S.event.fix(e))
				}
				S.event.special[r] = {
					setup: function () {
						var e = this.ownerDocument || this.document || this,
							t = Y.access(e, r)
						t || e.addEventListener(n, i, !0), Y.access(e, r, (t || 0) + 1)
					},
					teardown: function () {
						var e = this.ownerDocument || this.document || this,
							t = Y.access(e, r) - 1
						t
							? Y.access(e, r, t)
							: (e.removeEventListener(n, i, !0), Y.remove(e, r))
					},
				}
			})
	var Tt = C.location,
		Ct = { guid: Date.now() },
		Et = /\?/
	S.parseXML = function (e) {
		var t
		if (!e || 'string' != typeof e) return null
		try {
			t = new C.DOMParser().parseFromString(e, 'text/xml')
		} catch (e) {
			t = void 0
		}
		return (
			(t && !t.getElementsByTagName('parsererror').length) ||
				S.error('Invalid XML: ' + e),
			t
		)
	}
	var St = /\[\]$/,
		kt = /\r?\n/g,
		At = /^(?:submit|button|image|reset|file)$/i,
		Nt = /^(?:input|select|textarea|keygen)/i
	function Dt(n, e, r, i) {
		var t
		if (Array.isArray(e))
			S.each(e, function (e, t) {
				r || St.test(n)
					? i(n, t)
					: Dt(
							n + '[' + ('object' == typeof t && null != t ? e : '') + ']',
							t,
							r,
							i
					  )
			})
		else if (r || 'object' !== w(e)) i(n, e)
		else for (t in e) Dt(n + '[' + t + ']', e[t], r, i)
	}
	;(S.param = function (e, t) {
		var n,
			r = [],
			i = function (e, t) {
				var n = m(t) ? t() : t
				r[r.length] =
					encodeURIComponent(e) + '=' + encodeURIComponent(null == n ? '' : n)
			}
		if (null == e) return ''
		if (Array.isArray(e) || (e.jquery && !S.isPlainObject(e)))
			S.each(e, function () {
				i(this.name, this.value)
			})
		else for (n in e) Dt(n, e[n], t, i)
		return r.join('&')
	}),
		S.fn.extend({
			serialize: function () {
				return S.param(this.serializeArray())
			},
			serializeArray: function () {
				return this.map(function () {
					var e = S.prop(this, 'elements')
					return e ? S.makeArray(e) : this
				})
					.filter(function () {
						var e = this.type
						return (
							this.name &&
							!S(this).is(':disabled') &&
							Nt.test(this.nodeName) &&
							!At.test(e) &&
							(this.checked || !pe.test(e))
						)
					})
					.map(function (e, t) {
						var n = S(this).val()
						return null == n
							? null
							: Array.isArray(n)
							? S.map(n, function (e) {
									return { name: t.name, value: e.replace(kt, '\r\n') }
							  })
							: { name: t.name, value: n.replace(kt, '\r\n') }
					})
					.get()
			},
		})
	var jt = /%20/g,
		qt = /#.*$/,
		Lt = /([?&])_=[^&]*/,
		Ht = /^(.*?):[ \t]*([^\r\n]*)$/gm,
		Ot = /^(?:GET|HEAD)$/,
		Pt = /^\/\//,
		Rt = {},
		Mt = {},
		It = '*/'.concat('*'),
		Wt = E.createElement('a')
	function Ft(o) {
		return function (e, t) {
			'string' != typeof e && ((t = e), (e = '*'))
			var n,
				r = 0,
				i = e.toLowerCase().match(P) || []
			if (m(t))
				while ((n = i[r++]))
					'+' === n[0]
						? ((n = n.slice(1) || '*'), (o[n] = o[n] || []).unshift(t))
						: (o[n] = o[n] || []).push(t)
		}
	}
	function Bt(t, i, o, a) {
		var s = {},
			u = t === Mt
		function l(e) {
			var r
			return (
				(s[e] = !0),
				S.each(t[e] || [], function (e, t) {
					var n = t(i, o, a)
					return 'string' != typeof n || u || s[n]
						? u
							? !(r = n)
							: void 0
						: (i.dataTypes.unshift(n), l(n), !1)
				}),
				r
			)
		}
		return l(i.dataTypes[0]) || (!s['*'] && l('*'))
	}
	function $t(e, t) {
		var n,
			r,
			i = S.ajaxSettings.flatOptions || {}
		for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n])
		return r && S.extend(!0, e, r), e
	}
	;(Wt.href = Tt.href),
		S.extend({
			active: 0,
			lastModified: {},
			etag: {},
			ajaxSettings: {
				url: Tt.href,
				type: 'GET',
				isLocal:
					/^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(
						Tt.protocol
					),
				global: !0,
				processData: !0,
				async: !0,
				contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
				accepts: {
					'*': It,
					text: 'text/plain',
					html: 'text/html',
					xml: 'application/xml, text/xml',
					json: 'application/json, text/javascript',
				},
				contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
				responseFields: {
					xml: 'responseXML',
					text: 'responseText',
					json: 'responseJSON',
				},
				converters: {
					'* text': String,
					'text html': !0,
					'text json': JSON.parse,
					'text xml': S.parseXML,
				},
				flatOptions: { url: !0, context: !0 },
			},
			ajaxSetup: function (e, t) {
				return t ? $t($t(e, S.ajaxSettings), t) : $t(S.ajaxSettings, e)
			},
			ajaxPrefilter: Ft(Rt),
			ajaxTransport: Ft(Mt),
			ajax: function (e, t) {
				'object' == typeof e && ((t = e), (e = void 0)), (t = t || {})
				var c,
					f,
					p,
					n,
					d,
					r,
					h,
					g,
					i,
					o,
					v = S.ajaxSetup({}, t),
					y = v.context || v,
					m = v.context && (y.nodeType || y.jquery) ? S(y) : S.event,
					x = S.Deferred(),
					b = S.Callbacks('once memory'),
					w = v.statusCode || {},
					a = {},
					s = {},
					u = 'canceled',
					T = {
						readyState: 0,
						getResponseHeader: function (e) {
							var t
							if (h) {
								if (!n) {
									n = {}
									while ((t = Ht.exec(p)))
										n[t[1].toLowerCase() + ' '] = (
											n[t[1].toLowerCase() + ' '] || []
										).concat(t[2])
								}
								t = n[e.toLowerCase() + ' ']
							}
							return null == t ? null : t.join(', ')
						},
						getAllResponseHeaders: function () {
							return h ? p : null
						},
						setRequestHeader: function (e, t) {
							return (
								null == h &&
									((e = s[e.toLowerCase()] = s[e.toLowerCase()] || e),
									(a[e] = t)),
								this
							)
						},
						overrideMimeType: function (e) {
							return null == h && (v.mimeType = e), this
						},
						statusCode: function (e) {
							var t
							if (e)
								if (h) T.always(e[T.status])
								else for (t in e) w[t] = [w[t], e[t]]
							return this
						},
						abort: function (e) {
							var t = e || u
							return c && c.abort(t), l(0, t), this
						},
					}
				if (
					(x.promise(T),
					(v.url = ((e || v.url || Tt.href) + '').replace(
						Pt,
						Tt.protocol + '//'
					)),
					(v.type = t.method || t.type || v.method || v.type),
					(v.dataTypes = (v.dataType || '*').toLowerCase().match(P) || ['']),
					null == v.crossDomain)
				) {
					r = E.createElement('a')
					try {
						;(r.href = v.url),
							(r.href = r.href),
							(v.crossDomain =
								Wt.protocol + '//' + Wt.host != r.protocol + '//' + r.host)
					} catch (e) {
						v.crossDomain = !0
					}
				}
				if (
					(v.data &&
						v.processData &&
						'string' != typeof v.data &&
						(v.data = S.param(v.data, v.traditional)),
					Bt(Rt, v, t, T),
					h)
				)
					return T
				for (i in ((g = S.event && v.global) &&
					0 == S.active++ &&
					S.event.trigger('ajaxStart'),
				(v.type = v.type.toUpperCase()),
				(v.hasContent = !Ot.test(v.type)),
				(f = v.url.replace(qt, '')),
				v.hasContent
					? v.data &&
					  v.processData &&
					  0 ===
							(v.contentType || '').indexOf(
								'application/x-www-form-urlencoded'
							) &&
					  (v.data = v.data.replace(jt, '+'))
					: ((o = v.url.slice(f.length)),
					  v.data &&
							(v.processData || 'string' == typeof v.data) &&
							((f += (Et.test(f) ? '&' : '?') + v.data), delete v.data),
					  !1 === v.cache &&
							((f = f.replace(Lt, '$1')),
							(o = (Et.test(f) ? '&' : '?') + '_=' + Ct.guid++ + o)),
					  (v.url = f + o)),
				v.ifModified &&
					(S.lastModified[f] &&
						T.setRequestHeader('If-Modified-Since', S.lastModified[f]),
					S.etag[f] && T.setRequestHeader('If-None-Match', S.etag[f])),
				((v.data && v.hasContent && !1 !== v.contentType) || t.contentType) &&
					T.setRequestHeader('Content-Type', v.contentType),
				T.setRequestHeader(
					'Accept',
					v.dataTypes[0] && v.accepts[v.dataTypes[0]]
						? v.accepts[v.dataTypes[0]] +
								('*' !== v.dataTypes[0] ? ', ' + It + '; q=0.01' : '')
						: v.accepts['*']
				),
				v.headers))
					T.setRequestHeader(i, v.headers[i])
				if (v.beforeSend && (!1 === v.beforeSend.call(y, T, v) || h))
					return T.abort()
				if (
					((u = 'abort'),
					b.add(v.complete),
					T.done(v.success),
					T.fail(v.error),
					(c = Bt(Mt, v, t, T)))
				) {
					if (((T.readyState = 1), g && m.trigger('ajaxSend', [T, v]), h))
						return T
					v.async &&
						0 < v.timeout &&
						(d = C.setTimeout(function () {
							T.abort('timeout')
						}, v.timeout))
					try {
						;(h = !1), c.send(a, l)
					} catch (e) {
						if (h) throw e
						l(-1, e)
					}
				} else l(-1, 'No Transport')
				function l(e, t, n, r) {
					var i,
						o,
						a,
						s,
						u,
						l = t
					h ||
						((h = !0),
						d && C.clearTimeout(d),
						(c = void 0),
						(p = r || ''),
						(T.readyState = 0 < e ? 4 : 0),
						(i = (200 <= e && e < 300) || 304 === e),
						n &&
							(s = (function (e, t, n) {
								var r,
									i,
									o,
									a,
									s = e.contents,
									u = e.dataTypes
								while ('*' === u[0])
									u.shift(),
										void 0 === r &&
											(r = e.mimeType || t.getResponseHeader('Content-Type'))
								if (r)
									for (i in s)
										if (s[i] && s[i].test(r)) {
											u.unshift(i)
											break
										}
								if (u[0] in n) o = u[0]
								else {
									for (i in n) {
										if (!u[0] || e.converters[i + ' ' + u[0]]) {
											o = i
											break
										}
										a || (a = i)
									}
									o = o || a
								}
								if (o) return o !== u[0] && u.unshift(o), n[o]
							})(v, T, n)),
						!i &&
							-1 < S.inArray('script', v.dataTypes) &&
							(v.converters['text script'] = function () {}),
						(s = (function (e, t, n, r) {
							var i,
								o,
								a,
								s,
								u,
								l = {},
								c = e.dataTypes.slice()
							if (c[1])
								for (a in e.converters) l[a.toLowerCase()] = e.converters[a]
							o = c.shift()
							while (o)
								if (
									(e.responseFields[o] && (n[e.responseFields[o]] = t),
									!u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
									(u = o),
									(o = c.shift()))
								)
									if ('*' === o) o = u
									else if ('*' !== u && u !== o) {
										if (!(a = l[u + ' ' + o] || l['* ' + o]))
											for (i in l)
												if (
													(s = i.split(' '))[1] === o &&
													(a = l[u + ' ' + s[0]] || l['* ' + s[0]])
												) {
													!0 === a
														? (a = l[i])
														: !0 !== l[i] && ((o = s[0]), c.unshift(s[1]))
													break
												}
										if (!0 !== a)
											if (a && e['throws']) t = a(t)
											else
												try {
													t = a(t)
												} catch (e) {
													return {
														state: 'parsererror',
														error: a
															? e
															: 'No conversion from ' + u + ' to ' + o,
													}
												}
									}
							return { state: 'success', data: t }
						})(v, s, T, i)),
						i
							? (v.ifModified &&
									((u = T.getResponseHeader('Last-Modified')) &&
										(S.lastModified[f] = u),
									(u = T.getResponseHeader('etag')) && (S.etag[f] = u)),
							  204 === e || 'HEAD' === v.type
									? (l = 'nocontent')
									: 304 === e
									? (l = 'notmodified')
									: ((l = s.state), (o = s.data), (i = !(a = s.error))))
							: ((a = l), (!e && l) || ((l = 'error'), e < 0 && (e = 0))),
						(T.status = e),
						(T.statusText = (t || l) + ''),
						i ? x.resolveWith(y, [o, l, T]) : x.rejectWith(y, [T, l, a]),
						T.statusCode(w),
						(w = void 0),
						g && m.trigger(i ? 'ajaxSuccess' : 'ajaxError', [T, v, i ? o : a]),
						b.fireWith(y, [T, l]),
						g &&
							(m.trigger('ajaxComplete', [T, v]),
							--S.active || S.event.trigger('ajaxStop')))
				}
				return T
			},
			getJSON: function (e, t, n) {
				return S.get(e, t, n, 'json')
			},
			getScript: function (e, t) {
				return S.get(e, void 0, t, 'script')
			},
		}),
		S.each(['get', 'post'], function (e, i) {
			S[i] = function (e, t, n, r) {
				return (
					m(t) && ((r = r || n), (n = t), (t = void 0)),
					S.ajax(
						S.extend(
							{ url: e, type: i, dataType: r, data: t, success: n },
							S.isPlainObject(e) && e
						)
					)
				)
			}
		}),
		S.ajaxPrefilter(function (e) {
			var t
			for (t in e.headers)
				'content-type' === t.toLowerCase() &&
					(e.contentType = e.headers[t] || '')
		}),
		(S._evalUrl = function (e, t, n) {
			return S.ajax({
				url: e,
				type: 'GET',
				dataType: 'script',
				cache: !0,
				async: !1,
				global: !1,
				converters: { 'text script': function () {} },
				dataFilter: function (e) {
					S.globalEval(e, t, n)
				},
			})
		}),
		S.fn.extend({
			wrapAll: function (e) {
				var t
				return (
					this[0] &&
						(m(e) && (e = e.call(this[0])),
						(t = S(e, this[0].ownerDocument).eq(0).clone(!0)),
						this[0].parentNode && t.insertBefore(this[0]),
						t
							.map(function () {
								var e = this
								while (e.firstElementChild) e = e.firstElementChild
								return e
							})
							.append(this)),
					this
				)
			},
			wrapInner: function (n) {
				return m(n)
					? this.each(function (e) {
							S(this).wrapInner(n.call(this, e))
					  })
					: this.each(function () {
							var e = S(this),
								t = e.contents()
							t.length ? t.wrapAll(n) : e.append(n)
					  })
			},
			wrap: function (t) {
				var n = m(t)
				return this.each(function (e) {
					S(this).wrapAll(n ? t.call(this, e) : t)
				})
			},
			unwrap: function (e) {
				return (
					this.parent(e)
						.not('body')
						.each(function () {
							S(this).replaceWith(this.childNodes)
						}),
					this
				)
			},
		}),
		(S.expr.pseudos.hidden = function (e) {
			return !S.expr.pseudos.visible(e)
		}),
		(S.expr.pseudos.visible = function (e) {
			return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
		}),
		(S.ajaxSettings.xhr = function () {
			try {
				return new C.XMLHttpRequest()
			} catch (e) {}
		})
	var _t = { 0: 200, 1223: 204 },
		zt = S.ajaxSettings.xhr()
	;(y.cors = !!zt && 'withCredentials' in zt),
		(y.ajax = zt = !!zt),
		S.ajaxTransport(function (i) {
			var o, a
			if (y.cors || (zt && !i.crossDomain))
				return {
					send: function (e, t) {
						var n,
							r = i.xhr()
						if (
							(r.open(i.type, i.url, i.async, i.username, i.password),
							i.xhrFields)
						)
							for (n in i.xhrFields) r[n] = i.xhrFields[n]
						for (n in (i.mimeType &&
							r.overrideMimeType &&
							r.overrideMimeType(i.mimeType),
						i.crossDomain ||
							e['X-Requested-With'] ||
							(e['X-Requested-With'] = 'XMLHttpRequest'),
						e))
							r.setRequestHeader(n, e[n])
						;(o = function (e) {
							return function () {
								o &&
									((o =
										a =
										r.onload =
										r.onerror =
										r.onabort =
										r.ontimeout =
										r.onreadystatechange =
											null),
									'abort' === e
										? r.abort()
										: 'error' === e
										? 'number' != typeof r.status
											? t(0, 'error')
											: t(r.status, r.statusText)
										: t(
												_t[r.status] || r.status,
												r.statusText,
												'text' !== (r.responseType || 'text') ||
													'string' != typeof r.responseText
													? { binary: r.response }
													: { text: r.responseText },
												r.getAllResponseHeaders()
										  ))
							}
						}),
							(r.onload = o()),
							(a = r.onerror = r.ontimeout = o('error')),
							void 0 !== r.onabort
								? (r.onabort = a)
								: (r.onreadystatechange = function () {
										4 === r.readyState &&
											C.setTimeout(function () {
												o && a()
											})
								  }),
							(o = o('abort'))
						try {
							r.send((i.hasContent && i.data) || null)
						} catch (e) {
							if (o) throw e
						}
					},
					abort: function () {
						o && o()
					},
				}
		}),
		S.ajaxPrefilter(function (e) {
			e.crossDomain && (e.contents.script = !1)
		}),
		S.ajaxSetup({
			accepts: {
				script:
					'text/javascript, application/javascript, application/ecmascript, application/x-ecmascript',
			},
			contents: { script: /\b(?:java|ecma)script\b/ },
			converters: {
				'text script': function (e) {
					return S.globalEval(e), e
				},
			},
		}),
		S.ajaxPrefilter('script', function (e) {
			void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = 'GET')
		}),
		S.ajaxTransport('script', function (n) {
			var r, i
			if (n.crossDomain || n.scriptAttrs)
				return {
					send: function (e, t) {
						;(r = S('<script>')
							.attr(n.scriptAttrs || {})
							.prop({ charset: n.scriptCharset, src: n.url })
							.on(
								'load error',
								(i = function (e) {
									r.remove(),
										(i = null),
										e && t('error' === e.type ? 404 : 200, e.type)
								})
							)),
							E.head.appendChild(r[0])
					},
					abort: function () {
						i && i()
					},
				}
		})
	var Ut,
		Xt = [],
		Vt = /(=)\?(?=&|$)|\?\?/
	S.ajaxSetup({
		jsonp: 'callback',
		jsonpCallback: function () {
			var e = Xt.pop() || S.expando + '_' + Ct.guid++
			return (this[e] = !0), e
		},
	}),
		S.ajaxPrefilter('json jsonp', function (e, t, n) {
			var r,
				i,
				o,
				a =
					!1 !== e.jsonp &&
					(Vt.test(e.url)
						? 'url'
						: 'string' == typeof e.data &&
						  0 ===
								(e.contentType || '').indexOf(
									'application/x-www-form-urlencoded'
								) &&
						  Vt.test(e.data) &&
						  'data')
			if (a || 'jsonp' === e.dataTypes[0])
				return (
					(r = e.jsonpCallback =
						m(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback),
					a
						? (e[a] = e[a].replace(Vt, '$1' + r))
						: !1 !== e.jsonp &&
						  (e.url += (Et.test(e.url) ? '&' : '?') + e.jsonp + '=' + r),
					(e.converters['script json'] = function () {
						return o || S.error(r + ' was not called'), o[0]
					}),
					(e.dataTypes[0] = 'json'),
					(i = C[r]),
					(C[r] = function () {
						o = arguments
					}),
					n.always(function () {
						void 0 === i ? S(C).removeProp(r) : (C[r] = i),
							e[r] && ((e.jsonpCallback = t.jsonpCallback), Xt.push(r)),
							o && m(i) && i(o[0]),
							(o = i = void 0)
					}),
					'script'
				)
		}),
		(y.createHTMLDocument =
			(((Ut = E.implementation.createHTMLDocument('').body).innerHTML =
				'<form></form><form></form>'),
			2 === Ut.childNodes.length)),
		(S.parseHTML = function (e, t, n) {
			return 'string' != typeof e
				? []
				: ('boolean' == typeof t && ((n = t), (t = !1)),
				  t ||
						(y.createHTMLDocument
							? (((r = (t =
									E.implementation.createHTMLDocument('')).createElement(
									'base'
							  )).href = E.location.href),
							  t.head.appendChild(r))
							: (t = E)),
				  (o = !n && []),
				  (i = N.exec(e))
						? [t.createElement(i[1])]
						: ((i = xe([e], t, o)),
						  o && o.length && S(o).remove(),
						  S.merge([], i.childNodes)))
			var r, i, o
		}),
		(S.fn.load = function (e, t, n) {
			var r,
				i,
				o,
				a = this,
				s = e.indexOf(' ')
			return (
				-1 < s && ((r = vt(e.slice(s))), (e = e.slice(0, s))),
				m(t)
					? ((n = t), (t = void 0))
					: t && 'object' == typeof t && (i = 'POST'),
				0 < a.length &&
					S.ajax({ url: e, type: i || 'GET', dataType: 'html', data: t })
						.done(function (e) {
							;(o = arguments),
								a.html(r ? S('<div>').append(S.parseHTML(e)).find(r) : e)
						})
						.always(
							n &&
								function (e, t) {
									a.each(function () {
										n.apply(this, o || [e.responseText, t, e])
									})
								}
						),
				this
			)
		}),
		(S.expr.pseudos.animated = function (t) {
			return S.grep(S.timers, function (e) {
				return t === e.elem
			}).length
		}),
		(S.offset = {
			setOffset: function (e, t, n) {
				var r,
					i,
					o,
					a,
					s,
					u,
					l = S.css(e, 'position'),
					c = S(e),
					f = {}
				'static' === l && (e.style.position = 'relative'),
					(s = c.offset()),
					(o = S.css(e, 'top')),
					(u = S.css(e, 'left')),
					('absolute' === l || 'fixed' === l) && -1 < (o + u).indexOf('auto')
						? ((a = (r = c.position()).top), (i = r.left))
						: ((a = parseFloat(o) || 0), (i = parseFloat(u) || 0)),
					m(t) && (t = t.call(e, n, S.extend({}, s))),
					null != t.top && (f.top = t.top - s.top + a),
					null != t.left && (f.left = t.left - s.left + i),
					'using' in t
						? t.using.call(e, f)
						: ('number' == typeof f.top && (f.top += 'px'),
						  'number' == typeof f.left && (f.left += 'px'),
						  c.css(f))
			},
		}),
		S.fn.extend({
			offset: function (t) {
				if (arguments.length)
					return void 0 === t
						? this
						: this.each(function (e) {
								S.offset.setOffset(this, t, e)
						  })
				var e,
					n,
					r = this[0]
				return r
					? r.getClientRects().length
						? ((e = r.getBoundingClientRect()),
						  (n = r.ownerDocument.defaultView),
						  { top: e.top + n.pageYOffset, left: e.left + n.pageXOffset })
						: { top: 0, left: 0 }
					: void 0
			},
			position: function () {
				if (this[0]) {
					var e,
						t,
						n,
						r = this[0],
						i = { top: 0, left: 0 }
					if ('fixed' === S.css(r, 'position')) t = r.getBoundingClientRect()
					else {
						;(t = this.offset()),
							(n = r.ownerDocument),
							(e = r.offsetParent || n.documentElement)
						while (
							e &&
							(e === n.body || e === n.documentElement) &&
							'static' === S.css(e, 'position')
						)
							e = e.parentNode
						e &&
							e !== r &&
							1 === e.nodeType &&
							(((i = S(e).offset()).top += S.css(e, 'borderTopWidth', !0)),
							(i.left += S.css(e, 'borderLeftWidth', !0)))
					}
					return {
						top: t.top - i.top - S.css(r, 'marginTop', !0),
						left: t.left - i.left - S.css(r, 'marginLeft', !0),
					}
				}
			},
			offsetParent: function () {
				return this.map(function () {
					var e = this.offsetParent
					while (e && 'static' === S.css(e, 'position')) e = e.offsetParent
					return e || re
				})
			},
		}),
		S.each(
			{ scrollLeft: 'pageXOffset', scrollTop: 'pageYOffset' },
			function (t, i) {
				var o = 'pageYOffset' === i
				S.fn[t] = function (e) {
					return $(
						this,
						function (e, t, n) {
							var r
							if (
								(x(e) ? (r = e) : 9 === e.nodeType && (r = e.defaultView),
								void 0 === n)
							)
								return r ? r[i] : e[t]
							r
								? r.scrollTo(o ? r.pageXOffset : n, o ? n : r.pageYOffset)
								: (e[t] = n)
						},
						t,
						e,
						arguments.length
					)
				}
			}
		),
		S.each(['top', 'left'], function (e, n) {
			S.cssHooks[n] = $e(y.pixelPosition, function (e, t) {
				if (t) return (t = Be(e, n)), Me.test(t) ? S(e).position()[n] + 'px' : t
			})
		}),
		S.each({ Height: 'height', Width: 'width' }, function (a, s) {
			S.each(
				{ padding: 'inner' + a, content: s, '': 'outer' + a },
				function (r, o) {
					S.fn[o] = function (e, t) {
						var n = arguments.length && (r || 'boolean' != typeof e),
							i = r || (!0 === e || !0 === t ? 'margin' : 'border')
						return $(
							this,
							function (e, t, n) {
								var r
								return x(e)
									? 0 === o.indexOf('outer')
										? e['inner' + a]
										: e.document.documentElement['client' + a]
									: 9 === e.nodeType
									? ((r = e.documentElement),
									  Math.max(
											e.body['scroll' + a],
											r['scroll' + a],
											e.body['offset' + a],
											r['offset' + a],
											r['client' + a]
									  ))
									: void 0 === n
									? S.css(e, t, i)
									: S.style(e, t, n, i)
							},
							s,
							n ? e : void 0,
							n
						)
					}
				}
			)
		}),
		S.each(
			[
				'ajaxStart',
				'ajaxStop',
				'ajaxComplete',
				'ajaxError',
				'ajaxSuccess',
				'ajaxSend',
			],
			function (e, t) {
				S.fn[t] = function (e) {
					return this.on(t, e)
				}
			}
		),
		S.fn.extend({
			bind: function (e, t, n) {
				return this.on(e, null, t, n)
			},
			unbind: function (e, t) {
				return this.off(e, null, t)
			},
			delegate: function (e, t, n, r) {
				return this.on(t, e, n, r)
			},
			undelegate: function (e, t, n) {
				return 1 === arguments.length
					? this.off(e, '**')
					: this.off(t, e || '**', n)
			},
			hover: function (e, t) {
				return this.mouseenter(e).mouseleave(t || e)
			},
		}),
		S.each(
			'blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu'.split(
				' '
			),
			function (e, n) {
				S.fn[n] = function (e, t) {
					return 0 < arguments.length ? this.on(n, null, e, t) : this.trigger(n)
				}
			}
		)
	var Gt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g
	;(S.proxy = function (e, t) {
		var n, r, i
		if (('string' == typeof t && ((n = e[t]), (t = e), (e = n)), m(e)))
			return (
				(r = s.call(arguments, 2)),
				((i = function () {
					return e.apply(t || this, r.concat(s.call(arguments)))
				}).guid = e.guid =
					e.guid || S.guid++),
				i
			)
	}),
		(S.holdReady = function (e) {
			e ? S.readyWait++ : S.ready(!0)
		}),
		(S.isArray = Array.isArray),
		(S.parseJSON = JSON.parse),
		(S.nodeName = A),
		(S.isFunction = m),
		(S.isWindow = x),
		(S.camelCase = X),
		(S.type = w),
		(S.now = Date.now),
		(S.isNumeric = function (e) {
			var t = S.type(e)
			return ('number' === t || 'string' === t) && !isNaN(e - parseFloat(e))
		}),
		(S.trim = function (e) {
			return null == e ? '' : (e + '').replace(Gt, '')
		}),
		'function' == typeof define &&
			define.amd &&
			define('jquery', [], function () {
				return S
			})
	var Yt = C.jQuery,
		Qt = C.$
	return (
		(S.noConflict = function (e) {
			return C.$ === S && (C.$ = Qt), e && C.jQuery === S && (C.jQuery = Yt), S
		}),
		'undefined' == typeof e && (C.jQuery = C.$ = S),
		S
	)
})

/* End */
;
; /* Start:"a:4:{s:4:"full";s:87:"/bitrix/templates/atib/libs/Inputmask-5.x/dist/jquery.inputmask.min.js?1710506427115739";s:6:"source";s:70:"/bitrix/templates/atib/libs/Inputmask-5.x/dist/jquery.inputmask.min.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
/*!
 * dist/jquery.inputmask.min
 * https://github.com/RobinHerbots/Inputmask
 * Copyright (c) 2010 - 2023 Robin Herbots
 * Licensed under the MIT license
 * Version: 5.0.9-beta.46
 */
!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t(require("jquery"));else if("function"==typeof define&&define.amd)define(["jquery"],t);else{var n="object"==typeof exports?t(require("jquery")):t(e.jQuery);for(var i in n)("object"==typeof exports?exports:e)[i]=n[i]}}("undefined"!=typeof self?self:this,(function(e){return function(){"use strict";var t={3046:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n(7149),n(3194),n(9302),n(4013),n(3851),n(219),n(207),n(5296);var i,a=(i=n(2394))&&i.__esModule?i:{default:i};t.default=a.default},3976:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=n(2839);t.default={_maxTestPos:500,placeholder:"_",optionalmarker:["[","]"],quantifiermarker:["{","}"],groupmarker:["(",")"],alternatormarker:"|",escapeChar:"\\",mask:null,regex:null,oncomplete:function(){},onincomplete:function(){},oncleared:function(){},repeat:0,greedy:!1,autoUnmask:!1,removeMaskOnSubmit:!1,clearMaskOnLostFocus:!0,insertMode:!0,insertModeVisual:!0,clearIncomplete:!1,alias:null,onKeyDown:function(){},onBeforeMask:null,onBeforePaste:function(e,t){return"function"==typeof t.onBeforeMask?t.onBeforeMask.call(this,e,t):e},onBeforeWrite:null,onUnMask:null,showMaskOnFocus:!0,showMaskOnHover:!0,onKeyValidation:function(){},skipOptionalPartCharacter:" ",numericInput:!1,rightAlign:!1,undoOnEscape:!0,radixPoint:"",_radixDance:!1,groupSeparator:"",keepStatic:null,positionCaretOnTab:!0,tabThrough:!1,supportsInputType:["text","tel","url","password","search"],ignorables:Object.keys(i.ignorables),isComplete:null,preValidation:null,postValidation:null,staticDefinitionSymbol:void 0,jitMasking:!1,nullable:!0,inputEventOnly:!1,noValuePatching:!1,positionCaretOnClick:"lvp",casing:null,inputmode:"text",importDataAttributes:!0,shiftPositions:!0,usePrototypeDefinitions:!0,validationEventTimeOut:3e3,substitutes:{}}},7392:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default={9:{validator:"[0-9\uff10-\uff19]",definitionSymbol:"*"},a:{validator:"[A-Za-z\u0410-\u044f\u0401\u0451\xc0-\xff\xb5]",definitionSymbol:"*"},"*":{validator:"[0-9\uff10-\uff19A-Za-z\u0410-\u044f\u0401\u0451\xc0-\xff\xb5]"}}},3287:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i,a=(i=n(7957))&&i.__esModule?i:{default:i};if(void 0===a.default)throw"jQuery not loaded!";t.default=a.default},9845:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.mobile=t.iphone=t.ie=void 0;var i,a=(i=n(9380))&&i.__esModule?i:{default:i};var r=a.default.navigator&&a.default.navigator.userAgent||"";t.ie=r.indexOf("MSIE ")>0||r.indexOf("Trident/")>0,t.mobile=a.default.navigator&&a.default.navigator.userAgentData&&a.default.navigator.userAgentData.mobile||a.default.navigator&&a.default.navigator.maxTouchPoints||"ontouchstart"in a.default,t.iphone=/iphone/i.test(r)},7184:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return e.replace(n,"\\$1")};var n=new RegExp("(\\"+["/",".","*","+","?","|","(",")","[","]","{","}","\\","$","^"].join("|\\")+")","gim")},6030:function(e,t,n){function i(e){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.EventHandlers=void 0;var a,r=n(8711),o=n(2839),s=n(9845),l=n(7215),c=n(7760),u=n(4713),f=(a=n(9380))&&a.__esModule?a:{default:a};function p(){/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */p=function(){return t};var e,t={},n=Object.prototype,a=n.hasOwnProperty,r=Object.defineProperty||function(e,t,n){e[t]=n.value},o="function"==typeof Symbol?Symbol:{},s=o.iterator||"@@iterator",l=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{u({},"")}catch(e){u=function(e,t,n){return e[t]=n}}function f(e,t,n,i){var a=t&&t.prototype instanceof k?t:k,o=Object.create(a.prototype),s=new D(i||[]);return r(o,"_invoke",{value:E(e,n,s)}),o}function d(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}t.wrap=f;var h="suspendedStart",m="suspendedYield",v="executing",g="completed",y={};function k(){}function b(){}function x(){}var P={};u(P,s,(function(){return this}));var w=Object.getPrototypeOf,S=w&&w(w(L([])));S&&S!==n&&a.call(S,s)&&(P=S);var O=x.prototype=k.prototype=Object.create(P);function M(e){["next","throw","return"].forEach((function(t){u(e,t,(function(e){return this._invoke(t,e)}))}))}function _(e,t){function n(r,o,s,l){var c=d(e[r],e,o);if("throw"!==c.type){var u=c.arg,f=u.value;return f&&"object"==i(f)&&a.call(f,"__await")?t.resolve(f.__await).then((function(e){n("next",e,s,l)}),(function(e){n("throw",e,s,l)})):t.resolve(f).then((function(e){u.value=e,s(u)}),(function(e){return n("throw",e,s,l)}))}l(c.arg)}var o;r(this,"_invoke",{value:function(e,i){function a(){return new t((function(t,a){n(e,i,t,a)}))}return o=o?o.then(a,a):a()}})}function E(t,n,i){var a=h;return function(r,o){if(a===v)throw new Error("Generator is already running");if(a===g){if("throw"===r)throw o;return{value:e,done:!0}}for(i.method=r,i.arg=o;;){var s=i.delegate;if(s){var l=j(s,i);if(l){if(l===y)continue;return l}}if("next"===i.method)i.sent=i._sent=i.arg;else if("throw"===i.method){if(a===h)throw a=g,i.arg;i.dispatchException(i.arg)}else"return"===i.method&&i.abrupt("return",i.arg);a=v;var c=d(t,n,i);if("normal"===c.type){if(a=i.done?g:m,c.arg===y)continue;return{value:c.arg,done:i.done}}"throw"===c.type&&(a=g,i.method="throw",i.arg=c.arg)}}}function j(t,n){var i=n.method,a=t.iterator[i];if(a===e)return n.delegate=null,"throw"===i&&t.iterator.return&&(n.method="return",n.arg=e,j(t,n),"throw"===n.method)||"return"!==i&&(n.method="throw",n.arg=new TypeError("The iterator does not provide a '"+i+"' method")),y;var r=d(a,t.iterator,n.arg);if("throw"===r.type)return n.method="throw",n.arg=r.arg,n.delegate=null,y;var o=r.arg;return o?o.done?(n[t.resultName]=o.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),n.delegate=null,y):o:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,y)}function T(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function A(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function D(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(T,this),this.reset(!0)}function L(t){if(t||""===t){var n=t[s];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,o=function n(){for(;++r<t.length;)if(a.call(t,r))return n.value=t[r],n.done=!1,n;return n.value=e,n.done=!0,n};return o.next=o}}throw new TypeError(i(t)+" is not iterable")}return b.prototype=x,r(O,"constructor",{value:x,configurable:!0}),r(x,"constructor",{value:b,configurable:!0}),b.displayName=u(x,c,"GeneratorFunction"),t.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===b||"GeneratorFunction"===(t.displayName||t.name))},t.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,x):(e.__proto__=x,u(e,c,"GeneratorFunction")),e.prototype=Object.create(O),e},t.awrap=function(e){return{__await:e}},M(_.prototype),u(_.prototype,l,(function(){return this})),t.AsyncIterator=_,t.async=function(e,n,i,a,r){void 0===r&&(r=Promise);var o=new _(f(e,n,i,a),r);return t.isGeneratorFunction(n)?o:o.next().then((function(e){return e.done?e.value:o.next()}))},M(O),u(O,c,"Generator"),u(O,s,(function(){return this})),u(O,"toString",(function(){return"[object Generator]"})),t.keys=function(e){var t=Object(e),n=[];for(var i in t)n.push(i);return n.reverse(),function e(){for(;n.length;){var i=n.pop();if(i in t)return e.value=i,e.done=!1,e}return e.done=!0,e}},t.values=L,D.prototype={constructor:D,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(A),!t)for(var n in this)"t"===n.charAt(0)&&a.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=e)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function i(i,a){return s.type="throw",s.arg=t,n.next=i,a&&(n.method="next",n.arg=e),!!a}for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r],s=o.completion;if("root"===o.tryLoc)return i("end");if(o.tryLoc<=this.prev){var l=a.call(o,"catchLoc"),c=a.call(o,"finallyLoc");if(l&&c){if(this.prev<o.catchLoc)return i(o.catchLoc,!0);if(this.prev<o.finallyLoc)return i(o.finallyLoc)}else if(l){if(this.prev<o.catchLoc)return i(o.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return i(o.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n];if(i.tryLoc<=this.prev&&a.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var r=i;break}}r&&("break"===e||"continue"===e)&&r.tryLoc<=t&&t<=r.finallyLoc&&(r=null);var o=r?r.completion:{};return o.type=e,o.arg=t,r?(this.method="next",this.next=r.finallyLoc,y):this.complete(o)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),y},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),A(n),y}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var i=n.completion;if("throw"===i.type){var a=i.arg;A(n)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,i){return this.delegate={iterator:L(t),resultName:n,nextLoc:i},"next"===this.method&&(this.arg=e),y}},t}function d(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return h(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return h(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var i=0,a=function(){};return{s:a,n:function(){return i>=e.length?{done:!0}:{done:!1,value:e[i++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,o=!0,s=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return o=e.done,e},e:function(e){s=!0,r=e},f:function(){try{o||null==n.return||n.return()}finally{if(s)throw r}}}}function h(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,i=new Array(t);n<t;n++)i[n]=e[n];return i}function m(e,t,n,i,a,r,o){try{var s=e[r](o),l=s.value}catch(e){return void n(e)}s.done?t(l):Promise.resolve(l).then(i,a)}var v,g,y=t.EventHandlers={keyEvent:function(e,t,n,i,a){var f=this.inputmask,p=f.opts,d=f.dependencyLib,h=f.maskset,m=this,v=d(m),g=e.key,k=r.caret.call(f,m),b=p.onKeyDown.call(this,e,r.getBuffer.call(f),k,p);if(void 0!==b)return b;if(g===o.keys.Backspace||g===o.keys.Delete||s.iphone&&g===o.keys.BACKSPACE_SAFARI||e.ctrlKey&&g===o.keys.x&&!("oncut"in m))e.preventDefault(),l.handleRemove.call(f,m,g,k),(0,c.writeBuffer)(m,r.getBuffer.call(f,!0),h.p,e,m.inputmask._valueGet()!==r.getBuffer.call(f).join(""));else if(g===o.keys.End||g===o.keys.PageDown){e.preventDefault();var x=r.seekNext.call(f,r.getLastValidPosition.call(f));r.caret.call(f,m,e.shiftKey?k.begin:x,x,!0)}else g===o.keys.Home&&!e.shiftKey||g===o.keys.PageUp?(e.preventDefault(),r.caret.call(f,m,0,e.shiftKey?k.begin:0,!0)):p.undoOnEscape&&g===o.keys.Escape&&!0!==e.altKey?((0,c.checkVal)(m,!0,!1,f.undoValue.split("")),v.trigger("click")):g!==o.keys.Insert||e.shiftKey||e.ctrlKey||void 0!==f.userOptions.insertMode?!0===p.tabThrough&&g===o.keys.Tab?!0===e.shiftKey?(k.end=r.seekPrevious.call(f,k.end,!0),!0===u.getTest.call(f,k.end-1).match.static&&k.end--,k.begin=r.seekPrevious.call(f,k.end,!0),k.begin>=0&&k.end>0&&(e.preventDefault(),r.caret.call(f,m,k.begin,k.end))):(k.begin=r.seekNext.call(f,k.begin,!0),k.end=r.seekNext.call(f,k.begin,!0),k.end<h.maskLength&&k.end--,k.begin<=h.maskLength&&(e.preventDefault(),r.caret.call(f,m,k.begin,k.end))):e.shiftKey||p.insertModeVisual&&!1===p.insertMode&&(g===o.keys.ArrowRight?setTimeout((function(){var e=r.caret.call(f,m);r.caret.call(f,m,e.begin)}),0):g===o.keys.ArrowLeft&&setTimeout((function(){var e=r.translatePosition.call(f,m.inputmask.caretPos.begin);r.translatePosition.call(f,m.inputmask.caretPos.end);f.isRTL?r.caret.call(f,m,e+(e===h.maskLength?0:1)):r.caret.call(f,m,e-(0===e?0:1))}),0)):l.isSelection.call(f,k)?p.insertMode=!p.insertMode:(p.insertMode=!p.insertMode,r.caret.call(f,m,k.begin,k.begin));return f.isComposing=g==o.keys.Process||g==o.keys.Unidentified,f.ignorable=p.ignorables.includes(g),y.keypressEvent.call(this,e,t,n,i,a)},keypressEvent:function(e,t,n,i,a){var s=this.inputmask||this,u=s.opts,f=s.dependencyLib,p=s.maskset,d=s.el,h=f(d),m=e.key;if(!0===t||e.ctrlKey&&e.altKey&&!s.ignorable||!(e.ctrlKey||e.metaKey||s.ignorable)){if(m){var v,g=t?{begin:a,end:a}:r.caret.call(s,d);m=u.substitutes[m]||m,p.writeOutBuffer=!0;var y=l.isValid.call(s,g,m,i,void 0,void 0,void 0,t);if(!1!==y&&(r.resetMaskSet.call(s,!0),v=void 0!==y.caret?y.caret:r.seekNext.call(s,y.pos.begin?y.pos.begin:y.pos),p.p=v),v=u.numericInput&&void 0===y.caret?r.seekPrevious.call(s,v):v,!1!==n&&(setTimeout((function(){u.onKeyValidation.call(d,m,y)}),0),p.writeOutBuffer&&!1!==y)){var k=r.getBuffer.call(s);(0,c.writeBuffer)(d,k,v,e,!0!==t)}if(e.preventDefault(),t)return!1!==y&&(y.forwardPosition=v),y}}else m===o.keys.Enter&&s.undoValue!==s._valueGet(!0)&&(s.undoValue=s._valueGet(!0),setTimeout((function(){h.trigger("change")}),0))},pasteEvent:(v=p().mark((function e(t){var n,i,a,o,s,l;return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=function(e,n,i,a,s){var l=r.caret.call(e,n,void 0,void 0,!0),u=i.substr(0,l.begin),f=i.substr(l.end,i.length);if(u==(e.isRTL?r.getBufferTemplate.call(e).slice().reverse():r.getBufferTemplate.call(e)).slice(0,l.begin).join("")&&(u=""),f==(e.isRTL?r.getBufferTemplate.call(e).slice().reverse():r.getBufferTemplate.call(e)).slice(l.end).join("")&&(f=""),a=u+a+f,e.isRTL&&!0!==o.numericInput){a=a.split("");var p,h=d(r.getBufferTemplate.call(e));try{for(h.s();!(p=h.n()).done;){var m=p.value;a[0]===m&&a.shift()}}catch(e){h.e(e)}finally{h.f()}a=a.reverse().join("")}var v=a;if("function"==typeof s){if(!1===(v=s.call(e,v,o)))return!1;v||(v=i)}(0,c.checkVal)(n,!0,!1,v.toString().split(""),t)},i=this,a=this.inputmask,o=a.opts,s=a._valueGet(!0),a.skipInputEvent=!0,t.clipboardData&&t.clipboardData.getData?l=t.clipboardData.getData("text/plain"):f.default.clipboardData&&f.default.clipboardData.getData&&(l=f.default.clipboardData.getData("Text")),n(a,i,s,l,o.onBeforePaste),t.preventDefault();case 7:case"end":return e.stop()}}),e,this)})),g=function(){var e=this,t=arguments;return new Promise((function(n,i){var a=v.apply(e,t);function r(e){m(a,n,i,r,o,"next",e)}function o(e){m(a,n,i,r,o,"throw",e)}r(void 0)}))},function(e){return g.apply(this,arguments)}),inputFallBackEvent:function(e){var t=this.inputmask,n=t.opts,i=t.dependencyLib;var a,l=this,f=l.inputmask._valueGet(!0),p=(t.isRTL?r.getBuffer.call(t).slice().reverse():r.getBuffer.call(t)).join(""),d=r.caret.call(t,l,void 0,void 0,!0);if(p!==f){if(a=function(e,i,a){for(var o,s,l,c=e.substr(0,a.begin).split(""),f=e.substr(a.begin).split(""),p=i.substr(0,a.begin).split(""),d=i.substr(a.begin).split(""),h=c.length>=p.length?c.length:p.length,m=f.length>=d.length?f.length:d.length,v="",g=[],y="~";c.length<h;)c.push(y);for(;p.length<h;)p.push(y);for(;f.length<m;)f.unshift(y);for(;d.length<m;)d.unshift(y);var k=c.concat(f),b=p.concat(d);for(s=0,o=k.length;s<o;s++)switch(l=u.getPlaceholder.call(t,r.translatePosition.call(t,s)),v){case"insertText":b[s-1]===k[s]&&a.begin==k.length-1&&g.push(k[s]),s=o;break;case"insertReplacementText":case"deleteContentBackward":k[s]===y?a.end++:s=o;break;default:k[s]!==b[s]&&(k[s+1]!==y&&k[s+1]!==l&&void 0!==k[s+1]||(b[s]!==l||b[s+1]!==y)&&b[s]!==y?b[s+1]===y&&b[s]===k[s+1]?(v="insertText",g.push(k[s]),a.begin--,a.end--):k[s]!==l&&k[s]!==y&&(k[s+1]===y||b[s]!==k[s]&&b[s+1]===k[s+1])?(v="insertReplacementText",g.push(k[s]),a.begin--):k[s]===y?(v="deleteContentBackward",(r.isMask.call(t,r.translatePosition.call(t,s),!0)||b[s]===n.radixPoint)&&a.end++):s=o:(v="insertText",g.push(k[s]),a.begin--,a.end--))}return{action:v,data:g,caret:a}}(f,p,d),(l.inputmask.shadowRoot||l.ownerDocument).activeElement!==l&&l.focus(),(0,c.writeBuffer)(l,r.getBuffer.call(t)),r.caret.call(t,l,d.begin,d.end,!0),!s.mobile&&t.skipNextInsert&&"insertText"===e.inputType&&"insertText"===a.action&&t.isComposing)return!1;switch("insertCompositionText"===e.inputType&&"insertText"===a.action&&t.isComposing?t.skipNextInsert=!0:t.skipNextInsert=!1,a.action){case"insertText":case"insertReplacementText":a.data.forEach((function(e,n){var a=new i.Event("keypress");a.key=e,t.ignorable=!1,y.keypressEvent.call(l,a)})),setTimeout((function(){t.$el.trigger("keyup")}),0);break;case"deleteContentBackward":var h=new i.Event("keydown");h.key=o.keys.Backspace,y.keyEvent.call(l,h);break;default:(0,c.applyInputValue)(l,f),r.caret.call(t,l,d.begin,d.end,!0)}e.preventDefault()}},setValueEvent:function(e){var t=this.inputmask,n=this,i=e&&e.detail?e.detail[0]:arguments[1];void 0===i&&(i=n.inputmask._valueGet(!0)),(0,c.applyInputValue)(n,i),(e.detail&&void 0!==e.detail[1]||void 0!==arguments[2])&&r.caret.call(t,n,e.detail?e.detail[1]:arguments[2])},focusEvent:function(e){var t=this.inputmask,n=t.opts,i=t&&t._valueGet();n.showMaskOnFocus&&i!==r.getBuffer.call(t).join("")&&(0,c.writeBuffer)(this,r.getBuffer.call(t),r.seekNext.call(t,r.getLastValidPosition.call(t))),!0!==n.positionCaretOnTab||!1!==t.mouseEnter||l.isComplete.call(t,r.getBuffer.call(t))&&-1!==r.getLastValidPosition.call(t)||y.clickEvent.apply(this,[e,!0]),t.undoValue=t&&t._valueGet(!0)},invalidEvent:function(e){this.inputmask.validationEvent=!0},mouseleaveEvent:function(){var e=this.inputmask,t=e.opts,n=this;e.mouseEnter=!1,t.clearMaskOnLostFocus&&(n.inputmask.shadowRoot||n.ownerDocument).activeElement!==n&&(0,c.HandleNativePlaceholder)(n,e.originalPlaceholder)},clickEvent:function(e,t){var n=this.inputmask;n.clicked++;var i=this;if((i.inputmask.shadowRoot||i.ownerDocument).activeElement===i){var a=r.determineNewCaretPosition.call(n,r.caret.call(n,i),t);void 0!==a&&r.caret.call(n,i,a)}},cutEvent:function(e){var t=this.inputmask,n=t.maskset,i=this,a=r.caret.call(t,i),s=t.isRTL?r.getBuffer.call(t).slice(a.end,a.begin):r.getBuffer.call(t).slice(a.begin,a.end),u=t.isRTL?s.reverse().join(""):s.join("");f.default.navigator&&f.default.navigator.clipboard?f.default.navigator.clipboard.writeText(u):f.default.clipboardData&&f.default.clipboardData.getData&&f.default.clipboardData.setData("Text",u),l.handleRemove.call(t,i,o.keys.Delete,a),(0,c.writeBuffer)(i,r.getBuffer.call(t),n.p,e,t.undoValue!==t._valueGet(!0))},blurEvent:function(e){var t=this.inputmask,n=t.opts,i=t.dependencyLib;t.clicked=0;var a=i(this),o=this;if(o.inputmask){(0,c.HandleNativePlaceholder)(o,t.originalPlaceholder);var s=o.inputmask._valueGet(),u=r.getBuffer.call(t).slice();""!==s&&(n.clearMaskOnLostFocus&&(-1===r.getLastValidPosition.call(t)&&s===r.getBufferTemplate.call(t).join("")?u=[]:c.clearOptionalTail.call(t,u)),!1===l.isComplete.call(t,u)&&(setTimeout((function(){a.trigger("incomplete")}),0),n.clearIncomplete&&(r.resetMaskSet.call(t,!1),u=n.clearMaskOnLostFocus?[]:r.getBufferTemplate.call(t).slice())),(0,c.writeBuffer)(o,u,void 0,e)),s=t._valueGet(!0),t.undoValue!==s&&(""!=s||t.undoValue!=r.getBufferTemplate.call(t).join("")||t.undoValue==r.getBufferTemplate.call(t).join("")&&t.maskset.validPositions.length>0)&&(t.undoValue=s,a.trigger("change"))}},mouseenterEvent:function(){var e=this.inputmask,t=e.opts.showMaskOnHover,n=this;if(e.mouseEnter=!0,(n.inputmask.shadowRoot||n.ownerDocument).activeElement!==n){var i=(e.isRTL?r.getBufferTemplate.call(e).slice().reverse():r.getBufferTemplate.call(e)).join("");t&&(0,c.HandleNativePlaceholder)(n,i)}},submitEvent:function(){var e=this.inputmask,t=e.opts;e.undoValue!==e._valueGet(!0)&&e.$el.trigger("change"),-1===r.getLastValidPosition.call(e)&&e._valueGet&&e._valueGet()===r.getBufferTemplate.call(e).join("")&&e._valueSet(""),t.clearIncomplete&&!1===l.isComplete.call(e,r.getBuffer.call(e))&&e._valueSet(""),t.removeMaskOnSubmit&&(e._valueSet(e.unmaskedvalue(),!0),setTimeout((function(){(0,c.writeBuffer)(e.el,r.getBuffer.call(e))}),0))},resetEvent:function(){var e=this.inputmask;e.refreshValue=!0,setTimeout((function(){(0,c.applyInputValue)(e.el,e._valueGet(!0))}),0)}}},9716:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.EventRuler=void 0;var i,a=(i=n(2394))&&i.__esModule?i:{default:i},r=n(2839),o=n(8711),s=n(7760);t.EventRuler={on:function(e,t,n){var i=e.inputmask.dependencyLib,l=function(t){t.originalEvent&&(t=t.originalEvent||t,arguments[0]=t);var l,c=this,u=c.inputmask,f=u?u.opts:void 0;if(void 0===u&&"FORM"!==this.nodeName){var p=i.data(c,"_inputmask_opts");i(c).off(),p&&new a.default(p).mask(c)}else{if(["submit","reset","setvalue"].includes(t.type)||"FORM"===this.nodeName||!(c.disabled||c.readOnly&&!("keydown"===t.type&&t.ctrlKey&&t.key===r.keys.c||!1===f.tabThrough&&t.key===r.keys.Tab))){switch(t.type){case"input":if(!0===u.skipInputEvent)return u.skipInputEvent=!1,t.preventDefault();break;case"click":case"focus":return u.validationEvent?(u.validationEvent=!1,e.blur(),(0,s.HandleNativePlaceholder)(e,(u.isRTL?o.getBufferTemplate.call(u).slice().reverse():o.getBufferTemplate.call(u)).join("")),setTimeout((function(){e.focus()}),f.validationEventTimeOut),!1):(l=arguments,void setTimeout((function(){e.inputmask&&n.apply(c,l)}),0))}var d=n.apply(c,arguments);return!1===d&&(t.preventDefault(),t.stopPropagation()),d}t.preventDefault()}};["submit","reset"].includes(t)?(l=l.bind(e),null!==e.form&&i(e.form).on(t,l)):i(e).on(t,l),e.inputmask.events[t]=e.inputmask.events[t]||[],e.inputmask.events[t].push(l)},off:function(e,t){if(e.inputmask&&e.inputmask.events){var n=e.inputmask.dependencyLib,i=e.inputmask.events;for(var a in t&&((i=[])[t]=e.inputmask.events[t]),i){for(var r=i[a];r.length>0;){var o=r.pop();["submit","reset"].includes(a)?null!==e.form&&n(e.form).off(a,o):n(e).off(a,o)}delete e.inputmask.events[a]}}}}},219:function(e,t,n){var i=p(n(2394)),a=n(2839),r=p(n(7184)),o=n(8711),s=n(4713);function l(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var i,a,r,o,s=[],l=!0,c=!1;try{if(r=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;l=!1}else for(;!(l=(i=r.call(n)).done)&&(s.push(i.value),s.length!==t);l=!0);}catch(e){c=!0,a=e}finally{try{if(!l&&null!=n.return&&(o=n.return(),Object(o)!==o))return}finally{if(c)throw a}}return s}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return c(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return c(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,i=new Array(t);n<t;n++)i[n]=e[n];return i}function u(e){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},u(e)}function f(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,(a=i.key,r=void 0,r=function(e,t){if("object"!==u(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var i=n.call(e,t||"default");if("object"!==u(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(a,"string"),"symbol"===u(r)?r:String(r)),i)}var a,r}function p(e){return e&&e.__esModule?e:{default:e}}n(1313);var d=i.default.dependencyLib,h=function(){function e(t,n,i){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.mask=t,this.format=n,this.opts=i,this._date=new Date(1,0,1),this.initDateObject(t,this.opts)}var t,n,i;return t=e,(n=[{key:"date",get:function(){return void 0===this._date&&(this._date=new Date(1,0,1),this.initDateObject(void 0,this.opts)),this._date}},{key:"initDateObject",value:function(e,t){var n;for(w(t).lastIndex=0;n=w(t).exec(this.format);){var i=new RegExp("\\d+$").exec(n[0]),a=i?n[0][0]+"x":n[0],r=void 0;if(void 0!==e){if(i){var o=w(t).lastIndex,s=j(n.index,t);w(t).lastIndex=o,r=e.slice(0,e.indexOf(s.nextMatch[0]))}else r=e.slice(0,y[a]&&y[a][4]||a.length);e=e.slice(r.length)}Object.prototype.hasOwnProperty.call(y,a)&&this.setValue(this,r,a,y[a][2],y[a][1])}}},{key:"setValue",value:function(e,t,n,i,a){if(void 0!==t&&(e[i]="ampm"===i||"mmm"===n||"mmmm"===n?t:t.replace(/[^0-9]/g,"0"),e["raw"+i]=t.replace(/\s/g,"_")),void 0!==a){var r=e[i];("day"===i&&29===parseInt(r)||"month"===i&&2===parseInt(r))&&(29!==parseInt(e.day)||2!==parseInt(e.month)||""!==e.year&&void 0!==e.year||e._date.setFullYear(2012,1,29)),"day"===i&&(g=!0,0===parseInt(r)&&(r=1)),"month"===i&&(g=!0),"year"===i&&(g=!0,r.length<4&&(r=M(r,4,!0))),(""!==r&&!isNaN(r)||"ampm"===i||"mmm"===n||"mmmm"===n)&&a.call(e._date,r)}}},{key:"reset",value:function(){this._date=new Date(1,0,1)}},{key:"reInit",value:function(){this._date=void 0,this.date}}])&&f(t.prototype,n),i&&f(t,i),Object.defineProperty(t,"prototype",{writable:!1}),e}(),m=(new Date).getFullYear(),v=i.default.prototype.i18n,g=!1,y={d:["[1-9]|[12][0-9]|3[01]",Date.prototype.setDate,"day",Date.prototype.getDate],dd:["0[1-9]|[12][0-9]|3[01]",Date.prototype.setDate,"day",function(){return M(Date.prototype.getDate.call(this),2)}],ddd:[""],dddd:[""],m:["[1-9]|1[012]",function(e){var t=e?parseInt(e):0;return t>0&&t--,Date.prototype.setMonth.call(this,t)},"month",function(){return Date.prototype.getMonth.call(this)+1}],mm:["0[1-9]|1[012]",function(e){var t=e?parseInt(e):0;return t>0&&t--,Date.prototype.setMonth.call(this,t)},"month",function(){return M(Date.prototype.getMonth.call(this)+1,2)}],mmm:[v.monthNames.slice(0,12).join("|"),function(e){var t=v.monthNames.slice(0,12).findIndex((function(t){return e.toLowerCase()===t.toLowerCase()}));return Date.prototype.setMonth.call(this,t)},"month",function(){return v.monthNames.slice(0,12)[Date.prototype.getMonth.call(this)]}],mmmm:[v.monthNames.slice(12,24).join("|"),function(e){var t=v.monthNames.slice(12,24).findIndex((function(t){return e.toLowerCase()===t.toLowerCase()}));return Date.prototype.setMonth.call(this,t)},"month",function(){return v.monthNames.slice(12,24)[Date.prototype.getMonth.call(this)]}],yy:["[0-9]{2}",Date.prototype.setFullYear,"year",function(){return M(Date.prototype.getFullYear.call(this),2)}],yyyy:["[0-9]{4}",Date.prototype.setFullYear,"year",function(){return M(Date.prototype.getFullYear.call(this),4)}],h:["[1-9]|1[0-2]",Date.prototype.setHours,"hours",Date.prototype.getHours],hh:["0[1-9]|1[0-2]",Date.prototype.setHours,"hours",function(){return M(Date.prototype.getHours.call(this),2)}],hx:[function(e){return"[0-9]{".concat(e,"}")},Date.prototype.setHours,"hours",function(e){return Date.prototype.getHours}],H:["1?[0-9]|2[0-3]",Date.prototype.setHours,"hours",Date.prototype.getHours],HH:["0[0-9]|1[0-9]|2[0-3]",Date.prototype.setHours,"hours",function(){return M(Date.prototype.getHours.call(this),2)}],Hx:[function(e){return"[0-9]{".concat(e,"}")},Date.prototype.setHours,"hours",function(e){return function(){return M(Date.prototype.getHours.call(this),e)}}],M:["[1-5]?[0-9]",Date.prototype.setMinutes,"minutes",Date.prototype.getMinutes],MM:["0[0-9]|1[0-9]|2[0-9]|3[0-9]|4[0-9]|5[0-9]",Date.prototype.setMinutes,"minutes",function(){return M(Date.prototype.getMinutes.call(this),2)}],s:["[1-5]?[0-9]",Date.prototype.setSeconds,"seconds",Date.prototype.getSeconds],ss:["0[0-9]|1[0-9]|2[0-9]|3[0-9]|4[0-9]|5[0-9]",Date.prototype.setSeconds,"seconds",function(){return M(Date.prototype.getSeconds.call(this),2)}],l:["[0-9]{3}",Date.prototype.setMilliseconds,"milliseconds",function(){return M(Date.prototype.getMilliseconds.call(this),3)},3],L:["[0-9]{2}",Date.prototype.setMilliseconds,"milliseconds",function(){return M(Date.prototype.getMilliseconds.call(this),2)},2],t:["[ap]",b,"ampm",x,1],tt:["[ap]m",b,"ampm",x,2],T:["[AP]",b,"ampm",x,1],TT:["[AP]M",b,"ampm",x,2],Z:[".*",void 0,"Z",function(){var e=this.toString().match(/\((.+)\)/)[1];e.includes(" ")&&(e=(e=e.replace("-"," ").toUpperCase()).split(" ").map((function(e){return l(e,1)[0]})).join(""));return e}],o:[""],S:[""]},k={isoDate:"yyyy-mm-dd",isoTime:"HH:MM:ss",isoDateTime:"yyyy-mm-dd'T'HH:MM:ss",isoUtcDateTime:"UTC:yyyy-mm-dd'T'HH:MM:ss'Z'"};function b(e){var t=this.getHours();e.toLowerCase().includes("p")?this.setHours(t+12):e.toLowerCase().includes("a")&&t>=12&&this.setHours(t-12)}function x(){var e=this.getHours();return(e=e||12)>=12?"PM":"AM"}function P(e){var t=new RegExp("\\d+$").exec(e[0]);if(t&&void 0!==t[0]){var n=y[e[0][0]+"x"].slice("");return n[0]=n[0](t[0]),n[3]=n[3](t[0]),n}if(y[e[0]])return y[e[0]]}function w(e){if(!e.tokenizer){var t=[],n=[];for(var i in y)if(/\.*x$/.test(i)){var a=i[0]+"\\d+";-1===n.indexOf(a)&&n.push(a)}else-1===t.indexOf(i[0])&&t.push(i[0]);e.tokenizer="("+(n.length>0?n.join("|")+"|":"")+t.join("+|")+")+?|.",e.tokenizer=new RegExp(e.tokenizer,"g")}return e.tokenizer}function S(e,t,n){if(!g)return!0;if(void 0===e.rawday||!isFinite(e.rawday)&&new Date(e.date.getFullYear(),isFinite(e.rawmonth)?e.month:e.date.getMonth()+1,0).getDate()>=e.day||"29"==e.day&&(!isFinite(e.rawyear)||void 0===e.rawyear||""===e.rawyear)||new Date(e.date.getFullYear(),isFinite(e.rawmonth)?e.month:e.date.getMonth()+1,0).getDate()>=e.day)return t;if("29"==e.day){var i=j(t.pos,n);if(i.targetMatch&&"yyyy"===i.targetMatch[0]&&t.pos-i.targetMatchIndex==2)return t.remove=t.pos+1,t}else if(2==e.date.getMonth()&&"30"==e.day&&void 0!==t.c)return e.day="03",e.date.setDate(3),e.date.setMonth(1),t.insert=[{pos:t.pos,c:"0"},{pos:t.pos+1,c:t.c}],t.caret=o.seekNext.call(this,t.pos+1),t;return!1}function O(e,t,n,i){var a,o,s="",l=0,c={};for(w(n).lastIndex=0;a=w(n).exec(e);){if(void 0===t)if(o=P(a))s+="("+o[0]+")",c[l]=a[0].charAt(0);else switch(a[0]){case"[":s+="(";break;case"]":s+=")?";break;default:s+=(0,r.default)(a[0]),c[l]=a[0].charAt(0)}else if(o=P(a))if(!0!==i&&o[3])s+=o[3].call(t.date);else o[2]?s+=t["raw"+o[2]]:s+=a[0];else s+=a[0];l++}return void 0===t&&""===n.placeholder&&(n.placeholder=c),s}function M(e,t,n){for(e=String(e),t=t||2;e.length<t;)e=n?e+"0":"0"+e;return e}function _(e,t,n){return"string"==typeof e?new h(e,t,n):e&&"object"===u(e)&&Object.prototype.hasOwnProperty.call(e,"date")?e:void 0}function E(e,t){return O(t.inputFormat,{date:e},t)}function j(e,t){var n,i,a=0,r=0;for(w(t).lastIndex=0;i=w(t).exec(t.inputFormat);){var o=new RegExp("\\d+$").exec(i[0]);if((a+=r=o?parseInt(o[0]):i[0].length)>=e+1){n=i,i=w(t).exec(t.inputFormat);break}}return{targetMatchIndex:a-r,nextMatch:i,targetMatch:n}}i.default.extendAliases({datetime:{mask:function(e){return e.numericInput=!1,y.S=v.ordinalSuffix.join("|"),e.inputFormat=k[e.inputFormat]||e.inputFormat,e.displayFormat=k[e.displayFormat]||e.displayFormat||e.inputFormat,e.outputFormat=k[e.outputFormat]||e.outputFormat||e.inputFormat,e.regex=O(e.inputFormat,void 0,e),e.min=_(e.min,e.inputFormat,e),e.max=_(e.max,e.inputFormat,e),null},placeholder:"",inputFormat:"isoDateTime",displayFormat:null,outputFormat:null,min:null,max:null,skipOptionalPartCharacter:"",preValidation:function(e,t,n,i,a,r,o,s){if(s)return!0;if(isNaN(n)&&e[t]!==n){var l=j(t,a);if(l.nextMatch&&l.nextMatch[0]===n&&l.targetMatch[0].length>1){var c=y[l.targetMatch[0]][0];if(new RegExp(c).test("0"+e[t-1]))return e[t]=e[t-1],e[t-1]="0",{fuzzy:!0,buffer:e,refreshFromBuffer:{start:t-1,end:t+1},pos:t+1}}}return!0},postValidation:function(e,t,n,i,a,r,o,l){var c,u;if(o)return!0;if(!1===i&&(((c=j(t+1,a)).targetMatch&&c.targetMatchIndex===t&&c.targetMatch[0].length>1&&void 0!==y[c.targetMatch[0]]||(c=j(t+2,a)).targetMatch&&c.targetMatchIndex===t+1&&c.targetMatch[0].length>1&&void 0!==y[c.targetMatch[0]])&&(u=y[c.targetMatch[0]][0]),void 0!==u&&(void 0!==r.validPositions[t+1]&&new RegExp(u).test(n+"0")?(e[t]=n,e[t+1]="0",i={pos:t+2,caret:t}):new RegExp(u).test("0"+n)&&(e[t]="0",e[t+1]=n,i={pos:t+2})),!1===i))return i;if(i.fuzzy&&(e=i.buffer,t=i.pos),(c=j(t,a)).targetMatch&&c.targetMatch[0]&&void 0!==y[c.targetMatch[0]]){var f=y[c.targetMatch[0]];u=f[0];var p=e.slice(c.targetMatchIndex,c.targetMatchIndex+c.targetMatch[0].length);if(!1===new RegExp(u).test(p.join(""))&&2===c.targetMatch[0].length&&r.validPositions[c.targetMatchIndex]&&r.validPositions[c.targetMatchIndex+1]&&(r.validPositions[c.targetMatchIndex+1].input="0"),"year"==f[2])for(var d=s.getMaskTemplate.call(this,!1,1,void 0,!0),h=t+1;h<e.length;h++)e[h]=d[h],r.validPositions.splice(t+1,1)}var v=i,g=_(e.join(""),a.inputFormat,a);return v&&!isNaN(g.date.getTime())&&(a.prefillYear&&(v=function(e,t,n){if(e.year!==e.rawyear){var i=m.toString(),a=e.rawyear.replace(/[^0-9]/g,""),r=i.slice(0,a.length),o=i.slice(a.length);if(2===a.length&&a===r){var s=new Date(m,e.month-1,e.day);e.day==s.getDate()&&(!n.max||n.max.date.getTime()>=s.getTime())&&(e.date.setFullYear(m),e.year=i,t.insert=[{pos:t.pos+1,c:o[0]},{pos:t.pos+2,c:o[1]}])}}return t}(g,v,a)),v=function(e,t,n,i,a){if(!t)return t;if(t&&n.min&&!isNaN(n.min.date.getTime())){var r;for(e.reset(),w(n).lastIndex=0;r=w(n).exec(n.inputFormat);){var o;if((o=P(r))&&o[3]){for(var s=o[1],l=e[o[2]],c=n.min[o[2]],u=n.max?n.max[o[2]]:c,f=[],p=!1,d=0;d<c.length;d++)void 0!==i.validPositions[d+r.index]||p?(f[d]=l[d],p=p||l[d]>c[d]):(d+r.index==0&&l[d]<c[d]?(f[d]=l[d],p=!0):f[d]=c[d],"year"===o[2]&&l.length-1==d&&c!=u&&(f=(parseInt(f.join(""))+1).toString().split("")),"ampm"===o[2]&&c!=u&&n.min.date.getTime()>e.date.getTime()&&(f[d]=u[d]));s.call(e._date,f.join(""))}}t=n.min.date.getTime()<=e.date.getTime(),e.reInit()}return t&&n.max&&(isNaN(n.max.date.getTime())||(t=n.max.date.getTime()>=e.date.getTime())),t}(g,v=S.call(this,g,v,a),a,r)),void 0!==t&&v&&i.pos!==t?{buffer:O(a.inputFormat,g,a).split(""),refreshFromBuffer:{start:t,end:i.pos},pos:i.caret||i.pos}:v},onKeyDown:function(e,t,n,i){e.ctrlKey&&e.key===a.keys.ArrowRight&&(this.inputmask._valueSet(E(new Date,i)),d(this).trigger("setvalue"))},onUnMask:function(e,t,n){return t?O(n.outputFormat,_(e,n.inputFormat,n),n,!0):t},casing:function(e,t,n,i){return 0==t.nativeDef.indexOf("[ap]")?e.toLowerCase():0==t.nativeDef.indexOf("[AP]")?e.toUpperCase():e},onBeforeMask:function(e,t){return"[object Date]"===Object.prototype.toString.call(e)&&(e=E(e,t)),e},insertMode:!1,insertModeVisual:!1,shiftPositions:!1,keepStatic:!1,inputmode:"numeric",prefillYear:!0}})},1313:function(e,t,n){var i,a=(i=n(2394))&&i.__esModule?i:{default:i};a.default.dependencyLib.extend(!0,a.default.prototype.i18n,{dayNames:["Mon","Tue","Wed","Thu","Fri","Sat","Sun","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],monthNames:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","January","February","March","April","May","June","July","August","September","October","November","December"],ordinalSuffix:["st","nd","rd","th"]})},3851:function(e,t,n){var i,a=(i=n(2394))&&i.__esModule?i:{default:i},r=n(8711),o=n(4713);function s(e){return function(e){if(Array.isArray(e))return l(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return l(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return l(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,i=new Array(t);n<t;n++)i[n]=e[n];return i}a.default.extendDefinitions({A:{validator:"[A-Za-z\u0410-\u044f\u0401\u0451\xc0-\xff\xb5]",casing:"upper"},"&":{validator:"[0-9A-Za-z\u0410-\u044f\u0401\u0451\xc0-\xff\xb5]",casing:"upper"},"#":{validator:"[0-9A-Fa-f]",casing:"upper"}});var c=new RegExp("25[0-5]|2[0-4][0-9]|[01][0-9][0-9]");function u(e,t,n,i,a){if(n-1>-1&&"."!==t.buffer[n-1]?(e=t.buffer[n-1]+e,e=n-2>-1&&"."!==t.buffer[n-2]?t.buffer[n-2]+e:"0"+e):e="00"+e,a.greedy&&parseInt(e)>255&&c.test("00"+e.charAt(2))){var r=[].concat(s(t.buffer.slice(0,n)),[".",e.charAt(2)]);if(r.join("").match(/\./g).length<4)return{refreshFromBuffer:!0,buffer:r,caret:n+2}}return c.test(e)}a.default.extendAliases({cssunit:{regex:"[+-]?[0-9]+\\.?([0-9]+)?(px|em|rem|ex|%|in|cm|mm|pt|pc)"},url:{regex:"(https?|ftp)://.*",autoUnmask:!1,keepStatic:!1,tabThrough:!0},ip:{mask:"i{1,3}.j{1,3}.k{1,3}.l{1,3}",definitions:{i:{validator:u},j:{validator:u},k:{validator:u},l:{validator:u}},onUnMask:function(e,t,n){return e},inputmode:"decimal",substitutes:{",":"."}},email:{mask:function(e){var t=e.separator,n=e.quantifier,i="*{1,64}[.*{1,64}][.*{1,64}][.*{1,63}]@-{1,63}.-{1,63}[.-{1,63}][.-{1,63}]",a=i;if(t)for(var r=0;r<n;r++)a+="[".concat(t).concat(i,"]");return a},greedy:!1,casing:"lower",separator:null,quantifier:5,skipOptionalPartCharacter:"",onBeforePaste:function(e,t){return(e=e.toLowerCase()).replace("mailto:","")},definitions:{"*":{validator:"[0-9\uff11-\uff19A-Za-z\u0410-\u044f\u0401\u0451\xc0-\xff\xb5!#$%&'*+/=?^_`{|}~-]"},"-":{validator:"[0-9A-Za-z-]"}},onUnMask:function(e,t,n){return e},inputmode:"email"},mac:{mask:"##:##:##:##:##:##"},vin:{mask:"V{13}9{4}",definitions:{V:{validator:"[A-HJ-NPR-Za-hj-npr-z\\d]",casing:"upper"}},clearIncomplete:!0,autoUnmask:!0},ssn:{mask:"999-99-9999",postValidation:function(e,t,n,i,a,s,l){var c=o.getMaskTemplate.call(this,!0,r.getLastValidPosition.call(this),!0,!0);return/^(?!219-09-9999|078-05-1120)(?!666|000|9.{2}).{3}-(?!00).{2}-(?!0{4}).{4}$/.test(c.join(""))}}})},207:function(e,t,n){var i=s(n(2394)),a=s(n(7184)),r=n(8711),o=n(2839);function s(e){return e&&e.__esModule?e:{default:e}}var l=i.default.dependencyLib;function c(e,t){for(var n="",a=0;a<e.length;a++)i.default.prototype.definitions[e.charAt(a)]||t.definitions[e.charAt(a)]||t.optionalmarker[0]===e.charAt(a)||t.optionalmarker[1]===e.charAt(a)||t.quantifiermarker[0]===e.charAt(a)||t.quantifiermarker[1]===e.charAt(a)||t.groupmarker[0]===e.charAt(a)||t.groupmarker[1]===e.charAt(a)||t.alternatormarker===e.charAt(a)?n+="\\"+e.charAt(a):n+=e.charAt(a);return n}function u(e,t,n,i){if(e.length>0&&t>0&&(!n.digitsOptional||i)){var a=e.indexOf(n.radixPoint),r=!1;n.negationSymbol.back===e[e.length-1]&&(r=!0,e.length--),-1===a&&(e.push(n.radixPoint),a=e.length-1);for(var o=1;o<=t;o++)isFinite(e[a+o])||(e[a+o]="0")}return r&&e.push(n.negationSymbol.back),e}function f(e,t){var n=0;for(var i in"+"===e&&(n=r.seekNext.call(this,t.validPositions.length-1)),t.tests)if((i=parseInt(i))>=n)for(var a=0,o=t.tests[i].length;a<o;a++)if((void 0===t.validPositions[i]||"-"===e)&&t.tests[i][a].match.def===e)return i+(void 0!==t.validPositions[i]&&"-"!==e?1:0);return n}function p(e,t){for(var n=-1,i=0,a=t.validPositions.length;i<a;i++){var r=t.validPositions[i];if(r&&r.match.def===e){n=i;break}}return n}function d(e,t,n,i,a){var r=t.buffer?t.buffer.indexOf(a.radixPoint):-1,o=(-1!==r||i&&a.jitMasking)&&new RegExp(a.definitions[9].validator).test(e);return a._radixDance&&-1!==r&&o&&null==t.validPositions[r]?{insert:{pos:r===n?r+1:r,c:a.radixPoint},pos:n}:o}i.default.extendAliases({numeric:{mask:function(e){e.repeat=0,e.groupSeparator===e.radixPoint&&e.digits&&"0"!==e.digits&&("."===e.radixPoint?e.groupSeparator=",":","===e.radixPoint?e.groupSeparator=".":e.groupSeparator="")," "===e.groupSeparator&&(e.skipOptionalPartCharacter=void 0),e.placeholder.length>1&&(e.placeholder=e.placeholder.charAt(0)),"radixFocus"===e.positionCaretOnClick&&""===e.placeholder&&(e.positionCaretOnClick="lvp");var t="0",n=e.radixPoint;!0===e.numericInput&&void 0===e.__financeInput?(t="1",e.positionCaretOnClick="radixFocus"===e.positionCaretOnClick?"lvp":e.positionCaretOnClick,e.digitsOptional=!1,isNaN(e.digits)&&(e.digits=2),e._radixDance=!1,n=","===e.radixPoint?"?":"!",""!==e.radixPoint&&void 0===e.definitions[n]&&(e.definitions[n]={},e.definitions[n].validator="["+e.radixPoint+"]",e.definitions[n].placeholder=e.radixPoint,e.definitions[n].static=!0,e.definitions[n].generated=!0)):(e.__financeInput=!1,e.numericInput=!0);var i,r="[+]";if(r+=c(e.prefix,e),""!==e.groupSeparator?(void 0===e.definitions[e.groupSeparator]&&(e.definitions[e.groupSeparator]={},e.definitions[e.groupSeparator].validator="["+e.groupSeparator+"]",e.definitions[e.groupSeparator].placeholder=e.groupSeparator,e.definitions[e.groupSeparator].static=!0,e.definitions[e.groupSeparator].generated=!0),r+=e._mask(e)):r+="9{+}",void 0!==e.digits&&0!==e.digits){var o=e.digits.toString().split(",");isFinite(o[0])&&o[1]&&isFinite(o[1])?r+=n+t+"{"+e.digits+"}":(isNaN(e.digits)||parseInt(e.digits)>0)&&(e.digitsOptional||e.jitMasking?(i=r+n+t+"{0,"+e.digits+"}",e.keepStatic=!0):r+=n+t+"{"+e.digits+"}")}else e.inputmode="numeric";return r+=c(e.suffix,e),r+="[-]",i&&(r=[i+c(e.suffix,e)+"[-]",r]),e.greedy=!1,function(e){void 0===e.parseMinMaxOptions&&(null!==e.min&&(e.min=e.min.toString().replace(new RegExp((0,a.default)(e.groupSeparator),"g"),""),","===e.radixPoint&&(e.min=e.min.replace(e.radixPoint,".")),e.min=isFinite(e.min)?parseFloat(e.min):NaN,isNaN(e.min)&&(e.min=Number.MIN_VALUE)),null!==e.max&&(e.max=e.max.toString().replace(new RegExp((0,a.default)(e.groupSeparator),"g"),""),","===e.radixPoint&&(e.max=e.max.replace(e.radixPoint,".")),e.max=isFinite(e.max)?parseFloat(e.max):NaN,isNaN(e.max)&&(e.max=Number.MAX_VALUE)),e.parseMinMaxOptions="done")}(e),""!==e.radixPoint&&e.substituteRadixPoint&&(e.substitutes["."==e.radixPoint?",":"."]=e.radixPoint),r},_mask:function(e){return"("+e.groupSeparator+"999){+|1}"},digits:"*",digitsOptional:!0,enforceDigitsOnBlur:!1,radixPoint:".",positionCaretOnClick:"radixFocus",_radixDance:!0,groupSeparator:"",allowMinus:!0,negationSymbol:{front:"-",back:""},prefix:"",suffix:"",min:null,max:null,SetMaxOnOverflow:!1,step:1,inputType:"text",unmaskAsNumber:!1,roundingFN:Math.round,inputmode:"decimal",shortcuts:{k:"1000",m:"1000000"},placeholder:"0",greedy:!1,rightAlign:!0,insertMode:!0,autoUnmask:!1,skipOptionalPartCharacter:"",usePrototypeDefinitions:!1,stripLeadingZeroes:!0,substituteRadixPoint:!0,definitions:{0:{validator:d},1:{validator:d,definitionSymbol:"9"},9:{validator:"[0-9\uff10-\uff19\u0660-\u0669\u06f0-\u06f9]",definitionSymbol:"*"},"+":{validator:function(e,t,n,i,a){return a.allowMinus&&("-"===e||e===a.negationSymbol.front)}},"-":{validator:function(e,t,n,i,a){return a.allowMinus&&e===a.negationSymbol.back}}},preValidation:function(e,t,n,i,a,r,o,s){var l=this;if(!1!==a.__financeInput&&n===a.radixPoint)return!1;var c=e.indexOf(a.radixPoint),u=t;if(t=function(e,t,n,i,a){return a._radixDance&&a.numericInput&&t!==a.negationSymbol.back&&e<=n&&(n>0||t==a.radixPoint)&&(void 0===i.validPositions[e-1]||i.validPositions[e-1].input!==a.negationSymbol.back)&&(e-=1),e}(t,n,c,r,a),"-"===n||n===a.negationSymbol.front){if(!0!==a.allowMinus)return!1;var d=!1,h=p("+",r),m=p("-",r);return-1!==h&&(d=[h,m]),!1!==d?{remove:d,caret:u-a.negationSymbol.back.length}:{insert:[{pos:f.call(l,"+",r),c:a.negationSymbol.front,fromIsValid:!0},{pos:f.call(l,"-",r),c:a.negationSymbol.back,fromIsValid:void 0}],caret:u+a.negationSymbol.back.length}}if(n===a.groupSeparator)return{caret:u};if(s)return!0;if(-1!==c&&!0===a._radixDance&&!1===i&&n===a.radixPoint&&void 0!==a.digits&&(isNaN(a.digits)||parseInt(a.digits)>0)&&c!==t){var v=f.call(l,a.radixPoint,r);return r.validPositions[v]&&(r.validPositions[v].generatedInput=r.validPositions[v].generated||!1),{caret:a._radixDance&&t===c-1?c+1:c}}if(!1===a.__financeInput)if(i){if(a.digitsOptional)return{rewritePosition:o.end};if(!a.digitsOptional){if(o.begin>c&&o.end<=c)return n===a.radixPoint?{insert:{pos:c+1,c:"0",fromIsValid:!0},rewritePosition:c}:{rewritePosition:c+1};if(o.begin<c)return{rewritePosition:o.begin-1}}}else if(!a.showMaskOnHover&&!a.showMaskOnFocus&&!a.digitsOptional&&a.digits>0&&""===this.__valueGet.call(this.el))return{rewritePosition:c};return{rewritePosition:t}},postValidation:function(e,t,n,i,a,r,o){if(!1===i)return i;if(o)return!0;if(null!==a.min||null!==a.max){var s=a.onUnMask(e.slice().reverse().join(""),void 0,l.extend({},a,{unmaskAsNumber:!0}));if(null!==a.min&&s<a.min&&(s.toString().length>a.min.toString().length||s<0))return!1;if(null!==a.max&&s>a.max)return!!a.SetMaxOnOverflow&&{refreshFromBuffer:!0,buffer:u(a.max.toString().replace(".",a.radixPoint).split(""),a.digits,a).reverse()}}return i},onUnMask:function(e,t,n){if(""===t&&!0===n.nullable)return t;var i=e.replace(n.prefix,"");return i=(i=i.replace(n.suffix,"")).replace(new RegExp((0,a.default)(n.groupSeparator),"g"),""),""!==n.placeholder.charAt(0)&&(i=i.replace(new RegExp(n.placeholder.charAt(0),"g"),"0")),n.unmaskAsNumber?(""!==n.radixPoint&&-1!==i.indexOf(n.radixPoint)&&(i=i.replace(a.default.call(this,n.radixPoint),".")),i=(i=i.replace(new RegExp("^"+(0,a.default)(n.negationSymbol.front)),"-")).replace(new RegExp((0,a.default)(n.negationSymbol.back)+"$"),""),Number(i)):i},isComplete:function(e,t){var n=(t.numericInput?e.slice().reverse():e).join("");return n=(n=(n=(n=(n=n.replace(new RegExp("^"+(0,a.default)(t.negationSymbol.front)),"-")).replace(new RegExp((0,a.default)(t.negationSymbol.back)+"$"),"")).replace(t.prefix,"")).replace(t.suffix,"")).replace(new RegExp((0,a.default)(t.groupSeparator)+"([0-9]{3})","g"),"$1"),","===t.radixPoint&&(n=n.replace((0,a.default)(t.radixPoint),".")),isFinite(n)},onBeforeMask:function(e,t){var n=t.radixPoint||",";isFinite(t.digits)&&(t.digits=parseInt(t.digits)),"number"!=typeof e&&"number"!==t.inputType||""===n||(e=e.toString().replace(".",n));var i="-"===e.charAt(0)||e.charAt(0)===t.negationSymbol.front,r=e.split(n),o=r[0].replace(/[^\-0-9]/g,""),s=r.length>1?r[1].replace(/[^0-9]/g,""):"",l=r.length>1;e=o+(""!==s?n+s:s);var c=0;if(""!==n&&(c=t.digitsOptional?t.digits<s.length?t.digits:s.length:t.digits,""!==s||!t.digitsOptional)){var f=Math.pow(10,c||1);e=e.replace((0,a.default)(n),"."),isNaN(parseFloat(e))||(e=(t.roundingFN(parseFloat(e)*f)/f).toFixed(c)),e=e.toString().replace(".",n)}if(0===t.digits&&-1!==e.indexOf(n)&&(e=e.substring(0,e.indexOf(n))),null!==t.min||null!==t.max){var p=e.toString().replace(n,".");null!==t.min&&p<t.min?e=t.min.toString().replace(".",n):null!==t.max&&p>t.max&&(e=t.max.toString().replace(".",n))}return i&&"-"!==e.charAt(0)&&(e="-"+e),u(e.toString().split(""),c,t,l).join("")},onBeforeWrite:function(e,t,n,i){function r(e,t){if(!1!==i.__financeInput||t){var n=e.indexOf(i.radixPoint);-1!==n&&e.splice(n,1)}if(""!==i.groupSeparator)for(;-1!==(n=e.indexOf(i.groupSeparator));)e.splice(n,1);return e}var o,s;if(i.stripLeadingZeroes&&(s=function(e,t){var n=new RegExp("(^"+(""!==t.negationSymbol.front?(0,a.default)(t.negationSymbol.front)+"?":"")+(0,a.default)(t.prefix)+")(.*)("+(0,a.default)(t.suffix)+(""!=t.negationSymbol.back?(0,a.default)(t.negationSymbol.back)+"?":"")+"$)").exec(e.slice().reverse().join("")),i=n?n[2]:"",r=!1;return i&&(i=i.split(t.radixPoint.charAt(0))[0],r=new RegExp("^[0"+t.groupSeparator+"]*").exec(i)),!(!r||!(r[0].length>1||r[0].length>0&&r[0].length<i.length))&&r}(t,i)))for(var c=t.join("").lastIndexOf(s[0].split("").reverse().join(""))-(s[0]==s.input?0:1),f=s[0]==s.input?1:0,p=s[0].length-f;p>0;p--)this.maskset.validPositions.splice(c+p,1),delete t[c+p];if(e)switch(e.type){case"blur":case"checkval":if(null!==i.min){var d=i.onUnMask(t.slice().reverse().join(""),void 0,l.extend({},i,{unmaskAsNumber:!0}));if(null!==i.min&&d<i.min)return{refreshFromBuffer:!0,buffer:u(i.min.toString().replace(".",i.radixPoint).split(""),i.digits,i).reverse()}}if(t[t.length-1]===i.negationSymbol.front){var h=new RegExp("(^"+(""!=i.negationSymbol.front?(0,a.default)(i.negationSymbol.front)+"?":"")+(0,a.default)(i.prefix)+")(.*)("+(0,a.default)(i.suffix)+(""!=i.negationSymbol.back?(0,a.default)(i.negationSymbol.back)+"?":"")+"$)").exec(r(t.slice(),!0).reverse().join(""));0==(h?h[2]:"")&&(o={refreshFromBuffer:!0,buffer:[0]})}else if(""!==i.radixPoint){t.indexOf(i.radixPoint)===i.suffix.length&&(o&&o.buffer?o.buffer.splice(0,1+i.suffix.length):(t.splice(0,1+i.suffix.length),o={refreshFromBuffer:!0,buffer:r(t)}))}if(i.enforceDigitsOnBlur){var m=(o=o||{})&&o.buffer||t.slice().reverse();o.refreshFromBuffer=!0,o.buffer=u(m,i.digits,i,!0).reverse()}}return o},onKeyDown:function(e,t,n,i){var a,r=l(this);if(3!=e.location){var s,c=e.key;if((s=i.shortcuts&&i.shortcuts[c])&&s.length>1)return this.inputmask.__valueSet.call(this,parseFloat(this.inputmask.unmaskedvalue())*parseInt(s)),r.trigger("setvalue"),!1}if(e.ctrlKey)switch(e.key){case o.keys.ArrowUp:return this.inputmask.__valueSet.call(this,parseFloat(this.inputmask.unmaskedvalue())+parseInt(i.step)),r.trigger("setvalue"),!1;case o.keys.ArrowDown:return this.inputmask.__valueSet.call(this,parseFloat(this.inputmask.unmaskedvalue())-parseInt(i.step)),r.trigger("setvalue"),!1}if(!e.shiftKey&&(e.key===o.keys.Delete||e.key===o.keys.Backspace||e.key===o.keys.BACKSPACE_SAFARI)&&n.begin!==t.length){if(t[e.key===o.keys.Delete?n.begin-1:n.end]===i.negationSymbol.front)return a=t.slice().reverse(),""!==i.negationSymbol.front&&a.shift(),""!==i.negationSymbol.back&&a.pop(),r.trigger("setvalue",[a.join(""),n.begin]),!1;if(!0===i._radixDance){var f=t.indexOf(i.radixPoint);if(i.digitsOptional){if(0===f)return(a=t.slice().reverse()).pop(),r.trigger("setvalue",[a.join(""),n.begin>=a.length?a.length:n.begin]),!1}else if(-1!==f&&(n.begin<f||n.end<f||e.key===o.keys.Delete&&(n.begin===f||n.begin-1===f))){var p=void 0;return n.begin===n.end&&(e.key===o.keys.Backspace||e.key===o.keys.BACKSPACE_SAFARI?n.begin++:e.key===o.keys.Delete&&n.begin-1===f&&(p=l.extend({},n),n.begin--,n.end--)),(a=t.slice().reverse()).splice(a.length-n.begin,n.begin-n.end+1),a=u(a,i.digits,i).join(""),p&&(n=p),r.trigger("setvalue",[a,n.begin>=a.length?f+1:n.begin]),!1}}}}},currency:{prefix:"",groupSeparator:",",alias:"numeric",digits:2,digitsOptional:!1},decimal:{alias:"numeric"},integer:{alias:"numeric",inputmode:"numeric",digits:0},percentage:{alias:"numeric",min:0,max:100,suffix:" %",digits:0,allowMinus:!1},indianns:{alias:"numeric",_mask:function(e){return"("+e.groupSeparator+"99){*|1}("+e.groupSeparator+"999){1|1}"},groupSeparator:",",radixPoint:".",placeholder:"0",digits:2,digitsOptional:!1}})},9380:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=!("undefined"==typeof window||!window.document||!window.document.createElement);t.default=n?window:{}},7760:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.HandleNativePlaceholder=function(e,t){var n=e?e.inputmask:this;if(s.ie){if(e.inputmask._valueGet()!==t&&(e.placeholder!==t||""===e.placeholder)){var i=r.getBuffer.call(n).slice(),a=e.inputmask._valueGet();if(a!==t){var o=r.getLastValidPosition.call(n);-1===o&&a===r.getBufferTemplate.call(n).join("")?i=[]:-1!==o&&u.call(n,i),p(e,i)}}}else e.placeholder!==t&&(e.placeholder=t,""===e.placeholder&&e.removeAttribute("placeholder"))},t.applyInputValue=c,t.checkVal=f,t.clearOptionalTail=u,t.unmaskedvalue=function(e){var t=e?e.inputmask:this,n=t.opts,i=t.maskset;if(e){if(void 0===e.inputmask)return e.value;e.inputmask&&e.inputmask.refreshValue&&c(e,e.inputmask._valueGet(!0))}for(var a=[],o=i.validPositions,s=0,l=o.length;s<l;s++)o[s]&&o[s].match&&(1!=o[s].match.static||Array.isArray(i.metadata)&&!0!==o[s].generatedInput)&&a.push(o[s].input);var u=0===a.length?"":(t.isRTL?a.reverse():a).join("");if("function"==typeof n.onUnMask){var f=(t.isRTL?r.getBuffer.call(t).slice().reverse():r.getBuffer.call(t)).join("");u=n.onUnMask.call(t,f,u,n)}return u},t.writeBuffer=p;var i=n(2839),a=n(4713),r=n(8711),o=n(7215),s=n(9845),l=n(6030);function c(e,t){var n=e?e.inputmask:this,i=n.opts;e.inputmask.refreshValue=!1,"function"==typeof i.onBeforeMask&&(t=i.onBeforeMask.call(n,t,i)||t),f(e,!0,!1,t=(t||"").toString().split("")),n.undoValue=n._valueGet(!0),(i.clearMaskOnLostFocus||i.clearIncomplete)&&e.inputmask._valueGet()===r.getBufferTemplate.call(n).join("")&&-1===r.getLastValidPosition.call(n)&&e.inputmask._valueSet("")}function u(e){e.length=0;for(var t,n=a.getMaskTemplate.call(this,!0,0,!0,void 0,!0);void 0!==(t=n.shift());)e.push(t);return e}function f(e,t,n,i,s){var c=e?e.inputmask:this,u=c.maskset,f=c.opts,d=c.dependencyLib,h=i.slice(),m="",v=-1,g=void 0,y=f.skipOptionalPartCharacter;f.skipOptionalPartCharacter="",r.resetMaskSet.call(c,!1),c.clicked=0,v=f.radixPoint?r.determineNewCaretPosition.call(c,{begin:0,end:0},!1,!1===f.__financeInput?"radixFocus":void 0).begin:0,u.p=v,c.caretPos={begin:v};var k=[],b=c.caretPos;if(h.forEach((function(e,t){if(void 0!==e){var i=new d.Event("_checkval");i.key=e,m+=e;var o=r.getLastValidPosition.call(c,void 0,!0);!function(e,t){for(var n=a.getMaskTemplate.call(c,!0,0).slice(e,r.seekNext.call(c,e,!1,!1)).join("").replace(/'/g,""),i=n.indexOf(t);i>0&&" "===n[i-1];)i--;var o=0===i&&!r.isMask.call(c,e)&&(a.getTest.call(c,e).match.nativeDef===t.charAt(0)||!0===a.getTest.call(c,e).match.static&&a.getTest.call(c,e).match.nativeDef==="'"+t.charAt(0)||" "===a.getTest.call(c,e).match.nativeDef&&(a.getTest.call(c,e+1).match.nativeDef===t.charAt(0)||!0===a.getTest.call(c,e+1).match.static&&a.getTest.call(c,e+1).match.nativeDef==="'"+t.charAt(0)));if(!o&&i>0&&!r.isMask.call(c,e,!1,!0)){var s=r.seekNext.call(c,e);c.caretPos.begin<s&&(c.caretPos={begin:s})}return o}(v,m)?(g=l.EventHandlers.keypressEvent.call(c,i,!0,!1,n,c.caretPos.begin))&&(v=c.caretPos.begin+1,m=""):g=l.EventHandlers.keypressEvent.call(c,i,!0,!1,n,o+1),g?(void 0!==g.pos&&u.validPositions[g.pos]&&!0===u.validPositions[g.pos].match.static&&void 0===u.validPositions[g.pos].alternation&&(k.push(g.pos),c.isRTL||(g.forwardPosition=g.pos+1)),p.call(c,void 0,r.getBuffer.call(c),g.forwardPosition,i,!1),c.caretPos={begin:g.forwardPosition,end:g.forwardPosition},b=c.caretPos):void 0===u.validPositions[t]&&h[t]===a.getPlaceholder.call(c,t)&&r.isMask.call(c,t,!0)?c.caretPos.begin++:c.caretPos=b}})),k.length>0){var x,P,w=r.seekNext.call(c,-1,void 0,!1);if(!o.isComplete.call(c,r.getBuffer.call(c))&&k.length<=w||o.isComplete.call(c,r.getBuffer.call(c))&&k.length>0&&k.length!==w&&0===k[0])for(var S=w;void 0!==(x=k.shift());)if(x<S){var O=new d.Event("_checkval");if((P=u.validPositions[x]).generatedInput=!0,O.key=P.input,(g=l.EventHandlers.keypressEvent.call(c,O,!0,!1,n,S))&&void 0!==g.pos&&g.pos!==x&&u.validPositions[g.pos]&&!0===u.validPositions[g.pos].match.static)k.push(g.pos);else if(!g)break;S++}}t&&p.call(c,e,r.getBuffer.call(c),g?g.forwardPosition:c.caretPos.begin,s||new d.Event("checkval"),s&&("input"===s.type&&c.undoValue!==r.getBuffer.call(c).join("")||"paste"===s.type)),f.skipOptionalPartCharacter=y}function p(e,t,n,a,s){var l=e?e.inputmask:this,c=l.opts,u=l.dependencyLib;if(a&&"function"==typeof c.onBeforeWrite){var f=c.onBeforeWrite.call(l,a,t,n,c);if(f){if(f.refreshFromBuffer){var p=f.refreshFromBuffer;o.refreshFromBuffer.call(l,!0===p?p:p.start,p.end,f.buffer||t),t=r.getBuffer.call(l,!0)}void 0!==n&&(n=void 0!==f.caret?f.caret:n)}}if(void 0!==e&&(e.inputmask._valueSet(t.join("")),void 0===n||void 0!==a&&"blur"===a.type||r.caret.call(l,e,n,void 0,void 0,void 0!==a&&"keydown"===a.type&&(a.key===i.keys.Delete||a.key===i.keys.Backspace)),!0===s)){var d=u(e),h=e.inputmask._valueGet();e.inputmask.skipInputEvent=!0,d.trigger("input"),setTimeout((function(){h===r.getBufferTemplate.call(l).join("")?d.trigger("cleared"):!0===o.isComplete.call(l,t)&&d.trigger("complete")}),0)}}},2394:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=n(157),a=m(n(3287)),r=m(n(9380)),o=n(2391),s=n(4713),l=n(8711),c=n(7215),u=n(7760),f=n(9716),p=m(n(7392)),d=m(n(3976));function h(e){return h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},h(e)}function m(e){return e&&e.__esModule?e:{default:e}}var v=r.default.document,g="_inputmask_opts";function y(e,t,n){if(!(this instanceof y))return new y(e,t,n);this.dependencyLib=a.default,this.el=void 0,this.events={},this.maskset=void 0,!0!==n&&("[object Object]"===Object.prototype.toString.call(e)?t=e:(t=t||{},e&&(t.alias=e)),this.opts=a.default.extend(!0,{},this.defaults,t),this.noMasksCache=t&&void 0!==t.definitions,this.userOptions=t||{},k(this.opts.alias,t,this.opts)),this.refreshValue=!1,this.undoValue=void 0,this.$el=void 0,this.skipInputEvent=!1,this.validationEvent=!1,this.ignorable=!1,this.maxLength,this.mouseEnter=!1,this.clicked=0,this.originalPlaceholder=void 0,this.isComposing=!1,this.hasAlternator=!1}function k(e,t,n){var i=y.prototype.aliases[e];return i?(i.alias&&k(i.alias,void 0,n),a.default.extend(!0,n,i),a.default.extend(!0,n,t),!0):(null===n.mask&&(n.mask=e),!1)}y.prototype={dataAttribute:"data-inputmask",defaults:d.default,definitions:p.default,aliases:{},masksCache:{},i18n:{},get isRTL(){return this.opts.isRTL||this.opts.numericInput},mask:function(e){var t=this;return"string"==typeof e&&(e=v.getElementById(e)||v.querySelectorAll(e)),(e=e.nodeName?[e]:Array.isArray(e)?e:[].slice.call(e)).forEach((function(e,n){var s=a.default.extend(!0,{},t.opts);if(function(e,t,n,i){function o(t,a){var o=""===i?t:i+"-"+t;null!==(a=void 0!==a?a:e.getAttribute(o))&&("string"==typeof a&&(0===t.indexOf("on")?a=r.default[a]:"false"===a?a=!1:"true"===a&&(a=!0)),n[t]=a)}if(!0===t.importDataAttributes){var s,l,c,u,f=e.getAttribute(i);if(f&&""!==f&&(f=f.replace(/'/g,'"'),l=JSON.parse("{"+f+"}")),l)for(u in c=void 0,l)if("alias"===u.toLowerCase()){c=l[u];break}for(s in o("alias",c),n.alias&&k(n.alias,n,t),t){if(l)for(u in c=void 0,l)if(u.toLowerCase()===s.toLowerCase()){c=l[u];break}o(s,c)}}a.default.extend(!0,t,n),("rtl"===e.dir||t.rightAlign)&&(e.style.textAlign="right");("rtl"===e.dir||t.numericInput)&&(e.dir="ltr",e.removeAttribute("dir"),t.isRTL=!0);return Object.keys(n).length}(e,s,a.default.extend(!0,{},t.userOptions),t.dataAttribute)){var l=(0,o.generateMaskSet)(s,t.noMasksCache);void 0!==l&&(void 0!==e.inputmask&&(e.inputmask.opts.autoUnmask=!0,e.inputmask.remove()),e.inputmask=new y(void 0,void 0,!0),e.inputmask.opts=s,e.inputmask.noMasksCache=t.noMasksCache,e.inputmask.userOptions=a.default.extend(!0,{},t.userOptions),e.inputmask.el=e,e.inputmask.$el=(0,a.default)(e),e.inputmask.maskset=l,a.default.data(e,g,t.userOptions),i.mask.call(e.inputmask))}})),e&&e[0]&&e[0].inputmask||this},option:function(e,t){return"string"==typeof e?this.opts[e]:"object"===h(e)?(a.default.extend(this.userOptions,e),this.el&&!0!==t&&this.mask(this.el),this):void 0},unmaskedvalue:function(e){if(this.maskset=this.maskset||(0,o.generateMaskSet)(this.opts,this.noMasksCache),void 0===this.el||void 0!==e){var t=("function"==typeof this.opts.onBeforeMask&&this.opts.onBeforeMask.call(this,e,this.opts)||e).split("");u.checkVal.call(this,void 0,!1,!1,t),"function"==typeof this.opts.onBeforeWrite&&this.opts.onBeforeWrite.call(this,void 0,l.getBuffer.call(this),0,this.opts)}return u.unmaskedvalue.call(this,this.el)},remove:function(){if(this.el){a.default.data(this.el,g,null);var e=this.opts.autoUnmask?(0,u.unmaskedvalue)(this.el):this._valueGet(this.opts.autoUnmask);e!==l.getBufferTemplate.call(this).join("")?this._valueSet(e,this.opts.autoUnmask):this._valueSet(""),f.EventRuler.off(this.el),Object.getOwnPropertyDescriptor&&Object.getPrototypeOf?Object.getOwnPropertyDescriptor(Object.getPrototypeOf(this.el),"value")&&this.__valueGet&&Object.defineProperty(this.el,"value",{get:this.__valueGet,set:this.__valueSet,configurable:!0}):v.__lookupGetter__&&this.el.__lookupGetter__("value")&&this.__valueGet&&(this.el.__defineGetter__("value",this.__valueGet),this.el.__defineSetter__("value",this.__valueSet)),this.el.inputmask=void 0}return this.el},getemptymask:function(){return this.maskset=this.maskset||(0,o.generateMaskSet)(this.opts,this.noMasksCache),(this.isRTL?l.getBufferTemplate.call(this).reverse():l.getBufferTemplate.call(this)).join("")},hasMaskedValue:function(){return!this.opts.autoUnmask},isComplete:function(){return this.maskset=this.maskset||(0,o.generateMaskSet)(this.opts,this.noMasksCache),c.isComplete.call(this,l.getBuffer.call(this))},getmetadata:function(){if(this.maskset=this.maskset||(0,o.generateMaskSet)(this.opts,this.noMasksCache),Array.isArray(this.maskset.metadata)){var e=s.getMaskTemplate.call(this,!0,0,!1).join("");return this.maskset.metadata.forEach((function(t){return t.mask!==e||(e=t,!1)})),e}return this.maskset.metadata},isValid:function(e){if(this.maskset=this.maskset||(0,o.generateMaskSet)(this.opts,this.noMasksCache),e){var t=("function"==typeof this.opts.onBeforeMask&&this.opts.onBeforeMask.call(this,e,this.opts)||e).split("");u.checkVal.call(this,void 0,!0,!1,t)}else e=this.isRTL?l.getBuffer.call(this).slice().reverse().join(""):l.getBuffer.call(this).join("");for(var n=l.getBuffer.call(this),i=l.determineLastRequiredPosition.call(this),a=n.length-1;a>i&&!l.isMask.call(this,a);a--);return n.splice(i,a+1-i),c.isComplete.call(this,n)&&e===(this.isRTL?l.getBuffer.call(this).slice().reverse().join(""):l.getBuffer.call(this).join(""))},format:function(e,t){this.maskset=this.maskset||(0,o.generateMaskSet)(this.opts,this.noMasksCache);var n=("function"==typeof this.opts.onBeforeMask&&this.opts.onBeforeMask.call(this,e,this.opts)||e).split("");u.checkVal.call(this,void 0,!0,!1,n);var i=this.isRTL?l.getBuffer.call(this).slice().reverse().join(""):l.getBuffer.call(this).join("");return t?{value:i,metadata:this.getmetadata()}:i},setValue:function(e){this.el&&(0,a.default)(this.el).trigger("setvalue",[e])},analyseMask:o.analyseMask},y.extendDefaults=function(e){a.default.extend(!0,y.prototype.defaults,e)},y.extendDefinitions=function(e){a.default.extend(!0,y.prototype.definitions,e)},y.extendAliases=function(e){a.default.extend(!0,y.prototype.aliases,e)},y.format=function(e,t,n){return y(t).format(e,n)},y.unmask=function(e,t){return y(t).unmaskedvalue(e)},y.isValid=function(e,t){return y(t).isValid(e)},y.remove=function(e){"string"==typeof e&&(e=v.getElementById(e)||v.querySelectorAll(e)),(e=e.nodeName?[e]:e).forEach((function(e){e.inputmask&&e.inputmask.remove()}))},y.setValue=function(e,t){"string"==typeof e&&(e=v.getElementById(e)||v.querySelectorAll(e)),(e=e.nodeName?[e]:e).forEach((function(e){e.inputmask?e.inputmask.setValue(t):(0,a.default)(e).trigger("setvalue",[t])}))},y.dependencyLib=a.default,r.default.Inputmask=y;t.default=y},5296:function(e,t,n){function i(e){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i(e)}var a=d(n(9380)),r=d(n(2394));function o(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,(r=a.key,o=void 0,o=function(e,t){if("object"!==i(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var a=n.call(e,t||"default");if("object"!==i(a))return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(r,"string"),"symbol"===i(o)?o:String(o)),a)}var r,o}function s(e){var t=u();return function(){var n,a=p(e);if(t){var r=p(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return function(e,t){if(t&&("object"===i(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,n)}}function l(e){var t="function"==typeof Map?new Map:void 0;return l=function(e){if(null===e||!function(e){try{return-1!==Function.toString.call(e).indexOf("[native code]")}catch(t){return"function"==typeof e}}(e))return e;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,n)}function n(){return c(e,arguments,p(this).constructor)}return n.prototype=Object.create(e.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),f(n,e)},l(e)}function c(e,t,n){return c=u()?Reflect.construct.bind():function(e,t,n){var i=[null];i.push.apply(i,t);var a=new(Function.bind.apply(e,i));return n&&f(a,n.prototype),a},c.apply(null,arguments)}function u(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}function f(e,t){return f=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},f(e,t)}function p(e){return p=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},p(e)}function d(e){return e&&e.__esModule?e:{default:e}}var h=a.default.document;if(h&&h.head&&h.head.attachShadow&&a.default.customElements&&void 0===a.default.customElements.get("input-mask")){var m=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&f(e,t)}(l,e);var t,n,i,a=s(l);function l(){var e;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,l);var t=(e=a.call(this)).getAttributeNames(),n=e.attachShadow({mode:"closed"});for(var i in e.input=h.createElement("input"),e.input.type="text",n.appendChild(e.input),t)Object.prototype.hasOwnProperty.call(t,i)&&e.input.setAttribute(t[i],e.getAttribute(t[i]));var o=new r.default;return o.dataAttribute="",o.mask(e.input),e.input.inputmask.shadowRoot=n,e}return t=l,(n=[{key:"attributeChangedCallback",value:function(e,t,n){this.input.setAttribute(e,n)}},{key:"value",get:function(){return this.input.value},set:function(e){this.input.value=e}}])&&o(t.prototype,n),i&&o(t,i),Object.defineProperty(t,"prototype",{writable:!1}),l}(l(HTMLElement));a.default.customElements.define("input-mask",m)}},443:function(e,t,n){var i=o(n(7957)),a=o(n(2394));function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}function o(e){return e&&e.__esModule?e:{default:e}}void 0===i.default.fn.inputmask&&(i.default.fn.inputmask=function(e,t){var n,o=this[0];if(void 0===t&&(t={}),"string"==typeof e)switch(e){case"unmaskedvalue":return o&&o.inputmask?o.inputmask.unmaskedvalue():(0,i.default)(o).val();case"remove":return this.each((function(){this.inputmask&&this.inputmask.remove()}));case"getemptymask":return o&&o.inputmask?o.inputmask.getemptymask():"";case"hasMaskedValue":return!(!o||!o.inputmask)&&o.inputmask.hasMaskedValue();case"isComplete":return!o||!o.inputmask||o.inputmask.isComplete();case"getmetadata":return o&&o.inputmask?o.inputmask.getmetadata():void 0;case"setvalue":a.default.setValue(o,t);break;case"option":if("string"!=typeof t)return this.each((function(){if(void 0!==this.inputmask)return this.inputmask.option(t)}));if(o&&void 0!==o.inputmask)return o.inputmask.option(t);break;default:return t.alias=e,n=new a.default(t),this.each((function(){n.mask(this)}))}else{if(Array.isArray(e))return t.alias=e,n=new a.default(t),this.each((function(){n.mask(this)}));if("object"==r(e))return n=new a.default(e),void 0===e.mask&&void 0===e.alias?this.each((function(){if(void 0!==this.inputmask)return this.inputmask.option(e);n.mask(this)})):this.each((function(){n.mask(this)}));if(void 0===e)return this.each((function(){(n=new a.default(t)).mask(this)}))}})},2839:function(e,t){function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var i,a,r,o,s=[],l=!0,c=!1;try{if(r=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;l=!1}else for(;!(l=(i=r.call(n)).done)&&(s.push(i.value),s.length!==t);l=!0);}catch(e){c=!0,a=e}finally{try{if(!l&&null!=n.return&&(o=n.return(),Object(o)!==o))return}finally{if(c)throw a}}return s}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return a(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return a(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,i=new Array(t);n<t;n++)i[n]=e[n];return i}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e,t,i){return(t=function(e){var t=function(e,t){if("object"!==n(e)||null===e)return e;var i=e[Symbol.toPrimitive];if(void 0!==i){var a=i.call(e,t||"default");if("object"!==n(a))return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===n(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}Object.defineProperty(t,"__esModule",{value:!0}),t.keys=t.keyCode=t.ignorables=void 0,t.toKey=function(e,t){return c[e]||(t?String.fromCharCode(e):String.fromCharCode(e).toLowerCase())},t.toKeyCode=function(e){return l[e]};var s=t.ignorables={Alt:18,AltGraph:18,ArrowDown:40,ArrowLeft:37,ArrowRight:39,ArrowUp:38,Backspace:8,CapsLock:20,Control:17,ContextMenu:93,Dead:221,Delete:46,End:35,Escape:27,F1:112,F2:113,F3:114,F4:115,F5:116,F6:117,F7:118,F8:119,F9:120,F10:121,F11:122,F12:123,Home:36,Insert:45,NumLock:144,PageDown:34,PageUp:33,Pause:19,PrintScreen:44,Process:229,Shift:16,ScrollLock:145,Tab:9,Unidentified:229},l=t.keyCode=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({c:67,x:88,z:90,BACKSPACE_SAFARI:127,Enter:13,Meta_LEFT:91,Meta_RIGHT:92,Space:32},s),c=Object.entries(l).reduce((function(e,t){var n=i(t,2),a=n[0],r=n[1];return e[r]=void 0===e[r]?a:e[r],e}),{});t.keys=Object.entries(l).reduce((function(e,t){var n=i(t,2),a=n[0];n[1];return e[a]="Space"===a?" ":a,e}),{})},2391:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.analyseMask=function(e,t,n){var i,o,l,c,u,f,p=/(?:[?*+]|\{[0-9+*]+(?:,[0-9+*]*)?(?:\|[0-9+*]*)?\})|[^.?*+^${[]()|\\]+|./g,d=/\[\^?]?(?:[^\\\]]+|\\[\S\s]?)*]?|\\(?:0(?:[0-3][0-7]{0,2}|[4-7][0-7]?)?|[1-9][0-9]*|x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4}|c[A-Za-z]|[\S\s]?)|\((?:\?[:=!]?)?|(?:[?*+]|\{[0-9]+(?:,[0-9]*)?\})\??|[^.?*+^${[()|\\]+|./g,h=!1,m=new a.default,v=[],g=[],y=!1;function k(e,i,a){a=void 0!==a?a:e.matches.length;var o=e.matches[a-1];if(t){if(0===i.indexOf("[")||h&&/\\d|\\s|\\w|\\p/i.test(i)||"."===i){var l=n.casing?"i":"";/\\p\{.*}/i.test(i)&&(l+="u"),e.matches.splice(a++,0,{fn:new RegExp(i,l),static:!1,optionality:!1,newBlockMarker:void 0===o?"master":o.def!==i,casing:null,def:i,placeholder:"object"===s(n.placeholder)?n.placeholder[m.matches.length]:void 0,nativeDef:i})}else h&&(i=i[i.length-1]),i.split("").forEach((function(t,i){o=e.matches[a-1],e.matches.splice(a++,0,{fn:/[a-z]/i.test(n.staticDefinitionSymbol||t)?new RegExp("["+(n.staticDefinitionSymbol||t)+"]",n.casing?"i":""):null,static:!0,optionality:!1,newBlockMarker:void 0===o?"master":o.def!==t&&!0!==o.static,casing:null,def:n.staticDefinitionSymbol||t,placeholder:void 0!==n.staticDefinitionSymbol?t:"object"===s(n.placeholder)?n.placeholder[m.matches.length]:void 0,nativeDef:(h?"'":"")+t})}));h=!1}else{var c=n.definitions&&n.definitions[i]||n.usePrototypeDefinitions&&r.default.prototype.definitions[i];c&&!h?e.matches.splice(a++,0,{fn:c.validator?"string"==typeof c.validator?new RegExp(c.validator,n.casing?"i":""):new function(){this.test=c.validator}:new RegExp("."),static:c.static||!1,optionality:c.optional||!1,defOptionality:c.optional||!1,newBlockMarker:void 0===o||c.optional?"master":o.def!==(c.definitionSymbol||i),casing:c.casing,def:c.definitionSymbol||i,placeholder:c.placeholder,nativeDef:i,generated:c.generated}):(e.matches.splice(a++,0,{fn:/[a-z]/i.test(n.staticDefinitionSymbol||i)?new RegExp("["+(n.staticDefinitionSymbol||i)+"]",n.casing?"i":""):null,static:!0,optionality:!1,newBlockMarker:void 0===o?"master":o.def!==i&&!0!==o.static,casing:null,def:n.staticDefinitionSymbol||i,placeholder:void 0!==n.staticDefinitionSymbol?i:void 0,nativeDef:(h?"'":"")+i}),h=!1)}}function b(){if(v.length>0){if(k(c=v[v.length-1],o),c.isAlternator){u=v.pop();for(var e=0;e<u.matches.length;e++)u.matches[e].isGroup&&(u.matches[e].isGroup=!1);v.length>0?(c=v[v.length-1]).matches.push(u):m.matches.push(u)}}else k(m,o)}function x(e){var t=new a.default(!0);return t.openGroup=!1,t.matches=e,t}function P(){if((l=v.pop()).openGroup=!1,void 0!==l)if(v.length>0){if((c=v[v.length-1]).matches.push(l),c.isAlternator){u=v.pop();for(var e=0;e<u.matches.length;e++)u.matches[e].isGroup=!1,u.matches[e].alternatorGroup=!1;v.length>0?(c=v[v.length-1]).matches.push(u):m.matches.push(u)}}else m.matches.push(l);else b()}function w(e){var t=e.pop();return t.isQuantifier&&(t=x([e.pop(),t])),t}t&&(n.optionalmarker[0]=void 0,n.optionalmarker[1]=void 0);for(;i=t?d.exec(e):p.exec(e);){if(o=i[0],t){switch(o.charAt(0)){case"?":o="{0,1}";break;case"+":case"*":o="{"+o+"}";break;case"|":if(0===v.length){var S=x(m.matches);S.openGroup=!0,v.push(S),m.matches=[],y=!0}}switch(o){case"\\d":o="[0-9]";break;case"\\p":o+=d.exec(e)[0],o+=d.exec(e)[0]}}if(h)b();else switch(o.charAt(0)){case"$":case"^":t||b();break;case n.escapeChar:h=!0,t&&b();break;case n.optionalmarker[1]:case n.groupmarker[1]:P();break;case n.optionalmarker[0]:v.push(new a.default(!1,!0));break;case n.groupmarker[0]:v.push(new a.default(!0));break;case n.quantifiermarker[0]:var O=new a.default(!1,!1,!0),M=(o=o.replace(/[{}?]/g,"")).split("|"),_=M[0].split(","),E=isNaN(_[0])?_[0]:parseInt(_[0]),j=1===_.length?E:isNaN(_[1])?_[1]:parseInt(_[1]),T=isNaN(M[1])?M[1]:parseInt(M[1]);"*"!==E&&"+"!==E||(E="*"===j?0:1),O.quantifier={min:E,max:j,jit:T};var A=v.length>0?v[v.length-1].matches:m.matches;(i=A.pop()).isGroup||(i=x([i])),A.push(i),A.push(O);break;case n.alternatormarker:if(v.length>0){var D=(c=v[v.length-1]).matches[c.matches.length-1];f=c.openGroup&&(void 0===D.matches||!1===D.isGroup&&!1===D.isAlternator)?v.pop():w(c.matches)}else f=w(m.matches);if(f.isAlternator)v.push(f);else if(f.alternatorGroup?(u=v.pop(),f.alternatorGroup=!1):u=new a.default(!1,!1,!1,!0),u.matches.push(f),v.push(u),f.openGroup){f.openGroup=!1;var L=new a.default(!0);L.alternatorGroup=!0,v.push(L)}break;default:b()}}y&&P();for(;v.length>0;)l=v.pop(),m.matches.push(l);m.matches.length>0&&(!function e(i){i&&i.matches&&i.matches.forEach((function(a,r){var o=i.matches[r+1];(void 0===o||void 0===o.matches||!1===o.isQuantifier)&&a&&a.isGroup&&(a.isGroup=!1,t||(k(a,n.groupmarker[0],0),!0!==a.openGroup&&k(a,n.groupmarker[1]))),e(a)}))}(m),g.push(m));(n.numericInput||n.isRTL)&&function e(t){for(var i in t.matches=t.matches.reverse(),t.matches)if(Object.prototype.hasOwnProperty.call(t.matches,i)){var a=parseInt(i);if(t.matches[i].isQuantifier&&t.matches[a+1]&&t.matches[a+1].isGroup){var r=t.matches[i];t.matches.splice(i,1),t.matches.splice(a+1,0,r)}void 0!==t.matches[i].matches?t.matches[i]=e(t.matches[i]):t.matches[i]=((o=t.matches[i])===n.optionalmarker[0]?o=n.optionalmarker[1]:o===n.optionalmarker[1]?o=n.optionalmarker[0]:o===n.groupmarker[0]?o=n.groupmarker[1]:o===n.groupmarker[1]&&(o=n.groupmarker[0]),o)}var o;return t}(g[0]);return g},t.generateMaskSet=function(e,t){var n;function a(e,t){var n=t.repeat,i=t.groupmarker,a=t.quantifiermarker,r=t.keepStatic;if(n>0||"*"===n||"+"===n){var s="*"===n?0:"+"===n?1:n;if(s!=n)e=i[0]+e+i[1]+a[0]+s+","+n+a[1];else for(var c=e,u=1;u<s;u++)e+=c}if(!0===r){var f=e.match(new RegExp("(.)\\[([^\\]]*)\\]","g"));f&&f.forEach((function(t,n){var i=function(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var i,a,r,o,s=[],l=!0,c=!1;try{if(r=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;l=!1}else for(;!(l=(i=r.call(n)).done)&&(s.push(i.value),s.length!==t);l=!0);}catch(e){c=!0,a=e}finally{try{if(!l&&null!=n.return&&(o=n.return(),Object(o)!==o))return}finally{if(c)throw a}}return s}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return l(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return l(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}(t.split("["),2),a=i[0],r=i[1];r=r.replace("]",""),e=e.replace(new RegExp("".concat((0,o.default)(a),"\\[").concat((0,o.default)(r),"\\]")),a.charAt(0)===r.charAt(0)?"(".concat(a,"|").concat(a).concat(r,")"):"".concat(a,"[").concat(r,"]"))}))}return e}function c(e,n,o){var l,c,u=!1;return null!==e&&""!==e||((u=null!==o.regex)?e=(e=o.regex).replace(/^(\^)(.*)(\$)$/,"$2"):(u=!0,e=".*")),1===e.length&&!1===o.greedy&&0!==o.repeat&&(o.placeholder=""),e=a(e,o),c=u?"regex_"+o.regex:o.numericInput?e.split("").reverse().join(""):e,null!==o.keepStatic&&(c="ks_"+o.keepStatic+c),"object"===s(o.placeholder)&&(c="ph_"+JSON.stringify(o.placeholder)+c),void 0===r.default.prototype.masksCache[c]||!0===t?(l={mask:e,maskToken:r.default.prototype.analyseMask(e,u,o),validPositions:[],_buffer:void 0,buffer:void 0,tests:{},excludes:{},metadata:n,maskLength:void 0,jitOffset:{}},!0!==t&&(r.default.prototype.masksCache[c]=l,l=i.default.extend(!0,{},r.default.prototype.masksCache[c]))):l=i.default.extend(!0,{},r.default.prototype.masksCache[c]),l}"function"==typeof e.mask&&(e.mask=e.mask(e));if(Array.isArray(e.mask)){if(e.mask.length>1){null===e.keepStatic&&(e.keepStatic=!0);var u=e.groupmarker[0];return(e.isRTL?e.mask.reverse():e.mask).forEach((function(t){u.length>1&&(u+=e.alternatormarker),void 0!==t.mask&&"function"!=typeof t.mask?u+=t.mask:u+=t})),c(u+=e.groupmarker[1],e.mask,e)}e.mask=e.mask.pop()}n=e.mask&&void 0!==e.mask.mask&&"function"!=typeof e.mask.mask?c(e.mask.mask,e.mask,e):c(e.mask,e.mask,e);null===e.keepStatic&&(e.keepStatic=!1);return n};var i=c(n(3287)),a=c(n(9695)),r=c(n(2394)),o=c(n(7184));function s(e){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s(e)}function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,i=new Array(t);n<t;n++)i[n]=e[n];return i}function c(e){return e&&e.__esModule?e:{default:e}}},157:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.mask=function(){var e=this,t=this.opts,n=this.el,u=this.dependencyLib;o.EventRuler.off(n);var f=function(t,n){"textarea"!==t.tagName.toLowerCase()&&n.ignorables.push(i.keys.Enter);var s=t.getAttribute("type"),l="input"===t.tagName.toLowerCase()&&n.supportsInputType.includes(s)||t.isContentEditable||"textarea"===t.tagName.toLowerCase();if(!l)if("input"===t.tagName.toLowerCase()){var c=document.createElement("input");c.setAttribute("type",s),l="text"===c.type,c=null}else l="partial";return!1!==l?function(t){var i,s;function l(){return this.inputmask?this.inputmask.opts.autoUnmask?this.inputmask.unmaskedvalue():-1!==a.getLastValidPosition.call(e)||!0!==n.nullable?(this.inputmask.shadowRoot||this.ownerDocument).activeElement===this&&n.clearMaskOnLostFocus?(e.isRTL?r.clearOptionalTail.call(e,a.getBuffer.call(e).slice()).reverse():r.clearOptionalTail.call(e,a.getBuffer.call(e).slice())).join(""):i.call(this):"":i.call(this)}function c(e){s.call(this,e),this.inputmask&&(0,r.applyInputValue)(this,e)}if(!t.inputmask.__valueGet){if(!0!==n.noValuePatching){if(Object.getOwnPropertyDescriptor){var f=Object.getPrototypeOf?Object.getOwnPropertyDescriptor(Object.getPrototypeOf(t),"value"):void 0;f&&f.get&&f.set?(i=f.get,s=f.set,Object.defineProperty(t,"value",{get:l,set:c,configurable:!0})):"input"!==t.tagName.toLowerCase()&&(i=function(){return this.textContent},s=function(e){this.textContent=e},Object.defineProperty(t,"value",{get:l,set:c,configurable:!0}))}else document.__lookupGetter__&&t.__lookupGetter__("value")&&(i=t.__lookupGetter__("value"),s=t.__lookupSetter__("value"),t.__defineGetter__("value",l),t.__defineSetter__("value",c));t.inputmask.__valueGet=i,t.inputmask.__valueSet=s}t.inputmask._valueGet=function(t){return e.isRTL&&!0!==t?i.call(this.el).split("").reverse().join(""):i.call(this.el)},t.inputmask._valueSet=function(t,n){s.call(this.el,null==t?"":!0!==n&&e.isRTL?t.split("").reverse().join(""):t)},void 0===i&&(i=function(){return this.value},s=function(e){this.value=e},function(t){if(u.valHooks&&(void 0===u.valHooks[t]||!0!==u.valHooks[t].inputmaskpatch)){var i=u.valHooks[t]&&u.valHooks[t].get?u.valHooks[t].get:function(e){return e.value},o=u.valHooks[t]&&u.valHooks[t].set?u.valHooks[t].set:function(e,t){return e.value=t,e};u.valHooks[t]={get:function(t){if(t.inputmask){if(t.inputmask.opts.autoUnmask)return t.inputmask.unmaskedvalue();var r=i(t);return-1!==a.getLastValidPosition.call(e,void 0,void 0,t.inputmask.maskset.validPositions)||!0!==n.nullable?r:""}return i(t)},set:function(e,t){var n=o(e,t);return e.inputmask&&(0,r.applyInputValue)(e,t),n},inputmaskpatch:!0}}}(t.type),function(e){o.EventRuler.on(e,"mouseenter",(function(){var e=this,t=e.inputmask._valueGet(!0);t!=(e.inputmask.isRTL?a.getBuffer.call(e.inputmask).slice().reverse():a.getBuffer.call(e.inputmask)).join("")&&(0,r.applyInputValue)(e,t)}))}(t))}}(t):t.inputmask=void 0,l}(n,t);if(!1!==f){e.originalPlaceholder=n.placeholder,e.maxLength=void 0!==n?n.maxLength:void 0,-1===e.maxLength&&(e.maxLength=void 0),"inputMode"in n&&null===n.getAttribute("inputmode")&&(n.inputMode=t.inputmode,n.setAttribute("inputmode",t.inputmode)),!0===f&&(t.showMaskOnFocus=t.showMaskOnFocus&&-1===["cc-number","cc-exp"].indexOf(n.autocomplete),s.iphone&&(t.insertModeVisual=!1,n.setAttribute("autocorrect","off")),o.EventRuler.on(n,"submit",c.EventHandlers.submitEvent),o.EventRuler.on(n,"reset",c.EventHandlers.resetEvent),o.EventRuler.on(n,"blur",c.EventHandlers.blurEvent),o.EventRuler.on(n,"focus",c.EventHandlers.focusEvent),o.EventRuler.on(n,"invalid",c.EventHandlers.invalidEvent),o.EventRuler.on(n,"click",c.EventHandlers.clickEvent),o.EventRuler.on(n,"mouseleave",c.EventHandlers.mouseleaveEvent),o.EventRuler.on(n,"mouseenter",c.EventHandlers.mouseenterEvent),o.EventRuler.on(n,"paste",c.EventHandlers.pasteEvent),o.EventRuler.on(n,"cut",c.EventHandlers.cutEvent),o.EventRuler.on(n,"complete",t.oncomplete),o.EventRuler.on(n,"incomplete",t.onincomplete),o.EventRuler.on(n,"cleared",t.oncleared),!0!==t.inputEventOnly&&o.EventRuler.on(n,"keydown",c.EventHandlers.keyEvent),(s.mobile||t.inputEventOnly)&&n.removeAttribute("maxLength"),o.EventRuler.on(n,"input",c.EventHandlers.inputFallBackEvent)),o.EventRuler.on(n,"setvalue",c.EventHandlers.setValueEvent),a.getBufferTemplate.call(e).join(""),e.undoValue=e._valueGet(!0);var p=(n.inputmask.shadowRoot||n.ownerDocument).activeElement;if(""!==n.inputmask._valueGet(!0)||!1===t.clearMaskOnLostFocus||p===n){(0,r.applyInputValue)(n,n.inputmask._valueGet(!0),t);var d=a.getBuffer.call(e).slice();!1===l.isComplete.call(e,d)&&t.clearIncomplete&&a.resetMaskSet.call(e,!1),t.clearMaskOnLostFocus&&p!==n&&(-1===a.getLastValidPosition.call(e)?d=[]:r.clearOptionalTail.call(e,d)),(!1===t.clearMaskOnLostFocus||t.showMaskOnFocus&&p===n||""!==n.inputmask._valueGet(!0))&&(0,r.writeBuffer)(n,d),p===n&&a.caret.call(e,n,a.seekNext.call(e,a.getLastValidPosition.call(e)))}}};var i=n(2839),a=n(8711),r=n(7760),o=n(9716),s=n(9845),l=n(7215),c=n(6030)},9695:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,n,i){this.matches=[],this.openGroup=e||!1,this.alternatorGroup=!1,this.isGroup=e||!1,this.isOptional=t||!1,this.isQuantifier=n||!1,this.isAlternator=i||!1,this.quantifier={min:1,max:1}}},3194:function(){Array.prototype.includes||Object.defineProperty(Array.prototype,"includes",{value:function(e,t){if(null==this)throw new TypeError('"this" is null or not defined');var n=Object(this),i=n.length>>>0;if(0===i)return!1;for(var a=0|t,r=Math.max(a>=0?a:i-Math.abs(a),0);r<i;){if(n[r]===e)return!0;r++}return!1}})},9302:function(){var e=Function.bind.call(Function.call,Array.prototype.reduce),t=Function.bind.call(Function.call,Object.prototype.propertyIsEnumerable),n=Function.bind.call(Function.call,Array.prototype.concat),i=Object.keys;Object.entries||(Object.entries=function(a){return e(i(a),(function(e,i){return n(e,"string"==typeof i&&t(a,i)?[[i,a[i]]]:[])}),[])})},7149:function(){function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}"function"!=typeof Object.getPrototypeOf&&(Object.getPrototypeOf="object"===e("test".__proto__)?function(e){return e.__proto__}:function(e){return e.constructor.prototype})},4013:function(){String.prototype.includes||(String.prototype.includes=function(e,t){return"number"!=typeof t&&(t=0),!(t+e.length>this.length)&&-1!==this.indexOf(e,t)})},8711:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.caret=function(e,t,n,i,r){var o,s=this,l=this.opts;if(void 0===t)return"selectionStart"in e&&"selectionEnd"in e?(t=e.selectionStart,n=e.selectionEnd):a.default.getSelection?(o=a.default.getSelection().getRangeAt(0)).commonAncestorContainer.parentNode!==e&&o.commonAncestorContainer!==e||(t=o.startOffset,n=o.endOffset):document.selection&&document.selection.createRange&&(n=(t=0-(o=document.selection.createRange()).duplicate().moveStart("character",-e.inputmask._valueGet().length))+o.text.length),{begin:i?t:f.call(s,t),end:i?n:f.call(s,n)};if(Array.isArray(t)&&(n=s.isRTL?t[0]:t[1],t=s.isRTL?t[1]:t[0]),void 0!==t.begin&&(n=s.isRTL?t.begin:t.end,t=s.isRTL?t.end:t.begin),"number"==typeof t){t=i?t:f.call(s,t),n="number"==typeof(n=i?n:f.call(s,n))?n:t;var c=parseInt(((e.ownerDocument.defaultView||a.default).getComputedStyle?(e.ownerDocument.defaultView||a.default).getComputedStyle(e,null):e.currentStyle).fontSize)*n;if(e.scrollLeft=c>e.scrollWidth?c:0,e.inputmask.caretPos={begin:t,end:n},l.insertModeVisual&&!1===l.insertMode&&t===n&&(r||n++),e===(e.inputmask.shadowRoot||e.ownerDocument).activeElement)if("setSelectionRange"in e)e.setSelectionRange(t,n);else if(a.default.getSelection){if(o=document.createRange(),void 0===e.firstChild||null===e.firstChild){var u=document.createTextNode("");e.appendChild(u)}o.setStart(e.firstChild,t<e.inputmask._valueGet().length?t:e.inputmask._valueGet().length),o.setEnd(e.firstChild,n<e.inputmask._valueGet().length?n:e.inputmask._valueGet().length),o.collapse(!0);var p=a.default.getSelection();p.removeAllRanges(),p.addRange(o)}else e.createTextRange&&((o=e.createTextRange()).collapse(!0),o.moveEnd("character",n),o.moveStart("character",t),o.select())}},t.determineLastRequiredPosition=function(e){var t,n,i=this,a=i.maskset,s=i.dependencyLib,c=r.getMaskTemplate.call(i,!0,l.call(i),!0,!0),u=c.length,f=l.call(i),p={},d=a.validPositions[f],h=void 0!==d?d.locator.slice():void 0;for(t=f+1;t<c.length;t++)h=(n=r.getTestTemplate.call(i,t,h,t-1)).locator.slice(),p[t]=s.extend(!0,{},n);var m=d&&void 0!==d.alternation?d.locator[d.alternation]:void 0;for(t=u-1;t>f&&(((n=p[t]).match.optionality||n.match.optionalQuantifier&&n.match.newBlockMarker||m&&(m!==p[t].locator[d.alternation]&&1!=n.match.static||!0===n.match.static&&n.locator[d.alternation]&&o.checkAlternationMatch.call(i,n.locator[d.alternation].toString().split(","),m.toString().split(","))&&""!==r.getTests.call(i,t)[0].def))&&c[t]===r.getPlaceholder.call(i,t,n.match));t--)u--;return e?{l:u,def:p[u]?p[u].match:void 0}:u},t.determineNewCaretPosition=function(e,t,n){var i=this,a=i.maskset,o=i.opts;t&&(i.isRTL?e.end=e.begin:e.begin=e.end);if(e.begin===e.end){switch(n=n||o.positionCaretOnClick){case"none":break;case"select":e={begin:0,end:s.call(i).length};break;case"ignore":e.end=e.begin=u.call(i,l.call(i));break;case"radixFocus":if(i.clicked>1&&0==a.validPositions.length)break;if(function(e){if(""!==o.radixPoint&&0!==o.digits){var t=a.validPositions;if(void 0===t[e]||t[e].input===r.getPlaceholder.call(i,e)){if(e<u.call(i,-1))return!0;var n=s.call(i).indexOf(o.radixPoint);if(-1!==n){for(var l=0,c=t.length;l<c;l++)if(t[l]&&n<l&&t[l].input!==r.getPlaceholder.call(i,l))return!1;return!0}}}return!1}(e.begin)){var f=s.call(i).join("").indexOf(o.radixPoint);e.end=e.begin=o.numericInput?u.call(i,f):f;break}default:var p=e.begin,d=l.call(i,p,!0),h=u.call(i,-1!==d||c.call(i,0)?d:-1);if(p<=h)e.end=e.begin=c.call(i,p,!1,!0)?p:u.call(i,p);else{var m=a.validPositions[d],v=r.getTestTemplate.call(i,h,m?m.match.locator:void 0,m),g=r.getPlaceholder.call(i,h,v.match);if(""!==g&&s.call(i)[h]!==g&&!0!==v.match.optionalQuantifier&&!0!==v.match.newBlockMarker||!c.call(i,h,o.keepStatic,!0)&&v.match.def===g){var y=u.call(i,h);(p>=y||p===h)&&(h=y)}e.end=e.begin=h}}return e}},t.getBuffer=s,t.getBufferTemplate=function(){var e=this.maskset;void 0===e._buffer&&(e._buffer=r.getMaskTemplate.call(this,!1,1),void 0===e.buffer&&(e.buffer=e._buffer.slice()));return e._buffer},t.getLastValidPosition=l,t.isMask=c,t.resetMaskSet=function(e){var t=this.maskset;t.buffer=void 0,!0!==e&&(t.validPositions=[],t.p=0);!1===e&&(t.tests={})},t.seekNext=u,t.seekPrevious=function(e,t){var n=this,i=e-1;if(e<=0)return 0;for(;i>0&&(!0===t&&(!0!==r.getTest.call(n,i).match.newBlockMarker||!c.call(n,i,void 0,!0))||!0!==t&&!c.call(n,i,void 0,!0));)i--;return i},t.translatePosition=f;var i,a=(i=n(9380))&&i.__esModule?i:{default:i},r=n(4713),o=n(7215);function s(e){var t=this,n=t.maskset;return void 0!==n.buffer&&!0!==e||(n.buffer=r.getMaskTemplate.call(t,!0,l.call(t),!0),void 0===n._buffer&&(n._buffer=n.buffer.slice())),n.buffer}function l(e,t,n){var i=this.maskset,a=-1,r=-1,o=n||i.validPositions;void 0===e&&(e=-1);for(var s=0,l=o.length;s<l;s++)o[s]&&(t||!0!==o[s].generatedInput)&&(s<=e&&(a=s),s>=e&&(r=s));return-1===a||a==e?r:-1==r||e-a<r-e?a:r}function c(e,t,n){var i=this,a=this.maskset,o=r.getTestTemplate.call(i,e).match;if(""===o.def&&(o=r.getTest.call(i,e).match),!0!==o.static)return o.fn;if(!0===n&&void 0!==a.validPositions[e]&&!0!==a.validPositions[e].generatedInput)return!0;if(!0!==t&&e>-1){if(n){var s=r.getTests.call(i,e);return s.length>1+(""===s[s.length-1].match.def?1:0)}var l=r.determineTestTemplate.call(i,e,r.getTests.call(i,e)),c=r.getPlaceholder.call(i,e,l.match);return l.match.def!==c}return!1}function u(e,t,n){var i=this;void 0===n&&(n=!0);for(var a=e+1;""!==r.getTest.call(i,a).match.def&&(!0===t&&(!0!==r.getTest.call(i,a).match.newBlockMarker||!c.call(i,a,void 0,!0))||!0!==t&&!c.call(i,a,void 0,n));)a++;return a}function f(e){var t=this.opts,n=this.el;return!this.isRTL||"number"!=typeof e||t.greedy&&""===t.placeholder||!n||(e=this._valueGet().length-e)<0&&(e=0),e}},4713:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.determineTestTemplate=f,t.getDecisionTaker=l,t.getMaskTemplate=function(e,t,n,i,a){var r=this,o=this.opts,s=this.maskset,l=o.greedy;a&&o.greedy&&(o.greedy=!1,r.maskset.tests={});t=t||0;var p,d,m,v,g=[],y=0;do{if(!0===e&&s.validPositions[y])d=(m=a&&s.validPositions[y].match.optionality&&void 0===s.validPositions[y+1]&&(!0===s.validPositions[y].generatedInput||s.validPositions[y].input==o.skipOptionalPartCharacter&&y>0)?f.call(r,y,h.call(r,y,p,y-1)):s.validPositions[y]).match,p=m.locator.slice(),g.push(!0===n?m.input:!1===n?d.nativeDef:c.call(r,y,d));else{d=(m=u.call(r,y,p,y-1)).match,p=m.locator.slice();var k=!0!==i&&(!1!==o.jitMasking?o.jitMasking:d.jit);(v=(v||s.validPositions[y-1])&&d.static&&d.def!==o.groupSeparator&&null===d.fn)||!1===k||void 0===k||"number"==typeof k&&isFinite(k)&&k>y?g.push(!1===n?d.nativeDef:c.call(r,g.length,d)):v=!1}y++}while(!0!==d.static||""!==d.def||t>y);""===g[g.length-1]&&g.pop();!1===n&&void 0!==s.maskLength||(s.maskLength=y-1);return o.greedy=l,g},t.getPlaceholder=c,t.getTest=p,t.getTestTemplate=u,t.getTests=h,t.isSubsetOf=d;var i,a=n(8711),r=(i=n(2394))&&i.__esModule?i:{default:i};function o(e){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o(e)}function s(e,t){var n=(null!=e.alternation?e.mloc[l(e)]:e.locator).join("");if(""!==n)for(n=n.split(":")[0];n.length<t;)n+="0";return n}function l(e){var t=e.locator[e.alternation];return"string"==typeof t&&t.length>0&&(t=t.split(",")[0]),void 0!==t?t.toString():""}function c(e,t,n){var i=this,r=this.opts,s=this.maskset;if(void 0!==(t=t||p.call(i,e).match).placeholder||!0===n){if(""!==t.placeholder&&!0===t.static&&!0!==t.generated){var l=a.getLastValidPosition.call(i,e),c=a.seekNext.call(i,l);return(n?e<=c:e<c)?r.staticDefinitionSymbol&&t.static?t.nativeDef:t.def:"function"==typeof t.placeholder?t.placeholder(r):t.placeholder}return"function"==typeof t.placeholder?t.placeholder(r):t.placeholder}if(!0===t.static){if(e>-1&&void 0===s.validPositions[e]){var u,f=h.call(i,e),d=[];if("string"==typeof r.placeholder&&f.length>1+(""===f[f.length-1].match.def?1:0))for(var m=0;m<f.length;m++)if(""!==f[m].match.def&&!0!==f[m].match.optionality&&!0!==f[m].match.optionalQuantifier&&(!0===f[m].match.static||void 0===u||!1!==f[m].match.fn.test(u.match.def,s,e,!0,r))&&(d.push(f[m]),!0===f[m].match.static&&(u=f[m]),d.length>1&&/[0-9a-bA-Z]/.test(d[0].match.def)))return r.placeholder.charAt(e%r.placeholder.length)}return t.def}return"object"===o(r.placeholder)?t.def:r.placeholder.charAt(e%r.placeholder.length)}function u(e,t,n){return this.maskset.validPositions[e]||f.call(this,e,h.call(this,e,t?t.slice():t,n))}function f(e,t){var n=this.opts,i=0,a=function(e,t){var n=0,i=!1;t.forEach((function(e){e.match.optionality&&(0!==n&&n!==e.match.optionality&&(i=!0),(0===n||n>e.match.optionality)&&(n=e.match.optionality))})),n&&(0==e||1==t.length?n=0:i||(n=0));return n}(e,t);e=e>0?e-1:0;var r,o,l,c=s(p.call(this,e));n.greedy&&t.length>1&&""===t[t.length-1].match.def&&(i=1);for(var u=0;u<t.length-i;u++){var f=t[u];r=s(f,c.length);var d=Math.abs(r-c);(void 0===o||""!==r&&d<o||l&&!n.greedy&&l.match.optionality&&l.match.optionality-a>0&&"master"===l.match.newBlockMarker&&(!f.match.optionality||f.match.optionality-a<1||!f.match.newBlockMarker)||l&&!n.greedy&&l.match.optionalQuantifier&&!f.match.optionalQuantifier)&&(o=d,l=f)}return l}function p(e,t){var n=this.maskset;return n.validPositions[e]?n.validPositions[e]:(t||h.call(this,e))[0]}function d(e,t,n){function i(e){for(var t,n=[],i=-1,a=0,r=e.length;a<r;a++)if("-"===e.charAt(a))for(t=e.charCodeAt(a+1);++i<t;)n.push(String.fromCharCode(i));else i=e.charCodeAt(a),n.push(e.charAt(a));return n.join("")}return e.match.def===t.match.nativeDef||!(!(n.regex||e.match.fn instanceof RegExp&&t.match.fn instanceof RegExp)||!0===e.match.static||!0===t.match.static)&&("."===t.match.fn.source||-1!==i(t.match.fn.source.replace(/[[\]/]/g,"")).indexOf(i(e.match.fn.source.replace(/[[\]/]/g,""))))}function h(e,t,n){var i,a,o=this,s=this.dependencyLib,l=this.maskset,c=this.opts,u=this.el,p=l.maskToken,h=t?n:0,m=t?t.slice():[0],v=[],g=!1,y=t?t.join(""):"",k=!1;function b(t,n,a,s){function f(a,s,p){function m(e,t){var n=0===t.matches.indexOf(e);return n||t.matches.every((function(i,a){return!0===i.isQuantifier?n=m(e,t.matches[a-1]):Object.prototype.hasOwnProperty.call(i,"matches")&&(n=m(e,i)),!n})),n}function P(e,t,n){var i,a;if((l.tests[e]||l.validPositions[e])&&(l.validPositions[e]?[l.validPositions[e]]:l.tests[e]).every((function(e,r){if(e.mloc[t])return i=e,!1;var o=void 0!==n?n:e.alternation,s=void 0!==e.locator[o]?e.locator[o].toString().indexOf(t):-1;return(void 0===a||s<a)&&-1!==s&&(i=e,a=s),!0})),i){var r=i.locator[i.alternation],o=i.mloc[t]||i.mloc[r]||i.locator;if(-1!==o[o.length-1].toString().indexOf(":"))o.pop();return o.slice((void 0!==n?n:i.alternation)+1)}return void 0!==n?P(e,t):void 0}function w(t,n){return!0===t.match.static&&!0!==n.match.static&&n.match.fn.test(t.match.def,l,e,!1,c,!1)}function S(e,t){var n=e.alternation,i=void 0===t||n<=t.alternation&&-1===e.locator[n].toString().indexOf(t.locator[n]);if(!i&&n>t.alternation)for(var a=0;a<n;a++)if(e.locator[a]!==t.locator[a]){n=a,i=!0;break}return!!i&&function(n){e.mloc=e.mloc||{};var i=e.locator[n];if(void 0!==i){if("string"==typeof i&&(i=i.split(",")[0]),void 0===e.mloc[i]&&(e.mloc[i]=e.locator.slice(),e.mloc[i].push(":".concat(e.alternation))),void 0!==t){for(var a in t.mloc)"string"==typeof a&&(a=parseInt(a.split(",")[0])),e.mloc[a+0]=t.mloc[a];e.locator[n]=Object.keys(e.mloc).join(",")}return e.alternation>n&&(e.alternation=n),!0}return e.alternation=void 0,!1}(n)}function O(e,t){if(e.locator.length!==t.locator.length)return!1;for(var n=e.alternation+1;n<e.locator.length;n++)if(e.locator[n]!==t.locator[n])return!1;return!0}if(h>e+c._maxTestPos)throw"Inputmask: There is probably an error in your mask definition or in the code. Create an issue on github with an example of the mask you are using. "+l.mask;if(h===e&&void 0===a.matches){if(v.push({match:a,locator:s.reverse(),cd:y,mloc:{}}),!a.optionality||void 0!==p||!(c.definitions&&c.definitions[a.nativeDef]&&c.definitions[a.nativeDef].optional||r.default.prototype.definitions[a.nativeDef]&&r.default.prototype.definitions[a.nativeDef].optional))return!0;g=!0,h=e}else if(void 0!==a.matches){if(a.isGroup&&p!==a)return function(){if(a=f(t.matches[t.matches.indexOf(a)+1],s,p))return!0}();if(a.isOptional)return function(){var t=a,r=v.length;if(a=b(a,n,s,p),v.length>0){if(v.forEach((function(e,t){t>=r&&(e.match.optionality=e.match.optionality?e.match.optionality+1:1)})),i=v[v.length-1].match,void 0!==p||!m(i,t))return a;g=!0,h=e}}();if(a.isAlternator)return function(){function i(e){for(var t,n=e.matches[0].matches?e.matches[0].matches.length:1,i=0;i<e.matches.length&&n===(t=e.matches[i].matches?e.matches[i].matches.length:1);i++);return n!==t}o.hasAlternator=!0;var r,m=a,y=[],b=v.slice(),x=s.length,M=n.length>0?n.shift():-1;if(-1===M||"string"==typeof M){var _,E=h,j=n.slice(),T=[];if("string"==typeof M)T=M.split(",");else for(_=0;_<m.matches.length;_++)T.push(_.toString());if(void 0!==l.excludes[e]){for(var A=T.slice(),D=0,L=l.excludes[e].length;D<L;D++){var B=l.excludes[e][D].toString().split(":");s.length==B[1]&&T.splice(T.indexOf(B[0]),1)}0===T.length&&(delete l.excludes[e],T=A)}(!0===c.keepStatic||isFinite(parseInt(c.keepStatic))&&E>=c.keepStatic)&&(T=T.slice(0,1));for(var C=0;C<T.length;C++){_=parseInt(T[C]),v=[],n="string"==typeof M&&P(h,_,x)||j.slice();var R=m.matches[_];if(R&&f(R,[_].concat(s),p))a=!0;else if(0===C&&(k=i(m)),R&&R.matches&&R.matches.length>m.matches[0].matches.length)break;r=v.slice(),h=E,v=[];for(var I=0;I<r.length;I++){var F=r[I],N=!1;F.alternation=F.alternation||x,S(F);for(var V=0;V<y.length;V++){var G=y[V];if("string"!=typeof M||void 0!==F.alternation&&T.includes(F.locator[F.alternation].toString())){if(F.match.nativeDef===G.match.nativeDef){N=!0,S(G,F);break}if(d(F,G,c)){S(F,G)&&(N=!0,y.splice(y.indexOf(G),0,F));break}if(d(G,F,c)){S(G,F);break}if(w(F,G)){O(F,G)||void 0!==u.inputmask.userOptions.keepStatic?S(F,G)&&(N=!0,y.splice(y.indexOf(G),0,F)):c.keepStatic=!0;break}if(w(G,F)){S(G,F);break}}}N||y.push(F)}}v=b.concat(y),h=e,g=v.length>0&&k,a=y.length>0&&!k,n=j.slice()}else a=f(m.matches[M]||t.matches[M],[M].concat(s),p);if(a)return!0}();if(a.isQuantifier&&p!==t.matches[t.matches.indexOf(a)-1])return function(){for(var r=a,o=!1,u=n.length>0?n.shift():0;u<(isNaN(r.quantifier.max)?u+1:r.quantifier.max)&&h<=e;u++){var p=t.matches[t.matches.indexOf(r)-1];if(a=f(p,[u].concat(s),p)){if(v.forEach((function(t,n){(i=x(p,t.match)?t.match:v[v.length-1].match).optionalQuantifier=u>=r.quantifier.min,i.jit=(u+1)*(p.matches.indexOf(i)+1)>r.quantifier.jit,i.optionalQuantifier&&m(i,p)&&(g=!0,h=e,c.greedy&&null==l.validPositions[e-1]&&u>r.quantifier.min&&-1!=["*","+"].indexOf(r.quantifier.max)&&(v.pop(),y=void 0),o=!0,a=!1),!o&&i.jit&&(l.jitOffset[e]=p.matches.length-p.matches.indexOf(i))})),o)break;return!0}}}();if(a=b(a,n,s,p))return!0}else h++}for(var p=n.length>0?n.shift():0;p<t.matches.length;p++)if(!0!==t.matches[p].isQuantifier){var m=f(t.matches[p],[p].concat(a),s);if(m&&h===e)return m;if(h>e)break}}function x(e,t){var n=-1!=e.matches.indexOf(t);return n||e.matches.forEach((function(e,i){void 0===e.matches||n||(n=x(e,t))})),n}if(e>-1){if(void 0===t){for(var P,w=e-1;void 0===(P=l.validPositions[w]||l.tests[w])&&w>-1;)w--;void 0!==P&&w>-1&&(m=function(e,t){var n,i=[];return Array.isArray(t)||(t=[t]),t.length>0&&(void 0===t[0].alternation||!0===c.keepStatic?0===(i=f.call(o,e,t.slice()).locator.slice()).length&&(i=t[0].locator.slice()):t.forEach((function(e){""!==e.def&&(0===i.length?(n=e.alternation,i=e.locator.slice()):e.locator[n]&&-1===i[n].toString().indexOf(e.locator[n])&&(i[n]+=","+e.locator[n]))}))),i}(w,P),y=m.join(""),h=w)}if(l.tests[e]&&l.tests[e][0].cd===y)return l.tests[e];for(var S=m.shift();S<p.length;S++){if(b(p[S],m,[S])&&h===e||h>e)break}}return(0===v.length||g)&&v.push({match:{fn:null,static:!0,optionality:!1,casing:null,def:"",placeholder:""},locator:k?[0]:[],mloc:{},cd:y}),void 0!==t&&l.tests[e]?a=s.extend(!0,[],v):(l.tests[e]=s.extend(!0,[],v),a=l.tests[e]),v.forEach((function(e){e.match.optionality=e.match.defOptionality||!1})),a}},7215:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.alternate=s,t.checkAlternationMatch=function(e,t,n){for(var i,a=this.opts.greedy?t:t.slice(0,1),r=!1,o=void 0!==n?n.split(","):[],s=0;s<o.length;s++)-1!==(i=e.indexOf(o[s]))&&e.splice(i,1);for(var l=0;l<e.length;l++)if(a.includes(e[l])){r=!0;break}return r},t.handleRemove=function(e,t,n,o,l){var c=this,u=this.maskset,f=this.opts;if((f.numericInput||c.isRTL)&&(t===a.keys.Backspace?t=a.keys.Delete:t===a.keys.Delete&&(t=a.keys.Backspace),c.isRTL)){var p=n.end;n.end=n.begin,n.begin=p}var d,h=r.getLastValidPosition.call(c,void 0,!0);n.end>=r.getBuffer.call(c).length&&h>=n.end&&(n.end=h+1);t===a.keys.Backspace?n.end-n.begin<1&&(n.begin=r.seekPrevious.call(c,n.begin)):t===a.keys.Delete&&n.begin===n.end&&(n.end=r.isMask.call(c,n.end,!0,!0)?n.end+1:r.seekNext.call(c,n.end)+1);if(!1!==(d=m.call(c,n))){if(!0!==o&&!1!==f.keepStatic||null!==f.regex&&-1!==i.getTest.call(c,n.begin).match.def.indexOf("|")){var v=s.call(c,!0);if(v){var g=void 0!==v.caret?v.caret:v.pos?r.seekNext.call(c,v.pos.begin?v.pos.begin:v.pos):r.getLastValidPosition.call(c,-1,!0);(t!==a.keys.Delete||n.begin>g)&&n.begin}}!0!==o&&(u.p=t===a.keys.Delete?n.begin+d:n.begin,u.p=r.determineNewCaretPosition.call(c,{begin:u.p,end:u.p},!1,!1===f.insertMode&&t===a.keys.Backspace?"none":void 0).begin)}},t.isComplete=c,t.isSelection=u,t.isValid=f,t.refreshFromBuffer=d,t.revalidateMask=m;var i=n(4713),a=n(2839),r=n(8711),o=n(6030);function s(e,t,n,a,o,l){var c,u,p,d,h,m,v,g,y,k,b,x=this,P=this.dependencyLib,w=this.opts,S=x.maskset,O=P.extend(!0,[],S.validPositions),M=P.extend(!0,{},S.tests),_=!1,E=!1,j=void 0!==o?o:r.getLastValidPosition.call(x);if(l&&(k=l.begin,b=l.end,l.begin>l.end&&(k=l.end,b=l.begin)),-1===j&&void 0===o)c=0,u=(d=i.getTest.call(x,c)).alternation;else for(;j>=0;j--)if((p=S.validPositions[j])&&void 0!==p.alternation){if(j<=(e||0)&&d&&d.locator[p.alternation]!==p.locator[p.alternation])break;c=j,u=S.validPositions[c].alternation,d=p}if(void 0!==u){v=parseInt(c),S.excludes[v]=S.excludes[v]||[],!0!==e&&S.excludes[v].push((0,i.getDecisionTaker)(d)+":"+d.alternation);var T=[],A=-1;for(h=v;v<r.getLastValidPosition.call(x,void 0,!0)+1;h++)-1===A&&e<=h&&void 0!==t&&(T.push(t),A=T.length-1),(m=S.validPositions[v])&&!0!==m.generatedInput&&(void 0===l||h<k||h>=b)&&T.push(m.input),S.validPositions.splice(v,1);for(-1===A&&void 0!==t&&(T.push(t),A=T.length-1);void 0!==S.excludes[v]&&S.excludes[v].length<10;){for(S.tests={},r.resetMaskSet.call(x,!0),_=!0,h=0;h<T.length&&(g=_.caret||0==w.insertMode&&null!=g?r.seekNext.call(x,g):r.getLastValidPosition.call(x,void 0,!0)+1,y=T[h],_=f.call(x,g,y,!1,a,!0));h++)h===A&&(E=_),1==e&&_&&(E={caretPos:h});if(_)break;if(r.resetMaskSet.call(x),d=i.getTest.call(x,v),S.validPositions=P.extend(!0,[],O),S.tests=P.extend(!0,{},M),!S.excludes[v]){E=s.call(x,e,t,n,a,v-1,l);break}if(null!=d.alternation){var D=(0,i.getDecisionTaker)(d);if(-1!==S.excludes[v].indexOf(D+":"+d.alternation)){E=s.call(x,e,t,n,a,v-1,l);break}for(S.excludes[v].push(D+":"+d.alternation),h=v;h<r.getLastValidPosition.call(x,void 0,!0)+1;h++)S.validPositions.splice(v)}else delete S.excludes[v]}}return E&&!1===w.keepStatic||delete S.excludes[v],E}function l(e,t,n){var i=this.opts,r=this.maskset;switch(i.casing||t.casing){case"upper":e=e.toUpperCase();break;case"lower":e=e.toLowerCase();break;case"title":var o=r.validPositions[n-1];e=0===n||o&&o.input===String.fromCharCode(a.keyCode.Space)?e.toUpperCase():e.toLowerCase();break;default:if("function"==typeof i.casing){var s=Array.prototype.slice.call(arguments);s.push(r.validPositions),e=i.casing.apply(this,s)}}return e}function c(e){var t=this,n=this.opts,a=this.maskset;if("function"==typeof n.isComplete)return n.isComplete(e,n);if("*"!==n.repeat){var o=!1,s=r.determineLastRequiredPosition.call(t,!0),l=s.l;if(void 0===s.def||s.def.newBlockMarker||s.def.optionality||s.def.optionalQuantifier){o=!0;for(var c=0;c<=l;c++){var u=i.getTestTemplate.call(t,c).match;if(!0!==u.static&&void 0===a.validPositions[c]&&(!1===u.optionality||void 0===u.optionality||u.optionality&&0==u.newBlockMarker)&&(!1===u.optionalQuantifier||void 0===u.optionalQuantifier)||!0===u.static&&""!=u.def&&e[c]!==i.getPlaceholder.call(t,c,u)){o=!1;break}}}return o}}function u(e){var t=this.opts.insertMode?0:1;return this.isRTL?e.begin-e.end>t:e.end-e.begin>t}function f(e,t,n,a,o,p,v){var g=this,y=this.dependencyLib,k=this.opts,b=g.maskset;n=!0===n;var x=e;function P(e){if(void 0!==e){if(void 0!==e.remove&&(Array.isArray(e.remove)||(e.remove=[e.remove]),e.remove.sort((function(e,t){return g.isRTL?e.pos-t.pos:t.pos-e.pos})).forEach((function(e){m.call(g,{begin:e,end:e+1})})),e.remove=void 0),void 0!==e.insert&&(Array.isArray(e.insert)||(e.insert=[e.insert]),e.insert.sort((function(e,t){return g.isRTL?t.pos-e.pos:e.pos-t.pos})).forEach((function(e){""!==e.c&&f.call(g,e.pos,e.c,void 0===e.strict||e.strict,void 0!==e.fromIsValid?e.fromIsValid:a)})),e.insert=void 0),e.refreshFromBuffer&&e.buffer){var t=e.refreshFromBuffer;d.call(g,!0===t?t:t.start,t.end,e.buffer),e.refreshFromBuffer=void 0}void 0!==e.rewritePosition&&(x=e.rewritePosition,e=!0)}return e}function w(t,n,o){var s=!1;return i.getTests.call(g,t).every((function(c,f){var p=c.match;if(r.getBuffer.call(g,!0),!1!==(s=(!p.jit||void 0!==b.validPositions[r.seekPrevious.call(g,t)])&&(null!=p.fn?p.fn.test(n,b,t,o,k,u.call(g,e)):(n===p.def||n===k.skipOptionalPartCharacter)&&""!==p.def&&{c:i.getPlaceholder.call(g,t,p,!0)||p.def,pos:t}))){var d=void 0!==s.c?s.c:n,h=t;return d=d===k.skipOptionalPartCharacter&&!0===p.static?i.getPlaceholder.call(g,t,p,!0)||p.def:d,!0!==(s=P(s))&&void 0!==s.pos&&s.pos!==t&&(h=s.pos),!0!==s&&void 0===s.pos&&void 0===s.c?!1:(!1===m.call(g,e,y.extend({},c,{input:l.call(g,d,p,h)}),a,h)&&(s=!1),!1)}return!0})),s}void 0!==e.begin&&(x=g.isRTL?e.end:e.begin);var S=!0,O=y.extend(!0,[],b.validPositions);if(!1===k.keepStatic&&void 0!==b.excludes[x]&&!0!==o&&!0!==a)for(var M=x;M<(g.isRTL?e.begin:e.end);M++)void 0!==b.excludes[M]&&(b.excludes[M]=void 0,delete b.tests[M]);if("function"==typeof k.preValidation&&!0!==a&&!0!==p&&(S=P(S=k.preValidation.call(g,r.getBuffer.call(g),x,t,u.call(g,e),k,b,e,n||o))),!0===S){if(S=w(x,t,n),(!n||!0===a)&&!1===S&&!0!==p){var _=b.validPositions[x];if(!_||!0!==_.match.static||_.match.def!==t&&t!==k.skipOptionalPartCharacter){if(k.insertMode||void 0===b.validPositions[r.seekNext.call(g,x)]||e.end>x){var E=!1;if(b.jitOffset[x]&&void 0===b.validPositions[r.seekNext.call(g,x)]&&!1!==(S=f.call(g,x+b.jitOffset[x],t,!0,!0))&&(!0!==o&&(S.caret=x),E=!0),e.end>x&&(b.validPositions[x]=void 0),!E&&!r.isMask.call(g,x,k.keepStatic&&0===x))for(var j=x+1,T=r.seekNext.call(g,x,!1,0!==x);j<=T;j++)if(!1!==(S=w(j,t,n))){S=h.call(g,x,void 0!==S.pos?S.pos:j)||S,x=j;break}}}else S={caret:r.seekNext.call(g,x)}}g.hasAlternator&&!0!==o&&!n&&(o=!0,!1===S&&k.keepStatic&&(c.call(g,r.getBuffer.call(g))||0===x)?S=s.call(g,x,t,n,a,void 0,e):(u.call(g,e)&&b.tests[x]&&b.tests[x].length>1&&k.keepStatic||1==S&&!0!==k.numericInput&&b.tests[x]&&b.tests[x].length>1&&r.getLastValidPosition.call(g,void 0,!0)>x)&&(S=s.call(g,!0))),!0===S&&(S={pos:x})}if("function"==typeof k.postValidation&&!0!==a&&!0!==p){var A=k.postValidation.call(g,r.getBuffer.call(g,!0),void 0!==e.begin?g.isRTL?e.end:e.begin:e,t,S,k,b,n,v);void 0!==A&&(S=!0===A?S:A)}S&&void 0===S.pos&&(S.pos=x),!1===S||!0===p?(r.resetMaskSet.call(g,!0),b.validPositions=y.extend(!0,[],O)):h.call(g,void 0,x,!0);var D=P(S);void 0!==g.maxLength&&(r.getBuffer.call(g).length>g.maxLength&&!a&&(r.resetMaskSet.call(g,!0),b.validPositions=y.extend(!0,[],O),D=!1));return D}function p(e,t,n){for(var a=this.maskset,r=!1,o=i.getTests.call(this,e),s=0;s<o.length;s++){if(o[s].match&&(o[s].match.nativeDef===t.match[n.shiftPositions?"def":"nativeDef"]&&(!n.shiftPositions||!t.match.static)||o[s].match.nativeDef===t.match.nativeDef||n.regex&&!o[s].match.static&&o[s].match.fn.test(t.input,a,e,!1,n))){r=!0;break}if(o[s].match&&o[s].match.def===t.match.nativeDef){r=void 0;break}}return!1===r&&void 0!==a.jitOffset[e]&&(r=p.call(this,e+a.jitOffset[e],t,n)),r}function d(e,t,n){var i,a,s=this,l=this.maskset,c=this.opts,u=this.dependencyLib,f=c.skipOptionalPartCharacter,p=s.isRTL?n.slice().reverse():n;if(c.skipOptionalPartCharacter="",!0===e)r.resetMaskSet.call(s,!1),e=0,t=n.length,a=r.determineNewCaretPosition.call(s,{begin:0,end:0},!1).begin;else{for(i=e;i<t;i++)l.validPositions.splice(e,0);a=e}var d=new u.Event("keypress");for(i=e;i<t;i++){d.key=p[i].toString(),s.ignorable=!1;var h=o.EventHandlers.keypressEvent.call(s,d,!0,!1,!1,a);!1!==h&&void 0!==h&&(a=h.forwardPosition)}c.skipOptionalPartCharacter=f}function h(e,t,n){var a=this,o=this.maskset,s=this.dependencyLib;if(void 0===e)for(e=t-1;e>0&&!o.validPositions[e];e--);for(var l=e;l<t;l++){if(void 0===o.validPositions[l]&&!r.isMask.call(a,l,!1))if(0==l?i.getTest.call(a,l):o.validPositions[l-1]){var c=i.getTests.call(a,l).slice();""===c[c.length-1].match.def&&c.pop();var u,p=i.determineTestTemplate.call(a,l,c);if(p&&(!0!==p.match.jit||"master"===p.match.newBlockMarker&&(u=o.validPositions[l+1])&&!0===u.match.optionalQuantifier)&&((p=s.extend({},p,{input:i.getPlaceholder.call(a,l,p.match,!0)||p.match.def})).generatedInput=!0,m.call(a,l,p,!0),!0!==n)){var d=o.validPositions[t].input;return o.validPositions[t]=void 0,f.call(a,t,d,!0,!0)}}}}function m(e,t,n,a){var o=this,s=this.maskset,l=this.opts,c=this.dependencyLib;function d(e,t,n){var i=t[e];if(void 0!==i&&!0===i.match.static&&!0!==i.match.optionality&&(void 0===t[0]||void 0===t[0].alternation)){var a=n.begin<=e-1?t[e-1]&&!0===t[e-1].match.static&&t[e-1]:t[e-1],r=n.end>e+1?t[e+1]&&!0===t[e+1].match.static&&t[e+1]:t[e+1];return a&&r}return!1}var h=0,m=void 0!==e.begin?e.begin:e,v=void 0!==e.end?e.end:e,g=!0;if(e.begin>e.end&&(m=e.end,v=e.begin),a=void 0!==a?a:m,void 0===n&&(m!==v||l.insertMode&&void 0!==s.validPositions[a]||void 0===t||t.match.optionalQuantifier||t.match.optionality)){var y,k=c.extend(!0,[],s.validPositions),b=r.getLastValidPosition.call(o,void 0,!0);s.p=m;var x=u.call(o,e)?m:a;for(y=b;y>=x;y--)s.validPositions.splice(y,1),void 0===t&&delete s.tests[y+1];var P,w,S=a,O=S;for(t&&(s.validPositions[a]=c.extend(!0,{},t),O++,S++),null==k[v]&&s.jitOffset[v]&&(v+=s.jitOffset[v]+1),y=t?v:v-1;y<=b;y++){if(void 0!==(P=k[y])&&!0!==P.generatedInput&&(y>=v||y>=m&&d(y,k,{begin:m,end:v}))){for(;""!==i.getTest.call(o,O).match.def;){if(!1!==(w=p.call(o,O,P,l))||"+"===P.match.def){"+"===P.match.def&&r.getBuffer.call(o,!0);var M=f.call(o,O,P.input,"+"!==P.match.def,!0);if(g=!1!==M,S=(M.pos||O)+1,!g&&w)break}else g=!1;if(g){void 0===t&&P.match.static&&y===e.begin&&h++;break}if(!g&&r.getBuffer.call(o),O>s.maskLength)break;O++}""==i.getTest.call(o,O).match.def&&(g=!1),O=S}if(!g)break}if(!g)return s.validPositions=c.extend(!0,[],k),r.resetMaskSet.call(o,!0),!1}else t&&i.getTest.call(o,a).match.cd===t.match.cd&&(s.validPositions[a]=c.extend(!0,{},t));return r.resetMaskSet.call(o,!0),h}},7957:function(t){t.exports=e}},n={};function i(e){var a=n[e];if(void 0!==a)return a.exports;var r=n[e]={exports:{}};return t[e](r,r.exports,i),r.exports}var a={};return function(){var e=a;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t,n=(t=i(3046))&&t.__esModule?t:{default:t};i(443);e.default=n.default}(),a}()}));
/* End */
;
; /* Start:"a:4:{s:4:"full";s:70:"/bitrix/templates/atib/libs/jquery-ui/jquery-ui.min.js?171050645222092";s:6:"source";s:54:"/bitrix/templates/atib/libs/jquery-ui/jquery-ui.min.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
!function(e){"use strict";"function"==typeof define&&define.amd?define(["jquery"],e):e(jQuery)}(function(l){"use strict";l.ui=l.ui||{};l.ui.version="1.13.2";var n,i=0,o=Array.prototype.hasOwnProperty,h=Array.prototype.slice;l.cleanData=(n=l.cleanData,function(e){for(var t,i,s=0;null!=(i=e[s]);s++)(t=l._data(i,"events"))&&t.remove&&l(i).triggerHandler("remove");n(e)}),l.widget=function(e,i,t){var s,n,a,o={},h=e.split(".")[0],r=h+"-"+(e=e.split(".")[1]);return t||(t=i,i=l.Widget),Array.isArray(t)&&(t=l.extend.apply(null,[{}].concat(t))),l.expr.pseudos[r.toLowerCase()]=function(e){return!!l.data(e,r)},l[h]=l[h]||{},s=l[h][e],n=l[h][e]=function(e,t){if(!this||!this._createWidget)return new n(e,t);arguments.length&&this._createWidget(e,t)},l.extend(n,s,{version:t.version,_proto:l.extend({},t),_childConstructors:[]}),(a=new i).options=l.widget.extend({},a.options),l.each(t,function(t,s){function n(){return i.prototype[t].apply(this,arguments)}function a(e){return i.prototype[t].apply(this,e)}o[t]="function"==typeof s?function(){var e,t=this._super,i=this._superApply;return this._super=n,this._superApply=a,e=s.apply(this,arguments),this._super=t,this._superApply=i,e}:s}),n.prototype=l.widget.extend(a,{widgetEventPrefix:s&&a.widgetEventPrefix||e},o,{constructor:n,namespace:h,widgetName:e,widgetFullName:r}),s?(l.each(s._childConstructors,function(e,t){var i=t.prototype;l.widget(i.namespace+"."+i.widgetName,n,t._proto)}),delete s._childConstructors):i._childConstructors.push(n),l.widget.bridge(e,n),n},l.widget.extend=function(e){for(var t,i,s=h.call(arguments,1),n=0,a=s.length;n<a;n++)for(t in s[n])i=s[n][t],o.call(s[n],t)&&void 0!==i&&(l.isPlainObject(i)?e[t]=l.isPlainObject(e[t])?l.widget.extend({},e[t],i):l.widget.extend({},i):e[t]=i);return e},l.widget.bridge=function(a,t){var o=t.prototype.widgetFullName||a;l.fn[a]=function(i){var e="string"==typeof i,s=h.call(arguments,1),n=this;return e?this.length||"instance"!==i?this.each(function(){var e,t=l.data(this,o);return"instance"===i?(n=t,!1):t?"function"!=typeof t[i]||"_"===i.charAt(0)?l.error("no such method '"+i+"' for "+a+" widget instance"):(e=t[i].apply(t,s))!==t&&void 0!==e?(n=e&&e.jquery?n.pushStack(e.get()):e,!1):void 0:l.error("cannot call methods on "+a+" prior to initialization; attempted to call method '"+i+"'")}):n=void 0:(s.length&&(i=l.widget.extend.apply(null,[i].concat(s))),this.each(function(){var e=l.data(this,o);e?(e.option(i||{}),e._init&&e._init()):l.data(this,o,new t(i,this))})),n}},l.Widget=function(){},l.Widget._childConstructors=[],l.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{classes:{},disabled:!1,create:null},_createWidget:function(e,t){t=l(t||this.defaultElement||this)[0],this.element=l(t),this.uuid=i++,this.eventNamespace="."+this.widgetName+this.uuid,this.bindings=l(),this.hoverable=l(),this.focusable=l(),this.classesElementLookup={},t!==this&&(l.data(t,this.widgetFullName,this),this._on(!0,this.element,{remove:function(e){e.target===t&&this.destroy()}}),this.document=l(t.style?t.ownerDocument:t.document||t),this.window=l(this.document[0].defaultView||this.document[0].parentWindow)),this.options=l.widget.extend({},this.options,this._getCreateOptions(),e),this._create(),this.options.disabled&&this._setOptionDisabled(this.options.disabled),this._trigger("create",null,this._getCreateEventData()),this._init()},_getCreateOptions:function(){return{}},_getCreateEventData:l.noop,_create:l.noop,_init:l.noop,destroy:function(){var i=this;this._destroy(),l.each(this.classesElementLookup,function(e,t){i._removeClass(t,e)}),this.element.off(this.eventNamespace).removeData(this.widgetFullName),this.widget().off(this.eventNamespace).removeAttr("aria-disabled"),this.bindings.off(this.eventNamespace)},_destroy:l.noop,widget:function(){return this.element},option:function(e,t){var i,s,n,a=e;if(0===arguments.length)return l.widget.extend({},this.options);if("string"==typeof e)if(a={},e=(i=e.split(".")).shift(),i.length){for(s=a[e]=l.widget.extend({},this.options[e]),n=0;n<i.length-1;n++)s[i[n]]=s[i[n]]||{},s=s[i[n]];if(e=i.pop(),1===arguments.length)return void 0===s[e]?null:s[e];s[e]=t}else{if(1===arguments.length)return void 0===this.options[e]?null:this.options[e];a[e]=t}return this._setOptions(a),this},_setOptions:function(e){for(var t in e)this._setOption(t,e[t]);return this},_setOption:function(e,t){return"classes"===e&&this._setOptionClasses(t),this.options[e]=t,"disabled"===e&&this._setOptionDisabled(t),this},_setOptionClasses:function(e){var t,i,s;for(t in e)s=this.classesElementLookup[t],e[t]!==this.options.classes[t]&&s&&s.length&&(i=l(s.get()),this._removeClass(s,t),i.addClass(this._classes({element:i,keys:t,classes:e,add:!0})))},_setOptionDisabled:function(e){this._toggleClass(this.widget(),this.widgetFullName+"-disabled",null,!!e),e&&(this._removeClass(this.hoverable,null,"ui-state-hover"),this._removeClass(this.focusable,null,"ui-state-focus"))},enable:function(){return this._setOptions({disabled:!1})},disable:function(){return this._setOptions({disabled:!0})},_classes:function(n){var a=[],o=this;function e(e,t){for(var i,s=0;s<e.length;s++)i=o.classesElementLookup[e[s]]||l(),i=n.add?(function(){var i=[];n.element.each(function(e,t){l.map(o.classesElementLookup,function(e){return e}).some(function(e){return e.is(t)})||i.push(t)}),o._on(l(i),{remove:"_untrackClassesElement"})}(),l(l.uniqueSort(i.get().concat(n.element.get())))):l(i.not(n.element).get()),o.classesElementLookup[e[s]]=i,a.push(e[s]),t&&n.classes[e[s]]&&a.push(n.classes[e[s]])}return(n=l.extend({element:this.element,classes:this.options.classes||{}},n)).keys&&e(n.keys.match(/\S+/g)||[],!0),n.extra&&e(n.extra.match(/\S+/g)||[]),a.join(" ")},_untrackClassesElement:function(i){var s=this;l.each(s.classesElementLookup,function(e,t){-1!==l.inArray(i.target,t)&&(s.classesElementLookup[e]=l(t.not(i.target).get()))}),this._off(l(i.target))},_removeClass:function(e,t,i){return this._toggleClass(e,t,i,!1)},_addClass:function(e,t,i){return this._toggleClass(e,t,i,!0)},_toggleClass:function(e,t,i,s){var n="string"==typeof e||null===e,i={extra:n?t:i,keys:n?e:t,element:n?this.element:e,add:s="boolean"==typeof s?s:i};return i.element.toggleClass(this._classes(i),s),this},_on:function(n,a,e){var o,h=this;"boolean"!=typeof n&&(e=a,a=n,n=!1),e?(a=o=l(a),this.bindings=this.bindings.add(a)):(e=a,a=this.element,o=this.widget()),l.each(e,function(e,t){function i(){if(n||!0!==h.options.disabled&&!l(this).hasClass("ui-state-disabled"))return("string"==typeof t?h[t]:t).apply(h,arguments)}"string"!=typeof t&&(i.guid=t.guid=t.guid||i.guid||l.guid++);var s=e.match(/^([\w:-]*)\s*(.*)$/),e=s[1]+h.eventNamespace,s=s[2];s?o.on(e,s,i):a.on(e,i)})},_off:function(e,t){t=(t||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace,e.off(t),this.bindings=l(this.bindings.not(e).get()),this.focusable=l(this.focusable.not(e).get()),this.hoverable=l(this.hoverable.not(e).get())},_delay:function(e,t){var i=this;return setTimeout(function(){return("string"==typeof e?i[e]:e).apply(i,arguments)},t||0)},_hoverable:function(e){this.hoverable=this.hoverable.add(e),this._on(e,{mouseenter:function(e){this._addClass(l(e.currentTarget),null,"ui-state-hover")},mouseleave:function(e){this._removeClass(l(e.currentTarget),null,"ui-state-hover")}})},_focusable:function(e){this.focusable=this.focusable.add(e),this._on(e,{focusin:function(e){this._addClass(l(e.currentTarget),null,"ui-state-focus")},focusout:function(e){this._removeClass(l(e.currentTarget),null,"ui-state-focus")}})},_trigger:function(e,t,i){var s,n,a=this.options[e];if(i=i||{},(t=l.Event(t)).type=(e===this.widgetEventPrefix?e:this.widgetEventPrefix+e).toLowerCase(),t.target=this.element[0],n=t.originalEvent)for(s in n)s in t||(t[s]=n[s]);return this.element.trigger(t,i),!("function"==typeof a&&!1===a.apply(this.element[0],[t].concat(i))||t.isDefaultPrevented())}},l.each({show:"fadeIn",hide:"fadeOut"},function(a,o){l.Widget.prototype["_"+a]=function(t,e,i){var s,n=(e="string"==typeof e?{effect:e}:e)?!0!==e&&"number"!=typeof e&&e.effect||o:a;"number"==typeof(e=e||{})?e={duration:e}:!0===e&&(e={}),s=!l.isEmptyObject(e),e.complete=i,e.delay&&t.delay(e.delay),s&&l.effects&&l.effects.effect[n]?t[a](e):n!==a&&t[n]?t[n](e.duration,e.easing,i):t.queue(function(e){l(this)[a](),i&&i.call(t[0]),e()})}});l.widget,l.ui.keyCode={BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38},l.ui.ie=!!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase());var a=!1;l(document).on("mouseup",function(){a=!1});l.widget("ui.mouse",{version:"1.13.2",options:{cancel:"input, textarea, button, select, option",distance:1,delay:0},_mouseInit:function(){var t=this;this.element.on("mousedown."+this.widgetName,function(e){return t._mouseDown(e)}).on("click."+this.widgetName,function(e){if(!0===l.data(e.target,t.widgetName+".preventClickEvent"))return l.removeData(e.target,t.widgetName+".preventClickEvent"),e.stopImmediatePropagation(),!1}),this.started=!1},_mouseDestroy:function(){this.element.off("."+this.widgetName),this._mouseMoveDelegate&&this.document.off("mousemove."+this.widgetName,this._mouseMoveDelegate).off("mouseup."+this.widgetName,this._mouseUpDelegate)},_mouseDown:function(e){if(!a){this._mouseMoved=!1,this._mouseStarted&&this._mouseUp(e),this._mouseDownEvent=e;var t=this,i=1===e.which,s=!("string"!=typeof this.options.cancel||!e.target.nodeName)&&l(e.target).closest(this.options.cancel).length;return i&&!s&&this._mouseCapture(e)?(this.mouseDelayMet=!this.options.delay,this.mouseDelayMet||(this._mouseDelayTimer=setTimeout(function(){t.mouseDelayMet=!0},this.options.delay)),this._mouseDistanceMet(e)&&this._mouseDelayMet(e)&&(this._mouseStarted=!1!==this._mouseStart(e),!this._mouseStarted)?(e.preventDefault(),!0):(!0===l.data(e.target,this.widgetName+".preventClickEvent")&&l.removeData(e.target,this.widgetName+".preventClickEvent"),this._mouseMoveDelegate=function(e){return t._mouseMove(e)},this._mouseUpDelegate=function(e){return t._mouseUp(e)},this.document.on("mousemove."+this.widgetName,this._mouseMoveDelegate).on("mouseup."+this.widgetName,this._mouseUpDelegate),e.preventDefault(),a=!0)):!0}},_mouseMove:function(e){if(this._mouseMoved){if(l.ui.ie&&(!document.documentMode||document.documentMode<9)&&!e.button)return this._mouseUp(e);if(!e.which)if(e.originalEvent.altKey||e.originalEvent.ctrlKey||e.originalEvent.metaKey||e.originalEvent.shiftKey)this.ignoreMissingWhich=!0;else if(!this.ignoreMissingWhich)return this._mouseUp(e)}return(e.which||e.button)&&(this._mouseMoved=!0),this._mouseStarted?(this._mouseDrag(e),e.preventDefault()):(this._mouseDistanceMet(e)&&this._mouseDelayMet(e)&&(this._mouseStarted=!1!==this._mouseStart(this._mouseDownEvent,e),this._mouseStarted?this._mouseDrag(e):this._mouseUp(e)),!this._mouseStarted)},_mouseUp:function(e){this.document.off("mousemove."+this.widgetName,this._mouseMoveDelegate).off("mouseup."+this.widgetName,this._mouseUpDelegate),this._mouseStarted&&(this._mouseStarted=!1,e.target===this._mouseDownEvent.target&&l.data(e.target,this.widgetName+".preventClickEvent",!0),this._mouseStop(e)),this._mouseDelayTimer&&(clearTimeout(this._mouseDelayTimer),delete this._mouseDelayTimer),this.ignoreMissingWhich=!1,a=!1,e.preventDefault()},_mouseDistanceMet:function(e){return Math.max(Math.abs(this._mouseDownEvent.pageX-e.pageX),Math.abs(this._mouseDownEvent.pageY-e.pageY))>=this.options.distance},_mouseDelayMet:function(){return this.mouseDelayMet},_mouseStart:function(){},_mouseDrag:function(){},_mouseStop:function(){},_mouseCapture:function(){return!0}}),l.widget("ui.slider",l.ui.mouse,{version:"1.13.2",widgetEventPrefix:"slide",options:{animate:!1,classes:{"ui-slider":"ui-corner-all","ui-slider-handle":"ui-corner-all","ui-slider-range":"ui-corner-all ui-widget-header"},distance:0,max:100,min:0,orientation:"horizontal",range:!1,step:1,value:0,values:null,change:null,slide:null,start:null,stop:null},numPages:5,_create:function(){this._keySliding=!1,this._mouseSliding=!1,this._animateOff=!0,this._handleIndex=null,this._detectOrientation(),this._mouseInit(),this._calculateNewMax(),this._addClass("ui-slider ui-slider-"+this.orientation,"ui-widget ui-widget-content"),this._refresh(),this._animateOff=!1},_refresh:function(){this._createRange(),this._createHandles(),this._setupEvents(),this._refreshValue()},_createHandles:function(){var e,t=this.options,i=this.element.find(".ui-slider-handle"),s=[],n=t.values&&t.values.length||1;for(i.length>n&&(i.slice(n).remove(),i=i.slice(0,n)),e=i.length;e<n;e++)s.push("<span tabindex='0'></span>");this.handles=i.add(l(s.join("")).appendTo(this.element)),this._addClass(this.handles,"ui-slider-handle","ui-state-default"),this.handle=this.handles.eq(0),this.handles.each(function(e){l(this).data("ui-slider-handle-index",e).attr("tabIndex",0)})},_createRange:function(){var e=this.options;e.range?(!0===e.range&&(e.values?e.values.length&&2!==e.values.length?e.values=[e.values[0],e.values[0]]:Array.isArray(e.values)&&(e.values=e.values.slice(0)):e.values=[this._valueMin(),this._valueMin()]),this.range&&this.range.length?(this._removeClass(this.range,"ui-slider-range-min ui-slider-range-max"),this.range.css({left:"",bottom:""})):(this.range=l("<div>").appendTo(this.element),this._addClass(this.range,"ui-slider-range")),"min"!==e.range&&"max"!==e.range||this._addClass(this.range,"ui-slider-range-"+e.range)):(this.range&&this.range.remove(),this.range=null)},_setupEvents:function(){this._off(this.handles),this._on(this.handles,this._handleEvents),this._hoverable(this.handles),this._focusable(this.handles)},_destroy:function(){this.handles.remove(),this.range&&this.range.remove(),this._mouseDestroy()},_mouseCapture:function(e){var i,s,n,a,t,o,h=this,r=this.options;return!r.disabled&&(this.elementSize={width:this.element.outerWidth(),height:this.element.outerHeight()},this.elementOffset=this.element.offset(),o={x:e.pageX,y:e.pageY},i=this._normValueFromMouse(o),s=this._valueMax()-this._valueMin()+1,this.handles.each(function(e){var t=Math.abs(i-h.values(e));(t<s||s===t&&(e===h._lastChangedValue||h.values(e)===r.min))&&(s=t,n=l(this),a=e)}),!1!==this._start(e,a)&&(this._mouseSliding=!0,this._handleIndex=a,this._addClass(n,null,"ui-state-active"),n.trigger("focus"),t=n.offset(),o=!l(e.target).parents().addBack().is(".ui-slider-handle"),this._clickOffset=o?{left:0,top:0}:{left:e.pageX-t.left-n.width()/2,top:e.pageY-t.top-n.height()/2-(parseInt(n.css("borderTopWidth"),10)||0)-(parseInt(n.css("borderBottomWidth"),10)||0)+(parseInt(n.css("marginTop"),10)||0)},this.handles.hasClass("ui-state-hover")||this._slide(e,a,i),this._animateOff=!0))},_mouseStart:function(){return!0},_mouseDrag:function(e){var t={x:e.pageX,y:e.pageY},t=this._normValueFromMouse(t);return this._slide(e,this._handleIndex,t),!1},_mouseStop:function(e){return this._removeClass(this.handles,null,"ui-state-active"),this._mouseSliding=!1,this._stop(e,this._handleIndex),this._change(e,this._handleIndex),this._handleIndex=null,this._clickOffset=null,this._animateOff=!1},_detectOrientation:function(){this.orientation="vertical"===this.options.orientation?"vertical":"horizontal"},_normValueFromMouse:function(e){var t,e="horizontal"===this.orientation?(t=this.elementSize.width,e.x-this.elementOffset.left-(this._clickOffset?this._clickOffset.left:0)):(t=this.elementSize.height,e.y-this.elementOffset.top-(this._clickOffset?this._clickOffset.top:0)),e=e/t;return(e=1<e?1:e)<0&&(e=0),"vertical"===this.orientation&&(e=1-e),t=this._valueMax()-this._valueMin(),t=this._valueMin()+e*t,this._trimAlignValue(t)},_uiHash:function(e,t,i){var s={handle:this.handles[e],handleIndex:e,value:void 0!==t?t:this.value()};return this._hasMultipleValues()&&(s.value=void 0!==t?t:this.values(e),s.values=i||this.values()),s},_hasMultipleValues:function(){return this.options.values&&this.options.values.length},_start:function(e,t){return this._trigger("start",e,this._uiHash(t))},_slide:function(e,t,i){var s,n=this.value(),a=this.values();this._hasMultipleValues()&&(s=this.values(t?0:1),n=this.values(t),2===this.options.values.length&&!0===this.options.range&&(i=0===t?Math.min(s,i):Math.max(s,i)),a[t]=i),i!==n&&!1!==this._trigger("slide",e,this._uiHash(t,i,a))&&(this._hasMultipleValues()?this.values(t,i):this.value(i))},_stop:function(e,t){this._trigger("stop",e,this._uiHash(t))},_change:function(e,t){this._keySliding||this._mouseSliding||(this._lastChangedValue=t,this._trigger("change",e,this._uiHash(t)))},value:function(e){return arguments.length?(this.options.value=this._trimAlignValue(e),this._refreshValue(),void this._change(null,0)):this._value()},values:function(e,t){var i,s,n;if(1<arguments.length)return this.options.values[e]=this._trimAlignValue(t),this._refreshValue(),void this._change(null,e);if(!arguments.length)return this._values();if(!Array.isArray(e))return this._hasMultipleValues()?this._values(e):this.value();for(i=this.options.values,s=e,n=0;n<i.length;n+=1)i[n]=this._trimAlignValue(s[n]),this._change(null,n);this._refreshValue()},_setOption:function(e,t){var i,s=0;switch("range"===e&&!0===this.options.range&&("min"===t?(this.options.value=this._values(0),this.options.values=null):"max"===t&&(this.options.value=this._values(this.options.values.length-1),this.options.values=null)),Array.isArray(this.options.values)&&(s=this.options.values.length),this._super(e,t),e){case"orientation":this._detectOrientation(),this._removeClass("ui-slider-horizontal ui-slider-vertical")._addClass("ui-slider-"+this.orientation),this._refreshValue(),this.options.range&&this._refreshRange(t),this.handles.css("horizontal"===t?"bottom":"left","");break;case"value":this._animateOff=!0,this._refreshValue(),this._change(null,0),this._animateOff=!1;break;case"values":for(this._animateOff=!0,this._refreshValue(),i=s-1;0<=i;i--)this._change(null,i);this._animateOff=!1;break;case"step":case"min":case"max":this._animateOff=!0,this._calculateNewMax(),this._refreshValue(),this._animateOff=!1;break;case"range":this._animateOff=!0,this._refresh(),this._animateOff=!1}},_setOptionDisabled:function(e){this._super(e),this._toggleClass(null,"ui-state-disabled",!!e)},_value:function(){var e=this.options.value;return e=this._trimAlignValue(e)},_values:function(e){var t,i;if(arguments.length)return e=this.options.values[e],e=this._trimAlignValue(e);if(this._hasMultipleValues()){for(t=this.options.values.slice(),i=0;i<t.length;i+=1)t[i]=this._trimAlignValue(t[i]);return t}return[]},_trimAlignValue:function(e){if(e<=this._valueMin())return this._valueMin();if(e>=this._valueMax())return this._valueMax();var t=0<this.options.step?this.options.step:1,i=(e-this._valueMin())%t,e=e-i;return 2*Math.abs(i)>=t&&(e+=0<i?t:-t),parseFloat(e.toFixed(5))},_calculateNewMax:function(){var e=this.options.max,t=this._valueMin(),i=this.options.step;(e=Math.round((e-t)/i)*i+t)>this.options.max&&(e-=i),this.max=parseFloat(e.toFixed(this._precision()))},_precision:function(){var e=this._precisionOf(this.options.step);return e=null!==this.options.min?Math.max(e,this._precisionOf(this.options.min)):e},_precisionOf:function(e){var t=e.toString(),e=t.indexOf(".");return-1===e?0:t.length-e-1},_valueMin:function(){return this.options.min},_valueMax:function(){return this.max},_refreshRange:function(e){"vertical"===e&&this.range.css({width:"",left:""}),"horizontal"===e&&this.range.css({height:"",bottom:""})},_refreshValue:function(){var t,i,e,s,n,a=this.options.range,o=this.options,h=this,r=!this._animateOff&&o.animate,u={};this._hasMultipleValues()?this.handles.each(function(e){i=(h.values(e)-h._valueMin())/(h._valueMax()-h._valueMin())*100,u["horizontal"===h.orientation?"left":"bottom"]=i+"%",l(this).stop(1,1)[r?"animate":"css"](u,o.animate),!0===h.options.range&&("horizontal"===h.orientation?(0===e&&h.range.stop(1,1)[r?"animate":"css"]({left:i+"%"},o.animate),1===e&&h.range[r?"animate":"css"]({width:i-t+"%"},{queue:!1,duration:o.animate})):(0===e&&h.range.stop(1,1)[r?"animate":"css"]({bottom:i+"%"},o.animate),1===e&&h.range[r?"animate":"css"]({height:i-t+"%"},{queue:!1,duration:o.animate}))),t=i}):(e=this.value(),s=this._valueMin(),n=this._valueMax(),i=n!==s?(e-s)/(n-s)*100:0,u["horizontal"===this.orientation?"left":"bottom"]=i+"%",this.handle.stop(1,1)[r?"animate":"css"](u,o.animate),"min"===a&&"horizontal"===this.orientation&&this.range.stop(1,1)[r?"animate":"css"]({width:i+"%"},o.animate),"max"===a&&"horizontal"===this.orientation&&this.range.stop(1,1)[r?"animate":"css"]({width:100-i+"%"},o.animate),"min"===a&&"vertical"===this.orientation&&this.range.stop(1,1)[r?"animate":"css"]({height:i+"%"},o.animate),"max"===a&&"vertical"===this.orientation&&this.range.stop(1,1)[r?"animate":"css"]({height:100-i+"%"},o.animate))},_handleEvents:{keydown:function(e){var t,i,s,n=l(e.target).data("ui-slider-handle-index");switch(e.keyCode){case l.ui.keyCode.HOME:case l.ui.keyCode.END:case l.ui.keyCode.PAGE_UP:case l.ui.keyCode.PAGE_DOWN:case l.ui.keyCode.UP:case l.ui.keyCode.RIGHT:case l.ui.keyCode.DOWN:case l.ui.keyCode.LEFT:if(e.preventDefault(),!this._keySliding&&(this._keySliding=!0,this._addClass(l(e.target),null,"ui-state-active"),!1===this._start(e,n)))return}switch(s=this.options.step,t=i=this._hasMultipleValues()?this.values(n):this.value(),e.keyCode){case l.ui.keyCode.HOME:i=this._valueMin();break;case l.ui.keyCode.END:i=this._valueMax();break;case l.ui.keyCode.PAGE_UP:i=this._trimAlignValue(t+(this._valueMax()-this._valueMin())/this.numPages);break;case l.ui.keyCode.PAGE_DOWN:i=this._trimAlignValue(t-(this._valueMax()-this._valueMin())/this.numPages);break;case l.ui.keyCode.UP:case l.ui.keyCode.RIGHT:if(t===this._valueMax())return;i=this._trimAlignValue(t+s);break;case l.ui.keyCode.DOWN:case l.ui.keyCode.LEFT:if(t===this._valueMin())return;i=this._trimAlignValue(t-s)}this._slide(e,n,i)},keyup:function(e){var t=l(e.target).data("ui-slider-handle-index");this._keySliding&&(this._keySliding=!1,this._stop(e,t),this._change(e,t),this._removeClass(l(e.target),null,"ui-state-active"))}}})});
/* End */
;
; /* Start:"a:4:{s:4:"full";s:93:"/bitrix/templates/atib/libs/jquery-ui-touch-punch/jquery.ui.touch-punch.min.js?17105064571090";s:6:"source";s:78:"/bitrix/templates/atib/libs/jquery-ui-touch-punch/jquery.ui.touch-punch.min.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
!function(a){function f(a,b){if(!(a.originalEvent.touches.length>1)){a.preventDefault();var c=a.originalEvent.changedTouches[0],d=document.createEvent("MouseEvents");d.initMouseEvent(b,!0,!0,window,1,c.screenX,c.screenY,c.clientX,c.clientY,!1,!1,!1,!1,0,null),a.target.dispatchEvent(d)}}if(a.support.touch="ontouchend"in document,a.support.touch){var e,b=a.ui.mouse.prototype,c=b._mouseInit,d=b._mouseDestroy;b._touchStart=function(a){var b=this;!e&&b._mouseCapture(a.originalEvent.changedTouches[0])&&(e=!0,b._touchMoved=!1,f(a,"mouseover"),f(a,"mousemove"),f(a,"mousedown"))},b._touchMove=function(a){e&&(this._touchMoved=!0,f(a,"mousemove"))},b._touchEnd=function(a){e&&(f(a,"mouseup"),f(a,"mouseout"),this._touchMoved||f(a,"click"),e=!1)},b._mouseInit=function(){var b=this;b.element.bind({touchstart:a.proxy(b,"_touchStart"),touchmove:a.proxy(b,"_touchMove"),touchend:a.proxy(b,"_touchEnd")}),c.call(b)},b._mouseDestroy=function(){var b=this;b.element.unbind({touchstart:a.proxy(b,"_touchStart"),touchmove:a.proxy(b,"_touchMove"),touchend:a.proxy(b,"_touchEnd")}),d.call(b)}}}(jQuery);
/* End */
;
; /* Start:"a:4:{s:4:"full";s:68:"/bitrix/templates/atib/libs/flowbite/flowbite.min.js?171076720178771";s:6:"source";s:52:"/bitrix/templates/atib/libs/flowbite/flowbite.min.js";s:3:"min";s:52:"/bitrix/templates/atib/libs/flowbite/flowbite.min.js";s:3:"map";s:56:"/bitrix/templates/atib/libs/flowbite/flowbite.min.js.map";}"*/
!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define("Flowbite",[],e):"object"==typeof exports?exports.Flowbite=e():t.Flowbite=e()}(self,(function(){return function(){"use strict";var t={647:function(t,e,i){i.r(e)},853:function(t,e,i){i.r(e),i.d(e,{afterMain:function(){return w},afterRead:function(){return y},afterWrite:function(){return k},applyStyles:function(){return H},arrow:function(){return Q},auto:function(){return a},basePlacements:function(){return c},beforeMain:function(){return b},beforeRead:function(){return _},beforeWrite:function(){return L},bottom:function(){return o},clippingParents:function(){return u},computeStyles:function(){return it},createPopper:function(){return Ht},createPopperBase:function(){return Pt},createPopperLite:function(){return jt},detectOverflow:function(){return mt},end:function(){return d},eventListeners:function(){return ot},flip:function(){return yt},hide:function(){return wt},left:function(){return s},main:function(){return E},modifierPhases:function(){return A},offset:function(){return Lt},placements:function(){return g},popper:function(){return h},popperGenerator:function(){return Tt},popperOffsets:function(){return It},preventOverflow:function(){return kt},read:function(){return m},reference:function(){return f},right:function(){return r},start:function(){return l},top:function(){return n},variationPlacements:function(){return v},viewport:function(){return p},write:function(){return I}});var n="top",o="bottom",r="right",s="left",a="auto",c=[n,o,r,s],l="start",d="end",u="clippingParents",p="viewport",h="popper",f="reference",v=c.reduce((function(t,e){return t.concat([e+"-"+l,e+"-"+d])}),[]),g=[].concat(c,[a]).reduce((function(t,e){return t.concat([e,e+"-"+l,e+"-"+d])}),[]),_="beforeRead",m="read",y="afterRead",b="beforeMain",E="main",w="afterMain",L="beforeWrite",I="write",k="afterWrite",A=[_,m,y,b,E,w,L,I,k];function O(t){return t?(t.nodeName||"").toLowerCase():null}function x(t){if(null==t)return window;if("[object Window]"!==t.toString()){var e=t.ownerDocument;return e&&e.defaultView||window}return t}function C(t){return t instanceof x(t).Element||t instanceof Element}function T(t){return t instanceof x(t).HTMLElement||t instanceof HTMLElement}function P(t){return"undefined"!=typeof ShadowRoot&&(t instanceof x(t).ShadowRoot||t instanceof ShadowRoot)}var H={name:"applyStyles",enabled:!0,phase:"write",fn:function(t){var e=t.state;Object.keys(e.elements).forEach((function(t){var i=e.styles[t]||{},n=e.attributes[t]||{},o=e.elements[t];T(o)&&O(o)&&(Object.assign(o.style,i),Object.keys(n).forEach((function(t){var e=n[t];!1===e?o.removeAttribute(t):o.setAttribute(t,!0===e?"":e)})))}))},effect:function(t){var e=t.state,i={popper:{position:e.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(e.elements.popper.style,i.popper),e.styles=i,e.elements.arrow&&Object.assign(e.elements.arrow.style,i.arrow),function(){Object.keys(e.elements).forEach((function(t){var n=e.elements[t],o=e.attributes[t]||{},r=Object.keys(e.styles.hasOwnProperty(t)?e.styles[t]:i[t]).reduce((function(t,e){return t[e]="",t}),{});T(n)&&O(n)&&(Object.assign(n.style,r),Object.keys(o).forEach((function(t){n.removeAttribute(t)})))}))}},requires:["computeStyles"]};function j(t){return t.split("-")[0]}var D=Math.max,S=Math.min,z=Math.round;function M(){var t=navigator.userAgentData;return null!=t&&t.brands?t.brands.map((function(t){return t.brand+"/"+t.version})).join(" "):navigator.userAgent}function q(){return!/^((?!chrome|android).)*safari/i.test(M())}function V(t,e,i){void 0===e&&(e=!1),void 0===i&&(i=!1);var n=t.getBoundingClientRect(),o=1,r=1;e&&T(t)&&(o=t.offsetWidth>0&&z(n.width)/t.offsetWidth||1,r=t.offsetHeight>0&&z(n.height)/t.offsetHeight||1);var s=(C(t)?x(t):window).visualViewport,a=!q()&&i,c=(n.left+(a&&s?s.offsetLeft:0))/o,l=(n.top+(a&&s?s.offsetTop:0))/r,d=n.width/o,u=n.height/r;return{width:d,height:u,top:l,right:c+d,bottom:l+u,left:c,x:c,y:l}}function B(t){var e=V(t),i=t.offsetWidth,n=t.offsetHeight;return Math.abs(e.width-i)<=1&&(i=e.width),Math.abs(e.height-n)<=1&&(n=e.height),{x:t.offsetLeft,y:t.offsetTop,width:i,height:n}}function R(t,e){var i=e.getRootNode&&e.getRootNode();if(t.contains(e))return!0;if(i&&P(i)){var n=e;do{if(n&&t.isSameNode(n))return!0;n=n.parentNode||n.host}while(n)}return!1}function W(t){return x(t).getComputedStyle(t)}function F(t){return["table","td","th"].indexOf(O(t))>=0}function K(t){return((C(t)?t.ownerDocument:t.document)||window.document).documentElement}function N(t){return"html"===O(t)?t:t.assignedSlot||t.parentNode||(P(t)?t.host:null)||K(t)}function U(t){return T(t)&&"fixed"!==W(t).position?t.offsetParent:null}function X(t){for(var e=x(t),i=U(t);i&&F(i)&&"static"===W(i).position;)i=U(i);return i&&("html"===O(i)||"body"===O(i)&&"static"===W(i).position)?e:i||function(t){var e=/firefox/i.test(M());if(/Trident/i.test(M())&&T(t)&&"fixed"===W(t).position)return null;var i=N(t);for(P(i)&&(i=i.host);T(i)&&["html","body"].indexOf(O(i))<0;){var n=W(i);if("none"!==n.transform||"none"!==n.perspective||"paint"===n.contain||-1!==["transform","perspective"].indexOf(n.willChange)||e&&"filter"===n.willChange||e&&n.filter&&"none"!==n.filter)return i;i=i.parentNode}return null}(t)||e}function Y(t){return["top","bottom"].indexOf(t)>=0?"x":"y"}function G(t,e,i){return D(t,S(e,i))}function $(t){return Object.assign({},{top:0,right:0,bottom:0,left:0},t)}function J(t,e){return e.reduce((function(e,i){return e[i]=t,e}),{})}var Q={name:"arrow",enabled:!0,phase:"main",fn:function(t){var e,i=t.state,a=t.name,l=t.options,d=i.elements.arrow,u=i.modifiersData.popperOffsets,p=j(i.placement),h=Y(p),f=[s,r].indexOf(p)>=0?"height":"width";if(d&&u){var v=function(t,e){return $("number"!=typeof(t="function"==typeof t?t(Object.assign({},e.rects,{placement:e.placement})):t)?t:J(t,c))}(l.padding,i),g=B(d),_="y"===h?n:s,m="y"===h?o:r,y=i.rects.reference[f]+i.rects.reference[h]-u[h]-i.rects.popper[f],b=u[h]-i.rects.reference[h],E=X(d),w=E?"y"===h?E.clientHeight||0:E.clientWidth||0:0,L=y/2-b/2,I=v[_],k=w-g[f]-v[m],A=w/2-g[f]/2+L,O=G(I,A,k),x=h;i.modifiersData[a]=((e={})[x]=O,e.centerOffset=O-A,e)}},effect:function(t){var e=t.state,i=t.options.element,n=void 0===i?"[data-popper-arrow]":i;null!=n&&("string"!=typeof n||(n=e.elements.popper.querySelector(n)))&&R(e.elements.popper,n)&&(e.elements.arrow=n)},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function Z(t){return t.split("-")[1]}var tt={top:"auto",right:"auto",bottom:"auto",left:"auto"};function et(t){var e,i=t.popper,a=t.popperRect,c=t.placement,l=t.variation,u=t.offsets,p=t.position,h=t.gpuAcceleration,f=t.adaptive,v=t.roundOffsets,g=t.isFixed,_=u.x,m=void 0===_?0:_,y=u.y,b=void 0===y?0:y,E="function"==typeof v?v({x:m,y:b}):{x:m,y:b};m=E.x,b=E.y;var w=u.hasOwnProperty("x"),L=u.hasOwnProperty("y"),I=s,k=n,A=window;if(f){var O=X(i),C="clientHeight",T="clientWidth";if(O===x(i)&&"static"!==W(O=K(i)).position&&"absolute"===p&&(C="scrollHeight",T="scrollWidth"),c===n||(c===s||c===r)&&l===d)k=o,b-=(g&&O===A&&A.visualViewport?A.visualViewport.height:O[C])-a.height,b*=h?1:-1;if(c===s||(c===n||c===o)&&l===d)I=r,m-=(g&&O===A&&A.visualViewport?A.visualViewport.width:O[T])-a.width,m*=h?1:-1}var P,H=Object.assign({position:p},f&&tt),j=!0===v?function(t){var e=t.x,i=t.y,n=window.devicePixelRatio||1;return{x:z(e*n)/n||0,y:z(i*n)/n||0}}({x:m,y:b}):{x:m,y:b};return m=j.x,b=j.y,h?Object.assign({},H,((P={})[k]=L?"0":"",P[I]=w?"0":"",P.transform=(A.devicePixelRatio||1)<=1?"translate("+m+"px, "+b+"px)":"translate3d("+m+"px, "+b+"px, 0)",P)):Object.assign({},H,((e={})[k]=L?b+"px":"",e[I]=w?m+"px":"",e.transform="",e))}var it={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(t){var e=t.state,i=t.options,n=i.gpuAcceleration,o=void 0===n||n,r=i.adaptive,s=void 0===r||r,a=i.roundOffsets,c=void 0===a||a,l={placement:j(e.placement),variation:Z(e.placement),popper:e.elements.popper,popperRect:e.rects.popper,gpuAcceleration:o,isFixed:"fixed"===e.options.strategy};null!=e.modifiersData.popperOffsets&&(e.styles.popper=Object.assign({},e.styles.popper,et(Object.assign({},l,{offsets:e.modifiersData.popperOffsets,position:e.options.strategy,adaptive:s,roundOffsets:c})))),null!=e.modifiersData.arrow&&(e.styles.arrow=Object.assign({},e.styles.arrow,et(Object.assign({},l,{offsets:e.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:c})))),e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-placement":e.placement})},data:{}},nt={passive:!0};var ot={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(t){var e=t.state,i=t.instance,n=t.options,o=n.scroll,r=void 0===o||o,s=n.resize,a=void 0===s||s,c=x(e.elements.popper),l=[].concat(e.scrollParents.reference,e.scrollParents.popper);return r&&l.forEach((function(t){t.addEventListener("scroll",i.update,nt)})),a&&c.addEventListener("resize",i.update,nt),function(){r&&l.forEach((function(t){t.removeEventListener("scroll",i.update,nt)})),a&&c.removeEventListener("resize",i.update,nt)}},data:{}},rt={left:"right",right:"left",bottom:"top",top:"bottom"};function st(t){return t.replace(/left|right|bottom|top/g,(function(t){return rt[t]}))}var at={start:"end",end:"start"};function ct(t){return t.replace(/start|end/g,(function(t){return at[t]}))}function lt(t){var e=x(t);return{scrollLeft:e.pageXOffset,scrollTop:e.pageYOffset}}function dt(t){return V(K(t)).left+lt(t).scrollLeft}function ut(t){var e=W(t),i=e.overflow,n=e.overflowX,o=e.overflowY;return/auto|scroll|overlay|hidden/.test(i+o+n)}function pt(t){return["html","body","#document"].indexOf(O(t))>=0?t.ownerDocument.body:T(t)&&ut(t)?t:pt(N(t))}function ht(t,e){var i;void 0===e&&(e=[]);var n=pt(t),o=n===(null==(i=t.ownerDocument)?void 0:i.body),r=x(n),s=o?[r].concat(r.visualViewport||[],ut(n)?n:[]):n,a=e.concat(s);return o?a:a.concat(ht(N(s)))}function ft(t){return Object.assign({},t,{left:t.x,top:t.y,right:t.x+t.width,bottom:t.y+t.height})}function vt(t,e,i){return e===p?ft(function(t,e){var i=x(t),n=K(t),o=i.visualViewport,r=n.clientWidth,s=n.clientHeight,a=0,c=0;if(o){r=o.width,s=o.height;var l=q();(l||!l&&"fixed"===e)&&(a=o.offsetLeft,c=o.offsetTop)}return{width:r,height:s,x:a+dt(t),y:c}}(t,i)):C(e)?function(t,e){var i=V(t,!1,"fixed"===e);return i.top=i.top+t.clientTop,i.left=i.left+t.clientLeft,i.bottom=i.top+t.clientHeight,i.right=i.left+t.clientWidth,i.width=t.clientWidth,i.height=t.clientHeight,i.x=i.left,i.y=i.top,i}(e,i):ft(function(t){var e,i=K(t),n=lt(t),o=null==(e=t.ownerDocument)?void 0:e.body,r=D(i.scrollWidth,i.clientWidth,o?o.scrollWidth:0,o?o.clientWidth:0),s=D(i.scrollHeight,i.clientHeight,o?o.scrollHeight:0,o?o.clientHeight:0),a=-n.scrollLeft+dt(t),c=-n.scrollTop;return"rtl"===W(o||i).direction&&(a+=D(i.clientWidth,o?o.clientWidth:0)-r),{width:r,height:s,x:a,y:c}}(K(t)))}function gt(t,e,i,n){var o="clippingParents"===e?function(t){var e=ht(N(t)),i=["absolute","fixed"].indexOf(W(t).position)>=0&&T(t)?X(t):t;return C(i)?e.filter((function(t){return C(t)&&R(t,i)&&"body"!==O(t)})):[]}(t):[].concat(e),r=[].concat(o,[i]),s=r[0],a=r.reduce((function(e,i){var o=vt(t,i,n);return e.top=D(o.top,e.top),e.right=S(o.right,e.right),e.bottom=S(o.bottom,e.bottom),e.left=D(o.left,e.left),e}),vt(t,s,n));return a.width=a.right-a.left,a.height=a.bottom-a.top,a.x=a.left,a.y=a.top,a}function _t(t){var e,i=t.reference,a=t.element,c=t.placement,u=c?j(c):null,p=c?Z(c):null,h=i.x+i.width/2-a.width/2,f=i.y+i.height/2-a.height/2;switch(u){case n:e={x:h,y:i.y-a.height};break;case o:e={x:h,y:i.y+i.height};break;case r:e={x:i.x+i.width,y:f};break;case s:e={x:i.x-a.width,y:f};break;default:e={x:i.x,y:i.y}}var v=u?Y(u):null;if(null!=v){var g="y"===v?"height":"width";switch(p){case l:e[v]=e[v]-(i[g]/2-a[g]/2);break;case d:e[v]=e[v]+(i[g]/2-a[g]/2)}}return e}function mt(t,e){void 0===e&&(e={});var i=e,s=i.placement,a=void 0===s?t.placement:s,l=i.strategy,d=void 0===l?t.strategy:l,v=i.boundary,g=void 0===v?u:v,_=i.rootBoundary,m=void 0===_?p:_,y=i.elementContext,b=void 0===y?h:y,E=i.altBoundary,w=void 0!==E&&E,L=i.padding,I=void 0===L?0:L,k=$("number"!=typeof I?I:J(I,c)),A=b===h?f:h,O=t.rects.popper,x=t.elements[w?A:b],T=gt(C(x)?x:x.contextElement||K(t.elements.popper),g,m,d),P=V(t.elements.reference),H=_t({reference:P,element:O,strategy:"absolute",placement:a}),j=ft(Object.assign({},O,H)),D=b===h?j:P,S={top:T.top-D.top+k.top,bottom:D.bottom-T.bottom+k.bottom,left:T.left-D.left+k.left,right:D.right-T.right+k.right},z=t.modifiersData.offset;if(b===h&&z){var M=z[a];Object.keys(S).forEach((function(t){var e=[r,o].indexOf(t)>=0?1:-1,i=[n,o].indexOf(t)>=0?"y":"x";S[t]+=M[i]*e}))}return S}var yt={name:"flip",enabled:!0,phase:"main",fn:function(t){var e=t.state,i=t.options,d=t.name;if(!e.modifiersData[d]._skip){for(var u=i.mainAxis,p=void 0===u||u,h=i.altAxis,f=void 0===h||h,_=i.fallbackPlacements,m=i.padding,y=i.boundary,b=i.rootBoundary,E=i.altBoundary,w=i.flipVariations,L=void 0===w||w,I=i.allowedAutoPlacements,k=e.options.placement,A=j(k),O=_||(A===k||!L?[st(k)]:function(t){if(j(t)===a)return[];var e=st(t);return[ct(t),e,ct(e)]}(k)),x=[k].concat(O).reduce((function(t,i){return t.concat(j(i)===a?function(t,e){void 0===e&&(e={});var i=e,n=i.placement,o=i.boundary,r=i.rootBoundary,s=i.padding,a=i.flipVariations,l=i.allowedAutoPlacements,d=void 0===l?g:l,u=Z(n),p=u?a?v:v.filter((function(t){return Z(t)===u})):c,h=p.filter((function(t){return d.indexOf(t)>=0}));0===h.length&&(h=p);var f=h.reduce((function(e,i){return e[i]=mt(t,{placement:i,boundary:o,rootBoundary:r,padding:s})[j(i)],e}),{});return Object.keys(f).sort((function(t,e){return f[t]-f[e]}))}(e,{placement:i,boundary:y,rootBoundary:b,padding:m,flipVariations:L,allowedAutoPlacements:I}):i)}),[]),C=e.rects.reference,T=e.rects.popper,P=new Map,H=!0,D=x[0],S=0;S<x.length;S++){var z=x[S],M=j(z),q=Z(z)===l,V=[n,o].indexOf(M)>=0,B=V?"width":"height",R=mt(e,{placement:z,boundary:y,rootBoundary:b,altBoundary:E,padding:m}),W=V?q?r:s:q?o:n;C[B]>T[B]&&(W=st(W));var F=st(W),K=[];if(p&&K.push(R[M]<=0),f&&K.push(R[W]<=0,R[F]<=0),K.every((function(t){return t}))){D=z,H=!1;break}P.set(z,K)}if(H)for(var N=function(t){var e=x.find((function(e){var i=P.get(e);if(i)return i.slice(0,t).every((function(t){return t}))}));if(e)return D=e,"break"},U=L?3:1;U>0;U--){if("break"===N(U))break}e.placement!==D&&(e.modifiersData[d]._skip=!0,e.placement=D,e.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}};function bt(t,e,i){return void 0===i&&(i={x:0,y:0}),{top:t.top-e.height-i.y,right:t.right-e.width+i.x,bottom:t.bottom-e.height+i.y,left:t.left-e.width-i.x}}function Et(t){return[n,r,o,s].some((function(e){return t[e]>=0}))}var wt={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(t){var e=t.state,i=t.name,n=e.rects.reference,o=e.rects.popper,r=e.modifiersData.preventOverflow,s=mt(e,{elementContext:"reference"}),a=mt(e,{altBoundary:!0}),c=bt(s,n),l=bt(a,o,r),d=Et(c),u=Et(l);e.modifiersData[i]={referenceClippingOffsets:c,popperEscapeOffsets:l,isReferenceHidden:d,hasPopperEscaped:u},e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-reference-hidden":d,"data-popper-escaped":u})}};var Lt={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(t){var e=t.state,i=t.options,o=t.name,a=i.offset,c=void 0===a?[0,0]:a,l=g.reduce((function(t,i){return t[i]=function(t,e,i){var o=j(t),a=[s,n].indexOf(o)>=0?-1:1,c="function"==typeof i?i(Object.assign({},e,{placement:t})):i,l=c[0],d=c[1];return l=l||0,d=(d||0)*a,[s,r].indexOf(o)>=0?{x:d,y:l}:{x:l,y:d}}(i,e.rects,c),t}),{}),d=l[e.placement],u=d.x,p=d.y;null!=e.modifiersData.popperOffsets&&(e.modifiersData.popperOffsets.x+=u,e.modifiersData.popperOffsets.y+=p),e.modifiersData[o]=l}};var It={name:"popperOffsets",enabled:!0,phase:"read",fn:function(t){var e=t.state,i=t.name;e.modifiersData[i]=_t({reference:e.rects.reference,element:e.rects.popper,strategy:"absolute",placement:e.placement})},data:{}};var kt={name:"preventOverflow",enabled:!0,phase:"main",fn:function(t){var e=t.state,i=t.options,a=t.name,c=i.mainAxis,d=void 0===c||c,u=i.altAxis,p=void 0!==u&&u,h=i.boundary,f=i.rootBoundary,v=i.altBoundary,g=i.padding,_=i.tether,m=void 0===_||_,y=i.tetherOffset,b=void 0===y?0:y,E=mt(e,{boundary:h,rootBoundary:f,padding:g,altBoundary:v}),w=j(e.placement),L=Z(e.placement),I=!L,k=Y(w),A="x"===k?"y":"x",O=e.modifiersData.popperOffsets,x=e.rects.reference,C=e.rects.popper,T="function"==typeof b?b(Object.assign({},e.rects,{placement:e.placement})):b,P="number"==typeof T?{mainAxis:T,altAxis:T}:Object.assign({mainAxis:0,altAxis:0},T),H=e.modifiersData.offset?e.modifiersData.offset[e.placement]:null,z={x:0,y:0};if(O){if(d){var M,q="y"===k?n:s,V="y"===k?o:r,R="y"===k?"height":"width",W=O[k],F=W+E[q],K=W-E[V],N=m?-C[R]/2:0,U=L===l?x[R]:C[R],$=L===l?-C[R]:-x[R],J=e.elements.arrow,Q=m&&J?B(J):{width:0,height:0},tt=e.modifiersData["arrow#persistent"]?e.modifiersData["arrow#persistent"].padding:{top:0,right:0,bottom:0,left:0},et=tt[q],it=tt[V],nt=G(0,x[R],Q[R]),ot=I?x[R]/2-N-nt-et-P.mainAxis:U-nt-et-P.mainAxis,rt=I?-x[R]/2+N+nt+it+P.mainAxis:$+nt+it+P.mainAxis,st=e.elements.arrow&&X(e.elements.arrow),at=st?"y"===k?st.clientTop||0:st.clientLeft||0:0,ct=null!=(M=null==H?void 0:H[k])?M:0,lt=W+rt-ct,dt=G(m?S(F,W+ot-ct-at):F,W,m?D(K,lt):K);O[k]=dt,z[k]=dt-W}if(p){var ut,pt="x"===k?n:s,ht="x"===k?o:r,ft=O[A],vt="y"===A?"height":"width",gt=ft+E[pt],_t=ft-E[ht],yt=-1!==[n,s].indexOf(w),bt=null!=(ut=null==H?void 0:H[A])?ut:0,Et=yt?gt:ft-x[vt]-C[vt]-bt+P.altAxis,wt=yt?ft+x[vt]+C[vt]-bt-P.altAxis:_t,Lt=m&&yt?function(t,e,i){var n=G(t,e,i);return n>i?i:n}(Et,ft,wt):G(m?Et:gt,ft,m?wt:_t);O[A]=Lt,z[A]=Lt-ft}e.modifiersData[a]=z}},requiresIfExists:["offset"]};function At(t,e,i){void 0===i&&(i=!1);var n,o,r=T(e),s=T(e)&&function(t){var e=t.getBoundingClientRect(),i=z(e.width)/t.offsetWidth||1,n=z(e.height)/t.offsetHeight||1;return 1!==i||1!==n}(e),a=K(e),c=V(t,s,i),l={scrollLeft:0,scrollTop:0},d={x:0,y:0};return(r||!r&&!i)&&(("body"!==O(e)||ut(a))&&(l=(n=e)!==x(n)&&T(n)?{scrollLeft:(o=n).scrollLeft,scrollTop:o.scrollTop}:lt(n)),T(e)?((d=V(e,!0)).x+=e.clientLeft,d.y+=e.clientTop):a&&(d.x=dt(a))),{x:c.left+l.scrollLeft-d.x,y:c.top+l.scrollTop-d.y,width:c.width,height:c.height}}function Ot(t){var e=new Map,i=new Set,n=[];function o(t){i.add(t.name),[].concat(t.requires||[],t.requiresIfExists||[]).forEach((function(t){if(!i.has(t)){var n=e.get(t);n&&o(n)}})),n.push(t)}return t.forEach((function(t){e.set(t.name,t)})),t.forEach((function(t){i.has(t.name)||o(t)})),n}var xt={placement:"bottom",modifiers:[],strategy:"absolute"};function Ct(){for(var t=arguments.length,e=new Array(t),i=0;i<t;i++)e[i]=arguments[i];return!e.some((function(t){return!(t&&"function"==typeof t.getBoundingClientRect)}))}function Tt(t){void 0===t&&(t={});var e=t,i=e.defaultModifiers,n=void 0===i?[]:i,o=e.defaultOptions,r=void 0===o?xt:o;return function(t,e,i){void 0===i&&(i=r);var o,s,a={placement:"bottom",orderedModifiers:[],options:Object.assign({},xt,r),modifiersData:{},elements:{reference:t,popper:e},attributes:{},styles:{}},c=[],l=!1,d={state:a,setOptions:function(i){var o="function"==typeof i?i(a.options):i;u(),a.options=Object.assign({},r,a.options,o),a.scrollParents={reference:C(t)?ht(t):t.contextElement?ht(t.contextElement):[],popper:ht(e)};var s=function(t){var e=Ot(t);return A.reduce((function(t,i){return t.concat(e.filter((function(t){return t.phase===i})))}),[])}(function(t){var e=t.reduce((function(t,e){var i=t[e.name];return t[e.name]=i?Object.assign({},i,e,{options:Object.assign({},i.options,e.options),data:Object.assign({},i.data,e.data)}):e,t}),{});return Object.keys(e).map((function(t){return e[t]}))}([].concat(n,a.options.modifiers)));return a.orderedModifiers=s.filter((function(t){return t.enabled})),a.orderedModifiers.forEach((function(t){var e=t.name,i=t.options,n=void 0===i?{}:i,o=t.effect;if("function"==typeof o){var r=o({state:a,name:e,instance:d,options:n}),s=function(){};c.push(r||s)}})),d.update()},forceUpdate:function(){if(!l){var t=a.elements,e=t.reference,i=t.popper;if(Ct(e,i)){a.rects={reference:At(e,X(i),"fixed"===a.options.strategy),popper:B(i)},a.reset=!1,a.placement=a.options.placement,a.orderedModifiers.forEach((function(t){return a.modifiersData[t.name]=Object.assign({},t.data)}));for(var n=0;n<a.orderedModifiers.length;n++)if(!0!==a.reset){var o=a.orderedModifiers[n],r=o.fn,s=o.options,c=void 0===s?{}:s,u=o.name;"function"==typeof r&&(a=r({state:a,options:c,name:u,instance:d})||a)}else a.reset=!1,n=-1}}},update:(o=function(){return new Promise((function(t){d.forceUpdate(),t(a)}))},function(){return s||(s=new Promise((function(t){Promise.resolve().then((function(){s=void 0,t(o())}))}))),s}),destroy:function(){u(),l=!0}};if(!Ct(t,e))return d;function u(){c.forEach((function(t){return t()})),c=[]}return d.setOptions(i).then((function(t){!l&&i.onFirstUpdate&&i.onFirstUpdate(t)})),d}}var Pt=Tt(),Ht=Tt({defaultModifiers:[ot,It,it,H,Lt,yt,kt,Q,wt]}),jt=Tt({defaultModifiers:[ot,It,it,H]})},902:function(t,e,i){var n=this&&this.__assign||function(){return n=Object.assign||function(t){for(var e,i=1,n=arguments.length;i<n;i++)for(var o in e=arguments[i])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t},n.apply(this,arguments)};Object.defineProperty(e,"__esModule",{value:!0}),e.initAccordions=void 0;var o=i(423),r={alwaysOpen:!1,activeClasses:"bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white",inactiveClasses:"text-gray-500 dark:text-gray-400",onOpen:function(){},onClose:function(){},onToggle:function(){}},s={id:null,override:!0},a=function(){function t(t,e,i,a){void 0===t&&(t=null),void 0===e&&(e=[]),void 0===i&&(i=r),void 0===a&&(a=s),this._instanceId=a.id?a.id:t.id,this._accordionEl=t,this._items=e,this._options=n(n({},r),i),this._initialized=!1,this.init(),o.default.addInstance("Accordion",this,this._instanceId,a.override)}return t.prototype.init=function(){var t=this;this._items.length&&!this._initialized&&(this._items.forEach((function(e){e.active&&t.open(e.id);var i=function(){t.toggle(e.id)};e.triggerEl.addEventListener("click",i),e.clickHandler=i})),this._initialized=!0)},t.prototype.destroy=function(){this._items.length&&this._initialized&&(this._items.forEach((function(t){t.triggerEl.removeEventListener("click",t.clickHandler),delete t.clickHandler})),this._initialized=!1)},t.prototype.removeInstance=function(){o.default.removeInstance("Accordion",this._instanceId)},t.prototype.destroyAndRemoveInstance=function(){this.destroy(),this.removeInstance()},t.prototype.getItem=function(t){return this._items.filter((function(e){return e.id===t}))[0]},t.prototype.open=function(t){var e,i,n=this,o=this.getItem(t);this._options.alwaysOpen||this._items.map((function(t){var e,i;t!==o&&((e=t.triggerEl.classList).remove.apply(e,n._options.activeClasses.split(" ")),(i=t.triggerEl.classList).add.apply(i,n._options.inactiveClasses.split(" ")),t.targetEl.classList.add("hidden"),t.triggerEl.setAttribute("aria-expanded","false"),t.active=!1,t.iconEl&&t.iconEl.classList.remove("rotate-180"))})),(e=o.triggerEl.classList).add.apply(e,this._options.activeClasses.split(" ")),(i=o.triggerEl.classList).remove.apply(i,this._options.inactiveClasses.split(" ")),o.triggerEl.setAttribute("aria-expanded","true"),o.targetEl.classList.remove("hidden"),o.active=!0,o.iconEl&&o.iconEl.classList.add("rotate-180"),this._options.onOpen(this,o)},t.prototype.toggle=function(t){var e=this.getItem(t);e.active?this.close(t):this.open(t),this._options.onToggle(this,e)},t.prototype.close=function(t){var e,i,n=this.getItem(t);(e=n.triggerEl.classList).remove.apply(e,this._options.activeClasses.split(" ")),(i=n.triggerEl.classList).add.apply(i,this._options.inactiveClasses.split(" ")),n.targetEl.classList.add("hidden"),n.triggerEl.setAttribute("aria-expanded","false"),n.active=!1,n.iconEl&&n.iconEl.classList.remove("rotate-180"),this._options.onClose(this,n)},t}();function c(){document.querySelectorAll("[data-accordion]").forEach((function(t){var e=t.getAttribute("data-accordion"),i=t.getAttribute("data-active-classes"),n=t.getAttribute("data-inactive-classes"),o=[];t.querySelectorAll("[data-accordion-target]").forEach((function(e){if(e.closest("[data-accordion]")===t){var i={id:e.getAttribute("data-accordion-target"),triggerEl:e,targetEl:document.querySelector(e.getAttribute("data-accordion-target")),iconEl:e.querySelector("[data-accordion-icon]"),active:"true"===e.getAttribute("aria-expanded")};o.push(i)}})),new a(t,o,{alwaysOpen:"open"===e,activeClasses:i||r.activeClasses,inactiveClasses:n||r.inactiveClasses})}))}e.initAccordions=c,"undefined"!=typeof window&&(window.Accordion=a,window.initAccordions=c),e.default=a},33:function(t,e,i){var n=this&&this.__assign||function(){return n=Object.assign||function(t){for(var e,i=1,n=arguments.length;i<n;i++)for(var o in e=arguments[i])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t},n.apply(this,arguments)};Object.defineProperty(e,"__esModule",{value:!0}),e.initCarousels=void 0;var o=i(423),r={defaultPosition:0,indicators:{items:[],activeClasses:"bg-white dark:bg-gray-800",inactiveClasses:"bg-white/50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800"},interval:3e3,onNext:function(){},onPrev:function(){},onChange:function(){}},s={id:null,override:!0},a=function(){function t(t,e,i,a){void 0===t&&(t=null),void 0===e&&(e=[]),void 0===i&&(i=r),void 0===a&&(a=s),this._instanceId=a.id?a.id:t.id,this._carouselEl=t,this._items=e,this._options=n(n(n({},r),i),{indicators:n(n({},r.indicators),i.indicators)}),this._activeItem=this.getItem(this._options.defaultPosition),this._indicators=this._options.indicators.items,this._intervalDuration=this._options.interval,this._intervalInstance=null,this._initialized=!1,this.init(),o.default.addInstance("Carousel",this,this._instanceId,a.override)}return t.prototype.init=function(){var t=this;this._items.length&&!this._initialized&&(this._items.map((function(t){t.el.classList.add("absolute","inset-0","transition-transform","transform")})),this._getActiveItem()?this.slideTo(this._getActiveItem().position):this.slideTo(0),this._indicators.map((function(e,i){e.el.addEventListener("click",(function(){t.slideTo(i)}))})),this._initialized=!0)},t.prototype.destroy=function(){this._initialized&&(this._initialized=!1)},t.prototype.removeInstance=function(){o.default.removeInstance("Carousel",this._instanceId)},t.prototype.destroyAndRemoveInstance=function(){this.destroy(),this.removeInstance()},t.prototype.getItem=function(t){return this._items[t]},t.prototype.slideTo=function(t){var e=this._items[t],i={left:0===e.position?this._items[this._items.length-1]:this._items[e.position-1],middle:e,right:e.position===this._items.length-1?this._items[0]:this._items[e.position+1]};this._rotate(i),this._setActiveItem(e),this._intervalInstance&&(this.pause(),this.cycle()),this._options.onChange(this)},t.prototype.next=function(){var t=this._getActiveItem(),e=null;e=t.position===this._items.length-1?this._items[0]:this._items[t.position+1],this.slideTo(e.position),this._options.onNext(this)},t.prototype.prev=function(){var t=this._getActiveItem(),e=null;e=0===t.position?this._items[this._items.length-1]:this._items[t.position-1],this.slideTo(e.position),this._options.onPrev(this)},t.prototype._rotate=function(t){this._items.map((function(t){t.el.classList.add("hidden")})),t.left.el.classList.remove("-translate-x-full","translate-x-full","translate-x-0","hidden","z-20"),t.left.el.classList.add("-translate-x-full","z-10"),t.middle.el.classList.remove("-translate-x-full","translate-x-full","translate-x-0","hidden","z-10"),t.middle.el.classList.add("translate-x-0","z-20"),t.right.el.classList.remove("-translate-x-full","translate-x-full","translate-x-0","hidden","z-20"),t.right.el.classList.add("translate-x-full","z-10")},t.prototype.cycle=function(){var t=this;"undefined"!=typeof window&&(this._intervalInstance=window.setInterval((function(){t.next()}),this._intervalDuration))},t.prototype.pause=function(){clearInterval(this._intervalInstance)},t.prototype._getActiveItem=function(){return this._activeItem},t.prototype._setActiveItem=function(t){var e,i,n=this;this._activeItem=t;var o=t.position;this._indicators.length&&(this._indicators.map((function(t){var e,i;t.el.setAttribute("aria-current","false"),(e=t.el.classList).remove.apply(e,n._options.indicators.activeClasses.split(" ")),(i=t.el.classList).add.apply(i,n._options.indicators.inactiveClasses.split(" "))})),(e=this._indicators[o].el.classList).add.apply(e,this._options.indicators.activeClasses.split(" ")),(i=this._indicators[o].el.classList).remove.apply(i,this._options.indicators.inactiveClasses.split(" ")),this._indicators[o].el.setAttribute("aria-current","true"))},t}();function c(){document.querySelectorAll("[data-carousel]").forEach((function(t){var e=t.getAttribute("data-carousel-interval"),i="slide"===t.getAttribute("data-carousel"),n=[],o=0;t.querySelectorAll("[data-carousel-item]").length&&Array.from(t.querySelectorAll("[data-carousel-item]")).map((function(t,e){n.push({position:e,el:t}),"active"===t.getAttribute("data-carousel-item")&&(o=e)}));var s=[];t.querySelectorAll("[data-carousel-slide-to]").length&&Array.from(t.querySelectorAll("[data-carousel-slide-to]")).map((function(t){s.push({position:parseInt(t.getAttribute("data-carousel-slide-to")),el:t})}));var c=new a(t,n,{defaultPosition:o,indicators:{items:s},interval:e||r.interval});i&&c.cycle();var l=t.querySelector("[data-carousel-next]"),d=t.querySelector("[data-carousel-prev]");l&&l.addEventListener("click",(function(){c.next()})),d&&d.addEventListener("click",(function(){c.prev()}))}))}e.initCarousels=c,"undefined"!=typeof window&&(window.Carousel=a,window.initCarousels=c),e.default=a},922:function(t,e,i){var n=this&&this.__assign||function(){return n=Object.assign||function(t){for(var e,i=1,n=arguments.length;i<n;i++)for(var o in e=arguments[i])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t},n.apply(this,arguments)};Object.defineProperty(e,"__esModule",{value:!0}),e.initCollapses=void 0;var o=i(423),r={onCollapse:function(){},onExpand:function(){},onToggle:function(){}},s={id:null,override:!0},a=function(){function t(t,e,i,a){void 0===t&&(t=null),void 0===e&&(e=null),void 0===i&&(i=r),void 0===a&&(a=s),this._instanceId=a.id?a.id:t.id,this._targetEl=t,this._triggerEl=e,this._options=n(n({},r),i),this._visible=!1,this._initialized=!1,this.init(),o.default.addInstance("Collapse",this,this._instanceId,a.override)}return t.prototype.init=function(){var t=this;this._triggerEl&&this._targetEl&&!this._initialized&&(this._triggerEl.hasAttribute("aria-expanded")?this._visible="true"===this._triggerEl.getAttribute("aria-expanded"):this._visible=!this._targetEl.classList.contains("hidden"),this._clickHandler=function(){t.toggle()},this._triggerEl.addEventListener("click",this._clickHandler),this._initialized=!0)},t.prototype.destroy=function(){this._triggerEl&&this._initialized&&(this._triggerEl.removeEventListener("click",this._clickHandler),this._initialized=!1)},t.prototype.removeInstance=function(){o.default.removeInstance("Collapse",this._instanceId)},t.prototype.destroyAndRemoveInstance=function(){this.destroy(),this.removeInstance()},t.prototype.collapse=function(){this._targetEl.classList.add("hidden"),this._triggerEl&&this._triggerEl.setAttribute("aria-expanded","false"),this._visible=!1,this._options.onCollapse(this)},t.prototype.expand=function(){this._targetEl.classList.remove("hidden"),this._triggerEl&&this._triggerEl.setAttribute("aria-expanded","true"),this._visible=!0,this._options.onExpand(this)},t.prototype.toggle=function(){this._visible?this.collapse():this.expand(),this._options.onToggle(this)},t}();function c(){document.querySelectorAll("[data-collapse-toggle]").forEach((function(t){var e=t.getAttribute("data-collapse-toggle"),i=document.getElementById(e);i?o.default.instanceExists("Collapse",i.getAttribute("id"))?new a(i,t,{},{id:i.getAttribute("id")+"_"+o.default._generateRandomId()}):new a(i,t):console.error('The target element with id "'.concat(e,'" does not exist. Please check the data-collapse-toggle attribute.'))}))}e.initCollapses=c,"undefined"!=typeof window&&(window.Collapse=a,window.initCollapses=c),e.default=a},556:function(t,e,i){var n=this&&this.__assign||function(){return n=Object.assign||function(t){for(var e,i=1,n=arguments.length;i<n;i++)for(var o in e=arguments[i])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t},n.apply(this,arguments)};Object.defineProperty(e,"__esModule",{value:!0}),e.initDials=void 0;var o=i(423),r={triggerType:"hover",onShow:function(){},onHide:function(){},onToggle:function(){}},s={id:null,override:!0},a=function(){function t(t,e,i,a,c){void 0===t&&(t=null),void 0===e&&(e=null),void 0===i&&(i=null),void 0===a&&(a=r),void 0===c&&(c=s),this._instanceId=c.id?c.id:i.id,this._parentEl=t,this._triggerEl=e,this._targetEl=i,this._options=n(n({},r),a),this._visible=!1,this._initialized=!1,this.init(),o.default.addInstance("Dial",this,this._instanceId,c.override)}return t.prototype.init=function(){var t=this;if(this._triggerEl&&this._targetEl&&!this._initialized){var e=this._getTriggerEventTypes(this._options.triggerType);this._showEventHandler=function(){t.show()},e.showEvents.forEach((function(e){t._triggerEl.addEventListener(e,t._showEventHandler),t._targetEl.addEventListener(e,t._showEventHandler)})),this._hideEventHandler=function(){t._parentEl.matches(":hover")||t.hide()},e.hideEvents.forEach((function(e){t._parentEl.addEventListener(e,t._hideEventHandler)})),this._initialized=!0}},t.prototype.destroy=function(){var t=this;if(this._initialized){var e=this._getTriggerEventTypes(this._options.triggerType);e.showEvents.forEach((function(e){t._triggerEl.removeEventListener(e,t._showEventHandler),t._targetEl.removeEventListener(e,t._showEventHandler)})),e.hideEvents.forEach((function(e){t._parentEl.removeEventListener(e,t._hideEventHandler)})),this._initialized=!1}},t.prototype.removeInstance=function(){o.default.removeInstance("Dial",this._instanceId)},t.prototype.destroyAndRemoveInstance=function(){this.destroy(),this.removeInstance()},t.prototype.hide=function(){this._targetEl.classList.add("hidden"),this._triggerEl&&this._triggerEl.setAttribute("aria-expanded","false"),this._visible=!1,this._options.onHide(this)},t.prototype.show=function(){this._targetEl.classList.remove("hidden"),this._triggerEl&&this._triggerEl.setAttribute("aria-expanded","true"),this._visible=!0,this._options.onShow(this)},t.prototype.toggle=function(){this._visible?this.hide():this.show()},t.prototype.isHidden=function(){return!this._visible},t.prototype.isVisible=function(){return this._visible},t.prototype._getTriggerEventTypes=function(t){switch(t){case"hover":default:return{showEvents:["mouseenter","focus"],hideEvents:["mouseleave","blur"]};case"click":return{showEvents:["click","focus"],hideEvents:["focusout","blur"]};case"none":return{showEvents:[],hideEvents:[]}}},t}();function c(){document.querySelectorAll("[data-dial-init]").forEach((function(t){var e=t.querySelector("[data-dial-toggle]");if(e){var i=e.getAttribute("data-dial-toggle"),n=document.getElementById(i);if(n){var o=e.getAttribute("data-dial-trigger");new a(t,e,n,{triggerType:o||r.triggerType})}else console.error("Dial with id ".concat(i," does not exist. Are you sure that the data-dial-toggle attribute points to the correct modal id?"))}else console.error("Dial with id ".concat(t.id," does not have a trigger element. Are you sure that the data-dial-toggle attribute exists?"))}))}e.initDials=c,"undefined"!=typeof window&&(window.Dial=a,window.initDials=c),e.default=a},791:function(t,e,i){var n=this&&this.__assign||function(){return n=Object.assign||function(t){for(var e,i=1,n=arguments.length;i<n;i++)for(var o in e=arguments[i])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t},n.apply(this,arguments)};Object.defineProperty(e,"__esModule",{value:!0}),e.initDismisses=void 0;var o=i(423),r={transition:"transition-opacity",duration:300,timing:"ease-out",onHide:function(){}},s={id:null,override:!0},a=function(){function t(t,e,i,a){void 0===t&&(t=null),void 0===e&&(e=null),void 0===i&&(i=r),void 0===a&&(a=s),this._instanceId=a.id?a.id:t.id,this._targetEl=t,this._triggerEl=e,this._options=n(n({},r),i),this._initialized=!1,this.init(),o.default.addInstance("Dismiss",this,this._instanceId,a.override)}return t.prototype.init=function(){var t=this;this._triggerEl&&this._targetEl&&!this._initialized&&(this._clickHandler=function(){t.hide()},this._triggerEl.addEventListener("click",this._clickHandler),this._initialized=!0)},t.prototype.destroy=function(){this._triggerEl&&this._initialized&&(this._triggerEl.removeEventListener("click",this._clickHandler),this._initialized=!1)},t.prototype.removeInstance=function(){o.default.removeInstance("Dismiss",this._instanceId)},t.prototype.destroyAndRemoveInstance=function(){this.destroy(),this.removeInstance()},t.prototype.hide=function(){var t=this;this._targetEl.classList.add(this._options.transition,"duration-".concat(this._options.duration),this._options.timing,"opacity-0"),setTimeout((function(){t._targetEl.classList.add("hidden")}),this._options.duration),this._options.onHide(this,this._targetEl)},t}();function c(){document.querySelectorAll("[data-dismiss-target]").forEach((function(t){var e=t.getAttribute("data-dismiss-target"),i=document.querySelector(e);i?new a(i,t):console.error('The dismiss element with id "'.concat(e,'" does not exist. Please check the data-dismiss-target attribute.'))}))}e.initDismisses=c,"undefined"!=typeof window&&(window.Dismiss=a,window.initDismisses=c),e.default=a},340:function(t,e,i){var n=this&&this.__assign||function(){return n=Object.assign||function(t){for(var e,i=1,n=arguments.length;i<n;i++)for(var o in e=arguments[i])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t},n.apply(this,arguments)};Object.defineProperty(e,"__esModule",{value:!0}),e.initDrawers=void 0;var o=i(423),r={placement:"left",bodyScrolling:!1,backdrop:!0,edge:!1,edgeOffset:"bottom-[60px]",backdropClasses:"bg-gray-900/50 dark:bg-gray-900/80 fixed inset-0 z-30",onShow:function(){},onHide:function(){},onToggle:function(){}},s={id:null,override:!0},a=function(){function t(t,e,i){void 0===t&&(t=null),void 0===e&&(e=r),void 0===i&&(i=s),this._eventListenerInstances=[],this._instanceId=i.id?i.id:t.id,this._targetEl=t,this._options=n(n({},r),e),this._visible=!1,this._initialized=!1,this.init(),o.default.addInstance("Drawer",this,this._instanceId,i.override)}return t.prototype.init=function(){var t=this;this._targetEl&&!this._initialized&&(this._targetEl.setAttribute("aria-hidden","true"),this._targetEl.classList.add("transition-transform"),this._getPlacementClasses(this._options.placement).base.map((function(e){t._targetEl.classList.add(e)})),this._handleEscapeKey=function(e){"Escape"===e.key&&t.isVisible()&&t.hide()},document.addEventListener("keydown",this._handleEscapeKey),this._initialized=!0)},t.prototype.destroy=function(){this._initialized&&(this.removeAllEventListenerInstances(),this._destroyBackdropEl(),document.removeEventListener("keydown",this._handleEscapeKey),this._initialized=!1)},t.prototype.removeInstance=function(){o.default.removeInstance("Drawer",this._instanceId)},t.prototype.destroyAndRemoveInstance=function(){this.destroy(),this.removeInstance()},t.prototype.hide=function(){var t=this;this._options.edge?(this._getPlacementClasses(this._options.placement+"-edge").active.map((function(e){t._targetEl.classList.remove(e)})),this._getPlacementClasses(this._options.placement+"-edge").inactive.map((function(e){t._targetEl.classList.add(e)}))):(this._getPlacementClasses(this._options.placement).active.map((function(e){t._targetEl.classList.remove(e)})),this._getPlacementClasses(this._options.placement).inactive.map((function(e){t._targetEl.classList.add(e)}))),this._targetEl.setAttribute("aria-hidden","true"),this._targetEl.removeAttribute("aria-modal"),this._targetEl.removeAttribute("role"),this._options.bodyScrolling||document.body.classList.remove("overflow-hidden"),this._options.backdrop&&this._destroyBackdropEl(),this._visible=!1,this._options.onHide(this)},t.prototype.show=function(){var t=this;this._options.edge?(this._getPlacementClasses(this._options.placement+"-edge").active.map((function(e){t._targetEl.classList.add(e)})),this._getPlacementClasses(this._options.placement+"-edge").inactive.map((function(e){t._targetEl.classList.remove(e)}))):(this._getPlacementClasses(this._options.placement).active.map((function(e){t._targetEl.classList.add(e)})),this._getPlacementClasses(this._options.placement).inactive.map((function(e){t._targetEl.classList.remove(e)}))),this._targetEl.setAttribute("aria-modal","true"),this._targetEl.setAttribute("role","dialog"),this._targetEl.removeAttribute("aria-hidden"),this._options.bodyScrolling||document.body.classList.add("overflow-hidden"),this._options.backdrop&&this._createBackdrop(),this._visible=!0,this._options.onShow(this)},t.prototype.toggle=function(){this.isVisible()?this.hide():this.show()},t.prototype._createBackdrop=function(){var t,e=this;if(!this._visible){var i=document.createElement("div");i.setAttribute("drawer-backdrop",""),(t=i.classList).add.apply(t,this._options.backdropClasses.split(" ")),document.querySelector("body").append(i),i.addEventListener("click",(function(){e.hide()}))}},t.prototype._destroyBackdropEl=function(){this._visible&&document.querySelector("[drawer-backdrop]").remove()},t.prototype._getPlacementClasses=function(t){switch(t){case"top":return{base:["top-0","left-0","right-0"],active:["transform-none"],inactive:["-translate-y-full"]};case"right":return{base:["right-0","top-0"],active:["transform-none"],inactive:["translate-x-full"]};case"bottom":return{base:["bottom-0","left-0","right-0"],active:["transform-none"],inactive:["translate-y-full"]};case"left":default:return{base:["left-0","top-0"],active:["transform-none"],inactive:["-translate-x-full"]};case"bottom-edge":return{base:["left-0","top-0"],active:["transform-none"],inactive:["translate-y-full",this._options.edgeOffset]}}},t.prototype.isHidden=function(){return!this._visible},t.prototype.isVisible=function(){return this._visible},t.prototype.addEventListenerInstance=function(t,e,i){this._eventListenerInstances.push({element:t,type:e,handler:i})},t.prototype.removeAllEventListenerInstances=function(){this._eventListenerInstances.map((function(t){t.element.removeEventListener(t.type,t.handler)})),this._eventListenerInstances=[]},t.prototype.getAllEventListenerInstances=function(){return this._eventListenerInstances},t}();function c(){document.querySelectorAll("[data-drawer-target]").forEach((function(t){var e=t.getAttribute("data-drawer-target"),i=document.getElementById(e);if(i){var n=t.getAttribute("data-drawer-placement"),o=t.getAttribute("data-drawer-body-scrolling"),s=t.getAttribute("data-drawer-backdrop"),c=t.getAttribute("data-drawer-edge"),l=t.getAttribute("data-drawer-edge-offset");new a(i,{placement:n||r.placement,bodyScrolling:o?"true"===o:r.bodyScrolling,backdrop:s?"true"===s:r.backdrop,edge:c?"true"===c:r.edge,edgeOffset:l||r.edgeOffset})}else console.error("Drawer with id ".concat(e," not found. Are you sure that the data-drawer-target attribute points to the correct drawer id?"))})),document.querySelectorAll("[data-drawer-toggle]").forEach((function(t){var e=t.getAttribute("data-drawer-toggle");if(document.getElementById(e)){var i=o.default.getInstance("Drawer",e);if(i){var n=function(){i.toggle()};t.addEventListener("click",n),i.addEventListenerInstance(t,"click",n)}else console.error("Drawer with id ".concat(e," has not been initialized. Please initialize it using the data-drawer-target attribute."))}else console.error("Drawer with id ".concat(e," not found. Are you sure that the data-drawer-target attribute points to the correct drawer id?"))})),document.querySelectorAll("[data-drawer-dismiss], [data-drawer-hide]").forEach((function(t){var e=t.getAttribute("data-drawer-dismiss")?t.getAttribute("data-drawer-dismiss"):t.getAttribute("data-drawer-hide");if(document.getElementById(e)){var i=o.default.getInstance("Drawer",e);if(i){var n=function(){i.hide()};t.addEventListener("click",n),i.addEventListenerInstance(t,"click",n)}else console.error("Drawer with id ".concat(e," has not been initialized. Please initialize it using the data-drawer-target attribute."))}else console.error("Drawer with id ".concat(e," not found. Are you sure that the data-drawer-target attribute points to the correct drawer id"))})),document.querySelectorAll("[data-drawer-show]").forEach((function(t){var e=t.getAttribute("data-drawer-show");if(document.getElementById(e)){var i=o.default.getInstance("Drawer",e);if(i){var n=function(){i.show()};t.addEventListener("click",n),i.addEventListenerInstance(t,"click",n)}else console.error("Drawer with id ".concat(e," has not been initialized. Please initialize it using the data-drawer-target attribute."))}else console.error("Drawer with id ".concat(e," not found. Are you sure that the data-drawer-target attribute points to the correct drawer id?"))}))}e.initDrawers=c,"undefined"!=typeof window&&(window.Drawer=a,window.initDrawers=c),e.default=a},316:function(t,e,i){var n=this&&this.__assign||function(){return n=Object.assign||function(t){for(var e,i=1,n=arguments.length;i<n;i++)for(var o in e=arguments[i])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t},n.apply(this,arguments)},o=this&&this.__spreadArray||function(t,e,i){if(i||2===arguments.length)for(var n,o=0,r=e.length;o<r;o++)!n&&o in e||(n||(n=Array.prototype.slice.call(e,0,o)),n[o]=e[o]);return t.concat(n||Array.prototype.slice.call(e))};Object.defineProperty(e,"__esModule",{value:!0}),e.initDropdowns=void 0;var r=i(853),s=i(423),a={placement:"bottom",triggerType:"click",offsetSkidding:0,offsetDistance:10,delay:300,ignoreClickOutsideClass:!1,onShow:function(){},onHide:function(){},onToggle:function(){}},c={id:null,override:!0},l=function(){function t(t,e,i,o){void 0===t&&(t=null),void 0===e&&(e=null),void 0===i&&(i=a),void 0===o&&(o=c),this._instanceId=o.id?o.id:t.id,this._targetEl=t,this._triggerEl=e,this._options=n(n({},a),i),this._popperInstance=null,this._visible=!1,this._initialized=!1,this.init(),s.default.addInstance("Dropdown",this,this._instanceId,o.override)}return t.prototype.init=function(){this._triggerEl&&this._targetEl&&!this._initialized&&(this._popperInstance=this._createPopperInstance(),this._setupEventListeners(),this._initialized=!0)},t.prototype.destroy=function(){var t=this,e=this._getTriggerEvents();"click"===this._options.triggerType&&e.showEvents.forEach((function(e){t._triggerEl.removeEventListener(e,t._clickHandler)})),"hover"===this._options.triggerType&&(e.showEvents.forEach((function(e){t._triggerEl.removeEventListener(e,t._hoverShowTriggerElHandler),t._targetEl.removeEventListener(e,t._hoverShowTargetElHandler)})),e.hideEvents.forEach((function(e){t._triggerEl.removeEventListener(e,t._hoverHideHandler),t._targetEl.removeEventListener(e,t._hoverHideHandler)}))),this._popperInstance.destroy(),this._initialized=!1},t.prototype.removeInstance=function(){s.default.removeInstance("Dropdown",this._instanceId)},t.prototype.destroyAndRemoveInstance=function(){this.destroy(),this.removeInstance()},t.prototype._setupEventListeners=function(){var t=this,e=this._getTriggerEvents();this._clickHandler=function(){t.toggle()},"click"===this._options.triggerType&&e.showEvents.forEach((function(e){t._triggerEl.addEventListener(e,t._clickHandler)})),this._hoverShowTriggerElHandler=function(e){"click"===e.type?t.toggle():setTimeout((function(){t.show()}),t._options.delay)},this._hoverShowTargetElHandler=function(){t.show()},this._hoverHideHandler=function(){setTimeout((function(){t._targetEl.matches(":hover")||t.hide()}),t._options.delay)},"hover"===this._options.triggerType&&(e.showEvents.forEach((function(e){t._triggerEl.addEventListener(e,t._hoverShowTriggerElHandler),t._targetEl.addEventListener(e,t._hoverShowTargetElHandler)})),e.hideEvents.forEach((function(e){t._triggerEl.addEventListener(e,t._hoverHideHandler),t._targetEl.addEventListener(e,t._hoverHideHandler)})))},t.prototype._createPopperInstance=function(){return(0,r.createPopper)(this._triggerEl,this._targetEl,{placement:this._options.placement,modifiers:[{name:"offset",options:{offset:[this._options.offsetSkidding,this._options.offsetDistance]}}]})},t.prototype._setupClickOutsideListener=function(){var t=this;this._clickOutsideEventListener=function(e){t._handleClickOutside(e,t._targetEl)},document.body.addEventListener("click",this._clickOutsideEventListener,!0)},t.prototype._removeClickOutsideListener=function(){document.body.removeEventListener("click",this._clickOutsideEventListener,!0)},t.prototype._handleClickOutside=function(t,e){var i=t.target,n=this._options.ignoreClickOutsideClass,o=!1;n&&document.querySelectorAll(".".concat(n)).forEach((function(t){t.contains(i)&&(o=!0)}));i===e||e.contains(i)||this._triggerEl.contains(i)||o||!this.isVisible()||this.hide()},t.prototype._getTriggerEvents=function(){switch(this._options.triggerType){case"hover":return{showEvents:["mouseenter","click"],hideEvents:["mouseleave"]};case"click":default:return{showEvents:["click"],hideEvents:[]};case"none":return{showEvents:[],hideEvents:[]}}},t.prototype.toggle=function(){this.isVisible()?this.hide():this.show(),this._options.onToggle(this)},t.prototype.isVisible=function(){return this._visible},t.prototype.show=function(){this._targetEl.classList.remove("hidden"),this._targetEl.classList.add("block"),this._popperInstance.setOptions((function(t){return n(n({},t),{modifiers:o(o([],t.modifiers,!0),[{name:"eventListeners",enabled:!0}],!1)})})),this._setupClickOutsideListener(),this._popperInstance.update(),this._visible=!0,this._options.onShow(this)},t.prototype.hide=function(){this._targetEl.classList.remove("block"),this._targetEl.classList.add("hidden"),this._popperInstance.setOptions((function(t){return n(n({},t),{modifiers:o(o([],t.modifiers,!0),[{name:"eventListeners",enabled:!1}],!1)})})),this._visible=!1,this._removeClickOutsideListener(),this._options.onHide(this)},t}();function d(){document.querySelectorAll("[data-dropdown-toggle]").forEach((function(t){var e=t.getAttribute("data-dropdown-toggle"),i=document.getElementById(e);if(i){var n=t.getAttribute("data-dropdown-placement"),o=t.getAttribute("data-dropdown-offset-skidding"),r=t.getAttribute("data-dropdown-offset-distance"),s=t.getAttribute("data-dropdown-trigger"),c=t.getAttribute("data-dropdown-delay"),d=t.getAttribute("data-dropdown-ignore-click-outside-class");new l(i,t,{placement:n||a.placement,triggerType:s||a.triggerType,offsetSkidding:o?parseInt(o):a.offsetSkidding,offsetDistance:r?parseInt(r):a.offsetDistance,delay:c?parseInt(c):a.delay,ignoreClickOutsideClass:d||a.ignoreClickOutsideClass})}else console.error('The dropdown element with id "'.concat(e,'" does not exist. Please check the data-dropdown-toggle attribute.'))}))}e.initDropdowns=d,"undefined"!=typeof window&&(window.Dropdown=l,window.initDropdowns=d),e.default=l},311:function(t,e,i){Object.defineProperty(e,"__esModule",{value:!0}),e.initFlowbite=void 0;var n=i(902),o=i(33),r=i(922),s=i(556),a=i(791),c=i(340),l=i(316),d=i(656),u=i(16),p=i(903),h=i(247),f=i(671);function v(){(0,n.initAccordions)(),(0,r.initCollapses)(),(0,o.initCarousels)(),(0,a.initDismisses)(),(0,l.initDropdowns)(),(0,u.initModals)(),(0,c.initDrawers)(),(0,h.initTabs)(),(0,f.initTooltips)(),(0,p.initPopovers)(),(0,s.initDials)(),(0,d.initInputCounters)()}e.initFlowbite=v,"undefined"!=typeof window&&(window.initFlowbite=v)},656:function(t,e,i){var n=this&&this.__assign||function(){return n=Object.assign||function(t){for(var e,i=1,n=arguments.length;i<n;i++)for(var o in e=arguments[i])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t},n.apply(this,arguments)};Object.defineProperty(e,"__esModule",{value:!0}),e.initInputCounters=void 0;var o=i(423),r={minValue:null,maxValue:null,onIncrement:function(){},onDecrement:function(){}},s={id:null,override:!0},a=function(){function t(t,e,i,a,c){void 0===t&&(t=null),void 0===e&&(e=null),void 0===i&&(i=null),void 0===a&&(a=r),void 0===c&&(c=s),this._instanceId=c.id?c.id:t.id,this._targetEl=t,this._incrementEl=e,this._decrementEl=i,this._options=n(n({},r),a),this._initialized=!1,this.init(),o.default.addInstance("InputCounter",this,this._instanceId,c.override)}return t.prototype.init=function(){var t=this;this._targetEl&&!this._initialized&&(this._inputHandler=function(e){var i=e.target;/^\d*$/.test(i.value)||(i.value=i.value.replace(/[^\d]/g,"")),null!==t._options.maxValue&&parseInt(i.value)>t._options.maxValue&&(i.value=t._options.maxValue.toString()),null!==t._options.minValue&&parseInt(i.value)<t._options.minValue&&(i.value=t._options.minValue.toString())},this._incrementClickHandler=function(){t.increment()},this._decrementClickHandler=function(){t.decrement()},this._targetEl.addEventListener("input",this._inputHandler),this._incrementEl&&this._incrementEl.addEventListener("click",this._incrementClickHandler),this._decrementEl&&this._decrementEl.addEventListener("click",this._decrementClickHandler),this._initialized=!0)},t.prototype.destroy=function(){this._targetEl&&this._initialized&&(this._targetEl.removeEventListener("input",this._inputHandler),this._incrementEl&&this._incrementEl.removeEventListener("click",this._incrementClickHandler),this._decrementEl&&this._decrementEl.removeEventListener("click",this._decrementClickHandler),this._initialized=!1)},t.prototype.removeInstance=function(){o.default.removeInstance("InputCounter",this._instanceId)},t.prototype.destroyAndRemoveInstance=function(){this.destroy(),this.removeInstance()},t.prototype.getCurrentValue=function(){return parseInt(this._targetEl.value)||0},t.prototype.increment=function(){null!==this._options.maxValue&&this.getCurrentValue()>=this._options.maxValue||(this._targetEl.value=(this.getCurrentValue()+1).toString(),this._options.onIncrement(this))},t.prototype.decrement=function(){null!==this._options.minValue&&this.getCurrentValue()<=this._options.minValue||(this._targetEl.value=(this.getCurrentValue()-1).toString(),this._options.onDecrement(this))},t}();function c(){document.querySelectorAll("[data-input-counter]").forEach((function(t){var e=t.id,i=document.querySelector('[data-input-counter-increment="'+e+'"]'),n=document.querySelector('[data-input-counter-decrement="'+e+'"]'),r=t.getAttribute("data-input-counter-min"),s=t.getAttribute("data-input-counter-max");t?o.default.instanceExists("InputCounter",t.getAttribute("id"))||new a(t,i||null,n||null,{minValue:r?parseInt(r):null,maxValue:s?parseInt(s):null}):console.error('The target element with id "'.concat(e,'" does not exist. Please check the data-input-counter attribute.'))}))}e.initInputCounters=c,"undefined"!=typeof window&&(window.InputCounter=a,window.initInputCounters=c),e.default=a},16:function(t,e,i){var n=this&&this.__assign||function(){return n=Object.assign||function(t){for(var e,i=1,n=arguments.length;i<n;i++)for(var o in e=arguments[i])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t},n.apply(this,arguments)};Object.defineProperty(e,"__esModule",{value:!0}),e.initModals=void 0;var o=i(423),r={placement:"center",backdropClasses:"bg-gray-900/50 dark:bg-gray-900/80 fixed inset-0 z-40",backdrop:"dynamic",closable:!0,onHide:function(){},onShow:function(){},onToggle:function(){}},s={id:null,override:!0},a=function(){function t(t,e,i){void 0===t&&(t=null),void 0===e&&(e=r),void 0===i&&(i=s),this._eventListenerInstances=[],this._instanceId=i.id?i.id:t.id,this._targetEl=t,this._options=n(n({},r),e),this._isHidden=!0,this._backdropEl=null,this._initialized=!1,this.init(),o.default.addInstance("Modal",this,this._instanceId,i.override)}return t.prototype.init=function(){var t=this;this._targetEl&&!this._initialized&&(this._getPlacementClasses().map((function(e){t._targetEl.classList.add(e)})),this._initialized=!0)},t.prototype.destroy=function(){this._initialized&&(this.removeAllEventListenerInstances(),this._destroyBackdropEl(),this._initialized=!1)},t.prototype.removeInstance=function(){o.default.removeInstance("Modal",this._instanceId)},t.prototype.destroyAndRemoveInstance=function(){this.destroy(),this.removeInstance()},t.prototype._createBackdrop=function(){var t;if(this._isHidden){var e=document.createElement("div");e.setAttribute("modal-backdrop",""),(t=e.classList).add.apply(t,this._options.backdropClasses.split(" ")),document.querySelector("body").append(e),this._backdropEl=e}},t.prototype._destroyBackdropEl=function(){this._isHidden||document.querySelector("[modal-backdrop]").remove()},t.prototype._setupModalCloseEventListeners=function(){var t=this;"dynamic"===this._options.backdrop&&(this._clickOutsideEventListener=function(e){t._handleOutsideClick(e.target)},this._targetEl.addEventListener("click",this._clickOutsideEventListener,!0)),this._keydownEventListener=function(e){"Escape"===e.key&&t.hide()},document.body.addEventListener("keydown",this._keydownEventListener,!0)},t.prototype._removeModalCloseEventListeners=function(){"dynamic"===this._options.backdrop&&this._targetEl.removeEventListener("click",this._clickOutsideEventListener,!0),document.body.removeEventListener("keydown",this._keydownEventListener,!0)},t.prototype._handleOutsideClick=function(t){(t===this._targetEl||t===this._backdropEl&&this.isVisible())&&this.hide()},t.prototype._getPlacementClasses=function(){switch(this._options.placement){case"top-left":return["justify-start","items-start"];case"top-center":return["justify-center","items-start"];case"top-right":return["justify-end","items-start"];case"center-left":return["justify-start","items-center"];case"center":default:return["justify-center","items-center"];case"center-right":return["justify-end","items-center"];case"bottom-left":return["justify-start","items-end"];case"bottom-center":return["justify-center","items-end"];case"bottom-right":return["justify-end","items-end"]}},t.prototype.toggle=function(){this._isHidden?this.show():this.hide(),this._options.onToggle(this)},t.prototype.show=function(){this.isHidden&&(this._targetEl.classList.add("flex"),this._targetEl.classList.remove("hidden"),this._targetEl.setAttribute("aria-modal","true"),this._targetEl.setAttribute("role","dialog"),this._targetEl.removeAttribute("aria-hidden"),this._createBackdrop(),this._isHidden=!1,this._options.closable&&this._setupModalCloseEventListeners(),document.body.classList.add("overflow-hidden"),this._options.onShow(this))},t.prototype.hide=function(){this.isVisible&&(this._targetEl.classList.add("hidden"),this._targetEl.classList.remove("flex"),this._targetEl.setAttribute("aria-hidden","true"),this._targetEl.removeAttribute("aria-modal"),this._targetEl.removeAttribute("role"),this._destroyBackdropEl(),this._isHidden=!0,document.body.classList.remove("overflow-hidden"),this._options.closable&&this._removeModalCloseEventListeners(),this._options.onHide(this))},t.prototype.isVisible=function(){return!this._isHidden},t.prototype.isHidden=function(){return this._isHidden},t.prototype.addEventListenerInstance=function(t,e,i){this._eventListenerInstances.push({element:t,type:e,handler:i})},t.prototype.removeAllEventListenerInstances=function(){this._eventListenerInstances.map((function(t){t.element.removeEventListener(t.type,t.handler)})),this._eventListenerInstances=[]},t.prototype.getAllEventListenerInstances=function(){return this._eventListenerInstances},t}();function c(){document.querySelectorAll("[data-modal-target]").forEach((function(t){var e=t.getAttribute("data-modal-target"),i=document.getElementById(e);if(i){var n=i.getAttribute("data-modal-placement"),o=i.getAttribute("data-modal-backdrop");new a(i,{placement:n||r.placement,backdrop:o||r.backdrop})}else console.error("Modal with id ".concat(e," does not exist. Are you sure that the data-modal-target attribute points to the correct modal id?."))})),document.querySelectorAll("[data-modal-toggle]").forEach((function(t){var e=t.getAttribute("data-modal-toggle");if(document.getElementById(e)){var i=o.default.getInstance("Modal",e);if(i){var n=function(){i.toggle()};t.addEventListener("click",n),i.addEventListenerInstance(t,"click",n)}else console.error("Modal with id ".concat(e," has not been initialized. Please initialize it using the data-modal-target attribute."))}else console.error("Modal with id ".concat(e," does not exist. Are you sure that the data-modal-toggle attribute points to the correct modal id?"))})),document.querySelectorAll("[data-modal-show]").forEach((function(t){var e=t.getAttribute("data-modal-show");if(document.getElementById(e)){var i=o.default.getInstance("Modal",e);if(i){var n=function(){i.show()};t.addEventListener("click",n),i.addEventListenerInstance(t,"click",n)}else console.error("Modal with id ".concat(e," has not been initialized. Please initialize it using the data-modal-target attribute."))}else console.error("Modal with id ".concat(e," does not exist. Are you sure that the data-modal-show attribute points to the correct modal id?"))})),document.querySelectorAll("[data-modal-hide]").forEach((function(t){var e=t.getAttribute("data-modal-hide");if(document.getElementById(e)){var i=o.default.getInstance("Modal",e);if(i){var n=function(){i.hide()};t.addEventListener("click",n),i.addEventListenerInstance(t,"click",n)}else console.error("Modal with id ".concat(e," has not been initialized. Please initialize it using the data-modal-target attribute."))}else console.error("Modal with id ".concat(e," does not exist. Are you sure that the data-modal-hide attribute points to the correct modal id?"))}))}e.initModals=c,"undefined"!=typeof window&&(window.Modal=a,window.initModals=c),e.default=a},903:function(t,e,i){var n=this&&this.__assign||function(){return n=Object.assign||function(t){for(var e,i=1,n=arguments.length;i<n;i++)for(var o in e=arguments[i])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t},n.apply(this,arguments)},o=this&&this.__spreadArray||function(t,e,i){if(i||2===arguments.length)for(var n,o=0,r=e.length;o<r;o++)!n&&o in e||(n||(n=Array.prototype.slice.call(e,0,o)),n[o]=e[o]);return t.concat(n||Array.prototype.slice.call(e))};Object.defineProperty(e,"__esModule",{value:!0}),e.initPopovers=void 0;var r=i(853),s=i(423),a={placement:"top",offset:10,triggerType:"hover",onShow:function(){},onHide:function(){},onToggle:function(){}},c={id:null,override:!0},l=function(){function t(t,e,i,o){void 0===t&&(t=null),void 0===e&&(e=null),void 0===i&&(i=a),void 0===o&&(o=c),this._instanceId=o.id?o.id:t.id,this._targetEl=t,this._triggerEl=e,this._options=n(n({},a),i),this._popperInstance=null,this._visible=!1,this._initialized=!1,this.init(),s.default.addInstance("Popover",this,o.id?o.id:this._targetEl.id,o.override)}return t.prototype.init=function(){this._triggerEl&&this._targetEl&&!this._initialized&&(this._setupEventListeners(),this._popperInstance=this._createPopperInstance(),this._initialized=!0)},t.prototype.destroy=function(){var t=this;if(this._initialized){var e=this._getTriggerEvents();e.showEvents.forEach((function(e){t._triggerEl.removeEventListener(e,t._showHandler),t._targetEl.removeEventListener(e,t._showHandler)})),e.hideEvents.forEach((function(e){t._triggerEl.removeEventListener(e,t._hideHandler),t._targetEl.removeEventListener(e,t._hideHandler)})),this._removeKeydownListener(),this._removeClickOutsideListener(),this._popperInstance&&this._popperInstance.destroy(),this._initialized=!1}},t.prototype.removeInstance=function(){s.default.removeInstance("Popover",this._instanceId)},t.prototype.destroyAndRemoveInstance=function(){this.destroy(),this.removeInstance()},t.prototype._setupEventListeners=function(){var t=this,e=this._getTriggerEvents();this._showHandler=function(){t.show()},this._hideHandler=function(){setTimeout((function(){t._targetEl.matches(":hover")||t.hide()}),100)},e.showEvents.forEach((function(e){t._triggerEl.addEventListener(e,t._showHandler),t._targetEl.addEventListener(e,t._showHandler)})),e.hideEvents.forEach((function(e){t._triggerEl.addEventListener(e,t._hideHandler),t._targetEl.addEventListener(e,t._hideHandler)}))},t.prototype._createPopperInstance=function(){return(0,r.createPopper)(this._triggerEl,this._targetEl,{placement:this._options.placement,modifiers:[{name:"offset",options:{offset:[0,this._options.offset]}}]})},t.prototype._getTriggerEvents=function(){switch(this._options.triggerType){case"hover":default:return{showEvents:["mouseenter","focus"],hideEvents:["mouseleave","blur"]};case"click":return{showEvents:["click","focus"],hideEvents:["focusout","blur"]};case"none":return{showEvents:[],hideEvents:[]}}},t.prototype._setupKeydownListener=function(){var t=this;this._keydownEventListener=function(e){"Escape"===e.key&&t.hide()},document.body.addEventListener("keydown",this._keydownEventListener,!0)},t.prototype._removeKeydownListener=function(){document.body.removeEventListener("keydown",this._keydownEventListener,!0)},t.prototype._setupClickOutsideListener=function(){var t=this;this._clickOutsideEventListener=function(e){t._handleClickOutside(e,t._targetEl)},document.body.addEventListener("click",this._clickOutsideEventListener,!0)},t.prototype._removeClickOutsideListener=function(){document.body.removeEventListener("click",this._clickOutsideEventListener,!0)},t.prototype._handleClickOutside=function(t,e){var i=t.target;i===e||e.contains(i)||this._triggerEl.contains(i)||!this.isVisible()||this.hide()},t.prototype.isVisible=function(){return this._visible},t.prototype.toggle=function(){this.isVisible()?this.hide():this.show(),this._options.onToggle(this)},t.prototype.show=function(){this._targetEl.classList.remove("opacity-0","invisible"),this._targetEl.classList.add("opacity-100","visible"),this._popperInstance.setOptions((function(t){return n(n({},t),{modifiers:o(o([],t.modifiers,!0),[{name:"eventListeners",enabled:!0}],!1)})})),this._setupClickOutsideListener(),this._setupKeydownListener(),this._popperInstance.update(),this._visible=!0,this._options.onShow(this)},t.prototype.hide=function(){this._targetEl.classList.remove("opacity-100","visible"),this._targetEl.classList.add("opacity-0","invisible"),this._popperInstance.setOptions((function(t){return n(n({},t),{modifiers:o(o([],t.modifiers,!0),[{name:"eventListeners",enabled:!1}],!1)})})),this._removeClickOutsideListener(),this._removeKeydownListener(),this._visible=!1,this._options.onHide(this)},t}();function d(){document.querySelectorAll("[data-popover-target]").forEach((function(t){var e=t.getAttribute("data-popover-target"),i=document.getElementById(e);if(i){var n=t.getAttribute("data-popover-trigger"),o=t.getAttribute("data-popover-placement"),r=t.getAttribute("data-popover-offset");new l(i,t,{placement:o||a.placement,offset:r?parseInt(r):a.offset,triggerType:n||a.triggerType})}else console.error('The popover element with id "'.concat(e,'" does not exist. Please check the data-popover-target attribute.'))}))}e.initPopovers=d,"undefined"!=typeof window&&(window.Popover=l,window.initPopovers=d),e.default=l},247:function(t,e,i){var n=this&&this.__assign||function(){return n=Object.assign||function(t){for(var e,i=1,n=arguments.length;i<n;i++)for(var o in e=arguments[i])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t},n.apply(this,arguments)};Object.defineProperty(e,"__esModule",{value:!0}),e.initTabs=void 0;var o=i(423),r={defaultTabId:null,activeClasses:"text-blue-600 hover:text-blue-600 dark:text-blue-500 dark:hover:text-blue-500 border-blue-600 dark:border-blue-500",inactiveClasses:"dark:border-transparent text-gray-500 hover:text-gray-600 dark:text-gray-400 border-gray-100 hover:border-gray-300 dark:border-gray-700 dark:hover:text-gray-300",onShow:function(){}},s={id:null,override:!0},a=function(){function t(t,e,i,a){void 0===t&&(t=null),void 0===e&&(e=[]),void 0===i&&(i=r),void 0===a&&(a=s),this._instanceId=a.id?a.id:t.id,this._tabsEl=t,this._items=e,this._activeTab=i?this.getTab(i.defaultTabId):null,this._options=n(n({},r),i),this._initialized=!1,this.init(),o.default.addInstance("Tabs",this,this._tabsEl.id,!0),o.default.addInstance("Tabs",this,this._instanceId,a.override)}return t.prototype.init=function(){var t=this;this._items.length&&!this._initialized&&(this._activeTab||this.setActiveTab(this._items[0]),this.show(this._activeTab.id,!0),this._items.map((function(e){e.triggerEl.addEventListener("click",(function(){t.show(e.id)}))})))},t.prototype.destroy=function(){this._initialized&&(this._initialized=!1)},t.prototype.removeInstance=function(){this.destroy(),o.default.removeInstance("Tabs",this._instanceId)},t.prototype.destroyAndRemoveInstance=function(){this.destroy(),this.removeInstance()},t.prototype.getActiveTab=function(){return this._activeTab},t.prototype.setActiveTab=function(t){this._activeTab=t},t.prototype.getTab=function(t){return this._items.filter((function(e){return e.id===t}))[0]},t.prototype.show=function(t,e){var i,n,o=this;void 0===e&&(e=!1);var r=this.getTab(t);(r!==this._activeTab||e)&&(this._items.map((function(t){var e,i;t!==r&&((e=t.triggerEl.classList).remove.apply(e,o._options.activeClasses.split(" ")),(i=t.triggerEl.classList).add.apply(i,o._options.inactiveClasses.split(" ")),t.targetEl.classList.add("hidden"),t.triggerEl.setAttribute("aria-selected","false"))})),(i=r.triggerEl.classList).add.apply(i,this._options.activeClasses.split(" ")),(n=r.triggerEl.classList).remove.apply(n,this._options.inactiveClasses.split(" ")),r.triggerEl.setAttribute("aria-selected","true"),r.targetEl.classList.remove("hidden"),this.setActiveTab(r),this._options.onShow(this,r))},t}();function c(){document.querySelectorAll("[data-tabs-toggle]").forEach((function(t){var e=[],i=null;t.querySelectorAll('[role="tab"]').forEach((function(t){var n="true"===t.getAttribute("aria-selected"),o={id:t.getAttribute("data-tabs-target"),triggerEl:t,targetEl:document.querySelector(t.getAttribute("data-tabs-target"))};e.push(o),n&&(i=o.id)})),new a(t,e,{defaultTabId:i})}))}e.initTabs=c,"undefined"!=typeof window&&(window.Tabs=a,window.initTabs=c),e.default=a},671:function(t,e,i){var n=this&&this.__assign||function(){return n=Object.assign||function(t){for(var e,i=1,n=arguments.length;i<n;i++)for(var o in e=arguments[i])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t},n.apply(this,arguments)},o=this&&this.__spreadArray||function(t,e,i){if(i||2===arguments.length)for(var n,o=0,r=e.length;o<r;o++)!n&&o in e||(n||(n=Array.prototype.slice.call(e,0,o)),n[o]=e[o]);return t.concat(n||Array.prototype.slice.call(e))};Object.defineProperty(e,"__esModule",{value:!0}),e.initTooltips=void 0;var r=i(853),s=i(423),a={placement:"top",triggerType:"hover",onShow:function(){},onHide:function(){},onToggle:function(){}},c={id:null,override:!0},l=function(){function t(t,e,i,o){void 0===t&&(t=null),void 0===e&&(e=null),void 0===i&&(i=a),void 0===o&&(o=c),this._instanceId=o.id?o.id:t.id,this._targetEl=t,this._triggerEl=e,this._options=n(n({},a),i),this._popperInstance=null,this._visible=!1,this._initialized=!1,this.init(),s.default.addInstance("Tooltip",this,this._instanceId,o.override)}return t.prototype.init=function(){this._triggerEl&&this._targetEl&&!this._initialized&&(this._setupEventListeners(),this._popperInstance=this._createPopperInstance(),this._initialized=!0)},t.prototype.destroy=function(){var t=this;if(this._initialized){var e=this._getTriggerEvents();e.showEvents.forEach((function(e){t._triggerEl.removeEventListener(e,t._showHandler)})),e.hideEvents.forEach((function(e){t._triggerEl.removeEventListener(e,t._hideHandler)})),this._removeKeydownListener(),this._removeClickOutsideListener(),this._popperInstance&&this._popperInstance.destroy(),this._initialized=!1}},t.prototype.removeInstance=function(){s.default.removeInstance("Tooltip",this._instanceId)},t.prototype.destroyAndRemoveInstance=function(){this.destroy(),this.removeInstance()},t.prototype._setupEventListeners=function(){var t=this,e=this._getTriggerEvents();this._showHandler=function(){t.show()},this._hideHandler=function(){t.hide()},e.showEvents.forEach((function(e){t._triggerEl.addEventListener(e,t._showHandler)})),e.hideEvents.forEach((function(e){t._triggerEl.addEventListener(e,t._hideHandler)}))},t.prototype._createPopperInstance=function(){return(0,r.createPopper)(this._triggerEl,this._targetEl,{placement:this._options.placement,modifiers:[{name:"offset",options:{offset:[0,8]}}]})},t.prototype._getTriggerEvents=function(){switch(this._options.triggerType){case"hover":default:return{showEvents:["mouseenter","focus"],hideEvents:["mouseleave","blur"]};case"click":return{showEvents:["click","focus"],hideEvents:["focusout","blur"]};case"none":return{showEvents:[],hideEvents:[]}}},t.prototype._setupKeydownListener=function(){var t=this;this._keydownEventListener=function(e){"Escape"===e.key&&t.hide()},document.body.addEventListener("keydown",this._keydownEventListener,!0)},t.prototype._removeKeydownListener=function(){document.body.removeEventListener("keydown",this._keydownEventListener,!0)},t.prototype._setupClickOutsideListener=function(){var t=this;this._clickOutsideEventListener=function(e){t._handleClickOutside(e,t._targetEl)},document.body.addEventListener("click",this._clickOutsideEventListener,!0)},t.prototype._removeClickOutsideListener=function(){document.body.removeEventListener("click",this._clickOutsideEventListener,!0)},t.prototype._handleClickOutside=function(t,e){var i=t.target;i===e||e.contains(i)||this._triggerEl.contains(i)||!this.isVisible()||this.hide()},t.prototype.isVisible=function(){return this._visible},t.prototype.toggle=function(){this.isVisible()?this.hide():this.show()},t.prototype.show=function(){this._targetEl.classList.remove("opacity-0","invisible"),this._targetEl.classList.add("opacity-100","visible"),this._popperInstance.setOptions((function(t){return n(n({},t),{modifiers:o(o([],t.modifiers,!0),[{name:"eventListeners",enabled:!0}],!1)})})),this._setupClickOutsideListener(),this._setupKeydownListener(),this._popperInstance.update(),this._visible=!0,this._options.onShow(this)},t.prototype.hide=function(){this._targetEl.classList.remove("opacity-100","visible"),this._targetEl.classList.add("opacity-0","invisible"),this._popperInstance.setOptions((function(t){return n(n({},t),{modifiers:o(o([],t.modifiers,!0),[{name:"eventListeners",enabled:!1}],!1)})})),this._removeClickOutsideListener(),this._removeKeydownListener(),this._visible=!1,this._options.onHide(this)},t}();function d(){document.querySelectorAll("[data-tooltip-target]").forEach((function(t){var e=t.getAttribute("data-tooltip-target"),i=document.getElementById(e);if(i){var n=t.getAttribute("data-tooltip-trigger"),o=t.getAttribute("data-tooltip-placement");new l(i,t,{placement:o||a.placement,triggerType:n||a.triggerType})}else console.error('The tooltip element with id "'.concat(e,'" does not exist. Please check the data-tooltip-target attribute.'))}))}e.initTooltips=d,"undefined"!=typeof window&&(window.Tooltip=l,window.initTooltips=d),e.default=l},947:function(t,e){Object.defineProperty(e,"__esModule",{value:!0});var i=function(){function t(t,e){void 0===e&&(e=[]),this._eventType=t,this._eventFunctions=e}return t.prototype.init=function(){var t=this;this._eventFunctions.forEach((function(e){"undefined"!=typeof window&&window.addEventListener(t._eventType,e)}))},t}();e.default=i},423:function(t,e){Object.defineProperty(e,"__esModule",{value:!0});var i=new(function(){function t(){this._instances={Accordion:{},Carousel:{},Collapse:{},Dial:{},Dismiss:{},Drawer:{},Dropdown:{},Modal:{},Popover:{},Tabs:{},Tooltip:{},InputCounter:{}}}return t.prototype.addInstance=function(t,e,i,n){if(void 0===n&&(n=!1),!this._instances[t])return console.warn("Flowbite: Component ".concat(t," does not exist.")),!1;!this._instances[t][i]||n?(n&&this._instances[t][i]&&this._instances[t][i].destroyAndRemoveInstance(),this._instances[t][i||this._generateRandomId()]=e):console.warn("Flowbite: Instance with ID ".concat(i," already exists."))},t.prototype.getAllInstances=function(){return this._instances},t.prototype.getInstances=function(t){return this._instances[t]?this._instances[t]:(console.warn("Flowbite: Component ".concat(t," does not exist.")),!1)},t.prototype.getInstance=function(t,e){if(this._componentAndInstanceCheck(t,e)){if(this._instances[t][e])return this._instances[t][e];console.warn("Flowbite: Instance with ID ".concat(e," does not exist."))}},t.prototype.destroyAndRemoveInstance=function(t,e){this._componentAndInstanceCheck(t,e)&&(this.destroyInstanceObject(t,e),this.removeInstance(t,e))},t.prototype.removeInstance=function(t,e){this._componentAndInstanceCheck(t,e)&&delete this._instances[t][e]},t.prototype.destroyInstanceObject=function(t,e){this._componentAndInstanceCheck(t,e)&&this._instances[t][e].destroy()},t.prototype.instanceExists=function(t,e){return!!this._instances[t]&&!!this._instances[t][e]},t.prototype._generateRandomId=function(){return Math.random().toString(36).substr(2,9)},t.prototype._componentAndInstanceCheck=function(t,e){return this._instances[t]?!!this._instances[t][e]||(console.warn("Flowbite: Instance with ID ".concat(e," does not exist.")),!1):(console.warn("Flowbite: Component ".concat(t," does not exist.")),!1)},t}());e.default=i,"undefined"!=typeof window&&(window.FlowbiteInstances=i)}},e={};function i(n){var o=e[n];if(void 0!==o)return o.exports;var r=e[n]={exports:{}};return t[n].call(r.exports,r,r.exports,i),r.exports}i.d=function(t,e){for(var n in e)i.o(e,n)&&!i.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})};var n={};return function(){var t=n;Object.defineProperty(t,"__esModule",{value:!0}),i(647);var e=i(902),o=i(33),r=i(922),s=i(556),a=i(791),c=i(340),l=i(316),d=i(16),u=i(903),p=i(247),h=i(671),f=i(656);i(311);var v=i(947);new v.default("load",[e.initAccordions,r.initCollapses,o.initCarousels,a.initDismisses,l.initDropdowns,d.initModals,c.initDrawers,p.initTabs,h.initTooltips,u.initPopovers,s.initDials,f.initInputCounters]).init(),t.default={Accordion:e.default,Carousel:o.default,Collapse:r.default,Dial:s.default,Drawer:c.default,Dismiss:a.default,Dropdown:l.default,Modal:d.default,Popover:u.default,Tabs:p.default,Tooltip:h.default,InputCounter:f.default,Events:v.default}}(),n}()}));
/* End */
;
; /* Start:"a:4:{s:4:"full";s:62:"/bitrix/templates/atib/libs/slick/slick.min.js?171050647142863";s:6:"source";s:46:"/bitrix/templates/atib/libs/slick/slick.min.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
!function(i){"use strict";"function"==typeof define&&define.amd?define(["jquery"],i):"undefined"!=typeof exports?module.exports=i(require("jquery")):i(jQuery)}(function(i){"use strict";var e=window.Slick||{};(e=function(){var e=0;return function(t,o){var s,n=this;n.defaults={accessibility:!0,adaptiveHeight:!1,appendArrows:i(t),appendDots:i(t),arrows:!0,asNavFor:null,prevArrow:'<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',nextArrow:'<button class="slick-next" aria-label="Next" type="button">Next</button>',autoplay:!1,autoplaySpeed:3e3,centerMode:!1,centerPadding:"50px",cssEase:"ease",customPaging:function(e,t){return i('<button type="button" />').text(t+1)},dots:!1,dotsClass:"slick-dots",draggable:!0,easing:"linear",edgeFriction:.35,fade:!1,focusOnSelect:!1,focusOnChange:!1,infinite:!0,initialSlide:0,lazyLoad:"ondemand",mobileFirst:!1,pauseOnHover:!0,pauseOnFocus:!0,pauseOnDotsHover:!1,respondTo:"window",responsive:null,rows:1,rtl:!1,slide:"",slidesPerRow:1,slidesToShow:1,slidesToScroll:1,speed:500,swipe:!0,swipeToSlide:!1,touchMove:!0,touchThreshold:5,useCSS:!0,useTransform:!0,variableWidth:!1,vertical:!1,verticalSwiping:!1,waitForAnimate:!0,zIndex:1e3},n.initials={animating:!1,dragging:!1,autoPlayTimer:null,currentDirection:0,currentLeft:null,currentSlide:0,direction:1,$dots:null,listWidth:null,listHeight:null,loadIndex:0,$nextArrow:null,$prevArrow:null,scrolling:!1,slideCount:null,slideWidth:null,$slideTrack:null,$slides:null,sliding:!1,slideOffset:0,swipeLeft:null,swiping:!1,$list:null,touchObject:{},transformsEnabled:!1,unslicked:!1},i.extend(n,n.initials),n.activeBreakpoint=null,n.animType=null,n.animProp=null,n.breakpoints=[],n.breakpointSettings=[],n.cssTransitions=!1,n.focussed=!1,n.interrupted=!1,n.hidden="hidden",n.paused=!0,n.positionProp=null,n.respondTo=null,n.rowCount=1,n.shouldClick=!0,n.$slider=i(t),n.$slidesCache=null,n.transformType=null,n.transitionType=null,n.visibilityChange="visibilitychange",n.windowWidth=0,n.windowTimer=null,s=i(t).data("slick")||{},n.options=i.extend({},n.defaults,o,s),n.currentSlide=n.options.initialSlide,n.originalSettings=n.options,void 0!==document.mozHidden?(n.hidden="mozHidden",n.visibilityChange="mozvisibilitychange"):void 0!==document.webkitHidden&&(n.hidden="webkitHidden",n.visibilityChange="webkitvisibilitychange"),n.autoPlay=i.proxy(n.autoPlay,n),n.autoPlayClear=i.proxy(n.autoPlayClear,n),n.autoPlayIterator=i.proxy(n.autoPlayIterator,n),n.changeSlide=i.proxy(n.changeSlide,n),n.clickHandler=i.proxy(n.clickHandler,n),n.selectHandler=i.proxy(n.selectHandler,n),n.setPosition=i.proxy(n.setPosition,n),n.swipeHandler=i.proxy(n.swipeHandler,n),n.dragHandler=i.proxy(n.dragHandler,n),n.keyHandler=i.proxy(n.keyHandler,n),n.instanceUid=e++,n.htmlExpr=/^(?:\s*(<[\w\W]+>)[^>]*)$/,n.registerBreakpoints(),n.init(!0)}}()).prototype.activateADA=function(){this.$slideTrack.find(".slick-active").attr({"aria-hidden":"false"}).find("a, input, button, select").attr({tabindex:"0"})},e.prototype.addSlide=e.prototype.slickAdd=function(e,t,o){var s=this;if("boolean"==typeof t)o=t,t=null;else if(t<0||t>=s.slideCount)return!1;s.unload(),"number"==typeof t?0===t&&0===s.$slides.length?i(e).appendTo(s.$slideTrack):o?i(e).insertBefore(s.$slides.eq(t)):i(e).insertAfter(s.$slides.eq(t)):!0===o?i(e).prependTo(s.$slideTrack):i(e).appendTo(s.$slideTrack),s.$slides=s.$slideTrack.children(this.options.slide),s.$slideTrack.children(this.options.slide).detach(),s.$slideTrack.append(s.$slides),s.$slides.each(function(e,t){i(t).attr("data-slick-index",e)}),s.$slidesCache=s.$slides,s.reinit()},e.prototype.animateHeight=function(){var i=this;if(1===i.options.slidesToShow&&!0===i.options.adaptiveHeight&&!1===i.options.vertical){var e=i.$slides.eq(i.currentSlide).outerHeight(!0);i.$list.animate({height:e},i.options.speed)}},e.prototype.animateSlide=function(e,t){var o={},s=this;s.animateHeight(),!0===s.options.rtl&&!1===s.options.vertical&&(e=-e),!1===s.transformsEnabled?!1===s.options.vertical?s.$slideTrack.animate({left:e},s.options.speed,s.options.easing,t):s.$slideTrack.animate({top:e},s.options.speed,s.options.easing,t):!1===s.cssTransitions?(!0===s.options.rtl&&(s.currentLeft=-s.currentLeft),i({animStart:s.currentLeft}).animate({animStart:e},{duration:s.options.speed,easing:s.options.easing,step:function(i){i=Math.ceil(i),!1===s.options.vertical?(o[s.animType]="translate("+i+"px, 0px)",s.$slideTrack.css(o)):(o[s.animType]="translate(0px,"+i+"px)",s.$slideTrack.css(o))},complete:function(){t&&t.call()}})):(s.applyTransition(),e=Math.ceil(e),!1===s.options.vertical?o[s.animType]="translate3d("+e+"px, 0px, 0px)":o[s.animType]="translate3d(0px,"+e+"px, 0px)",s.$slideTrack.css(o),t&&setTimeout(function(){s.disableTransition(),t.call()},s.options.speed))},e.prototype.getNavTarget=function(){var e=this,t=e.options.asNavFor;return t&&null!==t&&(t=i(t).not(e.$slider)),t},e.prototype.asNavFor=function(e){var t=this.getNavTarget();null!==t&&"object"==typeof t&&t.each(function(){var t=i(this).slick("getSlick");t.unslicked||t.slideHandler(e,!0)})},e.prototype.applyTransition=function(i){var e=this,t={};!1===e.options.fade?t[e.transitionType]=e.transformType+" "+e.options.speed+"ms "+e.options.cssEase:t[e.transitionType]="opacity "+e.options.speed+"ms "+e.options.cssEase,!1===e.options.fade?e.$slideTrack.css(t):e.$slides.eq(i).css(t)},e.prototype.autoPlay=function(){var i=this;i.autoPlayClear(),i.slideCount>i.options.slidesToShow&&(i.autoPlayTimer=setInterval(i.autoPlayIterator,i.options.autoplaySpeed))},e.prototype.autoPlayClear=function(){var i=this;i.autoPlayTimer&&clearInterval(i.autoPlayTimer)},e.prototype.autoPlayIterator=function(){var i=this,e=i.currentSlide+i.options.slidesToScroll;i.paused||i.interrupted||i.focussed||(!1===i.options.infinite&&(1===i.direction&&i.currentSlide+1===i.slideCount-1?i.direction=0:0===i.direction&&(e=i.currentSlide-i.options.slidesToScroll,i.currentSlide-1==0&&(i.direction=1))),i.slideHandler(e))},e.prototype.buildArrows=function(){var e=this;!0===e.options.arrows&&(e.$prevArrow=i(e.options.prevArrow).addClass("slick-arrow"),e.$nextArrow=i(e.options.nextArrow).addClass("slick-arrow"),e.slideCount>e.options.slidesToShow?(e.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),e.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),e.htmlExpr.test(e.options.prevArrow)&&e.$prevArrow.prependTo(e.options.appendArrows),e.htmlExpr.test(e.options.nextArrow)&&e.$nextArrow.appendTo(e.options.appendArrows),!0!==e.options.infinite&&e.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true")):e.$prevArrow.add(e.$nextArrow).addClass("slick-hidden").attr({"aria-disabled":"true",tabindex:"-1"}))},e.prototype.buildDots=function(){var e,t,o=this;if(!0===o.options.dots){for(o.$slider.addClass("slick-dotted"),t=i("<ul />").addClass(o.options.dotsClass),e=0;e<=o.getDotCount();e+=1)t.append(i("<li />").append(o.options.customPaging.call(this,o,e)));o.$dots=t.appendTo(o.options.appendDots),o.$dots.find("li").first().addClass("slick-active")}},e.prototype.buildOut=function(){var e=this;e.$slides=e.$slider.children(e.options.slide+":not(.slick-cloned)").addClass("slick-slide"),e.slideCount=e.$slides.length,e.$slides.each(function(e,t){i(t).attr("data-slick-index",e).data("originalStyling",i(t).attr("style")||"")}),e.$slider.addClass("slick-slider"),e.$slideTrack=0===e.slideCount?i('<div class="slick-track"/>').appendTo(e.$slider):e.$slides.wrapAll('<div class="slick-track"/>').parent(),e.$list=e.$slideTrack.wrap('<div class="slick-list"/>').parent(),e.$slideTrack.css("opacity",0),!0!==e.options.centerMode&&!0!==e.options.swipeToSlide||(e.options.slidesToScroll=1),i("img[data-lazy]",e.$slider).not("[src]").addClass("slick-loading"),e.setupInfinite(),e.buildArrows(),e.buildDots(),e.updateDots(),e.setSlideClasses("number"==typeof e.currentSlide?e.currentSlide:0),!0===e.options.draggable&&e.$list.addClass("draggable")},e.prototype.buildRows=function(){var i,e,t,o,s,n,r,l=this;if(o=document.createDocumentFragment(),n=l.$slider.children(),l.options.rows>1){for(r=l.options.slidesPerRow*l.options.rows,s=Math.ceil(n.length/r),i=0;i<s;i++){var d=document.createElement("div");for(e=0;e<l.options.rows;e++){var a=document.createElement("div");for(t=0;t<l.options.slidesPerRow;t++){var c=i*r+(e*l.options.slidesPerRow+t);n.get(c)&&a.appendChild(n.get(c))}d.appendChild(a)}o.appendChild(d)}l.$slider.empty().append(o),l.$slider.children().children().children().css({width:100/l.options.slidesPerRow+"%",display:"inline-block"})}},e.prototype.checkResponsive=function(e,t){var o,s,n,r=this,l=!1,d=r.$slider.width(),a=window.innerWidth||i(window).width();if("window"===r.respondTo?n=a:"slider"===r.respondTo?n=d:"min"===r.respondTo&&(n=Math.min(a,d)),r.options.responsive&&r.options.responsive.length&&null!==r.options.responsive){s=null;for(o in r.breakpoints)r.breakpoints.hasOwnProperty(o)&&(!1===r.originalSettings.mobileFirst?n<r.breakpoints[o]&&(s=r.breakpoints[o]):n>r.breakpoints[o]&&(s=r.breakpoints[o]));null!==s?null!==r.activeBreakpoint?(s!==r.activeBreakpoint||t)&&(r.activeBreakpoint=s,"unslick"===r.breakpointSettings[s]?r.unslick(s):(r.options=i.extend({},r.originalSettings,r.breakpointSettings[s]),!0===e&&(r.currentSlide=r.options.initialSlide),r.refresh(e)),l=s):(r.activeBreakpoint=s,"unslick"===r.breakpointSettings[s]?r.unslick(s):(r.options=i.extend({},r.originalSettings,r.breakpointSettings[s]),!0===e&&(r.currentSlide=r.options.initialSlide),r.refresh(e)),l=s):null!==r.activeBreakpoint&&(r.activeBreakpoint=null,r.options=r.originalSettings,!0===e&&(r.currentSlide=r.options.initialSlide),r.refresh(e),l=s),e||!1===l||r.$slider.trigger("breakpoint",[r,l])}},e.prototype.changeSlide=function(e,t){var o,s,n,r=this,l=i(e.currentTarget);switch(l.is("a")&&e.preventDefault(),l.is("li")||(l=l.closest("li")),n=r.slideCount%r.options.slidesToScroll!=0,o=n?0:(r.slideCount-r.currentSlide)%r.options.slidesToScroll,e.data.message){case"previous":s=0===o?r.options.slidesToScroll:r.options.slidesToShow-o,r.slideCount>r.options.slidesToShow&&r.slideHandler(r.currentSlide-s,!1,t);break;case"next":s=0===o?r.options.slidesToScroll:o,r.slideCount>r.options.slidesToShow&&r.slideHandler(r.currentSlide+s,!1,t);break;case"index":var d=0===e.data.index?0:e.data.index||l.index()*r.options.slidesToScroll;r.slideHandler(r.checkNavigable(d),!1,t),l.children().trigger("focus");break;default:return}},e.prototype.checkNavigable=function(i){var e,t;if(e=this.getNavigableIndexes(),t=0,i>e[e.length-1])i=e[e.length-1];else for(var o in e){if(i<e[o]){i=t;break}t=e[o]}return i},e.prototype.cleanUpEvents=function(){var e=this;e.options.dots&&null!==e.$dots&&(i("li",e.$dots).off("click.slick",e.changeSlide).off("mouseenter.slick",i.proxy(e.interrupt,e,!0)).off("mouseleave.slick",i.proxy(e.interrupt,e,!1)),!0===e.options.accessibility&&e.$dots.off("keydown.slick",e.keyHandler)),e.$slider.off("focus.slick blur.slick"),!0===e.options.arrows&&e.slideCount>e.options.slidesToShow&&(e.$prevArrow&&e.$prevArrow.off("click.slick",e.changeSlide),e.$nextArrow&&e.$nextArrow.off("click.slick",e.changeSlide),!0===e.options.accessibility&&(e.$prevArrow&&e.$prevArrow.off("keydown.slick",e.keyHandler),e.$nextArrow&&e.$nextArrow.off("keydown.slick",e.keyHandler))),e.$list.off("touchstart.slick mousedown.slick",e.swipeHandler),e.$list.off("touchmove.slick mousemove.slick",e.swipeHandler),e.$list.off("touchend.slick mouseup.slick",e.swipeHandler),e.$list.off("touchcancel.slick mouseleave.slick",e.swipeHandler),e.$list.off("click.slick",e.clickHandler),i(document).off(e.visibilityChange,e.visibility),e.cleanUpSlideEvents(),!0===e.options.accessibility&&e.$list.off("keydown.slick",e.keyHandler),!0===e.options.focusOnSelect&&i(e.$slideTrack).children().off("click.slick",e.selectHandler),i(window).off("orientationchange.slick.slick-"+e.instanceUid,e.orientationChange),i(window).off("resize.slick.slick-"+e.instanceUid,e.resize),i("[draggable!=true]",e.$slideTrack).off("dragstart",e.preventDefault),i(window).off("load.slick.slick-"+e.instanceUid,e.setPosition)},e.prototype.cleanUpSlideEvents=function(){var e=this;e.$list.off("mouseenter.slick",i.proxy(e.interrupt,e,!0)),e.$list.off("mouseleave.slick",i.proxy(e.interrupt,e,!1))},e.prototype.cleanUpRows=function(){var i,e=this;e.options.rows>1&&((i=e.$slides.children().children()).removeAttr("style"),e.$slider.empty().append(i))},e.prototype.clickHandler=function(i){!1===this.shouldClick&&(i.stopImmediatePropagation(),i.stopPropagation(),i.preventDefault())},e.prototype.destroy=function(e){var t=this;t.autoPlayClear(),t.touchObject={},t.cleanUpEvents(),i(".slick-cloned",t.$slider).detach(),t.$dots&&t.$dots.remove(),t.$prevArrow&&t.$prevArrow.length&&(t.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),t.htmlExpr.test(t.options.prevArrow)&&t.$prevArrow.remove()),t.$nextArrow&&t.$nextArrow.length&&(t.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),t.htmlExpr.test(t.options.nextArrow)&&t.$nextArrow.remove()),t.$slides&&(t.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function(){i(this).attr("style",i(this).data("originalStyling"))}),t.$slideTrack.children(this.options.slide).detach(),t.$slideTrack.detach(),t.$list.detach(),t.$slider.append(t.$slides)),t.cleanUpRows(),t.$slider.removeClass("slick-slider"),t.$slider.removeClass("slick-initialized"),t.$slider.removeClass("slick-dotted"),t.unslicked=!0,e||t.$slider.trigger("destroy",[t])},e.prototype.disableTransition=function(i){var e=this,t={};t[e.transitionType]="",!1===e.options.fade?e.$slideTrack.css(t):e.$slides.eq(i).css(t)},e.prototype.fadeSlide=function(i,e){var t=this;!1===t.cssTransitions?(t.$slides.eq(i).css({zIndex:t.options.zIndex}),t.$slides.eq(i).animate({opacity:1},t.options.speed,t.options.easing,e)):(t.applyTransition(i),t.$slides.eq(i).css({opacity:1,zIndex:t.options.zIndex}),e&&setTimeout(function(){t.disableTransition(i),e.call()},t.options.speed))},e.prototype.fadeSlideOut=function(i){var e=this;!1===e.cssTransitions?e.$slides.eq(i).animate({opacity:0,zIndex:e.options.zIndex-2},e.options.speed,e.options.easing):(e.applyTransition(i),e.$slides.eq(i).css({opacity:0,zIndex:e.options.zIndex-2}))},e.prototype.filterSlides=e.prototype.slickFilter=function(i){var e=this;null!==i&&(e.$slidesCache=e.$slides,e.unload(),e.$slideTrack.children(this.options.slide).detach(),e.$slidesCache.filter(i).appendTo(e.$slideTrack),e.reinit())},e.prototype.focusHandler=function(){var e=this;e.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick","*",function(t){t.stopImmediatePropagation();var o=i(this);setTimeout(function(){e.options.pauseOnFocus&&(e.focussed=o.is(":focus"),e.autoPlay())},0)})},e.prototype.getCurrent=e.prototype.slickCurrentSlide=function(){return this.currentSlide},e.prototype.getDotCount=function(){var i=this,e=0,t=0,o=0;if(!0===i.options.infinite)if(i.slideCount<=i.options.slidesToShow)++o;else for(;e<i.slideCount;)++o,e=t+i.options.slidesToScroll,t+=i.options.slidesToScroll<=i.options.slidesToShow?i.options.slidesToScroll:i.options.slidesToShow;else if(!0===i.options.centerMode)o=i.slideCount;else if(i.options.asNavFor)for(;e<i.slideCount;)++o,e=t+i.options.slidesToScroll,t+=i.options.slidesToScroll<=i.options.slidesToShow?i.options.slidesToScroll:i.options.slidesToShow;else o=1+Math.ceil((i.slideCount-i.options.slidesToShow)/i.options.slidesToScroll);return o-1},e.prototype.getLeft=function(i){var e,t,o,s,n=this,r=0;return n.slideOffset=0,t=n.$slides.first().outerHeight(!0),!0===n.options.infinite?(n.slideCount>n.options.slidesToShow&&(n.slideOffset=n.slideWidth*n.options.slidesToShow*-1,s=-1,!0===n.options.vertical&&!0===n.options.centerMode&&(2===n.options.slidesToShow?s=-1.5:1===n.options.slidesToShow&&(s=-2)),r=t*n.options.slidesToShow*s),n.slideCount%n.options.slidesToScroll!=0&&i+n.options.slidesToScroll>n.slideCount&&n.slideCount>n.options.slidesToShow&&(i>n.slideCount?(n.slideOffset=(n.options.slidesToShow-(i-n.slideCount))*n.slideWidth*-1,r=(n.options.slidesToShow-(i-n.slideCount))*t*-1):(n.slideOffset=n.slideCount%n.options.slidesToScroll*n.slideWidth*-1,r=n.slideCount%n.options.slidesToScroll*t*-1))):i+n.options.slidesToShow>n.slideCount&&(n.slideOffset=(i+n.options.slidesToShow-n.slideCount)*n.slideWidth,r=(i+n.options.slidesToShow-n.slideCount)*t),n.slideCount<=n.options.slidesToShow&&(n.slideOffset=0,r=0),!0===n.options.centerMode&&n.slideCount<=n.options.slidesToShow?n.slideOffset=n.slideWidth*Math.floor(n.options.slidesToShow)/2-n.slideWidth*n.slideCount/2:!0===n.options.centerMode&&!0===n.options.infinite?n.slideOffset+=n.slideWidth*Math.floor(n.options.slidesToShow/2)-n.slideWidth:!0===n.options.centerMode&&(n.slideOffset=0,n.slideOffset+=n.slideWidth*Math.floor(n.options.slidesToShow/2)),e=!1===n.options.vertical?i*n.slideWidth*-1+n.slideOffset:i*t*-1+r,!0===n.options.variableWidth&&(o=n.slideCount<=n.options.slidesToShow||!1===n.options.infinite?n.$slideTrack.children(".slick-slide").eq(i):n.$slideTrack.children(".slick-slide").eq(i+n.options.slidesToShow),e=!0===n.options.rtl?o[0]?-1*(n.$slideTrack.width()-o[0].offsetLeft-o.width()):0:o[0]?-1*o[0].offsetLeft:0,!0===n.options.centerMode&&(o=n.slideCount<=n.options.slidesToShow||!1===n.options.infinite?n.$slideTrack.children(".slick-slide").eq(i):n.$slideTrack.children(".slick-slide").eq(i+n.options.slidesToShow+1),e=!0===n.options.rtl?o[0]?-1*(n.$slideTrack.width()-o[0].offsetLeft-o.width()):0:o[0]?-1*o[0].offsetLeft:0,e+=(n.$list.width()-o.outerWidth())/2)),e},e.prototype.getOption=e.prototype.slickGetOption=function(i){return this.options[i]},e.prototype.getNavigableIndexes=function(){var i,e=this,t=0,o=0,s=[];for(!1===e.options.infinite?i=e.slideCount:(t=-1*e.options.slidesToScroll,o=-1*e.options.slidesToScroll,i=2*e.slideCount);t<i;)s.push(t),t=o+e.options.slidesToScroll,o+=e.options.slidesToScroll<=e.options.slidesToShow?e.options.slidesToScroll:e.options.slidesToShow;return s},e.prototype.getSlick=function(){return this},e.prototype.getSlideCount=function(){var e,t,o=this;return t=!0===o.options.centerMode?o.slideWidth*Math.floor(o.options.slidesToShow/2):0,!0===o.options.swipeToSlide?(o.$slideTrack.find(".slick-slide").each(function(s,n){if(n.offsetLeft-t+i(n).outerWidth()/2>-1*o.swipeLeft)return e=n,!1}),Math.abs(i(e).attr("data-slick-index")-o.currentSlide)||1):o.options.slidesToScroll},e.prototype.goTo=e.prototype.slickGoTo=function(i,e){this.changeSlide({data:{message:"index",index:parseInt(i)}},e)},e.prototype.init=function(e){var t=this;i(t.$slider).hasClass("slick-initialized")||(i(t.$slider).addClass("slick-initialized"),t.buildRows(),t.buildOut(),t.setProps(),t.startLoad(),t.loadSlider(),t.initializeEvents(),t.updateArrows(),t.updateDots(),t.checkResponsive(!0),t.focusHandler()),e&&t.$slider.trigger("init",[t]),!0===t.options.accessibility&&t.initADA(),t.options.autoplay&&(t.paused=!1,t.autoPlay())},e.prototype.initADA=function(){var e=this,t=Math.ceil(e.slideCount/e.options.slidesToShow),o=e.getNavigableIndexes().filter(function(i){return i>=0&&i<e.slideCount});e.$slides.add(e.$slideTrack.find(".slick-cloned")).attr({"aria-hidden":"true",tabindex:"-1"}).find("a, input, button, select").attr({tabindex:"-1"}),null!==e.$dots&&(e.$slides.not(e.$slideTrack.find(".slick-cloned")).each(function(t){var s=o.indexOf(t);i(this).attr({role:"tabpanel",id:"slick-slide"+e.instanceUid+t,tabindex:-1}),-1!==s&&i(this).attr({"aria-describedby":"slick-slide-control"+e.instanceUid+s})}),e.$dots.attr("role","tablist").find("li").each(function(s){var n=o[s];i(this).attr({role:"presentation"}),i(this).find("button").first().attr({role:"tab",id:"slick-slide-control"+e.instanceUid+s,"aria-controls":"slick-slide"+e.instanceUid+n,"aria-label":s+1+" of "+t,"aria-selected":null,tabindex:"-1"})}).eq(e.currentSlide).find("button").attr({"aria-selected":"true",tabindex:"0"}).end());for(var s=e.currentSlide,n=s+e.options.slidesToShow;s<n;s++)e.$slides.eq(s).attr("tabindex",0);e.activateADA()},e.prototype.initArrowEvents=function(){var i=this;!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&(i.$prevArrow.off("click.slick").on("click.slick",{message:"previous"},i.changeSlide),i.$nextArrow.off("click.slick").on("click.slick",{message:"next"},i.changeSlide),!0===i.options.accessibility&&(i.$prevArrow.on("keydown.slick",i.keyHandler),i.$nextArrow.on("keydown.slick",i.keyHandler)))},e.prototype.initDotEvents=function(){var e=this;!0===e.options.dots&&(i("li",e.$dots).on("click.slick",{message:"index"},e.changeSlide),!0===e.options.accessibility&&e.$dots.on("keydown.slick",e.keyHandler)),!0===e.options.dots&&!0===e.options.pauseOnDotsHover&&i("li",e.$dots).on("mouseenter.slick",i.proxy(e.interrupt,e,!0)).on("mouseleave.slick",i.proxy(e.interrupt,e,!1))},e.prototype.initSlideEvents=function(){var e=this;e.options.pauseOnHover&&(e.$list.on("mouseenter.slick",i.proxy(e.interrupt,e,!0)),e.$list.on("mouseleave.slick",i.proxy(e.interrupt,e,!1)))},e.prototype.initializeEvents=function(){var e=this;e.initArrowEvents(),e.initDotEvents(),e.initSlideEvents(),e.$list.on("touchstart.slick mousedown.slick",{action:"start"},e.swipeHandler),e.$list.on("touchmove.slick mousemove.slick",{action:"move"},e.swipeHandler),e.$list.on("touchend.slick mouseup.slick",{action:"end"},e.swipeHandler),e.$list.on("touchcancel.slick mouseleave.slick",{action:"end"},e.swipeHandler),e.$list.on("click.slick",e.clickHandler),i(document).on(e.visibilityChange,i.proxy(e.visibility,e)),!0===e.options.accessibility&&e.$list.on("keydown.slick",e.keyHandler),!0===e.options.focusOnSelect&&i(e.$slideTrack).children().on("click.slick",e.selectHandler),i(window).on("orientationchange.slick.slick-"+e.instanceUid,i.proxy(e.orientationChange,e)),i(window).on("resize.slick.slick-"+e.instanceUid,i.proxy(e.resize,e)),i("[draggable!=true]",e.$slideTrack).on("dragstart",e.preventDefault),i(window).on("load.slick.slick-"+e.instanceUid,e.setPosition),i(e.setPosition)},e.prototype.initUI=function(){var i=this;!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&(i.$prevArrow.show(),i.$nextArrow.show()),!0===i.options.dots&&i.slideCount>i.options.slidesToShow&&i.$dots.show()},e.prototype.keyHandler=function(i){var e=this;i.target.tagName.match("TEXTAREA|INPUT|SELECT")||(37===i.keyCode&&!0===e.options.accessibility?e.changeSlide({data:{message:!0===e.options.rtl?"next":"previous"}}):39===i.keyCode&&!0===e.options.accessibility&&e.changeSlide({data:{message:!0===e.options.rtl?"previous":"next"}}))},e.prototype.lazyLoad=function(){function e(e){i("img[data-lazy]",e).each(function(){var e=i(this),t=i(this).attr("data-lazy"),o=i(this).attr("data-srcset"),s=i(this).attr("data-sizes")||n.$slider.attr("data-sizes"),r=document.createElement("img");r.onload=function(){e.animate({opacity:0},100,function(){o&&(e.attr("srcset",o),s&&e.attr("sizes",s)),e.attr("src",t).animate({opacity:1},200,function(){e.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading")}),n.$slider.trigger("lazyLoaded",[n,e,t])})},r.onerror=function(){e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),n.$slider.trigger("lazyLoadError",[n,e,t])},r.src=t})}var t,o,s,n=this;if(!0===n.options.centerMode?!0===n.options.infinite?s=(o=n.currentSlide+(n.options.slidesToShow/2+1))+n.options.slidesToShow+2:(o=Math.max(0,n.currentSlide-(n.options.slidesToShow/2+1)),s=n.options.slidesToShow/2+1+2+n.currentSlide):(o=n.options.infinite?n.options.slidesToShow+n.currentSlide:n.currentSlide,s=Math.ceil(o+n.options.slidesToShow),!0===n.options.fade&&(o>0&&o--,s<=n.slideCount&&s++)),t=n.$slider.find(".slick-slide").slice(o,s),"anticipated"===n.options.lazyLoad)for(var r=o-1,l=s,d=n.$slider.find(".slick-slide"),a=0;a<n.options.slidesToScroll;a++)r<0&&(r=n.slideCount-1),t=(t=t.add(d.eq(r))).add(d.eq(l)),r--,l++;e(t),n.slideCount<=n.options.slidesToShow?e(n.$slider.find(".slick-slide")):n.currentSlide>=n.slideCount-n.options.slidesToShow?e(n.$slider.find(".slick-cloned").slice(0,n.options.slidesToShow)):0===n.currentSlide&&e(n.$slider.find(".slick-cloned").slice(-1*n.options.slidesToShow))},e.prototype.loadSlider=function(){var i=this;i.setPosition(),i.$slideTrack.css({opacity:1}),i.$slider.removeClass("slick-loading"),i.initUI(),"progressive"===i.options.lazyLoad&&i.progressiveLazyLoad()},e.prototype.next=e.prototype.slickNext=function(){this.changeSlide({data:{message:"next"}})},e.prototype.orientationChange=function(){var i=this;i.checkResponsive(),i.setPosition()},e.prototype.pause=e.prototype.slickPause=function(){var i=this;i.autoPlayClear(),i.paused=!0},e.prototype.play=e.prototype.slickPlay=function(){var i=this;i.autoPlay(),i.options.autoplay=!0,i.paused=!1,i.focussed=!1,i.interrupted=!1},e.prototype.postSlide=function(e){var t=this;t.unslicked||(t.$slider.trigger("afterChange",[t,e]),t.animating=!1,t.slideCount>t.options.slidesToShow&&t.setPosition(),t.swipeLeft=null,t.options.autoplay&&t.autoPlay(),!0===t.options.accessibility&&(t.initADA(),t.options.focusOnChange&&i(t.$slides.get(t.currentSlide)).attr("tabindex",0).focus()))},e.prototype.prev=e.prototype.slickPrev=function(){this.changeSlide({data:{message:"previous"}})},e.prototype.preventDefault=function(i){i.preventDefault()},e.prototype.progressiveLazyLoad=function(e){e=e||1;var t,o,s,n,r,l=this,d=i("img[data-lazy]",l.$slider);d.length?(t=d.first(),o=t.attr("data-lazy"),s=t.attr("data-srcset"),n=t.attr("data-sizes")||l.$slider.attr("data-sizes"),(r=document.createElement("img")).onload=function(){s&&(t.attr("srcset",s),n&&t.attr("sizes",n)),t.attr("src",o).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading"),!0===l.options.adaptiveHeight&&l.setPosition(),l.$slider.trigger("lazyLoaded",[l,t,o]),l.progressiveLazyLoad()},r.onerror=function(){e<3?setTimeout(function(){l.progressiveLazyLoad(e+1)},500):(t.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),l.$slider.trigger("lazyLoadError",[l,t,o]),l.progressiveLazyLoad())},r.src=o):l.$slider.trigger("allImagesLoaded",[l])},e.prototype.refresh=function(e){var t,o,s=this;o=s.slideCount-s.options.slidesToShow,!s.options.infinite&&s.currentSlide>o&&(s.currentSlide=o),s.slideCount<=s.options.slidesToShow&&(s.currentSlide=0),t=s.currentSlide,s.destroy(!0),i.extend(s,s.initials,{currentSlide:t}),s.init(),e||s.changeSlide({data:{message:"index",index:t}},!1)},e.prototype.registerBreakpoints=function(){var e,t,o,s=this,n=s.options.responsive||null;if("array"===i.type(n)&&n.length){s.respondTo=s.options.respondTo||"window";for(e in n)if(o=s.breakpoints.length-1,n.hasOwnProperty(e)){for(t=n[e].breakpoint;o>=0;)s.breakpoints[o]&&s.breakpoints[o]===t&&s.breakpoints.splice(o,1),o--;s.breakpoints.push(t),s.breakpointSettings[t]=n[e].settings}s.breakpoints.sort(function(i,e){return s.options.mobileFirst?i-e:e-i})}},e.prototype.reinit=function(){var e=this;e.$slides=e.$slideTrack.children(e.options.slide).addClass("slick-slide"),e.slideCount=e.$slides.length,e.currentSlide>=e.slideCount&&0!==e.currentSlide&&(e.currentSlide=e.currentSlide-e.options.slidesToScroll),e.slideCount<=e.options.slidesToShow&&(e.currentSlide=0),e.registerBreakpoints(),e.setProps(),e.setupInfinite(),e.buildArrows(),e.updateArrows(),e.initArrowEvents(),e.buildDots(),e.updateDots(),e.initDotEvents(),e.cleanUpSlideEvents(),e.initSlideEvents(),e.checkResponsive(!1,!0),!0===e.options.focusOnSelect&&i(e.$slideTrack).children().on("click.slick",e.selectHandler),e.setSlideClasses("number"==typeof e.currentSlide?e.currentSlide:0),e.setPosition(),e.focusHandler(),e.paused=!e.options.autoplay,e.autoPlay(),e.$slider.trigger("reInit",[e])},e.prototype.resize=function(){var e=this;i(window).width()!==e.windowWidth&&(clearTimeout(e.windowDelay),e.windowDelay=window.setTimeout(function(){e.windowWidth=i(window).width(),e.checkResponsive(),e.unslicked||e.setPosition()},50))},e.prototype.removeSlide=e.prototype.slickRemove=function(i,e,t){var o=this;if(i="boolean"==typeof i?!0===(e=i)?0:o.slideCount-1:!0===e?--i:i,o.slideCount<1||i<0||i>o.slideCount-1)return!1;o.unload(),!0===t?o.$slideTrack.children().remove():o.$slideTrack.children(this.options.slide).eq(i).remove(),o.$slides=o.$slideTrack.children(this.options.slide),o.$slideTrack.children(this.options.slide).detach(),o.$slideTrack.append(o.$slides),o.$slidesCache=o.$slides,o.reinit()},e.prototype.setCSS=function(i){var e,t,o=this,s={};!0===o.options.rtl&&(i=-i),e="left"==o.positionProp?Math.ceil(i)+"px":"0px",t="top"==o.positionProp?Math.ceil(i)+"px":"0px",s[o.positionProp]=i,!1===o.transformsEnabled?o.$slideTrack.css(s):(s={},!1===o.cssTransitions?(s[o.animType]="translate("+e+", "+t+")",o.$slideTrack.css(s)):(s[o.animType]="translate3d("+e+", "+t+", 0px)",o.$slideTrack.css(s)))},e.prototype.setDimensions=function(){var i=this;!1===i.options.vertical?!0===i.options.centerMode&&i.$list.css({padding:"0px "+i.options.centerPadding}):(i.$list.height(i.$slides.first().outerHeight(!0)*i.options.slidesToShow),!0===i.options.centerMode&&i.$list.css({padding:i.options.centerPadding+" 0px"})),i.listWidth=i.$list.width(),i.listHeight=i.$list.height(),!1===i.options.vertical&&!1===i.options.variableWidth?(i.slideWidth=Math.ceil(i.listWidth/i.options.slidesToShow),i.$slideTrack.width(Math.ceil(i.slideWidth*i.$slideTrack.children(".slick-slide").length))):!0===i.options.variableWidth?i.$slideTrack.width(5e3*i.slideCount):(i.slideWidth=Math.ceil(i.listWidth),i.$slideTrack.height(Math.ceil(i.$slides.first().outerHeight(!0)*i.$slideTrack.children(".slick-slide").length)));var e=i.$slides.first().outerWidth(!0)-i.$slides.first().width();!1===i.options.variableWidth&&i.$slideTrack.children(".slick-slide").width(i.slideWidth-e)},e.prototype.setFade=function(){var e,t=this;t.$slides.each(function(o,s){e=t.slideWidth*o*-1,!0===t.options.rtl?i(s).css({position:"relative",right:e,top:0,zIndex:t.options.zIndex-2,opacity:0}):i(s).css({position:"relative",left:e,top:0,zIndex:t.options.zIndex-2,opacity:0})}),t.$slides.eq(t.currentSlide).css({zIndex:t.options.zIndex-1,opacity:1})},e.prototype.setHeight=function(){var i=this;if(1===i.options.slidesToShow&&!0===i.options.adaptiveHeight&&!1===i.options.vertical){var e=i.$slides.eq(i.currentSlide).outerHeight(!0);i.$list.css("height",e)}},e.prototype.setOption=e.prototype.slickSetOption=function(){var e,t,o,s,n,r=this,l=!1;if("object"===i.type(arguments[0])?(o=arguments[0],l=arguments[1],n="multiple"):"string"===i.type(arguments[0])&&(o=arguments[0],s=arguments[1],l=arguments[2],"responsive"===arguments[0]&&"array"===i.type(arguments[1])?n="responsive":void 0!==arguments[1]&&(n="single")),"single"===n)r.options[o]=s;else if("multiple"===n)i.each(o,function(i,e){r.options[i]=e});else if("responsive"===n)for(t in s)if("array"!==i.type(r.options.responsive))r.options.responsive=[s[t]];else{for(e=r.options.responsive.length-1;e>=0;)r.options.responsive[e].breakpoint===s[t].breakpoint&&r.options.responsive.splice(e,1),e--;r.options.responsive.push(s[t])}l&&(r.unload(),r.reinit())},e.prototype.setPosition=function(){var i=this;i.setDimensions(),i.setHeight(),!1===i.options.fade?i.setCSS(i.getLeft(i.currentSlide)):i.setFade(),i.$slider.trigger("setPosition",[i])},e.prototype.setProps=function(){var i=this,e=document.body.style;i.positionProp=!0===i.options.vertical?"top":"left","top"===i.positionProp?i.$slider.addClass("slick-vertical"):i.$slider.removeClass("slick-vertical"),void 0===e.WebkitTransition&&void 0===e.MozTransition&&void 0===e.msTransition||!0===i.options.useCSS&&(i.cssTransitions=!0),i.options.fade&&("number"==typeof i.options.zIndex?i.options.zIndex<3&&(i.options.zIndex=3):i.options.zIndex=i.defaults.zIndex),void 0!==e.OTransform&&(i.animType="OTransform",i.transformType="-o-transform",i.transitionType="OTransition",void 0===e.perspectiveProperty&&void 0===e.webkitPerspective&&(i.animType=!1)),void 0!==e.MozTransform&&(i.animType="MozTransform",i.transformType="-moz-transform",i.transitionType="MozTransition",void 0===e.perspectiveProperty&&void 0===e.MozPerspective&&(i.animType=!1)),void 0!==e.webkitTransform&&(i.animType="webkitTransform",i.transformType="-webkit-transform",i.transitionType="webkitTransition",void 0===e.perspectiveProperty&&void 0===e.webkitPerspective&&(i.animType=!1)),void 0!==e.msTransform&&(i.animType="msTransform",i.transformType="-ms-transform",i.transitionType="msTransition",void 0===e.msTransform&&(i.animType=!1)),void 0!==e.transform&&!1!==i.animType&&(i.animType="transform",i.transformType="transform",i.transitionType="transition"),i.transformsEnabled=i.options.useTransform&&null!==i.animType&&!1!==i.animType},e.prototype.setSlideClasses=function(i){var e,t,o,s,n=this;if(t=n.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden","true"),n.$slides.eq(i).addClass("slick-current"),!0===n.options.centerMode){var r=n.options.slidesToShow%2==0?1:0;e=Math.floor(n.options.slidesToShow/2),!0===n.options.infinite&&(i>=e&&i<=n.slideCount-1-e?n.$slides.slice(i-e+r,i+e+1).addClass("slick-active").attr("aria-hidden","false"):(o=n.options.slidesToShow+i,t.slice(o-e+1+r,o+e+2).addClass("slick-active").attr("aria-hidden","false")),0===i?t.eq(t.length-1-n.options.slidesToShow).addClass("slick-center"):i===n.slideCount-1&&t.eq(n.options.slidesToShow).addClass("slick-center")),n.$slides.eq(i).addClass("slick-center")}else i>=0&&i<=n.slideCount-n.options.slidesToShow?n.$slides.slice(i,i+n.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false"):t.length<=n.options.slidesToShow?t.addClass("slick-active").attr("aria-hidden","false"):(s=n.slideCount%n.options.slidesToShow,o=!0===n.options.infinite?n.options.slidesToShow+i:i,n.options.slidesToShow==n.options.slidesToScroll&&n.slideCount-i<n.options.slidesToShow?t.slice(o-(n.options.slidesToShow-s),o+s).addClass("slick-active").attr("aria-hidden","false"):t.slice(o,o+n.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false"));"ondemand"!==n.options.lazyLoad&&"anticipated"!==n.options.lazyLoad||n.lazyLoad()},e.prototype.setupInfinite=function(){var e,t,o,s=this;if(!0===s.options.fade&&(s.options.centerMode=!1),!0===s.options.infinite&&!1===s.options.fade&&(t=null,s.slideCount>s.options.slidesToShow)){for(o=!0===s.options.centerMode?s.options.slidesToShow+1:s.options.slidesToShow,e=s.slideCount;e>s.slideCount-o;e-=1)t=e-1,i(s.$slides[t]).clone(!0).attr("id","").attr("data-slick-index",t-s.slideCount).prependTo(s.$slideTrack).addClass("slick-cloned");for(e=0;e<o+s.slideCount;e+=1)t=e,i(s.$slides[t]).clone(!0).attr("id","").attr("data-slick-index",t+s.slideCount).appendTo(s.$slideTrack).addClass("slick-cloned");s.$slideTrack.find(".slick-cloned").find("[id]").each(function(){i(this).attr("id","")})}},e.prototype.interrupt=function(i){var e=this;i||e.autoPlay(),e.interrupted=i},e.prototype.selectHandler=function(e){var t=this,o=i(e.target).is(".slick-slide")?i(e.target):i(e.target).parents(".slick-slide"),s=parseInt(o.attr("data-slick-index"));s||(s=0),t.slideCount<=t.options.slidesToShow?t.slideHandler(s,!1,!0):t.slideHandler(s)},e.prototype.slideHandler=function(i,e,t){var o,s,n,r,l,d=null,a=this;if(e=e||!1,!(!0===a.animating&&!0===a.options.waitForAnimate||!0===a.options.fade&&a.currentSlide===i))if(!1===e&&a.asNavFor(i),o=i,d=a.getLeft(o),r=a.getLeft(a.currentSlide),a.currentLeft=null===a.swipeLeft?r:a.swipeLeft,!1===a.options.infinite&&!1===a.options.centerMode&&(i<0||i>a.getDotCount()*a.options.slidesToScroll))!1===a.options.fade&&(o=a.currentSlide,!0!==t?a.animateSlide(r,function(){a.postSlide(o)}):a.postSlide(o));else if(!1===a.options.infinite&&!0===a.options.centerMode&&(i<0||i>a.slideCount-a.options.slidesToScroll))!1===a.options.fade&&(o=a.currentSlide,!0!==t?a.animateSlide(r,function(){a.postSlide(o)}):a.postSlide(o));else{if(a.options.autoplay&&clearInterval(a.autoPlayTimer),s=o<0?a.slideCount%a.options.slidesToScroll!=0?a.slideCount-a.slideCount%a.options.slidesToScroll:a.slideCount+o:o>=a.slideCount?a.slideCount%a.options.slidesToScroll!=0?0:o-a.slideCount:o,a.animating=!0,a.$slider.trigger("beforeChange",[a,a.currentSlide,s]),n=a.currentSlide,a.currentSlide=s,a.setSlideClasses(a.currentSlide),a.options.asNavFor&&(l=(l=a.getNavTarget()).slick("getSlick")).slideCount<=l.options.slidesToShow&&l.setSlideClasses(a.currentSlide),a.updateDots(),a.updateArrows(),!0===a.options.fade)return!0!==t?(a.fadeSlideOut(n),a.fadeSlide(s,function(){a.postSlide(s)})):a.postSlide(s),void a.animateHeight();!0!==t?a.animateSlide(d,function(){a.postSlide(s)}):a.postSlide(s)}},e.prototype.startLoad=function(){var i=this;!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&(i.$prevArrow.hide(),i.$nextArrow.hide()),!0===i.options.dots&&i.slideCount>i.options.slidesToShow&&i.$dots.hide(),i.$slider.addClass("slick-loading")},e.prototype.swipeDirection=function(){var i,e,t,o,s=this;return i=s.touchObject.startX-s.touchObject.curX,e=s.touchObject.startY-s.touchObject.curY,t=Math.atan2(e,i),(o=Math.round(180*t/Math.PI))<0&&(o=360-Math.abs(o)),o<=45&&o>=0?!1===s.options.rtl?"left":"right":o<=360&&o>=315?!1===s.options.rtl?"left":"right":o>=135&&o<=225?!1===s.options.rtl?"right":"left":!0===s.options.verticalSwiping?o>=35&&o<=135?"down":"up":"vertical"},e.prototype.swipeEnd=function(i){var e,t,o=this;if(o.dragging=!1,o.swiping=!1,o.scrolling)return o.scrolling=!1,!1;if(o.interrupted=!1,o.shouldClick=!(o.touchObject.swipeLength>10),void 0===o.touchObject.curX)return!1;if(!0===o.touchObject.edgeHit&&o.$slider.trigger("edge",[o,o.swipeDirection()]),o.touchObject.swipeLength>=o.touchObject.minSwipe){switch(t=o.swipeDirection()){case"left":case"down":e=o.options.swipeToSlide?o.checkNavigable(o.currentSlide+o.getSlideCount()):o.currentSlide+o.getSlideCount(),o.currentDirection=0;break;case"right":case"up":e=o.options.swipeToSlide?o.checkNavigable(o.currentSlide-o.getSlideCount()):o.currentSlide-o.getSlideCount(),o.currentDirection=1}"vertical"!=t&&(o.slideHandler(e),o.touchObject={},o.$slider.trigger("swipe",[o,t]))}else o.touchObject.startX!==o.touchObject.curX&&(o.slideHandler(o.currentSlide),o.touchObject={})},e.prototype.swipeHandler=function(i){var e=this;if(!(!1===e.options.swipe||"ontouchend"in document&&!1===e.options.swipe||!1===e.options.draggable&&-1!==i.type.indexOf("mouse")))switch(e.touchObject.fingerCount=i.originalEvent&&void 0!==i.originalEvent.touches?i.originalEvent.touches.length:1,e.touchObject.minSwipe=e.listWidth/e.options.touchThreshold,!0===e.options.verticalSwiping&&(e.touchObject.minSwipe=e.listHeight/e.options.touchThreshold),i.data.action){case"start":e.swipeStart(i);break;case"move":e.swipeMove(i);break;case"end":e.swipeEnd(i)}},e.prototype.swipeMove=function(i){var e,t,o,s,n,r,l=this;return n=void 0!==i.originalEvent?i.originalEvent.touches:null,!(!l.dragging||l.scrolling||n&&1!==n.length)&&(e=l.getLeft(l.currentSlide),l.touchObject.curX=void 0!==n?n[0].pageX:i.clientX,l.touchObject.curY=void 0!==n?n[0].pageY:i.clientY,l.touchObject.swipeLength=Math.round(Math.sqrt(Math.pow(l.touchObject.curX-l.touchObject.startX,2))),r=Math.round(Math.sqrt(Math.pow(l.touchObject.curY-l.touchObject.startY,2))),!l.options.verticalSwiping&&!l.swiping&&r>4?(l.scrolling=!0,!1):(!0===l.options.verticalSwiping&&(l.touchObject.swipeLength=r),t=l.swipeDirection(),void 0!==i.originalEvent&&l.touchObject.swipeLength>4&&(l.swiping=!0,i.preventDefault()),s=(!1===l.options.rtl?1:-1)*(l.touchObject.curX>l.touchObject.startX?1:-1),!0===l.options.verticalSwiping&&(s=l.touchObject.curY>l.touchObject.startY?1:-1),o=l.touchObject.swipeLength,l.touchObject.edgeHit=!1,!1===l.options.infinite&&(0===l.currentSlide&&"right"===t||l.currentSlide>=l.getDotCount()&&"left"===t)&&(o=l.touchObject.swipeLength*l.options.edgeFriction,l.touchObject.edgeHit=!0),!1===l.options.vertical?l.swipeLeft=e+o*s:l.swipeLeft=e+o*(l.$list.height()/l.listWidth)*s,!0===l.options.verticalSwiping&&(l.swipeLeft=e+o*s),!0!==l.options.fade&&!1!==l.options.touchMove&&(!0===l.animating?(l.swipeLeft=null,!1):void l.setCSS(l.swipeLeft))))},e.prototype.swipeStart=function(i){var e,t=this;if(t.interrupted=!0,1!==t.touchObject.fingerCount||t.slideCount<=t.options.slidesToShow)return t.touchObject={},!1;void 0!==i.originalEvent&&void 0!==i.originalEvent.touches&&(e=i.originalEvent.touches[0]),t.touchObject.startX=t.touchObject.curX=void 0!==e?e.pageX:i.clientX,t.touchObject.startY=t.touchObject.curY=void 0!==e?e.pageY:i.clientY,t.dragging=!0},e.prototype.unfilterSlides=e.prototype.slickUnfilter=function(){var i=this;null!==i.$slidesCache&&(i.unload(),i.$slideTrack.children(this.options.slide).detach(),i.$slidesCache.appendTo(i.$slideTrack),i.reinit())},e.prototype.unload=function(){var e=this;i(".slick-cloned",e.$slider).remove(),e.$dots&&e.$dots.remove(),e.$prevArrow&&e.htmlExpr.test(e.options.prevArrow)&&e.$prevArrow.remove(),e.$nextArrow&&e.htmlExpr.test(e.options.nextArrow)&&e.$nextArrow.remove(),e.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden","true").css("width","")},e.prototype.unslick=function(i){var e=this;e.$slider.trigger("unslick",[e,i]),e.destroy()},e.prototype.updateArrows=function(){var i=this;Math.floor(i.options.slidesToShow/2),!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&!i.options.infinite&&(i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false"),i.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false"),0===i.currentSlide?(i.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true"),i.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false")):i.currentSlide>=i.slideCount-i.options.slidesToShow&&!1===i.options.centerMode?(i.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")):i.currentSlide>=i.slideCount-1&&!0===i.options.centerMode&&(i.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")))},e.prototype.updateDots=function(){var i=this;null!==i.$dots&&(i.$dots.find("li").removeClass("slick-active").end(),i.$dots.find("li").eq(Math.floor(i.currentSlide/i.options.slidesToScroll)).addClass("slick-active"))},e.prototype.visibility=function(){var i=this;i.options.autoplay&&(document[i.hidden]?i.interrupted=!0:i.interrupted=!1)},i.fn.slick=function(){var i,t,o=this,s=arguments[0],n=Array.prototype.slice.call(arguments,1),r=o.length;for(i=0;i<r;i++)if("object"==typeof s||void 0===s?o[i].slick=new e(o[i],s):t=o[i].slick[s].apply(o[i].slick,n),void 0!==t)return t;return o}});

/* End */
;
; /* Start:"a:4:{s:4:"full";s:49:"/bitrix/templates/atib/scripts.js?171990861181729";s:6:"source";s:33:"/bitrix/templates/atib/scripts.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
$(document).ready(function () {
	var translateYValue = 0
	var animateBox = $('.hero__animation')
	var animationDuration = 10 // Время анимации в миллисекундах (здесь 3 секунды)

	function animateTranslateY() {
		translateYValue -= 0.01 // Уменьшаем значение translateY на 0.01
		if (translateYValue <= -100) translateYValue = 0 // Сбрасываем значение, когда достигнут предел
		animateBox.css(
			'transform',
			'translateY(' + translateYValue.toFixed(2) + '%) translateZ(0px)'
		) // Применяем новое значение translateY
		setTimeout(animateTranslateY, animationDuration / 100) // Запускаем функцию анимации с интервалом
	}

	animateTranslateY() // Запускаем анимацию
})

// // Предотвращение повторной отправки форм
// form.addEventListener('submit', () => {
// 	submitButton.disabled = true

// 	// Fix for Firefox. It persists the dynamic disabled state without this hack.
// 	submitButton.autocomplete = 'off'

// 	// We are using setTimeout for page-reload submit.
// 	// For AJAX, use await and try-finally to enable submit the button again.
// 	setTimeout(() => {
// 		submitButton.disabled = false
// 	}, 2000)
// })
//  form.addEventListener('submit', async () => {
//    await fetch(…)
//    try {
//      showLoader()
//      await fetch(…)
//    } catch (e) {
//      showError(e)
//    } finally {
//      hideLoader()
//    }
//   })

jQuery(document).ready(function () {
	var e = document.querySelectorAll('.form-phone')
	jQuery(e).inputmask({
		mask: ['+7 (999) 999 99 99', '8 (999) 999 99 99'],
		greedy: !1,
		placeholder: '_',
	})
})

// set the modal menu element
const $targetEl = document.getElementById('callback-modal')

// options with default values
const options = {
	placement: 'bottom-right',
	backdrop: 'dynamic',
	backdropClasses: 'bg-gray_500/50  fixed inset-0 z-40',
	closable: true,
	onHide: () => {
		console.log('modal is hidden')
	},
	onShow: () => {
		console.log('modal is shown')
	},
	onToggle: () => {
		console.log('modal has been toggled')
	},
}

// instance options object
const instanceOptions = {
	id: 'callback-modal',
	override: true,
}

$(document).ready(function () {
	function animateProgress($progress, percentageText, smoothness) {
		var progress = 0
		var $progressCount = $progress.find('.progress__percentage--count')
		var $progressBarContainer = $progress.find('.progress')
		var $progressCircle = $progress.find('.progress__circle')
		var $parent = $progress.closest('.progress__border')

		function updateProgress() {
			progress += 1
			$progressCount.text(Math.floor(progress) + '%')
			$progressBarContainer.css(
				'transform',
				'rotate(' + progress * 3.6 + 'deg)'
			)

			var red, green, blue
			if (progress <= 50) {
				red = Math.round(251 - (progress / 50) * (251 - 255))
				green = Math.round(98 + (progress / 50) * (202 - 98))
				blue = 64
			} else {
				red = Math.round(255 - ((progress - 50) / 50) * (255 - 100))
				green = Math.round(202 + ((progress - 50) / 50) * (168 - 202))
				blue = Math.round(64 + ((progress - 50) / 50) * (133 - 64))
			}
			$parent.css(
				'background-color',
				'rgb(' + red + ',' + green + ',' + blue + ')'
			)

			var borderRed, borderGreen, borderBlue
			if (progress <= 50) {
				borderRed = Math.round(255 - (progress / 50) * (255 - 255))
				borderGreen = Math.round(112 + (progress / 50) * (214 - 112))
				borderBlue = Math.round(80 + (progress / 50) * (152 - 80))
			} else {
				borderRed = Math.round(255 - ((progress - 50) / 50) * (255 - 100))
				borderGreen = Math.round(214 + ((progress - 50) / 50) * (214 - 214))
				borderBlue = Math.round(80 + ((progress - 50) / 50) * (152 - 80))
			}
			$parent.css(
				'border-color',
				'rgb(' + borderRed + ',' + borderGreen + ',' + borderBlue + ')'
			)

			var dashOffset = ((100 - progress) / 100) * 314
			$progressCircle
				.find('.progress__circle-path')
				.css('stroke-dashoffset', dashOffset)

			setProgress(progress) // Вызываем функцию setProgress с текущим значением progress

			if (progress >= 100) {
				clearInterval(animationInterval) // Останавливаем интервал анимации после достижения 100%
			}
		}

		var animationInterval = setInterval(updateProgress, smoothness)
	}

	$('.progress').each(function () {
		var $progressBar = $(this)
		var percentageText = parseInt($progressBar.attr('data-progress'))

		animateProgress($progressBar, percentageText, 100)
	})

	const $circle = $('.progress-ring__circle')
	const radius = $circle.prop('r').baseVal.value
	const circumference = 2 * Math.PI * radius

	$circle.css('stroke-dasharray', `${circumference} ${circumference}`)
	$circle.css('stroke-dashoffset', circumference)

	function setProgress(percent) {
		const offset = circumference - (percent / 100) * circumference
		$circle.css('stroke-dashoffset', offset)
	}
})
;(function (factory) {
	'use strict'
	if (typeof define === 'function' && define.amd) {
		define(['jquery'], factory)
	} else if (typeof exports !== 'undefined') {
		module.exports = factory(require('jquery'))
	} else {
		factory(jQuery)
	}
})(function ($) {
	'use strict'
	var Slick = window.Slick || {}

	Slick = (function () {
		var instanceUid = 0

		function Slick(element, settings) {
			var _ = this,
				dataSettings

			_.defaults = {
				accessibility: true,
				adaptiveHeight: false,
				appendArrows: $(element),
				appendDots: $(element),
				arrows: true,
				asNavFor: null,
				prevArrow:
					'<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button">Previous</button>',
				nextArrow:
					'<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button">Next</button>',
				autoplay: false,
				autoplaySpeed: 3000,
				centerMode: false,
				centerPadding: '50px',
				cssEase: 'ease',
				customPaging: function (slider, i) {
					return $(
						'<button type="button" data-role="none" role="button" tabindex="0" />'
					).text(i + 1)
				},
				dots: false,
				dotsClass: 'slick-dots',
				draggable: true,
				easing: 'linear',
				edgeFriction: 0.35,
				fade: false,
				focusOnSelect: false,
				infinite: true,
				initialSlide: 0,
				lazyLoad: 'ondemand',
				mobileFirst: false,
				pauseOnHover: true,
				pauseOnFocus: true,
				pauseOnDotsHover: false,
				respondTo: 'window',
				responsive: null,
				rows: 1,
				rtl: false,
				slide: '',
				slidesPerRow: 1,
				slidesToShow: 1,
				slidesToScroll: 1,
				speed: 500,
				swipe: true,
				swipeToSlide: false,
				touchMove: true,
				touchThreshold: 5,
				useCSS: true,
				useTransform: true,
				variableWidth: false,
				vertical: false,
				verticalSwiping: false,
				verticalReverse: false,
				waitForAnimate: true,
				zIndex: 1000,
			}

			_.initials = {
				animating: false,
				dragging: false,
				autoPlayTimer: null,
				currentDirection: 0,
				currentLeft: null,
				currentSlide: 0,
				direction: 1,
				$dots: null,
				listWidth: null,
				listHeight: null,
				loadIndex: 0,
				$nextArrow: null,
				$prevArrow: null,
				slideCount: null,
				slideWidth: null,
				$slideTrack: null,
				$slides: null,
				sliding: false,
				slideOffset: 0,
				swipeLeft: null,
				$list: null,
				touchObject: {},
				transformsEnabled: false,
				unslicked: false,
			}

			$.extend(_, _.initials)

			_.activeBreakpoint = null
			_.animType = null
			_.animProp = null
			_.breakpoints = []
			_.breakpointSettings = []
			_.cssTransitions = false
			_.focussed = false
			_.interrupted = false
			_.hidden = 'hidden'
			_.paused = true
			_.positionProp = null
			_.respondTo = null
			_.rowCount = 1
			_.shouldClick = true
			_.$slider = $(element)
			_.$slidesCache = null
			_.transformType = null
			_.transitionType = null
			_.visibilityChange = 'visibilitychange'
			_.windowWidth = 0
			_.windowTimer = null

			dataSettings = $(element).data('slick') || {}

			_.options = $.extend({}, _.defaults, settings, dataSettings)

			_.currentSlide = _.options.initialSlide

			_.originalSettings = _.options

			if (typeof document.mozHidden !== 'undefined') {
				_.hidden = 'mozHidden'
				_.visibilityChange = 'mozvisibilitychange'
			} else if (typeof document.webkitHidden !== 'undefined') {
				_.hidden = 'webkitHidden'
				_.visibilityChange = 'webkitvisibilitychange'
			}

			_.autoPlay = $.proxy(_.autoPlay, _)
			_.autoPlayClear = $.proxy(_.autoPlayClear, _)
			_.autoPlayIterator = $.proxy(_.autoPlayIterator, _)
			_.changeSlide = $.proxy(_.changeSlide, _)
			_.clickHandler = $.proxy(_.clickHandler, _)
			_.selectHandler = $.proxy(_.selectHandler, _)
			_.setPosition = $.proxy(_.setPosition, _)
			_.swipeHandler = $.proxy(_.swipeHandler, _)
			_.dragHandler = $.proxy(_.dragHandler, _)
			_.keyHandler = $.proxy(_.keyHandler, _)

			_.instanceUid = instanceUid++

			// A simple way to check for HTML strings
			// Strict HTML recognition (must start with <)
			// Extracted from jQuery v1.11 source
			_.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/

			_.registerBreakpoints()
			_.init(true)
		}

		return Slick
	})()

	Slick.prototype.activateADA = function () {
		var _ = this

		_.$slideTrack
			.find('.slick-active')
			.attr({
				'aria-hidden': 'false',
			})
			.find('a, input, button, select')
			.attr({
				tabindex: '0',
			})
	}

	Slick.prototype.addSlide = Slick.prototype.slickAdd = function (
		markup,
		index,
		addBefore
	) {
		var _ = this

		if (typeof index === 'boolean') {
			addBefore = index
			index = null
		} else if (index < 0 || index >= _.slideCount) {
			return false
		}

		_.unload()

		if (typeof index === 'number') {
			if (index === 0 && _.$slides.length === 0) {
				$(markup).appendTo(_.$slideTrack)
			} else if (addBefore) {
				$(markup).insertBefore(_.$slides.eq(index))
			} else {
				$(markup).insertAfter(_.$slides.eq(index))
			}
		} else {
			if (addBefore === true) {
				$(markup).prependTo(_.$slideTrack)
			} else {
				$(markup).appendTo(_.$slideTrack)
			}
		}

		_.$slides = _.$slideTrack.children(this.options.slide)

		_.$slideTrack.children(this.options.slide).detach()

		_.$slideTrack.append(_.$slides)

		_.$slides.each(function (index, element) {
			$(element).attr('data-slick-index', index)
		})

		_.$slidesCache = _.$slides

		_.reinit()
	}

	Slick.prototype.animateHeight = function () {
		var _ = this
		if (
			_.options.slidesToShow === 1 &&
			_.options.adaptiveHeight === true &&
			_.options.vertical === false
		) {
			var targetHeight = _.$slides.eq(_.currentSlide).outerHeight(true)
			_.$list.animate(
				{
					height: targetHeight,
				},
				_.options.speed
			)
		}
	}

	Slick.prototype.animateSlide = function (targetLeft, callback) {
		var animProps = {},
			_ = this

		_.animateHeight()

		if (_.options.rtl === true && _.options.vertical === false) {
			targetLeft = -targetLeft
		}
		if (_.transformsEnabled === false) {
			if (_.options.vertical === false) {
				_.$slideTrack.animate(
					{
						left: targetLeft,
					},
					_.options.speed,
					_.options.easing,
					callback
				)
			} else {
				_.$slideTrack.animate(
					{
						top: targetLeft,
					},
					_.options.speed,
					_.options.easing,
					callback
				)
			}
		} else {
			if (_.cssTransitions === false) {
				if (_.options.rtl === true) {
					_.currentLeft = -_.currentLeft
				}
				$({
					animStart: _.currentLeft,
				}).animate(
					{
						animStart: targetLeft,
					},
					{
						duration: _.options.speed,
						easing: _.options.easing,
						step: function (now) {
							now = Math.ceil(now)
							if (_.options.vertical === false) {
								animProps[_.animType] = 'translate(' + now + 'px, 0px)'
								_.$slideTrack.css(animProps)
							} else {
								animProps[_.animType] = 'translate(0px,' + now + 'px)'
								_.$slideTrack.css(animProps)
							}
						},
						complete: function () {
							if (callback) {
								callback.call()
							}
						},
					}
				)
			} else {
				_.applyTransition()
				targetLeft = Math.ceil(targetLeft)

				if (_.options.vertical === false) {
					animProps[_.animType] = 'translate3d(' + targetLeft + 'px, 0px, 0px)'
				} else {
					animProps[_.animType] = 'translate3d(0px,' + targetLeft + 'px, 0px)'
				}
				_.$slideTrack.css(animProps)

				if (callback) {
					setTimeout(function () {
						_.disableTransition()

						callback.call()
					}, _.options.speed)
				}
			}
		}
	}

	Slick.prototype.getNavTarget = function () {
		var _ = this,
			asNavFor = _.options.asNavFor

		if (asNavFor && asNavFor !== null) {
			asNavFor = $(asNavFor).not(_.$slider)
		}

		return asNavFor
	}

	Slick.prototype.asNavFor = function (index) {
		var _ = this,
			asNavFor = _.getNavTarget()

		if (asNavFor !== null && typeof asNavFor === 'object') {
			asNavFor.each(function () {
				var target = $(this).slick('getSlick')
				if (!target.unslicked) {
					target.slideHandler(index, true)
				}
			})
		}
	}

	Slick.prototype.applyTransition = function (slide) {
		var _ = this,
			transition = {}

		if (_.options.fade === false) {
			transition[_.transitionType] =
				_.transformType + ' ' + _.options.speed + 'ms ' + _.options.cssEase
		} else {
			transition[_.transitionType] =
				'opacity ' + _.options.speed + 'ms ' + _.options.cssEase
		}

		if (_.options.fade === false) {
			_.$slideTrack.css(transition)
		} else {
			_.$slides.eq(slide).css(transition)
		}
	}

	Slick.prototype.autoPlay = function () {
		var _ = this

		_.autoPlayClear()

		if (_.slideCount > _.options.slidesToShow) {
			_.autoPlayTimer = setInterval(_.autoPlayIterator, _.options.autoplaySpeed)
		}
	}

	Slick.prototype.autoPlayClear = function () {
		var _ = this

		if (_.autoPlayTimer) {
			clearInterval(_.autoPlayTimer)
		}
	}

	Slick.prototype.autoPlayIterator = function () {
		var _ = this,
			slideTo = _.currentSlide + _.options.slidesToScroll

		if (!_.paused && !_.interrupted && !_.focussed) {
			if (_.options.infinite === false) {
				if (_.direction === 1 && _.currentSlide + 1 === _.slideCount - 1) {
					_.direction = 0
				} else if (_.direction === 0) {
					slideTo = _.currentSlide - _.options.slidesToScroll

					if (_.currentSlide - 1 === 0) {
						_.direction = 1
					}
				}
			}

			_.slideHandler(slideTo)
		}
	}

	Slick.prototype.buildArrows = function () {
		var _ = this

		if (_.options.arrows === true) {
			_.$prevArrow = $(_.options.prevArrow).addClass('slick-arrow')
			_.$nextArrow = $(_.options.nextArrow).addClass('slick-arrow')

			if (_.slideCount > _.options.slidesToShow) {
				_.$prevArrow
					.removeClass('slick-hidden')
					.removeAttr('aria-hidden tabindex')
				_.$nextArrow
					.removeClass('slick-hidden')
					.removeAttr('aria-hidden tabindex')

				if (_.htmlExpr.test(_.options.prevArrow)) {
					_.$prevArrow.prependTo(_.options.appendArrows)
				}

				if (_.htmlExpr.test(_.options.nextArrow)) {
					_.$nextArrow.appendTo(_.options.appendArrows)
				}

				if (_.options.infinite !== true) {
					_.$prevArrow.addClass('slick-disabled').attr('aria-disabled', 'true')
				}
			} else {
				_.$prevArrow
					.add(_.$nextArrow)

					.addClass('slick-hidden')
					.attr({
						'aria-disabled': 'true',
						tabindex: '-1',
					})
			}
		}
	}

	Slick.prototype.buildDots = function () {
		var _ = this,
			i,
			dot

		if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {
			_.$slider.addClass('slick-dotted')

			dot = $('<ul />').addClass(_.options.dotsClass)

			for (i = 0; i <= _.getDotCount(); i += 1) {
				dot.append($('<li />').append(_.options.customPaging.call(this, _, i)))
			}

			_.$dots = dot.appendTo(_.options.appendDots)

			_.$dots
				.find('li')
				.first()
				.addClass('slick-active')
				.attr('aria-hidden', 'false')
		}
	}

	Slick.prototype.buildOut = function () {
		var _ = this

		_.$slides = _.$slider
			.children(_.options.slide + ':not(.slick-cloned)')
			.addClass('slick-slide')

		_.slideCount = _.$slides.length

		_.$slides.each(function (index, element) {
			$(element)
				.attr('data-slick-index', index)
				.data('originalStyling', $(element).attr('style') || '')
		})

		_.$slider.addClass('slick-slider')

		_.$slideTrack =
			_.slideCount === 0
				? $('<div class="slick-track"/>').appendTo(_.$slider)
				: _.$slides.wrapAll('<div class="slick-track"/>').parent()

		_.$list = _.$slideTrack
			.wrap('<div aria-live="polite" class="slick-list"/>')
			.parent()
		_.$slideTrack.css('opacity', 0)

		if (_.options.centerMode === true || _.options.swipeToSlide === true) {
			_.options.slidesToScroll = 1
		}

		$('img[data-lazy]', _.$slider).not('[src]').addClass('slick-loading')

		_.setupInfinite()

		_.buildArrows()

		_.buildDots()

		_.updateDots()

		_.setSlideClasses(typeof _.currentSlide === 'number' ? _.currentSlide : 0)

		if (_.options.draggable === true) {
			_.$list.addClass('draggable')
		}
	}

	Slick.prototype.buildRows = function () {
		var _ = this,
			a,
			b,
			c,
			newSlides,
			numOfSlides,
			originalSlides,
			slidesPerSection

		newSlides = document.createDocumentFragment()
		originalSlides = _.$slider.children()

		if (_.options.rows > 1) {
			slidesPerSection = _.options.slidesPerRow * _.options.rows
			numOfSlides = Math.ceil(originalSlides.length / slidesPerSection)

			for (a = 0; a < numOfSlides; a++) {
				var slide = document.createElement('div')
				for (b = 0; b < _.options.rows; b++) {
					var row = document.createElement('div')
					for (c = 0; c < _.options.slidesPerRow; c++) {
						var target = a * slidesPerSection + (b * _.options.slidesPerRow + c)
						if (originalSlides.get(target)) {
							row.appendChild(originalSlides.get(target))
						}
					}
					slide.appendChild(row)
				}
				newSlides.appendChild(slide)
			}

			_.$slider.empty().append(newSlides)
			_.$slider
				.children()
				.children()
				.children()
				.css({
					width: 100 / _.options.slidesPerRow + '%',
					display: 'inline-block',
				})
		}
	}

	Slick.prototype.checkResponsive = function (initial, forceUpdate) {
		var _ = this,
			breakpoint,
			targetBreakpoint,
			respondToWidth,
			triggerBreakpoint = false
		var sliderWidth = _.$slider.width()
		var windowWidth = window.innerWidth || $(window).width()

		if (_.respondTo === 'window') {
			respondToWidth = windowWidth
		} else if (_.respondTo === 'slider') {
			respondToWidth = sliderWidth
		} else if (_.respondTo === 'min') {
			respondToWidth = Math.min(windowWidth, sliderWidth)
		}

		if (
			_.options.responsive &&
			_.options.responsive.length &&
			_.options.responsive !== null
		) {
			targetBreakpoint = null

			for (breakpoint in _.breakpoints) {
				if (_.breakpoints.hasOwnProperty(breakpoint)) {
					if (_.originalSettings.mobileFirst === false) {
						if (respondToWidth < _.breakpoints[breakpoint]) {
							targetBreakpoint = _.breakpoints[breakpoint]
						}
					} else {
						if (respondToWidth > _.breakpoints[breakpoint]) {
							targetBreakpoint = _.breakpoints[breakpoint]
						}
					}
				}
			}

			if (targetBreakpoint !== null) {
				if (_.activeBreakpoint !== null) {
					if (targetBreakpoint !== _.activeBreakpoint || forceUpdate) {
						_.activeBreakpoint = targetBreakpoint
						if (_.breakpointSettings[targetBreakpoint] === 'unslick') {
							_.unslick(targetBreakpoint)
						} else {
							_.options = $.extend(
								{},
								_.originalSettings,
								_.breakpointSettings[targetBreakpoint]
							)
							if (initial === true) {
								_.currentSlide = _.options.initialSlide
							}
							_.refresh(initial)
						}
						triggerBreakpoint = targetBreakpoint
					}
				} else {
					_.activeBreakpoint = targetBreakpoint
					if (_.breakpointSettings[targetBreakpoint] === 'unslick') {
						_.unslick(targetBreakpoint)
					} else {
						_.options = $.extend(
							{},
							_.originalSettings,
							_.breakpointSettings[targetBreakpoint]
						)
						if (initial === true) {
							_.currentSlide = _.options.initialSlide
						}
						_.refresh(initial)
					}
					triggerBreakpoint = targetBreakpoint
				}
			} else {
				if (_.activeBreakpoint !== null) {
					_.activeBreakpoint = null
					_.options = _.originalSettings
					if (initial === true) {
						_.currentSlide = _.options.initialSlide
					}
					_.refresh(initial)
					triggerBreakpoint = targetBreakpoint
				}
			}

			// only trigger breakpoints during an actual break. not on initialize.
			if (!initial && triggerBreakpoint !== false) {
				_.$slider.trigger('breakpoint', [_, triggerBreakpoint])
			}
		}
	}

	Slick.prototype.changeSlide = function (event, dontAnimate) {
		var _ = this,
			$target = $(event.currentTarget),
			indexOffset,
			slideOffset,
			unevenOffset

		// If target is a link, prevent default action.
		if ($target.is('a')) {
			event.preventDefault()
		}

		// If target is not the <li> element (ie: a child), find the <li>.
		if (!$target.is('li')) {
			$target = $target.closest('li')
		}

		unevenOffset = _.slideCount % _.options.slidesToScroll !== 0
		indexOffset = unevenOffset
			? 0
			: (_.slideCount - _.currentSlide) % _.options.slidesToScroll

		switch (event.data.message) {
			case 'previous':
				slideOffset =
					indexOffset === 0
						? _.options.slidesToScroll
						: _.options.slidesToShow - indexOffset
				if (_.slideCount > _.options.slidesToShow) {
					_.slideHandler(_.currentSlide - slideOffset, false, dontAnimate)
				}
				break

			case 'next':
				slideOffset = indexOffset === 0 ? _.options.slidesToScroll : indexOffset
				if (_.slideCount > _.options.slidesToShow) {
					_.slideHandler(_.currentSlide + slideOffset, false, dontAnimate)
				}
				break

			case 'index':
				var index =
					event.data.index === 0
						? 0
						: event.data.index || $target.index() * _.options.slidesToScroll

				_.slideHandler(_.checkNavigable(index), false, dontAnimate)
				$target.children().trigger('focus')
				break

			default:
				return
		}
	}

	Slick.prototype.checkNavigable = function (index) {
		var _ = this,
			navigables,
			prevNavigable

		navigables = _.getNavigableIndexes()
		prevNavigable = 0
		if (index > navigables[navigables.length - 1]) {
			index = navigables[navigables.length - 1]
		} else {
			for (var n in navigables) {
				if (index < navigables[n]) {
					index = prevNavigable
					break
				}
				prevNavigable = navigables[n]
			}
		}

		return index
	}

	Slick.prototype.cleanUpEvents = function () {
		var _ = this

		if (_.options.dots && _.$dots !== null) {
			$('li', _.$dots)
				.off('click.slick', _.changeSlide)
				.off('mouseenter.slick', $.proxy(_.interrupt, _, true))
				.off('mouseleave.slick', $.proxy(_.interrupt, _, false))
		}

		_.$slider.off('focus.slick blur.slick')

		if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {
			_.$prevArrow && _.$prevArrow.off('click.slick', _.changeSlide)
			_.$nextArrow && _.$nextArrow.off('click.slick', _.changeSlide)
		}

		_.$list.off('touchstart.slick mousedown.slick', _.swipeHandler)
		_.$list.off('touchmove.slick mousemove.slick', _.swipeHandler)
		_.$list.off('touchend.slick mouseup.slick', _.swipeHandler)
		_.$list.off('touchcancel.slick mouseleave.slick', _.swipeHandler)

		_.$list.off('click.slick', _.clickHandler)

		$(document).off(_.visibilityChange, _.visibility)

		_.cleanUpSlideEvents()

		if (_.options.accessibility === true) {
			_.$list.off('keydown.slick', _.keyHandler)
		}

		if (_.options.focusOnSelect === true) {
			$(_.$slideTrack).children().off('click.slick', _.selectHandler)
		}

		$(window).off(
			'orientationchange.slick.slick-' + _.instanceUid,
			_.orientationChange
		)

		$(window).off('resize.slick.slick-' + _.instanceUid, _.resize)

		$('[draggable!=true]', _.$slideTrack).off('dragstart', _.preventDefault)

		$(window).off('load.slick.slick-' + _.instanceUid, _.setPosition)
	}

	Slick.prototype.cleanUpSlideEvents = function () {
		var _ = this

		_.$list.off('mouseenter.slick', $.proxy(_.interrupt, _, true))
		_.$list.off('mouseleave.slick', $.proxy(_.interrupt, _, false))
	}

	Slick.prototype.cleanUpRows = function () {
		var _ = this,
			originalSlides

		if (_.options.rows > 1) {
			originalSlides = _.$slides.children().children()
			originalSlides.removeAttr('style')
			_.$slider.empty().append(originalSlides)
		}
	}

	Slick.prototype.clickHandler = function (event) {
		var _ = this

		if (_.shouldClick === false) {
			event.stopImmediatePropagation()
			event.stopPropagation()
			event.preventDefault()
		}
	}

	Slick.prototype.destroy = function (refresh) {
		var _ = this

		_.autoPlayClear()

		_.touchObject = {}

		_.cleanUpEvents()

		$('.slick-cloned', _.$slider).detach()

		if (_.$dots) {
			_.$dots.remove()
		}

		if (_.$prevArrow && _.$prevArrow.length) {
			_.$prevArrow
				.removeClass('slick-disabled slick-arrow slick-hidden')
				.removeAttr('aria-hidden aria-disabled tabindex')
				.css('display', '')

			if (_.htmlExpr.test(_.options.prevArrow)) {
				_.$prevArrow.remove()
			}
		}

		if (_.$nextArrow && _.$nextArrow.length) {
			_.$nextArrow
				.removeClass('slick-disabled slick-arrow slick-hidden')
				.removeAttr('aria-hidden aria-disabled tabindex')
				.css('display', '')

			if (_.htmlExpr.test(_.options.nextArrow)) {
				_.$nextArrow.remove()
			}
		}

		if (_.$slides) {
			_.$slides
				.removeClass(
					'slick-slide slick-active slick-center slick-visible slick-current'
				)
				.removeAttr('aria-hidden')
				.removeAttr('data-slick-index')
				.each(function () {
					$(this).attr('style', $(this).data('originalStyling'))
				})

			_.$slideTrack.children(this.options.slide).detach()

			_.$slideTrack.detach()

			_.$list.detach()

			_.$slider.append(_.$slides)
		}

		_.cleanUpRows()

		_.$slider.removeClass('slick-slider')
		_.$slider.removeClass('slick-initialized')
		_.$slider.removeClass('slick-dotted')

		_.unslicked = true

		if (!refresh) {
			_.$slider.trigger('destroy', [_])
		}
	}

	Slick.prototype.disableTransition = function (slide) {
		var _ = this,
			transition = {}

		transition[_.transitionType] = ''

		if (_.options.fade === false) {
			_.$slideTrack.css(transition)
		} else {
			_.$slides.eq(slide).css(transition)
		}
	}

	Slick.prototype.fadeSlide = function (slideIndex, callback) {
		var _ = this

		if (_.cssTransitions === false) {
			_.$slides.eq(slideIndex).css({
				zIndex: _.options.zIndex,
			})

			_.$slides.eq(slideIndex).animate(
				{
					opacity: 1,
				},
				_.options.speed,
				_.options.easing,
				callback
			)
		} else {
			_.applyTransition(slideIndex)

			_.$slides.eq(slideIndex).css({
				opacity: 1,
				zIndex: _.options.zIndex,
			})

			if (callback) {
				setTimeout(function () {
					_.disableTransition(slideIndex)

					callback.call()
				}, _.options.speed)
			}
		}
	}

	Slick.prototype.fadeSlideOut = function (slideIndex) {
		var _ = this

		if (_.cssTransitions === false) {
			_.$slides.eq(slideIndex).animate(
				{
					opacity: 0,
					zIndex: _.options.zIndex - 2,
				},
				_.options.speed,
				_.options.easing
			)
		} else {
			_.applyTransition(slideIndex)

			_.$slides.eq(slideIndex).css({
				opacity: 0,
				zIndex: _.options.zIndex - 2,
			})
		}
	}

	Slick.prototype.filterSlides = Slick.prototype.slickFilter = function (
		filter
	) {
		var _ = this

		if (filter !== null) {
			_.$slidesCache = _.$slides

			_.unload()

			_.$slideTrack.children(this.options.slide).detach()

			_.$slidesCache.filter(filter).appendTo(_.$slideTrack)

			_.reinit()
		}
	}

	Slick.prototype.focusHandler = function () {
		var _ = this

		_.$slider
			.off('focus.slick blur.slick')
			.on('focus.slick blur.slick', '*:not(.slick-arrow)', function (event) {
				event.stopImmediatePropagation()
				var $sf = $(this)

				setTimeout(function () {
					if (_.options.pauseOnFocus) {
						_.focussed = $sf.is(':focus')
						_.autoPlay()
					}
				}, 0)
			})
	}

	Slick.prototype.getCurrent = Slick.prototype.slickCurrentSlide = function () {
		var _ = this
		return _.currentSlide
	}

	Slick.prototype.getDotCount = function () {
		var _ = this

		var breakPoint = 0
		var counter = 0
		var pagerQty = 0

		if (_.options.infinite === true) {
			while (breakPoint < _.slideCount) {
				++pagerQty
				breakPoint = counter + _.options.slidesToScroll
				counter +=
					_.options.slidesToScroll <= _.options.slidesToShow
						? _.options.slidesToScroll
						: _.options.slidesToShow
			}
		} else if (_.options.centerMode === true) {
			pagerQty = _.slideCount
		} else if (!_.options.asNavFor) {
			pagerQty =
				1 +
				Math.ceil(
					(_.slideCount - _.options.slidesToShow) / _.options.slidesToScroll
				)
		} else {
			while (breakPoint < _.slideCount) {
				++pagerQty
				breakPoint = counter + _.options.slidesToScroll
				counter +=
					_.options.slidesToScroll <= _.options.slidesToShow
						? _.options.slidesToScroll
						: _.options.slidesToShow
			}
		}

		return pagerQty - 1
	}

	Slick.prototype.getLeft = function (slideIndex) {
		var _ = this,
			targetLeft,
			verticalHeight,
			verticalOffset = 0,
			targetSlide

		_.slideOffset = 0
		verticalHeight = _.$slides.first().outerHeight(true)

		if (_.options.infinite === true) {
			if (_.slideCount > _.options.slidesToShow) {
				_.slideOffset = _.slideWidth * _.options.slidesToShow * -1
				verticalOffset = verticalHeight * _.options.slidesToShow * -1
			}
			if (_.slideCount % _.options.slidesToScroll !== 0) {
				if (
					slideIndex + _.options.slidesToScroll > _.slideCount &&
					_.slideCount > _.options.slidesToShow
				) {
					if (slideIndex > _.slideCount) {
						_.slideOffset =
							(_.options.slidesToShow - (slideIndex - _.slideCount)) *
							_.slideWidth *
							-1
						verticalOffset =
							(_.options.slidesToShow - (slideIndex - _.slideCount)) *
							verticalHeight *
							-1
					} else {
						_.slideOffset =
							(_.slideCount % _.options.slidesToScroll) * _.slideWidth * -1
						verticalOffset =
							(_.slideCount % _.options.slidesToScroll) * verticalHeight * -1
					}
				}
			}
		} else {
			if (slideIndex + _.options.slidesToShow > _.slideCount) {
				_.slideOffset =
					(slideIndex + _.options.slidesToShow - _.slideCount) * _.slideWidth
				verticalOffset =
					(slideIndex + _.options.slidesToShow - _.slideCount) * verticalHeight
			}
		}

		if (_.slideCount <= _.options.slidesToShow) {
			_.slideOffset = 0
			verticalOffset = 0
		}

		if (
			_.options.centerMode === true &&
			_.slideCount <= _.options.slidesToShow
		) {
			_.slideOffset =
				(_.slideWidth * Math.floor(_.options.slidesToShow)) / 2 -
				(_.slideWidth * _.slideCount) / 2
		} else if (_.options.centerMode === true && _.options.infinite === true) {
			_.slideOffset +=
				_.slideWidth * Math.floor(_.options.slidesToShow / 2) - _.slideWidth
		} else if (_.options.centerMode === true) {
			_.slideOffset = 0
			_.slideOffset += _.slideWidth * Math.floor(_.options.slidesToShow / 2)
		}

		if (_.options.vertical === false) {
			targetLeft = slideIndex * _.slideWidth * -1 + _.slideOffset
		} else {
			if (_.options.verticalReverse === false) {
				targetLeft = slideIndex * verticalHeight * -1 + verticalOffset
			} else {
				_.$slideTrack.css({
					display: 'flex',
					'flex-direction': 'column-reverse',
				})
				targetLeft =
					_.slideCount * verticalHeight * -1 +
					(slideIndex * -verticalOffset) / _.options.slidesToShow
			}
		}

		if (_.options.variableWidth === true) {
			if (
				_.slideCount <= _.options.slidesToShow ||
				_.options.infinite === false
			) {
				targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex)
			} else {
				targetSlide = _.$slideTrack
					.children('.slick-slide')
					.eq(slideIndex + _.options.slidesToShow)
			}

			if (_.options.rtl === true) {
				if (targetSlide[0]) {
					targetLeft =
						(_.$slideTrack.width() -
							targetSlide[0].offsetLeft -
							targetSlide.width()) *
						-1
				} else {
					targetLeft = 0
				}
			} else {
				targetLeft = targetSlide[0] ? targetSlide[0].offsetLeft * -1 : 0
			}

			if (_.options.centerMode === true) {
				if (
					_.slideCount <= _.options.slidesToShow ||
					_.options.infinite === false
				) {
					targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex)
				} else {
					targetSlide = _.$slideTrack
						.children('.slick-slide')
						.eq(slideIndex + _.options.slidesToShow + 1)
				}

				if (_.options.rtl === true) {
					if (targetSlide[0]) {
						targetLeft =
							(_.$slideTrack.width() -
								targetSlide[0].offsetLeft -
								targetSlide.width()) *
							-1
					} else {
						targetLeft = 0
					}
				} else {
					targetLeft = targetSlide[0] ? targetSlide[0].offsetLeft * -1 : 0
				}

				targetLeft += (_.$list.width() - targetSlide.outerWidth()) / 2
			}
		}

		return targetLeft
	}

	Slick.prototype.getOption = Slick.prototype.slickGetOption = function (
		option
	) {
		var _ = this

		return _.options[option]
	}

	Slick.prototype.getNavigableIndexes = function () {
		var _ = this,
			breakPoint = 0,
			counter = 0,
			indexes = [],
			max

		if (_.options.infinite === false) {
			max = _.slideCount
		} else {
			breakPoint = _.options.slidesToScroll * -1
			counter = _.options.slidesToScroll * -1
			max = _.slideCount * 2
		}

		while (breakPoint < max) {
			indexes.push(breakPoint)
			breakPoint = counter + _.options.slidesToScroll
			counter +=
				_.options.slidesToScroll <= _.options.slidesToShow
					? _.options.slidesToScroll
					: _.options.slidesToShow
		}

		return indexes
	}

	Slick.prototype.getSlick = function () {
		return this
	}

	Slick.prototype.getSlideCount = function () {
		var _ = this,
			slidesTraversed,
			swipedSlide,
			centerOffset

		centerOffset =
			_.options.centerMode === true
				? _.slideWidth * Math.floor(_.options.slidesToShow / 2)
				: 0

		if (_.options.swipeToSlide === true) {
			_.$slideTrack.find('.slick-slide').each(function (index, slide) {
				if (
					slide.offsetLeft - centerOffset + $(slide).outerWidth() / 2 >
					_.swipeLeft * -1
				) {
					swipedSlide = slide
					return false
				}
			})

			slidesTraversed =
				Math.abs($(swipedSlide).attr('data-slick-index') - _.currentSlide) || 1

			return slidesTraversed
		} else {
			return _.options.slidesToScroll
		}
	}

	Slick.prototype.goTo = Slick.prototype.slickGoTo = function (
		slide,
		dontAnimate
	) {
		var _ = this

		_.changeSlide(
			{
				data: {
					message: 'index',
					index: parseInt(slide),
				},
			},
			dontAnimate
		)
	}

	Slick.prototype.init = function (creation) {
		var _ = this

		if (!$(_.$slider).hasClass('slick-initialized')) {
			$(_.$slider).addClass('slick-initialized')

			_.buildRows()
			_.buildOut()
			_.setProps()
			_.startLoad()
			_.loadSlider()
			_.initializeEvents()
			_.updateArrows()
			_.updateDots()
			_.checkResponsive(true)
			_.focusHandler()
		}

		if (creation) {
			_.$slider.trigger('init', [_])
		}

		if (_.options.accessibility === true) {
			_.initADA()
		}

		if (_.options.autoplay) {
			_.paused = false
			_.autoPlay()
		}
	}

	Slick.prototype.initADA = function () {
		var _ = this
		_.$slides
			.add(_.$slideTrack.find('.slick-cloned'))
			.attr({
				'aria-hidden': 'true',
				tabindex: '-1',
			})
			.find('a, input, button, select')
			.attr({
				tabindex: '-1',
			})

		_.$slideTrack.attr('role', 'listbox')

		_.$slides.not(_.$slideTrack.find('.slick-cloned')).each(function (i) {
			$(this).attr('role', 'option')

			//Evenly distribute aria-describedby tags through available dots.
			var describedBySlideId = _.options.centerMode
				? i
				: Math.floor(i / _.options.slidesToShow)

			if (_.options.dots === true) {
				$(this).attr(
					'aria-describedby',
					'slick-slide' + _.instanceUid + describedBySlideId + ''
				)
			}
		})

		if (_.$dots !== null) {
			_.$dots
				.attr('role', 'tablist')
				.find('li')
				.each(function (i) {
					$(this).attr({
						role: 'presentation',
						'aria-selected': 'false',
						'aria-controls': 'navigation' + _.instanceUid + i + '',
						id: 'slick-slide' + _.instanceUid + i + '',
					})
				})
				.first()
				.attr('aria-selected', 'true')
				.end()
				.find('button')
				.attr('role', 'button')
				.end()
				.closest('div')
				.attr('role', 'toolbar')
		}
		_.activateADA()
	}

	Slick.prototype.initArrowEvents = function () {
		var _ = this

		if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {
			_.$prevArrow.off('click.slick').on(
				'click.slick',
				{
					message: 'previous',
				},
				_.changeSlide
			)
			_.$nextArrow.off('click.slick').on(
				'click.slick',
				{
					message: 'next',
				},
				_.changeSlide
			)
		}
	}

	Slick.prototype.initDotEvents = function () {
		var _ = this

		if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {
			$('li', _.$dots).on(
				'click.slick',
				{
					message: 'index',
				},
				_.changeSlide
			)
		}

		if (_.options.dots === true && _.options.pauseOnDotsHover === true) {
			$('li', _.$dots)
				.on('mouseenter.slick', $.proxy(_.interrupt, _, true))
				.on('mouseleave.slick', $.proxy(_.interrupt, _, false))
		}
	}

	Slick.prototype.initSlideEvents = function () {
		var _ = this

		if (_.options.pauseOnHover) {
			_.$list.on('mouseenter.slick', $.proxy(_.interrupt, _, true))
			_.$list.on('mouseleave.slick', $.proxy(_.interrupt, _, false))
		}
	}

	Slick.prototype.initializeEvents = function () {
		var _ = this

		_.initArrowEvents()

		_.initDotEvents()
		_.initSlideEvents()

		_.$list.on(
			'touchstart.slick mousedown.slick',
			{
				action: 'start',
			},
			_.swipeHandler
		)
		_.$list.on(
			'touchmove.slick mousemove.slick',
			{
				action: 'move',
			},
			_.swipeHandler
		)
		_.$list.on(
			'touchend.slick mouseup.slick',
			{
				action: 'end',
			},
			_.swipeHandler
		)
		_.$list.on(
			'touchcancel.slick mouseleave.slick',
			{
				action: 'end',
			},
			_.swipeHandler
		)

		_.$list.on('click.slick', _.clickHandler)

		$(document).on(_.visibilityChange, $.proxy(_.visibility, _))

		if (_.options.accessibility === true) {
			_.$list.on('keydown.slick', _.keyHandler)
		}

		if (_.options.focusOnSelect === true) {
			$(_.$slideTrack).children().on('click.slick', _.selectHandler)
		}

		$(window).on(
			'orientationchange.slick.slick-' + _.instanceUid,
			$.proxy(_.orientationChange, _)
		)

		$(window).on('resize.slick.slick-' + _.instanceUid, $.proxy(_.resize, _))

		$('[draggable!=true]', _.$slideTrack).on('dragstart', _.preventDefault)

		$(window).on('load.slick.slick-' + _.instanceUid, _.setPosition)
		$(document).ready(_.setPosition)
	}

	Slick.prototype.initUI = function () {
		var _ = this

		if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {
			_.$prevArrow.show()
			_.$nextArrow.show()
		}

		if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {
			_.$dots.show()
		}
	}

	Slick.prototype.keyHandler = function (event) {
		var _ = this
		//Dont slide if the cursor is inside the form fields and arrow keys are pressed
		if (!event.target.tagName.match('TEXTAREA|INPUT|SELECT')) {
			if (event.keyCode === 37 && _.options.accessibility === true) {
				_.changeSlide({
					data: {
						message: _.options.rtl === true ? 'next' : 'previous',
					},
				})
			} else if (event.keyCode === 39 && _.options.accessibility === true) {
				_.changeSlide({
					data: {
						message: _.options.rtl === true ? 'previous' : 'next',
					},
				})
			}
		}
	}

	Slick.prototype.lazyLoad = function () {
		var _ = this,
			loadRange,
			cloneRange,
			rangeStart,
			rangeEnd

		function loadImages(imagesScope) {
			$('img[data-lazy]', imagesScope).each(function () {
				var image = $(this),
					imageSource = $(this).attr('data-lazy'),
					imageSrcSet = $(this).attr('data-srcset'),
					imageSizes =
						$(this).attr('data-sizes') || _.$slider.attr('data-sizes'),
					imageToLoad = document.createElement('img')

				imageToLoad.onload = function () {
					image.animate({ opacity: 0 }, 100, function () {
						if (imageSrcSet) {
							image.attr('srcset', imageSrcSet)

							if (imageSizes) {
								image.attr('sizes', imageSizes)
							}
						}

						image
							.attr('src', imageSource)
							.animate({ opacity: 1 }, 200, function () {
								image
									.removeAttr('data-lazy data-srcset data-sizes')
									.removeClass('slick-loading')
							})
						_.$slider.trigger('lazyLoaded', [_, image, imageSource])
					})
				}

				imageToLoad.onerror = function () {
					image
						.removeAttr('data-lazy')
						.removeClass('slick-loading')
						.addClass('slick-lazyload-error')

					_.$slider.trigger('lazyLoadError', [_, image, imageSource])
				}

				imageToLoad.src = imageSource
			})
		}

		if (_.options.centerMode === true) {
			if (_.options.infinite === true) {
				rangeStart = _.currentSlide + (_.options.slidesToShow / 2 + 1)
				rangeEnd = rangeStart + _.options.slidesToShow + 2
			} else {
				rangeStart = Math.max(
					0,
					_.currentSlide - (_.options.slidesToShow / 2 + 1)
				)
				rangeEnd = 2 + (_.options.slidesToShow / 2 + 1) + _.currentSlide
			}
		} else {
			rangeStart = _.options.infinite
				? _.options.slidesToShow + _.currentSlide
				: _.currentSlide
			rangeEnd = Math.ceil(rangeStart + _.options.slidesToShow)
			if (_.options.fade === true) {
				if (rangeStart > 0) rangeStart--
				if (rangeEnd <= _.slideCount) rangeEnd++
			}
		}

		loadRange = _.$slider.find('.slick-slide').slice(rangeStart, rangeEnd)

		if (_.options.lazyLoad === 'anticipated') {
			var prevSlide = rangeStart - 1,
				nextSlide = rangeEnd,
				$slides = _.$slider.find('.slick-slide')

			for (var i = 0; i < _.options.slidesToScroll; i++) {
				if (prevSlide < 0) prevSlide = _.slideCount - 1
				loadRange = loadRange.add($slides.eq(prevSlide))
				loadRange = loadRange.add($slides.eq(nextSlide))
				prevSlide--
				nextSlide++
			}
		}

		loadImages(loadRange)

		if (_.slideCount <= _.options.slidesToShow) {
			cloneRange = _.$slider.find('.slick-slide')
			loadImages(cloneRange)
		} else if (_.currentSlide >= _.slideCount - _.options.slidesToShow) {
			cloneRange = _.$slider
				.find('.slick-cloned')
				.slice(0, _.options.slidesToShow)
			loadImages(cloneRange)
		} else if (_.currentSlide === 0) {
			cloneRange = _.$slider
				.find('.slick-cloned')
				.slice(_.options.slidesToShow * -1)
			loadImages(cloneRange)
		}
	}

	Slick.prototype.loadSlider = function () {
		var _ = this

		_.setPosition()

		_.$slideTrack.css({
			opacity: 1,
		})

		_.$slider.removeClass('slick-loading')

		_.initUI()

		if (_.options.lazyLoad === 'progressive') {
			_.progressiveLazyLoad()
		}
	}

	Slick.prototype.next = Slick.prototype.slickNext = function () {
		var _ = this

		_.changeSlide({
			data: {
				message: 'next',
			},
		})
	}

	Slick.prototype.orientationChange = function () {
		var _ = this

		_.checkResponsive()
		_.setPosition()
	}

	Slick.prototype.pause = Slick.prototype.slickPause = function () {
		var _ = this

		_.autoPlayClear()
		_.paused = true
	}

	Slick.prototype.play = Slick.prototype.slickPlay = function () {
		var _ = this

		_.autoPlay()
		_.options.autoplay = true
		_.paused = false
		_.focussed = false
		_.interrupted = false
	}

	Slick.prototype.postSlide = function (index) {
		var _ = this

		if (!_.unslicked) {
			_.$slider.trigger('afterChange', [_, index])

			_.animating = false

			_.setPosition()

			_.swipeLeft = null

			if (_.options.autoplay) {
				_.autoPlay()
			}

			if (_.options.accessibility === true) {
				_.initADA()
			}
		}
	}

	Slick.prototype.prev = Slick.prototype.slickPrev = function () {
		var _ = this

		_.changeSlide({
			data: {
				message: 'previous',
			},
		})
	}

	Slick.prototype.preventDefault = function (event) {
		event.preventDefault()
	}

	Slick.prototype.progressiveLazyLoad = function (tryCount) {
		tryCount = tryCount || 1

		var _ = this,
			$imgsToLoad = $('img[data-lazy]', _.$slider),
			image,
			imageSource,
			imageSrcSet,
			imageSizes,
			imageToLoad

		if ($imgsToLoad.length) {
			image = $imgsToLoad.first()
			imageSource = image.attr('data-lazy')
			imageSrcSet = image.attr('data-srcset')
			imageSizes = image.attr('data-sizes') || _.$slider.attr('data-sizes')
			imageToLoad = document.createElement('img')

			imageToLoad.onload = function () {
				if (imageSrcSet) {
					image.attr('srcset', imageSrcSet)

					if (imageSizes) {
						image.attr('sizes', imageSizes)
					}
				}

				image
					.attr('src', imageSource)
					.removeAttr('data-lazy data-srcset data-sizes')
					.removeClass('slick-loading')

				if (_.options.adaptiveHeight === true) {
					_.setPosition()
				}

				_.$slider.trigger('lazyLoaded', [_, image, imageSource])
				_.progressiveLazyLoad()
			}

			imageToLoad.onerror = function () {
				if (tryCount < 3) {
					/**
					 * try to load the image 3 times,
					 * leave a slight delay so we don't get
					 * servers blocking the request.
					 */
					setTimeout(function () {
						_.progressiveLazyLoad(tryCount + 1)
					}, 500)
				} else {
					image
						.removeAttr('data-lazy')
						.removeClass('slick-loading')
						.addClass('slick-lazyload-error')

					_.$slider.trigger('lazyLoadError', [_, image, imageSource])

					_.progressiveLazyLoad()
				}
			}

			imageToLoad.src = imageSource
		} else {
			_.$slider.trigger('allImagesLoaded', [_])
		}
	}

	Slick.prototype.refresh = function (initializing) {
		var _ = this,
			currentSlide,
			lastVisibleIndex

		lastVisibleIndex = _.slideCount - _.options.slidesToShow

		// in non-infinite sliders, we don't want to go past the
		// last visible index.
		if (!_.options.infinite && _.currentSlide > lastVisibleIndex) {
			_.currentSlide = lastVisibleIndex
		}

		// if less slides than to show, go to start.
		if (_.slideCount <= _.options.slidesToShow) {
			_.currentSlide = 0
		}

		currentSlide = _.currentSlide

		_.destroy(true)

		$.extend(_, _.initials, { currentSlide: currentSlide })

		_.init()

		if (!initializing) {
			_.changeSlide(
				{
					data: {
						message: 'index',
						index: currentSlide,
					},
				},
				false
			)
		}
	}

	Slick.prototype.registerBreakpoints = function () {
		var _ = this,
			breakpoint,
			currentBreakpoint,
			l,
			responsiveSettings = _.options.responsive || null

		if ($.type(responsiveSettings) === 'array' && responsiveSettings.length) {
			_.respondTo = _.options.respondTo || 'window'

			for (breakpoint in responsiveSettings) {
				l = _.breakpoints.length - 1

				if (responsiveSettings.hasOwnProperty(breakpoint)) {
					currentBreakpoint = responsiveSettings[breakpoint].breakpoint

					// loop through the breakpoints and cut out any existing
					// ones with the same breakpoint number, we don't want dupes.
					while (l >= 0) {
						if (_.breakpoints[l] && _.breakpoints[l] === currentBreakpoint) {
							_.breakpoints.splice(l, 1)
						}
						l--
					}

					_.breakpoints.push(currentBreakpoint)
					_.breakpointSettings[currentBreakpoint] =
						responsiveSettings[breakpoint].settings
				}
			}

			_.breakpoints.sort(function (a, b) {
				return _.options.mobileFirst ? a - b : b - a
			})
		}
	}

	Slick.prototype.reinit = function () {
		var _ = this

		_.$slides = _.$slideTrack.children(_.options.slide).addClass('slick-slide')

		_.slideCount = _.$slides.length

		if (_.currentSlide >= _.slideCount && _.currentSlide !== 0) {
			_.currentSlide = _.currentSlide - _.options.slidesToScroll
		}

		if (_.slideCount <= _.options.slidesToShow) {
			_.currentSlide = 0
		}

		_.registerBreakpoints()

		_.setProps()
		_.setupInfinite()
		_.buildArrows()
		_.updateArrows()
		_.initArrowEvents()
		_.buildDots()
		_.updateDots()
		_.initDotEvents()
		_.cleanUpSlideEvents()
		_.initSlideEvents()

		_.checkResponsive(false, true)

		if (_.options.focusOnSelect === true) {
			$(_.$slideTrack).children().on('click.slick', _.selectHandler)
		}

		_.setSlideClasses(typeof _.currentSlide === 'number' ? _.currentSlide : 0)

		_.setPosition()
		_.focusHandler()

		_.paused = !_.options.autoplay
		_.autoPlay()

		_.$slider.trigger('reInit', [_])
	}

	Slick.prototype.resize = function () {
		var _ = this

		if ($(window).width() !== _.windowWidth) {
			clearTimeout(_.windowDelay)
			_.windowDelay = window.setTimeout(function () {
				_.windowWidth = $(window).width()
				_.checkResponsive()
				if (!_.unslicked) {
					_.setPosition()
				}
			}, 50)
		}
	}

	Slick.prototype.removeSlide = Slick.prototype.slickRemove = function (
		index,
		removeBefore,
		removeAll
	) {
		var _ = this

		if (typeof index === 'boolean') {
			removeBefore = index
			index = removeBefore === true ? 0 : _.slideCount - 1
		} else {
			index = removeBefore === true ? --index : index
		}

		if (_.slideCount < 1 || index < 0 || index > _.slideCount - 1) {
			return false
		}

		_.unload()

		if (removeAll === true) {
			_.$slideTrack.children().remove()
		} else {
			_.$slideTrack.children(this.options.slide).eq(index).remove()
		}

		_.$slides = _.$slideTrack.children(this.options.slide)

		_.$slideTrack.children(this.options.slide).detach()

		_.$slideTrack.append(_.$slides)

		_.$slidesCache = _.$slides

		_.reinit()
	}

	Slick.prototype.setCSS = function (position) {
		var _ = this,
			positionProps = {},
			x,
			y

		if (_.options.rtl === true) {
			position = -position
		}

		x = _.positionProp == 'left' ? Math.ceil(position) + 'px' : '0px'
		y = _.positionProp == 'top' ? Math.ceil(position) + 'px' : '0px'
		positionProps[_.positionProp] = position

		if (_.transformsEnabled === false) {
			_.$slideTrack.css(positionProps)
		} else {
			positionProps = {}
			if (_.cssTransitions === false) {
				positionProps[_.animType] = 'translate(' + x + ', ' + y + ')'
				_.$slideTrack.css(positionProps)
			} else {
				positionProps[_.animType] = 'translate3d(' + x + ', ' + y + ', 0px)'
				_.$slideTrack.css(positionProps)
			}
		}
	}

	Slick.prototype.setDimensions = function () {
		var _ = this

		if (_.options.vertical === false) {
			if (_.options.centerMode === true) {
				_.$list.css({
					padding: '0px ' + _.options.centerPadding,
				})
			}
		} else {
			_.$list.height(
				_.$slides.first().outerHeight(true) * _.options.slidesToShow
			)
			if (_.options.centerMode === true) {
				_.$list.css({
					padding: _.options.centerPadding + ' 0px',
				})
			}
		}

		_.listWidth = _.$list.width()
		_.listHeight = _.$list.height()

		if (_.options.vertical === false && _.options.variableWidth === false) {
			_.slideWidth = Math.ceil(_.listWidth / _.options.slidesToShow)
			_.$slideTrack.width(
				Math.ceil(_.slideWidth * _.$slideTrack.children('.slick-slide').length)
			)
		} else if (_.options.variableWidth === true) {
			_.$slideTrack.width(5000 * _.slideCount)
		} else {
			_.slideWidth = Math.ceil(_.listWidth)
			_.$slideTrack.height(
				Math.ceil(
					_.$slides.first().outerHeight(true) *
						_.$slideTrack.children('.slick-slide').length
				)
			)
		}

		var offset = _.$slides.first().outerWidth(true) - _.$slides.first().width()
		if (_.options.variableWidth === false)
			_.$slideTrack.children('.slick-slide').width(_.slideWidth - offset)
	}

	Slick.prototype.setFade = function () {
		var _ = this,
			targetLeft

		_.$slides.each(function (index, element) {
			targetLeft = _.slideWidth * index * -1
			if (_.options.rtl === true) {
				$(element).css({
					position: 'relative',
					right: targetLeft,
					top: 0,
					zIndex: _.options.zIndex - 2,
					opacity: 0,
				})
			} else {
				$(element).css({
					position: 'relative',
					left: targetLeft,
					top: 0,
					zIndex: _.options.zIndex - 2,
					opacity: 0,
				})
			}
		})

		_.$slides.eq(_.currentSlide).css({
			zIndex: _.options.zIndex - 1,
			opacity: 1,
		})
	}

	Slick.prototype.setHeight = function () {
		var _ = this

		if (
			_.options.slidesToShow === 1 &&
			_.options.adaptiveHeight === true &&
			_.options.vertical === false
		) {
			var targetHeight = _.$slides.eq(_.currentSlide).outerHeight(true)
			_.$list.css('height', targetHeight)
		}
	}

	Slick.prototype.setOption = Slick.prototype.slickSetOption = function () {
		/**
		 * accepts arguments in format of:
		 *
		 *  - for changing a single option's value:
		 *     .slick("setOption", option, value, refresh )
		 *
		 *  - for changing a set of responsive options:
		 *     .slick("setOption", 'responsive', [{}, ...], refresh )
		 *
		 *  - for updating multiple values at once (not responsive)
		 *     .slick("setOption", { 'option': value, ... }, refresh )
		 */

		var _ = this,
			l,
			item,
			option,
			value,
			refresh = false,
			type

		if ($.type(arguments[0]) === 'object') {
			option = arguments[0]
			refresh = arguments[1]
			type = 'multiple'
		} else if ($.type(arguments[0]) === 'string') {
			option = arguments[0]
			value = arguments[1]
			refresh = arguments[2]

			if (arguments[0] === 'responsive' && $.type(arguments[1]) === 'array') {
				type = 'responsive'
			} else if (typeof arguments[1] !== 'undefined') {
				type = 'single'
			}
		}

		if (type === 'single') {
			_.options[option] = value
		} else if (type === 'multiple') {
			$.each(option, function (opt, val) {
				_.options[opt] = val
			})
		} else if (type === 'responsive') {
			for (item in value) {
				if ($.type(_.options.responsive) !== 'array') {
					_.options.responsive = [value[item]]
				} else {
					l = _.options.responsive.length - 1

					// loop through the responsive object and splice out duplicates.
					while (l >= 0) {
						if (_.options.responsive[l].breakpoint === value[item].breakpoint) {
							_.options.responsive.splice(l, 1)
						}

						l--
					}

					_.options.responsive.push(value[item])
				}
			}
		}

		if (refresh) {
			_.unload()
			_.reinit()
		}
	}

	Slick.prototype.setPosition = function () {
		var _ = this

		_.setDimensions()

		_.setHeight()

		if (_.options.fade === false) {
			_.setCSS(_.getLeft(_.currentSlide))
		} else {
			_.setFade()
		}

		_.$slider.trigger('setPosition', [_])
	}

	Slick.prototype.setProps = function () {
		var _ = this,
			bodyStyle = document.body.style

		_.positionProp = _.options.vertical === true ? 'top' : 'left'

		if (_.positionProp === 'top') {
			_.$slider.addClass('slick-vertical')
		} else {
			_.$slider.removeClass('slick-vertical')
		}

		if (
			bodyStyle.WebkitTransition !== undefined ||
			bodyStyle.MozTransition !== undefined ||
			bodyStyle.msTransition !== undefined
		) {
			if (_.options.useCSS === true) {
				_.cssTransitions = true
			}
		}

		if (_.options.fade) {
			if (typeof _.options.zIndex === 'number') {
				if (_.options.zIndex < 3) {
					_.options.zIndex = 3
				}
			} else {
				_.options.zIndex = _.defaults.zIndex
			}
		}

		if (bodyStyle.OTransform !== undefined) {
			_.animType = 'OTransform'
			_.transformType = '-o-transform'
			_.transitionType = 'OTransition'
			if (
				bodyStyle.perspectiveProperty === undefined &&
				bodyStyle.webkitPerspective === undefined
			)
				_.animType = false
		}
		if (bodyStyle.MozTransform !== undefined) {
			_.animType = 'MozTransform'
			_.transformType = '-moz-transform'
			_.transitionType = 'MozTransition'
			if (
				bodyStyle.perspectiveProperty === undefined &&
				bodyStyle.MozPerspective === undefined
			)
				_.animType = false
		}
		if (bodyStyle.webkitTransform !== undefined) {
			_.animType = 'webkitTransform'
			_.transformType = '-webkit-transform'
			_.transitionType = 'webkitTransition'
			if (
				bodyStyle.perspectiveProperty === undefined &&
				bodyStyle.webkitPerspective === undefined
			)
				_.animType = false
		}
		if (bodyStyle.msTransform !== undefined) {
			_.animType = 'msTransform'
			_.transformType = '-ms-transform'
			_.transitionType = 'msTransition'
			if (bodyStyle.msTransform === undefined) _.animType = false
		}
		if (bodyStyle.transform !== undefined && _.animType !== false) {
			_.animType = 'transform'
			_.transformType = 'transform'
			_.transitionType = 'transition'
		}
		_.transformsEnabled =
			_.options.useTransform && _.animType !== null && _.animType !== false
	}

	Slick.prototype.setSlideClasses = function (index) {
		var _ = this,
			centerOffset,
			allSlides,
			indexOffset,
			remainder

		allSlides = _.$slider
			.find('.slick-slide')
			.removeClass('slick-active slick-center slick-current')
			.attr('aria-hidden', 'true')

		_.$slides.eq(index).addClass('slick-current')

		if (_.options.centerMode === true) {
			centerOffset = Math.floor(_.options.slidesToShow / 2)

			if (_.options.infinite === true) {
				if (index >= centerOffset && index <= _.slideCount - 1 - centerOffset) {
					_.$slides
						.slice(index - centerOffset, index + centerOffset + 1)
						.addClass('slick-active')
						.attr('aria-hidden', 'false')
				} else {
					indexOffset = _.options.slidesToShow + index
					allSlides
						.slice(
							indexOffset - centerOffset + 1,
							indexOffset + centerOffset + 2
						)
						.addClass('slick-active')
						.attr('aria-hidden', 'false')
				}

				if (index === 0) {
					allSlides
						.eq(allSlides.length - 1 - _.options.slidesToShow)
						.addClass('slick-center')
				} else if (index === _.slideCount - 1) {
					allSlides.eq(_.options.slidesToShow).addClass('slick-center')
				}
			}

			_.$slides.eq(index).addClass('slick-center')
		} else {
			if (index >= 0 && index <= _.slideCount - _.options.slidesToShow) {
				_.$slides
					.slice(index, index + _.options.slidesToShow)
					.addClass('slick-active')
					.attr('aria-hidden', 'false')
			} else if (allSlides.length <= _.options.slidesToShow) {
				allSlides.addClass('slick-active').attr('aria-hidden', 'false')
			} else {
				remainder = _.slideCount % _.options.slidesToShow
				indexOffset =
					_.options.infinite === true ? _.options.slidesToShow + index : index

				if (
					_.options.slidesToShow == _.options.slidesToScroll &&
					_.slideCount - index < _.options.slidesToShow
				) {
					allSlides
						.slice(
							indexOffset - (_.options.slidesToShow - remainder),
							indexOffset + remainder
						)
						.addClass('slick-active')
						.attr('aria-hidden', 'false')
				} else {
					allSlides
						.slice(indexOffset, indexOffset + _.options.slidesToShow)
						.addClass('slick-active')
						.attr('aria-hidden', 'false')
				}
			}
		}

		if (
			_.options.lazyLoad === 'ondemand' ||
			_.options.lazyLoad === 'anticipated'
		) {
			_.lazyLoad()
		}
	}

	Slick.prototype.setupInfinite = function () {
		var _ = this,
			i,
			slideIndex,
			infiniteCount

		if (_.options.fade === true) {
			_.options.centerMode = false
		}

		if (_.options.infinite === true && _.options.fade === false) {
			slideIndex = null

			if (_.slideCount > _.options.slidesToShow) {
				if (_.options.centerMode === true) {
					infiniteCount = _.options.slidesToShow + 1
				} else {
					infiniteCount = _.options.slidesToShow
				}

				for (i = _.slideCount; i > _.slideCount - infiniteCount; i -= 1) {
					slideIndex = i - 1
					$(_.$slides[slideIndex])
						.clone(true)
						.attr('id', '')
						.attr('data-slick-index', slideIndex - _.slideCount)
						.prependTo(_.$slideTrack)
						.addClass('slick-cloned')
				}
				for (i = 0; i < infiniteCount; i += 1) {
					slideIndex = i
					$(_.$slides[slideIndex])
						.clone(true)
						.attr('id', '')
						.attr('data-slick-index', slideIndex + _.slideCount)
						.appendTo(_.$slideTrack)
						.addClass('slick-cloned')
				}
				_.$slideTrack
					.find('.slick-cloned')
					.find('[id]')
					.each(function () {
						$(this).attr('id', '')
					})
			}
		}
	}

	Slick.prototype.interrupt = function (toggle) {
		var _ = this

		if (!toggle) {
			_.autoPlay()
		}
		_.interrupted = toggle
	}

	Slick.prototype.selectHandler = function (event) {
		var _ = this

		var targetElement = $(event.target).is('.slick-slide')
			? $(event.target)
			: $(event.target).parents('.slick-slide')

		var index = parseInt(targetElement.attr('data-slick-index'))

		if (!index) index = 0

		if (_.slideCount <= _.options.slidesToShow) {
			_.setSlideClasses(index)
			_.asNavFor(index)
			return
		}

		_.slideHandler(index)
	}

	Slick.prototype.slideHandler = function (index, sync, dontAnimate) {
		var targetSlide,
			animSlide,
			oldSlide,
			slideLeft,
			targetLeft = null,
			_ = this,
			navTarget

		sync = sync || false

		if (_.animating === true && _.options.waitForAnimate === true) {
			return
		}

		if (_.options.fade === true && _.currentSlide === index) {
			return
		}

		if (_.slideCount <= _.options.slidesToShow) {
			return
		}

		if (sync === false) {
			_.asNavFor(index)
		}

		targetSlide = index
		targetLeft = _.getLeft(targetSlide)
		slideLeft = _.getLeft(_.currentSlide)

		_.currentLeft = _.swipeLeft === null ? slideLeft : _.swipeLeft

		if (
			_.options.infinite === false &&
			_.options.centerMode === false &&
			(index < 0 || index > _.getDotCount() * _.options.slidesToScroll)
		) {
			if (_.options.fade === false) {
				targetSlide = _.currentSlide
				if (dontAnimate !== true) {
					_.animateSlide(slideLeft, function () {
						_.postSlide(targetSlide)
					})
				} else {
					_.postSlide(targetSlide)
				}
			}
			return
		} else if (
			_.options.infinite === false &&
			_.options.centerMode === true &&
			(index < 0 || index > _.slideCount - _.options.slidesToScroll)
		) {
			if (_.options.fade === false) {
				targetSlide = _.currentSlide
				if (dontAnimate !== true) {
					_.animateSlide(slideLeft, function () {
						_.postSlide(targetSlide)
					})
				} else {
					_.postSlide(targetSlide)
				}
			}
			return
		}

		if (_.options.autoplay) {
			clearInterval(_.autoPlayTimer)
		}

		if (targetSlide < 0) {
			if (_.slideCount % _.options.slidesToScroll !== 0) {
				animSlide = _.slideCount - (_.slideCount % _.options.slidesToScroll)
			} else {
				animSlide = _.slideCount + targetSlide
			}
		} else if (targetSlide >= _.slideCount) {
			if (_.slideCount % _.options.slidesToScroll !== 0) {
				animSlide = 0
			} else {
				animSlide = targetSlide - _.slideCount
			}
		} else {
			animSlide = targetSlide
		}

		_.animating = true

		_.$slider.trigger('beforeChange', [_, _.currentSlide, animSlide])

		oldSlide = _.currentSlide
		_.currentSlide = animSlide

		_.setSlideClasses(_.currentSlide)

		if (_.options.asNavFor) {
			navTarget = _.getNavTarget()
			navTarget = navTarget.slick('getSlick')

			if (navTarget.slideCount <= navTarget.options.slidesToShow) {
				navTarget.setSlideClasses(_.currentSlide)
			}
		}

		_.updateDots()
		_.updateArrows()

		if (_.options.fade === true) {
			if (dontAnimate !== true) {
				_.fadeSlideOut(oldSlide)

				_.fadeSlide(animSlide, function () {
					_.postSlide(animSlide)
				})
			} else {
				_.postSlide(animSlide)
			}
			_.animateHeight()
			return
		}

		if (dontAnimate !== true) {
			_.animateSlide(targetLeft, function () {
				_.postSlide(animSlide)
			})
		} else {
			_.postSlide(animSlide)
		}
	}

	Slick.prototype.startLoad = function () {
		var _ = this

		if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {
			_.$prevArrow.hide()
			_.$nextArrow.hide()
		}

		if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {
			_.$dots.hide()
		}

		_.$slider.addClass('slick-loading')
	}

	Slick.prototype.swipeDirection = function () {
		var xDist,
			yDist,
			r,
			swipeAngle,
			_ = this

		xDist = _.touchObject.startX - _.touchObject.curX
		yDist = _.touchObject.startY - _.touchObject.curY
		r = Math.atan2(yDist, xDist)

		swipeAngle = Math.round((r * 180) / Math.PI)
		if (swipeAngle < 0) {
			swipeAngle = 360 - Math.abs(swipeAngle)
		}

		if (swipeAngle <= 45 && swipeAngle >= 0) {
			return _.options.rtl === false ? 'left' : 'right'
		}
		if (swipeAngle <= 360 && swipeAngle >= 315) {
			return _.options.rtl === false ? 'left' : 'right'
		}
		if (swipeAngle >= 135 && swipeAngle <= 225) {
			return _.options.rtl === false ? 'right' : 'left'
		}
		if (_.options.verticalSwiping === true) {
			if (_.options.verticalReverse === false) {
				if (swipeAngle >= 35 && swipeAngle <= 135) {
					return 'down'
				} else {
					return 'up'
				}
			} else {
				if (swipeAngle >= 35 && swipeAngle <= 135) {
					return 'up'
				} else {
					return 'down'
				}
			}
		}

		return 'vertical'
	}

	Slick.prototype.swipeEnd = function (event) {
		var _ = this,
			slideCount,
			direction

		_.dragging = false
		_.interrupted = false
		_.shouldClick = _.touchObject.swipeLength > 10 ? false : true

		if (_.touchObject.curX === undefined) {
			return false
		}

		if (_.touchObject.edgeHit === true) {
			_.$slider.trigger('edge', [_, _.swipeDirection()])
		}

		if (_.touchObject.swipeLength >= _.touchObject.minSwipe) {
			direction = _.swipeDirection()

			switch (direction) {
				case 'left':
				case 'down':
					slideCount = _.options.swipeToSlide
						? _.checkNavigable(_.currentSlide + _.getSlideCount())
						: _.currentSlide + _.getSlideCount()

					_.currentDirection = 0

					break

				case 'right':
				case 'up':
					slideCount = _.options.swipeToSlide
						? _.checkNavigable(_.currentSlide - _.getSlideCount())
						: _.currentSlide - _.getSlideCount()

					_.currentDirection = 1

					break

				default:
			}

			if (direction != 'vertical') {
				_.slideHandler(slideCount)
				_.touchObject = {}
				_.$slider.trigger('swipe', [_, direction])
			}
		} else {
			if (_.touchObject.startX !== _.touchObject.curX) {
				_.slideHandler(_.currentSlide)
				_.touchObject = {}
			}
		}
	}

	Slick.prototype.swipeHandler = function (event) {
		var _ = this

		if (
			_.options.swipe === false ||
			('ontouchend' in document && _.options.swipe === false)
		) {
			return
		} else if (
			_.options.draggable === false &&
			event.type.indexOf('mouse') !== -1
		) {
			return
		}

		_.touchObject.fingerCount =
			event.originalEvent && event.originalEvent.touches !== undefined
				? event.originalEvent.touches.length
				: 1

		_.touchObject.minSwipe = _.listWidth / _.options.touchThreshold

		if (_.options.verticalSwiping === true) {
			_.touchObject.minSwipe = _.listHeight / _.options.touchThreshold
		}

		switch (event.data.action) {
			case 'start':
				_.swipeStart(event)
				break

			case 'move':
				_.swipeMove(event)
				break

			case 'end':
				_.swipeEnd(event)
				break
		}
	}

	Slick.prototype.swipeMove = function (event) {
		var _ = this,
			edgeWasHit = false,
			curLeft,
			swipeDirection,
			swipeLength,
			positionOffset,
			touches

		touches =
			event.originalEvent !== undefined ? event.originalEvent.touches : null

		if (!_.dragging || (touches && touches.length !== 1)) {
			return false
		}

		curLeft = _.getLeft(_.currentSlide)

		_.touchObject.curX =
			touches !== undefined ? touches[0].pageX : event.clientX
		_.touchObject.curY =
			touches !== undefined ? touches[0].pageY : event.clientY

		_.touchObject.swipeLength = Math.round(
			Math.sqrt(Math.pow(_.touchObject.curX - _.touchObject.startX, 2))
		)

		if (_.options.verticalSwiping === true) {
			_.touchObject.swipeLength = Math.round(
				Math.sqrt(Math.pow(_.touchObject.curY - _.touchObject.startY, 2))
			)
		}

		swipeDirection = _.swipeDirection()

		if (swipeDirection === 'vertical') {
			return
		}

		if (event.originalEvent !== undefined && _.touchObject.swipeLength > 4) {
			event.preventDefault()
		}

		positionOffset =
			(_.options.rtl === false ? 1 : -1) *
			(_.touchObject.curX > _.touchObject.startX ? 1 : -1)
		if (_.options.verticalSwiping === true) {
			positionOffset = _.touchObject.curY > _.touchObject.startY ? 1 : -1
		}

		swipeLength = _.touchObject.swipeLength

		_.touchObject.edgeHit = false

		if (_.options.infinite === false) {
			if (
				(_.currentSlide === 0 && swipeDirection === 'right') ||
				(_.currentSlide >= _.getDotCount() && swipeDirection === 'left')
			) {
				swipeLength = _.touchObject.swipeLength * _.options.edgeFriction
				_.touchObject.edgeHit = true
			}
		}

		if (_.options.vertical === false) {
			_.swipeLeft = curLeft + swipeLength * positionOffset
		} else {
			_.swipeLeft =
				curLeft +
				swipeLength * (_.$list.height() / _.listWidth) * positionOffset
		}
		if (_.options.verticalSwiping === true) {
			_.swipeLeft = curLeft + swipeLength * positionOffset
		}

		if (_.options.fade === true || _.options.touchMove === false) {
			return false
		}

		if (_.animating === true) {
			_.swipeLeft = null
			return false
		}

		_.setCSS(_.swipeLeft)
	}

	Slick.prototype.swipeStart = function (event) {
		var _ = this,
			touches

		_.interrupted = true

		if (
			_.touchObject.fingerCount !== 1 ||
			_.slideCount <= _.options.slidesToShow
		) {
			_.touchObject = {}
			return false
		}

		if (
			event.originalEvent !== undefined &&
			event.originalEvent.touches !== undefined
		) {
			touches = event.originalEvent.touches[0]
		}

		_.touchObject.startX = _.touchObject.curX =
			touches !== undefined ? touches.pageX : event.clientX
		_.touchObject.startY = _.touchObject.curY =
			touches !== undefined ? touches.pageY : event.clientY

		_.dragging = true
	}

	Slick.prototype.unfilterSlides = Slick.prototype.slickUnfilter = function () {
		var _ = this

		if (_.$slidesCache !== null) {
			_.unload()

			_.$slideTrack.children(this.options.slide).detach()

			_.$slidesCache.appendTo(_.$slideTrack)

			_.reinit()
		}
	}

	Slick.prototype.unload = function () {
		var _ = this

		$('.slick-cloned', _.$slider).remove()

		if (_.$dots) {
			_.$dots.remove()
		}

		if (_.$prevArrow && _.htmlExpr.test(_.options.prevArrow)) {
			_.$prevArrow.remove()
		}

		if (_.$nextArrow && _.htmlExpr.test(_.options.nextArrow)) {
			_.$nextArrow.remove()
		}

		_.$slides
			.removeClass('slick-slide slick-active slick-visible slick-current')
			.attr('aria-hidden', 'true')
			.css('width', '')
	}

	Slick.prototype.unslick = function (fromBreakpoint) {
		var _ = this
		_.$slider.trigger('unslick', [_, fromBreakpoint])
		_.destroy()
	}

	Slick.prototype.updateArrows = function () {
		var _ = this,
			centerOffset

		centerOffset = Math.floor(_.options.slidesToShow / 2)

		if (
			_.options.arrows === true &&
			_.slideCount > _.options.slidesToShow &&
			!_.options.infinite
		) {
			_.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false')
			_.$nextArrow.removeClass('slick-disabled').attr('aria-disabled', 'false')

			if (_.currentSlide === 0) {
				_.$prevArrow.addClass('slick-disabled').attr('aria-disabled', 'true')
				_.$nextArrow
					.removeClass('slick-disabled')
					.attr('aria-disabled', 'false')
			} else if (
				_.currentSlide >= _.slideCount - _.options.slidesToShow &&
				_.options.centerMode === false
			) {
				_.$nextArrow.addClass('slick-disabled').attr('aria-disabled', 'true')
				_.$prevArrow
					.removeClass('slick-disabled')
					.attr('aria-disabled', 'false')
			} else if (
				_.currentSlide >= _.slideCount - 1 &&
				_.options.centerMode === true
			) {
				_.$nextArrow.addClass('slick-disabled').attr('aria-disabled', 'true')
				_.$prevArrow
					.removeClass('slick-disabled')
					.attr('aria-disabled', 'false')
			}
		}
	}

	Slick.prototype.updateDots = function () {
		var _ = this

		if (_.$dots !== null) {
			_.$dots.find('li').removeClass('slick-active').attr('aria-hidden', 'true')

			_.$dots
				.find('li')
				.eq(Math.floor(_.currentSlide / _.options.slidesToScroll))
				.addClass('slick-active')
				.attr('aria-hidden', 'false')
		}
	}

	Slick.prototype.visibility = function () {
		var _ = this

		if (_.options.autoplay) {
			if (document[_.hidden]) {
				_.interrupted = true
			} else {
				_.interrupted = false
			}
		}
	}

	$.fn.slick = function () {
		var _ = this,
			opt = arguments[0],
			args = Array.prototype.slice.call(arguments, 1),
			l = _.length,
			i,
			ret
		for (i = 0; i < l; i++) {
			if (typeof opt == 'object' || typeof opt == 'undefined')
				_[i].slick = new Slick(_[i], opt)
			else ret = _[i].slick[opt].apply(_[i].slick, args)
			if (typeof ret != 'undefined') return ret
		}
		return _
	}
})

$(document).ready(function () {
	var settings = {
		infinite: true,
		speed: 500,
		autoplay: false,
		autoplaySpeed: 5000,
		swipe: true,
		arrows: false,
		cssEase: 'linear',
		slidesToShow: 1,
		slidesToScroll: 1,
	}

	// Инициализация слайдеров
	$(
		'.page-branding__slider, .page-development__slider, .page-promotion__slider'
	).slick(settings)

	// Обработчик события изменения размера окна
	$(window).on('resize', function () {
		if ($(window).width() > 640) {
			$(
				'.page-branding__slider, .page-development__slider, .page-promotion__slider'
			).slick('unslick')
			return
		}
		$(
			'.page-branding__slider, .page-development__slider, .page-promotion__slider'
		)
			.not('.slick-initialized')
			.slick(settings)
	})
})

$(document).ready(function () {
	var settings = {
		infinite: true,
		speed: 500,
		autoplay: false,
		autoplaySpeed: 5000,
		swipe: true,
		arrows: false,
		cssEase: 'linear',
		slidesToShow: 1,
		slidesToScroll: 1,
	}

	// Инициализация слайдеров
	$(' .team__slider').slick(settings)

	// Обработчик события изменения размера окна
	$(window).on('resize', function () {
		if ($(window).width() > 768) {
			$(' .team__slider').slick('unslick')
			return
		}
		$(' .team__slider').not('.slick-initialized').slick(settings)
	})
})

$(document).ready(function () {
	$('.branding__slider').slick({
		infinite: true,
		speed: 500,
		autoplay: false,
		autoplaySpeed: 5000,
		swipe: true,
		arrows: true,
		cssEase: 'linear',
		slidesToShow: 2,
		slidesToScroll: 1,
		appendArrows: $('.slider__controls-btns'),
		responsive: [
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
				},
			},
		],
	})
	$('.development__slider').slick({
		infinite: true,
		speed: 500,
		autoplay: false,
		autoplaySpeed: 5000,
		swipe: true,
		arrows: true,
		cssEase: 'linear',
		slidesToShow: 2,
		slidesToScroll: 1,
		appendArrows: $('.slider__controls-btns'),
		responsive: [
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
				},
			},
		],
	})
	$('.promotion__slider').slick({
		infinite: true,
		speed: 500,
		autoplay: false,
		autoplaySpeed: 5000,
		swipe: true,
		arrows: true,
		cssEase: 'linear',
		slidesToShow: 2,
		slidesToScroll: 1,
		appendArrows: $('.slider__controls-btns'),
		responsive: [
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
				},
			},
		],
	})
	$('.sale__slider').slick({
		infinite: true,
		speed: 500,
		autoplay: false,
		autoplaySpeed: 5000,
		swipe: true,
		arrows: true,
		cssEase: 'linear',
		slidesToShow: 3,
		slidesToScroll: 1,
		appendArrows: $('.sale-slider__controls-btns'),
		responsive: [
			{
				breakpoint: 900,
				settings: {
					slidesToShow: 2,
				},
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
				},
			},
		],
	})
	$('.reviews__slider').slick({
		infinite: true,
		speed: 2000,
		autoplay: true,
		autoplaySpeed: 0,
		swipe: true,
		arrows: true,
		pauseOnHover: false,
		cssEase: 'linear',
		slidesToShow: 5,
		slidesToScroll: 1,
		appendArrows: $('.reviews-slider__controls-btns'),
		responsive: [
			{
				breakpoint: 1500,
				settings: {
					slidesToShow: 4,
				},
			},
			{
				breakpoint: 1100,
				settings: {
					slidesToShow: 3,
				},
			},
			{
				breakpoint: 900,
				settings: {
					slidesToShow: 2,
				},
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
				},
			},
		],
	})
	$('.instrument__slider').slick({
		slidesToShow: 5,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 0,
		speed: 2000,
		cssEase: 'linear',
		infinite: true,
		arrows: false,
		centerMode: true,
		centerPadding: '15',
		pauseOnHover: false,
		rows: 2,
		responsive: [
			{
				breakpoint: 1100,
				settings: {
					slidesToShow: 4,
				},
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 3,
				},
			},
		],
	})
	$('.result__slider').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 0,
		speed: 2000,
		cssEase: 'linear',
		infinite: true,
		arrows: false,
		centerMode: true,
		centerPadding: '20',
		pauseOnHover: false,
		rows: 2,
		responsive: [
			{
				breakpoint: 1100,
				settings: {
					slidesToShow: 2,
				},
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
				},
			},
		],
	})
	$('.services__slider1').slick({
		slidesToShow: 2,
		slidesToScroll: 2,
		autoplay: true,
		autoplaySpeed: 0,
		speed: 5000,
		cssEase: 'linear',
		vertical: true, // Вертикальная ориентация для первого слайдера
		verticalSwiping: true,
		infinite: true,
		arrows: false,
		centerMode: true,
		centerPadding: '0',
		pauseOnHover: false,
		verticalReverse: true,
	})

	$('.services__slider2').slick({
		slidesToShow: 2,
		slidesToScroll: 2,
		autoplay: true,
		autoplaySpeed: 0,
		speed: 5000,
		cssEase: 'linear',
		vertical: true, // Вертикальная ориентация для второго слайдера
		verticalSwiping: false,
		infinite: true,
		arrows: false,
		centerMode: true,
		centerPadding: '0',
		pauseOnHover: false, // Прокрутка не останавливается при наведении
	})
})

$(document).ready(function () {
	// Проверяем поддержку формата WebP
	function supportsWebP() {
		var elem = document.createElement('canvas')

		if (!!(elem.getContext && elem.getContext('2d'))) {
			// Was able or not to get WebP representation
			return elem.toDataURL('image/webp').indexOf('data:image/webp') == 0
		}

		// Very old browser like IE 8, canvas not supported
		return false
	}

	// Проверяем поддержку формата AVIF
	function supportsAvif() {
		var elem = document.createElement('canvas')

		if (!!(elem.getContext && elem.getContext('2d'))) {
			// Was able or not to get AVIF representation
			return elem.toDataURL('image/avif').indexOf('data:image/avif') == 0
		}

		// Very old browser like IE 8, canvas not supported
		return false
	}

	// Добавляем классы в зависимости от поддержки форматов
	if (supportsWebP()) {
		$('body').addClass('webp')
	}

	if (supportsAvif()) {
		$('body').addClass('avif')
	}
})

/* End */
;; /* /bitrix/templates/atib/libs/jquery/jquery-3.7.1.min.js?1710768558138292*/
; /* /bitrix/templates/atib/libs/Inputmask-5.x/dist/jquery.inputmask.min.js?1710506427115739*/
; /* /bitrix/templates/atib/libs/jquery-ui/jquery-ui.min.js?171050645222092*/
; /* /bitrix/templates/atib/libs/jquery-ui-touch-punch/jquery.ui.touch-punch.min.js?17105064571090*/
; /* /bitrix/templates/atib/libs/flowbite/flowbite.min.js?171076720178771*/
; /* /bitrix/templates/atib/libs/slick/slick.min.js?171050647142863*/
; /* /bitrix/templates/atib/scripts.js?171990861181729*/

//# sourceMappingURL=template_a506a7dd48d3bb0632b3f09054c25888.map.js