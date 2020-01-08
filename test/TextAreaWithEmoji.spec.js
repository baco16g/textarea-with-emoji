import Vue from 'vue'
import { mount } from '@vue/test-utils'
import TextAreaWithEmoji from '@/components/TextAreaWithEmoji.vue'

describe('TextAreaWithEmoji', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(TextAreaWithEmoji)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  test('insert the emoji when click a emoji in Emoji Picker', (done) => {
    const wrapper = mount(TextAreaWithEmoji, {
      data: () => ({
        value: 'ABC'
      })
    })
    const textarea = wrapper.find('textarea')
    const emoji = wrapper.find('.emoji')

    emoji.trigger('click')
    textarea.element.setSelectionRange(1, 2)

    Vue.nextTick().then(() => {
      expect(textarea.element.value).toBe('A😀BC')
      done()
    })
  })
})
