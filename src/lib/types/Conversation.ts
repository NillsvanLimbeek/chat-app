import type { Message } from './Message';
import type { Contact } from './Contact';

export interface Conversation {
    recipients: Contact[];
    messages: Message[];
}
