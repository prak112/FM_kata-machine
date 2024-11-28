type Node<T> = {
    value?: T,
    next?: Node<T>,
}

/**
 * Based on FIFO principle, 
 * enqueue-adds from behind (tail),
 * dequeue-removes from front (head),
 * peek-finds value of the front node (head),
 */
export default class Queue<T> {
    public length: number;
    private head?: Node<T>;
    private tail?: Node<T>;

    constructor() {
        this.length = 0;
        this.head = this.tail = undefined
    }

    enqueue(item: T): void {
        const node = {value: item} as Node<T>
        this.length++;

        if(!this.tail){
            this.tail = this.head = node;
            return; 
        }

        this.tail.next = node;  // update prev node
        this.tail = node;   // update tail
    }

    deque(): T | undefined {
        if(!this.head){
            return undefined    
        }

        this.length--;
        const head = this.head;     // save prev head
        this.head = head?.next;     // update head

        if(this.length === 1){
            this.tail = this.head
        }
        else if(this.length === 0){
            this.tail = this.head = undefined
        }

        return head?.value
    }
    
    peek(): T | undefined {
        return this.head?.value;
    }
}