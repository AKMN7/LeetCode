class MyHashMap {
    constructor() {
        this.data = new Array(1000001);
    }

    put(key, val) {
        this.data[key] = val;
    }

    get(key) {
        return this.data[key] ? this.data[key] : -1;
    }

    remove(key) {
        delete this.data[key];
    }

    print() {
        console.log('--- HASH MAP ---\n', this.data);
    }
}


let test = new MyHashMap();

test.put('Anas', 1);
test.put('Ahmad', 'King');
test.put('Messi', 'Goat');
test.put('Barca', 'Top');
test.remove('Barca');
console.log(test.get('Anas'));
test.print();