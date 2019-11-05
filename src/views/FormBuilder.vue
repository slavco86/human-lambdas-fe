<template>
  <v-container>
    <v-row justify="center">
      <h2>Form Builder</h2>
    </v-row>
    <v-row>
      <v-col>
        <v-form>
          <v-sheet v-for="(question, index) in questions" :key="index"
                  :class="['pa-12', {
                    'mb-12': index < questions.length - 1
                  }]"
                  width="100%">
            <v-btn
                    @click="removeQuestion(index)"
                    class="float-right mt-n12 mr-n12"
                    icon
                    v-if="index">
              <v-icon>mdi-close</v-icon>
            </v-btn>
            <fieldset>
              <v-text-field
                      label="Question"
                      outlined
                      v-model="question.title"/>
              <v-select
                      :items="questionTypes"
                      label="Answer Type"
                      outlined
                      placeholder="Choose one..."
                      v-model="question.type"/>
              <v-combobox
                      :items="question.answers"
                      outlined
                      multiple
                      chips
                      deletable-chips
                      label="Possible answers"
                      v-model="question.answers"
                      v-if="question.type === 'choice'"/>
            </fieldset>
            <div v-if="question.title || question.type === 'text' || question.answers.length">
              <v-divider class="mb-5"></v-divider>
              <span class="caption">{{`Question No.${index + 1}`}}</span>
              <h3 class="mb-5">{{question.title}}</h3>
              <v-text-field v-if="question.type === 'text'"
                            outlined
                            readonly
                            placeholder="Provide your answer (disabled)"/>
              <v-radio-group v-if="question.type === 'choice'"
                             :column="false">
                <v-radio v-for="(answer, index) in question.answers"
                         :key="index"
                         :label="answer"/>
              </v-radio-group>
            </div>
          </v-sheet>
        </v-form>
        <v-btn
                @click="addQuestion"
                class="float-right mt-n7 mr-n7"
                fab>
          <v-icon>mdi-plus</v-icon>
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  function makeEmptyQuestion() {
    return {
      title: '',
      type: '',
      answers: [],
    }
  }

  export default {
    name: 'formBuilder',
    data: () => ({
      questions: [makeEmptyQuestion()],
      questionTypes: ['text', 'choice']
    }),
    methods: {
      addQuestion() {
        this.questions.push(makeEmptyQuestion())
      },
      removeQuestion(index) {
        this.questions.splice(index, 1)
      },
    }
  }
</script>

<style scoped>
    fieldset {
      border: none;
    }

</style>