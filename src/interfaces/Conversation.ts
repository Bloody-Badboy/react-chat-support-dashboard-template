export interface Conversation {
  id: string;
  title: string;
  sender: string;
  isResolved: boolean;
  lastMessage: string;
  isSelected: boolean;
}
