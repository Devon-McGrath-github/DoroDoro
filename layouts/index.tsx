import React, { ReactNode } from 'react'
import { Inter, Roboto_Mono } from 'next/font/google'
import { getRGBColor, getAccessibleColor } from '../utils/index'
import { useStore } from '@/store/Timer'
import Head from 'next/head'

interface LayoutProviderProps {
	children: ReactNode
}

// Fonts:
const inter = Inter({
	subsets: ['latin'],
	variable: '--font-inter',
})
const roboto_mono = Roboto_Mono({
	subsets: ['latin'],
	variable: '--font-roboto-mono',
})

const Layout = ({ children }: LayoutProviderProps) => {
	const [color] = useStore((s) => [s.color])

	const primaryColor = getRGBColor(color, 'primary')
	const a11yColor = getRGBColor(getAccessibleColor(color), 'a11y')

	return (
		<>
			<Head>
				<style>:root {`{${primaryColor} ${a11yColor}}`}</style>
			</Head>
			<div className={`min-h-screen ${roboto_mono.variable} ${inter.variable}`}>
				{children}
			</div>
		</>
	)
}

export default Layout
