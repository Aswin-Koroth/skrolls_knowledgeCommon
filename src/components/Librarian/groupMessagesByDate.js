// utils/groupMessagesByDate.js

export const groupMessagesByDate = (messages) => {
  const today = new Date();
  const yesterday = new Date(today);
  yesterday.setDate(today.getDate() - 1);

  const formatDate = (date) => {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  return messages.reduce((groups, message) => {
    const messageDate = new Date(message.createdAt);
    let dateKey = formatDate(messageDate);

    if (messageDate.toDateString() === today.toDateString()) {
      dateKey = 'Today';
    } else if (messageDate.toDateString() === yesterday.toDateString()) {
      dateKey = 'Yesterday';
    }

    if (!groups[dateKey]) {
      groups[dateKey] = [];
    }
    groups[dateKey].push(message);
    return groups;
  }, {});
};
