import type { Contact } from './../types/Contact';

export function parseRecipients(recipients: Contact[]) {
    return recipients.map((rec) => rec.name).join(', ');
}
