import { createContext, FC, PropsWithChildren, useContext } from "react"
import { notification as Notification } from "antd"
import { NotificationInstance } from "antd/es/notification/interface"
import { useMediaQuery } from "react-responsive"

const NotificationContext = createContext<NotificationInstance>({} as NotificationInstance)

export const useNotification = () => useContext(NotificationContext)
const NotificationProvider: FC<PropsWithChildren> = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 767 })
  const [notification, AntdNotificationContext] = Notification.useNotification({
    placement: isMobile ? "top" : "topRight"
  })

  return (
    <NotificationContext.Provider value={notification}>
      {AntdNotificationContext}
      {children}
    </NotificationContext.Provider>
  )
}

export default NotificationProvider
