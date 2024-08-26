const randomQuestion = () => {
    const questions = [
        {
            English: "Working at Andeo is a great experience!",
            German: "Bei Andeo zu arbeiten ist eine großartige",
            Answer: "Erfahrung"
        },
        {
            English: "The cake is a lie.",
            German: "Der Kuchen ist eine",
            Answer: "Lüge"
        },
        {
            English: "She has a beautiful voice.",
            German: "Sie hat eine schöne",
            Answer: "Stimme"
        },
        {
            English: "This is my favorite book.",
            German: "Das ist mein lieblings",
            Answer: "Buch"
        },
        {
            English: "He is reading the newspaper.",
            German: "Er liest die",
            Answer: "Zeitung"
        },
        {
            English: "I need a cup of coffee.",
            German: "Ich brauche eine Tasse",
            Answer: "Kaffee"
        },
        {
            English: "The weather today is wonderful.",
            German: "Das Wetter heute ist",
            Answer: "wunderbar"
        },
        {
            English: "She is my best friend.",
            German: "Sie ist meine beste",
            Answer: "Freundin"
        },
        {
            English: "The car is very fast.",
            German: "Das Auto ist sehr",
            Answer: "schnell"
        },
        {
            English: "This is a difficult problem.",
            German: "Das ist ein schwieriges",
            Answer: "Problem"
        }
    ];
    return questions[Math.floor(Math.random() * questions.length)];
};

export default randomQuestion;
