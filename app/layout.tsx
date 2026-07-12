import type { Metadata, Viewport } from 'next';
import './globals.css';
export const metadata: Metadata={title:'北海道親子旅行助手',description:'2026/8/12–8/18 北海道親子自駕旅行',manifest:'/manifest.webmanifest',appleWebApp:{capable:true,statusBarStyle:'black-translucent',title:'北海道旅行'},icons:{icon:'/icon.svg',apple:'/icon.svg'}};
export const viewport: Viewport={width:'device-width',initialScale:1,maximumScale:1,viewportFit:'cover',themeColor:'#2f7184'};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="zh-Hant"><body>{children}</body></html>}
