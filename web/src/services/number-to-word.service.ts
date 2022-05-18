import api from "./api"

const endpoint = '/number-to-word/';

const NumberToWordService = {
  convertToWord: (sequence: string) => {
    return api.get(`${endpoint}${sequence}`)
  }
}

export default NumberToWordService;
