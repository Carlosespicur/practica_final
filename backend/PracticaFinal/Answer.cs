namespace PracticaFinal
{
    public class Answer
    {
        public int Id { get; set; }
        public int QuestionId { get; set; }
        public string Text { get; set; }
        public bool IsCorrect { get; set; }

        public Answer(int questionId, string text, bool isCorrect, int id = 0)
        {
            this.Id = id;
            this.QuestionId = questionId;
            this.Text = text;
            this.IsCorrect = isCorrect;

        }
    }
}
