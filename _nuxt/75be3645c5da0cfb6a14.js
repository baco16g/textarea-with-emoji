(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{155:function(t,e,n){"use strict";n.r(e);var l=n(150),o=n.n(l),r=n(151),c=n.n(r),h={name:"TextAreaWithEmoji",components:{VEmojiPicker:o.a},data:function(){return{value:""}},methods:{selectEmoji:function(t){this.insertText(t.data)},handleInputText:function(t){this.value=c.a.emojify(t.target.value)},insertText:function(t){var e=this.$refs.textarea,n=e.selectionStart;this.value=this.value.slice(0,n)+t+this.value.substring(n),this.$nextTick((function(){var l=n+t.length;e.focus(),e.setSelectionRange(l,l)}))}}},f=n(22),m={components:{TextAreaWithEmoji:Object(f.a)(h,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"w-full max-w-xl"},[e("h1",{staticClass:"text-gray-700 text-3xl font-bold text-center mb-4"},[this._v("\n    TextArea with EmojiPicker\n  ")]),this._v(" "),e("form",{staticClass:"bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4",on:{submit:function(t){t.preventDefault()}}},[e("div",{staticClass:"mb-4"},[e("textarea",{ref:"textarea",staticClass:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",attrs:{rows:"5"},domProps:{value:this.value},on:{input:this.handleInputText}})]),this._v(" "),e("div",{staticClass:"flex justify-center"},[e("VEmojiPicker",{on:{select:this.selectEmoji}})],1)])])}),[],!1,null,null,null).exports}},x=Object(f.a)(m,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"min-h-screen bg-gray-200 flex justify-center items-center"},[e("TextAreaWithEmoji")],1)}),[],!1,null,null,null);e.default=x.exports}}]);