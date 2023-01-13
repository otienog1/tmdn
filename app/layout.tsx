import '../styles/globals.css'
import Header from './Header'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <head />
      <body className="font-poppins text-txt bg-body flex flex-col min-h-screen">
        <Header />
        <main className='flex-1 flex-col mt-14 flex'>
          {children}
        </main>
      </body>
    </html>
  )
}
