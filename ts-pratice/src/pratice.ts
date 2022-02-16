type Person = {
    name: string;
    age?: number; // ? 는 설정을 하거나 하지 않거나를 해도되는다는 것
};

type Developer = Person & { // & 는 Intersection 으로서 두개 이상의 타입들을 합쳐준다
    skills: string[];
};

const person: Person = {
    name: '이름'
};

const expert: Developer = {
    name: '아름',
    skills: ['javascript', 'react']
};

type People = Person[]; // Person[]을 People 타입으로 사용 할 수 있다
const people: People = [person, expert];

type Color = 'red' | 'orange' | 'yellow';
const color: Color = 'red';
const colors: Color[] = ['red', 'orange'];