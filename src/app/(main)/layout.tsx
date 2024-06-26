import Footer from '@/components/layout/footer'
import MobileNav from '@/components/layout/mobile-nav'
import NavBar from '@/components/layout/nav-bar'
import SideNav from '@/components/layout/side-nav'
import { ThemeProvider } from '@/components/theme-provider'
import { cn } from '@/lib/utils'
import '@/styles/globals.css'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import type { Metadata } from 'next'
import { Inter as FontSans } from 'next/font/google'

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
})

export const metadata: Metadata = {
  title: 'Nicolis Yuvienco - Full-Stack Engineer Portfolio',
  description:
    'Nicolis Yuvienco is a Full-Stack Engineer that focuses on building exceptional websites and applications, using the latest technologies. ',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  // suppressHydrationWarning recommended with next-themes
  // https://github.com/pacocoursey/next-themes?tab=readme-ov-file#with-app
  return (
    <html lang="en" suppressHydrationWarning>
      <SpeedInsights />
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          fontSans.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <header>
            <NavBar displayClass="hidden md:block" />
            <MobileNav displayClass="md:hidden" />
          </header>
          <main className="container mb-10 mt-20">{children}</main>
          <aside>
            <SideNav />
          </aside>
          <footer className="mb-6">
            <Footer />
          </footer>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
