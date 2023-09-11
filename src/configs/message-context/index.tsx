import { createContext, FC, PropsWithChildren, useContext } from "react"
import { message as Message } from "antd"
import { useMediaQuery } from "react-responsive"
import { MessageInstance } from "antd/es/message/interface"

const MessageContext = createContext<MessageInstance>({} as MessageInstance)

export const useMessage = () => useContext(MessageContext)
const MessageProvider: FC<PropsWithChildren> = ({ children }) => {
  const [message, AntdMessageContext] = Message.useMessage()

  return (
    <MessageContext.Provider value={message}>
      {AntdMessageContext}
      {children}
    </MessageContext.Provider>
  )
}

export default MessageProvider
