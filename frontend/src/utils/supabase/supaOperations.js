import supabase from "./supabase.js";


export async function getChatBoxes(currUser){
    const orStr = `user_1.eq.${currUser},user_2.eq.${currUser}`;
    const {data, error} = await supabase
                            .from('chat_box')
                            .select()
                            .or(orStr)
                            .order('created_at', { ascending: false });

    if(data){
        return data;
    } 
    if(error) console.log(error);
}

export async function getChat(chatBoxId){
    const {data, error} = await supabase
                            .from('messages')
                            .select()
                            .eq('chat_box_id', chatBoxId)
                            .order('created_at', { ascending: false });

    if(data){
        return data;
    } 
    if(error) console.log(error);
}

export async function sendMsg(chatBoxId, senderId, receverId, msg){
    const {data, error} = await supabase
                            .from('chat_box')
                            .select()
                            .eq('chat_box_id', chatBoxId)
                            
    if(data){
        await createMsg(chatBoxId, senderId, receverId, msg)
    }
    else
    if(error){
        await createChatBox(senderId, receverId, msg);
    }
}

async function createMsg(chatBoxId, senderId, receverId, msg){

    
    
const { error } = await supabase
                    .from('messages')
                    .insert({ 
                        chat_box_id: chatBoxId,
                        content: msg,
                        sender_id: senderId,
                        recever_id: receverId,
                        is_seen: false,
                     })
    if(error){
        console.log(error)
        
    }
    else{
        
    }
}

async function createChatBox(senderId, receverId, msg){
    
const { data,error } = await supabase
                    .from('chat_box')
                    .insert({ 
                        last_msg: msg,
                        user_1: senderId,
                        user_2: receverId,
                     })
                     .select()
    
    if(data){ 
      const res = await createMsg(data[0].chat_box_id,senderId, receverId, msg)
      if(res) console.log(error);
    }
    if(error) console.log(error);
}

