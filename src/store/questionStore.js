import { makeAutoObservable } from 'mobx';
import { enableStaticRendering } from 'mobx-react-lite';

enableStaticRendering(false);

class QuestionStore {
  selectedQuestions = [];

  constructor() {
    makeAutoObservable(this);
    if (typeof window !== 'undefined') {
      const storedQuestions = sessionStorage.getItem('selectedQuestions');
      this.selectedQuestions = storedQuestions ? JSON.parse(storedQuestions) : [];
    }
  }

  toggleQuestion(id) {
    if (this.selectedQuestions.includes(id)) {
      this.selectedQuestions = this.selectedQuestions.filter((qId) => qId !== id);
    } else {
      this.selectedQuestions = [...this.selectedQuestions, id];
    }
    sessionStorage.setItem('selectedQuestions', JSON.stringify(this.selectedQuestions));
  }
}

const questionStore = new QuestionStore();
export default questionStore;
