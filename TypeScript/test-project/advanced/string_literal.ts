
let printf = (str: string): void => console.log(str);

type modes = 'osu' | 'mania' | 'taiko' | 'fruits' ; 

function printGameMode(mode: modes){
    printf(`Mode: ${mode}`);
}

printGameMode('osu');
printGameMode('mania');
printGameMode('taiko');
printGameMode('fruits');
