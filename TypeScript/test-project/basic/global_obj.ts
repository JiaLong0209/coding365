interface Math{
	pow(x: number, y: number): number;
}

interface Document extends Node, GlobalEventHandlers, DocumentEventMap {
    addEventListener(type: string, listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
}

console.log(Math.pow(10, 2))


