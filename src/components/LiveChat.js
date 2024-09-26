import React, { useEffect, useState } from 'react'
import ChatMessage from './ChatMessage';
import { useDispatch, useSelector } from 'react-redux';
import { addMessage } from '../utils/ChatSlice';
import { generateRandomName, makeRandomMessage } from '../utils/helper';



const LiveChat = () => {


    const [liveMessage, setLiveMessage] = useState('')

    const dispatch = useDispatch();

    const chatMessages = useSelector(store => store.chat.messages);



    useEffect(() => {

        const i = setInterval(() => {

            dispatch(addMessage({

                name: generateRandomName(),
                message: makeRandomMessage(20),
            }));

        }, 2000);

        return () => clearInterval(i);

    }, [])


    return (
        <>
            <div className='flex flex-col-reverse ml-5 rounded-lg w-[25vw] h-[600px] p-2 border border-slate-200 shadow-md bg-slate-100 overflow-y-scroll '>
                <div>
                    {chatMessages.map((c, i) => <ChatMessage key={i} name={c.name} message={c.message} />)}
                </div>
            </div>

            <form className='w-full p-2 ml-2 border border-black' onSubmit={(e) => {
                e.preventDefault();
                console.log("ON Form Sumbit", liveMessage)
                dispatch(addMessage({
                    name: "Atharva Shelke",
                    message: liveMessage,
                }))

                setLiveMessage("")
            }}>
                <input className='w-96 px-2' type="text" value={liveMessage} onChange={(e) => setLiveMessage(e.target.value)} />
                <button className='px-2 mx-2 bg-gray-300'>Send</button>
            </form>

        </>

    )
}

export default LiveChat
