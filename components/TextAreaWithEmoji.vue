<template>
  <div class="w-full max-w-xl">
    <h1 class="text-gray-700 text-3xl font-bold text-center mb-4">
      TextArea with EmojiPicker
    </h1>
    <form
      @submit.prevent
      class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
    >
      <div class="mb-4">
        <textarea
          ref="textarea"
          :value="value"
          @input="handleInputText"
          rows="5"
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div class="flex justify-center">
        <VEmojiPicker @select="selectEmoji" />
      </div>
    </form>
  </div>
</template>

<script>
import VEmojiPicker from 'v-emoji-picker'
import emoji from 'node-emoji'

export default {
  name: 'TextAreaWithEmoji',
  components: {
    VEmojiPicker
  },
  data() {
    return {
      value: ''
    }
  },
  methods: {
    selectEmoji(emoji) {
      this.insertText(emoji.data)
    },
    handleInputText(event) {
      this.value = emoji.emojify(event.target.value)
    },
    insertText(word) {
      const target = this.$refs.textarea
      const { selectionStart: start } = target
      this.value =
        this.value.slice(0, start) + word + this.value.substring(start)
      this.$nextTick(() => {
        const caretPos = start + word.length
        target.focus()
        target.setSelectionRange(caretPos, caretPos)
      })
    }
  }
}
</script>

<style></style>
