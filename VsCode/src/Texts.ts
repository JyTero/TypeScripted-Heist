export type TextEntry = {
    text: string;
    tag: 'Intro' | '' | '';
  };
  
export const Texts = {
    WelcomeMessage: {
      text: "Welcome to the game!",
      tag: "Intro",
    },
    BrokeWindowMessage: {
      text: "You broke the window.",
      tag: "Event_BrokenWindow",
    },
    FoundKeyMessage: {
      text: "You found a hidden key.",
      tag: "Event_HiddenKey",
    },
  } as const;
  
  