import type { Contact } from './../types/Contact';

export function checkRecipients(a: Contact[], b: Contact[]) {
    if (a.length !== b.length) return false;

    a.sort();
    b.sort();

    return a.every((element, index) => {
        return element.id === b[index].id;
    });
}
