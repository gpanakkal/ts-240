interface Author {
  firstName: string;
  lastName: string;
}


interface Book {
  title: string;
  author: Author;
  publicationDate: number;
  genres: string[];
}

interface UserInfo {
  name: string;
  email?: string;
  age?: number;
}

function displayUserInfo(userInfo: UserInfo): string {
  return `Name: ${userInfo.name}, email: ${userInfo.email ?? 'N/A'}, age: ${userInfo.age ?? 'unknown'}`;
}

interface Point {
  readonly x: number;
  readonly y: number;
}

function movePoint(point: Point, dx: number, dy: number): Point {
  return { x: point.x + dx, y: point.y + dy };
}

interface Movable {
  speed: number;
  move(): void;
}

class Car implements Movable {
  speed: number;

  constructor(speed) {
    this.speed = speed;
  }

  move() {
    console.log('Moving');
  }
}