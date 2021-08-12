import { Utilities } from './Utilities';
const log = Utilities.HtmlAddItem;

type ObjectOne = {
  one: string;
  two?: string;
};

function GetObjectOne(): Promise<ObjectOne> {
  return new Promise((resolve, reject) => {
    resolve({ one: 'one' });
  });
}

function GetObjectTwo(object: ObjectOne): Promise<ObjectOne> {
  return new Promise((resolve, reject) => {
    object.two = 'two';
    resolve(object);
  });
}

function GetObjectOneTwoNew(): Promise<ObjectOne> {
  return new Promise((resolve, reject) => {
    GetObjectOne().then(value => {
      GetObjectTwo(value).then(value => {
        resolve(value);
      });
    });
  });
}

function GetObjectOneTwo(): Promise<ObjectOne> {
  return GetObjectOne().then(value => {
    return GetObjectTwo(value).then(value => {
      return value;
    });
  });
}

export function PromisePlayground() {
  GetObjectOne().then(value => log({ log: 2, value: value }));

  GetObjectOne().then(value => {
    GetObjectTwo(value).then(value => {
      log({ log: 3, value: value });
    });
  });

  GetObjectOneTwoNew().then(value => log({ log: 4, value: value }));

  GetObjectOneTwo().then(value => log({ log: 5, value: value }));
}
