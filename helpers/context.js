import { createContext, useState } from 'react'

const ReplyContext = createContext({
    openReplies: [],
    addReply: (comID) => {},
    removeReply: (comID) => {},
})

//context setup includes an array of "open" replies, indicating a
//reply section should render direclty below it
//then two functions - one to add and one to remove from said array

export const ReplyContextProvider = (props) => {
    const [replies, setReplies] = useState([])

    const addReply = (comID) => {
        setReplies([...replies, comID])
    }

    const removeReply = (comID) => {
        const newReplies = replies.filter((id) => id !== comID)

        setReplies(newReplies)
    }

    const context = {
        openReplies: replies,
        addReply: addReply,
        removeReply: removeReply
    }

    return (
        <ReplyContext.Provider value={context}>
            {props.children}
        </ReplyContext.Provider>
    )
}

export default ReplyContext