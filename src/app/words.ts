
export interface IWord {
    colour: string;
    word: string;
}

export class Words {
    static allWords: IWord[] = [
        { "colour": "red", "word": "no" },
        { "colour": "red", "word": "yes" },
        { "colour": "blue", "word": "hi" },
        { "colour": "blue", "word": "yo" },
        { "colour": "blue", "word": "to" }
    ]
}