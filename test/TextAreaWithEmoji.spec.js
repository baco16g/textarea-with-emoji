import Vue from 'vue'
import { mount } from '@vue/test-utils'
import TextAreaWithEmoji from '@/components/TextAreaWithEmoji.vue'

describe('TextAreaWithEmoji', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(TextAreaWithEmoji)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  test('insert the emoji when click a emoji in Emoji Picker', (done) => {
    const wrapper = mount(TextAreaWithEmoji)
    const emoji = wrapper.find('.emoji')
    wrapper.setData({ value: 'ABC' })
    emoji.trigger('click')
    Vue.nextTick().then(() => {
      expect(wrapper.vm.value).toBe('😀ABC')
      done()
    })
  })
})
