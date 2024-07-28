import { useCurrUserDtl } from "../../context/chatContext.js";
import supabase from "./supabase.js";

export async function getChatBoxes(currUser) {
  const orStr = `user_1.eq.${currUser},user_2.eq.${currUser}`;
  try{
  const { data, error } = await supabase
    .from("chat_box")
    .select()
    .or(orStr)
    .order("created_at", { ascending: false });

  if (data.length != 0) {
    console.log('chatBox' ,data);
    return data;
  }
  return [];
}
catch(error){
  console.log(error);
}
}

export async function getChat(chatBoxId) {
  const { data, error } = await supabase
    .from("messages")
    .select()
    .eq("chat_box_id", chatBoxId)
    .order("created_at", { ascending: false });

  if (data) {
    return data;
  }
  if (error) console.log(error);
}

export async function sendMsg(chatBoxId, senderId, receverId, msg) {
  const { data, error } = await supabase
    .from("chat_box")
    .select()
    .eq("chat_box_id", chatBoxId);

  if (data) {
    await createMsg(chatBoxId, senderId, receverId, msg);
  } else if (error) {
    const chatBox = await createChatBox(senderId, receverId);
    await createMsg(chatBox[0].id, senderId, receverId, msg);
  }
}

async function createMsg(chatBoxId, senderId, receverId, msg) {
  const { error } = await supabase.from("messages").insert({
    chat_box_id: chatBoxId,
    content: msg,
    sender_id: senderId,
    recever_id: receverId,
    is_seen: false,
  });
  if (error) {
    console.log(error);
  } else {
  }
}

export async function createChatBox(senderId, receverId) {
  try {
    const { data, error } = await supabase
      .from("chat_box")
      .insert({
        user_1: senderId,
        user_2: receverId,
      })
      .select();
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function createNewChatBox(senderId, receverId) {
  try {
    const orStr = `user_1.eq.${senderId},user_2.eq.${receverId}`;
    const { data, error } = await supabase
      .from("chat_box")
      .select()
      .or(orStr)
      .order("created_at", { ascending: false });

    if (data.length != 0) {
      return;
    } else {
      const { data, error } = await supabase
        .from("chat_box")
        .insert({
          user_1: senderId,
          user_2: receverId,
        })
        return;
    }
  } catch (error) {
    console.log(error);
  }
}

export async function markAsSeen(chatBoxDtl) {
  try {
    const { data, error } = await supabase
      .from("messages")
      .update({ is_seen: true })
      .eq("chat_box_id", chatBoxDtl.chatBoxId)
      .eq("is_seen", false);
  } catch (error) {
    console.error("Error marking messages as seen:", error);
    return { success: false, error };
  }
}
