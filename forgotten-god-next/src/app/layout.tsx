
import BasePageLayout from '@/components/Layout/BasePageLayout'
import './globals.css'
import { Providers } from './providers'
import StyledComponentsRegistry from './stylesheet'

export const metadata = {
  title: 'Forgotten God',
  description: 'Generated by create next app',
}


export default function RootLayout({children,}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <StyledComponentsRegistry>
            {/* @ts-expect-error Async Server Component */}
            <BasePageLayout>
              {children}
            </BasePageLayout>
          </StyledComponentsRegistry>
        </Providers>
      </body>
    </html>
  )
}
