export interface INote {
    title: string;
    content: string;
    date: Date;
    folder: string;
}

export interface ITask {
    isCompleted: boolean;
    title: string;
    text: string;
    style: object;
    firsSubTaskColor: string;
    secondSubTaskColor: string;
    taskCardColor: string;
    folder: string;
    time: string;
    cardBordersColor: string;
    cardShadowColor: string;
}
