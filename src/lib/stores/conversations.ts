import { writable } from 'svelte/store';

import type { Conversation, Contact } from './../types';
import { checkRecipients } from './../utils';

interface State {
    conversations: Conversation[];
    selectedConversationIndex: number;
    selectedConversation: Conversation | null;
    id: string | null;
}

interface IncomingMessage {
    recipients: Contact[];
    text: string;
    sender: string;
}

const store = () => {
    const state: State = {
        conversations: [],
        selectedConversationIndex: 0,
        selectedConversation: { recipients: [], messages: [] },
        id: null,
    };

    const { set, subscribe, update } = writable(state);

    const methods = {
        init() {
            const conversations: Conversation[] = JSON.parse(
                localStorage.getItem('conversations')
            );

            const id = localStorage.getItem('chat-app-id');

            update((state) => {
                state.conversations = conversations;
                state.selectedConversationIndex = 0;
                state.selectedConversation = state.conversations[0];
                state.id = id;

                return state;
            });
        },

        setSelectedConversation(index: number) {
            update((state) => {
                state.selectedConversationIndex = index;
                state.selectedConversation = state.conversations[index];

                return state;
            });
        },

        addMessageToConversation({
            recipients,
            sender,
            text,
        }: IncomingMessage) {
            let madeChange = false;
            const newMessage = { sender, text };

            // find and update the conversation
            const newConversation = state.conversations.map((conversation) => {
                if (checkRecipients(conversation.recipients, recipients)) {
                    madeChange = true;
                    return {
                        ...conversation,
                        messages: [...conversation.messages, newMessage],
                    } as Conversation;
                }

                return conversation;
            });

            if (madeChange) {
                update((state) => {
                    state.conversations = [...newConversation];
                    state.selectedConversation =
                        state.conversations[state.selectedConversationIndex];

                    return state;
                });
            }
        },
    };

    return {
        subscribe,
        set,
        update,
        ...methods,
    };
};

export default store();
