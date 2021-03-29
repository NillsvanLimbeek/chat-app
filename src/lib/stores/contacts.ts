import { writable } from 'svelte/store';

import type { Contact } from '../types';

function setContacts() {
    const contacts: Contact[] = JSON.parse(localStorage.getItem('contacts'));
    return contacts;
}

export const contacts = writable<Contact[]>(setContacts());
