import NavBar from '@/views/navBar/NavBar'
import './globals.css'
import Provider from './Provider'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <Provider>
        <NavBar></NavBar>
        {children}
        </Provider>
        </body>
    </html>
  )
}
