import '../style.scss';

function main() {
    const input: string  = (window as any).input;
    
    if (!input) {
        return;
    }
    let split = input.split(/\s+/).filter(el => el && !(/(^#)/.test(el)));
    split = split.map(el => el.split(/[\+\-]/)[0]);
    split.reduce<[string?, string?][]>((acc, note) => {
        let tempSplit = note.split('=');
        tempSplit = tempSplit;
        return acc;
    }, [[]]);
    console.log(split);
}
main();