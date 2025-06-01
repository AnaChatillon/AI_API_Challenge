function showAnswer(response) {
  alert(response.data.answer);
}

let apiKey = "be22fb4bc4c7fb43oa29a90de3d443t3";
let context = "be polite and provide a very short answer";
let prompt = "who was the first female president ever";
let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

axios.get(apiUrl).then(showAnswer);
