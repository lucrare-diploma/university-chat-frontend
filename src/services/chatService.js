import { db } from "../firebase"; // Conexiune Firebase/Supabase

export const sendMessage = async (message, user, groupId) => {
  await db.collection("messages").add({
    text: message,
    sender: user.id,
    groupId,
    timestamp: new Date(),
  });
};

export const getMessages = async (groupId) => {
  const messages = await db.collection("messages").where("groupId", "==", groupId).orderBy("timestamp", "asc").get();
  return messages.docs.map(doc => doc.data());
};
