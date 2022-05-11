interface Readable {
  read(): string;
}

interface Writable extends Readable {
  write(str: string): string;
}

class Book implements Writable{
  data: string;

  write(str:string): any{
    this.data=str;
  }

  read():string{
    return this.data;
  }
}

var b1 = new Book();
b1.write("Alchemist");
console.log(b1.read());