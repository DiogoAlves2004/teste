import './globals.css'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.jsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
      

      <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-5HDGPBQ"
            height="0"
            width="0"
          ></iframe>
        </noscript>

      {children}
      
      </body>
    </html>
  )
}
